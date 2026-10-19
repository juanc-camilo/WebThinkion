/* GET /api/sesion — ¿hay sesión iniciada? (el panel lo consulta al abrir) */
import { endpoint, responder, sesionActual } from './_lib/sesion.js';
import { modo } from './_lib/almacen.js';

export default endpoint('GET', async (req, res) => {
  const sesion = sesionActual(req);
  return responder(res, 200, { conectado: Boolean(sesion), usuario: sesion?.u || null, modo: modo() });
}, { publico: true });
