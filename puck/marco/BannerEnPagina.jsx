/* =========================================================
   BANNER DENTRO DE LA PÁGINA — franja de aviso, franja debajo del
   menú y portada completa (Figma "Intervención - mini banner" e
   "Intervención completa").
   Vienen en el HTML, ocultos: el script de banner.js (scriptBanner)
   los muestra antes de pintar si corresponde por fecha. En la vista
   previa del panel se muestran siempre (vista = true).
   El formato "ventana" no está acá: lo abre Comportamientos.jsx.
   ========================================================= */
import { normalizarBanner, esVideo, textoSobre } from './banner';
import { href } from '../util';

/* Imagen o video; con imagen para celular, el navegador elige cuál bajar */
function Media({ b, clase }) {
  if (!b.imagen) return null;
  if (esVideo(b.imagen)) {
    return <video className={clase} src={b.imagen} autoPlay muted loop playsInline aria-label={b.imagenAlt || undefined} />;
  }
  return (
    <picture>
      {b.imagenCelular && !esVideo(b.imagenCelular) && <source media="(max-width: 760px)" srcSet={b.imagenCelular} />}
      <img className={clase} src={b.imagen} alt={b.imagenAlt || ''} />
    </picture>
  );
}

/* Título, texto y botón (solo lo que esté prendido) */
function Cuerpo({ b, clase, vista }) {
  if (!b.verTexto && !b.verBoton) return null;
  const Boton = vista ? 'span' : 'a';
  return (
    <div className={clase}>
      {b.verTexto && b.titulo && <h2>{b.titulo}</h2>}
      {b.verTexto && b.texto && <p>{b.texto}</p>}
      {b.verBoton && <Boton className="banner-temporada__boton" href={vista ? undefined : href(b.botonLink)}>{b.botonTexto}</Boton>}
    </div>
  );
}

// Colores del panel. En la franja y la portada, el fondo blanco de siempre
// se toma como "sin elegir": queda el violeta del diseño.
const variables = (b) => ({
  '--banner-fondo': b.colorFondo && b.colorFondo.toLowerCase() !== '#ffffff' ? b.colorFondo : undefined,
  '--banner-texto': b.mostrarTexto && b.colorTexto && b.colorTexto.toLowerCase() !== '#1b1b1b' ? b.colorTexto : undefined,
  '--banner-boton': b.colorBoton || undefined,
  '--banner-boton-texto': textoSobre(b.colorBoton) || undefined,
});

/* ---------- Franja de aviso (arriba de todo, texto chico) ---------- */
export function AvisoPromo({ banner, vista = false }) {
  const b = normalizarBanner(banner);
  if (!b.activo || !b.aviso) return null;
  return (
    <div className={`aviso-promo${vista ? ' is-vista' : ''}`} role="note">
      {b.avisoLink && !vista ? <a href={href(b.avisoLink)}>{b.aviso}</a> : b.aviso}
    </div>
  );
}

/* ---------- Franja debajo del menú / portada completa ---------- */
export function BannerEnPagina({ banner, vista = false }) {
  const b = normalizarBanner(banner);
  if (!b.activo || b.formato === 'ventana') return null;
  const media = <Media b={b} clase="banner-pagina__imagen" />;
  const conLink = b.linkImagen && !vista ? <a className="banner-pagina__enlace" href={href(b.linkImagen)}>{media}</a> : media;

  if (b.formato === 'portada') {
    return (
      <section className={`banner-portada${vista ? ' is-vista' : ''}`} style={variables(b)} aria-label={b.imagenAlt || b.titulo || 'Promoción'}>
        {conLink}
        <Cuerpo b={b} clase="banner-portada__cuerpo" vista={vista} />
      </section>
    );
  }

  return (
    <section className={`banner-franja banner-franja--anim-${b.animacion}${b.soloImagen ? ' banner-franja--solo-imagen' : ''}${vista ? ' is-vista' : ''}`}
      style={variables(b)} aria-label={b.imagenAlt || b.titulo || 'Promoción'} data-banner-franja={b.clave} data-frecuencia={b.frecuencia}>
      {conLink}
      <Cuerpo b={b} clase="banner-temporada__cuerpo" vista={vista} />
      {vista
        ? <span className="banner-temporada__cerrar" aria-hidden="true">×</span>
        : <button className="banner-temporada__cerrar" type="button" aria-label="Cerrar" data-cerrar-franja>×</button>}
    </section>
  );
}
