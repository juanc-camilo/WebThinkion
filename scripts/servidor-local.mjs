/* =========================================================
   SERVIDOR LOCAL DEL PANEL — npm run admin
   Arma el sitio con Eleventy (y lo vuelve a armar si algo cambia),
   lo sirve en http://localhost:8080 y atiende las rutas /api con las mismas
   funciones que usa Vercel. Lo que se publica desde el panel se
   escribe directo en contenido/ y en las carpetas public/img/subidas y public/fonts/subidas.
   Panel: http://localhost:8080/admin/
   ========================================================= */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const PUERTO = Number(process.env.PORT) || 8080;
const SITIO = path.resolve('_site');
const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain',
};

/* ---------- Eleventy en modo "watch" ---------- */
if (!process.env.SIN_ELEVENTY) {
  spawn('npx', ['@11ty/eleventy', '--watch', '--quiet'], { stdio: 'inherit', shell: true });
}

/* ---------- Funciones /api (las mismas de Vercel) ---------- */
const atenderApi = async (req, res, nombre) => {
  if (!/^[a-z]+$/.test(nombre)) { res.statusCode = 404; return res.end(); }
  try {
    const modulo = await import(pathToFileURL(path.resolve('api', `${nombre}.js`)).href);
    await modulo.default(req, res);
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND') { res.statusCode = 404; return res.end('No existe'); }
    console.error(error);
    res.statusCode = 500; res.end('Error');
  }
};

/* ---------- Archivos estáticos desde _site ---------- */
const servirArchivo = async (res, rutaUrl) => {
  let ruta = path.join(SITIO, decodeURIComponent(rutaUrl));
  if (!ruta.startsWith(SITIO)) { res.statusCode = 403; return res.end(); }
  try {
    if ((await stat(ruta)).isDirectory()) ruta = path.join(ruta, 'index.html');
    const contenido = await readFile(ruta);
    res.setHeader('Content-Type', TIPOS[path.extname(ruta).toLowerCase()] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.end(contenido);
  } catch {
    res.statusCode = 404;
    res.end('No encontrado');
  }
};

createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  if (pathname.startsWith('/api/')) return atenderApi(req, res, pathname.slice(5).replace(/\/$/, ''));
  if (pathname === '/admin') { res.statusCode = 301; res.setHeader('Location', '/admin/'); return res.end(); }
  return servirArchivo(res, pathname === '/' ? '/index.html' : pathname);
}).listen(PUERTO, () => {
  console.log(`\n  Sitio: http://localhost:${PUERTO}/\n  Panel: http://localhost:${PUERTO}/admin/  (usuario y clave en api/_lib/sesion.js)\n`);
});
