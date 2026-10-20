/* sitemap.xml — la lista de páginas para Google y Bing.
   Quedan afuera las que tienen "Que aparezca en Google: No". */
import { listarPaginas, leerPagina, leerAjustes, rutaDePagina } from '@/lib/contenido';
import { dominioDe } from '@/lib/seo';

export default async function sitemap() {
  const dominio = dominioDe(await leerAjustes());
  const nombres = await listarPaginas();
  const paginas = await Promise.all(nombres.map(async (nombre) => ({ nombre, datos: await leerPagina(nombre) })));
  const hoy = new Date();
  return paginas
    .filter(({ datos }) => datos && datos.root?.props?.indexar !== false)
    .sort((a, b) => rutaDePagina(a.nombre).localeCompare(rutaDePagina(b.nombre)))
    .map(({ nombre }) => ({ url: `${dominio}${rutaDePagina(nombre)}`, lastModified: hoy }));
}
