/* =========================================================
   BLOQUES INSTITUCIONALES: Sobre nosotros, formularios (demo y
   empleo) y página en construcción. Mismo HTML que el diseño.
   ========================================================= */
import { texto, parrafo, textoRico, imagen, link, lista } from '../campos';
import { bloque, clases, conSaltos, Img, href } from '../util';

/* ---------- PORTADA INSTITUCIONAL: texto e imagen ---------- */
export const HeroNosotros = bloque({
  label: 'Portada (institucional)',
  fields: {
    titulo: parrafo('Título'),
    texto: textoRico('Texto'),
    imagen: imagen('Imagen'),
    imagenAlt: texto('Descripción de la imagen', { editable: false }),
  },
  defaultProps: { titulo: 'Título', texto: '<p>Texto</p>', imagen: '/img/nosotros/hero-ecosistema-544.webp', imagenAlt: '' },
  render: ({ titulo, texto: cuerpo, imagen: src, imagenAlt, puck }) => {
    // La imagen original tiene tres tamaños: el navegador baja la que necesita
    const original = src === '/img/nosotros/hero-ecosistema-544.webp';
    return (
      <section className="nos-hero" ref={puck.dragRef}>
        <div className="nos-hero__texto">
          <h1>{conSaltos(titulo)}</h1>
          {cuerpo}
        </div>
        {src && (
          <img className="nos-hero__imagen" src={src} alt={imagenAlt} width="544" height="362" fetchPriority="high"
            srcSet={original ? '/img/nosotros/hero-ecosistema-544.webp 544w, /img/nosotros/hero-ecosistema-816.webp 816w, /img/nosotros/hero-ecosistema.webp 1088w' : undefined}
            sizes={original ? '(max-width: 576px) calc(100vw - 32px), 544px' : undefined} />
        )}
      </section>
    );
  },
});

/* ---------- VALORES: tarjetas con imagen, alternan los lados ---------- */
export const Valores = bloque({
  label: 'Valores (tarjetas alternadas)',
  fields: {
    titulo: texto('Título'),
    texto: textoRico('Texto'),
    valores: lista('Valores', { imagen: imagen('Imagen'), titulo: texto('Título'), texto: textoRico('Texto') },
      { resumen: 'titulo', nuevo: { imagen: '/img/nosotros/valor-equipo.webp', titulo: 'Nuevo valor', texto: '<p>Texto</p>' } }),
  },
  defaultProps: { titulo: 'Los valores que nos definen', texto: '', valores: [] },
  render: ({ titulo, texto: cuerpo, valores = [], puck }) => (
    <section className="nos-valores reveal" ref={puck.dragRef}>
      <div className="nos-valores__encabezado">
        <h2 className="titulo-seccion-40">{titulo}</h2>
        {cuerpo}
      </div>
      <div className="valores">
        {valores.map((v, i) => {
          const izquierda = i % 2 === 0;
          const tarjeta = (
            <div className="valor__card">
              <h3>{v.titulo}</h3>
              {v.texto}
            </div>
          );
          const foto = <Img src={v.imagen} ancho={230} alto={260} />;
          return (
            <article key={i} className={clases('valor', izquierda ? 'valor--izq' : 'valor--der')}>
              {izquierda ? <>{foto}{tarjeta}</> : <>{tarjeta}{foto}</>}
            </article>
          );
        })}
      </div>
    </section>
  ),
});

/* ---------- NUESTRA EVOLUCIÓN: línea de tiempo por año ---------- */
export const Evolucion = bloque({
  label: 'Línea de tiempo',
  fields: {
    titulo: texto('Título'),
    texto: parrafo('Texto'),
    hitos: lista('Años', { anio: texto('Año', { editable: false }), titulo: texto('Título'), texto: parrafo('Texto') },
      { resumen: 'anio', nuevo: { anio: '2026', titulo: 'Título', texto: 'Texto' } }),
  },
  defaultProps: { titulo: 'Nuestra evolución', texto: '', hitos: [] },
  render: ({ titulo, texto: bajada, hitos = [], puck }) => (
    <section className="evolucion reveal" data-linea-tiempo ref={puck.dragRef}>
      <div className="evolucion__encabezado">
        <h2>{titulo}</h2>
        <p>{conSaltos(bajada)}</p>
      </div>
      <div className="anios">
        <div className="anios__lista">
          {hitos.map((h, i) => (
            <button key={i} className={i === 0 ? 'is-activo' : ''} type="button" data-anio={h.anio} aria-label={`Ver ${h.anio}`}>{h.anio}</button>
          ))}
        </div>
      </div>
      <div className="anios__linea" aria-hidden="true"><span className="anios__punto" /></div>
      <div className="evolucion__pie">
        <div className="evolucion__hitos">
          {hitos.map((h, i) => (
            <div key={i} className="hito" data-hito={h.anio} hidden={i !== 0}>
              <h3>{h.titulo}</h3>
              <p>{conSaltos(h.texto)}</p>
            </div>
          ))}
        </div>
        <div className="evolucion__flechas">
          <button type="button" data-anterior aria-label="Año anterior" disabled><img src="/img/nosotros/flecha-izquierda.svg" alt="" width="16" height="12" /></button>
          <button type="button" data-siguiente aria-label="Año siguiente"><img src="/img/nosotros/flecha-derecha.svg" alt="" width="16" height="12" /></button>
        </div>
      </div>
    </section>
  ),
});

/* ---------- TEXTO LARGO con título (ej.: política de calidad) ---------- */
export const TextoLargo = bloque({
  label: 'Texto largo con título',
  fields: { titulo: texto('Título'), texto: textoRico('Texto') },
  defaultProps: { titulo: 'Título', texto: '<p>Texto</p>' },
  render: ({ titulo, texto: cuerpo, puck }) => (
    <section className="politica reveal" ref={puck.dragRef}>
      <h2 className="titulo-seccion-40">{titulo}</h2>
      <div className="politica__texto">{cuerpo}</div>
    </section>
  ),
});

/* ---------- FORMULARIO: PEDÍ TU DEMO ----------
   "Enviar a": dirección que recibe los datos (por ejemplo, un formulario
   de Formspree). Mientras esté vacía, el formulario no envía nada. */
const opcionesLista = (label) => lista(label, { opcion: texto('Opción', { editable: false }) }, { resumen: 'opcion', nuevo: { opcion: 'Nueva opción' } });
const valoresDe = (items = []) => items.map((i) => i.opcion).filter(Boolean);

export const FormularioDemo = bloque({
  label: 'Formulario: pedí tu demo',
  fields: {
    etiqueta: texto('Etiqueta'),
    titulo: texto('Título'),
    texto: textoRico('Texto'),
    pasos: lista('Pasos', { destacado: texto('En negrita'), texto: texto('Resto del texto') }, { resumen: 'destacado', nuevo: { destacado: 'Paso', texto: 'descripción.' } }),
    tiposLocal: opcionesLista('Opciones de "Tipo de local"'),
    aviso: texto('Aviso debajo del formulario'),
    botonTexto: texto('Texto del botón'),
    destino: link('Enviar a (dirección que recibe los datos)'),
  },
  defaultProps: { etiqueta: 'Demo personalizada', titulo: 'Pedí tu demo', texto: '', pasos: [], tiposLocal: [], aviso: '', botonTexto: 'Pedir mi demo', destino: '' },
  render: ({ etiqueta, titulo, texto: cuerpo, pasos = [], tiposLocal, aviso, botonTexto, destino, puck }) => (
    <section className="postulacion demo" ref={puck.dragRef}>
      <div className="demo__info">
        {etiqueta && <span className="etiqueta">{etiqueta}</span>}
        <h1>{titulo}</h1>
        {cuerpo}
        <ol className="demo__pasos">
          {pasos.map((p, i) => <li key={i}><b>{i + 1}</b><span><strong>{p.destacado}</strong> {p.texto}</span></li>)}
        </ol>
      </div>
      <form className="formulario demo__formulario" action={href(destino)} method="post">
        <fieldset>
          <legend>Tus datos</legend>
          <div className="formulario__grilla">
            <label className="campo"><span>Nombre completo</span><input type="text" name="nombre" placeholder="Pepito Pérez" autoComplete="name" required /></label>
            <label className="campo"><span>Tel. de contacto</span><input type="tel" name="telefono" placeholder="+54 9 11 1234-5678" autoComplete="tel" required /></label>
            <label className="campo campo--ancho"><span>Correo electrónico</span><input type="email" name="email" placeholder="ejemplo@email.com" autoComplete="email" required /></label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Tu negocio</legend>
          <div className="formulario__grilla">
            <label className="campo"><span>Ubicación del local</span><input type="text" name="ubicacion" placeholder="Palermo, CABA" autoComplete="address-level2" required /></label>
            <label className="campo"><span>Tipo de local</span>
              <select name="tipo_local" required defaultValue="">
                <option value="" disabled>Elegí una opción</option>
                {valoresDe(tiposLocal).map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
        </fieldset>
        {aviso && <p className="demo__aviso">{aviso}</p>}
        <button className="boton formulario__enviar" type="submit">{botonTexto}</button>
      </form>
    </section>
  ),
});

/* ---------- FORMULARIO: TRABAJÁ CON NOSOTROS (con CV adjunto) ---------- */
export const FormularioEmpleo = bloque({
  label: 'Formulario: trabajá con nosotros',
  fields: {
    titulo: texto('Título'),
    texto: parrafo('Texto'),
    ciudadInicial: texto('"Ciudad": texto antes de elegir', { editable: false }),
    ciudades: opcionesLista('Opciones de "Ciudad"'),
    puestoInicial: texto('"Puesto": texto antes de elegir', { editable: false }),
    puestos: opcionesLista('Opciones de "Puesto"'),
    nivelInicial: texto('"Nivel de experiencia": texto antes de elegir', { editable: false }),
    niveles: opcionesLista('Opciones de "Nivel de experiencia"'),
    botonTexto: texto('Texto del botón'),
    destino: link('Enviar a (dirección que recibe los datos)'),
  },
  defaultProps: { titulo: 'Unite a nuestro equipo', texto: '', ciudadInicial: '', ciudades: [], puestoInicial: '', puestos: [], nivelInicial: '', niveles: [], botonTexto: 'Enviar postulación', destino: '' },
  render: ({ titulo, texto: cuerpo, ciudadInicial, ciudades, puestoInicial, puestos, nivelInicial, niveles, botonTexto, destino, puck }) => {
    // "inicial": lo que se lee antes de elegir (si está vacío, la primera opción)
    const select = (nombre, items, inicial) => {
      const valores = valoresDe(items);
      return (
        <select name={nombre} required defaultValue="">
          <option value="" disabled>{inicial || valores[0] || 'Elegí una opción'}</option>
          {valores.map((o) => <option key={o}>{o}</option>)}
        </select>
      );
    };
    return (
      <section className="postulacion" id="trabaja-con-nosotros" ref={puck.dragRef}>
        <div className="postulacion__encabezado">
          <h1>{titulo}</h1>
          <p>{conSaltos(cuerpo)}</p>
        </div>
        <form className="formulario" action={href(destino)} method="post" encType="multipart/form-data">
          <fieldset>
            <legend>Datos personales</legend>
            <div className="formulario__grilla">
              <label className="campo"><span>Nombre completo</span><input type="text" name="nombre" placeholder="Pepito Pérez" autoComplete="name" required /></label>
              <label className="campo"><span>Correo electrónico</span><input type="email" name="email" placeholder="ejemplo@email.com" autoComplete="email" required /></label>
              <label className="campo"><span>Tel. de contacto</span><input type="tel" name="telefono" placeholder="+54 9 11 1234-5678" autoComplete="tel" /></label>
              <label className="campo"><span>Ciudad de residencia</span>{select('ciudad', ciudades, ciudadInicial)}</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Perfil profesional</legend>
            <div className="formulario__grilla">
              <label className="campo"><span>Puesto laboral</span>{select('puesto', puestos, puestoInicial)}</label>
              <label className="campo"><span>Nivel de experiencia</span>{select('experiencia', niveles, nivelInicial)}</label>
              <div className="campo campo--archivo" data-archivo>
                <span>Adjuntar CV</span>
                <label>
                  <input type="file" name="cv" accept=".pdf,.doc,.docx" />
                  <img src="/img/nosotros/icono-subir.svg" alt="" width="58" height="41" />
                  <small data-archivo-texto>Arrastrá el archivo o<br /><b>seleccionalo desde aquí</b></small>
                </label>
              </div>
              <label className="campo"><span>Carta de presentación (opcional)</span><textarea name="carta" placeholder="Mensaje de presentación..." /></label>
            </div>
          </fieldset>
          <button className="boton formulario__enviar" type="submit">{botonTexto}</button>
        </form>
      </section>
    );
  },
});

/* ---------- PÁGINA EN CONSTRUCCIÓN ---------- */
export const EnConstruccion = bloque({
  label: 'Aviso: página en construcción',
  fields: {
    etiqueta: texto('Etiqueta'),
    titulo: texto('Título'),
    texto: parrafo('Texto'),
    links: lista('Otras páginas para visitar', { texto: texto('Texto'), link: link('Lleva a') }, { resumen: 'texto', nuevo: { texto: 'Página', link: '/' } }),
  },
  defaultProps: { etiqueta: 'Retail', titulo: 'Estamos construyendo esta página', texto: '', links: [] },
  render: ({ etiqueta, titulo, texto: cuerpo, links = [], puck }) => (
    <section className="construccion__card" ref={puck.dragRef}>
      <span className="construccion__icono" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M13.8 3.2a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4 0l-.7-.7-7.9 7.9a2.5 2.5 0 1 1-3.5-3.5l7.9-7.9-.7-.7a1 1 0 0 1 0-1.4l.7-.7zM5.3 17.3a.5.5 0 1 0 .7.7.5.5 0 0 0-.7-.7z" /></svg>
      </span>
      {etiqueta && <p className="construccion__etiqueta">{etiqueta}</p>}
      <h1>{titulo}</h1>
      <p className="construccion__texto">{conSaltos(cuerpo)}</p>
      <div className="construccion__botones">
        <a className="boton" href="/">Volver al inicio</a>
        <a className="boton-borde construccion__atras" href="/" data-volver>Volver atrás</a>
      </div>
      {links.length > 0 && (
        <nav className="construccion__links" aria-label="Otras páginas">
          <span>O visitá:</span>
          {links.map((l, i) => <a key={i} href={href(l.link)}>{l.texto}</a>)}
        </nav>
      )}
    </section>
  ),
});
