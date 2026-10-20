# Página Web Thinkion

Sitio institucional de **Thinkion**, un ecosistema de software de gestión (POS, ERP, BI, auditorías) para gastronomía, retail y servicios.

Las páginas se arman con **bloques** desde el panel `/admin` (editor visual [Puck](https://puckeditor.com)): marketing cambia textos, imágenes, links, orden de las secciones, menú, footer y banners de temporada sin programar. Cómo se usa el panel y cómo configurar Vercel: **[ADMIN.md](ADMIN.md)**.

## Cómo está hecho

- **Next.js** (App Router) + **Puck**. Se publica en **Vercel**.
- Cada página es un archivo `contenido/paginas/<nombre>.json` con sus bloques. Al publicar desde el panel queda un commit en GitHub y Vercel vuelve a armar el sitio (1 o 2 minutos).
- Las páginas se generan **estáticas**: el texto real está en el HTML (bueno para Google y las IAs) y cargan rápido.
- El diseño es el mismo de siempre: los bloques usan el mismo HTML y las mismas clases que tenía el sitio, y los estilos de `src/styles/`. Se comparó página por página con la versión anterior (escritorio y celular): quedaron iguales al píxel.

```
app/
  (sitio)/[[...ruta]]/page.jsx   Las páginas públicas (una por archivo de contenido/paginas)
  (sitio)/layout.jsx             <html> y la hoja de estilos de la web
  admin/                         El panel: lista de páginas (page.jsx) y editor de Puck (editar/)
  api/                           login, sesión, páginas, ajustes y subida de imágenes
  robots.js, sitemap.js, llms.txt/   Para buscadores e IAs (se arman solos)
puck/
  config.jsx                     Qué bloques hay y en qué categorías del panel
  config-ajustes.jsx             Editor de Ajustes generales (menú, footer, temporadas, empresa)
  bloques/                       Los bloques: inicio, producto, industria, institucional, genericos
  marco/                         Lo que envuelve a los bloques: Pagina, Navbar, Footer, temporadas
  marco/Comportamientos.jsx      Menú, pestañas, carruseles, línea de tiempo, videos en ventana, banner
  campos.js, campos-ui.jsx       Campos del panel (imagen con subida, link, fecha, color…)
lib/                             Sesión, guardado (GitHub / Vercel Blob), contenido y SEO
contenido/
  paginas/*.json                 Una página por archivo ("inicio" es la Home)
  ajustes.json                   Menú, footer, temporadas y datos de la empresa
src/styles/                      CSS del diseño (variables.css: colores y medidas)
public/img, public/fonts         Imágenes y tipografías del sitio
scripts/preparar.mjs             Une los CSS en public/estilos/sitio.css y lista las imágenes
tests/                           Playwright: SEO, accesibilidad (axe), formularios, panel
```

## Comandos

Hace falta [Node.js](https://nodejs.org/) y correr `npm install` una vez.

- `npm run dev`: sitio y panel en http://localhost:8080 (panel en `/admin`). En la compu, lo que se publica se guarda directo en `contenido/`.
- `npm run build` y `npm start`: armar y servir como en Vercel.
- `npm test`: arma el sitio y corre los tests (la primera vez, `npx playwright install chromium`).

## Convenciones

- Español rioplatense con voseo ("Pedí", "Conocé").
- Colores y medidas en `src/styles/variables.css`.
- Comentarios en el código: en español, por sección.
- Un bloque nuevo se crea en `puck/bloques/`, se registra en `puck/config.jsx` y usa clases de `src/styles/`.

## Diseño de referencia: Figma

Archivo `Nueva web Thinkion (Copy)`, clave `v9ISxB85hXLxSnlJXV991V`, página **"Wireframes nuevos"**. Escritorio de 1440 px con contenido de 1120 px. Tipografías: **Outfit** e **Instrument Serif** (itálica).

## Pendientes

- **Contraste del botón coral y de las pestañas inactivas** (lo marcan los tests de accesibilidad).
- **Textos provisorios** que define marketing: algunas respuestas de la FAQ, los hitos de "Nuestra evolución" y las páginas de Retail y Productividad (en construcción, fuera de Google).
- **Formularios** de demo y empleo: conectarlos a un servicio (por ejemplo Formspree) desde el panel, campo "Enviar a".
- **Cifras sin confirmar:** "300 métricas" contra "más de 500" y ">1 min" en Gastronomía.
- **Dominio final:** cuando esté, cambiarlo en el panel → Ajustes generales → Datos de la empresa.
