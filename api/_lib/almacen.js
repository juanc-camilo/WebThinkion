/* =========================================================
   ALMACÉN — dónde se guarda lo que se edita en el panel.

   En Vercel (producción): se guarda en el repositorio de GitHub.
     Cada "Publicar" crea un commit con contenido/*.json (y las
     imágenes o tipografías subidas). Vercel ve el commit y vuelve a
     publicar el sitio solo, en 1 o 2 minutos.
     Variables de entorno:
       GITHUB_TOKEN → token con permiso "Contents: Read and write"
                      sobre el repositorio (obligatoria).
       GITHUB_REPO  → "usuario/repositorio". Si falta, se usa el que
                      Vercel tiene conectado.
       GITHUB_RAMA  → rama que publica Vercel. Si falta, la del deploy
                      actual (o "main").
   En la compu (npm run admin): se escribe directo en los archivos del
     proyecto y Eleventy vuelve a armar el sitio.
   ========================================================= */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPO
  || (process.env.VERCEL_GIT_REPO_OWNER && `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`);
const RAMA = process.env.GITHUB_RAMA || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export const ARCHIVOS = {
  ediciones: 'contenido/ediciones.json',
  temporadas: 'contenido/temporadas.json',
};

export const modo = () => (TOKEN ? 'github' : process.env.VERCEL ? 'sin-configurar' : 'local');

const errorConEstado = (mensaje, estado = 500) => Object.assign(new Error(mensaje), { estado });

const exigirConfiguracion = () => {
  if (modo() === 'sin-configurar') {
    throw errorConEstado('Falta configurar GITHUB_TOKEN en Vercel (Settings → Environment Variables). Sin eso el panel no puede guardar.', 503);
  }
  if (modo() === 'github' && !REPO) throw errorConEstado('Falta GITHUB_REPO (usuario/repositorio).', 503);
};

/* ---------- GitHub: pedido genérico a la API ---------- */
const github = async (ruta, opciones = {}) => {
  const respuesta = await fetch(`https://api.github.com/repos/${REPO}${ruta}`, {
    ...opciones,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'thinkion-admin',
      ...(opciones.body ? { 'Content-Type': 'application/json' } : {}),
      ...opciones.headers,
    },
  });
  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    throw errorConEstado(`GitHub respondió ${respuesta.status}: ${detalle.slice(0, 200)}`, respuesta.status === 409 || respuesta.status === 422 ? 409 : 502);
  }
  return opciones.crudo ? respuesta.text() : respuesta.json();
};

/* ---------- Leer los datos del panel ---------- */
export const leerDatos = async () => {
  exigirConfiguracion();
  const datos = {};
  for (const [clave, ruta] of Object.entries(ARCHIVOS)) {
    const texto = modo() === 'github'
      ? await github(`/contents/${ruta}?ref=${encodeURIComponent(RAMA)}`, { crudo: true, headers: { Accept: 'application/vnd.github.raw+json' } })
      : await readFile(path.join(process.cwd(), ruta), 'utf8');
    datos[clave] = JSON.parse(texto);
  }
  return { ...datos, modo: modo(), repo: REPO || null, rama: modo() === 'github' ? RAMA : null };
};

/* ---------- Subir un archivo (imagen o tipografía) ----------
   En GitHub se crea solo el "blob" (todavía no hay commit, así no se
   publica el sitio por cada imagen); el commit llega al Publicar. */
export const subirArchivo = async (ruta, base64) => {
  exigirConfiguracion();
  if (modo() === 'github') {
    const { sha } = await github('/git/blobs', { method: 'POST', body: JSON.stringify({ content: base64, encoding: 'base64' }) });
    return { ruta, sha };
  }
  const buffer = Buffer.from(base64, 'base64');
  // Se escribe en el proyecto y en _site, para verla sin esperar a Eleventy
  for (const base of ['', '_site']) {
    const destino = path.join(process.cwd(), base, ruta);
    await mkdir(path.dirname(destino), { recursive: true });
    await writeFile(destino, buffer);
  }
  return { ruta };
};

/* ---------- Guardar y publicar ---------- */
export const guardarDatos = async ({ ediciones, temporadas, subidas = [], mensaje }) => {
  exigirConfiguracion();
  const archivos = {
    [ARCHIVOS.ediciones]: `${JSON.stringify(ediciones, null, 2)}\n`,
    [ARCHIVOS.temporadas]: `${JSON.stringify(temporadas, null, 2)}\n`,
  };

  if (modo() === 'local') {
    for (const [ruta, texto] of Object.entries(archivos)) await writeFile(path.join(process.cwd(), ruta), texto);
    return { commit: null };
  }

  // Un solo commit con todos los archivos (Git Data API). Si alguien
  // publicó justo antes y la rama se movió, se reintenta una vez.
  const blobs = await Promise.all(Object.entries(archivos).map(async ([ruta, texto]) => {
    const { sha } = await github('/git/blobs', { method: 'POST', body: JSON.stringify({ content: texto, encoding: 'utf-8' }) });
    return { path: ruta, mode: '100644', type: 'blob', sha };
  }));
  const extras = subidas.filter((s) => s?.sha && rutaPermitida(s.ruta))
    .map((s) => ({ path: s.ruta, mode: '100644', type: 'blob', sha: s.sha }));

  for (let intento = 0; intento < 2; intento += 1) {
    const ref = await github(`/git/ref/heads/${encodeURIComponent(RAMA)}`);
    const padre = await github(`/git/commits/${ref.object.sha}`);
    const arbol = await github('/git/trees', { method: 'POST', body: JSON.stringify({ base_tree: padre.tree.sha, tree: [...blobs, ...extras] }) });
    const commit = await github('/git/commits', {
      method: 'POST',
      body: JSON.stringify({ message: mensaje || 'Cambios desde el panel de administración', tree: arbol.sha, parents: [ref.object.sha] }),
    });
    try {
      await github(`/git/refs/heads/${encodeURIComponent(RAMA)}`, { method: 'PATCH', body: JSON.stringify({ sha: commit.sha }) });
      return { commit: commit.sha };
    } catch (error) {
      if (error.estado !== 409 || intento === 1) throw error;
    }
  }
  return { commit: null };
};

/* ---------- Solo se puede escribir en las carpetas de subidas ---------- */
export const rutaPermitida = (ruta = '') => /^public\/(img|fonts)\/subidas\/[a-z0-9][a-z0-9._-]{0,120}$/.test(ruta) && !ruta.includes('..');
