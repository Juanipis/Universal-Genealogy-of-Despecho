<div align="center">

# Catedral Universal del Despecho

**La Genealogía Universal del Despecho**

</div>

Un árbol genealógico del despecho, hecho con cariño y mala decisión, donde **Darío Gómez** ocupa el lugar que siempre le correspondió: **origen místico del drama cantinero** y eje de un multiverso de canciones de despecho.

Este proyecto es una SPA hecha con React + Vite que te permite **explorar la constelación de canciones de desamor como si fuera una mitología familiar**.

> Si Wikipedia se hubiera criado en una cantina a las 3 a.m. escuchando a Darío Gómez, se vería algo así.

---

## Por qué importa Darío Gómez

- **Arquitecto del despecho**: En la cultura popular colombiana, Darío Gómez no es solo un cantante de dolor; es el **arquitecto fundacional** del despecho moderno: la banda sonora de corazones rotos, cantinas cerrando y mensajes que nunca debiste mandar.
- **Puente entre mundos**: Sus canciones mezclan narrativa campesina, melancolía urbana y ese exceso emocional tan latinoamericano donde el sufrimiento es tragedia, pero también deporte.
- **Constructor de canon**: Cuando llegan otros géneros y generaciones (pop, urbano, emo, salsa), Darío ya trazó el **plano**: hipérbole lírica, dramatismo al 200 % y la convicción de que el universo gira alrededor de tu tusa.

En la app, Darío es el **nodo origen** del árbol: desde él se desprenden ramas hacia la cantina/mariachi, la salsa de llorar, el pop anglo, el perreo triste y el emo/rock. No es históricamente exacto, pero es **emocionalmente exacto**.

---

## Por qué existe este proyecto

- **Mapear el canon emocional**: Queríamos ver qué pasa si tomamos en serio la idea de que las canciones de despecho forman una **genealogía de influencias y dramas compartidos**.
- **Celebrar el melodrama como world‑building**: Aquí el despecho no es placer culposo; es una **tecnología narrativa colectiva** para procesar pérdidas, orgullos y decisiones cuestionables.
- **Abrir un mapa discutible**: El árbol es intencionalmente incompleto y parcial. La idea es que puedas **pelearte con él en código**, agregando tus propias ramas, herederos espirituales y rivalidades.

---

## Resumen técnico

- **Frontend**: React + Vite + TypeScript.
- **Datos del árbol**: Todos los nodos viven en `src/config/treeData.ts` con:
  - `id`, `branch`, `variant` (por ejemplo el nodo "king" para Darío),
  - `image` (retrato local del artista),
  - `copy` en español e inglés (nombre, título, tooltip, texto del círculo),
  - `children`: descendencia anidada.
- **Visualización**: Componentes en `src/components/tree/` que renderizan tarjetas, líneas y tooltips.
- **i18n**: `src/i18n.ts` y `src/config/translations.ts` manejan texto ES/EN y el selector de idioma.
- **Imágenes de artistas**: Un script consulta la API de Spotify en tiempo de build, descarga portadas a `public/artists` y genera `src/config/artistImages.ts`.

---

## Cómo correr el proyecto

```bash
pnpm install
pnpm fetch-artists   # opcional: refresca imágenes (requiere credenciales de Spotify)
pnpm dev
```

- Para build de producción y previsualización:

```bash
pnpm build
pnpm preview
```

Necesitas una versión moderna de Node y `pnpm` instalado globalmente.

---

## Despliegue en GitHub Pages

Este repo está listo para desplegarse con **GitHub Pages + GitHub Actions**.

1. **Configura la base de Vite** (solo si tu repo tiene otro nombre):
   - En `vite.config.ts`, ajusta `base` a `'/nombre-del-repo/'`.
2. **Configura los secretos de Spotify** en tu repositorio de GitHub (`Settings` → `Secrets and variables` → `Actions`):
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
3. **Activa GitHub Pages**:
   - `Settings` → `Pages` → Source: **GitHub Actions**.
4. En cada push a `main`, el workflow en `.github/workflows/deploy.yml` va a:
   - instalar dependencias,
   - (opcional) refrescar imágenes con `pnpm fetch-artists`,
   - correr `pnpm build`,
   - publicar la carpeta `dist` en GitHub Pages.

---

## Cómo aportar al árbol del despecho

El despecho es colectivo. Se aceptan PRs.

### Qué debería tener un buen PR

- **Respeto por el tono**: Paródico, cariñoso e informado. Nos reímos _con_ los artistas, no _de_ ellos.
- **Solo artistas reales**: Nada de personajes ficticios ni personas anónimas.
- **Mantener la estructura**: Los nodos deben seguir el tipo `TreeNode` y vivir en `src/config/treeData.ts`.
- **Pensar en influencias**: Antes de agregar un artista, pregúntate: _¿de quién es heredero emocional?_ Ubícalo bajo la rama y el padre que tengan sentido narrativo.
- **Texto bilingüe**: Cada nodo debe tener `copy.es` y `copy.en` completos.
- **Imágenes**: Idealmente, artistas que existan en Spotify para que el script encuentre una portada. Si no, puedes agregar manualmente una imagen a `public/artists` y mapearla en `src/config/artistImages.ts`.

### Agregar un nuevo nodo de artista

1. **Edita** `src/config/treeData.ts`.
2. Ubica la rama a la que pertenece tu artista (`mex`, `salsa`, `pop`, `urb`, `emo`, etc.).
3. Agrega un nodo similar a:

```ts
{
	id: 'bruno-mars',
	branch: 'pop',
	image: img('Bruno Mars'),
	copy: {
		es: {
			name: 'Bruno Mars',
			title: 'Baladista del arrepentimiento elegante',
			tooltip: 'Cuando el despecho se pone traje y corbata.',
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

4. Cuida que el `copy` sea divertido pero respetuoso.
5. Corre localmente:

```bash
pnpm fetch-artists
pnpm dev
```

6. Abre un PR con:
   - un título claro (por ejemplo `feat: agrega a Bruno Mars a la rama pop`),
   - una breve justificación de **por qué** ubicaste al artista en esa rama/padre,
   - capturas de pantalla opcionales.

---

## Código de conducta (vibes)

- Nada de discursos de odio ni acoso.
- Los chistes deben apuntar a **situaciones y sentimientos compartidos**, no a identidades.
- Si algo suena más cruel que juguetón, no va en este repo.

---

## Versión en inglés

También hay una versión completa de este README en inglés en `README.md`.
