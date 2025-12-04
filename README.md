<div align="center">

# Cathedral of Universal Heartbreak

**The Universal Genealogy of Despecho**

</div>

An irreverent, lovingly over‑engineered family tree of heartbreak. At its center: **Darío Gómez**, the self‑proclaimed _Rey del Despecho_, from whom entire galaxies of cantina anthems, emo laments, pop ballads, perreo triste and salsa romántica radiate.

This project is a single‑page React + Vite app that lets you **explore the multiverse of heartbreak songs as if it were a mythological genealogy**.

> If Wikipedia had a baby with a taberna at 3 a.m., and that baby was raised by Darío Gómez, it would look something like this.

---

## Why Darío Gómez matters

- **Architect of despecho**: In Colombian popular culture, Darío Gómez is not just another singer of pain; he is treated as the **foundational architect** of modern _despecho_ — the soundtrack of broken hearts, cantinas at closing time and phone calls that should never have been made.
- **Bridge between worlds**: His songs connect rural storytelling, urban melancholy, and a very specific kind of Latin American emotional excess where suffering is both tragedy and sport.
- **Canon builder**: By the time other genres and generations arrive (pop, urbano, emo, salsa), Darío has already drawn the **blueprint**: lyrical exaggeration, melodrama turned up to 11, and the belief that you are the center of the universe because someone left you on read.

The app treats Darío as the **origin node** of the tree: from him, branches spread towards cantina/mariachi, salsa de llorar, pop anglo, perreo triste and emo/rock. It is obviously historically inaccurate, but **emotionally accurate**.

---

## Why this project exists

- **To map the emotional canon**: We wanted to see what happens if you take seriously the idea that heartbreak songs form a **genealogy of influence and shared drama**.
- **To celebrate melodrama as world‑building**: The project embraces that despecho is not a guilty pleasure; it is a **shared narrative technology** for processing loss, pride and foolish decisions.
- **To open a collaborative map**: The tree is intentionally incomplete and opinionated. You are invited to **argue with it in code**, adding your own branches, rivalries, and spiritual heirs.

---

## Tech overview

- **Frontend**: React + Vite + TypeScript.
- **Tree data**: All nodes live in `src/config/treeData.ts` with:
  - `id`, `branch`, `variant` (e.g. the "king" node for Darío),
  - `image` (local artist portrait),
  - `copy` in Spanish and English (name, title, tooltip, circle text),
  - `children`: nested descendants.
- **Visual tree**: Components in `src/components/tree/` render the cards, connector lines and hover tooltips.
- **i18n**: `src/i18n.ts` and `src/config/translations.ts` provide ES/EN text and a language switcher.
- **Artist images**: A script hits the Spotify API at build time, downloads covers into `public/artists` and generates `src/config/artistImages.ts`.

---

## Running the project locally

```bash
pnpm install
pnpm fetch-artists   # optional: refresh artist images (requires Spotify creds)
pnpm dev
```

- Build and preview production build:

```bash
pnpm build
pnpm preview
```

You need a modern Node version and `pnpm` installed globally.

---

## GitHub Pages deployment

This repo is ready to deploy via **GitHub Pages + GitHub Actions**.

1. **Set the Vite base path** (only if your repo name is different):
   - In `vite.config.ts`, set `base` to `'/your-repo-name/'`.
2. **Configure Spotify secrets** in your GitHub repository (`Settings` → `Secrets and variables` → `Actions`):
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
3. **Enable GitHub Pages**:
   - `Settings` → `Pages` → Source: **GitHub Actions**.
4. On every push to `main`, the workflow in `.github/workflows/deploy.yml` will:
   - install dependencies,
   - (optionally) refresh artist images with `pnpm fetch-artists`,
   - run `pnpm build`,
   - publish the `dist` folder to GitHub Pages.

---

## Contributing to the genealogy

Heartbreak is a team sport. Contributions are welcome.

### What a good PR looks like

- **Respect the tone**: Parodic, affectionate, and informed. We are laughing _with_ the artists, not _at_ them.
- **Keep it real**: Only add real artists; no fictional characters or private individuals.
- **Preserve the structure**: New nodes should follow the existing `TreeNode` shape and live in `src/config/treeData.ts`.
- **Think in influences**: When adding an artist, ask: _who are they emotionally descended from?_ Put them under the branch and parent that make narrative sense.
- **Bilingual copy**: Every node must have `copy.es` and `copy.en` filled in.
- **Images**: Prefer artists that exist on Spotify so the image script can find a portrait. If not, you can manually add an image to `public/artists` and map it in `src/config/artistImages.ts`.

### Adding a new artist node

1. **Edit** `src/config/treeData.ts`.
2. Locate the branch where your artist belongs (`mex`, `salsa`, `pop`, `urb`, `emo`, etc.).
3. Add a node like:

```ts
{
  id: 'bruno-mars',
  branch: 'pop',
  image: img('Bruno Mars'),
  copy: {
    es: {
      name: 'Bruno Mars',
      title: 'Baladista del arrepentimiento elegante',
      tooltip: 'Cuando el despecho se viste de traje y corbata.',
      placeholder: 'Despecho con brillo',
    },
    en: {
      name: 'Bruno Mars',
      title: 'Balladeer of classy regret',
      tooltip: 'When heartbreak shows up in a tux.',
      placeholder: 'Heartbreak with glitter',
    },
  },
  children: [],
}
```

4. Make sure the `copy` section is fun but respectful.
5. Run locally:

```bash
pnpm fetch-artists
pnpm dev
```

6. Open a PR with:
   - a clear title (e.g. `feat: add Bruno Mars to pop lineage`),
   - a short justification of **why** this artist belongs where you placed them,
   - screenshots are welcome but optional.

---

## Code of conduct (vibes)

- No hate speech, no harassment, no punching down.
- Jokes should target **situations and shared feelings**, not identities.
- If an artist or community would reasonably find something cruel rather than playful, it does not belong in this repo.

---

## Spanish version

También hay una versión completa de este README en español en `README.es.md`.
