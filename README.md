# Landing — Daniela Herrera · Asesora Chevrolet San Juan del Río

Sitio estático (Next.js + Tailwind). Info en `docs/INFO_DANIELA.md`, diseño en `docs/DISENO_WEB.md`.

## Editar contenido
Todo (teléfono, dirección, redes, modelos, textos, reseñas) está en `src/lib/data.ts`.
- Reseñas reales: agrégalas al arreglo `reviews` y la sección aparece sola.
- Cambia `siteUrl` cuando tengas el dominio final (se usa para Open Graph).
- Foto principal: `public/img/daniela.webp` (reemplázala por una de mejor resolución).

## Correr / publicar
```bash
npm run dev      # http://localhost:3000
npm run build    # genera out/ (HTML estático)
```
Sube la carpeta `out/` a cualquier hosting (Vercel, Hostinger, Netlify…).
