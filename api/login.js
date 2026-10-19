/* POST /api/login — { usuario, clave } → cookie de sesión (12 h) */
import { endpoint, leerCuerpo, responder, credencialesValidas, crearToken, cookieSesion } from './_lib/sesion.js';

export default endpoint('POST', async (req, res) => {
  const { usuario = '', clave = '' } = await leerCuerpo(req);
  if (!credencialesValidas(usuario, clave)) {
    // Pequeña espera: hace más lento probar contraseñas al azar
    await new Promise((listo) => setTimeout(listo, 800));
    return responder(res, 401, { error: 'Usuario o contraseña incorrectos' });
  }
  return responder(res, 200, { ok: true, usuario }, { 'Set-Cookie': cookieSesion(req, crearToken(usuario)) });
}, { publico: true });
