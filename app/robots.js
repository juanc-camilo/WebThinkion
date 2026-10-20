/* robots.txt — buscadores e IAs (Google, Bing, ChatGPT, Claude, Gemini,
   Perplexity…): todo el sitio es público menos el panel. */
import { leerAjustes } from '@/lib/contenido';
import { dominioDe } from '@/lib/seo';

export default async function robots() {
  const dominio = dominioDe(await leerAjustes());
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] }],
    sitemap: `${dominio}/sitemap.xml`,
  };
}
