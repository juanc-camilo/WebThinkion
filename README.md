# Página Web Thinkion

Sitio institucional de **Thinkion**, un ecosistema de software de gestión (POS, ERP, BI, auditorías) para gastronomía, retail y servicios.

## Objetivo

- Replicar **al 100 %** el diseño del Figma, tanto en escritorio como en mobile.
- Construir cada parte con HTML y CSS **reales y editables**. Los textos, botones, tarjetas, degradados y líneas decorativas se hacen con código. **No se pega una captura del diseño en el HTML.**
- Los textos y las rutas de las imágenes van **escritos en el HTML**. El JavaScript solo maneja la interacción y nunca genera contenido.
- Usar imágenes solo para fotos, logos, mockups e íconos ilustrados.
- El sitio tiene que ser **100 % responsive**.
- Pasar **Google Lighthouse** con buenos puntajes. Esto se optimiza **al final** del proyecto.
- Stack: **HTML + CSS + JavaScript, todo vanilla**, sin frameworks ni build.

## Diseño de referencia: Figma

Archivo: `Nueva web Thinkion (Copy)`, clave `v9ISxB85hXLxSnlJXV991V`. La fuente principal es la página **"Wireframes nuevos"**. De "Wireframes viejos" se toma solo lo que no tiene versión nueva.

| Página | Archivo | Frame | Estado |
|---|---|---|---|
| Home | `index.html` | [Home - más nueva](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1136-2642) | ✅ Hecha |
| Segmento Gastronomía | `gastronomia.html` | [segmento - Gastro](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1512-1807) | ✅ Hecha |
| Segmento Retail | `retail.html` | [segmento - Retail](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1538-284) | ✅ Hecha (en el Figma todavía tiene los textos de Gastro) |
| Sobre nosotros | `sobre-nosotros.html` | [Sobre nosotros](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=1327-1822) | ✅ Hecha |
| Producto Check (Auditorías) | `check.html` | [productos - check](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=546-1211) (viejo) | ✅ Hecha |
| Clientes | `clientes.html` | [Clientes todos](https://www.figma.com/design/v9ISxB85hXLxSnlJXV991V/Nueva-web-Thinkion--Copy-?node-id=503-1209) (viejo) | ✅ Hecha |
| POS y ERP, Marketing, Productividad | `pos-erp.html`, `marketing.html`, `productividad.html` | — | ❓ Sin diseño en el Figma: consultar con el equipo |

Los datos del Figma se bajan con la **API REST** usando el token de la variable de usuario `FIGMA_TOKEN`. No se usa el conector MCP, que en el plan Starter permite solo 20 llamadas por mes.

El canvas de escritorio mide 1440 px y el contenido ocupa 1120 px. Tipografías: **Outfit** (300 a 600) e **Instrument Serif** en itálica para el testimonio.

## Estructura del proyecto (MVC)

```
index.html                 Home. Queda en la raíz para que GitHub Pages la sirva como portada.
public/img/                Imágenes y SVG, una carpeta por página (home, segmentos, nosotros, check, clientes)
src/
  views/                   Vistas: el resto de las páginas HTML
    gastronomia.html, retail.html, sobre-nosotros.html, check.html, clientes.html,
    pos-erp.html, marketing.html, productividad.html (estas tres, en construcción)
  controllers/
    controller.js          Controlador: menú, desplegables, pestañas, carrusel, filtros, formularios
  styles/
    variables.css          Colores, tipografía y medidas del Figma
    base.css               Reset y estilos base
    components.css         Botones, navbar, desplegables y pestañas
    layout.css             Home, fondo, footer y estilos compartidos
    responsive.css         Tablet y mobile de la Home y el navbar
    segmento.css           Gastronomía y Retail
    paginas.css            Sobre nosotros, Check, Clientes y páginas en construcción
GUIA-EDICION.md            Cómo editar textos e imágenes sin saber programar
```

No hay **modelos** porque el sitio es estático: todo el contenido está escrito en las vistas (HTML).

**Rutas:** todas son relativas, así que el sitio funciona igual abriendo los archivos en la compu y en GitHub Pages.
- Desde `index.html`: `src/styles/…`, `src/controllers/…`, `src/views/…` y `public/img/…`.
- Desde una vista (`src/views/`): `../styles/…`, `../controllers/…`, `../../public/img/…` y `../../index.html`. Los links entre vistas van sin carpeta, por ejemplo `retail.html`.

**Publicar en GitHub Pages:** subí el repositorio y en *Settings → Pages* elegí la rama `main` y la carpeta `/ (root)`.

## Convenciones
- Todo el contenido visible va en el HTML y se comenta por sección.
- Colores y medidas se definen como variables en `src/styles/variables.css`.
- Español rioplatense con voseo ("Pedí", "Conocé").
- Las imágenes van en WebP con `width` y `height`, y con `loading="lazy"` si están debajo del primer pantallazo.
- Los textos que no están en el Figma y que escribí yo están marcados con `<!-- TEXTO PROVISORIO -->` o `<!-- RESPUESTA PROVISORIA -->`.

## Pendientes
- **Páginas sin diseño:** POS y ERP, Marketing y Productividad (IoT). Los links del menú ya apuntan a `pos-erp.html`, `marketing.html` y `productividad.html`.
- **Textos provisorios:** respuestas 2 a 4 de la FAQ de la Home y sus categorías, hitos de "Nuestra evolución" (el Figma tiene "Lorem ipsum") y los textos de Retail, que en el Figma son los de Gastro.
- **Formulario "Unite a nuestro equipo":** hay que conectarlo a un servicio (por ejemplo Formspree) o a un servidor para recibir las postulaciones. Agregué el botón "Enviar postulación", que no está en el diseño.
- **Links reales:** video del hero y redes sociales.
- **Lighthouse:** al final.
