# Manual para agentes (LLM)

Este repositorio construye el árbol de la **Genealogía Universal del Despecho**. El nodo raíz es Darío Gómez (`id: origin`) y desde ahí cuelgan ramas temáticas (`mex`, `pop`, `urb`, `emo`, `salsa`). El objetivo de los agentes es **agregar 2–3 artistas nuevos** por ejecución, siempre extendiendo ramas pobres o niveles poco poblados (llenar hacia abajo, no lateral).

## Qué sí hacer
- Leer `src/config/treeData.ts` completo antes de proponer cambios para entender qué ramas están flacas y en qué nivel falta profundidad.
- Proponer nodos nuevos como descendientes de un artista existente. Escoge padres coherentes (misma línea musical / generación de despecho).
- Mantener el tono breve y pícaro de los textos en español e inglés. Usa placeholders cuando apliquen.
- Conservar el formato del archivo: objetos literales, comas finales y `image: img("Nombre Exacto")`.
- Si hay imagen local, añade el mapping en `src/config/artistImages.ts` (clave exacta del nombre que uses en `img()`) o deja que caiga en placeholder si no existe aún.

## Qué no hacer
- No borres, muevas ni reordenes nodos existentes.
- No toques `branches`, `fallbackLocale` ni otros exports.
- No “arregles” textos existentes (acentos raros, tildes raras, etc.). Déjalos como están.
- No edites directamente `src/config/treeData.ts` a mano: usa el script CLI.

## Cómo está estructurado el árbol
Cada nodo (`TreeNode`) necesita:
- `id`: `kebab-case` estable y único.
- `branch`: uno de `mex | pop | urb | emo | salsa`.
- `image`: usa `img("Nombre Exacto")`; si no hay mapping, caerá en `placeholder.png`.
- `copy`: dos entradas (`es` y `en`) con `name`, `title`, opcional `tooltip`, opcional `placeholder` (si falta, se usa el `name`).
- `children`: array (puede omitirse si es hoja).

## Script para agregar artistas (obligatorio)
No insertes a mano en `treeData.ts`. Usa el CLI para evitar romper la sintaxis.

Ejemplo mínimo:
```bash
node scripts/add-artist.mjs \
  --parent bad-bunny \
  --id arcangel \
  --branch urb \
  --name-es "Arcángel" \
  --title-es "Reguetón dolido de la vieja guardia" \
  --tooltip-es "Antes de facturar, se desahogaba en mixtapes." \
  --name-en "Arcangel" \
  --title-en "Old-school reggaeton heartbreak" \
  --tooltip-en "Before invoices, he vented on mixtapes." \
  --image-key "Arcangel" \
  --image-path "artists/arcangel.jpg"
```
- `--parent` es el `id` del nodo padre existente.
- `--image-key` define el texto dentro de `img("...")` y la clave en `artistImages.ts`.
- `--image-path` (opcional) agrega automáticamente esa entrada al mapping.
- Si no das `--image-path`, el nodo usará el placeholder hasta que subas la imagen.

## Flujo recomendado para la tarea de “meter artistas”
1) Analiza ramas con menos profundidad o con huecos notorios. Prioriza añadir nietos/bisnietos de ramas débiles.  
2) Elige 2–3 artistas coherentes y decide su `parent`.  
3) Ejecuta el CLI anterior por cada artista.  
4) Si subes imagen, agrégala a `public/artists/` y usa `--image-path`.  
5) Relee el diff para verificar que solo se añadieron nodos nuevos y mappings de imagen.  
6) Deja claro en el PR qué ramas reforzaste y por qué.

## Prompt sugerido para Jules
```
Lee AGENTS.md. Tarea: añadir 2–3 artistas nuevos al árbol de `src/config/treeData.ts` sin tocar nodos existentes. Prioriza ramas pobres o niveles con pocos descendientes (llenar hacia abajo). Usa el script `node scripts/add-artist.mjs` para insertar, nunca edites el archivo a mano. Cada nodo debe tener id único en kebab-case, branch válido, `image: img("Nombre")`, y copys en `es`/`en` con tono breve y picante. Si tienes imagen, añade el mapping en `src/config/artistImages.ts` (o deja placeholder). No modifiques `branches`, ni otros textos existentes, ni corrijas acentos raros. Al final deja un resumen de qué ramas reforzaste.
```
