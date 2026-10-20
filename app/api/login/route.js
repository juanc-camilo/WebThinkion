/* POST /api/login — { usuario, clave } → cookie de sesión (12 h) */
import { cookies } from 'next/headers';
import { protegida, json, credencialesValidas, crearToken, COOKIE, opcionesCookie } from '@/lib/sesion';

export const POST = protegida(async (request) => {
  const { usuario = '', clave = '' } = await request.json().catch(() => ({}));
  if (!credencialesValidas(usuario, clave)) {
    // Pequeña espera: hace más lento probar contraseñas al azar
    await new Promise((listo) => setTimeout(listo, 800));
    return json({ error: 'Usuario o contraseña incorrectos' }, 401);
  }
  (await cookies()).set(COOKIE, crearToken(usuario), opcionesCookie());
  return json({ ok: true, usuario });
}, { publica: true });
