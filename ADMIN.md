# Panel de administración

Desde `/admin` se arma y se cambia toda la web sin programar, con bloques que se arrastran (editor visual [Puck](https://puckeditor.com)).

- En la web: `https://webthinkion.vercel.app/admin`
- En la compu: `npm run dev` → http://localhost:8080/admin
- Usuario provisorio: **juanc** · contraseña: **juanc1234** (cambiala en Vercel, ver abajo).

---

## La lista de páginas

Al entrar ves todas las páginas:
- **Editar** abre el editor.
- **Ver ↗** abre la página publicada.
- **Borrar** la saca de la web; se puede recuperar desde el historial de GitHub. La Home no se puede borrar.
- **＋ Página nueva**: elegís título y dirección (por ejemplo `/promo-verano`). Podés empezar en blanco o con una copia de otra página.
- Arriba están los **Ajustes generales**: menú, banner al entrar, temporadas, footer y datos de la empresa.
- Abajo está el **Diseño futuro**: ver más abajo.

## El editor

| Zona | Qué hay |
|---|---|
| Izquierda | **Bloques**: arrastralos a la página. **Esquema**: la lista de bloques de la página, para reordenarlos arrastrando. |
| Centro | La página tal cual se ve en la web. Arriba elegís **celular, tablet o escritorio**. |
| Derecha | Los campos del bloque que tocaste. Sin nada elegido, los datos de la **Página**: título y descripción para Google, estilo de la página y si aparece en Google. |
| Arriba | Deshacer, rehacer, **← Panel**, **Ver en la web** y **Publicar**. |

**Cómo se hace cada cosa:**
- **Cambiar un texto:** hacé clic en el texto de la página y escribí encima. Los títulos con una palabra subrayada se editan a la derecha, en los campos "Título" y "Palabra subrayada".
- **Cambiar una imagen:** tocá el bloque y, a la derecha, en la imagen, usá **Subir** (se achica y se convierte a WebP sola) o **Elegir del sitio** para usar una que ya está.
- **Links y botones:** campo "Lleva a". Elegí una página de la lista o pegá una dirección. Si pegás un video de YouTube, Vimeo o Drive, se reproduce en una ventana sobre la página.
- **Agregar una sección:** arrastrá un bloque desde la izquierda al lugar de la página donde lo querés. Una línea te marca dónde va a quedar.
- **Mover, duplicar o borrar un bloque:** tocalo y usá los botones de su barrita (duplicar, borrar), o arrastralo. También desde el **Esquema**.
- **Tarjetas, preguntas, logos, opciones:** son listas en el panel de la derecha. El **＋** agrega una, se reordenan arrastrando y cada una tiene duplicar y borrar.
- **Uno al lado del otro:** usá el bloque **Columnas** (dos, tres o cuatro). Dentro de cada columna arrastrás otros bloques: texto, imagen, botón, video, carrusel. En el celular se apilan solas.
- **Carrusel:** bloque **Carrusel**, para logos, imágenes o tarjetas. Elegís cuántos se ven a la vez y si pasa solo.
- **Pestañas** (Industrias, Módulos, Productos, Preguntas frecuentes): cada pestaña es un elemento de la lista. "Pestaña abierta al cargar" define cuál se ve primero (también en el editor, para editarla sobre la página).
- **Publicar:** guarda y publica. En **1 o 2 minutos** se ve en la web. Mientras no publicás, los cambios quedan como borrador en tu navegador: si cerrás la pestaña, al volver te ofrece recuperarlos.

**Los bloques que hay:**
- *Armar secciones:* Sección (caja con fondo), Columnas, Título, Texto, Imagen, Botón, Video, Carrusel, Espacio.
- *Secciones del Home, de producto, de industria e institucionales:* las secciones del diseño (portadas, tarjetas, diagrama, clientes, funciones, integraciones, hoja de ruta, línea de tiempo, formularios…). Se ven exactamente como en el diseño y se pueden usar en cualquier página.

Los colores y los tamaños vienen del diseño: no se pueden poner colores sueltos ni mover cosas pixel por pixel. Así la web no se rompe y en el celular siempre se ve bien.

## Ajustes generales

- **Menú:** links y desplegables. Cada desplegable tiene sus opciones (título, ícono, link y lo que va debajo). Para dejar dos opciones en Soluciones, borrá las que sobran de la lista. Al final está el botón de la derecha ("Pedí tu demo").
- **Banner al entrar a la web:** "Mostrar banner: Sí" lo prende. Tiene fechas propias (desde y hasta; vacías = siempre), así se prende y se apaga solo.
  - **Imagen:** foto, GIF, WebP animado o video MP4 corto (hasta 4 MB; se reproduce solo, sin sonido). Opcional: a dónde lleva al tocarla.
  - **Título y texto** y **botón** se prenden y apagan por separado. Con los dos apagados queda **solo la imagen**, sin recuadro: ideal para un banner hecho en Figma (hay uno de fiestas en *Elegir del sitio* → "felices-fiestas").
  - **Cómo aparece:** sube desde abajo, baja desde arriba, entra por un costado, se agranda, rebota o aparece de a poco. **Dónde:** al centro, arriba, abajo o en la esquina. **Tamaño:** chico, mediano o grande. **Detrás:** la página difuminada, oscurecida o nada.
  - La X para cerrar va adentro del banner. También se cierra tocando afuera o con Esc.
  - Cada cuánto se muestra (una vez por visita, por día, una sola vez o siempre), en qué páginas y a los cuántos segundos.
  - Para ver el banner en la web aunque ya lo hayas visto: `https://webthinkion.vercel.app/?banner=ver`.
- **Temporadas:** cada una tiene nombre, fechas (desde y hasta) y colores (vacíos = los de siempre).
  - Activa: la que corresponde por fecha. Fuera de las fechas de todas, se usa la que no tiene fechas. También se puede forzar una escribiendo su nombre.
- **Footer:** columnas de links, mail, redes y texto final.
- **Datos de la empresa:** nombre, descripción, mail, dirección del sitio (dominio) e imagen para compartir. Los usan Google, las IAs (`llms.txt`) y la vista previa al compartir el link.

## Diseño futuro

Para ir armando **el próximo diseño** de una página sin que se vea en la web, mientras la de hoy se sigue editando aparte.

- **Empezar:** en la lista de páginas, **＋ Diseño futuro**. Arranca como copia de la página de hoy. Para una página que todavía no existe: **＋ Página nueva como diseño futuro**.
- **Trabajar de a poco:** en el editor (dice arriba "Diseño futuro"), **Guardar diseño futuro** lo guarda sin publicar. Se puede seguir otro día, desde cualquier compu.
- **Publicar:** **Pasar a la web**, en el editor o en el panel. Reemplaza a la página de hoy; la anterior queda en el historial de GitHub.
- **Descartar:** borra el diseño futuro. La web no cambia.
- Ojo: si mientras tanto se cambia la página de hoy, esos cambios no pasan solos al diseño futuro (son dos copias aparte).

---

## Configuración en Vercel (una vez)

En Vercel → el proyecto → *Settings → Environment Variables*:

| Variable | Para qué | |
|---|---|---|
| `GITHUB_TOKEN` | Publicar (token de GitHub con *Contents: Read and write* sobre el repositorio) | obligatoria |
| `ADMIN_USUARIO` / `ADMIN_CLAVE` | Usuario y contraseña del panel | si faltan: juanc / juanc1234 |
| `ADMIN_SECRETO` | Texto largo al azar que firma la sesión | recomendada |

**Imágenes:** para poder subirlas desde el panel, en Vercel → *Storage → Create → Blob* (acceso **público**), conectalo al proyecto (agrega solo `BLOB_STORE_ID` o `BLOB_READ_WRITE_TOKEN`; si le pusiste otro prefijo, también sirve) y hacé un **Redeploy** (*Deployments → el último → ⋯ → Redeploy*): la conexión se toma recién en el deploy siguiente. Sin eso igual se pueden usar las imágenes que ya tiene el sitio.

`vercel.json` le indica a Vercel que es un proyecto Next.js y que arme con `npm run build`.

## Cómo funciona por dentro

- Cada página es `contenido/paginas/<nombre>.json` (formato de Puck). Los ajustes, `contenido/ajustes.json`. Los diseños futuros, `contenido/futuro/<nombre>.json`: no se usan para armar la web, y guardarlos no vuelve a publicar el sitio (`ignoreCommand` en `vercel.json`).
- **Publicar** crea un commit en GitHub con ese archivo; Vercel ve el commit y arma el sitio de nuevo. Cada publicación queda en el historial de GitHub, así que cualquier cambio se puede revertir.
- Las páginas se generan **estáticas** con el HTML real (`app/(sitio)/[[...ruta]]`), con título, descripción, dirección oficial, Open Graph y datos estructurados (incluidas las preguntas frecuentes). `robots.txt`, `sitemap.xml` y `llms.txt` se arman solos con las páginas.
- Los bloques están en `puck/bloques/`. Usan el mismo HTML y las mismas clases del diseño, y la misma hoja de estilos en la web y en el editor (`public/estilos/sitio.css`, la arma `scripts/preparar.mjs`).
- Lo que se mueve en la web (menú, pestañas, carruseles, línea de tiempo, filtros, videos en ventana, banner) está en `puck/marco/Comportamientos.jsx`. En el editor no corre: ahí los bloques se editan.
- Para sumar un bloque nuevo, crealo en `puck/bloques/`, agregalo a `puck/config.jsx` y a una categoría.
