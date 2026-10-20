/* /api/subir — imágenes y archivos que se suben desde el panel
   POST (formulario con "archivo") → { url }
   GET → imágenes ya subidas (para "Elegir del sitio")
   Las imágenes llegan ya achicadas y en WebP (lo hace el navegador). */
import { createHash } from 'node:crypto';
import { protegida, json } from '@/lib/sesion';
import { subirArchivo, tokenBlob } from '@/lib/almacen';

export const dynamic = 'force-dynamic';

const TIPOS = {
  'image/webp': 'webp', 'image/png': 'png', 'image/jpeg': 'jpg', 'image/gif': 'gif', 'image/svg+xml': 'svg', 'image/avif': 'avif',
  'video/mp4': 'mp4', 'video/webm': 'webm', 'application/pdf': 'pdf',
};
const MAXIMO = 4 * 1024 * 1024; // Vercel acepta hasta 4,5 MB por pedido

export const POST = protegida(async (request) => {
  const datos = await request.formData();
  const archivo = datos.get('archivo');
  if (!archivo || typeof archivo === 'string') return json({ error: 'No llegó ningún archivo' }, 400);
  const extension = TIPOS[archivo.type];
  if (!extension) return json({ error: `Formato no permitido (${archivo.type || 'desconocido'})` }, 400);
  if (archivo.size > MAXIMO) return json({ error: 'El archivo pesa más de 4 MB. Para videos, usá un link de YouTube, Vimeo o Drive.' }, 413);
  const buffer = Buffer.from(await archivo.arrayBuffer());
  const base = (archivo.name || 'archivo').replace(/\.[^.]+$/, '').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'archivo';
  const hash = createHash('sha1').update(buffer).digest('hex').slice(0, 8);
  return json(await subirArchivo(`${base}-${hash}.${extension}`, buffer, archivo.type));
});

export const GET = protegida(async () => {
  if (!tokenBlob()) return json({ imagenes: [] });
  const { list } = await import('@vercel/blob');
  const { blobs } = await list({ prefix: 'subidas/', limit: 500, token: tokenBlob() });
  const imagenes = blobs.filter((b) => /\.(webp|png|jpe?g|gif|svg|avif)$/i.test(b.pathname))
    .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)).map((b) => b.url);
  return json({ imagenes });
});
