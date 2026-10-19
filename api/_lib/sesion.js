/* =========================================================
   SESIÓN DEL PANEL — usuario, contraseña y cookie firmada.
   (Las carpetas que empiezan con "_" no se publican como rutas en Vercel.)

   Variables de entorno (Vercel → Settings → Environment Variables):
     ADMIN_USUARIO  → usuario del panel   (por ahora: juanc)
     ADMIN_CLAVE    → contraseña          (por ahora: juanc1234)
     ADMIN_SECRETO  → texto largo al azar para firmar la cookie.
                      Si no está, se deriva del usuario y la clave.
   Cambiá la clave en Vercel antes de salir a producción: los valores
   por defecto están escritos acá y cualquiera con acceso al código los ve.
   ========================================================= */
import { createHmac, createHash, timingSafeEqual } from 'node:crypto';

const USUARIO = process.env.ADMIN_USUARIO || 'juanc';
const CLAVE = process.env.ADMIN_CLAVE || 'juanc1234';
const SECRETO = process.env.ADMIN_SECRETO
  || createHash('sha256').update(`thinkion-admin:${USUARIO}:${CLAVE}`).digest('hex');

const COOKIE = 'thk_admin';
const DURACION = 12 * 60 * 60; // 12 horas, en segundos

/* ---------- Comparación que tarda lo mismo acierte o no (evita adivinar por tiempos) ---------- */
const iguales = (a, b) => {
  const hashA = createHash('sha256').update(String(a)).digest();
  const hashB = createHash('sha256').update(String(b)).digest();
  return timingSafeEqual(hashA, hashB);
};

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

/* ---------- Cookies ---------- */
const leerCookies = (req) => Object.fromEntries((req.headers.cookie || '')
  .split(';').map((par) => par.trim().split('=').map(decodeURIComponent)).filter(([k]) => k));

const esSeguro = (req) => (req.headers['x-forwarded-proto'] || '').includes('https') || process.env.VERCEL;

export const cookieSesion = (req, token) => [
  `${COOKIE}=${token}`, 'Path=/', 'HttpOnly', 'SameSite=Strict', `Max-Age=${token ? DURACION : 0}`,
  esSeguro(req) ? 'Secure' : '',
].filter(Boolean).join('; ');

export const sesionActual = (req) => leerToken(leerCookies(req)[COOKIE]);

/* ---------- Ayudas para las respuestas ---------- */
export const responder = (res, estado, datos, encabezados = {}) => {
  res.statusCode = estado;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  for (const [nombre, valor] of Object.entries(encabezados)) res.setHeader(nombre, valor);
  res.end(JSON.stringify(datos));
};

// Vercel ya trae req.body armado; en el servidor local se lee del stream
export const leerCuerpo = async (req) => {
  if (req.body !== undefined) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const partes = [];
  for await (const parte of req) partes.push(parte);
  const texto = Buffer.concat(partes).toString('utf8');
  return texto ? JSON.parse(texto) : {};
};

/* Los POST tienen que venir del mismo sitio (protección contra CSRF, además de SameSite) */
const mismoOrigen = (req) => {
  const origen = req.headers.origin;
  if (!origen) return true;
  try { return new URL(origen).host === req.headers.host; } catch { return false; }
};

/* Envuelve un endpoint: exige método, mismo origen y (opcional) sesión iniciada */
export const endpoint = (metodo, manejador, { publico = false } = {}) => async (req, res) => {
  try {
    if (req.method !== metodo) return responder(res, 405, { error: 'Método no permitido' });
    if (metodo !== 'GET' && !mismoOrigen(req)) return responder(res, 403, { error: 'Origen no permitido' });
    const sesion = sesionActual(req);
    if (!publico && !sesion) return responder(res, 401, { error: 'Iniciá sesión de nuevo' });
    return await manejador(req, res, sesion);
  } catch (error) {
    console.error(error);
    return responder(res, error.estado || 500, { error: error.message || 'Error inesperado' });
  }
};
