/* =========================================================
   /api/paginas — páginas del sitio
   Cada página puede tener dos versiones:
   - la de la web:      contenido/paginas/<nombre>.json
   - el diseño futuro:  contenido/futuro/<nombre>.json (no se ve en la
     web; se trabaja de a poco hasta "Pasar a la web")

   GET                               → lista de páginas (web y futuro)
   GET ?nombre=check                 → datos de la página en la web
   GET ?nombre=check&version=futuro  → datos del diseño futuro (si
                                       todavía no hay, una copia de la
                                       web para empezar)
   POST { nombre, datos }                    → publica la página
   POST { nombre, datos, version: "futuro" } → guarda el diseño futuro
   POST { accion: "crear", nombre, titulo, plantilla, copiarDe, version } → página nueva
                                      (version "futuro": solo como diseño futuro)
   POST { accion: "pasar-a-la-web", nombre } → el diseño futuro reemplaza a la web
   DELETE ?nombre=check                 → borra la página de la web
   DELETE ?nombre=check&version=futuro  → descarta el diseño futuro
   ========================================================= */
import { protegida, json } from '@/lib/sesion';
import { leerArchivo, listarPaginasGuardadas, guardarArchivos } from '@/lib/almacen';

export const dynamic = 'force-dynamic';

const NOMBRE = /^[a-z0-9][a-z0-9-]{0,60}$/;
const ruta = (nombre, version) => `contenido/${version === 'futuro' ? 'futuro' : 'paginas'}/${nombre}.json`;
const rutaPublica = (nombre) => (nombre === 'inicio' ? '/' : `/${nombre}`);
const leer = async (nombre, version) => {
  const contenido = await leerArchivo(ruta(nombre, version));
  return contenido ? JSON.parse(contenido) : null;
};
const comoTexto = (datos) => `${JSON.stringify(datos, null, 2)}\n`;
const datosValidos = (datos) => datos && typeof datos === 'object' && Array.isArray(datos.content);

const resumen = (nombre, datos) => {
  const props = datos?.root?.props || {};
  return { titulo: props.titulo || nombre, indexar: props.indexar !== false, bloques: datos?.content?.length || 0 };
};

export const GET = protegida(async (request) => {
  const params = new URL(request.url).searchParams;
  const nombre = params.get('nombre');
  const version = params.get('version') === 'futuro' ? 'futuro' : 'web';
  if (nombre) {
    if (!NOMBRE.test(nombre)) return json({ error: 'Nombre de página inválido' }, 400);
    if (version === 'futuro') {
      const futuro = await leer(nombre, 'futuro');
      if (futuro) return json({ nombre, ruta: rutaPublica(nombre), datos: futuro, version });
      // Todavía no hay diseño futuro: se arranca con una copia de la web
      const web = await leer(nombre);
      return web ? json({ nombre, ruta: rutaPublica(nombre), datos: web, version, nuevo: true }) : json({ error: 'La página no existe' }, 404);
    }
    const datos = await leer(nombre);
    return datos ? json({ nombre, ruta: rutaPublica(nombre), datos, version }) : json({ error: 'La página no existe' }, 404);
  }

  const [nombresWeb, nombresFuturo] = await Promise.all([listarPaginasGuardadas('paginas'), listarPaginasGuardadas('futuro')]);
  const paginas = await Promise.all(nombresWeb.map(async (n) => ({
    nombre: n, ruta: rutaPublica(n), ...resumen(n, await leer(n).catch(() => null)), futuro: nombresFuturo.includes(n),
  })));
  const futuros = await Promise.all(nombresFuturo.map(async (n) => ({
    nombre: n, ruta: rutaPublica(n), ...resumen(n, await leer(n, 'futuro').catch(() => null)), enLaWeb: nombresWeb.includes(n),
  })));
  // La Home primero, el resto por título
  const orden = (a, b) => (a.nombre === 'inicio' ? -1 : b.nombre === 'inicio' ? 1 : a.titulo.localeCompare(b.titulo));
  return json({ paginas: paginas.sort(orden), futuros: futuros.sort(orden) });
});

export const POST = protegida(async (request, sesion) => {
  const cuerpo = await request.json().catch(() => ({}));
  const { nombre } = cuerpo;
  const version = cuerpo.version === 'futuro' ? 'futuro' : 'web';
  if (!NOMBRE.test(nombre || '')) return json({ error: 'El nombre solo puede tener letras minúsculas, números y guiones (ej.: promo-verano)' }, 400);

  if (cuerpo.accion === 'crear') {
    if (await leer(nombre)) return json({ error: 'Ya existe una página con ese nombre' }, 409);
    if (version === 'futuro' && await leer(nombre, 'futuro')) return json({ error: 'Ya hay un diseño futuro con ese nombre' }, 409);
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
    const mensaje = version === 'futuro'
      ? `Diseño futuro nuevo: ${rutaPublica(nombre)}\n\nCreado por ${sesion.u} desde /admin`
      : `Página nueva: ${rutaPublica(nombre)}\n\nCreada por ${sesion.u} desde /admin`;
    await guardarArchivos({ [ruta(nombre, version)]: comoTexto(datos) }, mensaje);
    return json({ ok: true, nombre, ruta: rutaPublica(nombre), version });
  }

  if (cuerpo.accion === 'pasar-a-la-web') {
    // Si llegan los datos (el editor guarda y pasa en un paso), se usan esos
    const guardado = await leer(nombre, 'futuro');
    const datos = datosValidos(cuerpo.datos) ? cuerpo.datos : guardado;
    if (!datos) return json({ error: 'Esa página no tiene diseño futuro' }, 404);
    // El archivo del futuro se borra solo si existe (GitHub no deja borrar lo que no está)
    const resultado = await guardarArchivos(
      { [ruta(nombre)]: comoTexto(datos), ...(guardado ? { [ruta(nombre, 'futuro')]: null } : {}) },
      `Diseño futuro pasado a la web: ${rutaPublica(nombre)}\n\nPublicado por ${sesion.u} desde /admin`,
    );
    return json({ ok: true, ...resultado });
  }

  const { datos } = cuerpo;
  if (!datosValidos(datos)) return json({ error: 'Datos de página inválidos' }, 400);
  const mensaje = version === 'futuro'
    ? `Diseño futuro de ${rutaPublica(nombre)} (guardado, no se publica)\n\nGuardado por ${sesion.u} desde /admin`
    : `Cambios en ${rutaPublica(nombre)}\n\nPublicado por ${sesion.u} desde /admin`;
  const resultado = await guardarArchivos({ [ruta(nombre, version)]: comoTexto(datos) }, mensaje);
  return json({ ok: true, ...resultado });
});

export const DELETE = protegida(async (request, sesion) => {
  const params = new URL(request.url).searchParams;
  const nombre = params.get('nombre') || '';
  if (!NOMBRE.test(nombre)) return json({ error: 'Nombre de página inválido' }, 400);
  if (params.get('version') === 'futuro') {
    await guardarArchivos({ [ruta(nombre, 'futuro')]: null }, `Diseño futuro descartado: ${rutaPublica(nombre)}\n\nDescartado por ${sesion.u} desde /admin`);
    return json({ ok: true });
  }
  if (nombre === 'inicio') return json({ error: 'La Home no se puede borrar' }, 400);
  await guardarArchivos({ [ruta(nombre)]: null }, `Página borrada: ${rutaPublica(nombre)}\n\nBorrada por ${sesion.u} desde /admin`);
  return json({ ok: true });
});
