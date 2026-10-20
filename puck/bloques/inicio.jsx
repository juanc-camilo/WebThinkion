/* =========================================================
   BLOQUES DEL HOME — mismo HTML y clases que el diseño original,
   así se ven igual. Cada bloque define:
     fields       → lo que se edita en el panel
     defaultProps → cómo aparece al agregarlo
     render       → el HTML
   ========================================================= */
import { texto, parrafo, textoRico, imagen, link, lista, opciones, numero } from '../campos';
import { bloque, clases, conResaltado, conSaltos, Img, href } from '../util';

/* ---------- HERO DEL HOME: título, bajada, botón y video ---------- */
export const HeroInicio = bloque({
  label: 'Portada (Home)',
  fields: {
    titulo: parrafo('Título', { editable: false }),
    resaltado: texto('Palabra subrayada (tal cual está en el título)', { editable: false }),
    bajada: textoRico('Bajada'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
    videoLink: link('Video (YouTube, Vimeo o Drive)'),
    portada: imagen('Imagen del video'),
    portadaAlt: texto('Descripción de la imagen', { editable: false }),
  },
  defaultProps: {
    titulo: 'Crecé sin límites, simplificá tu negocio',
    resaltado: 'Crecé',
    bajada: '<p>Un ecosistema que se adapta al tamaño de tu negocio.</p>',
    botonTexto: 'Pedí tu demo',
    botonLink: '/demo',
    videoLink: '',
    portada: '/img/home/video-portada.webp',
    portadaAlt: '',
  },
  render: ({ titulo, resaltado, bajada, botonTexto, botonLink, videoLink, portada, portadaAlt, puck }) => (
    <section className="hero" ref={puck.dragRef}>
      <div className="hero__texto">
        <h1 className="hero__titulo">{conResaltado(titulo, resaltado, 'subrayado')}</h1>
        <div className="hero__bajada">{bajada}</div>
        {botonTexto && <a className="boton" href={href(botonLink)}>{botonTexto}</a>}
      </div>
      <div className="hero__video-marco">
        <a className="hero__video" href={href(videoLink)} aria-label="Ver el video de Thinkion">
          <Img src={portada} alt={portadaAlt} ancho={543} alto={335} prioridad />
          <img className="hero__play" src="/img/home/play.svg" alt="" width="37" height="41" />
        </a>
        <img className="hero__lineas" src="/img/home/marco-video.svg" alt="" width="591" height="386" aria-hidden="true" />
      </div>
    </section>
  ),
});

/* ---------- DIFERENCIALES: título, bajada y tarjetas con ícono ---------- */
const AJUSTE_ICONO = [['', 'Normal'], ['lampara', 'Fundir con el fondo'], ['suave', 'Más suave']];
export const Diferenciales = bloque({
  label: 'Diferenciales (tres tarjetas)',
  fields: {
    titulo: texto('Título'),
    bajada: parrafo('Bajada'),
    pilares: lista('Tarjetas', {
      icono: imagen('Ícono'),
      titulo: texto('Título'),
      texto: parrafo('Texto'),
      ajuste: opciones('Ajuste del ícono', AJUSTE_ICONO),
    }, { resumen: 'titulo', nuevo: { icono: '/img/home/icono-integracion.webp', titulo: 'Nueva tarjeta', texto: 'Texto de la tarjeta.', ajuste: '' } }),
  },
  defaultProps: {
    titulo: 'Todo tu negocio conectado en un solo ecosistema',
    bajada: 'Una plataforma que conecta todos los puntos de tu operación, sin importar la industria.',
    pilares: [],
  },
  render: ({ titulo, bajada, pilares = [], puck }) => (
    <section className="diferenciales reveal" ref={puck.dragRef}>
      <div className="diferenciales__encabezado">
        <h2 className="diferenciales__titulo">{conSaltos(titulo)}</h2>
        <p className="diferenciales__bajada">{conSaltos(bajada)}</p>
      </div>
      <ul className="diferenciales__lista">
        {pilares.map((p, i) => (
          <li className="pilar" key={i}>
            <Img src={p.icono} ancho={128} alto={128} className={p.ajuste ? `pilar__icono-${p.ajuste}` : undefined} />
            <h3>{p.titulo}</h3>
            <p>{conSaltos(p.texto)}</p>
          </li>
        ))}
      </ul>
    </section>
  ),
});

/* ---------- DIAGRAMA DE SOLUCIONES: módulos conectados ----------
   Las posiciones del dibujo son fijas (no se mueven: el diagrama es un
   dibujo). Se cambian el nombre y la imagen de cada módulo. */
const POSICIONES = [
  { x: 374.21, y: 84.12, tipo: 'grande' }, { x: 235.24, y: 279.12, tipo: 'grande' }, { x: 510.24, y: 279.12, tipo: 'grande' },
  { x: 149.51, y: 112.77, tipo: 'azul' }, { x: 59.77, y: 254.76, tipo: 'azul' }, { x: 92.77, y: 392.75 }, { x: 226.77, y: 462.76 },
  { x: 372.72, y: 410.76 }, { x: 570.72, y: 66.76 }, { x: 658.51, y: 172.76 }, { x: 690.13, y: 309.76 }, { x: 626.6, y: 425.77 },
];
export const DiagramaSoluciones = bloque({
  label: 'Diagrama de soluciones',
  fields: {
    modulos: lista('Módulos (12, en el orden del dibujo)', {
      nombre: texto('Nombre', { editable: false }),
      imagen: imagen('Imagen'),
      opacidad: numero('Opacidad de la imagen (0 a 1)', { min: 0, max: 1, step: 0.1 }),
    }, { resumen: 'nombre', min: 12, max: 12 }),
    titulo: texto('Título'),
    bajada: parrafo('Bajada'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
  },
  defaultProps: { modulos: [], titulo: 'Soluciones que se potencian entre sí', bajada: '', botonTexto: 'Pedí tu demo', botonLink: '/demo' },
  render: ({ modulos = [], titulo, bajada, botonTexto, botonLink, puck }) => (
    <section className="soluciones reveal" id="soluciones" ref={puck.dragRef}>
      {/* Curvas que siguen los textos de los módulos */}
      <svg className="arcos" aria-hidden="true" focusable="false">
        <path id="arco-chico" d="M -46.19 0 A 46.19 46.19 0 0 1 46.19 0" />
        <path id="arco-grande" d="M -65.96 0 A 65.96 65.96 0 0 1 65.96 0" />
      </svg>
      <div className="diagrama">
        <img className="diagrama__lineas" src="/img/home/diagrama-lineas.svg" alt="" width="726" height="505" aria-hidden="true" loading="lazy" />
        {POSICIONES.map((pos, i) => {
          const modulo = modulos[i] || {};
          const grande = pos.tipo === 'grande';
          return (
            <figure key={i} className={clases('modulo', grande && 'modulo--grande', pos.tipo === 'azul' && 'modulo--azul')} style={{ '--x': pos.x, '--y': pos.y }}>
              <svg className="modulo__etiqueta" viewBox={grande ? '-84 -84 168 168' : '-60 -60 120 120'}>
                <text><textPath href={grande ? '#arco-grande' : '#arco-chico'} startOffset="50%">{modulo.nombre}</textPath></text>
              </svg>
              <span className="modulo__circulo">
                <Img src={modulo.imagen} ancho={grande ? 122 : 85} alto={grande ? 122 : 85}
                  style={modulo.opacidad != null && modulo.opacidad !== '' && Number(modulo.opacidad) !== 1 ? { opacity: Number(modulo.opacidad) } : undefined} />
              </span>
            </figure>
          );
        })}
      </div>
      <div className="soluciones__texto">
        <h2 className="titulo-seccion">{conSaltos(titulo)}</h2>
        <p className="bajada-seccion soluciones__bajada">{conSaltos(bajada)}</p>
      </div>
      {botonTexto && <a className="boton" href={href(botonLink)}>{botonTexto}</a>}
    </section>
  ),
});

/* ---------- INDUSTRIAS: pestañas con texto e imagen ---------- */
const slug = (t = '') => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'pestana';
export const pestanaAbierta = (label = 'Pestaña abierta al cargar') => numero(`${label} (1 = la primera)`, { min: 1, max: 12 });
const activa = (abierta, total) => Math.min(Math.max((Number(abierta) || 1) - 1, 0), Math.max(total - 1, 0));

export const Industrias = bloque({
  label: 'Industrias (pestañas)',
  fields: {
    pestanas: lista('Pestañas', {
      nombre: texto('Nombre de la pestaña', { editable: false }),
      titulo: texto('Título'),
      texto: textoRico('Texto'),
      imagen: imagen('Imagen'),
      imagenAlt: texto('Descripción de la imagen', { editable: false }),
    }, { resumen: 'nombre', nuevo: { nombre: 'Nueva', titulo: 'Título', texto: '<p>Texto</p>', imagen: '/img/home/tab-retail.webp', imagenAlt: '' } }),
    abierta: pestanaAbierta(),
  },
  defaultProps: { pestanas: [], abierta: 1 },
  render: ({ pestanas = [], abierta, id, puck }) => {
    const actual = activa(abierta, pestanas.length);
    const base = `industrias-${id || 'x'}`.replace(/[^a-z0-9-]/gi, '');
    return (
      <section className="industrias reveal" data-tabs ref={puck.dragRef}>
        <div className="pestanas" role="tablist" aria-label="Industrias">
          {pestanas.map((p, i) => (
            <button key={i} className={clases('pestanas__boton', i === actual && 'is-activa')} type="button" role="tab"
              id={`tab-${base}-${slug(p.nombre)}`} aria-controls={`panel-${base}-${slug(p.nombre)}`} aria-selected={i === actual} data-tab={slug(p.nombre)}>
              {p.nombre}
            </button>
          ))}
        </div>
        <div className="industrias__card">
          <img className="industrias__chevron" src="/img/home/deco-chevron-tabs.svg" alt="" width="282" height="536" aria-hidden="true" />
          {pestanas.map((p, i) => (
            <div key={i} className="industrias__panel" role="tabpanel" id={`panel-${base}-${slug(p.nombre)}`}
              aria-labelledby={`tab-${base}-${slug(p.nombre)}`} data-panel={slug(p.nombre)} hidden={i !== actual}>
              <div className="industrias__texto">
                <h2>{p.titulo}</h2>
                {p.texto}
              </div>
              <Img src={p.imagen} alt={p.imagenAlt} ancho={377} alto={338} />
            </div>
          ))}
        </div>
      </section>
    );
  },
});

/* ---------- CLIENTES (carrusel con fotos y logos) + testimonio ---------- */
const AJUSTE_LOGO = [['', 'Normal'], ['ancho', 'Ancho'], ['temple', 'Recortado (Temple)'], ['mishka', 'Más chico (Mishka)']];
export const ClientesCarrusel = bloque({
  label: 'Carrusel de clientes',
  fields: {
    titulo: texto('Título'),
    clientes: lista('Clientes', {
      foto: imagen('Foto (local o plato)'),
      fotoAlt: texto('Descripción de la foto', { editable: false }),
      logo: imagen('Logo'),
      nombre: texto('Nombre del cliente', { editable: false }),
      rubro: texto('Rubro'),
      ajusteLogo: opciones('Tamaño del logo', AJUSTE_LOGO),
    }, { resumen: 'nombre', nuevo: { foto: '', fotoAlt: '', logo: '', nombre: 'Nuevo cliente', rubro: 'Gastronomía', ajusteLogo: 'ancho' } }),
    destacado: numero('Cliente destacado al cargar (1 = el primero)', { min: 1, max: 40 }),
    cita: parrafo('Testimonio'),
    autor: texto('Autor del testimonio'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
  },
  defaultProps: { titulo: 'Ellos ya se sumaron al cambio', clientes: [], destacado: 2, cita: '', autor: '', botonTexto: 'Ver nuestros clientes', botonLink: '/clientes' },
  render: ({ titulo, clientes = [], destacado, cita, autor, botonTexto, botonLink, puck }) => (
    <section className="clientes reveal" id="clientes" ref={puck.dragRef}>
      <h2 className="clientes__titulo">{conSaltos(titulo)}</h2>
      <div className="carrusel" data-carrusel tabIndex={0} role="region" aria-roledescription="carrusel" aria-label="Clientes de Thinkion. Usá las flechas para ver más.">
        <button className="carrusel__costado carrusel__costado--anterior" type="button" data-anterior aria-label="Ver clientes anteriores" />
        <ul className="carrusel__lista">
          {clientes.map((c, i) => (
            <li key={i} className={clases('cliente', i === (Number(destacado) || 1) - 1 && 'cliente--activo')}>
              <Img className="cliente__foto" src={c.foto} alt={c.fotoAlt} ancho={256} alto={363} />
              <div className="cliente__info">
                <Img className={clases('cliente__logo', c.ajusteLogo && `cliente__logo--${c.ajusteLogo}`)} src={c.logo} alt={typeof c.nombre === 'string' ? c.nombre : ''} ancho={122} alto={120} />
                <span className="cliente__rubro">{c.rubro}</span>
              </div>
            </li>
          ))}
        </ul>
        <button className="carrusel__costado carrusel__costado--siguiente" type="button" data-siguiente aria-label="Ver más clientes" />
      </div>
      {cita && (
        <figure className="testimonio">
          <blockquote className="testimonio__cita">{conSaltos(cita)}</blockquote>
          {autor && <figcaption className="testimonio__autor">{autor}</figcaption>}
        </figure>
      )}
      {botonTexto && <a className="boton boton--azul" href={href(botonLink)}>{botonTexto}</a>}
    </section>
  ),
});

/* ---------- PREGUNTAS FRECUENTES: categorías y preguntas ----------
   También se usan para los datos estructurados (Google y las IAs). */
export const PreguntasFrecuentes = bloque({
  label: 'Preguntas frecuentes',
  fields: {
    titulo: texto('Título'),
    bajada: parrafo('Bajada'),
    categorias: lista('Categorías', {
      nombre: texto('Nombre de la categoría', { editable: false }),
      preguntas: lista('Preguntas', {
        pregunta: texto('Pregunta'),
        respuesta: textoRico('Respuesta'),
      }, { resumen: 'pregunta', nuevo: { pregunta: 'Nueva pregunta', respuesta: '<p>Respuesta</p>' } }),
    }, { resumen: 'nombre', nuevo: { nombre: 'Nueva categoría', preguntas: [] } }),
    abierta: pestanaAbierta('Categoría abierta al cargar'),
  },
  defaultProps: { titulo: 'Preguntas frecuentes', bajada: '', categorias: [], abierta: 1 },
  render: ({ titulo, bajada, categorias = [], abierta, id, puck }) => {
    const actual = activa(abierta, categorias.length);
    const base = `preguntas-${id || 'x'}`.replace(/[^a-z0-9-]/gi, '');
    const conPestanas = categorias.length > 1;
    return (
      <section className="faq reveal" id="preguntas" data-tabs ref={puck.dragRef}>
        <div className="faq__encabezado">
          <h2 className="titulo-seccion faq__titulo">{conSaltos(titulo)}</h2>
          {bajada && <p className="bajada-seccion faq__bajada">{conSaltos(bajada)}</p>}
        </div>
        {conPestanas && (
          <div className="pestanas pestanas--faq" role="tablist" aria-label="Categorías de preguntas">
            {categorias.map((c, i) => (
              <button key={i} className={clases('pestanas__boton', i === actual && 'is-activa')} type="button" role="tab"
                id={`tab-${base}-${slug(c.nombre)}`} aria-controls={`panel-${base}-${slug(c.nombre)}`} aria-selected={i === actual} data-tab={slug(c.nombre)}>
                {c.nombre}
              </button>
            ))}
          </div>
        )}
        {categorias.map((c, i) => (
          <div key={i} className="faq__lista" role={conPestanas ? 'tabpanel' : undefined} id={`panel-${base}-${slug(c.nombre)}`}
            aria-labelledby={conPestanas ? `tab-${base}-${slug(c.nombre)}` : undefined} data-panel={slug(c.nombre)} hidden={i !== actual}>
            {(c.preguntas || []).map((p, j) => (
              <details key={j} className="faq__item" open={j === 0}>
                <summary>{p.pregunta}</summary>
                {p.respuesta}
              </details>
            ))}
          </div>
        ))}
      </section>
    );
  },
});

/* ---------- SEPARADOR (línea fina) ---------- */
export const Separador = bloque({
  label: 'Línea separadora',
  fields: {},
  render: ({ puck }) => <hr className="separador" ref={puck.dragRef} />,
});

/* ---------- LLAMADO FINAL: "¿Querés ver cómo funciona…?" ---------- */
export const LlamadoFinal = bloque({
  label: 'Llamado a la acción',
  fields: {
    titulo: texto('Título'),
    bajada: parrafo('Bajada'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
    separado: opciones('Separación de arriba', [['', 'Normal'], ['grande', 'Grande (páginas de producto)']]),
  },
  defaultProps: { titulo: '¿Querés ver cómo funciona en tu negocio?', bajada: 'Hablemos y veamos cómo Thinkion puede adaptarse a tu negocio.', botonTexto: 'Pedí tu demo', botonLink: '/demo', separado: '' },
  render: ({ titulo, bajada, botonTexto, botonLink, separado, puck }) => (
    <section className={clases('cta', separado === 'grande' && 'solucion__cta', 'reveal')} ref={puck.dragRef}>
      <h2 className="cta__titulo">{conSaltos(titulo)}</h2>
      {bajada && <p className="cta__bajada">{conSaltos(bajada)}</p>}
      {botonTexto && <a className="boton" href={href(botonLink)}>{botonTexto}</a>}
    </section>
  ),
});
