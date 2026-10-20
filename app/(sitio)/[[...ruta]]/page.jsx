/* =========================================================
   PÁGINAS DE LA WEB — una por archivo de contenido/paginas.
   "/" es inicio.json; "/check" es check.json; etc.
   Se arman al publicar (estáticas): rápidas y con el texto real en
   el HTML para Google y las IAs.
   ========================================================= */
import { notFound } from 'next/navigation';
import { Render } from '@puckeditor/core/rsc';
import { config } from '@/puck/config';
import { listarPaginas, leerPagina, leerAjustes, rutaDePagina } from '@/lib/contenido';
import { metadatosDePagina, datosEstructurados } from '@/lib/seo';

// Solo existen las páginas que tienen su archivo: el resto da 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const paginas = await listarPaginas();
  return paginas.map((nombre) => ({ ruta: nombre === 'inicio' ? [] : [nombre] }));
}

const nombreDe = async (params) => {
  const { ruta = [] } = await params;
  return ruta.length ? ruta.join('/') : 'inicio';
};

export async function generateMetadata({ params }) {
  const nombre = await nombreDe(params);
  const [datos, ajustes] = await Promise.all([leerPagina(nombre), leerAjustes()]);
  if (!datos) return {};
  return metadatosDePagina({ datos, ajustes, ruta: rutaDePagina(nombre) });
}

export default async function PaginaPublica({ params }) {
  const nombre = await nombreDe(params);
  const [datos, ajustes] = await Promise.all([leerPagina(nombre), leerAjustes()]);
  if (!datos) notFound();
  const ruta = rutaDePagina(nombre);
  return (
    <>
      <Render config={config} data={datos} metadata={{ ajustes, ruta }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datosEstructurados({ datos, ajustes, ruta }) }} />
    </>
  );
}
