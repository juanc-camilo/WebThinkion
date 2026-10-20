/* =========================================================
   BLOQUES DE PÁGINAS DE INDUSTRIA (Gastronomía, y Retail cuando esté)
   Mismo HTML y clases que el diseño original.
   ========================================================= */
import { texto, parrafo, textoRico, imagen, link, lista, opciones } from '../campos';
import { bloque, clases, conResaltado, conSaltos, Img, href } from '../util';
import { pestanaAbierta } from './inicio';

const slug = (t = '') => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'pestana';
const activa = (abierta, total) => Math.min(Math.max((Number(abierta) || 1) - 1, 0), Math.max(total - 1, 0));

/* ---------- PORTADA DE INDUSTRIA: título, bajada, botón y video ---------- */
export const HeroIndustria = bloque({
  label: 'Portada (industria)',
  fields: {
    titulo: parrafo('Título', { editable: false }),
    resaltado: texto('Palabra subrayada (tal cual está en el título)', { editable: false }),
    bajada: parrafo('Bajada'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
    videoLink: link('Video (YouTube, Vimeo o Drive)'),
    portada: imagen('Imagen del video'),
    portadaAlt: texto('Descripción de la imagen', { editable: false }),
  },
  defaultProps: { titulo: 'Título', resaltado: '', bajada: '', botonTexto: 'Pedí tu demo', botonLink: '/demo', videoLink: '', portada: '/img/segmentos/video-sistema.webp', portadaAlt: '' },
  render: ({ titulo, resaltado, bajada, botonTexto, botonLink, videoLink, portada, portadaAlt, puck }) => (
    <section className="seg-hero" ref={puck.dragRef}>
      <div className="seg-hero__texto">
        <h1 className="seg-hero__titulo">{conResaltado(titulo, resaltado, 'seg-hero__subrayado')}</h1>
        <p className="seg-hero__bajada">{conSaltos(bajada)}</p>
        {botonTexto && <a className="boton" href={href(botonLink)}>{botonTexto}</a>}
      </div>
      <div className="seg-video">
        <a className="seg-video__enlace" href={href(videoLink)} aria-label="Ver el video de Thinkion">
          <Img src={portada} alt={portadaAlt} ancho={1121} alto={621} prioridad />
          <img className="seg-video__play" src="/img/segmentos/play-grande.svg" alt="" width="92" height="111" />
        </a>
        <img className="seg-video__marco" src="/img/segmentos/marco-video-grande.svg" alt="" width="1187" height="702" aria-hidden="true" />
      </div>
    </section>
  ),
});

/* ---------- MÓDULOS EN PESTAÑAS (Punto de venta / Administración) ---------- */
export const ModulosPestanas = bloque({
  label: 'Módulos en pestañas',
  fields: {
    ancla: texto('Nombre para linkear (ej.: punto-de-venta)', { editable: false }),
    pestanas: lista('Pestañas', {
      nombre: texto('Nombre de la pestaña', { editable: false }),
      titulo: texto('Título'),
      items: lista('Beneficios', { icono: imagen('Ícono'), texto: texto('Texto') }, { resumen: 'texto', nuevo: { icono: '/img/segmentos/icono-rayo.svg', texto: 'Beneficio' } }),
      disposicion: opciones('Imágenes', [['celular', 'Notebook + celular (a la derecha)'], ['tablet', 'Notebook + tablet (a la izquierda)']]),
      imagenGrande: imagen('Imagen grande (notebook)'),
      imagenGrandeAlt: texto('Descripción', { editable: false }),
      imagenChica: imagen('Imagen chica (celular o tablet)'),
      imagenChicaAlt: texto('Descripción', { editable: false }),
    }, { resumen: 'nombre', nuevo: { nombre: 'Nueva', titulo: 'Título', items: [], disposicion: 'celular', imagenGrande: '', imagenGrandeAlt: '', imagenChica: '', imagenChicaAlt: '' } }),
    abierta: pestanaAbierta(),
  },
  defaultProps: { ancla: '', pestanas: [], abierta: 1 },
  render: ({ ancla, pestanas = [], abierta, id, puck }) => {
    const actual = activa(abierta, pestanas.length);
    const base = `modulos-${id || 'x'}`.replace(/[^a-z0-9-]/gi, '');
    return (
      <section className="seg-card reveal" id={ancla || undefined} data-tabs ref={puck.dragRef}>
        <img className="seg-card__chevron" src="/img/home/deco-chevron-tabs.svg" alt="" width="258" height="490" aria-hidden="true" />
        <div className="pestanas pestanas--ancha" role="tablist" aria-label="Módulos">
          {pestanas.map((p, i) => (
            <button key={i} className={clases('pestanas__boton', i === actual && 'is-activa')} type="button" role="tab"
              id={`tab-${base}-${slug(p.nombre)}`} aria-controls={`panel-${base}-${slug(p.nombre)}`} aria-selected={i === actual} data-tab={slug(p.nombre)}>
              {p.nombre}
            </button>
          ))}
        </div>
        {pestanas.map((p, i) => {
          const textoPanel = (
            <div className="seg-panel__texto">
              <h2>{p.titulo}</h2>
              <ul className="seg-lista">
                {(p.items || []).map((it, j) => <li key={j}><Img src={it.icono} ancho={24} alto={24} perezosa={false} />{it.texto}</li>)}
              </ul>
            </div>
          );
          const tablet = p.disposicion === 'tablet';
          const imagenes = tablet ? (
            <div className="seg-panel__imagen seg-panel__imagen--adm">
              <Img src={p.imagenGrande} alt={p.imagenGrandeAlt} ancho={538} alto={364} />
              <Img className="seg-panel__tablet" src={p.imagenChica} alt={p.imagenChicaAlt} ancho={222} alto={256} />
            </div>
          ) : (
            <div className="seg-panel__imagen">
              <Img className="seg-panel__notebook" src={p.imagenGrande} alt={p.imagenGrandeAlt} ancho={577} alto={355} />
              <Img className="seg-panel__celular" src={p.imagenChica} alt={p.imagenChicaAlt} ancho={148} alto={311} />
            </div>
          );
          return (
            <div key={i} className="seg-panel" role="tabpanel" id={`panel-${base}-${slug(p.nombre)}`}
              aria-labelledby={`tab-${base}-${slug(p.nombre)}`} data-panel={slug(p.nombre)} hidden={i !== actual}>
              {tablet ? <>{imagenes}{textoPanel}</> : <>{textoPanel}{imagenes}</>}
            </div>
          );
        })}
      </section>
    );
  },
});

/* ---------- HOJA DE RUTA: los 6 pasos de la instalación ----------
   Son 6 porque el dibujo de las líneas está hecho para 6 pasos. */
const CLASE_PASO = ['ruta__paso--activo', '', '', 'ruta__paso--grande', 'ruta__paso--ancho', ''];
export const HojaDeRuta = bloque({
  label: 'Hoja de ruta (6 pasos)',
  fields: {
    titulo: parrafo('Título'),
    pasos: lista('Pasos', { icono: imagen('Ícono'), texto: parrafo('Texto') }, { resumen: 'texto', min: 6, max: 6 }),
  },
  defaultProps: { titulo: 'La instalación más fácil', pasos: [] },
  render: ({ titulo, pasos = [], puck }) => (
    <section className="seg-ruta reveal" ref={puck.dragRef}>
      <h2 className="titulo-40">{conSaltos(titulo)}</h2>
      <div className="ruta">
        <img className="ruta__lineas" src="/img/segmentos/hoja-de-ruta-lineas.svg" alt="" width="1120" height="290" aria-hidden="true" />
        {pasos.slice(0, 6).map((p, i) => (
          <div key={i} className={clases('ruta__paso', CLASE_PASO[i])}>
            <span className="ruta__icono"><Img src={p.icono} ancho={100} alto={81} /></span>
            <p>{conSaltos(p.texto)}</p>
          </div>
        ))}
      </div>
    </section>
  ),
});

/* ---------- CALIDAD DE ATENCIÓN: texto y datos destacados ---------- */
export const Calidad = bloque({
  label: 'Datos destacados (calidad)',
  fields: {
    titulo: texto('Título'),
    texto: textoRico('Texto'),
    datos: lista('Datos', {
      icono: imagen('Ícono chico'),
      cifra: texto('Cifra (ej.: 94,5)', { editable: false }),
      unidad: texto('Unidad (ej.: %, min)', { editable: false }),
      texto: parrafo('Texto'),
    }, { resumen: (d) => `${d.cifra || ''}${d.unidad || ''}`, nuevo: { icono: '/img/segmentos/dato-check.svg', cifra: '100', unidad: '%', texto: 'Texto' } }),
  },
  defaultProps: { titulo: 'Garantizamos la mejor calidad de atención', texto: '', datos: [] },
  render: ({ titulo, texto: cuerpo, datos = [], puck }) => (
    <section className="seg-calidad reveal" ref={puck.dragRef}>
      <div className="seg-calidad__contenido">
        <div className="seg-calidad__texto">
          <h2>{titulo}</h2>
          {cuerpo}
        </div>
        <div className="seg-datos">
          {datos.map((d, i) => (
            <div key={i} className="dato">
              <p className="dato__cifra"><span className="dato__icono"><Img src={d.icono} ancho={12} alto={12} perezosa={false} /></span>{d.cifra}<small>{d.unidad}</small></p>
              <p>{conSaltos(d.texto)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

/* ---------- TECNOLOGÍA: grilla de tarjetas con imagen ---------- */
export const Tecnologia = bloque({
  label: 'Tarjetas con imagen (tecnología)',
  fields: {
    titulo: parrafo('Título'),
    tarjetas: lista('Tarjetas', { imagen: imagen('Imagen'), titulo: texto('Título'), texto: parrafo('Texto') },
      { resumen: 'titulo', nuevo: { imagen: '/img/segmentos/tec-ia.webp', titulo: 'Nueva', texto: 'Texto' } }),
  },
  defaultProps: { titulo: 'Tecnología de vanguardia', tarjetas: [] },
  render: ({ titulo, tarjetas = [], puck }) => (
    <section className="seg-tecno reveal" ref={puck.dragRef}>
      <h2 className="titulo-40">{conSaltos(titulo)}</h2>
      <div className="tecno-grilla">
        {tarjetas.map((t, i) => (
          <article key={i} className="tecno-card">
            {/* Solo el alto: el ancho sale de la proporción de cada ilustración */}
            <Img src={t.imagen} alto={170} />
            <h3>{t.titulo}</h3>
            <p>{conSaltos(t.texto)}</p>
          </article>
        ))}
      </div>
    </section>
  ),
});

/* ---------- PRODUCTOS: lista a la izquierda, detalle a la derecha ---------- */
export const Productos = bloque({
  label: 'Productos (lista con detalle)',
  fields: {
    productos: lista('Productos', {
      nombre: texto('Nombre', { editable: false }),
      icono: imagen('Ícono'),
      foto1: imagen('Foto 1'),
      foto2: imagen('Foto 2'),
      celular: imagen('Pantalla en el celular'),
      celularAlt: texto('Descripción del celular', { editable: false }),
      texto: parrafo('Texto'),
      linkTexto: texto('Texto del link'),
      link: link('El link lleva a'),
    }, { resumen: 'nombre', nuevo: { nombre: 'Nuevo producto', icono: '', foto1: '', foto2: '', celular: '', celularAlt: '', texto: 'Texto', linkTexto: 'Conocer más', link: '/' } }),
    abierta: pestanaAbierta('Producto abierto al cargar'),
  },
  defaultProps: { productos: [], abierta: 1 },
  render: ({ productos = [], abierta, id, puck }) => {
    const actual = activa(abierta, productos.length);
    const base = `productos-${id || 'x'}`.replace(/[^a-z0-9-]/gi, '');
    return (
      <section className="seg-productos reveal" data-tabs ref={puck.dragRef}>
        <div className="productos-lista" role="tablist" aria-label="Productos">
          {productos.map((p, i) => (
            <button key={i} className={clases('pestanas__boton', i === actual && 'is-activa')} type="button" role="tab"
              id={`tab-${base}-${slug(p.nombre)}`} aria-controls={`panel-${base}-${slug(p.nombre)}`} aria-selected={i === actual} data-tab={slug(p.nombre)}>
              <Img src={p.icono} ancho={36} alto={36} perezosa={false} />{p.nombre}
            </button>
          ))}
        </div>
        {productos.map((p, i) => (
          <div key={i} className="producto" role="tabpanel" id={`panel-${base}-${slug(p.nombre)}`}
            aria-labelledby={`tab-${base}-${slug(p.nombre)}`} data-panel={slug(p.nombre)} hidden={i !== actual}>
            <div className="producto__fotos">
              <div className="producto__columna">
                <Img src={p.foto1} ancho={352} alto={274} />
                <Img src={p.foto2} ancho={352} alto={274} />
              </div>
              <div className="producto__celular">
                <Img src={p.celular} alt={p.celularAlt} ancho={299} alto={542} />
              </div>
            </div>
            <div className="producto__pie">
              <div className="producto__barra"><span /></div>
              <div className="producto__texto">
                <p>{conSaltos(p.texto)}</p>
                {p.linkTexto && <a className="boton-borde" href={href(p.link)}>{p.linkTexto}</a>}
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  },
});
