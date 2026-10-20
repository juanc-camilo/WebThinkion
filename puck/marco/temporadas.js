/* =========================================================
   TEMPORADAS — colores según la fecha (el banner de bienvenida va
   aparte, en ajustes.banner).
   Se configuran en el panel → Ajustes generales → Temporadas:
     { nombre, desde, hasta, colores: { botones, acento, titulos, fondo } }
   Cuál está activa:
     1) la forzada en "Temporada activa" (si se escribió un nombre), si no
     2) la primera cuyas fechas incluyen el día de hoy, si no
     3) la primera que no tiene fechas (la "de siempre").
   La elección la hace un script mínimo antes de pintar la página
   (atributo data-temporada en <html>): no hay parpadeo de colores.
   ========================================================= */
export const idTemporada = (nombre = '') => String(nombre).normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'temporada';

const color = (valor) => (/^#[0-9a-f]{3,8}$/i.test(String(valor || '').trim()) ? String(valor).trim() : '');

// Qué variable de variables.css cambia cada color de la temporada
const VARIABLES = {
  botones: ['--coral', '--coral-oscuro', '--coral-hover', '--coral-oscuro-hover'],
  acento: ['--violeta'],
  titulos: ['--azul-oscuro'],
  fondo: ['--fondo'],
};

export const cssTemporadas = (temporadas = {}) => (temporadas.lista || []).map((t) => {
  const reglas = Object.entries(VARIABLES).flatMap(([clave, variables]) => {
    const valor = color(t.colores?.[clave]);
    return valor ? variables.map((v) => `${v}: ${valor};`) : [];
  });
  return reglas.length ? `html[data-temporada="${idTemporada(t.nombre)}"] { ${reglas.join(' ')} }` : '';
}).filter(Boolean).join('\n');

export const datosTemporadas = (temporadas = {}) => ({
  forzada: temporadas.activa ? idTemporada(temporadas.activa) : '',
  lista: (temporadas.lista || []).map((t) => ({ id: idTemporada(t.nombre), desde: t.desde || '', hasta: t.hasta || '' })),
});

// Misma regla que el script de abajo, para el panel y el servidor
export const temporadaActiva = (temporadas = {}, hoy = new Date().toISOString().slice(0, 10)) => {
  const { forzada, lista } = datosTemporadas(temporadas);
  if (forzada && lista.some((t) => t.id === forzada)) return forzada;
  const porFecha = lista.find((t) => (t.desde || t.hasta) && (!t.desde || t.desde <= hoy) && (!t.hasta || hoy <= t.hasta));
  return porFecha?.id || lista.find((t) => !t.desde && !t.hasta)?.id || '';
};

export const scriptTemporadas = (temporadas = {}) => {
  const datos = JSON.stringify(datosTemporadas(temporadas)).replace(/</g, '\\u003c');
  return `(function(){try{var d=${datos},h=new Date(),hoy=h.getFullYear()+'-'+('0'+(h.getMonth()+1)).slice(-2)+'-'+('0'+h.getDate()).slice(-2),id='';`
    + `if(d.forzada&&d.lista.some(function(t){return t.id===d.forzada}))id=d.forzada;`
    + `else{d.lista.some(function(t){if((t.desde||t.hasta)&&(!t.desde||t.desde<=hoy)&&(!t.hasta||hoy<=t.hasta)){id=t.id;return true}});`
    + `if(!id)d.lista.some(function(t){if(!t.desde&&!t.hasta){id=t.id;return true}});}`
    + `if(id)document.documentElement.setAttribute('data-temporada',id);document.documentElement.classList.add('js');}catch(e){}})();`;
};
