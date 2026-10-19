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
