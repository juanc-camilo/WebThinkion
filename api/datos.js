/* GET /api/datos — ediciones y temporadas guardadas (la última versión, aunque Vercel todavía esté publicando) */
import { endpoint, responder } from './_lib/sesion.js';
import { leerDatos } from './_lib/almacen.js';

export default endpoint('GET', async (req, res) => responder(res, 200, await leerDatos()));
