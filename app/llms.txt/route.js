/* /llms.txt — resumen en texto para IAs (formato de llmstxt.org):
   qué es Thinkion, sus páginas y las preguntas frecuentes del sitio.
   Se arma solo con los títulos, descripciones y preguntas del panel. */
import { listarPaginas, leerPagina, leerAjustes, rutaDePagina } from '@/lib/contenido';
import { dominioDe, preguntasDePagina } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const ajustes = await leerAjustes();
  const sitio = ajustes.sitio || {};
  const dominio = dominioDe(ajustes);
  const nombres = await listarPaginas();
  const paginas = (await Promise.all(nombres.map(async (nombre) => ({ nombre, datos: await leerPagina(nombre) }))))
    .filter(({ datos }) => datos && datos.root?.props?.indexar !== false)
    .sort((a, b) => rutaDePagina(a.nombre).localeCompare(rutaDePagina(b.nombre)));

  const lista = paginas.map(({ nombre, datos }) => {
    const { titulo = nombre, descripcion = '' } = datos.root.props;
    return `- [${titulo.replace(/\s*\|\s*Thinkion$/, '')}](${dominio}${rutaDePagina(nombre)}): ${descripcion}`;
  }).join('\n');
  const preguntas = paginas.flatMap(({ datos }) => preguntasDePagina(datos));
  const faq = preguntas.map((p) => `### ${p.pregunta}\n\n${p.respuesta}`).join('\n\n');
  const redes = (sitio.redes || []).map((r) => `${r.nombre}: ${r.link}`).join(' · ');

  const texto = `# ${sitio.nombre || 'Thinkion'}

> ${sitio.descripcion || ''}

${[sitio.razonSocial, 'Argentina', sitio.email].filter(Boolean).join(' · ')}
${redes}

## Páginas

${lista}
${faq ? `\n## Preguntas frecuentes\n\n${faq}\n` : ''}`;

  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
