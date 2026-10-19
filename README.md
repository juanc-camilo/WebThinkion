# Página Web Thinkion

Sitio institucional de **Thinkion**, un ecosistema de software de gestión (POS, ERP, BI, auditorías) para gastronomía, retail y servicios.

## Objetivo

- Replicar **al 100 %** el diseño del Figma, tanto en escritorio como en mobile.
- Construir cada parte con HTML y CSS **reales y editables**. Los textos, botones, tarjetas, degradados y líneas decorativas se hacen con código. **No se pega una captura del diseño en el HTML.**
- Los textos y las rutas de las imágenes van **escritos en el HTML**. El JavaScript solo maneja la interacción y nunca genera contenido.
- Usar imágenes solo para fotos, logos, mockups e íconos ilustrados.
- El sitio tiene que ser **100 % responsive**.
- Pasar **Google Lighthouse** con buenos puntajes. Esto se optimiza **al final** del proyecto.
- Stack: **HTML + CSS + JavaScript, todo vanilla**. [Eleventy](https://www.11ty.dev/) arma el sitio final en `_site`: solo pega el menú, el footer y el `<head>` compartidos y une las hojas de estilo. Al navegador llega HTML plano, sin JavaScript extra.

## Diseño de referencia: Figma

Archivo: `Nueva web Thinkion (Copy)`, clave `v9ISxB85hXLxSnlJXV991V`. La fuente principal es la página **"Wireframes nuevos"**. De "Wireframes viejos" se toma solo lo que no tiene versión nueva.

| Página | Archivo | Frame | Estado |
|---|---|---|---|
| Home | `index.html` | [Home - más nueva](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1136-2642) | ✅ Hecha |
| Segmento Gastronomía | `gastronomia.html` | [segmento - Gastro](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1512-1807) | ✅ Hecha |
| Segmento Retail | `retail.html` | [segmento - Retail](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1538-284) | 🚧 En construcción. La versión armada con los textos de Gastro está en el commit `957bdcb` |
| Sobre nosotros | `sobre-nosotros.html` | [Sobre nosotros](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1327-1822) | ✅ Hecha |
| Producto Check (Auditorías) | `check.html` | [productos - check](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=546-1211) (viejo) | ✅ Hecha |
| Clientes | `clientes.html` | [Clientes todos](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=503-1209) (viejo) | ✅ Hecha |
| POS y ERP, Marketing, Productividad | `pos-erp.html`, `marketing.html`, `productividad.html` | — | ❓ Sin diseño en el Figma: consultar con el equipo |

Los datos del Figma se bajan con la **API REST** usando el token de la variable de usuario `FIGMA_TOKEN`. No se usa el conector MCP, que en el plan Starter permite solo 20 llamadas por mes.

El canvas de escritorio mide 1440 px y el contenido ocupa 1120 px. Tipografías: **Outfit** (300 a 600) e **Instrument Serif** en itálica para el testimonio.

## Panel de administración

Todo lo visible se puede editar desde `/admin` (usuario y contraseña en Vercel) y hay un banner de bienvenida por temporada. Se publica en **Vercel**: el panel guarda en GitHub y Vercel vuelve a armar el sitio. Cómo usarlo, cómo configurar Vercel y cómo funciona: [ADMIN.md](ADMIN.md). En la compu: `npm run admin`.

## Estructura del proyecto (MVC)

```
index.html                 Home. Queda en la raíz para que GitHub Pages la sirva como portada.
public/img/                Imágenes y SVG, una carpeta por página (home, segmentos, nosotros, check, clientes, og)
public/fonts/              Outfit e Instrument Serif alojadas en el sitio
src/
  _includes/               Partes compartidas por las 11 páginas
    menu.njk               Menú (navbar)
    footer.njk             Footer
    head.njk               Metas, Open Graph, JSON-LD y hoja de estilos
  _data/sitio.json         Dominio, mail y redes (los usa head.njk)
  views/                   Vistas: el resto de las páginas HTML
    gastronomia.html, retail.html, sobre-nosotros.html, check.html, clientes.html,
    pos-erp.html, marketing.html, productividad.html (estas tres, en construcción)
  controllers/
    controller.js          Controlador: menú, desplegables, pestañas, carrusel, filtros, formularios
  styles/
    fuentes.css            @font-face de las tipografías locales
    variables.css          Colores, tipografía y medidas del Figma
    base.css               Reset y estilos base
    components.css         Botones, navbar, desplegables y pestañas
    layout.css             Home, fondo, footer y estilos compartidos
    responsive.css         Tablet y mobile de la Home y el navbar
    segmento.css           Gastronomía y Retail
    paginas.css            Sobre nosotros, Check, Clientes y páginas en construcción
GUIA-EDICION.md            Cómo editar textos e imágenes sin saber programar
eleventy.config.mjs        Configuración de Eleventy (qué CSS se unen y en qué orden)
tests/sitio.spec.mjs       Tests de SEO, accesibilidad y formularios (Playwright + axe)
.github/workflows/         publicar.yml (GitHub Pages) y calidad-web.yml (tests y Lighthouse)
```

No hay **modelos** porque el sitio es estático: todo el contenido está escrito en las vistas (HTML).

**Rutas:** todas son relativas, así que el sitio funciona igual abriendo los archivos en la compu y en GitHub Pages.
- Desde `index.html`: `src/styles/…`, `src/controllers/…`, `src/views/…` y `public/img/…`.
- Desde una vista (`src/views/`): `../styles/…`, `../controllers/…`, `../../public/img/…` y `../../index.html`. Los links entre vistas van sin carpeta, por ejemplo `retail.html`.

**Comandos** (hace falta [Node.js](https://nodejs.org/) y correr `npm install` una vez):
- `npm run dev`: arma el sitio y lo abre en http://localhost:8080 con recarga automática al guardar.
- `npm run build`: arma el sitio en `_site`.
- `npm run admin`: arma el sitio y abre el panel en http://localhost:8080/admin/ (guarda directo en los archivos).
- `npm test`: arma el sitio y corre los tests (la primera vez, `npx playwright install chromium`).

**Publicar en GitHub Pages:** cada push a `main` lo publica solo (`.github/workflows/publicar.yml`). Hay que configurarlo una vez: *Settings → Pages → Build and deployment → Source: GitHub Actions*. Ya no sirve publicar la rama tal cual, porque el menú y el footer los agrega Eleventy.

## Convenciones
- Todo el contenido visible va en el HTML y se comenta por sección.
- Colores y medidas se definen como variables en `src/styles/variables.css`.
- Español rioplatense con voseo ("Pedí", "Conocé").
- Las imágenes van en WebP con `width` y `height`, y con `loading="lazy"` si están debajo del primer pantallazo.
- Los textos que no están en el Figma y que escribí yo están marcados con `<!-- TEXTO PROVISORIO -->` o `<!-- RESPUESTA PROVISORIA -->`.

## Pendientes

Detalle de la auditoría técnica del 30/09/2026 (guía de Hernán):
- **Botón coral:** blanco sobre coral da 2,7:1 (mínimo 4,5:1). Hay una prueba en `paginas.css` (bloque "PRUEBA DE CONTRASTE"): opción A en POS & ERP (coral oscuro) y opción B en Check (texto azul en negrita). Elegida una, se pasa a `.boton` en `components.css`. También afecta al botón "Conocer más" (`.boton-borde`) y al "Pedí tu demo" coral de Sobre nosotros y Trabajá con nosotros.
- **Pestañas inactivas** (azul al 30 %, 1,8:1): fallan contraste. Usan la misma clase que las pestañas de Industrias de la Home; decidir con diseño.
- **Cifras sin confirmar:** "300 métricas" contra "más de 500" (Gastronomía y POS & ERP) y ">1 min" en Gastronomía.
- **Imagen para compartir** (`public/img/og/thinkion.jpg`): es provisoria, armada con el logo y los fondos de la web. Reemplazarla por una de diseño en 1200×630.
- **Al tener dominio y hosting:** cambiar `dominio` en `src/_data/sitio.json`, agregar canonical, robots.txt, sitemap.xml y 404, conectar los formularios y sumar `vercel.json` si se publica en Vercel.
- **Imagen del KDS** en POS & ERP (hoy es un ícono de monitor).

- **Páginas sin diseño:** POS y ERP, Marketing y Productividad (IoT). Los links del menú ya apuntan a `pos-erp.html`, `marketing.html` y `productividad.html`.
- **Textos provisorios:** respuestas 2 a 4 de la FAQ de la Home y sus categorías, hitos de "Nuestra evolución" (el Figma tiene "Lorem ipsum") y los textos de Retail, que en el Figma son los de Gastro.
- **Formulario "Unite a nuestro equipo":** hay que conectarlo a un servicio (por ejemplo Formspree) o a un servidor para recibir las postulaciones. Agregué el botón "Enviar postulación", que no está en el diseño.
- **Links reales:** video del hero y redes sociales.
- **Lighthouse:** al final.
