/* =========================================================
   BANNER AL ENTRAR A LA WEB — opciones y valores por defecto.
   Lo usan el panel (campos y vista previa, config-ajustes.jsx) y la
   web (Comportamientos.jsx), así los dos muestran lo mismo.
   Se guarda en contenido/ajustes.json → banner:
     activo, desde, hasta            → si se muestra y cuándo
     imagen, imagenAlt, linkImagen   → imagen, GIF, WebP animado o video
     mostrarTexto, titulo, texto     → texto (se puede apagar)
     mostrarBoton, botonTexto, botonLink
     animacion, posicion, ancho, fondo → cómo aparece y dónde
     colorFondo, colorTexto, colorBoton
     frecuencia, paginas, retraso
   Con texto y botón apagados queda solo la imagen (sin el recuadro
   de abajo): sirve para un banner hecho en Figma, como el de fiestas.
   ========================================================= */

export const ANIMACIONES = [
  ['abajo', 'Sube desde abajo'],
  ['arriba', 'Baja desde arriba'],
  ['izquierda', 'Entra desde la izquierda'],
  ['derecha', 'Entra desde la derecha'],
  ['zoom', 'Se agranda desde el centro'],
  ['rebote', 'Salta (con rebote)'],
  ['fundido', 'Aparece de a poco'],
];
export const POSICIONES = [['centro', 'Al centro'], ['arriba', 'Arriba'], ['abajo', 'Abajo'], ['esquina', 'Abajo a la derecha']];
export const ANCHOS = [['chico', 'Chico'], ['mediano', 'Mediano'], ['grande', 'Grande']];
export const FONDOS = [['difuminado', 'La página difuminada'], ['oscuro', 'La página oscurecida'], ['nada', 'Nada (se ve la página)']];

export const BANNER_POR_DEFECTO = {
  activo: false, desde: '', hasta: '',
  imagen: '', imagenAlt: '', linkImagen: '',
  mostrarTexto: true, titulo: '', texto: '',
  mostrarBoton: true, botonTexto: 'Pedí tu demo', botonLink: '/demo',
  animacion: 'abajo', posicion: 'centro', ancho: 'mediano', fondo: 'difuminado',
  colorFondo: '#ffffff', colorTexto: '#1b1b1b', colorBoton: '#c9373d',
  frecuencia: 'sesion', paginas: 'todas', retraso: 1,
};

const valida = (lista, valor, porDefecto) => (lista.some(([v]) => v === valor) ? valor : porDefecto);

// Completa lo que falte (banners guardados antes de que existieran estas opciones)
export const normalizarBanner = (banner = {}) => {
  const b = { ...BANNER_POR_DEFECTO, ...banner };
  b.mostrarTexto = b.mostrarTexto !== false && b.mostrarTexto !== 'false';
  b.mostrarBoton = b.mostrarBoton !== false && b.mostrarBoton !== 'false';
  b.animacion = valida(ANIMACIONES, b.animacion, 'abajo');
  b.posicion = valida(POSICIONES, b.posicion, 'centro');
  b.ancho = valida(ANCHOS, b.ancho, 'mediano');
  b.fondo = valida(FONDOS, b.fondo, 'difuminado');
  // Qué se ve: solo lo que está prendido y tiene contenido
  b.verTexto = b.mostrarTexto && Boolean(b.titulo || b.texto);
  b.verBoton = b.mostrarBoton && Boolean(b.botonTexto && b.botonLink);
  b.soloImagen = Boolean(b.imagen) && !b.verTexto && !b.verBoton;
  return b;
};

// Video (MP4/WebM) en vez de imagen: se reproduce solo, sin sonido y en bucle
export const esVideo = (url = '') => /\.(mp4|webm)(\?|#|$)/i.test(url);

// Clases del banner: posición, tamaño, animación, fondo y "solo imagen"
export const clasesBanner = (b) => [
  'banner-temporada',
  `banner-temporada--${b.posicion}`,
  `banner-temporada--${b.ancho}`,
  `banner-temporada--anim-${b.animacion}`,
  `banner-temporada--fondo-${b.fondo}`,
  b.soloImagen ? 'banner-temporada--solo-imagen' : '',
].filter(Boolean).join(' ');
