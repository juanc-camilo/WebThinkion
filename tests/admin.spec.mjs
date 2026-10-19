// =====================================================================
// Tests del panel de administración y de lo que Eleventy agrega para él.
// No prueban /api (en los tests el sitio se sirve como archivos estáticos):
// verifican que cada página traiga las direcciones (data-e), la temporada
// y que el panel cargue y no aparezca en Google.
// =====================================================================
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

test.describe('Panel de administración', () => {
  test('cada elemento editable tiene su dirección (data-e)', async ({ page }) => {
    await page.goto(`${BASE_URL}/index.html`);
    await expect(page.locator('body')).toHaveAttribute('data-e', 'body');
    await expect(page.locator('h1')).toHaveAttribute('data-e', /^[\d.]+$/);
    // Menú y footer se numeran aparte: un cambio ahí vale para todas las páginas
    await expect(page.locator('header.navbar')).toHaveAttribute('data-e', 'menu');
    await expect(page.locator('footer.footer')).toHaveAttribute('data-e', 'footer');
  });

  test('la temporada queda elegida antes de pintar la página', async ({ page }) => {
    await page.goto(`${BASE_URL}/src/views/check.html`);
    const datos = JSON.parse(await page.locator('#temporadas-datos').textContent());
    expect(datos.temporadas.length).toBeGreaterThan(0);
    await expect(page.locator('html')).toHaveAttribute('data-temporada', /.+/);
  });

  test('el panel carga, pide ingreso y no se indexa', async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/index.html`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    // Sin /api (servidor estático) muestra el ingreso con el aviso de conexión
    await expect(page.locator('#form-ingreso')).toBeVisible();
  });
});

// ---------- Buscadores e IAs ----------
test.describe('Buscadores e IAs', () => {
  test('las preguntas frecuentes llegan al JSON-LD (no vacío)', async ({ page }) => {
    await page.goto(`${BASE_URL}/index.html`);
    const bloques = await page.locator('script[type="application/ld+json"]').allTextContents();
    const faq = bloques.map((b) => JSON.parse(b)['@graph'] || []).flat().find((n) => n['@type'] === 'FAQPage');
    expect(faq?.mainEntity?.length, 'FAQPage sin preguntas').toBeGreaterThan(0);
  });

  test('robots.txt, sitemap.xml y llms.txt existen y apuntan al dominio', async ({ request }) => {
    const robots = await (await request.get(`${BASE_URL}/robots.txt`)).text();
    expect(robots).toMatch(/Sitemap: https:\/\/\S+\/sitemap\.xml/);
    expect(robots).toContain('Disallow: /admin/');
    const sitemap = await (await request.get(`${BASE_URL}/sitemap.xml`)).text();
    expect(sitemap).toContain('<loc>https://');
    expect(sitemap, 'las páginas en construcción no van al sitemap').not.toContain('retail.html');
    const llms = await (await request.get(`${BASE_URL}/llms.txt`)).text();
    expect(llms).toMatch(/^# Thinkion/);
    expect(llms).toContain('## Preguntas frecuentes');
  });
});
