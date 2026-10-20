/* =========================================================
   CAMPOS DEL PANEL — lo que se ve a la derecha al tocar un bloque.
   Atajos para que todos los bloques usen los mismos campos:
     texto(), parrafo(), textoRico(), imagen(), link(), opciones(),
     lista(), color()
   Los campos especiales (imagen y link) son componentes propios:
   - Imagen: vista previa, subir desde la compu (se pasa a WebP) y
     elegir entre las imágenes que ya tiene el sitio.
   - Link: se elige una página del sitio o se escribe una dirección.
   ========================================================= */
import { CampoImagen, CampoLink, CampoFecha, CampoColor } from './campos-ui';

/* ---------- Campos simples ---------- */
// Texto de una línea. editable=true: también se escribe directo sobre la página.
export const texto = (label, { editable = true, placeholder } = {}) => ({ type: 'text', label, contentEditable: editable, placeholder });
// Texto de varias líneas (Enter = salto de línea)
export const parrafo = (label, { editable = true, placeholder } = {}) => ({ type: 'textarea', label, contentEditable: editable, placeholder });
// Texto con formato: negrita, cursiva, listas y links
export const textoRico = (label) => ({
  type: 'richtext',
  label,
  contentEditable: true,
  options: { heading: false, codeBlock: false, code: false, blockquote: false, horizontalRule: false, strike: false, textAlign: false },
});
export const opciones = (label, lista, { radio = false } = {}) => ({
  type: radio ? 'radio' : 'select',
  label,
  options: lista.map(([value, etiqueta]) => ({ value, label: etiqueta })),
});
export const numero = (label, { min, max, step } = {}) => ({ type: 'number', label, min, max, step });
export const siNo = (label) => opciones(label, [[true, 'Sí'], [false, 'No']], { radio: true });

// Lista de elementos (tarjetas, preguntas, logos…): se agregan, borran y reordenan arrastrando
export const lista = (label, campos, { resumen, nuevo, min, max } = {}) => ({
  type: 'array',
  label,
  arrayFields: campos,
  defaultItemProps: nuevo,
  getItemSummary: resumen ? (item, i) => {
    const valor = typeof resumen === 'function' ? resumen(item, i) : item[resumen];
    return (typeof valor === 'string' && valor.trim()) ? valor.replace(/<[^>]+>/g, '').slice(0, 40) : `Elemento ${(i ?? 0) + 1}`;
  } : undefined,
  min,
  max,
});
export const grupo = (label, campos) => ({ type: 'object', label, objectFields: campos });

/* ---------- Colores de la marca (no se pueden elegir otros: así no se rompe la estética) ---------- */
export const COLORES = [
  ['', 'Automático'],
  ['azul', 'Azul Thinkion'],
  ['violeta', 'Violeta'],
  ['coral', 'Coral'],
  ['texto', 'Negro'],
  ['blanco', 'Blanco'],
];
export const color = (label = 'Color') => opciones(label, COLORES);

/* ---------- Campos propios (los dibuja campos-ui.jsx en el navegador) ---------- */
export const imagen = (label = 'Imagen') => ({ type: 'custom', label, render: CampoImagen });
export const link = (label = 'Lleva a') => ({ type: 'custom', label, render: CampoLink });
export const fecha = (label) => ({ type: 'custom', label, render: CampoFecha });
export const colorLibre = (label) => ({ type: 'custom', label, render: CampoColor });
