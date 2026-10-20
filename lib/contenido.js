/* =========================================================
   CONTENIDO — lee las páginas y los ajustes al armar el sitio.
   Cada página es un archivo contenido/paginas/<nombre>.json con los
   bloques que se armaron en el panel (formato de Puck).
   - "inicio" es la Home (/); el resto va en /<nombre> (ej.: /check).
   Los ajustes generales (menú, footer, temporadas, datos de la
   empresa) están en contenido/ajustes.json.
   ========================================================= */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const CARPETA = path.join(process.cwd(), 'contenido');

export const rutaDePagina = (nombre) => (nombre === 'inicio' ? '/' : `/${nombre}`);

export const listarPaginas = async () => {
  const archivos = await readdir(path.join(CARPETA, 'paginas')).catch(() => []);
  return archivos.filter((a) => a.endsWith('.json')).map((a) => a.replace(/\.json$/, '')).sort();
};

export const leerPagina = async (nombre) => {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(nombre)) return null;
  try { return JSON.parse(await readFile(path.join(CARPETA, 'paginas', `${nombre}.json`), 'utf8')); }
  catch { return null; }
};

export const leerAjustes = async () => {
  try { return JSON.parse(await readFile(path.join(CARPETA, 'ajustes.json'), 'utf8')); }
  catch { return {}; }
};
