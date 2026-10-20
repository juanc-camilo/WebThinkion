// =====================================================================
// Tests del panel (Puck), de las temporadas y de lo que leen buscadores e IAs.
// El sitio se arma con "npm run build" y se sirve con "next start".
// =====================================================================
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

test.describe('Panel de administración', () => {
  test('el panel pide ingreso y no se indexa', async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    await expect(page.locator('input[name="usuario"]')).toBeVisible();
  });

  test('la API del panel no responde sin sesión', async ({ request }) => {
    expect((await request.get(`${BASE_URL}/api/paginas`)).status()).toBe(401);
    expect((await request.get(`${BASE_URL}/api/ajustes`)).status()).toBe(401);
  });

  test('con usuario y contraseña equivocados no entra', async ({ request }) => {
    const respuesta = await request.post(`${BASE_URL}/api/login`, { data: { usuario: 'juanc', clave: 'mal' } });
    expect(respuesta.status()).toBe(401);
  });
});

test.describe('Temporadas y direcciones', () => {
  test('la temporada queda elegida antes de pintar la página', async ({ page }) => {
    await page.goto(`${BASE_URL}/check`);
    await expect(page.locator('html')).toHaveAttribute('data-temporada', /.+/);
  });

  test('las direcciones viejas llevan a las nuevas', async ({ page }) => {
    await page.goto(`${BASE_URL}/src/views/check.html`);
    expect(new URL(page.url()).pathname).toBe('/check');
    await page.goto(`${BASE_URL}/index.html`);
    expect(new URL(page.url()).pathname).toBe('/');
  });
});

test.describe('Buscadores e IAs', () => {
  test('las preguntas frecuentes llegan al JSON-LD (no vacío)', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    const bloques = await page.locator('script[type="application/ld+json"]').allTextContents();
    const faq = bloques.map((b) => JSON.parse(b)['@graph'] || []).flat().find((n) => n['@type'] === 'FAQPage');
    expect(faq?.mainEntity?.length, 'FAQPage sin preguntas').toBeGreaterThan(0);
  });

  test('robots.txt, sitemap.xml y llms.txt existen y apuntan al dominio', async ({ request }) => {
    const robots = await (await request.get(`${BASE_URL}/robots.txt`)).text();
    expect(robots).toMatch(/Sitemap: https:\/\/\S+\/sitemap\.xml/);
    expect(robots).toMatch(/Disallow: \/admin/);
    const sitemap = await (await request.get(`${BASE_URL}/sitemap.xml`)).text();
    expect(sitemap).toContain('<loc>https://');
    expect(sitemap, 'las páginas en construcción no van al sitemap').not.toContain('/retail');
    const llms = await (await request.get(`${BASE_URL}/llms.txt`)).text();
    expect(llms).toMatch(/^# Thinkion/);
    expect(llms).toContain('## Preguntas frecuentes');
  });
});
