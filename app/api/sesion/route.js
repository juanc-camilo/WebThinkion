/* GET /api/sesion — ¿hay sesión iniciada? y cómo está configurado el guardado */
import { protegida, json } from '@/lib/sesion';
import { modo } from '@/lib/almacen';

export const dynamic = 'force-dynamic';

export const GET = protegida(async (request, sesion) => json({
  conectado: Boolean(sesion),
  usuario: sesion?.u || null,
  modo: modo(),
  imagenes: process.env.BLOB_READ_WRITE_TOKEN ? 'blob' : process.env.VERCEL ? 'sin-configurar' : 'local',
}), { publica: true });
