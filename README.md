# Genealogía Universal del Despecho

Una sola página React + Vite que renderiza el árbol del despecho con un sistema de configuración, assets locales/URL y selector de idioma (ES/EN).

## Cómo correr
- `pnpm install` (si cambias dependencias)
- `pnpm dev` para desarrollo
- `pnpm build` y `pnpm preview` para revisar el build

## Estructura clave
- `src/config/treeData.ts`: el árbol en sí (nodos, ramas, copys ES/EN, colores de ramas). Los nodos aceptan `image` (URL o `/assets/...` en `public`) y `children` anidados.
- `src/config/translations.ts`: textos generales de la UI (título, subtítulo, leyenda, etc.) y locales soportados.
- `src/components/tree/*`: renderer del árbol y las tarjetas de artista.
- `src/types/tree.ts`: tipos para ramas, locales y nodos.

## Añadir / modificar nodos
Cada nodo en `treeData` tiene esta forma:

```ts
{
  id: 'nuevo-artista',
  branch: 'pop',          // 'mex' | 'pop' | 'urb' | 'emo' (para color y leyenda)
  image: '/assets/foto.png', // opcional: URL absoluta o asset dentro de /public
  copy: {
    es: { name: 'Nombre', title: 'Rol', tooltip: 'Texto hover', placeholder: 'Texto en el círculo' },
    en: { name: 'Name', title: 'Role', tooltip: 'Hover text', placeholder: 'Circle text' },
  },
  children: [...],
}
```

## Traducciones y configuración
- Usa el conmutador ES/EN en pantalla (usa `i18next`). Para cambiar textos globales, edita `src/config/translations.ts`.
- Para añadir una rama nueva con color propio, agrega una entrada en `branches` dentro de `treeData.ts` y usa su `id` en tus nodos.

## Personalización rápida
- Colores globales y estilo: `src/App.css` / `src/index.css` (variables `--gold`, `--panel`, etc.).
- Tipografías: `Cinzel` (título) y `Manrope` para el resto (importadas en `index.css`).
- Las fotos se pueden subir por tarjeta (no se guardan en disco) o definir en `treeData` vía URL.
