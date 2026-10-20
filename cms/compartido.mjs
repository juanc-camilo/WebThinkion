/* =========================================================
   COMPARTIDO — lo usan el armado del sitio (cms/aplicar-ediciones.mjs)
   y el panel de administración (se copia a _site/admin/compartido.mjs).
   Solo JavaScript estándar: corre igual en Node y en el navegador.

   CATÁLOGO DE TIPOGRAFÍAS
   - "locales": alojadas en public/fonts (no piden nada a Google).
   - "google": se cargan desde Google Fonts solo si alguna página
     o temporada las usa.
   - Las fuentes que sube el administrador (.woff2) se guardan en
     contenido/temporadas.json → "fuentes".
   Para sumar una tipografía de Google, agregá el nombre exacto a la lista.
   ========================================================= */
export const FUENTES_LOCALES = ['Outfit', 'Instrument Serif'];

export const FUENTES_GOOGLE = [
  'Inter', 'Poppins', 'Montserrat', 'Roboto', 'Open Sans', 'Lato', 'Nunito',
  'Raleway', 'DM Sans', 'Manrope', 'Plus Jakarta Sans', 'Space Grotesk',
  'Work Sans', 'Rubik', 'Oswald', 'Bebas Neue', 'Playfair Display',
  'Merriweather', 'Lora', 'DM Serif Display', 'Libre Baskerville',
  'Pacifico', 'Dancing Script', 'Caveat',
];

/* Tipografías con serif: llevan Georgia de respaldo; el resto, system-ui */
const CON_SERIF = ['Instrument Serif', 'Playfair Display', 'Merriweather', 'Lora',
  'DM Serif Display', 'Libre Baskerville'];

/* Arma el valor CSS completo a partir del nombre: "Poppins" → "Poppins", system-ui, sans-serif */
export const pilaDeFuente = (nombre) => CON_SERIF.includes(nombre)
  ? `"${nombre}", Georgia, serif`
  : `"${nombre}", system-ui, sans-serif`;

/* Primer nombre de una pila CSS: '"Poppins", system-ui' → 'Poppins' */
export const nombreDeFuente = (pila = '') => pila.split(',')[0].trim().replace(/^["']|["']$/g, '');

/* ---------- Rutas "~/" dentro de CSS: url(~/public/…) → url(../../public/…) ---------- */
export const resolverEnCSS = (valor, raiz) => String(valor)
  .replace(/url\(\s*(["']?)~\//g, (_, comilla) => `url(${comilla}${raiz}`);

/* ---------- Estilos editados → reglas CSS ----------
   Los estilos del panel no van en línea: se escriben como reglas
   [data-e="…"] { … !important } en el <head>. Así se puede tener un
   valor para escritorio ("estilo") y otro para celular ("estiloMovil",
   hasta 760 px, el mismo corte que usa responsive.css). */
export const CORTE_MOVIL = 760;
const valorSeguro = (valor) => !/[;{}<>]/.test(String(valor)) && !/expression\(|javascript:/i.test(String(valor));
const propSegura = (prop) => /^-{0,2}[a-z][a-z0-9-]*$/i.test(prop);

const declaraciones = (estilo = {}, raiz) => Object.entries(estilo)
  .filter(([prop, valor]) => valor !== '' && valor != null && propSegura(prop) && valorSeguro(valor))
  .map(([prop, valor]) => `${prop}: ${resolverEnCSS(valor, raiz)} !important;`)
  .join(' ');

export const cssDeEdiciones = (ediciones, raiz) => {
  const escritorio = [];
  const movil = [];
  for (const [id, edicion] of Object.entries(ediciones)) {
    if (id.startsWith('_') || !edicion ||!/^[\w./-]+$/.test(id)) continue;
    const selector = `[data-e="${id}"]`;
    const base = declaraciones(edicion.estilo, raiz);
    const chico = declaraciones(edicion.estiloMovil, raiz);
    if (base) escritorio.push(`${selector} { ${base} }`);
    if (chico) movil.push(`${selector} { ${chico} }`);
  }
  return escritorio.join('\n')
    + (movil.length ? `\n@media (max-width: ${CORTE_MOVIL}px) {\n${movil.join('\n')}\n}` : '');
};

/* ---------- Variables de color y tipografía de una temporada ---------- */
export const cssTemporada = (temporada) => {
  const variables = { ...(temporada.tema?.variables || {}) };
  return Object.entries(variables)
    .filter(([nombre, valor]) => /^--[\w-]+$/.test(nombre) && valor && valorSeguro(valor))
    .map(([nombre, valor]) => `${nombre}: ${valor};`)
    .join(' ');
};

/* ---------- Link de Google Fonts para las tipografías que se usan ---------- */
export const urlGoogleFonts = (nombres) => {
  const google = [...nombres].filter((nombre) => FUENTES_GOOGLE.includes(nombre));
  if (!google.length) return '';
  return `https://fonts.googleapis.com/css2?${google
    .map((nombre) => `family=${nombre.replace(/ /g, '+')}:wght@400;500;600;700`).join('&')}&display=swap`;
};

/* =========================================================
   ESTRUCTURA — mover, duplicar, eliminar y agregar elementos.
   Se guarda como una lista de operaciones en "_estructura" (por página,
   o en "global" para el menú y el footer). Se aplican en orden, después
   de numerar y ANTES de las ediciones de texto y estilo:
     { op: 'eliminar', id }
     { op: 'duplicar', id, nuevo }            copia queda justo después
     { op: 'insertar', despues, nuevo, html } elemento nuevo después de "despues"
     { op: 'orden', padre, hijos: [ids] }     orden de los hijos de "padre"
   Los elementos nuevos llevan direcciones propias ("n…", o "menu/n…"),
   así no se corren las del HTML original.
   Funciona igual en Node (linkedom) y en el navegador.
   ========================================================= */
const buscarId = (raiz, id) => (raiz.getAttribute?.('data-e') === id
  ? raiz
  : raiz.querySelector(`[data-e="${String(id).replace(/["\\]/g, '\\$&')}"]`));

// Cambia el prefijo de las direcciones de una copia: "3.1" → "n7", "3.1.0" → "n7.0"
const renumerarCopia = (nodo, viejo, nuevo) => {
  for (const elemento of [nodo, ...nodo.querySelectorAll('[data-e]')]) {
    const id = elemento.getAttribute('data-e');
    if (id === viejo) elemento.setAttribute('data-e', nuevo);
    else if (id?.startsWith(`${viejo}.`)) elemento.setAttribute('data-e', nuevo + id.slice(viejo.length));
  }
};

// Numera un elemento nuevo y sus hijos: "n7", "n7.0", "n7.0.1"…
const numerarNuevo = (nodo, id) => {
  nodo.setAttribute('data-e', id);
  [...nodo.children].forEach((hijo, i) => numerarNuevo(hijo, `${id}.${i}`));
};

export const aplicarEstructura = (raiz, operaciones = [], prepararHtml = (html) => html) => {
  const documento = raiz.ownerDocument;
  for (const op of operaciones) {
    if (!op || typeof op !== 'object') continue;
    if (op.op === 'eliminar') {
      buscarId(raiz, op.id)?.remove();
    } else if (op.op === 'duplicar') {
      const origen = buscarId(raiz, op.id);
      if (!origen || !op.nuevo || origen === raiz) continue;
      const copia = origen.cloneNode(true);
      renumerarCopia(copia, op.id, op.nuevo);
      origen.after(copia);
    } else if (op.op === 'insertar') {
      const referencia = buscarId(raiz, op.despues);
      if (!referencia || !op.nuevo || referencia === raiz) continue;
      const molde = documento.createElement('div');
      molde.innerHTML = prepararHtml(String(op.html || ''));
      const nuevo = molde.firstElementChild;
      if (!nuevo) continue;
      numerarNuevo(nuevo, op.nuevo);
      referencia.after(nuevo);
    } else if (op.op === 'orden') {
      const padre = buscarId(raiz, op.padre);
      if (!padre || !Array.isArray(op.hijos)) continue;
      const hijos = [...padre.children];
      for (const id of op.hijos) {
        const hijo = hijos.find((h) => h.getAttribute('data-e') === id);
        if (hijo) padre.append(hijo);
      }
    }
  }
};
