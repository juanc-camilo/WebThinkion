/* =========================================================
   /api/paginas — páginas del sitio (archivos contenido/paginas/*.json)
   GET               → lista de páginas con su título
   GET ?nombre=check → datos de la página (lo último guardado)
   POST { nombre, datos }                                        → publica la página
   POST { accion: "crear", nombre, titulo, plantilla, copiarDe } → página nueva
   DELETE ?nombre=check                                          → borra la página
   ========================================================= */
import { protegida, json } from '@/lib/sesion';
import { leerArchivo, listarPaginasGuardadas, guardarArchivos } from '@/lib/almacen';

export const dynamic = 'force-dynamic';

const NOMBRE = /^[a-z0-9][a-z0-9-]{0,60}$/;
const ruta = (nombre) => `contenido/paginas/${nombre}.json`;
const rutaPublica = (nombre) => (nombre === 'inicio' ? '/' : `/${nombre}`);
const leer = async (nombre) => {
  const contenido = await leerArchivo(ruta(nombre));
  return contenido ? JSON.parse(contenido) : null;
};
const comoTexto = (datos) => `${JSON.stringify(datos, null, 2)}\n`;

export const GET = protegida(async (request) => {
  const nombre = new URL(request.url).searchParams.get('nombre');
  if (nombre) {
    if (!NOMBRE.test(nombre)) return json({ error: 'Nombre de página inválido' }, 400);
    const datos = await leer(nombre);
    return datos ? json({ nombre, ruta: rutaPublica(nombre), datos }) : json({ error: 'La página no existe' }, 404);
  }
  const nombres = await listarPaginasGuardadas();
  const paginas = await Promise.all(nombres.map(async (n) => {
    const datos = await leer(n).catch(() => null);
    const props = datos?.root?.props || {};
    return { nombre: n, ruta: rutaPublica(n), titulo: props.titulo || n, indexar: props.indexar !== false, bloques: datos?.content?.length || 0 };
  }));
  // La Home primero, el resto por título
  paginas.sort((a, b) => (a.nombre === 'inicio' ? -1 : b.nombre === 'inicio' ? 1 : a.titulo.localeCompare(b.titulo)));
  return json({ paginas });
});

export const POST = protegida(async (request, sesion) => {
  const cuerpo = await request.json().catch(() => ({}));
  const { nombre } = cuerpo;
  if (!NOMBRE.test(nombre || '')) return json({ error: 'El nombre solo puede tener letras minúsculas, números y guiones (ej.: promo-verano)' }, 400);

  if (cuerpo.accion === 'crear') {
    if (await leer(nombre)) return json({ error: 'Ya existe una página con ese nombre' }, 409);
    const base = cuerpo.copiarDe && NOMBRE.test(cuerpo.copiarDe) ? await leer(cuerpo.copiarDe) : null;
    const datos = {
      root: {
        props: {
          ...(base?.root?.props || {}),
          titulo: cuerpo.titulo || nombre,
          descripcion: base?.root?.props?.descripcion || '',
          plantilla: cuerpo.plantilla || base?.root?.props?.plantilla || 'producto',
          indexar: true,
        },
      },
      content: base?.content || [],
      zones: base?.zones || {},
    };
    await guardarArchivos({ [ruta(nombre)]: comoTexto(datos) }, `Página nueva: ${rutaPublica(nombre)}\n\nCreada por ${sesion.u} desde /admin`);
    return json({ ok: true, nombre, ruta: rutaPublica(nombre) });
  }

  const { datos } = cuerpo;
  if (!datos || typeof datos !== 'object' || !Array.isArray(datos.content)) return json({ error: 'Datos de página inválidos' }, 400);
  const resultado = await guardarArchivos({ [ruta(nombre)]: comoTexto(datos) }, `Cambios en ${rutaPublica(nombre)}\n\nPublicado por ${sesion.u} desde /admin`);
  return json({ ok: true, ...resultado });
});

export const DELETE = protegida(async (request, sesion) => {
  const nombre = new URL(request.url).searchParams.get('nombre') || '';
  if (!NOMBRE.test(nombre)) return json({ error: 'Nombre de página inválido' }, 400);
  if (nombre === 'inicio') return json({ error: 'La Home no se puede borrar' }, 400);
  await guardarArchivos({ [ruta(nombre)]: null }, `Página borrada: ${rutaPublica(nombre)}\n\nBorrada por ${sesion.u} desde /admin`);
  return json({ ok: true });
});
