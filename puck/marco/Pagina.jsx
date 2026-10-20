/* =========================================================
   PÁGINA — lo que envuelve a los bloques: fondo decorativo, menú,
   contenido y footer. Es el "root" de Puck: lo mismo se ve en el
   editor y en la web publicada.
   Cada página elige una PLANTILLA (estilo): define las clases del
   diseño original (colores de botones, separaciones) y el fondo.
   ========================================================= */
import Navbar from './Navbar';
import Footer from './Footer';
import Comportamientos from './Comportamientos';
import { cssTemporadas, scriptTemporadas } from './temporadas';

export const PLANTILLAS = {
  inicio: { label: 'Inicio', pagina: 'pagina-home', main: 'home', fondo: 'inicio' },
  producto: { label: 'Producto', pagina: 'pagina-check pagina-solucion', main: 'check solucion', fondo: 'segmento' },
  auditorias: { label: 'Producto (estilo Check)', pagina: 'pagina-check pagina-auditorias', main: 'check', fondo: 'segmento' },
  'pos-erp': { label: 'Producto (estilo POS & ERP)', pagina: 'pagina-check pagina-solucion pagina-pos-erp', main: 'check solucion', fondo: 'segmento' },
  industria: { label: 'Industria (Gastronomía, Retail)', pagina: 'pagina-segmento pagina-gastro', main: 'segmento', fondo: 'segmento' },
  clientes: { label: 'Clientes', pagina: 'pagina-clientes', main: 'clientes-pag', fondo: 'segmento' },
  institucional: { label: 'Institucional (Nosotros)', pagina: 'pagina-nosotros', main: 'nosotros', fondo: 'nosotros' },
  demo: { label: 'Formulario de demo', pagina: 'pagina-nosotros pagina-demo', main: 'nosotros', fondo: 'segmento' },
  empleo: { label: 'Formulario de empleo', pagina: 'pagina-nosotros pagina-postulacion', main: 'nosotros', fondo: 'segmento' },
  construccion: { label: 'En construcción', pagina: 'pagina-construccion', main: 'construccion', fondo: 'construccion' },
};

/* ---------- Fondo decorativo (manchas de color del diseño) ---------- */
function FondoDeco({ tipo }) {
  const img = (clase, src, ancho, alto) => <img className={clase} src={src} alt="" width={ancho} height={alto} />;
  return (
    <div className="fondo-deco" aria-hidden="true">
      {tipo === 'inicio' && <>
        {img('fondo-deco__hero', '/img/home/fondo-hero.svg', 2065, 1564)}
        {img('fondo-deco__violeta', '/img/home/fondo-mancha-violeta.svg', 1819, 1588)}
        {img('fondo-deco__coral-izq', '/img/home/fondo-mancha-coral-izq.svg', 2045, 2064)}
        {img('fondo-deco__coral-der', '/img/home/fondo-mancha-coral-der.svg', 2207, 2328)}
      </>}
      {tipo === 'segmento' && <>
        {img('fondo-seg__hero', '/img/segmentos/fondo-gastro-hero.svg', 2162, 1564)}
        {img('fondo-seg__lila', '/img/segmentos/fondo-lila.svg', 1657, 1657)}
        {img('fondo-seg__violeta', '/img/segmentos/fondo-gastro-violeta.svg', 1823, 1746)}
        {img('fondo-seg__izq', '/img/segmentos/fondo-gastro-coral-izq.svg', 2045, 2064)}
        {img('fondo-seg__der', '/img/segmentos/fondo-gastro-coral-der.svg', 2207, 2328)}
      </>}
      {tipo === 'nosotros' && img('fondo-pagina', '/img/nosotros/fondo-nosotros.svg', 3240, 3573)}
      {tipo === 'construccion' && img('fondo-deco__hero', '/img/home/fondo-hero.svg', 2065, 1564)}
    </div>
  );
}

/* En el editor, los links del menú y del footer no tienen que llevar a otra página */
const noNavegar = (evento) => { if (evento.target.closest('a')) evento.preventDefault(); };

export default function Pagina({ children, plantilla, puck }) {
  const estilo = PLANTILLAS[plantilla] || PLANTILLAS.producto;
  const { ajustes = {}, ruta = '/' } = puck?.metadata || {};
  const editando = Boolean(puck?.isEditing);
  const eventos = editando ? { onClickCapture: noNavegar } : undefined;
  return (
    // "web": solo en la página publicada (ver src/styles/puck-ajustes.css)
    <div className={`${estilo.pagina}${editando ? '' : ' web'}`}>
      {/* Temporada: colores de la temporada activa (se elige antes de pintar la página) */}
      <style dangerouslySetInnerHTML={{ __html: cssTemporadas(ajustes.temporadas) }} />
      {!editando && <script dangerouslySetInnerHTML={{ __html: scriptTemporadas(ajustes.temporadas) }} />}

      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <FondoDeco tipo={estilo.fondo} />
      <Navbar menu={ajustes.menu} rutaActual={ruta} eventos={eventos} />
      <main id="contenido" className={estilo.main}>{children}</main>
      <Footer footer={ajustes.footer} eventos={eventos} />

      {/* Menú, pestañas, carruseles, video en ventana y banner (solo en la web, no en el editor) */}
      {!editando && <Comportamientos temporadas={ajustes.temporadas} />}
    </div>
  );
}
