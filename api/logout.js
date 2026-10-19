/* POST /api/logout — borra la cookie de sesión */
import { endpoint, responder, cookieSesion } from './_lib/sesion.js';

export default endpoint('POST', async (req, res) => responder(res, 200, { ok: true }, { 'Set-Cookie': cookieSesion(req, '') }), { publico: true });
