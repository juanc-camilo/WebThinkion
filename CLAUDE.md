# CLAUDE.md · Web Thinkion

Contexto para Claude Code. Basado en la auditoría técnica del 29 y 30/09/2026 ("Guía técnica WebThinkion", de Hernán), adaptado al estado del 02/10/2026.

## El proyecto

- Sitio institucional de Thinkion: HTML + CSS + JavaScript vanilla. **Eleventy** arma `_site` pegando `src/_includes/` (menú, footer, head), uniendo los CSS (`eleventy.config.mjs`) y aplicando las ediciones del panel (`cms/aplicar-ediciones.mjs`, usa `linkedom` solo al armar). No agregar dependencias de runtime en el navegador.
- **Panel de administración** (`/admin`, pedido del usuario el 19/10/2026): edita todo lo visible y banners por temporada. Hosting en **Vercel** (`vercel.json`, funciones en `api/`). Guarda `contenido/*.json` con un commit vía API de GitHub (`GITHUB_TOKEN`). Detalles en `ADMIN.md`. Usuario provisorio `juanc` / `juanc1234` (env `ADMIN_USUARIO`, `ADMIN_CLAVE`).
- Cada elemento del `<body>` lleva `data-e` (su dirección, calculada sobre el HTML original). Si cambiás la estructura de una página, las ediciones guardadas después de ese punto pueden quedar salteadas: revisar `contenido/ediciones.json`.
- Estructura: `index.html` en la raíz, vistas en `src/views/`, estilos en `src/styles/`, JS en `src/controllers/controller.js`, imágenes en `public/img/`, fuentes en `public/fonts/`.
- Cada página arranca con front matter (`titulo`, `descripcion`, `estilos`, opcional `producto`). Dominio y datos de la empresa en `src/_data/sitio.json`.
- Todo el contenido visible va escrito en el HTML; el JS solo maneja interacción. Quien edita la web no programa: los textos tienen que poder cambiarse en el HTML.
- Rutas relativas: desde una vista, `../../public/img/…`; en los includes, `{{ raiz }}` y `{{ vistas }}`.
- Español rioplatense con voseo ("Pedí", "Conocé", "Trabajá").
- Imágenes en WebP con `width` y `height`; `loading="lazy"` debajo del primer pantallazo.
- Colores y medidas en `src/styles/variables.css`.
- Comentarios en el código: detallados, en español, por sección.

## Decisiones ya tomadas (no cambiar)

- **No modificar** el hero de la Home, los íconos e ilustraciones, la alineación de las tarjetas ni la sección de Industrias de la Home.
- Las internas (POS & ERP, Check, Marketing, Clientes, Demo, Trabajá) ya tienen la estética de la Home (commit `2b9f2ea`). **No aplicar** `internas-home.patch` de la auditoría: es de la versión anterior.
- Demo y Trabajá con nosotros son páginas propias (no modales).
- Hosting: Vercel (decidido por el usuario el 19/10/2026). Dominio provisorio `https://webthinkion.vercel.app` en `src/_data/sitio.json`: de ahí salen canonical, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` y `llms.txt` (los arma `eleventy.config.mjs`). Cuando esté el dominio final, cambiar solo ese dato. Formularios y GTM/GA4/Pixel **esperan indicación de Hernán**.
- Páginas en construcción (Retail, Productividad): `indexar: false` en el front matter → `noindex` y fuera del sitemap. Sacarlo cuando marketing las termine.

## No inventar

- Textos `<!-- TEXTO PROVISORIO -->` / `<!-- RESPUESTA PROVISORIA -->` y los hitos en lorem ipsum de "Nuestra evolución": los define marketing.
- Cifras: "300 métricas" contra "más de 500" y ">1 min" en Gastronomía están pendientes de confirmar.
- Colores de marca: preguntar antes de cambiarlos.

## Pendientes

- Contraste del botón coral: prueba A (POS & ERP) y B (Check) en el bloque "PRUEBA DE CONTRASTE" de `paginas.css`. Cuando el usuario elija, pasar la opción a `.boton` (y revisar `.boton-borde` y el `.navbar__demo` coral de `.pagina-nosotros`).
- Pestañas inactivas (`.pestanas__boton:not(.is-activa)`, azul al 30 %): contraste 1,8:1, decisión de diseño.
- Colores sueltos: quedan ~25 hexadecimales y ~100 `rgba()` fuera de `variables.css`.

## Cómo verificar

```bash
npm install
npx playwright install chromium
npm test          # arma _site con Eleventy y corre Playwright en :8080
```

- `npm run admin`: sitio + panel en local (guarda en los archivos).
- Al 19/10/2026: 116 pasan y 13 fallan (3 texto de relleno, 2 formularios y 8 de contraste por el coral y las pestañas).
- Después de cada cambio: tests, mirar la página en escritorio (1440) y celular (390).
