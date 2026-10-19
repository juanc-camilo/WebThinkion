# Panel de administración

Desde `/admin` se puede cambiar todo lo que se ve en la web sin tocar código: textos, links, imágenes, colores, fondos, tipografías, título y descripción para Google, y un **banner de bienvenida por temporada**.

- En la compu: `npm run admin` → http://localhost:8080/admin/
- En Vercel: `https://TU-DOMINIO/admin/`
- Usuario provisorio: **juanc** · contraseña: **juanc1234** (cambiala en Vercel antes de salir a producción, ver abajo).

---

## Cómo se usa

**Barra de arriba**

| | |
|---|---|
| Selector de página | Elegí qué página editar (Home, POS & ERP, Check…). |
| ✏️ Editar / 👆 Navegar | En *Editar*, un clic selecciona. En *Navegar* la página funciona normal: usalo para abrir menús desplegables, pestañas o carruseles, y después volvé a *Editar*. |
| 🖥️ / 📱 | Ver en escritorio (1440 px) o celular (390 px). Los estilos que cambies con 📱 activo valen **solo en celular**. |
| ↶ Deshacer | También con Ctrl+Z. |
| Publicar | Guarda todo y publica. Mientras no publiques, los cambios quedan como borrador en tu navegador (si cerrás la pestaña, al volver te ofrece recuperarlos). |

**Pestañas de la izquierda**

- **Elemento** — lo que seleccionaste con el clic:
  - *Texto*: escribís directo sobre la página (Enter = salto de línea). Negrita, cursiva, links y quitar formato con los botones.
  - *Link*: a qué página lleva, o una dirección externa (`https://…`, `mailto:…`, `tel:…`).
  - *Imagen*: "Cambiar imagen" (se convierte sola a WebP, máximo 2400 px) y la descripción para Google.
  - *Estilo*: color de letra, color o imagen de fondo, tipografía, tamaño, grosor, alineación, redondeo y opacidad.
  - *Ocultar en la web* y *Volver al original*.
  - Los chips de arriba ("Sección › Bloque › Título") seleccionan el bloque que contiene al elemento: así se le cambia el fondo a una sección entera.
  - Lo que esté en el **menú o el footer** se cambia en **todas las páginas** (el panel lo avisa).
- **Página** — título y descripción para Google, fondo de toda la página, lista de todas las imágenes (incluso las decorativas del fondo, que no se pueden tocar con el mouse) y los elementos ocultos.
- **Diseño** — colores de marca y tipografías de la temporada elegida. Se aplican en todo el sitio. Se pueden subir tipografías propias (`.woff2`).
- **Temporadas** — cada temporada tiene fechas, su propio diseño (colores y tipografías) y su banner:
  - *Temporada activa*: "Automática según las fechas" o forzar una.
  - Fuera de las fechas de todas, se usa la **temporada por defecto**. El diseño actual quedó cargado como *Primavera 2026 (diseño actual)*.
  - *Banner al entrar*: título, texto, imagen, botón, colores, cada cuánto se muestra (una vez por visita, por día, una sola vez o siempre), en qué páginas y con cuántos segundos de espera. "Ver cómo queda" lo muestra en la vista.

> Los textos y las imágenes son los mismos en todas las temporadas; lo que cambia por temporada es el diseño (colores y tipografías) y el banner.

---

## Publicar en Vercel (una sola vez)

1. **Subí el proyecto a GitHub** (el repositorio `WebThinkion`).
2. En [vercel.com](https://vercel.com) → *Add New → Project* → importá el repositorio. Vercel lee `vercel.json` (arma con `npm run build` y publica `_site`); no hay que tocar nada más.
3. **Token de GitHub** (para que el panel pueda guardar): en GitHub → *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*.
   - *Repository access*: solo `WebThinkion`.
   - *Permissions → Contents*: **Read and write**.
4. En Vercel → el proyecto → *Settings → Environment Variables*, cargá:

| Variable | Valor | |
|---|---|---|
| `GITHUB_TOKEN` | el token del paso 3 | obligatoria |
| `ADMIN_USUARIO` | usuario del panel | si falta: `juanc` |
| `ADMIN_CLAVE` | contraseña del panel | si falta: `juanc1234` |
| `ADMIN_SECRETO` | un texto largo al azar (firma la sesión) | recomendada |
| `GITHUB_RAMA` | la rama que publica Vercel | si falta: la del deploy (normalmente `main`) |
| `GITHUB_REPO` | `usuario/repositorio` | si falta: el que tiene conectado Vercel |

5. *Deployments → Redeploy* para que tome las variables.

**Qué pasa al tocar Publicar:** el panel crea un commit en GitHub con `contenido/ediciones.json`, `contenido/temporadas.json` y las imágenes o tipografías subidas. Vercel ve el commit y vuelve a armar el sitio solo: tarda **1 o 2 minutos**. Mientras tanto el panel ya muestra la versión nueva. Cada publicación queda en el historial de GitHub, así que cualquier cambio se puede revertir desde ahí.

---

## Cómo funciona por dentro

```
admin/                 El panel (HTML, CSS y JS, sin dependencias)
  editor.js            Editor visual: selección, paneles, subidas, publicar
api/                   Funciones de Vercel
  login.js, logout.js, sesion.js   Ingreso con cookie firmada (12 h)
  datos.js             Lee lo guardado (desde GitHub, siempre lo último)
  subir.js             Sube imágenes y tipografías
  guardar.js           Publica: un commit con todo
  _lib/                sesion.js (usuario y cookie) · almacen.js (GitHub o archivos locales)
cms/
  aplicar-ediciones.mjs  Lo usa Eleventy: escribe los cambios en el HTML final
  compartido.mjs         Tipografías y armado de CSS (lo usan Eleventy y el panel)
contenido/
  ediciones.json       Cambios por página ("paginas") y del menú/footer ("global")
  temporadas.json      Temporadas, diseño, banner y tipografías subidas
scripts/servidor-local.mjs   npm run admin
public/img/subidas/, public/fonts/subidas/   Lo que se sube desde el panel
```

- Al armar el sitio, Eleventy numera cada elemento con `data-e="…"` (su "dirección") y aplica `contenido/ediciones.json`. **Los cambios quedan escritos en el HTML**: Google ve el texto real, no hay JavaScript que lo cambie en el navegador.
- Los estilos editados se escriben como reglas CSS en el `<head>` (`[data-e="3.0.0.0"] { color: … !important }`), con un bloque aparte para celular (hasta 760 px).
- La temporada se elige en el navegador con un script mínimo en el `<head>` (según la fecha del día), antes de que se pinte la página: no hay parpadeo. El banner lo muestra `controller.js`.
- En `ediciones.json` las rutas que empiezan con `~/` son relativas a la raíz del sitio; Eleventy las convierte para cada página.

**Si un programador cambia el HTML de una página** (agrega o saca elementos), las direcciones de los elementos que vienen después pueden correrse. Cada edición guarda la etiqueta original (`"etiqueta": "h2"`) y, si ya no coincide, se saltea y Eleventy avisa en la consola (`[admin] Edición salteada…`). Lo más prolijo: después de un cambio de estructura, revisar la página en el panel. El campo `"original"` de cada edición muestra qué texto tenía, para ubicarla.

**Límites actuales:** el panel edita lo que ya existe (texto, imagen, link, estilo, ocultar); no agrega secciones ni tarjetas nuevas. Algunos colores todavía están escritos fijos en los CSS (no en `variables.css`) y no cambian desde *Diseño*.
