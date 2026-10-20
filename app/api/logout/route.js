/* POST /api/logout — borra la cookie de sesión */
import { cookies } from 'next/headers';
import { protegida, json, COOKIE, opcionesCookie } from '@/lib/sesion';

export const POST = protegida(async () => {
  (await cookies()).set(COOKIE, '', opcionesCookie(0));
  return json({ ok: true });
}, { publica: true });
