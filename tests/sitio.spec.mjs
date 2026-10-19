// =====================================================================
// Tests de calidad del sitio Thinkion (SEO, GEO, accesibilidad y formularios)
// ---------------------------------------------------------------------
// Qué hace: recorre las 11 páginas y verifica, en cada una, lo mínimo que
// tiene que cumplir antes de salir a producción. Si alguien rompe algo
// (borra una meta, sube una imagen sin alt, cambia un color y baja el
// contraste), el test falla y lo avisa antes del deploy.
//
// Cómo correrlo:
//   npm i -D @playwright/test @axe-core/playwright
//   npx playwright install chromium
//   BASE_URL=http://localhost:8080 npx playwright test
// (con el sitio servido localmente, o apuntando BASE_URL a un preview de Vercel)
// =====================================================================
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

// Rutas del sitio. Si al publicar se pasa a URLs limpias (/gastronomia),
// alcanza con cambiar esta lista: el resto de los tests no cambia.
const PAGINAS = [
  { ruta: '/index.html', nombre: 'Home' },
  { ruta: '/src/views/gastronomia.html', nombre: 'Gastronomía' },
  { ruta: '/src/views/retail.html', nombre: 'Retail' },
  { ruta: '/src/views/pos-erp.html', nombre: 'POS y ERP' },
  { ruta: '/src/views/check.html', nombre: 'Check' },
  { ruta: '/src/views/marketing.html', nombre: 'Marketing' },
  { ruta: '/src/views/productividad.html', nombre: 'Productividad' },
  { ruta: '/src/views/clientes.html', nombre: 'Clientes' },
  { ruta: '/src/views/sobre-nosotros.html', nombre: 'Sobre nosotros' },
  { ruta: '/src/views/demo.html', nombre: 'Demo' },
  { ruta: '/src/views/trabaja-con-nosotros.html', nombre: 'Trabajá con nosotros' },
];

for (const { ruta, nombre } of PAGINAS) {
  test.describe(nombre, () => {
    // Cada test abre la página de cero para que un fallo no arrastre al siguiente.
    test.beforeEach(async ({ page }) => {
      await page.goto(BASE_URL + ruta, { waitUntil: 'load' });
    });

    // ---------- SEO on-page ----------
    test('title entre 15 y 60 caracteres', async ({ page }) => {
      // 60 es aproximadamente lo que Google muestra antes de cortar con "...".
      const title = await page.title();
      expect(title.length, `title: "${title}"`).toBeGreaterThanOrEqual(15);
      expect(title.length, `title: "${title}"`).toBeLessThanOrEqual(60);
    });

    test('meta description entre 70 y 160 caracteres', async ({ page }) => {
      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc, 'falta meta description').toBeTruthy();
      expect(desc.length).toBeGreaterThanOrEqual(70);
      expect(desc.length).toBeLessThanOrEqual(160);
    });

    test('un solo H1', async ({ page }) => {
      await expect(page.locator('h1')).toHaveCount(1);
    });

    test('canonical absoluto con https', async ({ page }) => {
      // En el staging de GitHub este test falla a propósito: el canonical
      // se define con el dominio final (es información operativa, no error de código).
      const href = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(href).toMatch(/^https:\/\//);
    });

    test('Open Graph completo (title, description, image, url)', async ({ page }) => {
      for (const prop of ['og:title', 'og:description', 'og:image', 'og:url']) {
        await expect(page.locator(`meta[property="${prop}"]`), `falta ${prop}`).toHaveCount(1);
      }
    });

    test('todas las imágenes tienen alt (vacío si son decorativas)', async ({ page }) => {
      const sinAlt = await page.locator('img:not([alt])').count();
      expect(sinAlt).toBe(0);
    });

    test('no queda texto de relleno', async ({ page }) => {
      // "Lorem ipsum" o "en construcción" visibles significan contenido sin terminar.
      const texto = (await page.locator('body').innerText()).toLowerCase();
      expect(texto).not.toContain('lorem ipsum');
      expect(texto).not.toContain('estamos construyendo esta página');
    });

    // ---------- GEO: datos estructurados ----------
    test('JSON-LD presente y válido', async ({ page }) => {
      const bloques = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(bloques.length, 'no hay JSON-LD').toBeGreaterThan(0);
      for (const b of bloques) {
        // JSON.parse lanza si el bloque está mal formado: eso hace fallar el test.
        const data = JSON.parse(b);
        expect(data['@context']).toContain('schema.org');
      }
    });

    // ---------- Accesibilidad ----------
    test('sin violaciones WCAG 2.2 AA graves (axe-core)', async ({ page }) => {
      // Las secciones .reveal arrancan en opacity:0; se hacen visibles para que
      // axe mida el contraste real y no el de un elemento transparente.
      await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-visible')));
      // Espera a que terminen las animaciones de entrada: a mitad de camino el texto
      // todavía está semitransparente y axe mediría un contraste que no es el real.
      await page.evaluate(() => Promise.all(document.getAnimations().map((a) => a.finished.catch(() => {}))));
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const graves = violations.filter((v) => ['serious', 'critical'].includes(v.impact));
      expect(graves.map((v) => `${v.id} (${v.nodes.length})`)).toEqual([]);
    });

    test('el primer Tab va al link "Ir al contenido"', async ({ page }) => {
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveText(/ir al contenido/i);
    });

    // ---------- Formularios ----------
    test('los formularios tienen destino real', async ({ page }) => {
      // action="#" en un sitio estático pierde los datos. Este test no aplica si
      // el envío lo maneja JavaScript: en ese caso el form debe tener data-envio.
      const forms = page.locator('form');
      for (let i = 0; i < (await forms.count()); i++) {
        const f = forms.nth(i);
        const action = (await f.getAttribute('action')) || '';
        const manejadoPorJs = (await f.getAttribute('data-envio')) !== null;
        expect(manejadoPorJs || (action && action !== '#'), 'form sin destino').toBeTruthy();
      }
    });
  });
}

// ---------- Pruebas de comportamiento (solo Home) ----------
test('menú mobile: abre con Enter y cierra con Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(BASE_URL + '/index.html');
  const boton = page.locator('.navbar__hamburguesa');
  await boton.focus();
  await page.keyboard.press('Enter');
  await expect(boton).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(boton).toHaveAttribute('aria-expanded', 'false');
});

test('desplegable de Soluciones: abre con Enter y cierra con Escape', async ({ page }) => {
  await page.goto(BASE_URL + '/index.html');
  const boton = page.locator('[data-dropdown] > button').first();
  await boton.focus();
  await page.keyboard.press('Enter');
  await expect(boton).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(boton).toHaveAttribute('aria-expanded', 'false');
});
