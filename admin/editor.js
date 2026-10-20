/* =========================================================
   EDITOR VISUAL — panel de administración de Thinkion
   Cómo funciona:
   - La página se muestra en un <iframe>. Cada elemento trae una
     "dirección" (data-e) que puso Eleventy al armar el sitio.
   - Al hacer clic en algo, se selecciona; los textos se escriben
     directamente sobre la página. Imágenes, links, colores, fondos y
     tipografía se cambian desde el panel de la izquierda.
   - Los cambios se acumulan en "estado.datos" (ediciones y temporadas)
     y se guardan como borrador en el navegador hasta Publicar.
   - Publicar los manda a /api/guardar: en Vercel queda un commit en
     GitHub y el sitio se vuelve a publicar solo.
   ========================================================= */
import {
  FUENTES_LOCALES, FUENTES_GOOGLE, pilaDeFuente, nombreDeFuente,
  cssDeEdiciones, cssTemporada, urlGoogleFonts, CORTE_MOVIL, aplicarEstructura,
} from './compartido.mjs';

/* ---------- Páginas del sitio (clave = ruta sin .html) ---------- */
const PAGINAS = [
  { clave: 'index', nombre: 'Home' },
  { clave: 'src/views/pos-erp', nombre: 'POS & ERP' },
  { clave: 'src/views/check', nombre: 'Check (Auditorías)' },
  { clave: 'src/views/marketing', nombre: 'Marketing' },
  { clave: 'src/views/productividad', nombre: 'Productividad' },
  { clave: 'src/views/gastronomia', nombre: 'Gastronomía' },
  { clave: 'src/views/retail', nombre: 'Retail' },
  { clave: 'src/views/clientes', nombre: 'Clientes' },
  { clave: 'src/views/sobre-nosotros', nombre: 'Sobre nosotros' },
  { clave: 'src/views/demo', nombre: 'Pedí tu demo' },
  { clave: 'src/views/trabaja-con-nosotros', nombre: 'Trabajá con nosotros' },
];

/* ---------- Colores editables (variables de src/styles/variables.css) ---------- */
const COLORES = [
  ['--violeta', 'Violeta (marca)'], ['--azul-oscuro', 'Azul oscuro (títulos)'],
  ['--coral', 'Coral'], ['--coral-hover', 'Coral al pasar el mouse'],
  ['--coral-oscuro', 'Coral de botones'], ['--coral-oscuro-hover', 'Coral de botones (hover)'],
  ['--azul-hover', 'Azul (hover)'], ['--violeta-texto', 'Violeta para textos'],
  ['--rosa-palido', 'Rosa pálido'], ['--lila', 'Lila'],
  ['--texto', 'Texto principal'], ['--gris', 'Gris'], ['--gris-parrafo', 'Gris de párrafos'],
  ['--gris-oscuro', 'Gris oscuro'], ['--blanco', 'Blanco'], ['--blanco-suave', 'Blanco suave'],
  ['--fondo', 'Fondo de la página'],
];

/* ---------- Qué cuenta como "texto" (se escribe encima) ---------- */
const ETIQUETAS_TEXTO = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li', 'button', 'summary',
  'label', 'strong', 'em', 'b', 'i', 'small', 'figcaption', 'blockquote', 'cite', 'q', 'td', 'th', 'dt', 'dd', 'legend']);
const ETIQUETAS_SVG_TEXTO = new Set(['text', 'textpath', 'tspan']);
const NOMBRES = {
  h1: 'Título principal', h2: 'Título', h3: 'Subtítulo', h4: 'Subtítulo', p: 'Párrafo', a: 'Link / botón',
  img: 'Imagen', section: 'Sección', div: 'Bloque', li: 'Ítem de lista', ul: 'Lista', button: 'Botón',
  span: 'Texto', strong: 'Texto en negrita', header: 'Encabezado', footer: 'Pie de página', nav: 'Menú',
  body: 'Página completa (fondo)', figure: 'Figura', textpath: 'Texto curvo', main: 'Contenido', form: 'Formulario',
  input: 'Campo', label: 'Etiqueta', summary: 'Pregunta', details: 'Pregunta frecuente', svg: 'Gráfico',
};

/* ---------- Atajos ---------- */
const $ = (selector, raiz = document) => raiz.querySelector(selector);
const $$ = (selector, raiz = document) => [...raiz.querySelectorAll(selector)];
const esc = (texto = '') => String(texto).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clonar = (objeto) => JSON.parse(JSON.stringify(objeto));
const RAIZ_SITIO = new URL('../', location.href).href; // el panel vive en /admin/
const CLAVE_BORRADOR = 'thk-admin-borrador';

/* ---------- Estado del editor ---------- */
const estado = {
  datos: null,          // { ediciones, temporadas } que se están editando
  publicado: '',        // JSON de lo último guardado (para saber si hay cambios)
  subidas: [],          // archivos subidos que todavía no se publicaron ({ ruta, sha })
  vistas: {},           // ruta → URL local para ver una imagen antes de publicarla
  modoAlmacen: 'local',
  pagina: 'index',
  modo: 'editar',       // 'editar' | 'navegar'
  ancho: 1440,
  seleccion: null,      // elemento seleccionado dentro del iframe
  idSeleccion: null,
  temporadaEditada: null,
  historial: [],
  ultimoHistorial: { clave: '', momento: 0 },
};

/* =========================================================
   AVISOS Y PEDIDOS AL SERVIDOR
   ========================================================= */
let temporizadorToast;
const toast = (mensaje, { error = false, duracion = 3500 } = {}) => {
  const nodo = $('#toast');
  nodo.textContent = mensaje;
  nodo.classList.toggle('is-error', error);
  nodo.classList.add('is-visible');
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => nodo.classList.remove('is-visible'), duracion);
};

const api = async (ruta, { metodo = 'GET', cuerpo } = {}) => {
  const respuesta = await fetch(`${RAIZ_SITIO}api/${ruta}`, {
    method: metodo,
    credentials: 'same-origin',
    headers: cuerpo ? { 'Content-Type': 'application/json' } : {},
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  });
  let datos = {};
  try { datos = await respuesta.json(); } catch { /* respuesta vacía */ }
  if (respuesta.status === 401 && ruta !== 'login') mostrarIngreso();
  if (!respuesta.ok) throw Object.assign(new Error(datos.error || `Error ${respuesta.status}`), { estado: respuesta.status });
  return datos;
};

/* =========================================================
   INGRESO
   ========================================================= */
const mostrarIngreso = () => {
  $('#app').hidden = true;
  $('#ingreso').hidden = false;
  $('#form-ingreso [name="usuario"]').focus();
};

$('#form-ingreso').addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const formulario = new FormData(evento.target);
  const boton = $('button', evento.target);
  boton.disabled = true;
  $('#ingreso-error').textContent = '';
  try {
    await api('login', { metodo: 'POST', cuerpo: { usuario: formulario.get('usuario'), clave: formulario.get('clave') } });
    evento.target.reset();
    await iniciarEditor();
  } catch (error) {
    $('#ingreso-error').textContent = error.message;
  } finally {
    boton.disabled = false;
  }
});

$('#btn-salir').addEventListener('click', async () => {
  if (hayCambios() && !confirm('Tenés cambios sin publicar. Quedan guardados como borrador en este navegador. ¿Salir igual?')) return;
  await api('logout', { metodo: 'POST' }).catch(() => {});
  mostrarIngreso();
});

/* =========================================================
   DATOS: carga, borrador y cambios pendientes
   ========================================================= */
const datosNormalizados = (datos) => {
  const ediciones = datos.ediciones || {};
  const temporadas = datos.temporadas || {};
  return {
    ediciones: { global: ediciones.global || {}, paginas: ediciones.paginas || {} },
    temporadas: {
      activa: temporadas.activa || 'auto',
      porDefecto: temporadas.porDefecto || temporadas.temporadas?.[0]?.id || '',
      fuentes: temporadas.fuentes || [],
      temporadas: temporadas.temporadas || [],
    },
  };
};

const hayCambios = () => JSON.stringify(estado.datos) !== estado.publicado;

const guardarBorrador = () => {
  try {
    if (hayCambios()) localStorage.setItem(CLAVE_BORRADOR, JSON.stringify({ datos: estado.datos, subidas: estado.subidas, base: estado.publicado }));
    else localStorage.removeItem(CLAVE_BORRADOR);
  } catch { /* sin almacenamiento local: no pasa nada */ }
};

const leerBorrador = () => {
  try { return JSON.parse(localStorage.getItem(CLAVE_BORRADOR) || 'null'); } catch { return null; }
};

const actualizarBarra = () => {
  const cambios = hayCambios();
  $('#btn-publicar').disabled = !cambios;
  $('#contador-cambios').textContent = cambios ? 'sin publicar' : '';
  $('#btn-publicar').title = cambios ? 'Hay cambios que todavía no están en la web' : 'No hay cambios pendientes';
  $('#btn-deshacer').disabled = !estado.historial.length;
};

/* Antes de cada cambio se guarda una copia para Deshacer.
   Al escribir, se agrupan los cambios del mismo elemento (1,5 s). */
const recordar = (clave = '') => {
  const ahora = Date.now();
  const mismo = clave && clave === estado.ultimoHistorial.clave && ahora - estado.ultimoHistorial.momento < 1500;
  estado.ultimoHistorial = { clave, momento: ahora };
  if (mismo) return;
  estado.historial.push(JSON.stringify(estado.datos));
  if (estado.historial.length > 80) estado.historial.shift();
};

const cambio = () => {
  guardarBorrador();
  actualizarBarra();
};

const deshacer = () => {
  const anterior = estado.historial.pop();
  if (!anterior) return;
  estado.datos = JSON.parse(anterior);
  estado.ultimoHistorial = { clave: '', momento: 0 };
  cambio();
  recargarVista();
  pintarPaneles();
};
$('#btn-deshacer').addEventListener('click', deshacer);
document.addEventListener('keydown', (evento) => {
  if ((evento.ctrlKey || evento.metaKey) && evento.key === 'z' && !evento.target.closest('input, textarea')) {
    evento.preventDefault();
    deshacer();
  }
});

/* =========================================================
   EDICIONES: leer y escribir cambios de un elemento
   ========================================================= */
// "menu/…" y "footer/…" son compartidos por todas las páginas
const esGlobal = (id) => /^(menu|footer)(\/|$)/.test(id);

const grupoDe = (id, crear = false) => {
  const { ediciones } = estado.datos;
  if (esGlobal(id)) return ediciones.global;
  if (!ediciones.paginas[estado.pagina] && crear) ediciones.paginas[estado.pagina] = {};
  return ediciones.paginas[estado.pagina] || {};
};

const edicionDe = (id) => grupoDe(id)[id] || null;

// Saca lo vacío para que el JSON quede prolijo
const limpiarEdicion = (id) => {
  const grupo = grupoDe(id);
  const edicion = grupo[id];
  if (!edicion) return;
  for (const clave of ['atributos', 'estilo', 'estiloMovil']) {
    if (edicion[clave] && !Object.keys(edicion[clave]).length) delete edicion[clave];
  }
  if (!edicion.oculto) delete edicion.oculto;
  const util = ['html', 'atributos', 'estilo', 'estiloMovil', 'oculto'].some((clave) => clave in edicion);
  if (!util) delete grupo[id];
  if (!esGlobal(id) && !Object.keys(grupo).length) delete estado.datos.ediciones.paginas[estado.pagina];
};

/* Aplica "cambios" a la edición del elemento. Valores especiales:
   undefined o '' en estilo → vuelve al original; null en atributos → sin cambio. */
const editar = (elemento, cambios, claveHistorial) => {
  const id = elemento.dataset.e;
  recordar(claveHistorial ? `${id}:${claveHistorial}` : '');
  const grupo = grupoDe(id, true);
  const edicion = grupo[id] || (grupo[id] = {
    etiqueta: elemento.localName.toLowerCase(),
    // Referencia legible en el JSON: el texto que tenía antes de empezar a editarlo
    original: (textosOriginales.get(elemento) ?? elemento.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 60)
      || elemento.getAttribute('alt') || '',
  });
  if ('html' in cambios) {
    if (cambios.html === undefined) delete edicion.html; else edicion.html = cambios.html;
  }
  if ('oculto' in cambios) edicion.oculto = cambios.oculto;
  for (const clave of ['atributos', 'estilo', 'estiloMovil']) {
    if (!cambios[clave]) continue;
    edicion[clave] = edicion[clave] || {};
    for (const [nombre, valor] of Object.entries(cambios[clave])) {
      if (valor === undefined || (clave !== 'atributos' && valor === '')) delete edicion[clave][nombre];
      else edicion[clave][nombre] = valor;
    }
  }
  limpiarEdicion(id);
  cambio();
};

/* ---------- Rutas: "~/" = raíz del sitio ---------- */
const aRutaGuardada = (valor) => {
  const texto = String(valor || '').trim();
  if (!texto || /^(https?:|mailto:|tel:|#|\/\/|data:|blob:)/i.test(texto)) return texto;
  if (texto.startsWith('~/')) return texto;
  return `~/${texto.replace(/^\/+/, '')}`;
};

const aRutaVisible = (valor, base) => {
  if (!valor) return '';
  if (valor.startsWith('~/')) return valor.slice(2);
  if (/^(mailto:|tel:|#)/i.test(valor)) return valor;
  try {
    const url = new URL(valor, base);
    if (url.href.startsWith(RAIZ_SITIO)) return url.href.slice(RAIZ_SITIO.length);
    return url.href;
  } catch { return valor; }
};

// Para ver en el iframe: "~/x" → URL absoluta (o la vista previa local si aún no se publicó)
const resolverVista = (valor) => {
  if (typeof valor !== 'string' || !valor.startsWith('~/')) return valor;
  const ruta = valor.slice(2);
  return estado.vistas[ruta] || RAIZ_SITIO + ruta;
};
const resolverCSSVista = (valor) => String(valor).replace(/url\(\s*(["']?)~\/([^"')]+)/g, (_, comilla, ruta) => `url(${comilla}${estado.vistas[ruta] || RAIZ_SITIO + ruta}`);

/* =========================================================
   VISTA (iframe)
   ========================================================= */
const vista = $('#vista');
const documentoVista = () => vista.contentDocument;
// El editor carga la copia SIN cambios de cada página (check.editor.html, la arma
// Eleventy) y le aplica lo último. Así nunca duplica nada ni muestra cambios viejos.
const urlPagina = (clave) => `${RAIZ_SITIO}${clave}.editor.html?editor=1`;
const claveDeUrl = (url) => {
  const ruta = new URL(url).href.slice(RAIZ_SITIO.length).split(/[?#]/)[0].replace(/(\.editor)?\.html$/, '');
  return ruta === '' ? 'index' : ruta;
};

let recarga = null; // qué restaurar después de recargar (scroll y selección)
const recargarVista = (idSeleccion = estado.idSeleccion) => {
  const doc = documentoVista();
  recarga = { scroll: doc?.defaultView?.scrollY || 0, id: idSeleccion };
  vista.src = urlPagina(estado.pagina);
};

const irAPagina = (clave) => {
  estado.pagina = clave;
  estado.seleccion = null;
  estado.idSeleccion = null;
  recarga = null;
  $('#selector-pagina').value = clave;
  vista.src = urlPagina(clave);
  pintarPaneles();
};

/* ---------- Escala: la página se ve a 1440 o 390 px aunque la pantalla sea más chica ---------- */
const ajustarEscala = () => {
  const lienzo = $('#lienzo');
  const marco = $('#marco');
  const disponible = lienzo.clientWidth - 32;
  const escala = Math.min(1, disponible / estado.ancho);
  marco.style.width = `${estado.ancho}px`;
  marco.style.height = `${(lienzo.clientHeight - 32) / escala}px`;
  marco.style.transform = `scale(${escala})`;
};
window.addEventListener('resize', ajustarEscala);

/* ---------- Estilos que solo existen dentro del editor ---------- */
const CSS_EDITOR = `
  html.editor-editar [data-editor-hover] { outline: 2px dashed rgba(122, 74, 235, .8) !important; outline-offset: 2px; cursor: pointer; }
  html.editor-editar a, html.editor-editar button { cursor: pointer; }
  [data-editor-sel] { outline: 2px solid #7a4aeb !important; outline-offset: 2px; }
  [contenteditable="true"] { outline: 2px solid #ff6f72 !important; outline-offset: 3px; cursor: text !important; }
  [data-oculto-editor] { opacity: .3 !important; outline: 2px dashed #999 !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
  /* Si lo seleccionado está dentro de un desplegable del menú, el desplegable queda abierto */
  .navbar__item:has([data-editor-sel]) .dropdown, .navbar__item:has([contenteditable]) .dropdown { opacity: 1 !important; pointer-events: auto !important; }
  /* Manijas para arrastrar (aparecen sobre lo seleccionado) */
  #editor-asas { position: fixed; z-index: 2147483646; display: flex; gap: 4px; pointer-events: none; }
  #editor-asas[hidden] { display: none; }
  #editor-asas button { pointer-events: auto; display: inline-flex; align-items: center; gap: 4px; padding: 4px 9px; border: 0; border-radius: 6px;
    background: #7a4aeb; color: #fff; font: 600 12px/1.2 system-ui, sans-serif; cursor: grab; box-shadow: 0 2px 8px rgba(0, 0, 0, .25); touch-action: none; }
  #editor-asas button[data-asa="libre"] { background: #133883; }
  #editor-indicador { position: fixed; z-index: 2147483645; background: #ff6f72; border-radius: 3px; pointer-events: none; box-shadow: 0 0 0 2px #fff; }
  #editor-indicador[hidden] { display: none; }
  html.editor-arrastrando, html.editor-arrastrando * { cursor: grabbing !important; user-select: none !important; }
  [data-editor-arrastrado] { opacity: .35 !important; }
`;

/* Operaciones de estructura (mover, duplicar, eliminar, agregar): primero menú/footer, después la página */
const operacionesEnVista = () => [
  ...(estado.datos.ediciones.global._estructura || []),
  ...(estado.datos.ediciones.paginas[estado.pagina]?._estructura || []),
];
// En la vista, "~/" apunta a la raíz del sitio (o a la vista previa de lo recién subido)
const resolverHtmlVista = (html) => html.replace(/(href|src)="~\/([^"]*)"/g, (_, atributo, ruta) => `${atributo}="${estado.vistas[ruta] || RAIZ_SITIO + ruta}"`);

/* Aplica TODAS las ediciones sobre la página del iframe (así se ve lo
   último aunque Vercel todavía esté publicando) */
const aplicarEdicionesEnVista = () => {
  const doc = documentoVista();
  if (!doc) return;
  const propias = estado.datos.ediciones.paginas[estado.pagina] || {};
  const todas = { ...estado.datos.ediciones.global, ...propias };

  // Los ocultos se muestran transparentes, para poder volver a mostrarlos
  $$('[data-oculto]', doc).forEach((nodo) => { nodo.removeAttribute('data-oculto'); nodo.setAttribute('data-oculto-editor', ''); });

  aplicarEstructura(doc.body, operacionesEnVista(), resolverHtmlVista);

  for (const [id, edicion] of Object.entries(todas)) {
    if (id.startsWith('_') || !edicion) continue; // _meta y _estructura no son elementos
    const elemento = doc.querySelector(`[data-e="${CSS.escape(id)}"]`);
    if (!elemento || (edicion.etiqueta && edicion.etiqueta !== elemento.localName.toLowerCase())) continue;
    if (typeof edicion.html === 'string') elemento.innerHTML = resolverHtmlVista(edicion.html);
    for (const [nombre, valor] of Object.entries(edicion.atributos || {})) {
      if (valor === null || valor === false) elemento.removeAttribute(nombre);
      else elemento.setAttribute(nombre, resolverVista(String(valor)));
      if (nombre === 'src') { elemento.removeAttribute('srcset'); elemento.removeAttribute('sizes'); }
    }
    elemento.toggleAttribute('data-oculto-editor', Boolean(edicion.oculto));
  }
  aplicarEstilosEnVista();
};

/* Estilos editados + colores y tipografías de la temporada que se está editando */
const aplicarEstilosEnVista = () => {
  const doc = documentoVista();
  if (!doc) return;
  const propias = estado.datos.ediciones.paginas[estado.pagina] || {};
  const todas = { ...estado.datos.ediciones.global, ...propias };

  let estilo = doc.getElementById('estilos-editor');
  if (!estilo) {
    estilo = doc.createElement('style');
    estilo.id = 'estilos-editor';
    doc.head.append(estilo);
  }
  // Las reglas de temporadas que vienen publicadas se reemplazan por las del editor
  const publicadas = doc.getElementById('estilos-admin');
  if (publicadas) publicadas.textContent = '';

  const temporada = temporadaEditada();
  const fuentesSubidas = estado.datos.temporadas.fuentes
    .map((f) => `@font-face { font-family: "${f.nombre}"; font-display: swap; src: url("${resolverVista(f.ruta)}") format("woff2"); }`)
    .join('\n');
  const variables = temporada ? cssTemporada(temporada) : '';
  // En el celular simulado (390 px) el iframe ya mide eso: la media query funciona sola
  estilo.textContent = `${CSS_EDITOR}\n${fuentesSubidas}\n:root:root:root { ${variables} }\n${resolverCSSVista(cssDeEdiciones(todas, ''))}`;
  if (temporada) doc.documentElement.setAttribute('data-temporada', temporada.id);

  // Tipografías de Google que se estén usando
  const nombres = new Set();
  for (const t of estado.datos.temporadas.temporadas) {
    for (const [nombre, valor] of Object.entries(t.tema?.variables || {})) if (nombre.startsWith('--fuente')) nombres.add(nombreDeFuente(valor));
  }
  Object.values(todas).forEach((e) => [e?.estilo, e?.estiloMovil].forEach((s) => s?.['font-family'] && nombres.add(nombreDeFuente(s['font-family']))));
  const url = urlGoogleFonts(nombres);
  let link = doc.getElementById('fuentes-editor');
  if (url) {
    if (!link) {
      link = doc.createElement('link');
      link.id = 'fuentes-editor';
      link.rel = 'stylesheet';
      doc.head.append(link);
    }
    if (link.href !== url) link.href = url;
  }
};

vista.addEventListener('load', () => {
  const doc = documentoVista();
  if (!doc?.body) return;
  const ventana = doc.defaultView;

  // Si se navegó a otra página desde el modo Navegar, se abre su copia para el editor
  const clave = claveDeUrl(ventana.location.href);
  if (!ventana.location.pathname.endsWith('.editor.html')) {
    if (PAGINAS.some((p) => p.clave === clave)) irAPagina(clave);
    return;
  }

  doc.documentElement.classList.add('modo-editor');
  doc.documentElement.classList.toggle('editor-editar', estado.modo === 'editar');
  aplicarEdicionesEnVista();
  escucharVista(doc);

  if (recarga) {
    ventana.scrollTo(0, recarga.scroll);
    const elemento = recarga.id && doc.querySelector(`[data-e="${CSS.escape(recarga.id)}"]`);
    recarga = null;
    if (elemento) {
      seleccionar(elemento, { sinEditarTexto: true });
      elemento.scrollIntoView({ block: 'nearest' });
      pintarPanelPagina();
      return;
    }
  }
  pintarPaneles();
});

/* ---------- Eventos dentro de la página ---------- */
const escucharVista = (doc) => {
  let resaltado = null;
  doc.addEventListener('mouseover', (evento) => {
    if (estado.modo !== 'editar' || arrastre) return;
    const elemento = evento.target.closest?.('#editor-asas') ? null : evento.target.closest?.('[data-e]');
    if (elemento === resaltado) return;
    resaltado?.removeAttribute('data-editor-hover');
    resaltado = elemento;
    elemento?.setAttribute('data-editor-hover', '');
  });
  doc.addEventListener('mouseleave', () => { resaltado?.removeAttribute('data-editor-hover'); resaltado = null; });

  // En modo Editar, un clic selecciona (no abre links ni menús)
  doc.addEventListener('click', (evento) => {
    if (estado.modo !== 'editar') {
      // En modo Navegar, los links externos se abren en otra pestaña
      const link = evento.target.closest('a[href]');
      if (link && !link.href.startsWith(RAIZ_SITIO) && !link.href.startsWith('#')) { evento.preventDefault(); window.open(link.href, '_blank', 'noopener'); }
      return;
    }
    if (evento.target.closest('.banner-temporada')) return; // la vista previa del banner funciona normal
    if (evento.target.closest('#editor-asas')) { evento.preventDefault(); evento.stopPropagation(); return; }
    const elemento = evento.target.closest('[data-e]');
    evento.preventDefault(); // nunca abre links ni envía formularios
    evento.stopPropagation();
    if (elemento?.isContentEditable) return; // está escribiendo: deja ubicar el cursor
    if (elemento) seleccionar(elemento);
  }, true);
  doc.addEventListener('submit', (evento) => evento.preventDefault(), true);
  doc.addEventListener('keydown', (evento) => {
    if ((evento.ctrlKey || evento.metaKey) && evento.key === 'z' && !evento.target.isContentEditable) { evento.preventDefault(); deshacer(); }
    if (evento.key === 'Escape' && arrastre) cancelarArrastre();
    else if (evento.key === 'Escape' && estado.seleccion) deseleccionar();
  });
  crearAsas(doc);
};

/* =========================================================
   ARRASTRAR (como en Figma)
   Dos manijas sobre lo seleccionado:
   - "⠿ Arrastrar": lo lleva a otro lugar de la página. Una línea coral
     muestra dónde cae (antes o después de otro elemento). Se guarda como
     operación "mover": el resto se reacomoda y en el celular sigue bien.
   - "✥ Libre": lo corre unos píxeles sin mover lo demás (propiedad CSS
     "translate"). Se guarda aparte para escritorio y para celular.
   ========================================================= */
let arrastre = null; // datos del arrastre en curso

// "menu" o "footer" si está adentro del menú/footer; "pagina" si no.
// El menú y el footer en sí (la etiqueta raíz) viven en la página.
const ambitoDe = (id) => id.match(/^(menu|footer)\//)?.[1] || 'pagina';

const crearAsas = (doc) => {
  const asas = doc.createElement('div');
  asas.id = 'editor-asas';
  asas.hidden = true;
  asas.innerHTML = '<button type="button" data-asa="mover" title="Arrastralo a otro lugar de la página">⠿ Arrastrar</button>'
    + '<button type="button" data-asa="libre" title="Correlo libremente unos píxeles (sin mover lo demás)">✥ Libre</button>';
  const indicador = doc.createElement('div');
  indicador.id = 'editor-indicador';
  indicador.hidden = true;
  doc.body.append(asas, indicador);

  $$('button', asas).forEach((boton) => boton.addEventListener('pointerdown', (evento) => {
    if (!estado.seleccion) return;
    evento.preventDefault();
    evento.stopPropagation();
    boton.setPointerCapture(evento.pointerId);
    terminarEdicionTexto();
    if (boton.dataset.asa === 'mover') empezarArrastre(doc, evento);
    else empezarLibre(doc, evento);
  }));
  $$('button', asas).forEach((boton) => {
    boton.addEventListener('pointermove', (evento) => arrastre?.mover(evento));
    boton.addEventListener('pointerup', (evento) => arrastre?.soltar(evento));
    boton.addEventListener('pointercancel', () => cancelarArrastre());
  });

  // Las manijas siguen al elemento (scroll, cambios de tamaño, menús que se abren)
  const seguir = () => {
    if (!asas.isConnected) return;
    posicionarAsas(doc);
    doc.defaultView.requestAnimationFrame(seguir);
  };
  seguir();
};

const posicionarAsas = (doc) => {
  const asas = doc.getElementById('editor-asas');
  const elemento = estado.seleccion;
  const visible = elemento?.isConnected && estado.modo === 'editar' && !['body', 'menu', 'footer'].includes(elemento.dataset.e) && !esSvg(elemento);
  asas.hidden = !visible;
  if (!visible || (arrastre && arrastre.tipo === 'mover')) return;
  const rect = elemento.getBoundingClientRect();
  asas.style.top = `${Math.max(4, rect.top - 30)}px`;
  asas.style.left = `${Math.max(4, Math.min(rect.left, doc.documentElement.clientWidth - 190))}px`;
};

// ¿Los hermanos están uno al lado del otro (fila) o uno abajo del otro?
const enFila = (elemento) => {
  const ventana = elemento.ownerDocument.defaultView;
  const propio = ventana.getComputedStyle(elemento);
  if (propio.display.startsWith('inline')) return true;
  const padre = elemento.parentElement && ventana.getComputedStyle(elemento.parentElement);
  if (!padre) return false;
  if (padre.display.includes('flex')) return padre.flexDirection.startsWith('row');
  if (padre.display.includes('grid')) return padre.gridTemplateColumns.trim().split(/\s+/).length > 1;
  return false;
};

const empezarArrastre = (doc, evento) => {
  const elemento = estado.seleccion;
  const ventana = doc.defaultView;
  const indicador = doc.getElementById('editor-indicador');
  const asas = doc.getElementById('editor-asas');
  doc.documentElement.classList.add('editor-arrastrando');
  elemento.setAttribute('data-editor-arrastrado', '');
  let destino = null;
  let lugar = 'despues';

  arrastre = {
    tipo: 'mover',
    mover: (e) => {
      // Las manijas siguen al puntero mientras se arrastra
      asas.style.top = `${e.clientY + 12}px`;
      asas.style.left = `${e.clientX + 12}px`;
      // Scroll automático cerca de los bordes
      if (e.clientY < 60) ventana.scrollBy(0, -18);
      if (e.clientY > ventana.innerHeight - 60) ventana.scrollBy(0, 18);

      asas.style.visibility = 'hidden';
      const debajo = doc.elementFromPoint(e.clientX, e.clientY);
      asas.style.visibility = '';
      let candidato = debajo?.closest('[data-e]');
      // No vale: él mismo, algo de adentro suyo, la página entera, textos SVG ni otro ámbito (menú ↔ página)
      while (candidato && (candidato === elemento || elemento.contains(candidato) || esSvg(candidato))) candidato = candidato.parentElement?.closest('[data-e]');
      const valido = candidato && candidato !== doc.body && ambitoDe(candidato.dataset.e) === ambitoDe(elemento.dataset.e);
      if (!valido) { destino = null; indicador.hidden = true; return; }
      destino = candidato;
      const rect = destino.getBoundingClientRect();
      const fila = enFila(destino);
      lugar = fila ? (e.clientX < rect.left + rect.width / 2 ? 'antes' : 'despues') : (e.clientY < rect.top + rect.height / 2 ? 'antes' : 'despues');
      indicador.hidden = false;
      if (fila) {
        Object.assign(indicador.style, { top: `${rect.top}px`, height: `${rect.height}px`, width: '4px',
          left: `${(lugar === 'antes' ? rect.left : rect.right) - 2}px` });
      } else {
        Object.assign(indicador.style, { left: `${rect.left}px`, width: `${rect.width}px`, height: '4px',
          top: `${(lugar === 'antes' ? rect.top : rect.bottom) - 2}px` });
      }
    },
    soltar: () => {
      const final = destino;
      const donde = lugar;
      cancelarArrastre();
      if (final) moverA(elemento, final, donde);
    },
  };
  arrastre.mover(evento);
};

const empezarLibre = (doc, evento) => {
  const elemento = estado.seleccion;
  const claveEstilo = estado.ancho <= CORTE_MOVIL ? 'estiloMovil' : 'estilo';
  const actual = (edicionDe(elemento.dataset.e)?.[claveEstilo]?.translate || '0px 0px').split(/\s+/).map(parseFloat);
  const [x0, y0] = [actual[0] || 0, actual[1] || 0];
  const inicio = { x: evento.clientX, y: evento.clientY };
  doc.documentElement.classList.add('editor-arrastrando');
  let valor = `${x0}px ${y0}px`;
  arrastre = {
    tipo: 'libre',
    mover: (e) => {
      // Con Shift se mueve de a 10 px (como la grilla de Figma)
      let dx = e.clientX - inicio.x;
      let dy = e.clientY - inicio.y;
      if (e.shiftKey) { dx = Math.round(dx / 10) * 10; dy = Math.round(dy / 10) * 10; }
      valor = `${Math.round(x0 + dx)}px ${Math.round(y0 + dy)}px`;
      elemento.style.setProperty('translate', valor, 'important');
    },
    soltar: () => {
      cancelarArrastre();
      elemento.style.removeProperty('translate');
      editar(elemento, { [claveEstilo]: { translate: valor === '0px 0px' ? '' : valor } });
      aplicarEstilosEnVista();
      pintarPanelElemento();
    },
  };
};

const cancelarArrastre = () => {
  const doc = documentoVista();
  arrastre = null;
  if (!doc) return;
  doc.documentElement.classList.remove('editor-arrastrando');
  $$('[data-editor-arrastrado]', doc).forEach((n) => n.removeAttribute('data-editor-arrastrado'));
  const indicador = doc.getElementById('editor-indicador');
  if (indicador) indicador.hidden = true;
};

const moverA = (elemento, destino, lugar) => {
  recordar();
  if (lugar === 'antes') destino.before(elemento); else destino.after(elemento);
  const id = elemento.dataset.e;
  // Solo cuenta el último lugar al que se arrastró este elemento
  const operaciones = operacionesDe(id);
  const resto = operaciones.filter((op) => !(op.op === 'mover' && op.id === id));
  operaciones.splice(0, operaciones.length, ...resto, { op: 'mover', id, destino: destino.dataset.e, lugar });
  cambio();
  pintarPanelElemento();
  toast('Movido. Tocá Publicar para que se vea en la web.');
};

/* =========================================================
   SELECCIÓN Y EDICIÓN DE TEXTO
   ========================================================= */
const tieneTextoDirecto = (elemento) => [...elemento.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
const esSvg = (elemento) => elemento instanceof elemento.ownerDocument.defaultView.SVGElement;
const esTexto = (elemento) => {
  const etiqueta = elemento.localName.toLowerCase();
  if (ETIQUETAS_SVG_TEXTO.has(etiqueta)) return true;
  if (['img', 'svg', 'input', 'select', 'textarea', 'iframe', 'video', 'body', 'html'].includes(etiqueta)) return false;
  if (tieneTextoDirecto(elemento)) return true;
  return ETIQUETAS_TEXTO.has(etiqueta) && elemento.textContent.trim() !== ''
    && !elemento.querySelector('img, svg, video, div, section, ul, ol, p, h1, h2, h3, h4');
};

// HTML limpio para guardar (sin marcas del editor)
const htmlLimpio = (elemento) => {
  const copia = elemento.cloneNode(true);
  $$('*', copia).forEach((nodo) => {
    ['data-e', 'data-editor-hover', 'data-editor-sel', 'contenteditable', 'data-oculto-editor'].forEach((a) => nodo.removeAttribute(a));
  });
  // El navegador alterna "&nbsp; " al escribir espacios: se dejan como espacio común
  return copia.innerHTML.replace(/&nbsp;(?= )| (?=&nbsp;)/g, '').replace(/&nbsp;(?=[^\s<&])/g, ' ');
};

let textoEnEdicion = null;
const textosOriginales = new WeakMap(); // elemento → texto antes de editarlo
const terminarEdicionTexto = () => {
  if (!textoEnEdicion) return;
  const { elemento } = textoEnEdicion;
  elemento.removeAttribute('contenteditable');
  textoEnEdicion = null;
};

const empezarEdicionTexto = (elemento) => {
  if (esSvg(elemento)) return; // los textos SVG se editan desde el panel
  elemento.setAttribute('contenteditable', 'true');
  textoEnEdicion = { elemento };
  elemento.focus({ preventScroll: true });
  const registrar = () => {
    editar(elemento, { html: guardarLinksRelativos(htmlLimpio(elemento), elemento.ownerDocument.baseURI) }, 'texto');
    const campo = $('#campo-texto');
    if (campo && document.activeElement !== campo) campo.value = elemento.textContent;
  };
  elemento.oninput = registrar;
  elemento.onkeydown = (evento) => {
    // Enter = salto de línea (no crea párrafos nuevos)
    if (evento.key === 'Enter') { evento.preventDefault(); elemento.ownerDocument.execCommand('insertLineBreak'); }
  };
  elemento.onpaste = (evento) => {
    // Pegar siempre como texto simple (evita traer estilos de Word o de otras webs)
    evento.preventDefault();
    elemento.ownerDocument.execCommand('insertText', false, evento.clipboardData.getData('text/plain'));
  };
};

const seleccionar = (elemento, { sinEditarTexto = false } = {}) => {
  if (estado.seleccion === elemento && textoEnEdicion?.elemento === elemento) return;
  deseleccionar({ sinPintar: true });
  if (!textosOriginales.has(elemento)) textosOriginales.set(elemento, elemento.textContent);
  estado.seleccion = elemento;
  estado.idSeleccion = elemento.dataset.e;
  elemento.setAttribute('data-editor-sel', '');
  if (!sinEditarTexto && esTexto(elemento)) empezarEdicionTexto(elemento);
  mostrarPestana('elemento');
  pintarPanelElemento();
};

const deseleccionar = ({ sinPintar = false } = {}) => {
  terminarEdicionTexto();
  estado.seleccion?.removeAttribute('data-editor-sel');
  estado.seleccion = null;
  estado.idSeleccion = null;
  if (!sinPintar) pintarPanelElemento();
};

/* =========================================================
   SUBIR ARCHIVOS (las imágenes se pasan a WebP antes de subir)
   ========================================================= */
const leerComoBase64 = (blob) => new Promise((listo, fallo) => {
  const lector = new FileReader();
  lector.onload = () => listo(String(lector.result).split(',')[1]);
  lector.onerror = fallo;
  lector.readAsDataURL(blob);
});

const aWebp = async (archivo, maximo = 2400) => {
  const imagen = await createImageBitmap(archivo);
  const escala = Math.min(1, maximo / Math.max(imagen.width, imagen.height));
  const lienzo = document.createElement('canvas');
  lienzo.width = Math.round(imagen.width * escala);
  lienzo.height = Math.round(imagen.height * escala);
  lienzo.getContext('2d').drawImage(imagen, 0, 0, lienzo.width, lienzo.height);
  const blob = await new Promise((listo) => lienzo.toBlob(listo, 'image/webp', 0.85));
  return { blob, ancho: lienzo.width, alto: lienzo.height };
};

const subir = async (archivo, tipo = 'imagen') => {
  toast('Subiendo…', { duracion: 20000 });
  let blob = archivo;
  let nombre = archivo.name;
  let medidas = null;
  if (tipo === 'imagen' && !/\.(svg|gif)$/i.test(archivo.name)) {
    const convertido = await aWebp(archivo);
    blob = convertido.blob;
    medidas = { ancho: convertido.ancho, alto: convertido.alto };
    nombre = archivo.name.replace(/\.[^.]+$/, '') + '.webp';
  }
  const respuesta = await api('subir', { metodo: 'POST', cuerpo: { tipo, nombre, base64: await leerComoBase64(blob) } });
  if (respuesta.sha) {
    estado.subidas = estado.subidas.filter((s) => s.ruta !== respuesta.ruta).concat({ ruta: respuesta.ruta, sha: respuesta.sha });
    estado.vistas[respuesta.ruta] = URL.createObjectURL(blob);
  }
  toast('Archivo subido. Se publica junto con el resto de los cambios.');
  return { ruta: respuesta.ruta, medidas };
};

const pedirArchivo = (aceptar) => new Promise((listo) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = aceptar;
  input.onchange = () => listo(input.files[0] || null);
  input.click();
});

/* =========================================================
   PANELES
   ========================================================= */
const mostrarPestana = (nombre) => {
  $$('.pestanas [data-pestana]').forEach((b) => b.classList.toggle('is-activa', b.dataset.pestana === nombre));
  $$('.lateral__contenido [data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== nombre; });
};
$$('.pestanas [data-pestana]').forEach((boton) => boton.addEventListener('click', () => mostrarPestana(boton.dataset.pestana)));

const pintarPaneles = () => {
  pintarPanelElemento();
  pintarPanelPagina();
  pintarPanelTema();
  pintarPanelTemporadas();
};

/* ---------- Campos reutilizables ---------- */
const aHex = (color) => {
  const partes = String(color).match(/\d+(\.\d+)?/g);
  if (!partes || partes.length < 3 || /^#/.test(color)) return /^#[0-9a-f]{6}$/i.test(color) ? color : '#000000';
  return `#${partes.slice(0, 3).map((n) => Math.round(Number(n)).toString(16).padStart(2, '0')).join('')}`;
};

const campoColor = (nombre, etiqueta, valor, actual) => `
  <label class="campo"><span>${esc(etiqueta)}</span>
    <span class="color">
      <input type="color" data-color="${esc(nombre)}" value="${esc(aHex(valor || actual))}" class="${valor ? '' : 'vacio'}">
      <input type="text" data-color-texto="${esc(nombre)}" value="${esc(valor || '')}" placeholder="${esc(actual || '')}">
      <button type="button" class="quitar" data-quitar="${esc(nombre)}" title="Volver al original">✕</button>
    </span>
  </label>`;

const opcionesFuente = (valor) => {
  const actual = valor ? nombreDeFuente(valor) : '';
  const opcion = (nombre) => `<option value="${esc(nombre)}" ${nombre === actual ? 'selected' : ''}>${esc(nombre)}</option>`;
  return `<option value="">(sin cambio)</option>
    <optgroup label="Del sitio">${FUENTES_LOCALES.map(opcion).join('')}</optgroup>
    ${estado.datos.temporadas.fuentes.length ? `<optgroup label="Subidas">${estado.datos.temporadas.fuentes.map((f) => opcion(f.nombre)).join('')}</optgroup>` : ''}
    <optgroup label="Google Fonts">${FUENTES_GOOGLE.map(opcion).join('')}</optgroup>`;
};

const conectarColores = (raiz, alCambiar) => {
  $$('[data-color]', raiz).forEach((input) => input.addEventListener('input', () => {
    const texto = $(`[data-color-texto="${CSS.escape(input.dataset.color)}"]`, raiz);
    texto.value = input.value;
    input.classList.remove('vacio');
    alCambiar(input.dataset.color, input.value);
  }));
  $$('[data-color-texto]', raiz).forEach((input) => input.addEventListener('change', () => alCambiar(input.dataset.colorTexto, input.value.trim())));
  $$('[data-quitar]', raiz).forEach((boton) => boton.addEventListener('click', () => alCambiar(boton.dataset.quitar, '')));
};

/* ---------- Panel: ELEMENTO ---------- */
const pintarPanelElemento = () => {
  const panel = $('#panel-elemento');
  const elemento = estado.seleccion;
  if (!elemento || !elemento.isConnected) {
    panel.innerHTML = `<div class="vacio-panel"><b>👆</b>Hacé clic en cualquier parte de la página para editarla.<br><br>
      Los textos se escriben directamente encima. Para abrir menús, pestañas o carruseles, pasá a <strong>Navegar</strong>, abrilos y volvé a <strong>Editar</strong>.</div>`;
    return;
  }
  const id = elemento.dataset.e;
  const etiqueta = elemento.localName.toLowerCase();
  const edicion = edicionDe(id) || {};
  const movil = estado.ancho <= CORTE_MOVIL;
  const claveEstilo = movil ? 'estiloMovil' : 'estilo';
  const estilo = edicion[claveEstilo] || {};
  const calculado = elemento.ownerDocument.defaultView.getComputedStyle(elemento);
  const base = elemento.ownerDocument.baseURI;

  // Camino de padres (para seleccionar el bloque que contiene al elemento)
  const padres = [];
  for (let nodo = elemento; nodo && padres.length < 6; nodo = nodo.parentElement?.closest('[data-e]')) padres.unshift(nodo);
  // Nombre + el comienzo de su texto si es corto (ej.: "Link / botón: POS & ERP"), para reconocer cada bloque
  const nombreDe = (nodo) => {
    const nombre = NOMBRES[nodo.localName.toLowerCase()] || `<${nodo.localName}>`;
    const textoNodo = (nodo.textContent || '').trim().replace(/\s+/g, ' ');
    if (!textoNodo || textoNodo.length > 120 || nodo.localName === 'body') return nombre;
    return `${nombre}: ${textoNodo.length > 22 ? `${textoNodo.slice(0, 22)}…` : textoNodo}`;
  };

  const texto = esTexto(elemento);
  const link = etiqueta === 'a' ? elemento : null;
  const imagen = etiqueta === 'img' ? elemento : null;
  const fondoImagen = estilo['background-image'] || '';

  panel.innerHTML = `
    <div class="grupo">
      <div class="ruta">${padres.map((nodo, i) => `<button type="button" data-padre="${i}">${esc(nombreDe(nodo))}</button>`).join('')}</div>
      <div class="etiqueta-elemento">${esc(nombreDe(elemento))}</div>
      ${esGlobal(id) ? '<p>⚠️ Está en el menú o el pie: el cambio se aplica en <strong>todas las páginas</strong>.</p>' : ''}
    </div>

    ${['body', 'menu', 'footer'].includes(id) || esSvg(elemento) ? '' : `
    <div class="grupo">
      <h3>Ordenar y agregar</h3>
      <p>Arrastralo con la manija <strong>⠿ Arrastrar</strong> que aparece arriba del elemento, o usá estos botones. Para mover una tarjeta u opción del menú entera, elegí primero el bloque en los chips de arriba.</p>
      <div class="herramientas">
        <button type="button" data-estructura="subir" title="Mover antes (arriba o a la izquierda)">↑ Subir</button>
        <button type="button" data-estructura="bajar" title="Mover después (abajo o a la derecha)">↓ Bajar</button>
        <button type="button" data-estructura="duplicar" title="Crear una copia justo después">⧉ Duplicar</button>
        <button type="button" data-estructura="eliminar" title="Sacarlo de la web (se puede restaurar desde la pestaña Página)">🗑 Eliminar</button>
      </div>
      <label class="campo"><span>Agregar debajo</span>
        <select id="agregar-tipo">
          <option value="">Elegí qué agregar…</option>
          <option value="h2">Título</option>
          <option value="h3">Subtítulo</option>
          <option value="p">Párrafo</option>
          <option value="boton">Botón</option>
          <option value="imagen">Imagen</option>
        </select>
        <small>Para que quede con el mismo estilo que lo de al lado, conviene Duplicar y cambiar el texto.</small>
      </label>
    </div>`}

    ${texto ? `
    <div class="grupo">
      <h3>Texto</h3>
      ${esSvg(elemento) ? '' : `<p>Escribí directamente sobre la página. Enter hace un salto de línea.</p>
      <div class="herramientas">
        <button type="button" data-comando="bold" title="Negrita"><b>N</b></button>
        <button type="button" data-comando="italic" title="Cursiva"><i>C</i></button>
        <button type="button" data-comando="underline" title="Subrayado"><u>S</u></button>
        <button type="button" data-comando="createLink" title="Convertir en link">🔗</button>
        <button type="button" data-comando="unlink" title="Quitar link">⛓️‍💥</button>
        <button type="button" data-comando="removeFormat" title="Quitar formato">⌫ formato</button>
      </div>`}
      <label class="campo"><span>${esSvg(elemento) ? 'Texto' : 'O escribilo acá'}</span>
        <textarea class="normal" id="campo-texto" rows="3">${esc(elemento.textContent.trim())}</textarea>
      </label>
      <details><summary>HTML (avanzado)</summary>
        <label class="campo"><textarea id="campo-html" rows="5">${esc(htmlLimpio(elemento).trim())}</textarea></label>
      </details>
    </div>` : ''}

    ${link ? `
    <div class="grupo">
      <h3>Link</h3>
      <label class="campo"><span>Lleva a</span>
        <select id="campo-pagina-link">
          <option value="">Otra dirección…</option>
          ${PAGINAS.map((p) => `<option value="~/${p.clave === 'index' ? 'index' : p.clave}.html">${esc(p.nombre)}</option>`).join('')}
        </select>
      </label>
      <label class="campo"><span>Dirección</span>
        <input id="campo-href" value="${esc(aRutaVisible(edicion.atributos?.href ?? link.getAttribute('href'), base))}" placeholder="https://… o src/views/demo.html">
        <small>Web externa: empezá con https://. Mail: mailto:… · Teléfono: tel:…</small>
        <small>🎬 Links de YouTube, Vimeo, Google Drive o .mp4 se reproducen en una ventana sobre la página (probalo en modo Navegar).</small>
      </label>
      <label class="check"><input type="checkbox" id="campo-blank" ${link.getAttribute('target') === '_blank' ? 'checked' : ''}> Abrir en otra pestaña</label>
    </div>` : ''}

    ${imagen ? `
    <div class="grupo">
      <h3>Imagen</h3>
      <img class="vista-imagen" src="${esc(imagen.currentSrc || imagen.src)}" alt="">
      <button type="button" class="btn btn--bloque" id="btn-cambiar-imagen">🖼️ Cambiar imagen</button>
      <label class="campo"><span>Descripción (para Google y lectores de pantalla)</span>
        <input id="campo-alt" value="${esc(imagen.getAttribute('alt') || '')}" placeholder="Vacío si es decorativa">
      </label>
    </div>` : ''}

    <div class="grupo">
      <h3>Estilo ${movil ? '· 📱 solo celular' : '· 🖥️ escritorio (y celular si no tiene propio)'}</h3>
      ${campoColor('color', 'Color de letra', estilo.color, calculado.color)}
      ${campoColor('background-color', 'Color de fondo', estilo['background-color'], calculado.backgroundColor)}
      <div class="campo"><span>Imagen de fondo</span>
        <div class="fila">
          <button type="button" class="btn" id="btn-fondo-imagen">${fondoImagen ? 'Cambiar' : 'Elegir'} imagen</button>
          ${fondoImagen ? '<button type="button" class="btn btn--peligro fijo" id="btn-quitar-fondo">Quitar</button>' : ''}
        </div>
        ${fondoImagen ? `<label class="campo"><span>Ajuste</span><select data-estilo="background-size">
          ${[['cover', 'Cubrir todo'], ['contain', 'Entera'], ['auto', 'Tamaño real']].map(([v, n]) => `<option value="${v}" ${estilo['background-size'] === v ? 'selected' : ''}>${n}</option>`).join('')}
        </select></label>` : ''}
      </div>
      <label class="campo"><span>Tipografía</span><select data-estilo="font-family">${opcionesFuente(estilo['font-family'])}</select></label>
      <div class="fila">
        <label class="campo"><span>Tamaño (px)</span><input type="number" min="6" max="200" data-estilo="font-size" data-unidad="px" value="${esc(parseFloat(estilo['font-size']) || '')}" placeholder="${esc(parseFloat(calculado.fontSize) || '')}"></label>
        <label class="campo"><span>Grosor</span><select data-estilo="font-weight">
          <option value="">(igual)</option>
          ${[['300', 'Fina'], ['400', 'Normal'], ['500', 'Media'], ['600', 'Semi negrita'], ['700', 'Negrita'], ['800', 'Extra negrita']].map(([v, n]) => `<option value="${v}" ${estilo['font-weight'] === v ? 'selected' : ''}>${n}</option>`).join('')}
        </select></label>
      </div>
      <div class="fila">
        <label class="campo"><span>Alineación</span><select data-estilo="text-align">
          <option value="">(igual)</option>
          ${[['left', 'Izquierda'], ['center', 'Centro'], ['right', 'Derecha']].map(([v, n]) => `<option value="${v}" ${estilo['text-align'] === v ? 'selected' : ''}>${n}</option>`).join('')}
        </select></label>
        <label class="campo"><span>Estilo</span><select data-estilo="font-style">
          <option value="">(igual)</option>
          <option value="normal" ${estilo['font-style'] === 'normal' ? 'selected' : ''}>Normal</option>
          <option value="italic" ${estilo['font-style'] === 'italic' ? 'selected' : ''}>Cursiva</option>
        </select></label>
      </div>
      <div class="fila">
        <label class="campo"><span>Redondeo (px)</span><input type="number" min="0" max="500" data-estilo="border-radius" data-unidad="px" value="${esc(parseFloat(estilo['border-radius']) || '')}" placeholder="${esc(parseFloat(calculado.borderRadius) || 0)}"></label>
        <label class="campo"><span>Opacidad (%)</span><input type="number" min="0" max="100" data-estilo="opacity" data-unidad="%" value="${esc(estilo.opacity ? Math.round(estilo.opacity * 100) : '')}" placeholder="${esc(Math.round(calculado.opacity * 100))}"></label>
      </div>
      <div class="campo"><span>Posición libre (px) · también con la manija ✥ Libre</span>
        <div class="fila">
          <label class="campo"><span class="sr-only">Horizontal</span><input type="number" id="libre-x" value="${esc(parseFloat((estilo.translate || '').split(/\s+/)[0]) || '')}" placeholder="← 0 →"></label>
          <label class="campo"><span class="sr-only">Vertical</span><input type="number" id="libre-y" value="${esc(parseFloat((estilo.translate || '').split(/\s+/)[1]) || '')}" placeholder="↑ 0 ↓"></label>
          ${estilo.translate ? '<button type="button" class="btn fijo" id="btn-libre-reset" title="Volver a su lugar">↺</button>' : ''}
        </div>
      </div>
    </div>

    <div class="grupo">
      <h3>Visibilidad</h3>
      <label class="check"><input type="checkbox" id="campo-oculto" ${edicion.oculto ? 'checked' : ''}> Ocultar en la web</label>
      ${edicionDe(id) ? '<button type="button" class="btn btn--peligro" id="btn-restablecer">↺ Volver este elemento al original</button>' : ''}
    </div>`;

  /* --- Eventos del panel de elemento --- */
  $$('[data-padre]', panel).forEach((b) => b.addEventListener('click', () => seleccionar(padres[Number(b.dataset.padre)])));

  $$('[data-comando]', panel).forEach((b) => b.addEventListener('mousedown', (evento) => {
    evento.preventDefault(); // no sacar el foco del texto
    const doc = elemento.ownerDocument;
    let valor = null;
    if (b.dataset.comando === 'createLink') {
      valor = prompt('Dirección del link (https://… o src/views/demo.html)');
      if (!valor) return;
      valor = resolverVista(aRutaGuardada(valor));
    }
    doc.execCommand(b.dataset.comando, false, valor);
    editar(elemento, { html: guardarLinksRelativos(htmlLimpio(elemento), base) }, 'texto');
  }));

  $('#campo-texto', panel)?.addEventListener('input', (evento) => {
    // Texto simple: reemplaza todo el contenido (se pierden negritas)
    elemento.textContent = evento.target.value;
    editar(elemento, { html: htmlLimpio(elemento) }, 'texto');
  });
  $('#campo-html', panel)?.addEventListener('change', (evento) => {
    elemento.innerHTML = evento.target.value;
    editar(elemento, { html: guardarLinksRelativos(htmlLimpio(elemento), base) });
  });

  if (link) {
    const href = $('#campo-href', panel);
    const elegir = $('#campo-pagina-link', panel);
    const actualizarHref = (valor) => {
      const guardado = aRutaGuardada(valor);
      link.setAttribute('href', resolverVista(guardado));
      editar(link, { atributos: { href: guardado } }, 'href');
    };
    href.addEventListener('change', () => actualizarHref(href.value));
    elegir.addEventListener('change', () => { if (elegir.value) { href.value = elegir.value.slice(2); actualizarHref(elegir.value); } });
    $('#campo-blank', panel).addEventListener('change', (evento) => {
      const nueva = evento.target.checked;
      if (nueva) { link.setAttribute('target', '_blank'); link.setAttribute('rel', 'noopener'); } else { link.removeAttribute('target'); }
      editar(link, { atributos: nueva ? { target: '_blank', rel: 'noopener' } : { target: null } });
    });
  }

  if (imagen) {
    $('#btn-cambiar-imagen', panel).addEventListener('click', async () => {
      const archivo = await pedirArchivo('image/*');
      if (!archivo) return;
      try {
        const { ruta, medidas } = await subir(archivo, 'imagen');
        const atributos = { src: `~/${ruta}` };
        // Mantiene el ancho y ajusta el alto a la proporción de la imagen nueva (evita saltos al cargar)
        if (medidas && imagen.getAttribute('width')) {
          const ancho = Number(imagen.getAttribute('width'));
          atributos.height = String(Math.round(ancho * medidas.alto / medidas.ancho));
        }
        imagen.removeAttribute('srcset');
        imagen.removeAttribute('sizes');
        imagen.src = resolverVista(atributos.src);
        if (atributos.height) imagen.setAttribute('height', atributos.height);
        editar(imagen, { atributos });
        pintarPanelElemento();
      } catch (error) { toast(error.message, { error: true }); }
    });
    $('#campo-alt', panel).addEventListener('input', (evento) => {
      imagen.setAttribute('alt', evento.target.value);
      editar(imagen, { atributos: { alt: evento.target.value } }, 'alt');
    });
  }

  // Estilos: se guardan y se ven al instante
  const ponerEstilo = (prop, valor) => {
    editar(elemento, { [claveEstilo]: { [prop]: valor } }, `estilo-${prop}`);
    aplicarEstilosEnVista();
  };
  conectarColores(panel, (prop, valor) => { ponerEstilo(prop, valor); if (!valor) pintarPanelElemento(); });
  $$('[data-estilo]', panel).forEach((campo) => campo.addEventListener(campo.tagName === 'SELECT' ? 'change' : 'input', () => {
    let valor = campo.value;
    if (campo.dataset.estilo === 'font-family' && valor) valor = pilaDeFuente(valor);
    if (valor !== '' && campo.dataset.unidad === 'px') valor = `${valor}px`;
    if (valor !== '' && campo.dataset.unidad === '%') valor = String(Math.min(100, Math.max(0, Number(valor))) / 100);
    ponerEstilo(campo.dataset.estilo, valor);
  }));
  // Posición libre (translate): X e Y en píxeles
  const ponerLibre = () => {
    const x = Number($('#libre-x', panel).value) || 0;
    const y = Number($('#libre-y', panel).value) || 0;
    ponerEstilo('translate', x || y ? `${x}px ${y}px` : '');
  };
  $('#libre-x', panel).addEventListener('input', ponerLibre);
  $('#libre-y', panel).addEventListener('input', ponerLibre);
  $('#btn-libre-reset', panel)?.addEventListener('click', () => { ponerEstilo('translate', ''); pintarPanelElemento(); });

  $('#btn-fondo-imagen', panel).addEventListener('click', async () => {
    const archivo = await pedirArchivo('image/*');
    if (!archivo) return;
    try {
      const { ruta } = await subir(archivo, 'imagen');
      editar(elemento, { [claveEstilo]: { 'background-image': `url("~/${ruta}")`, 'background-size': estilo['background-size'] || 'cover', 'background-position': 'center', 'background-repeat': 'no-repeat' } });
      aplicarEstilosEnVista();
      pintarPanelElemento();
    } catch (error) { toast(error.message, { error: true }); }
  });
  $('#btn-quitar-fondo', panel)?.addEventListener('click', () => {
    editar(elemento, { [claveEstilo]: { 'background-image': '', 'background-size': '', 'background-position': '', 'background-repeat': '' } });
    aplicarEstilosEnVista();
    pintarPanelElemento();
  });

  $('#campo-oculto', panel).addEventListener('change', (evento) => {
    elemento.toggleAttribute('data-oculto-editor', evento.target.checked);
    editar(elemento, { oculto: evento.target.checked });
  });
  $('#btn-restablecer', panel)?.addEventListener('click', () => {
    recordar();
    delete grupoDe(id)[id];
    limpiarEdicion(id);
    cambio();
    recargarVista();
  });

  $$('[data-estructura]', panel).forEach((boton) => boton.addEventListener('click', () => {
    const accion = boton.dataset.estructura;
    if (accion === 'subir' || accion === 'bajar') moverElemento(elemento, accion);
    if (accion === 'duplicar') duplicarElemento(elemento);
    if (accion === 'eliminar') eliminarElemento(elemento);
  }));
  $('#agregar-tipo', panel)?.addEventListener('change', (evento) => {
    const tipo = evento.target.value;
    evento.target.value = '';
    if (tipo) agregarElemento(elemento, tipo);
  });
};

/* =========================================================
   ESTRUCTURA: mover, duplicar, eliminar y agregar
   Cada acción suma una operación a "_estructura" (ver compartido.mjs).
   ========================================================= */
// Dirección nueva y única: "n…" en la página, "menu/n…" o "footer/n…" en lo compartido
const nuevoId = (id) => `${esGlobal(id) ? `${id.split('/')[0]}/` : ''}n${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
const operacionesDe = (id) => {
  const grupo = grupoDe(id, true);
  return grupo._estructura || (grupo._estructura = []);
};

const moverElemento = (elemento, direccion) => {
  const padre = elemento.parentElement;
  if (!padre?.dataset.e) return toast('Este elemento no se puede mover.', { error: true });
  const hermanos = [...padre.children].filter((h) => h.dataset.e);
  const destino = hermanos[hermanos.indexOf(elemento) + (direccion === 'subir' ? -1 : 1)];
  if (!destino) return toast(direccion === 'subir' ? 'Ya está primero.' : 'Ya está último.');
  recordar();
  if (direccion === 'subir') destino.before(elemento); else destino.after(elemento);
  // Se guarda el orden completo de los hermanos (reemplaza el anterior del mismo bloque)
  const operaciones = operacionesDe(padre.dataset.e);
  const resto = operaciones.filter((op) => !(op.op === 'orden' && op.padre === padre.dataset.e));
  operaciones.splice(0, operaciones.length, ...resto,
    { op: 'orden', padre: padre.dataset.e, hijos: [...padre.children].filter((h) => h.dataset.e).map((h) => h.dataset.e) });
  cambio();
  elemento.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
};

const duplicarElemento = (elemento) => {
  const id = elemento.dataset.e;
  const nuevo = nuevoId(id);
  recordar();
  // La copia se lleva también los cambios de texto y estilo del original (y de lo que tiene adentro)
  const grupo = grupoDe(id, true);
  for (const [clave, edicion] of Object.entries(grupo)) {
    if (clave === id || clave.startsWith(`${id}.`)) grupo[nuevo + clave.slice(id.length)] = clonar(edicion);
  }
  operacionesDe(id).push({ op: 'duplicar', id, nuevo });
  cambio();
  recargarVista(nuevo);
  toast('Copia creada justo después. Cambiale el texto, el link o la imagen.');
};

const textoCorto = (elemento) => (elemento.textContent || elemento.getAttribute('alt') || NOMBRES[elemento.localName] || elemento.localName)
  .trim().replace(/\s+/g, ' ').slice(0, 50);

const eliminarElemento = (elemento) => {
  if (!confirm(`¿Eliminar "${textoCorto(elemento)}"? Se puede restaurar desde la pestaña Página.`)) return;
  recordar();
  operacionesDe(elemento.dataset.e).push({ op: 'eliminar', id: elemento.dataset.e, texto: textoCorto(elemento) });
  cambio();
  deseleccionar();
  elemento.remove();
  pintarPanelPagina();
};

const agregarElemento = async (referencia, tipo) => {
  const id = referencia.dataset.e;
  // Si lo de al lado es del mismo tipo, el nuevo toma su estilo (clase)
  const clase = (etiqueta) => (referencia.localName === etiqueta && referencia.className ? ` class="${esc(referencia.className)}"` : '');
  let html;
  if (tipo === 'h2' || tipo === 'h3' || tipo === 'p') {
    const texto = { h2: 'Nuevo título', h3: 'Nuevo subtítulo', p: 'Nuevo párrafo: escribí acá el texto.' }[tipo];
    html = `<${tipo}${clase(tipo)}>${texto}</${tipo}>`;
  } else if (tipo === 'boton') {
    html = '<a class="boton" href="~/src/views/demo.html">Nuevo botón</a>';
  } else if (tipo === 'imagen') {
    const archivo = await pedirArchivo('image/*');
    if (!archivo) return;
    try {
      const { ruta, medidas } = await subir(archivo, 'imagen');
      const tamano = medidas ? ` width="${medidas.ancho}" height="${medidas.alto}"` : '';
      html = `<img src="~/${ruta}" alt=""${tamano} loading="lazy" style="max-width: 100%; height: auto;">`;
    } catch (error) { toast(error.message, { error: true }); return; }
  }
  const nuevo = nuevoId(id);
  recordar();
  operacionesDe(id).push({ op: 'insertar', despues: id, nuevo, html });
  cambio();
  recargarVista(nuevo);
};

// Los links creados en el texto se guardan con "~/" (sirven desde cualquier página)
const guardarLinksRelativos = (html, base) => html.replace(/href="([^"]+)"/g, (_, href) => {
  const visible = aRutaVisible(href.replace(/&amp;/g, '&'), base);
  return `href="${esc(/^(https?:|mailto:|tel:|#)/i.test(visible) ? visible : `~/${visible}`)}"`;
});

/* ---------- Panel: PÁGINA ---------- */
const pintarPanelPagina = () => {
  const panel = $('#panel-pagina');
  const doc = documentoVista();
  const meta = estado.datos.ediciones.paginas[estado.pagina]?._meta || {};
  const tituloActual = doc?.title || '';
  const descripcionActual = doc?.querySelector('meta[name="description"]')?.content || '';
  const imagenes = doc ? $$('img[data-e]', doc) : [];
  const ocultos = doc ? $$('[data-oculto-editor]', doc) : [];
  const eliminados = operacionesEnVista().filter((op) => op.op === 'eliminar');
  const nombre = PAGINAS.find((p) => p.clave === estado.pagina)?.nombre || estado.pagina;

  panel.innerHTML = `
    <div class="grupo">
      <h3>${esc(nombre)} · Google y redes</h3>
      <label class="campo"><span>Título de la pestaña</span>
        <input id="meta-titulo" value="${esc(meta.titulo || tituloActual)}" maxlength="70">
        <small id="cuenta-titulo"></small>
      </label>
      <label class="campo"><span>Descripción</span>
        <textarea class="normal" id="meta-descripcion" rows="3" maxlength="200">${esc(meta.descripcion || descripcionActual)}</textarea>
        <small id="cuenta-descripcion"></small>
      </label>
    </div>
    <div class="grupo">
      <h3>Menú</h3>
      <p>Abrí un desplegable para editar sus opciones: cambiá textos y links, ordenalas con Subir y Bajar, sacá las que no quieras con Eliminar o sumá otra con Duplicar. Lo del menú se cambia en todas las páginas.</p>
      <div class="herramientas">
        <button type="button" data-abrir-menu="0">Abrir Soluciones</button>
        <button type="button" data-abrir-menu="1">Abrir Industrias</button>
        <button type="button" data-abrir-menu="movil" title="Usalo con la vista de celular (📱)">Abrir menú del celular</button>
      </div>
    </div>
    ${eliminados.length ? `<div class="grupo"><h3>Eliminados (${eliminados.length})</h3><div class="lista">${eliminados.map((op, i) => `
      <button type="button" class="item" data-restaurar="${i}"><span>↺ ${esc(op.texto || op.id)}<small>${esGlobal(op.id) ? 'Menú / footer · ' : ''}Restaurar</small></span></button>`).join('')}</div></div>` : ''}
    <div class="grupo">
      <h3>Fondo de la página</h3>
      <p>Color o imagen de fondo de toda la página.</p>
      <button type="button" class="btn" id="btn-sel-body">Editar fondo de la página</button>
    </div>
    <div class="grupo">
      <h3>Imágenes (${imagenes.length})</h3>
      <p>Incluye las decorativas que no se pueden tocar con el mouse.</p>
      <div class="lista">${imagenes.map((img, i) => `
        <button type="button" class="item" data-imagen="${i}">
          <img src="${esc(img.currentSrc || img.src)}" alt="">
          <span>${esc(img.alt || (img.getAttribute('src') || '').split('/').pop())}<small>${img.alt ? '' : 'decorativa'}</small></span>
        </button>`).join('')}
      </div>
    </div>
    ${ocultos.length ? `<div class="grupo"><h3>Ocultos (${ocultos.length})</h3><div class="lista">${ocultos.map((n, i) => `
      <button type="button" class="item" data-oculto="${i}"><span>${esc((n.textContent || n.getAttribute('alt') || n.localName).trim().slice(0, 50))}</span></button>`).join('')}</div></div>` : ''}`;

  const contar = (input, salida, min, max) => {
    const largo = input.value.length;
    salida.textContent = `${largo} caracteres (ideal: ${min} a ${max})`;
    salida.classList.toggle('is-mal', largo < min || largo > max);
  };
  const titulo = $('#meta-titulo', panel);
  const descripcion = $('#meta-descripcion', panel);
  contar(titulo, $('#cuenta-titulo', panel), 15, 60);
  contar(descripcion, $('#cuenta-descripcion', panel), 70, 160);
  const guardarMeta = () => {
    recordar('meta');
    const paginas = estado.datos.ediciones.paginas;
    const propias = paginas[estado.pagina] || (paginas[estado.pagina] = {});
    const nuevo = {};
    if (titulo.value.trim() && titulo.value.trim() !== tituloActual) nuevo.titulo = titulo.value.trim();
    if (descripcion.value.trim() && descripcion.value.trim() !== descripcionActual) nuevo.descripcion = descripcion.value.trim();
    if (meta.titulo && titulo.value.trim()) nuevo.titulo = titulo.value.trim();
    if (meta.descripcion && descripcion.value.trim()) nuevo.descripcion = descripcion.value.trim();
    if (Object.keys(nuevo).length) propias._meta = nuevo; else delete propias._meta;
    if (!Object.keys(propias).length) delete paginas[estado.pagina];
    cambio();
  };
  titulo.addEventListener('input', () => { contar(titulo, $('#cuenta-titulo', panel), 15, 60); guardarMeta(); });
  descripcion.addEventListener('input', () => { contar(descripcion, $('#cuenta-descripcion', panel), 70, 160); guardarMeta(); });

  $('#btn-sel-body', panel).addEventListener('click', () => doc && seleccionar(doc.body, { sinEditarTexto: true }));
  $$('[data-imagen]', panel).forEach((b) => b.addEventListener('click', () => {
    const img = imagenes[Number(b.dataset.imagen)];
    img.scrollIntoView({ block: 'center', behavior: 'smooth' });
    seleccionar(img);
  }));
  $$('[data-oculto]', panel).forEach((b) => b.addEventListener('click', () => {
    const nodo = ocultos[Number(b.dataset.oculto)];
    nodo.scrollIntoView({ block: 'center', behavior: 'smooth' });
    seleccionar(nodo, { sinEditarTexto: true });
  }));

  // Abrir desplegables del menú (o el menú del celular) dentro de la vista
  $$('[data-abrir-menu]', panel).forEach((b) => b.addEventListener('click', () => {
    if (!doc) return;
    const navbar = doc.querySelector('[data-navbar]');
    if (b.dataset.abrirMenu === 'movil') {
      navbar?.classList.toggle('menu-abierto');
      return;
    }
    const item = doc.querySelectorAll('[data-dropdown]')[Number(b.dataset.abrirMenu)];
    if (!item) return;
    const abrir = !item.classList.contains('is-open');
    doc.querySelectorAll('[data-dropdown]').forEach((otro) => otro.classList.remove('is-open'));
    item.classList.toggle('is-open', abrir);
    doc.defaultView.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  // Restaurar un elemento eliminado: se borra la operación y se recarga la vista
  $$('[data-restaurar]', panel).forEach((b) => b.addEventListener('click', () => {
    const op = eliminados[Number(b.dataset.restaurar)];
    recordar();
    const operaciones = operacionesDe(op.id);
    operaciones.splice(operaciones.indexOf(op), 1);
    cambio();
    recargarVista(op.id);
  }));
};

/* ---------- Valores originales de variables.css (para mostrarlos de referencia) ---------- */
let variablesBase = {};
const cargarVariablesBase = async () => {
  try {
    const css = await (await fetch(`${RAIZ_SITIO}src/styles/sitio-home.css`)).text();
    const bloque = css.split('===== variables.css =====')[1]?.match(/:root\s*{([\s\S]*?)}/)?.[1] || '';
    variablesBase = Object.fromEntries([...bloque.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, n, v]) => [n, v.trim()]));
  } catch { variablesBase = {}; }
};

/* ---------- Panel: DISEÑO (colores y tipografías de una temporada) ---------- */
const temporadaEditada = () => {
  const { temporadas } = estado.datos.temporadas;
  return temporadas.find((t) => t.id === estado.temporadaEditada) || temporadas.find((t) => t.id === estado.datos.temporadas.porDefecto) || temporadas[0];
};

const pintarPanelTema = () => {
  const panel = $('#panel-tema');
  const temporada = temporadaEditada();
  if (!temporada) { panel.innerHTML = '<div class="vacio-panel">Creá una temporada en la pestaña Temporadas.</div>'; return; }
  temporada.tema = temporada.tema || { variables: {} };
  const variables = temporada.tema.variables || (temporada.tema.variables = {});

  panel.innerHTML = `
    <div class="grupo">
      <label class="campo"><span>Diseño de la temporada</span>
        <select id="tema-temporada">${estado.datos.temporadas.temporadas.map((t) => `<option value="${esc(t.id)}" ${t.id === temporada.id ? 'selected' : ''}>${esc(t.nombre)}</option>`).join('')}</select>
      </label>
      <p>Lo que cambies acá se aplica en todo el sitio mientras esa temporada esté activa. Vacío = el color original.</p>
    </div>
    <div class="grupo" id="tema-fuentes">
      <h3>Tipografías</h3>
      <label class="campo"><span>Principal (títulos y textos)</span><select data-fuente="--fuente">${opcionesFuente(variables['--fuente'])}</select></label>
      <label class="campo"><span>Citas (cursiva)</span><select data-fuente="--fuente-cita">${opcionesFuente(variables['--fuente-cita'])}</select></label>
      <button type="button" class="btn" id="btn-subir-fuente">⬆️ Subir tipografía (.woff2)</button>
    </div>
    <div class="grupo" id="tema-colores">
      <h3>Colores</h3>
      ${COLORES.map(([nombre, etiqueta]) => campoColor(nombre, etiqueta, variables[nombre], variablesBase[nombre])).join('')}
    </div>
    <div class="grupo">
      <h3>Forma</h3>
      <label class="campo"><span>Redondeo de tarjetas (px)</span>
        <input type="number" min="0" max="80" id="tema-radio" value="${esc(parseFloat(variables['--radio-card']) || '')}" placeholder="${esc(parseFloat(variablesBase['--radio-card']) || 40)}">
      </label>
    </div>`;

  const ponerVariable = (nombre, valor) => {
    recordar(`tema-${nombre}`);
    if (valor) variables[nombre] = valor; else delete variables[nombre];
    cambio();
    aplicarEstilosEnVista();
  };
  $('#tema-temporada', panel).addEventListener('change', (evento) => {
    estado.temporadaEditada = evento.target.value;
    aplicarEstilosEnVista();
    pintarPanelTema();
  });
  $$('[data-fuente]', panel).forEach((select) => select.addEventListener('change', () => ponerVariable(select.dataset.fuente, select.value ? pilaDeFuente(select.value) : '')));
  conectarColores($('#tema-colores', panel), (nombre, valor) => { ponerVariable(nombre, valor); if (!valor) pintarPanelTema(); });
  $('#tema-radio', panel).addEventListener('input', (evento) => ponerVariable('--radio-card', evento.target.value ? `${evento.target.value}px` : ''));
  $('#btn-subir-fuente', panel).addEventListener('click', async () => {
    const archivo = await pedirArchivo('.woff2,.woff');
    if (!archivo) return;
    const nombre = prompt('¿Cómo se llama la tipografía? (así aparece en las listas)', archivo.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '));
    if (!nombre) return;
    try {
      const { ruta } = await subir(archivo, 'fuente');
      recordar();
      const limpio = nombre.replace(/["\\;{}<>]/g, '').trim();
      estado.datos.temporadas.fuentes = estado.datos.temporadas.fuentes.filter((f) => f.nombre !== limpio).concat({ nombre: limpio, ruta: `~/${ruta}` });
      cambio();
      aplicarEstilosEnVista();
      pintarPanelTema();
    } catch (error) { toast(error.message, { error: true }); }
  });
};

/* ---------- Panel: TEMPORADAS (fechas y banner de bienvenida) ---------- */
const hoy = () => new Date().toISOString().slice(0, 10);
const temporadaVigente = () => {
  const t = estado.datos.temporadas;
  if (t.activa && t.activa !== 'auto') return t.activa;
  const dia = hoy();
  const encontrada = t.temporadas.find((x) => (x.desde || x.hasta) && (!x.desde || x.desde <= dia) && (!x.hasta || dia <= x.hasta));
  return encontrada?.id || t.porDefecto;
};

const pintarPanelTemporadas = () => {
  const panel = $('#panel-temporadas');
  const datos = estado.datos.temporadas;
  const temporada = temporadaEditada();
  const vigente = temporadaVigente();
  const banner = temporada?.banner || {};

  panel.innerHTML = `
    <div class="grupo">
      <h3>Temporada activa</h3>
      <label class="campo"><select id="temp-activa">
        <option value="auto" ${datos.activa === 'auto' ? 'selected' : ''}>Automática según las fechas</option>
        ${datos.temporadas.map((t) => `<option value="${esc(t.id)}" ${datos.activa === t.id ? 'selected' : ''}>Siempre: ${esc(t.nombre)}</option>`).join('')}
      </select></label>
      <div class="lista">${datos.temporadas.map((t) => `
        <button type="button" class="item ${t.id === temporada?.id ? 'is-activo' : ''}" data-temporada="${esc(t.id)}">
          <span>${esc(t.nombre)} ${t.id === vigente ? '<span class="insignia">activa hoy</span>' : ''}
          <small>${t.desde || t.hasta ? `${t.desde || '…'} → ${t.hasta || '…'}` : 'Sin fechas'}${t.id === datos.porDefecto ? ' · por defecto' : ''}${t.banner?.activo ? ' · con banner' : ''}</small></span>
        </button>`).join('')}
      </div>
      <button type="button" class="btn" id="btn-nueva-temporada">＋ Nueva temporada</button>
    </div>

    ${temporada ? `
    <div class="grupo">
      <h3>Datos de la temporada</h3>
      <label class="campo"><span>Nombre</span><input id="temp-nombre" value="${esc(temporada.nombre)}"></label>
      <div class="fila">
        <label class="campo"><span>Desde</span><input type="date" id="temp-desde" value="${esc(temporada.desde || '')}"></label>
        <label class="campo"><span>Hasta</span><input type="date" id="temp-hasta" value="${esc(temporada.hasta || '')}"></label>
      </div>
      <p>Fuera de las fechas de todas las temporadas se usa la temporada por defecto.</p>
      <label class="check"><input type="radio" name="temp-defecto" id="temp-defecto" ${temporada.id === datos.porDefecto ? 'checked' : ''}> Temporada por defecto</label>
      <div class="fila">
        <button type="button" class="btn" id="btn-ir-diseno">🎨 Colores y tipografías</button>
        ${datos.temporadas.length > 1 && temporada.id !== datos.porDefecto ? '<button type="button" class="btn btn--peligro fijo" id="btn-borrar-temporada">Borrar</button>' : ''}
      </div>
    </div>

    <div class="grupo" id="grupo-banner">
      <h3>Banner al entrar</h3>
      <label class="check"><input type="checkbox" data-banner="activo" ${banner.activo ? 'checked' : ''}> Mostrar banner en esta temporada</label>
      <p>📣 El banner aparece en la web <strong>después de tocar Publicar</strong> (y 1 o 2 minutos de Vercel). Se muestra según "Mostrar": si ya lo viste en esta visita no vuelve a salir. Para verlo igual: <a href="${esc(RAIZ_SITIO)}index.html?banner=ver" target="_blank" rel="noopener">abrir la web con el banner ↗</a>.</p>
      <label class="campo"><span>Título</span><input data-banner="titulo" value="${esc(banner.titulo || '')}"></label>
      <label class="campo"><span>Texto</span><textarea class="normal" data-banner="texto" rows="3">${esc(banner.texto || '')}</textarea></label>
      <div class="campo"><span>Imagen</span>
        ${banner.imagen ? `<img class="vista-imagen" src="${esc(resolverVista(banner.imagen))}" alt="">` : ''}
        <div class="fila">
          <button type="button" class="btn" id="btn-banner-imagen">${banner.imagen ? 'Cambiar' : 'Elegir'} imagen</button>
          ${banner.imagen ? '<button type="button" class="btn btn--peligro fijo" id="btn-banner-sin-imagen">Quitar</button>' : ''}
        </div>
      </div>
      <label class="campo"><span>Descripción de la imagen</span><input data-banner="imagenAlt" value="${esc(banner.imagenAlt || '')}"></label>
      <div class="fila">
        <label class="campo"><span>Texto del botón</span><input data-banner="botonTexto" value="${esc(banner.botonTexto || '')}"></label>
        <label class="campo"><span>Lleva a</span><select data-banner="botonLink">
          <option value="">(sin botón)</option>
          ${PAGINAS.map((p) => { const v = `~/${p.clave}.html`; return `<option value="${esc(v)}" ${banner.botonLink === v ? 'selected' : ''}>${esc(p.nombre)}</option>`; }).join('')}
          ${banner.botonLink && !banner.botonLink.startsWith('~/') ? `<option value="${esc(banner.botonLink)}" selected>${esc(banner.botonLink)}</option>` : ''}
          <option value="__otro">Otra dirección…</option>
        </select></label>
      </div>
      ${campoColor('colorFondo', 'Fondo', banner.colorFondo, '#ffffff')}
      ${campoColor('colorTexto', 'Letra', banner.colorTexto, '#1b1b1b')}
      ${campoColor('colorBoton', 'Botón', banner.colorBoton, '#c9373d')}
      <div class="fila">
        <label class="campo"><span>Mostrar</span><select data-banner="frecuencia">
          ${[['sesion', 'Una vez por visita'], ['dia', 'Una vez por día'], ['una-vez', 'Una sola vez'], ['siempre', 'Siempre']].map(([v, n]) => `<option value="${v}" ${(banner.frecuencia || 'sesion') === v ? 'selected' : ''}>${n}</option>`).join('')}
        </select></label>
        <label class="campo"><span>En</span><select data-banner="paginas">
          <option value="todas" ${banner.paginas !== 'home' ? 'selected' : ''}>Todas las páginas</option>
          <option value="home" ${banner.paginas === 'home' ? 'selected' : ''}>Solo la Home</option>
        </select></label>
      </div>
      <label class="campo"><span>Aparece después de (segundos)</span><input type="number" min="0" max="30" data-banner="retraso" value="${esc(banner.retraso ?? 1)}"></label>
      <button type="button" class="btn btn--bloque" id="btn-ver-banner">👁️ Ver cómo queda</button>
    </div>` : ''}`;

  /* --- Eventos --- */
  $('#temp-activa', panel).addEventListener('change', (evento) => { recordar(); datos.activa = evento.target.value; cambio(); pintarPanelTemporadas(); });
  $$('[data-temporada]', panel).forEach((b) => b.addEventListener('click', () => {
    estado.temporadaEditada = b.dataset.temporada;
    aplicarEstilosEnVista();
    pintarPanelTemporadas();
    pintarPanelTema();
  }));
  $('#btn-nueva-temporada', panel).addEventListener('click', () => {
    const nombre = prompt('Nombre de la temporada (ej.: Navidad 2026, Verano 2027)');
    if (!nombre) return;
    recordar();
    let id = nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'temporada';
    while (datos.temporadas.some((t) => t.id === id)) id += '-2';
    const base = temporadaEditada();
    datos.temporadas.push({
      id, nombre, desde: '', hasta: '',
      tema: clonar(base?.tema || { variables: {} }),
      banner: { ...clonar(base?.banner || {}), activo: false },
    });
    estado.temporadaEditada = id;
    cambio();
    pintarPanelTemporadas();
    pintarPanelTema();
  });
  if (!temporada) return;

  const campoTemporada = (selector, clave) => $(selector, panel).addEventListener('change', (evento) => {
    recordar();
    temporada[clave] = evento.target.value;
    cambio();
    pintarPanelTemporadas();
    pintarPanelTema();
  });
  campoTemporada('#temp-nombre', 'nombre');
  campoTemporada('#temp-desde', 'desde');
  campoTemporada('#temp-hasta', 'hasta');
  $('#temp-defecto', panel).addEventListener('change', () => { recordar(); datos.porDefecto = temporada.id; cambio(); pintarPanelTemporadas(); });
  $('#btn-ir-diseno', panel).addEventListener('click', () => mostrarPestana('tema'));
  $('#btn-borrar-temporada', panel)?.addEventListener('click', () => {
    if (!confirm(`¿Borrar la temporada "${temporada.nombre}"?`)) return;
    recordar();
    datos.temporadas = datos.temporadas.filter((t) => t !== temporada);
    if (datos.activa === temporada.id) datos.activa = 'auto';
    estado.temporadaEditada = datos.porDefecto;
    cambio();
    aplicarEstilosEnVista();
    pintarPaneles();
  });

  // Banner
  const ponerBanner = (clave, valor) => {
    recordar(`banner-${clave}`);
    temporada.banner = temporada.banner || {};
    temporada.banner[clave] = valor;
    cambio();
  };
  $$('[data-banner]', panel).forEach((campo) => campo.addEventListener(campo.type === 'checkbox' || campo.tagName === 'SELECT' ? 'change' : 'input', () => {
    let valor = campo.type === 'checkbox' ? campo.checked : campo.value;
    if (campo.dataset.banner === 'retraso') valor = Number(valor) || 0;
    if (campo.dataset.banner === 'botonLink' && valor === '__otro') {
      const otro = prompt('Dirección (https://… o src/views/demo.html)');
      valor = otro ? aRutaGuardada(otro) : '';
      ponerBanner('botonLink', valor);
      pintarPanelTemporadas();
      return;
    }
    ponerBanner(campo.dataset.banner, valor);
    if (campo.dataset.banner === 'activo') {
      pintarPanelTemporadas();
      // Al activarlo se muestra enseguida en la vista, para ver cómo queda
      if (valor) $('#btn-ver-banner')?.click();
      toast(valor ? 'Banner activado. Tocá Publicar para que aparezca en la web.' : 'Banner desactivado. Tocá Publicar para sacarlo de la web.', { duracion: 5000 });
    }
  }));
  conectarColores($('#grupo-banner', panel), (clave, valor) => ponerBanner(clave, valor));
  $('#btn-banner-imagen', panel).addEventListener('click', async () => {
    const archivo = await pedirArchivo('image/*');
    if (!archivo) return;
    try {
      const { ruta } = await subir(archivo, 'imagen');
      ponerBanner('imagen', `~/${ruta}`);
      pintarPanelTemporadas();
    } catch (error) { toast(error.message, { error: true }); }
  });
  $('#btn-banner-sin-imagen', panel)?.addEventListener('click', () => { ponerBanner('imagen', ''); pintarPanelTemporadas(); });
  $('#btn-ver-banner', panel).addEventListener('click', () => {
    const ventana = vista.contentWindow;
    if (!ventana?.mostrarBannerTemporada) return toast('Esperá a que cargue la página.', { error: true });
    ventana.mostrarBannerTemporada({ ...banner, imagen: resolverVista(banner.imagen), botonLink: resolverVista(banner.botonLink) });
  });
};

/* =========================================================
   BARRA SUPERIOR: página, modo, dispositivo y publicar
   ========================================================= */
$('#selector-pagina').innerHTML = PAGINAS.map((p) => `<option value="${esc(p.clave)}">${esc(p.nombre)}</option>`).join('');
$('#selector-pagina').addEventListener('change', (evento) => irAPagina(evento.target.value));

$$('[data-modo]').forEach((boton) => boton.addEventListener('click', () => {
  estado.modo = boton.dataset.modo;
  $$('[data-modo]').forEach((b) => b.classList.toggle('is-activo', b === boton));
  const doc = documentoVista();
  doc?.documentElement.classList.toggle('editor-editar', estado.modo === 'editar');
  if (estado.modo === 'navegar') deseleccionar();
}));

$$('[data-ancho]').forEach((boton) => boton.addEventListener('click', () => {
  estado.ancho = Number(boton.dataset.ancho);
  $$('[data-ancho]').forEach((b) => b.classList.toggle('is-activo', b === boton));
  ajustarEscala();
  pintarPanelElemento();
}));

$('#btn-publicar').addEventListener('click', async () => {
  const mensaje = prompt('¿Qué cambiaste? (queda en el historial; podés dejarlo vacío)', '');
  if (mensaje === null) return;
  const boton = $('#btn-publicar');
  boton.disabled = true;
  toast('Publicando…', { duracion: 30000 });
  try {
    await api('guardar', { metodo: 'POST', cuerpo: { ...estado.datos, subidas: estado.subidas, mensaje } });
    estado.publicado = JSON.stringify(estado.datos);
    estado.subidas = [];
    guardarBorrador();
    toast(estado.modoAlmacen === 'github'
      ? '✅ Publicado. El sitio se actualiza en 1 o 2 minutos (Vercel lo está armando).'
      : '✅ Guardado en los archivos del proyecto. Eleventy ya está rearmando el sitio.', { duracion: 7000 });
  } catch (error) {
    toast(`No se pudo publicar: ${error.message}`, { error: true, duracion: 9000 });
  } finally {
    actualizarBarra();
  }
});

window.addEventListener('beforeunload', (evento) => {
  if (estado.datos && hayCambios()) evento.preventDefault();
});

/* =========================================================
   ARRANQUE
   ========================================================= */
const iniciarEditor = async () => {
  $('#ingreso').hidden = true;
  $('#app').hidden = false;
  ajustarEscala();

  let servidor;
  const aviso = $('#aviso');
  try {
    servidor = await api('datos');
    aviso.hidden = true;
  } catch (error) {
    if (error.estado === 401) return;
    // Sin GitHub configurado: se puede mirar y editar, pero no publicar
    aviso.hidden = false;
    aviso.textContent = `⚠️ ${error.message}`;
    servidor = { ediciones: {}, temporadas: {} };
  }
  estado.modoAlmacen = servidor.modo || 'local';
  const limpio = datosNormalizados(servidor);
  estado.publicado = JSON.stringify(limpio);
  estado.datos = limpio;

  // ¿Quedó un borrador sin publicar en este navegador?
  const borrador = leerBorrador();
  if (borrador && JSON.stringify(borrador.datos) !== estado.publicado) {
    const cambioServidor = borrador.base !== estado.publicado;
    const pregunta = cambioServidor
      ? 'Hay cambios sin publicar guardados en este navegador, pero alguien publicó después. ¿Recuperarlos igual? (pisan lo publicado)'
      : 'Hay cambios sin publicar guardados en este navegador. ¿Recuperarlos?';
    if (confirm(pregunta)) {
      estado.datos = datosNormalizados(borrador.datos);
      estado.subidas = borrador.subidas || [];
    } else {
      try { localStorage.removeItem(CLAVE_BORRADOR); } catch { /* nada */ }
    }
  }

  estado.temporadaEditada = temporadaVigente();
  await cargarVariablesBase();
  actualizarBarra();
  irAPagina(estado.pagina);
};

(async () => {
  try {
    const sesion = await api('sesion');
    if (sesion.conectado) await iniciarEditor(); else mostrarIngreso();
  } catch {
    mostrarIngreso();
    $('#ingreso-error').textContent = 'No se pudo conectar con el servidor del panel (/api). En la compu usá "npm run admin".';
  }
})();
