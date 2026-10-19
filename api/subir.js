/* POST /api/subir — { tipo: "imagen" | "fuente", nombre, base64 } → { ruta, sha? }
   La imagen ya llega convertida a WebP desde el panel (salvo SVG y GIF). */
import { createHash } from 'node:crypto';
import { endpoint, leerCuerpo, responder } from './_lib/sesion.js';
import { subirArchivo, rutaPermitida } from './_lib/almacen.js';

const EXTENSIONES = {
  imagen: ['webp', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'avif'],
  fuente: ['woff2', 'woff'],
};
const MAXIMO = 3 * 1024 * 1024; // 3 MB (en base64 crece un tercio y Vercel acepta hasta 4,5 MB por pedido)

export default endpoint('POST', async (req, res) => {
  const { tipo, nombre = '', base64 = '' } = await leerCuerpo(req);
  const extension = nombre.split('.').pop().toLowerCase();
  if (!EXTENSIONES[tipo]?.includes(extension)) return responder(res, 400, { error: `Formato no permitido: .${extension}` });
  const buffer = Buffer.from(base64, 'base64');
  if (!buffer.length || buffer.length > MAXIMO) return responder(res, 413, { error: 'El archivo está vacío o pesa más de 3 MB' });

  // Nombre limpio + parte del hash del contenido (la misma imagen no se duplica)
  const base = nombre.replace(/\.[^.]+$/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'archivo';
  const hash = createHash('sha1').update(buffer).digest('hex').slice(0, 8);
  const ruta = `public/${tipo === 'imagen' ? 'img' : 'fonts'}/subidas/${base}-${hash}.${extension}`;
  if (!rutaPermitida(ruta)) return responder(res, 400, { error: 'Nombre de archivo no válido' });

  return responder(res, 200, await subirArchivo(ruta, base64));
});
