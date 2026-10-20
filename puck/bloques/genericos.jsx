/* =========================================================
   BLOQUES GENÉRICOS — para armar secciones nuevas sin programar.
   - Sección: caja con fondo opcional; adentro se sueltan otros bloques.
   - Columnas: 2, 3 o 4 columnas; en el celular se apilan solas.
   - Título, Texto, Imagen, Botón, Video, Carrusel y Espacio.
   Todos usan los colores y tipografías de la marca (src/styles/bloques.css).
   ========================================================= */
import { texto, parrafo, textoRico, imagen, link, lista, opciones, numero, color } from '../campos';
import { bloque, clases, conSaltos, Img, href } from '../util';

// Bloques que se pueden poner adentro de una Sección o de una Columna
export const BLOQUES_INTERNOS = ['Titulo', 'Texto', 'Imagen', 'Boton', 'Video', 'Carrusel', 'Espacio', 'Columnas'];

const ALINEACION = [['izquierda', 'Izquierda'], ['centro', 'Centro'], ['derecha', 'Derecha']];
const ESPACIOS = { chico: '24px', mediano: '40px', grande: '72px', ninguno: '0px' };

/* ---------- SECCIÓN ---------- */
export const Seccion = bloque({
  label: 'Sección',
  fields: {
    contenido: { type: 'slot', label: 'Contenido', allow: BLOQUES_INTERNOS },
    fondo: opciones('Fondo', [['', 'Sin fondo'], ['tarjeta', 'Tarjeta blanca'], ['lila', 'Lila'], ['azul', 'Azul']]),
    ancho: opciones('Ancho', [['contenido', 'Como el resto de la página'], ['completa', 'Toda la pantalla']]),
    alineacion: opciones('Alinear contenido', [['', 'Izquierda'], ['centro', 'Centro']]),
    espacio: opciones('Espacio arriba y abajo', [['chico', 'Chico'], ['mediano', 'Mediano'], ['grande', 'Grande'], ['ninguno', 'Ninguno']]),
    ancla: texto('Nombre para linkear (opcional, ej.: precios)', { editable: false }),
  },
  defaultProps: { contenido: [], fondo: '', ancho: 'contenido', alineacion: '', espacio: 'mediano', ancla: '' },
  render: ({ contenido: Contenido, fondo, ancho, alineacion, espacio, ancla, puck }) => (
    <section ref={puck.dragRef} id={ancla || undefined}
      className={clases('bloque-seccion', ancho === 'completa' && 'bloque-seccion--completa', fondo && `bloque-seccion--${fondo}`, alineacion === 'centro' && 'bloque-seccion--centro')}
      style={{ '--bloque-espacio': ESPACIOS[espacio] || ESPACIOS.mediano }}>
      <Contenido className="bloque-seccion__zona" />
    </section>
  ),
});

/* ---------- COLUMNAS ---------- */
const PROPORCIONES = {
  '1-1': ['1fr 1fr', 2], '1-2': ['1fr 2fr', 2], '2-1': ['2fr 1fr', 2],
  '1-1-1': ['1fr 1fr 1fr', 3], '1-1-1-1': ['1fr 1fr 1fr 1fr', 4],
};
export const Columnas = bloque({
  label: 'Columnas',
  fields: {
    proporcion: opciones('Columnas', [
      ['1-1', 'Dos iguales'], ['1-2', 'Dos: angosta + ancha'], ['2-1', 'Dos: ancha + angosta'],
      ['1-1-1', 'Tres iguales'], ['1-1-1-1', 'Cuatro iguales'],
    ]),
    alinear: opciones('Alinear verticalmente', [['start', 'Arriba'], ['center', 'Centro'], ['end', 'Abajo']]),
    separacion: opciones('Separación', [['16px', 'Chica'], ['32px', 'Mediana'], ['64px', 'Grande']]),
    celular: opciones('En el celular', [['', 'Una debajo de la otra'], ['invertir', 'Una debajo de la otra, empezando por la última']]),
    col1: { type: 'slot', label: 'Columna 1', allow: BLOQUES_INTERNOS },
    col2: { type: 'slot', label: 'Columna 2', allow: BLOQUES_INTERNOS },
    col3: { type: 'slot', label: 'Columna 3', allow: BLOQUES_INTERNOS },
    col4: { type: 'slot', label: 'Columna 4', allow: BLOQUES_INTERNOS },
  },
  defaultProps: { proporcion: '1-1', alinear: 'start', separacion: '32px', celular: '', col1: [], col2: [], col3: [], col4: [] },
  render: ({ proporcion, alinear, separacion, celular, col1: C1, col2: C2, col3: C3, col4: C4, puck }) => {
    const [plantilla, cantidad] = PROPORCIONES[proporcion] || PROPORCIONES['1-1'];
    return (
      <div ref={puck.dragRef} className={clases('bloque-columnas', celular === 'invertir' && 'bloque-columnas--invertir')}
        style={{ '--bloque-columnas': plantilla, '--bloque-alinear': alinear, '--bloque-gap': separacion }}>
        {[C1, C2, C3, C4].slice(0, cantidad).map((Columna, i) => <Columna key={i} className="bloque-columnas__col" />)}
      </div>
    );
  },
});

/* ---------- TÍTULO ---------- */
export const Titulo = bloque({
  label: 'Título',
  fields: {
    texto: parrafo('Texto'),
    nivel: opciones('Importancia (para Google)', [['h2', 'Título de sección'], ['h3', 'Subtítulo'], ['h1', 'Título principal de la página (uno solo)']]),
    tamano: opciones('Tamaño', [['grande', 'Grande'], ['mediano', 'Mediano'], ['chico', 'Chico']]),
    alineacion: opciones('Alineación', ALINEACION),
    color: color(),
  },
  defaultProps: { texto: 'Nuevo título', nivel: 'h2', tamano: 'mediano', alineacion: 'centro', color: '' },
  render: ({ texto: contenido, nivel = 'h2', tamano, alineacion, color: tono, puck }) => {
    const Etiqueta = ['h1', 'h2', 'h3'].includes(nivel) ? nivel : 'h2';
    return (
      <Etiqueta ref={puck.dragRef} className={clases('bloque-titulo', `bloque-titulo--${tamano || 'mediano'}`, `bloque--${alineacion || 'centro'}`, tono && `bloque-color--${tono}`)}>
        {conSaltos(contenido)}
      </Etiqueta>
    );
  },
});

/* ---------- TEXTO (con negrita, listas y links) ---------- */
export const Texto = bloque({
  label: 'Texto',
  fields: {
    texto: textoRico('Texto'),
    alineacion: opciones('Alineación', ALINEACION),
    color: color(),
    ancho: opciones('Ancho máximo', [['', 'Todo el espacio'], ['720px', 'Mediano (más fácil de leer)'], ['520px', 'Angosto']]),
  },
  defaultProps: { texto: '<p>Escribí acá el texto.</p>', alineacion: 'izquierda', color: '', ancho: '' },
  render: ({ texto: contenido, alineacion, color: tono, ancho, puck }) => (
    <div ref={puck.dragRef} className={clases('bloque-texto', `bloque--${alineacion || 'izquierda'}`, tono && `bloque-color--${tono}`)}
      style={ancho ? { maxWidth: ancho, marginLeft: alineacion === 'izquierda' ? undefined : 'auto', marginRight: alineacion === 'centro' ? 'auto' : undefined } : undefined}>
      {contenido}
    </div>
  ),
});

/* ---------- IMAGEN ---------- */
export const Imagen = bloque({
  label: 'Imagen',
  fields: {
    imagen: imagen('Imagen'),
    alt: texto('Descripción (para Google y lectores de pantalla)', { editable: false }),
    ancho: opciones('Ancho', [['100%', 'Todo el espacio'], ['75%', 'Tres cuartos'], ['50%', 'La mitad'], ['320px', 'Chica']]),
    alineacion: opciones('Alineación', ALINEACION),
    redondeada: opciones('Bordes', [[false, 'Rectos'], [true, 'Redondeados']], { radio: true }),
    epigrafe: texto('Epígrafe (opcional)'),
    link: link('Al tocarla lleva a (opcional)'),
  },
  defaultProps: { imagen: '/img/home/video-portada.webp', alt: '', ancho: '100%', alineacion: 'centro', redondeada: true, epigrafe: '', link: '' },
  render: ({ imagen: src, alt, ancho, alineacion, redondeada, epigrafe, link: destino, puck }) => {
    const foto = <Img src={src} alt={alt} />;
    return (
      <figure ref={puck.dragRef} className={clases('bloque-imagen', `bloque-imagen--${alineacion || 'centro'}`, redondeada && 'bloque-imagen--redondeada')}
        style={{ '--bloque-ancho': ancho || '100%', flexDirection: 'column', alignItems: alineacion === 'izquierda' ? 'flex-start' : alineacion === 'derecha' ? 'flex-end' : 'center' }}>
        {destino ? <a href={href(destino)} style={{ display: 'contents' }}>{foto}</a> : foto}
        {epigrafe && <figcaption>{epigrafe}</figcaption>}
      </figure>
    );
  },
});

/* ---------- BOTÓN ---------- */
export const Boton = bloque({
  label: 'Botón',
  fields: {
    texto: texto('Texto'),
    link: link('Lleva a'),
    estilo: opciones('Estilo', [['coral', 'Coral (principal)'], ['azul', 'Azul'], ['borde', 'Con borde']]),
    alineacion: opciones('Alineación', ALINEACION),
  },
  defaultProps: { texto: 'Pedí tu demo', link: '/demo', estilo: 'coral', alineacion: 'centro' },
  render: ({ texto: contenido, link: destino, estilo, alineacion, puck }) => (
    <div ref={puck.dragRef} className={clases('bloque-boton', `bloque-boton--${alineacion || 'centro'}`)}>
      <a className={estilo === 'borde' ? 'boton-borde' : clases('boton', estilo === 'azul' && 'boton--azul')} href={href(destino)}>{contenido}</a>
    </div>
  ),
});

/* ---------- VIDEO (portada que abre el video en una ventana) ---------- */
export const Video = bloque({
  label: 'Video',
  fields: {
    videoLink: link('Video (YouTube, Vimeo, Google Drive o .mp4)'),
    portada: imagen('Imagen de portada'),
    titulo: texto('Título del video (para lectores de pantalla)', { editable: false }),
    ancho: opciones('Ancho', [['100%', 'Todo el espacio'], ['75%', 'Tres cuartos'], ['50%', 'La mitad']]),
  },
  defaultProps: { videoLink: '', portada: '/img/home/video-portada.webp', titulo: 'Ver el video', ancho: '100%' },
  render: ({ videoLink, portada, titulo, ancho, puck }) => (
    <a ref={puck.dragRef} className="bloque-video" href={href(videoLink)} aria-label={titulo || 'Ver el video'} style={{ '--bloque-ancho': ancho || '100%' }}>
      <Img src={portada} alt="" />
      <img className="bloque-video__play" src="/img/home/play.svg" alt="" width="64" height="72" />
    </a>
  ),
});

/* ---------- CARRUSEL (logos, imágenes o tarjetas) ---------- */
export const Carrusel = bloque({
  label: 'Carrusel',
  fields: {
    estilo: opciones('Estilo', [['logos', 'Logos (en gris, se colorean al pasar)'], ['imagenes', 'Imágenes'], ['tarjetas', 'Tarjetas con texto']]),
    items: lista('Elementos', {
      imagen: imagen('Imagen'),
      alt: texto('Descripción de la imagen', { editable: false }),
      titulo: texto('Título (tarjetas)'),
      texto: parrafo('Texto (tarjetas)'),
      link: link('Al tocarlo lleva a (opcional)'),
    }, { resumen: (it) => it.titulo || it.alt, nuevo: { imagen: '', alt: '', titulo: '', texto: '', link: '' } }),
    porVista: numero('Cuántos se ven a la vez (escritorio)', { min: 1, max: 6 }),
    porVistaMovil: numero('Cuántos se ven a la vez (celular)', { min: 1, max: 3 }),
    automatico: opciones('Pasa solo', [[true, 'Sí'], [false, 'No, solo con flechas']], { radio: true }),
    segundos: numero('Segundos entre cada paso', { min: 2, max: 15 }),
  },
  defaultProps: { estilo: 'logos', items: [], porVista: 5, porVistaMovil: 2, automatico: true, segundos: 4 },
  render: ({ estilo, items = [], porVista, porVistaMovil, automatico, segundos, puck }) => (
    <div ref={puck.dragRef} className={clases('bloque-carrusel', `bloque-carrusel--${estilo || 'logos'}`)}
      data-carrusel-generico data-automatico={automatico ? 'si' : 'no'} data-segundos={segundos || 4}
      style={{ '--por-vista': porVista || 4, '--por-vista-movil': porVistaMovil || 1 }}
      role="region" aria-roledescription="carrusel" aria-label="Carrusel">
      <button className="bloque-carrusel__flecha bloque-carrusel__flecha--anterior" type="button" data-anterior aria-label="Anterior">‹</button>
      <div className="bloque-carrusel__pista">
        {items.map((it, i) => {
          const contenido = (
            <>
              <Img src={it.imagen} alt={it.alt} />
              {estilo === 'tarjetas' && it.titulo && <h3>{it.titulo}</h3>}
              {estilo === 'tarjetas' && it.texto && <p>{conSaltos(it.texto)}</p>}
            </>
          );
          return it.link
            ? <a key={i} className="bloque-carrusel__item" href={href(it.link)}>{contenido}</a>
            : <div key={i} className="bloque-carrusel__item">{contenido}</div>;
        })}
      </div>
      <button className="bloque-carrusel__flecha bloque-carrusel__flecha--siguiente" type="button" data-siguiente aria-label="Siguiente">›</button>
    </div>
  ),
});

/* ---------- ESPACIO EN BLANCO ---------- */
export const Espacio = bloque({
  label: 'Espacio',
  fields: { alto: opciones('Alto', [['24px', 'Chico'], ['56px', 'Mediano'], ['96px', 'Grande'], ['140px', 'Muy grande']]) },
  defaultProps: { alto: '56px' },
  render: ({ alto, puck }) => <div ref={puck.dragRef} className="bloque-espaciador" style={{ '--bloque-alto': alto || '56px' }} aria-hidden="true" />,
});
