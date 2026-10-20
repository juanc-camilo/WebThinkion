/* =========================================================
   PREPARAR — corre solo antes de "npm run dev" y "npm run build".
   1) Une las hojas de src/styles en public/estilos/sitio.css.
   2) Arma public/estilos/imagenes.json: la lista de imágenes del sitio
      que muestra el panel en "Elegir del sitio".
   - El orden importa: es el mismo de siempre (comunes y después las
     de cada tipo de página). Para sumar un CSS, agregalo a la lista.
   - Las rutas "../../public/…" de los url() pasan a "/…", porque la
     hoja se sirve desde /estilos/ y las imágenes desde la raíz.
   La misma hoja la usan la web y la vista del editor de Puck.
   ========================================================= */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const HOJAS = [
  'fuentes', 'variables', 'base', 'components', 'layout', 'responsive',
  'paginas', 'segmento',
  'bloques',        // bloques genéricos del panel (Columnas, Texto, Imagen…)
  'puck-ajustes',   // que el editor se vea igual que la web
];

const partes = await Promise.all(HOJAS.map(async (nombre) => {
  const css = await readFile(`src/styles/${nombre}.css`, 'utf8');
  return `/* ===== ${nombre}.css ===== */\n${css.replace(/\.\.\/\.\.\/public\//g, '/')}`;
}));

await mkdir('public/estilos', { recursive: true });
await writeFile('public/estilos/sitio.css', partes.join('\n'));
console.log(`CSS armado: public/estilos/sitio.css (${HOJAS.length} hojas)`);

/* ---------- Lista de imágenes del sitio (para la biblioteca del panel) ---------- */
const recorrer = async (carpeta) => (await Promise.all((await readdir(carpeta, { withFileTypes: true })).map((e) => {
  const ruta = path.join(carpeta, e.name);
  return e.isDirectory() ? recorrer(ruta) : [ruta];
}))).flat();
const imagenes = (await recorrer('public/img'))
  .filter((r) => /.(webp|png|jpe?g|svg|gif|avif)$/i.test(r))
  .map((r) => `/${path.relative('public', r).split(path.sep).join('/')}`)
  .sort();
await writeFile('public/estilos/imagenes.json', JSON.stringify(imagenes));
console.log(`Imágenes del sitio: ${imagenes.length}`);
