/* =========================================================
   BANNER AL ENTRAR A LA WEB — opciones y valores por defecto.
   Lo usan el panel (campos y vista previa, config-ajustes.jsx) y la
   web (Comportamientos.jsx), así los dos muestran lo mismo.
   Se guarda en contenido/ajustes.json → banner:
     activo, desde, hasta            → si se muestra y cuándo
     formato                         → "ventana" (flota sobre la página),
                                       "franja" (recuadro debajo del menú) o
                                       "portada" (ocupa toda la parte de arriba)
     aviso, avisoLink                → franja angosta de texto arriba de todo
     imagen, imagenCelular, imagenAlt, linkImagen → imagen, GIF, WebP animado o video
     mostrarTexto, titulo, texto     → texto (se puede apagar)
     mostrarBoton, botonTexto, botonLink
     animacion, posicion, ancho, fondo → cómo aparece y dónde
     colorFondo, colorTexto, colorBoton
     frecuencia, paginas, retraso
   Con texto y botón apagados queda solo la imagen (sin el recuadro
   de abajo): sirve para un banner hecho en Figma, como el de fiestas.
   ========================================================= */

export const FORMATOS = [
  ['ventana', 'Ventana que aparece sobre la página'],
  ['franja', 'Franja debajo del menú (como en el Figma "mini banner")'],
  ['portada', 'Portada completa: ocupa toda la parte de arriba'],
];

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
  activo: false, desde: '', hasta: '', formato: 'ventana',
  aviso: '', avisoLink: '',
  imagen: '', imagenCelular: '', imagenAlt: '', linkImagen: '',
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
  b.formato = valida(FORMATOS, b.formato, 'ventana');
  b.animacion = valida(ANIMACIONES, b.animacion, 'abajo');
  b.posicion = valida(POSICIONES, b.posicion, 'centro');
  b.ancho = valida(ANCHOS, b.ancho, 'mediano');
  b.fondo = valida(FONDOS, b.fondo, 'difuminado');
  // Qué se ve: solo lo que está prendido y tiene contenido
  b.verTexto = b.mostrarTexto && Boolean(b.titulo || b.texto);
  b.verBoton = b.mostrarBoton && Boolean(b.botonTexto && b.botonLink);
  b.soloImagen = Boolean(b.imagen) && !b.verTexto && !b.verBoton;
  // Si se cambia el banner, vuelve a aparecer aunque ya lo hayan cerrado
  b.clave = `banner-visto:${[b.desde, b.titulo, b.texto, b.imagen].join('|')}`;
  return b;
};

/* ---------- Script antes de pintar la página ----------
   La franja de aviso, la franja y la portada vienen en el HTML pero
   ocultas. Este script corre antes de que se vea la página y decide si
   se muestran (fechas, y para la franja si ya la cerraron): pone
   data-aviso y data-banner="franja|portada" en <html>. Así no hay
   salto de contenido al cargar. La ventana la abre Comportamientos.jsx. */
export const scriptBanner = (banner) => {
  const b = normalizarBanner(banner);
  const datos = JSON.stringify({
    activo: b.activo, desde: b.desde, hasta: b.hasta, formato: b.formato, aviso: Boolean(b.aviso),
    clave: b.clave, frecuencia: b.frecuencia,
  }).replace(/</g, '\\u003c');
  return `(function(){try{var b=${datos};if(!b.activo)return;var r=document.documentElement,h=new Date(),`
    + `hoy=h.getFullYear()+'-'+('0'+(h.getMonth()+1)).slice(-2)+'-'+('0'+h.getDate()).slice(-2),`
    + `ver=location.search.indexOf('banner=')>-1;`
    + `if(!ver&&((b.desde&&hoy<b.desde)||(b.hasta&&hoy>b.hasta)))return;`
    + `if(b.aviso)r.setAttribute('data-aviso','');if(b.formato==='ventana')return;`
    + `if(b.formato==='franja'&&!ver){var v=null;try{v=(b.frecuencia==='sesion'?sessionStorage:localStorage).getItem(b.clave)}catch(e){}`
    + `if(v&&(b.frecuencia!=='dia'||v===h.toDateString())&&b.frecuencia!=='siempre')return;}`
    + `r.setAttribute('data-banner',b.formato);}catch(e){}})();`;
};

// Letra del botón: oscura sobre colores claros (ej.: lima #d5f901), blanca sobre oscuros
export const textoSobre = (color = '') => {
  const hex = String(color).trim().replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(hex)) return '';
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) > 160 ? '#1b1b1b' : '#ffffff';
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
