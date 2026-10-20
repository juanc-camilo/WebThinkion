/* =========================================================
   MENÚ (navbar) — mismo HTML que el diseño original.
   Los datos salen de los ajustes generales (contenido/ajustes.json):
     menu.items: links sueltos o desplegables con sus opciones.
       - Desplegable estilo "soluciones": cada opción muestra una lista
         (una línea por renglón del detalle).
       - Desplegable estilo "industrias": cada opción muestra un texto.
     menu.botonTexto / menu.botonLink: el botón "Pedí tu demo".
   El comportamiento (abrir, cerrar, menú del celular) lo da
   Comportamientos.jsx en la web publicada.
   ========================================================= */
import { href } from '../util';

const Flecha = () => <img src="/img/home/flecha-abajo-blanca.svg" alt="" width="12" height="8" />;

function Opcion({ opcion, estilo }) {
  const lineas = String(opcion.detalle || '').split('\n').map((l) => l.trim()).filter(Boolean);
  return (
    <a className="dropdown__bloque" href={href(opcion.link)}>
      <span className="dropdown__titulo">
        {opcion.icono && <img src={opcion.icono} alt="" width="24" height="24" />}{opcion.titulo}
      </span>
      {estilo === 'soluciones'
        ? lineas.length > 0 && <ul className="dropdown__sublista">{lineas.map((l) => <li key={l}>{l}</li>)}</ul>
        : opcion.detalle && <span className="dropdown__texto">{opcion.detalle}</span>}
    </a>
  );
}

export default function Navbar({ menu = {}, rutaActual, eventos }) {
  const items = menu.items || [];
  // En la página del botón (ej.: /demo) no se muestra el botón: ya estás ahí
  const conBoton = menu.botonTexto && href(menu.botonLink) !== rutaActual;
  return (
    <header className="navbar" data-navbar {...eventos}>
      <a className="navbar__logo" href="/" aria-label="Thinkion, inicio">
        <img className="navbar__logo-claro" src="/img/home/logo-thinkion-blanco.svg" alt="Thinkion" width="189" height="33" />
        <img className="navbar__logo-oscuro" src="/img/home/logo-thinkion-oscuro.svg" alt="" width="189" height="33" aria-hidden="true" />
      </a>

      <nav className="navbar__menu" id="menu-principal" aria-label="Navegación principal">
        {items.map((item, i) => (item.tipo === 'desplegable' ? (
          <div className="navbar__item" data-dropdown key={i}>
            <button className="navbar__link" type="button" aria-expanded="false">{item.texto}<Flecha /></button>
            <div className={`dropdown dropdown--${item.estilo === 'industrias' ? 'industrias' : 'soluciones'}`}>
              {(item.opciones || []).map((opcion, j) => <Opcion key={j} opcion={opcion} estilo={item.estilo} />)}
            </div>
          </div>
        ) : (
          <a className="navbar__link" href={href(item.link)} key={i}>{item.texto}</a>
        )))}
        {conBoton && <a className="boton-demo navbar__demo-movil" href={href(menu.botonLink)}>{menu.botonTexto}</a>}
      </nav>

      {conBoton && (
        <a className="boton-demo navbar__demo" href={href(menu.botonLink)}>
          {menu.botonTexto}
          <img src="/img/home/chevron-boton.svg" alt="" width="8" height="13" />
        </a>
      )}

      <button className="navbar__hamburguesa" type="button" aria-expanded="false" aria-controls="menu-principal">
        <span /><span /><span />
        <b className="sr-only">Abrir menú</b>
      </button>
    </header>
  );
}
