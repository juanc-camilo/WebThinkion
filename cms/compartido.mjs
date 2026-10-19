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
    if (id === '_meta' || !edicion || !/^[\w./-]+$/.test(id)) continue;
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
