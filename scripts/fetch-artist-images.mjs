import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");

// Load .env from project root so SPOTIFY_* are available
dotenv.config({ path: path.join(ROOT_DIR, ".env") });
const PUBLIC_ARTISTS_DIR = path.join(ROOT_DIR, "public", "artists");
const TREE_DATA_PATH = path.join(ROOT_DIR, "src", "config", "treeData.ts");
const ARTIST_IMAGES_OUT = path.join(
  ROOT_DIR,
  "src",
  "config",
  "artistImages.ts"
);

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
  console.error(
    "[fetch-artist-images] Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in environment."
  );
  process.exit(1);
}

/**
 * Extract unique artist names from treeData.ts by scanning `name:` fields.
 * This is simple but good enough for this controlled file.
 */
function extractArtistNames(source) {
  const nameRegex = /name:\s*"([^"]+)"/g;
  const names = new Set();
  let match;
  while ((match = nameRegex.exec(source)) !== null) {
    names.add(match[1]);
  }
  return Array.from(names).sort();
}

function slugifyArtist(name) {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .concat(".jpg");
}

async function getSpotifyAccessToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const body = new URLSearchParams({ grant_type: "client_credentials" });
  const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
    "utf8"
  ).toString("base64");

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `[spotify] Failed to obtain access token: ${res.status} ${text}`
    );
  }

  const data = await res.json();
  return data.access_token;
}

async function fetchSpotifyImage(artistName, accessToken) {
  const params = new URLSearchParams({
    q: artistName,
    type: "artist",
    limit: "1",
  });
  const url = `https://api.spotify.com/v1/search?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status === 401) {
    throw new Error("[spotify] Unauthorized (401) while searching artist");
  }

  if (!res.ok) {
    throw new Error(
      `[spotify] Search failed for ${artistName}: ${
        res.status
      } ${await res.text()}`
    );
  }

  const data = await res.json();
  const items = data?.artists?.items;
  if (!Array.isArray(items) || items.length === 0) return null;

  const artist = items[0];
  const images = artist?.images;
  if (!Array.isArray(images) || images.length === 0) return null;

  // Spotify images already include various sizes; pick the largest (first)
  return images[0].url ?? null;
}

async function downloadImage(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download image ${url}: ${res.status}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  await fs.promises.writeFile(outPath, Buffer.from(arrayBuffer));
}

async function main() {
  await fs.promises.mkdir(PUBLIC_ARTISTS_DIR, { recursive: true });

  const source = await fs.promises.readFile(TREE_DATA_PATH, "utf8");
  const artistNames = extractArtistNames(source);

  console.log(`[fetch-artist-images] Found ${artistNames.length} artists.`);

  const mapping = {};

  // Get a single Spotify access token for the run
  let accessToken;
  try {
    accessToken = await getSpotifyAccessToken();
    console.log("[fetch-artist-images] Obtained Spotify access token.");
  } catch (err) {
    console.error("[fetch-artist-images] Could not get Spotify token:", err);
    process.exit(1);
  }

  for (const name of artistNames) {
    const fileName = slugifyArtist(name);
    const outPath = path.join(PUBLIC_ARTISTS_DIR, fileName);
    const publicPath = `artists/${fileName}`;

    if (fs.existsSync(outPath)) {
      console.log(`  ✓ ${name} -> ${publicPath} (cached)`);
      mapping[name] = publicPath;
      continue;
    }

    try {
      console.log(`  → Fetching image for ${name}...`);
      const imageUrl = await fetchSpotifyImage(name, accessToken);
      if (!imageUrl) {
        console.warn(`    ! No image found for ${name}`);
        continue;
      }
      await downloadImage(imageUrl, outPath);
      console.log(`    ✓ Saved to ${publicPath}`);
      mapping[name] = publicPath;
    } catch (err) {
      console.error(`    ✗ Error processing ${name}:`, err.message);
    }
  }

  // Generate artistImages.ts for use in the app
  const fileHeader = `// This file is auto-generated by scripts/fetch-artist-images.mjs\n`;
  const records = Object.entries(mapping)
    .map(([name, url]) => `  ${JSON.stringify(name)}: ${JSON.stringify(url)},`)
    .join("\n");

  const tsContent = `${fileHeader}export const artistImages: Record<string, string> = {\n${records}\n};\n`;

  await fs.promises.writeFile(ARTIST_IMAGES_OUT, tsContent, "utf8");
  console.log(
    `\n[fetch-artist-images] Wrote mapping to src/config/artistImages.ts`
  );
}

main().catch((err) => {
  console.error("[fetch-artist-images] Unhandled error:", err);
  process.exit(1);
});
