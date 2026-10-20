/* =========================================================
   BLOQUES DE PÁGINAS DE PRODUCTO (Check, POS & ERP, Marketing)
   y de Clientes. Mismo HTML y clases que el diseño original.
   ========================================================= */
import { texto, parrafo, textoRico, imagen, link, lista, opciones, numero } from '../campos';
import { bloque, clases, conResaltado, conSaltos, Img, href, ancla } from '../util';

/* ---------- PORTADA DE PRODUCTO: título con palabra subrayada, bajada y botón ---------- */
export const HeroProducto = bloque({
  label: 'Portada (producto)',
  fields: {
    titulo: parrafo('Título', { editable: false }),
    resaltado: texto('Palabra subrayada (tal cual está en el título)', { editable: false }),
    bajada: parrafo('Bajada'),
    botonTexto: texto('Texto del botón (vacío = sin botón)'),
    botonLink: link('El botón lleva a'),
    estilo: opciones('Estilo', [['producto', 'Producto'], ['clientes', 'Clientes']]),
  },
  defaultProps: { titulo: 'Título de la página', resaltado: '', bajada: 'Bajada de la página.', botonTexto: 'Pedí tu demo', botonLink: '/demo', estilo: 'producto' },
  render: ({ titulo, resaltado, bajada, botonTexto, botonLink, estilo, puck }) => (
    <section className={estilo === 'clientes' ? 'clientes-hero' : 'check-hero'} ref={puck.dragRef}>
      <h1>{conResaltado(titulo, resaltado, 'subrayado-violeta')}</h1>
      <p>{conSaltos(bajada)}</p>
      {botonTexto && <a className="boton" href={href(botonLink)}>{botonTexto}</a>}
    </section>
  ),
});

/* ---------- VIDEO O IMAGEN GRANDE debajo de la portada ---------- */
export const MediaProducto = bloque({
  label: 'Video o imagen grande',
  fields: {
    tipo: opciones('Qué muestra', [['video', 'Video (se abre en una ventana)'], ['imagen', 'Solo imagen']], { radio: true }),
    imagen: imagen('Imagen'),
    imagenAlt: texto('Descripción de la imagen', { editable: false }),
    videoLink: link('Video (YouTube, Vimeo o Drive)'),
  },
  defaultProps: { tipo: 'video', imagen: '/img/check/video-portada.webp', imagenAlt: '', videoLink: '' },
  render: ({ tipo, imagen: src, imagenAlt, videoLink, puck }) => (tipo === 'imagen' ? (
    <div className="check-video check-video--imagen" ref={puck.dragRef}>
      <Img src={src} alt={imagenAlt} ancho={1682} alto={932} prioridad />
    </div>
  ) : (
    <a className="check-video" href={href(videoLink)} aria-label="Ver el video" ref={puck.dragRef}>
      <Img src={src} alt={imagenAlt} ancho={1093} alto={621} prioridad />
      <img className="check-video__play" src="/img/home/play.svg" alt="" width="131" height="151" />
    </a>
  )),
});

/* ---------- VENTAJAS: encabezado y tres ítems con ícono ---------- */
export const Ventajas = bloque({
  label: 'Ventajas (con íconos)',
  fields: {
    titulo: parrafo('Título'),
    texto: parrafo('Texto'),
    items: lista('Ítems', {
      icono: imagen('Ícono'),
      titulo: texto('Título'),
      texto: parrafo('Texto'),
    }, { resumen: 'titulo', nuevo: { icono: '/img/check/icono-app.webp', titulo: 'Nuevo ítem', texto: 'Texto' } }),
  },
  defaultProps: { titulo: 'Título', texto: '', items: [] },
  render: ({ titulo, texto: bajada, items = [], puck }) => (
    <section className="check-dif reveal" ref={puck.dragRef}>
      <div className="check-dif__encabezado">
        <h2>{conSaltos(titulo)}</h2>
        {bajada && <p>{conSaltos(bajada)}</p>}
      </div>
      <ul className="check-dif__lista">
        {items.map((it, i) => (
          <li key={i}><Img src={it.icono} ancho={128} alto={128} /><h3>{it.titulo}</h3><p>{conSaltos(it.texto)}</p></li>
        ))}
      </ul>
    </section>
  ),
});

/* ---------- MOCKUP: monitor, celular y tres datos destacados ---------- */
export const Mockup = bloque({
  label: 'Monitor y celular con datos',
  fields: {
    monitor: imagen('Imagen del monitor'),
    monitorAlt: texto('Descripción del monitor', { editable: false }),
    celular: imagen('Imagen del celular'),
    celularAlt: texto('Descripción del celular', { editable: false }),
    datos: lista('Datos destacados (3)', { texto: texto('Texto') }, { resumen: 'texto', min: 3, max: 3 }),
  },
  defaultProps: { monitor: '/img/check/mockup-monitor.webp', monitorAlt: '', celular: '/img/check/mockup-celular.webp', celularAlt: '', datos: [{ texto: 'Dato 1' }, { texto: 'Dato 2' }, { texto: 'Dato 3' }] },
  render: ({ monitor, monitorAlt, celular, celularAlt, datos = [], puck }) => (
    <section className="check-mockup reveal" ref={puck.dragRef}>
      <Img className="check-mockup__monitor" src={monitor} alt={monitorAlt} ancho={867} alto={717} />
      <div className="celular"><Img src={celular} alt={celularAlt} ancho={208} alto={452} /></div>
      {datos.slice(0, 3).map((d, i) => (
        <p key={i} className={`check-dato check-dato--${i + 1}`}>
          <img src="/img/check/icono-rayo.svg" alt="" width="28" height="32" />{d.texto}
        </p>
      ))}
    </section>
  ),
});

/* ---------- LOGOS DE CLIENTES (fila) ---------- */
const AJUSTE_LOGO = [['', 'Normal'], ['multiplicar', 'Fundir fondo blanco'], ['prune', 'Bajo y fundido'], ['mishka', 'Redondeado']];
const CLASE_LOGO = { multiplicar: 'logo-multiplicar', prune: 'logo-prune', mishka: 'logo-mishka' };
export const Logos = bloque({
  label: 'Logos de clientes',
  fields: {
    estilo: opciones('Estilo', [['producto', 'Producto (más separados)'], ['industria', 'Industria']]),
    logos: lista('Logos', {
      imagen: imagen('Logo'),
      nombre: texto('Nombre del cliente', { editable: false }),
      opacidad: numero('Opacidad (0 a 1, vacío = normal)', { min: 0, max: 1, step: 0.1 }),
      ajuste: opciones('Ajuste', AJUSTE_LOGO),
    }, { resumen: 'nombre', nuevo: { imagen: '', nombre: 'Cliente', opacidad: '', ajuste: '' } }),
  },
  defaultProps: { estilo: 'producto', logos: [] },
  render: ({ estilo, logos = [], puck }) => (
    <section className={clases(estilo === 'industria' ? 'seg-logos' : 'check-logos', 'reveal')} aria-label="Algunos de nuestros clientes" ref={puck.dragRef}>
      {logos.map((l, i) => (
        <Img key={i} src={l.imagen} alt={l.nombre} ancho={122} alto={122} className={CLASE_LOGO[l.ajuste]}
          style={l.opacidad !== '' && l.opacidad != null ? { opacity: Number(l.opacidad) } : undefined} />
      ))}
    </section>
  ),
});

/* ---------- FUNCIONES: imagen y texto, se alternan los lados ---------- */
// Medidas guardadas de la imagen original (solo si la imagen no se cambió)
const medidas = (f) => (f.imagenMedidas?.src === f.imagen ? [f.imagenMedidas.ancho, f.imagenMedidas.alto] : null);
export const Funciones = bloque({
  label: 'Funciones (imagen y texto)',
  fields: {
    funciones: lista('Funciones', {
      imagen: imagen('Imagen'),
      marco: opciones('Cómo se muestra la imagen', [['', 'Imagen sola'], ['visual', 'Dentro de una tarjeta'], ['icono', 'Tarjeta con ícono chico'], ['ilustracion', 'Tarjeta con ilustración']]),
      etiqueta: texto('Etiqueta (arriba del título)'),
      titulo: texto('Título'),
      texto: textoRico('Texto'),
      ancla: texto('Nombre para linkear (ej.: beneficios → /check#beneficios)', { editable: false }),
    }, { resumen: 'titulo', nuevo: { imagen: '/img/check/checklist.webp', marco: '', etiqueta: 'Etiqueta', titulo: 'Nueva función', texto: '<p>Texto</p>', ancla: '' } }),
    empezar: opciones('Primera imagen', [['izquierda', 'A la izquierda'], ['derecha', 'A la derecha']], { radio: true }),
  },
  defaultProps: { funciones: [], empezar: 'izquierda' },
  render: ({ funciones = [], empezar, puck }) => (
    <section className="check-funciones reveal" ref={puck.dragRef}>
      {funciones.map((f, i) => (
        <article key={i} className={clases('funcion', (i % 2 === 1) !== (empezar === 'derecha') && 'funcion--invertida')} id={ancla(f.ancla)}>
          {f.marco ? (
            <div className={clases('funcion__visual', f.marco !== 'visual' && `funcion__visual--${f.marco}`)}>
              {/* En la tarjeta la imagen usa su propia proporción (vertical u horizontal).
                  Si se conocen sus medidas (imágenes originales), se escriben: así la tarjeta
                  tiene su alto desde el principio, sin saltos mientras carga. */}
              <Img src={f.imagen} ancho={f.marco === 'icono' ? 36 : medidas(f)?.[0]} alto={f.marco === 'icono' ? 36 : medidas(f)?.[1]} />
            </div>
          ) : <Img src={f.imagen} ancho={544} alto={493} />}
          <div className="funcion__texto">
            {f.etiqueta && <span className="etiqueta">{f.etiqueta}</span>}
            <h2>{f.titulo}</h2>
            {f.texto}
          </div>
        </article>
      ))}
    </section>
  ),
});

/* ---------- INTEGRACIONES / LISTA DE TARJETAS chicas ---------- */
export const Integraciones = bloque({
  label: 'Integraciones (tarjetas chicas)',
  fields: {
    titulo: texto('Título'),
    texto: parrafo('Texto'),
    columnas: opciones('Columnas', [['', 'Automático'], ['tres', 'Tres por fila']]),
    ancla: texto('Nombre para linkear (ej.: integraciones)', { editable: false }),
    items: lista('Tarjetas', {
      logo: imagen('Logo (opcional)'),
      logoAlt: texto('Nombre del logo', { editable: false }),
      ajusteLogo: opciones('Ajuste del logo', [['', 'Normal'], ['relleno', 'Con margen'], ['texto', 'Logo de texto (ancho)']]),
      titulo: texto('Título'),
      texto: parrafo('Texto'),
    }, { resumen: 'titulo', nuevo: { logo: '', logoAlt: '', ajusteLogo: '', titulo: 'Nueva', texto: 'Texto' } }),
  },
  defaultProps: { titulo: 'Integraciones', texto: '', columnas: '', ancla: '', items: [] },
  render: ({ titulo, texto: bajada, columnas, ancla: id, items = [], puck }) => (
    <section className="integraciones reveal" id={ancla(id)} ref={puck.dragRef}>
      <div className="integraciones__encabezado">
        <h2 className="titulo-seccion-40">{conSaltos(titulo)}</h2>
        {bajada && <p>{conSaltos(bajada)}</p>}
      </div>
      <ul className={clases('integraciones__lista', columnas === 'tres' && 'integraciones__lista--tres')}>
        {items.map((it, i) => (
          <li key={i}>
            {it.logo && <Img className={clases('integraciones__logo', it.ajusteLogo && `integraciones__logo--${it.ajusteLogo}`)} src={it.logo} alt={it.logoAlt}
              ancho={it.ajusteLogo === 'texto' ? 74 : 56} alto={it.ajusteLogo === 'texto' ? 28 : 56} />}
            <h3>{it.titulo}</h3>
            <p>{conSaltos(it.texto)}</p>
          </li>
        ))}
      </ul>
    </section>
  ),
});

/* ---------- GRILLA DE CLIENTES con filtros por industria ---------- */
const INDUSTRIAS = [['gastronomicas', 'Gastronómicas'], ['retail', 'Retail'], ['productividad', 'Productividad']];
export const GrillaClientes = bloque({
  label: 'Grilla de clientes (con filtros)',
  fields: {
    textoTodos: texto('Botón "todos"', { editable: false }),
    filtros: lista('Nombres de los filtros', {
      clave: opciones('Industria', INDUSTRIAS),
      nombre: texto('Texto del botón', { editable: false }),
    }, { resumen: 'nombre', min: 1, max: 3 }),
    clientes: lista('Clientes', {
      foto: imagen('Foto de fondo'),
      logo: imagen('Logo'),
      nombre: texto('Nombre', { editable: false }),
      rubro: texto('Rubro (texto de la tarjeta)'),
      industria: opciones('Aparece en el filtro', INDUSTRIAS),
      tambien: opciones('También en', [['', '—'], ...INDUSTRIAS]),
      logoClaro: opciones('Logo', [[false, 'Normal'], [true, 'Claro (sobre foto oscura)']], { radio: true }),
    }, { resumen: 'nombre', nuevo: { foto: '', logo: '', nombre: 'Nuevo cliente', rubro: 'Gastronómica', industria: 'gastronomicas', tambien: '', logoClaro: false } }),
    vacio: parrafo('Mensaje si un filtro no tiene clientes'),
  },
  defaultProps: { textoTodos: 'TODOS', filtros: [], clientes: [], vacio: 'Muy pronto vas a ver acá a los clientes de esta industria.' },
  render: ({ textoTodos, filtros = [], clientes = [], vacio, puck }) => (
    <section data-filtros ref={puck.dragRef}>
      <div className="filtros" role="group" aria-label="Filtrar clientes por industria">
        <button className="is-activa" type="button" data-filtro="todos" aria-pressed="true">{textoTodos}</button>
        {filtros.map((f, i) => <button key={i} type="button" data-filtro={f.clave} aria-pressed="false">{f.nombre}</button>)}
      </div>
      <div className="grilla-clientes">
        {clientes.map((c, i) => (
          <article key={i} className="tarjeta-cliente" data-rubro={[c.industria, c.tambien].filter(Boolean).join(' ')}>
            <Img className="tarjeta-cliente__foto" src={c.foto} ancho={352} alto={139} />
            <Img className={clases('tarjeta-cliente__logo', c.logoClaro && 'tarjeta-cliente__logo--claro')} src={c.logo} alt={c.nombre} ancho={120} alto={120} />
            <span className="tarjeta-cliente__rubro">{c.rubro}</span>
            <span className="tarjeta-cliente__nombre" aria-hidden="true">{c.nombre}</span>
          </article>
        ))}
        <p className="grilla-clientes__vacio" data-vacio hidden>{vacio}</p>
      </div>
    </section>
  ),
});

/* ---------- BOTÓN FLOTANTE "¿Listo para usar Thinkion?" ---------- */
export const BotonFlotante = bloque({
  label: 'Botón flotante (esquina)',
  fields: {
    titulo: texto('Título'),
    texto: parrafo('Texto (se ve al pasar el mouse)'),
    botonTexto: texto('Texto del botón'),
    botonLink: link('El botón lleva a'),
  },
  defaultProps: { titulo: '¿Listo para usar Thinkion?', texto: 'Unite a los líderes que confían en nosotros para impulsar su crecimiento', botonTexto: 'PEDÍ TU DEMO', botonLink: '/demo' },
  render: ({ titulo, texto: cuerpo, botonTexto, botonLink, puck }) => (
    <aside className="cta-flotante" tabIndex={0} aria-label={typeof titulo === 'string' ? titulo : 'Pedí tu demo'} ref={puck.dragRef}>
      <p className="cta-flotante__titulo">{titulo}</p>
      <p>{conSaltos(cuerpo)}</p>
      <a href={href(botonLink)}>{botonTexto}</a>
    </aside>
  ),
});
