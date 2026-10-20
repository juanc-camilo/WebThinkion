/* /api/ajustes — menú, footer, temporadas y datos de la empresa (contenido/ajustes.json)
   GET → lo último guardado · POST { ajustes } → publica */
import { protegida, json } from '@/lib/sesion';
import { leerArchivo, guardarArchivos } from '@/lib/almacen';

export const dynamic = 'force-dynamic';
const RUTA = 'contenido/ajustes.json';

export const GET = protegida(async () => {
  const contenido = await leerArchivo(RUTA);
  return json({ ajustes: contenido ? JSON.parse(contenido) : {} });
});

export const POST = protegida(async (request, sesion) => {
  const { ajustes } = await request.json().catch(() => ({}));
  if (!ajustes || typeof ajustes !== 'object' || Array.isArray(ajustes)) return json({ error: 'Ajustes inválidos' }, 400);
  const resultado = await guardarArchivos(
    { [RUTA]: `${JSON.stringify(ajustes, null, 2)}\n` },
    `Ajustes generales (menú, footer, temporadas)\n\nPublicado por ${sesion.u} desde /admin`,
  );
  return json({ ok: true, ...resultado });
});
