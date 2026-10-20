/* =========================================================
   FOOTER — mismo HTML que el diseño original.
   Datos en los ajustes generales: footer.columnas (título y links),
   footer.email, footer.redes y footer.copyright.
   ========================================================= */
import { href } from '../util';

export default function Footer({ footer = {}, eventos }) {
  return (
    <footer className="footer" id="contacto" {...eventos}>
      <div className="footer__marca">
        <img src={footer.logo || '/img/home/logo-thinkion-footer.svg'} alt="Thinkion" width="150" height="26" loading="lazy" />
        {footer.sellos && <img className="footer__sellos" src={footer.sellos} alt={footer.sellosAlt || ''} width="138" height="95" loading="lazy" />}
      </div>

      <nav className="footer__columnas" aria-label="Links del pie de página">
        {(footer.columnas || []).map((columna, i) => (
          <div className="footer__columna" key={i}>
            <h2>{columna.titulo}</h2>
            {(columna.links || []).map((l, j) => <a key={j} href={href(l.link)}>{l.texto}</a>)}
          </div>
        ))}
      </nav>

      <div className="footer__contacto">
        {footer.contactoTitulo && <p className="footer__contacto-titulo">{footer.contactoTitulo}</p>}
        {footer.email && <a href={`mailto:${footer.email}`}>{footer.email}</a>}
        <div className="footer__redes">
          {(footer.redes || []).map((red, i) => (
            <a key={i} href={href(red.link)} target="_blank" rel="noopener" aria-label={`${red.nombre} de Thinkion`}>
              <img src={red.icono} alt="" width="16" height="16" loading="lazy" />
            </a>
          ))}
        </div>
      </div>

      {footer.copyright && <p className="footer__copyright">{footer.copyright}</p>}
    </footer>
  );
}
