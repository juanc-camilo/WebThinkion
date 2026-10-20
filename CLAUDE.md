# CLAUDE.md · Web Thinkion

Contexto para Claude Code. Actualizado el 20/10/2026, después de pasar el sitio a Next.js + Puck.

## El proyecto

- Sitio institucional de Thinkion en **Next.js (App Router) + Puck** (editor visual de bloques, `@puckeditor/core`). Hosting en **Vercel** (`vercel.json`: framework nextjs, build `npm run build`).
- Quien edita la web es marketing, sin programar, desde `/admin`. Lo que piden: que se pueda cambiar todo con bloques y que **sea difícil de romper** (nada de posiciones libres ni colores sueltos). Guía de uso: `ADMIN.md`.
- Contenido: `contenido/paginas/<nombre>.json` (datos de Puck; "inicio" = `/`) y `contenido/ajustes.json` (menú, footer, temporadas con banner, datos de la empresa). El panel los guarda con un commit vía API de GitHub (`GITHUB_TOKEN`); las imágenes subidas van a Vercel Blob (`BLOB_READ_WRITE_TOKEN`). En local (`npm run dev`) se escribe en los archivos y en `public/subidas`.
- Páginas estáticas (`app/(sitio)/[[...ruta]]`, `generateStaticParams`), con metadatos, canonical, Open Graph y JSON-LD (`lib/seo.js`). `robots.js`, `sitemap.js` y `llms.txt/route.js` se arman con las páginas.
- Bloques en `puck/bloques/` (inicio, producto, industria, institucional, genericos), registrados en `puck/config.jsx`. **Usan el mismo HTML y las mismas clases del diseño original** (se comparó al píxel con la versión anterior). Un bloque nuevo: mismas convenciones, `bloque({...})` de `puck/util.jsx` (inline + `ref={puck.dragRef}` en la etiqueta principal).
- Marco de página en `puck/marco/` (Pagina = root de Puck con plantillas, Navbar, Footer, temporadas). Las interacciones de la web están en `puck/marco/Comportamientos.jsx` (JS vanilla sobre el HTML ya armado; no corre en el editor).
- Campos del panel: `puck/campos.js` (atajos, sirve en servidor y cliente) y `puck/campos-ui.jsx` (componentes `'use client'`: imagen con subida, link, fecha, color). No llamar funciones de un módulo `'use client'` desde el servidor.
- Estilos: `src/styles/*.css` (colores y medidas en `variables.css`). `scripts/preparar.mjs` los une en `public/estilos/sitio.css` (lo usan la web y el iframe del editor) y lista las imágenes para la biblioteca del panel. `bloques.css`: bloques genéricos, banner y video en ventana. `puck-ajustes.css`: que el editor se vea igual que la web.
- Usuario provisorio del panel `juanc` / `juanc1234` (env `ADMIN_USUARIO`, `ADMIN_CLAVE`, `ADMIN_SECRETO`).
- Español rioplatense con voseo. Comentarios en el código: detallados, en español, por sección.

## No inventar

- Textos provisorios (algunas respuestas de la FAQ, hitos de "Nuestra evolución", Retail y Productividad): los define marketing.
- Cifras: "300 métricas" contra "más de 500" y ">1 min" en Gastronomía están pendientes de confirmar.
- Colores de marca: preguntar antes de cambiarlos.

## Pendientes

- Contraste del botón coral y de las pestañas inactivas (azul al 30 %): decisión de diseño.
- Formularios de demo y empleo sin destino: se conectan desde el panel (campo "Enviar a").
- Dominio final: se cambia en el panel → Ajustes generales → Datos de la empresa.

## Cómo verificar

```bash
npm install
npx playwright install chromium
npm test          # arma con Next.js, levanta en :8080 y corre Playwright
npm run dev       # sitio + panel en :8080 (/admin)
```

- Al 20/10/2026: 117 pasan y 13 fallan (3 texto de relleno, 2 formularios y 8 de contraste por el coral y las pestañas).
- Después de cada cambio: tests y mirar la página en escritorio (1440) y celular (390), en la web y en el editor.
