/* =========================================================
   AYUDANTES PARA LOS BLOQUES (sirven en la web y en el editor)
   - conSaltos: los Enter del texto se ven como saltos de línea.
   - conResaltado: marca una palabra del título con su subrayado.
   - Img: imagen con medidas (evita saltos al cargar) y carga diferida.
   - bloque(): arma la configuración de un bloque con lo común a todos.
   Cuando el texto se está editando sobre la página, Puck lo pasa como
   un elemento (no como texto): en ese caso se muestra tal cual.
   ========================================================= */

export const clases = (...lista) => lista.filter(Boolean).join(' ');

export const conSaltos = (valor) => {
  if (typeof valor !== 'string') return valor;
  const lineas = valor.split('\n');
  return lineas.flatMap((linea, i) => (i ? [<br key={i} />, linea] : [linea]));
};

export const conResaltado = (valor, resaltado, clase) => {
  if (typeof valor !== 'string' || !resaltado || !valor.includes(resaltado)) return conSaltos(valor);
  const [antes, ...resto] = valor.split(resaltado);
  return <>{conSaltos(antes)}<span className={clase}>{resaltado}</span>{conSaltos(resto.join(resaltado))}</>;
};

export function Img({ src, alt = '', ancho, alto, className, perezosa = true, prioridad = false, style }) {
  if (!src) return null;
  return (
    <img src={src} alt={alt} width={ancho} height={alto} className={className} style={style}
      loading={perezosa && !prioridad ? 'lazy' : undefined} fetchPriority={prioridad ? 'high' : undefined} />
  );
}

// Enlace: si no hay dirección queda "#", para no romper el diseño
export const href = (link) => (link && String(link).trim()) || '#';

// Ancla opcional (id) para linkear a una sección: "/check#beneficios"
export const ancla = (valor) => (valor ? String(valor).trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-') : undefined);

/* Todos los bloques son "inline": Puck no les agrega envoltorio y el
   HTML del editor queda igual al de la web. El bloque tiene que poner
   ref={puck.dragRef} en su etiqueta principal. */
export const bloque = (config) => ({ inline: true, ...config });
