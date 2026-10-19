/* POST /api/guardar — { ediciones, temporadas, subidas, mensaje } → commit en GitHub (o archivos locales) */
import { endpoint, leerCuerpo, responder } from './_lib/sesion.js';
import { guardarDatos } from './_lib/almacen.js';

const esObjeto = (valor) => valor && typeof valor === 'object' && !Array.isArray(valor);

export default endpoint('POST', async (req, res, sesion) => {
  const { ediciones, temporadas, subidas = [], mensaje = '' } = await leerCuerpo(req);
  if (!esObjeto(ediciones) || !esObjeto(ediciones.global) || !esObjeto(ediciones.paginas)) {
    return responder(res, 400, { error: 'Ediciones con formato inválido' });
  }
  if (!esObjeto(temporadas) || !Array.isArray(temporadas.temporadas)) {
    return responder(res, 400, { error: 'Temporadas con formato inválido' });
  }
  const texto = String(mensaje).slice(0, 120) || 'Cambios desde el panel de administración';
  const resultado = await guardarDatos({
    ediciones, temporadas, subidas: Array.isArray(subidas) ? subidas : [],
    mensaje: `${texto}\n\nPublicado por ${sesion.u} desde /admin`,
  });
  return responder(res, 200, { ok: true, ...resultado });
});
