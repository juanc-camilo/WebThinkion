/* =========================================================
   SESIÓN DEL PANEL — usuario, contraseña y cookie firmada.
   Solo corre en el servidor (rutas /api).

   Variables de entorno (Vercel → Settings → Environment Variables):
     ADMIN_USUARIO  → usuario del panel   (por ahora: juanc)
     ADMIN_CLAVE    → contraseña          (por ahora: juanc1234)
     ADMIN_SECRETO  → texto largo al azar para firmar la cookie.
                      Si no está, se deriva del usuario y la clave.
   Cambiá la clave en Vercel antes de salir a producción: los valores
   por defecto están escritos acá y cualquiera con acceso al código los ve.
   ========================================================= */
import { createHmac, createHash, timingSafeEqual } from 'node:crypto';
import { cookies, headers } from 'next/headers';

const USUARIO = process.env.ADMIN_USUARIO || 'juanc';
const CLAVE = process.env.ADMIN_CLAVE || 'juanc1234';
const SECRETO = process.env.ADMIN_SECRETO
  || createHash('sha256').update(`thinkion-admin:${USUARIO}:${CLAVE}`).digest('hex');

export const COOKIE = 'thk_admin';
const DURACION = 12 * 60 * 60; // 12 horas, en segundos

/* ---------- Comparación que tarda lo mismo acierte o no (evita adivinar por tiempos) ---------- */
const iguales = (a, b) => timingSafeEqual(
  createHash('sha256').update(String(a)).digest(),
  createHash('sha256').update(String(b)).digest(),
);

export const credencialesValidas = (usuario, clave) => {
  // Se evalúan las dos siempre, para que no se sepa cuál falló
  const okUsuario = iguales(usuario, USUARIO);
  const okClave = iguales(clave, CLAVE);
  return okUsuario && okClave;
};

/* ---------- Token: datos en base64 + firma HMAC ---------- */
const firmar = (texto) => createHmac('sha256', SECRETO).update(texto).digest('base64url');

export const crearToken = (usuario) => {
  const datos = Buffer.from(JSON.stringify({ u: usuario, exp: Math.floor(Date.now() / 1000) + DURACION })).toString('base64url');
  return `${datos}.${firmar(datos)}`;
};

const leerToken = (token = '') => {
  const [datos, firma] = token.split('.');
  if (!datos || !firma || !iguales(firma, firmar(datos))) return null;
  try {
    const sesion = JSON.parse(Buffer.from(datos, 'base64url').toString('utf8'));
    return sesion.exp > Date.now() / 1000 ? sesion : null;
  } catch { return null; }
};

export const opcionesCookie = (maxAge) => ({
  httpOnly: true,
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: maxAge ?? DURACION,
});

export const sesionActual = async () => leerToken((await cookies()).get(COOKIE)?.value);

/* ---------- Respuestas JSON sin caché ---------- */
export const json = (datos, estado = 200) => Response.json(datos, { status: estado, headers: { 'Cache-Control': 'no-store' } });

/* Los POST tienen que venir del mismo sitio (protección contra CSRF, además de SameSite) */
const mismoOrigen = async () => {
  const h = await headers();
  const origen = h.get('origin');
  if (!origen) return true;
  try { return new URL(origen).host === h.get('host'); } catch { return false; }
};

/* Envuelve una ruta: exige mismo origen en escrituras y (opcional) sesión iniciada */
export const protegida = (manejador, { publica = false } = {}) => async (request, contexto) => {
  try {
    if (request.method !== 'GET' && !(await mismoOrigen())) return json({ error: 'Origen no permitido' }, 403);
    const sesion = await sesionActual();
    if (!publica && !sesion) return json({ error: 'Iniciá sesión de nuevo' }, 401);
    return await manejador(request, sesion, contexto);
  } catch (error) {
    console.error(error);
    return json({ error: error.message || 'Error inesperado' }, error.estado || 500);
  }
};
