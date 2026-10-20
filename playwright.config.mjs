// Configuración de Playwright para los tests del sitio.
// Arma el sitio con Next.js, lo sirve en el puerto 8080 y corre en Chromium.
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  reporter: [['list'], ['json', { outputFile: 'resultados-tests.json' }]],
  // Timeouts cortos: si una meta no existe, el test falla en 2 s en lugar de esperar 30.
  expect: { timeout: 2_000 },
  use: { browserName: 'chromium', actionTimeout: 2_000 },
  // Si BASE_URL no está definida, arma el sitio y lo sirve en el puerto 8080.
  webServer: process.env.BASE_URL ? undefined : {
    command: 'npm run build && npm run start',
    timeout: 300_000,
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
});
