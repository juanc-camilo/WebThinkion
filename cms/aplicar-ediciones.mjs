/* =========================================================
   APLICAR EDICIONES — lo usa Eleventy al armar cada página.
   Toma lo que se cambió desde el panel /admin y lo escribe en el
   HTML final (no se agrega en el navegador: Google ve el texto real).

   Qué hace, en orden:
   1) Numera cada elemento del <body> con data-e="…". Ese número es la
      "dirección" que usa el panel para saber qué elemento se editó.
      Se calcula sobre el HTML original, antes de aplicar cambios, así
      las direcciones no se corren al editar.
      - Menú y footer (compartidos) llevan data-ambito y se numeran
        aparte: "menu/0.1", "footer/2.0". Un cambio ahí vale para todas
        las páginas.
   2) Aplica la estructura (elementos movidos, duplicados, eliminados o
      agregados: ver aplicarEstructura en compartido.mjs) y después las
      ediciones guardadas en contenido/ediciones.json:
      texto (html), atributos (href, src, alt…) y ocultar. Los estilos
      (colores, fondos, letra) se escriben como reglas CSS en el <head>.
   3) Cambia título y descripción si se editaron desde el panel.
   4) Agrega los estilos de las temporadas (colores y tipografías),
      las tipografías que hagan falta y los datos del banner.

   Rutas: en los datos, "~/" significa "raíz del sitio". Acá se
   reemplaza por el camino relativo de cada página ("" o "../../").
   ========================================================= */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { nombreDeFuente, cssDeEdiciones, cssTemporada, urlGoogleFonts, aplicarEstructura } from './compartido.mjs';

/* ---------- Lectura de los datos del panel ---------- */
const leerJSON = (ruta, porDefecto) => {
  if (!existsSync(ruta)) return porDefecto;
  try { return JSON.parse(readFileSync(ruta, 'utf8')); }
  catch (error) {
    console.warn(`[admin] No se pudo leer ${ruta}: ${error.message}`);
    return porDefecto;
  }
};

export const leerContenido = () => ({
  ediciones: leerJSON('contenido/ediciones.json', { global: {}, paginas: {} }),
  temporadas: leerJSON('contenido/temporadas.json', { activa: 'auto', porDefecto: '', temporadas: [], fuentes: [] }),
});

/* ---------- Rutas "~/" → relativas a la página ---------- */
const resolverRuta = (valor, raiz) => typeof valor === 'string' && valor.startsWith('~/')
  ? raiz + valor.slice(2)
  : valor;

/* ---------- Limpieza del HTML que llega del panel ----------
   El panel lo usa solo el administrador, pero igual se sacan scripts,
   eventos (onclick…) y links "javascript:" por seguridad. */
const PROHIBIDOS = 'script, iframe, object, embed, style, link, meta, base, form';
const limpiarNodo = (raiz) => {
  raiz.querySelectorAll(PROHIBIDOS).forEach((nodo) => nodo.remove());
  raiz.querySelectorAll('*').forEach((nodo) => {
    for (const { name, value } of [...nodo.attributes]) {
      const peligroso = /^on/i.test(name) || /^\s*javascript:/i.test(value);
      if (peligroso || name === 'data-e' || name === 'contenteditable') nodo.removeAttribute(name);
    }
  });
};

const atributoSeguro = (nombre, valor) => !/^on/i.test(nombre) && !/^\s*javascript:/i.test(String(valor));

/* ---------- 1) Numerar elementos ---------- */
const SALTEAR = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'NOSCRIPT']);
// Dentro de un <svg> solo se numeran los textos (ej.: etiquetas curvas del diagrama)
const SVG_EDITABLE = new Set(['text', 'textpath', 'tspan']);

const numerar = (body) => {
  const recorrer = (nodo, ambito, camino, dentroDeSvg) => {
    [...nodo.children].forEach((hijo, indice) => {
      if (SALTEAR.has(hijo.tagName)) return;
      const nombre = hijo.localName.toLowerCase();
      const svg = dentroDeSvg || nombre === 'svg';
      const ambitoPropio = hijo.getAttribute('data-ambito');
      let id;
      let nuevoAmbito = ambito;
      let nuevoCamino = [...camino, indice];
      if (ambitoPropio) {
        nuevoAmbito = ambitoPropio;
        nuevoCamino = [];
        id = ambitoPropio;
      } else {
        const rel = nuevoCamino.join('.');
        id = nuevoAmbito ? `${nuevoAmbito}/${rel}` : rel;
      }
      if (!svg || SVG_EDITABLE.has(nombre) || nombre === 'svg') hijo.setAttribute('data-e', id);
      recorrer(hijo, nuevoAmbito, nuevoCamino, svg);
    });
  };
  body.setAttribute('data-e', 'body');
  recorrer(body, '', [], false);
};

/* ---------- 2) Aplicar una edición a un elemento ---------- */
const aplicarEdicion = (elemento, edicion, raiz, document) => {
  // Si la estructura del HTML cambió y la dirección ya no es la misma etiqueta, no se toca
  if (edicion.etiqueta && edicion.etiqueta !== elemento.localName.toLowerCase()) {
    console.warn(`[admin] Edición salteada en ${elemento.getAttribute('data-e')}: se esperaba <${edicion.etiqueta}> y hay <${elemento.localName}>`);
    return;
  }

  if (typeof edicion.html === 'string') {
    const molde = document.createElement('div');
    molde.innerHTML = edicion.html;
    limpiarNodo(molde);
    elemento.innerHTML = molde.innerHTML.replace(/(href|src)="~\//g,`$1="${raiz}`);
  }

  for (const [nombre, valor] of Object.entries(edicion.atributos || {})) {
    if (!atributoSeguro(nombre, valor)) continue;
    if (valor === null || valor === false) elemento.removeAttribute(nombre);
    else elemento.setAttribute(nombre, resolverRuta(String(valor), raiz));
    // Imagen nueva: el srcset viejo apuntaría a la imagen anterior
    if (nombre === 'src') { elemento.removeAttribute('srcset'); elemento.removeAttribute('sizes'); }
  }

  if (edicion.oculto) elemento.setAttribute('data-oculto', '');
};

/* ---------- 4) Estilos de temporadas, tipografías y banner ---------- */
// Junta todas las tipografías que se usan (temporadas + estilos de elementos)
const fuentesUsadas = (ediciones, temporadas) => {
  const nombres = new Set();
  for (const temporada of temporadas.temporadas || []) {
    for (const [nombre, valor] of Object.entries(temporada.tema?.variables || {})) {
      if (nombre.startsWith('--fuente')) nombres.add(nombreDeFuente(valor));
    }
  }
  const revisar = (grupo) => Object.values(grupo || {}).forEach((edicion) => {
    for (const estilo of [edicion?.estilo, edicion?.estiloMovil]) {
      if (estilo?.['font-family']) nombres.add(nombreDeFuente(estilo['font-family']));
    }
  });
  revisar(ediciones.global);
  Object.values(ediciones.paginas || {}).forEach(revisar);
  return nombres;
};

const bloqueTemporadas = (ediciones, temporadas, raiz, cssPagina) => {
  const lista = temporadas.temporadas || [];
  const usadas = fuentesUsadas(ediciones, temporadas);

  // Tipografías de Google que efectivamente se usan
  const google = urlGoogleFonts(usadas);
  const linkGoogle = google
    ? `
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${google.replace(/&/g, '&amp;')}">`
    : '';

  // Tipografías subidas desde el panel (public/fonts/subidas)
  const subidas = (temporadas.fuentes || [])
    .filter((fuente) => usadas.has(fuente.nombre))
    .map((fuente) => `@font-face { font-family: "${fuente.nombre}"; font-display: swap; src: url("${resolverRuta(fuente.ruta, raiz)}") format("woff2"); }`)
    .join('\n');

  // Colores y tipografías de cada temporada. La temporada por defecto
  // también se aplica si el navegador no tiene JavaScript.
  const reglas = lista.map((temporada) => {
    const css = cssTemporada(temporada);
    if (!css) return '';
    const selector = temporada.id === temporadas.porDefecto
      ? `html:not([data-temporada]), html[data-temporada="${temporada.id}"]`
      : `html[data-temporada="${temporada.id}"]`;
    return `${selector} { ${css} }`;
  }).filter(Boolean).join('\n');

  // Datos mínimos para elegir la temporada y mostrar el banner
  const datos = {
    activa: temporadas.activa || 'auto',
    porDefecto: temporadas.porDefecto || '',
    temporadas: lista.map(({ id, desde, hasta, banner }) => ({
      id, desde: desde || '', hasta: hasta || '',
      banner: banner?.activo ? {
        ...banner,
        imagen: resolverRuta(banner.imagen, raiz),
        botonLink: resolverRuta(banner.botonLink, raiz),
      } : null,
    })),
  };
  const json = JSON.stringify(datos).replace(/</g, '\\u003c');

  return `
  <!-- ===== PANEL ADMIN: temporadas, tipografías y elementos ocultos (lo arma Eleventy) ===== -->${linkGoogle}
  <style id="estilos-admin">
[data-oculto] { display: none !important; }
${subidas}
${reglas}
${cssPagina}
  </style>
  <script id="temporadas-datos" type="application/json">${json}</script>
  <script>
    /* Elige la temporada: la forzada desde el panel o la que corresponde por fecha */
    (function () {
      try {
        var d = JSON.parse(document.getElementById('temporadas-datos').textContent);
        var hoy = new Date(); hoy = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2);
        var id = d.porDefecto;
        if (d.activa && d.activa !== 'auto') id = d.activa;
        else d.temporadas.some(function (t) {
          if (!t.desde && !t.hasta) return false;
          if ((!t.desde || t.desde <= hoy) && (!t.hasta || hoy <= t.hasta)) { id = t.id; return true; }
        });
        if (id) document.documentElement.setAttribute('data-temporada', id);
      } catch (e) {}
    })();
  </script>
`;
};

/* ---------- Punto de entrada: transforma el HTML de una página ---------- */
export const aplicarEdiciones = (html, { clavePagina, raiz, salida }) => {
  if (!html.includes('<body')) return html;
  const { ediciones, temporadas } = leerContenido();
  const { document } = parseHTML(html);
  const body = document.body;

  numerar(body);

  // Copia SIN cambios (solo numerada) para el editor: check.html → check.editor.html.
  // El panel parte siempre de esta versión y le aplica lo último, así no
  // duplica nada ni muestra cambios viejos. No se indexa.
  if (salida) {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'robots');
    meta.setAttribute('content', 'noindex, nofollow');
    document.head.append(meta);
    // En un armado de cero (como en Vercel) la carpeta todavía no existe: Eleventy la crea después
    const copia = salida.replace(/\.html$/, '.editor.html');
    mkdirSync(path.dirname(copia), { recursive: true });
    writeFileSync(copia, corregirSvg(document.toString()));
    meta.remove();
  }

  const propias = ediciones.paginas?.[clavePagina] || {};

  // Elementos movidos, duplicados, eliminados o agregados (primero menú/footer, después la página)
  const prepararHtml = (texto) => {
    const molde = document.createElement('div');
    molde.innerHTML = texto;
    limpiarNodo(molde);
    return molde.innerHTML.replace(/(href|src)="~\//g, `$1="${raiz}`);
  };
  aplicarEstructura(body, [...(ediciones.global?._estructura || []), ...(propias._estructura || [])], prepararHtml);

  const todas = { ...ediciones.global, ...propias };
  const cssPagina = cssDeEdiciones(todas, raiz);
  for (const [id, edicion] of Object.entries(todas)) {
    if (id.startsWith('_') || !edicion) continue; // _meta y _estructura no son elementos
    const elemento = body.getAttribute('data-e') === id ? body : body.querySelector(`[data-e="${CSS_escape(id)}"]`);
    if (elemento) aplicarEdicion(elemento, edicion, raiz, document);
  }

  // Título y descripción (pestaña, Google y al compartir)
  const meta = propias._meta || {};
  if (meta.titulo) {
    document.title = meta.titulo;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.titulo);
  }
  if (meta.descripcion) {
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.descripcion);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.descripcion);
  }

  let resultado = document.toString();
  resultado = resultado.replace('</head>', `${bloqueTemporadas(ediciones, temporadas, raiz, cssPagina)}</head>`);

  return corregirSvg(resultado);
};

// El parser escribe en minúscula algunas etiquetas y atributos de SVG; se devuelven a su forma original
const corregirSvg = (html) => html
  .replace(/<(\/?)textpath\b/g, '<$1textPath')
  .replace(/\sviewbox=/g, ' viewBox=')
  .replace(/\sstartoffset=/g, ' startOffset=');

// Las direcciones solo tienen números, puntos, barras y letras: alcanza con escapar comillas
const CSS_escape = (texto) => String(texto).replace(/["\\]/g, '\\$&');
