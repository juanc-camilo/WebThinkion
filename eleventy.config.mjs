/* =========================================================
   ELEVENTY — arma el sitio estático en la carpeta _site.
   - Las páginas (index.html y src/views/*.html) siguen siendo HTML.
     Eleventy solo reemplaza los {% include %} por el menú, el footer
     y el <head> compartidos (src/_includes).
   - Une las hojas de estilo de src/styles en una por tipo de página.
   - En el navegador no se agrega JavaScript: el resultado es HTML plano.
   - Aplica lo que se editó desde el panel /admin (contenido/*.json):
     ver cms/aplicar-ediciones.mjs.
   Comandos: npm run dev (con recarga automática) · npm run build
             npm run admin (sitio + panel de administración en local)
   ========================================================= */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { aplicarEdiciones } from './cms/aplicar-ediciones.mjs';

/* ---------- Hojas de estilo unidas ----------
   El orden importa: es el mismo en que se cargaban antes por separado.
   Para sumar un CSS nuevo, agregalo a la lista que corresponda. */
const COMUNES = ['fuentes', 'variables', 'base', 'components', 'layout', 'responsive'];
const HOJAS = {
  home: COMUNES,
  paginas: [...COMUNES, 'paginas'],
  segmento: [...COMUNES, 'segmento'],
};

/* ---------- Preguntas frecuentes → JSON-LD (FAQPage) ----------
   Lee las preguntas del HTML ya armado (<details class="faq__item">),
   así el texto se edita en un solo lugar: el HTML de la Home. */
const sinEtiquetas = (html) => html
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const preguntasFrecuentes = (html) => {
  const items = [...html.matchAll(/<details class="faq__item"[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*([\s\S]*?)<\/details>/g)];
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(([, pregunta, respuesta]) => ({
      '@type': 'Question',
      name: sinEtiquetas(pregunta),
      acceptedAnswer: { '@type': 'Answer', text: sinEtiquetas(respuesta) },
    })),
  };
};

export default function (eleventyConfig) {
  // Todas las páginas mantienen su nombre y carpeta: src/views/check.html → _site/src/views/check.html
  eleventyConfig.addGlobalData('permalink', () => (data) => `${data.page.filePathStem}.html`);

  // Archivos que se copian tal cual
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('src/controllers');
  // Panel de administración (HTML, CSS y JS propios; no pasan por las plantillas)
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy({ 'cms/compartido.mjs': 'admin/compartido.mjs' });

  // Si cambia un CSS, npm run dev vuelve a armar el sitio
  eleventyConfig.addWatchTarget('src/styles/');
  // Si se guarda algo desde el panel en local, también
  eleventyConfig.addWatchTarget('contenido/');

  // Une los CSS de cada tipo de página en src/styles/sitio-<tipo>.css
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    await mkdir(`${dir.output}/src/styles`, { recursive: true });
    for (const [tipo, archivos] of Object.entries(HOJAS)) {
      const partes = await Promise.all(archivos.map(async (nombre) =>
        `/* ===== ${nombre}.css ===== */\n${await readFile(`src/styles/${nombre}.css`, 'utf8')}`));
      await writeFile(`${dir.output}/src/styles/sitio-${tipo}.css`, partes.join('\n'));
    }
  });

  // Aplica las ediciones del panel /admin. Va antes que el JSON-LD de
  // preguntas frecuentes para que este tome los textos ya editados.
  eleventyConfig.addTransform('ediciones-admin', function (contenido) {
    const salida = this.page.outputPath;
    if (!salida || !salida.endsWith('.html') || salida.includes('/admin/')) return contenido;
    // "./src/views/check.html" → "src/views/check"; "./index.html" → "index"
    const clavePagina = this.page.inputPath.replace(/^\.\//, '').replace(/\.html$/, '');
    const profundidad = clavePagina.split('/').length - 1;
    return aplicarEdiciones(contenido, { clavePagina, raiz: '../'.repeat(profundidad) });
  });

  // Completa el JSON-LD de la Home con las preguntas frecuentes
  eleventyConfig.addTransform('preguntas-frecuentes', (contenido) => {
    if (!contenido.includes('"__PREGUNTAS_FRECUENTES__"')) return contenido;
    const json = JSON.stringify(preguntasFrecuentes(contenido), null, 2)
      .replace(/</g, '\\u003c')           // evita cerrar el <script> por accidente
      .replace(/\n/g, '\n      ');
    return contenido.replace('"__PREGUNTAS_FRECUENTES__"', json);
  });

  return {
    dir: { input: '.', output: '_site', includes: 'src/_includes', data: 'src/_data' },
    templateFormats: ['html'],
    htmlTemplateEngine: 'njk',
  };
}
