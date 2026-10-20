/* =========================================================
   ALMACÉN — dónde se guarda lo que se edita en el panel.
   Solo corre en el servidor (rutas /api).

   PÁGINAS Y AJUSTES (contenido/*.json)
   - En Vercel: se guardan en el repositorio de GitHub. Cada "Publicar"
     es un commit; Vercel lo ve y vuelve a publicar el sitio solo
     (1 o 2 minutos). El historial de GitHub sirve para volver atrás.
       GITHUB_TOKEN → token con permiso "Contents: Read and write" (obligatoria)
       GITHUB_REPO  → "usuario/repositorio" (si falta, el que tiene Vercel)
       GITHUB_RAMA  → rama que publica Vercel (si falta, la del deploy)
   - En la compu (npm run dev): se escribe directo en los archivos.

   IMÁGENES Y ARCHIVOS SUBIDOS
   - En Vercel: Vercel Blob (Storage → Create → Blob). La imagen queda
     disponible al instante con su propia dirección.
       BLOB_READ_WRITE_TOKEN → la agrega Vercel sola al crear el Blob.
   - En la compu: public/subidas.
   ========================================================= */
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPO
  || (process.env.VERCEL_GIT_REPO_OWNER && `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`);
const RAMA = process.env.GITHUB_RAMA || process.env.VERCEL_GIT_COMMIT_REF || 'main';
const EN_VERCEL = Boolean(process.env.VERCEL);

export const modo = () => (TOKEN ? 'github' : EN_VERCEL ? 'sin-configurar' : 'local');

const errorConEstado = (mensaje, estado = 500) => Object.assign(new Error(mensaje), { estado });

const exigirConfiguracion = () => {
  if (modo() === 'sin-configurar') {
    throw errorConEstado('Falta configurar GITHUB_TOKEN en Vercel (Settings → Environment Variables). Sin eso el panel no puede guardar.', 503);
  }
  if (modo() === 'github' && !REPO) throw errorConEstado('Falta GITHUB_REPO (usuario/repositorio).', 503);
};

/* ---------- Solo se toca lo que corresponde ---------- */
export const rutaPermitida = (ruta = '') => /^contenido\/(paginas\/[a-z0-9][a-z0-9-]{0,60}\.json|ajustes\.json)$/.test(ruta);

/* ---------- GitHub: pedido genérico a la API ---------- */
const github = async (ruta, opciones = {}) => {
  const respuesta = await fetch(`https://api.github.com/repos/${REPO}${ruta}`, {
    ...opciones,
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'thinkion-admin',
      ...(opciones.body ? { 'Content-Type': 'application/json' } : {}),
      ...opciones.headers,
    },
  });
  if (respuesta.status === 404 && opciones.permitir404) return null;
  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    throw errorConEstado(`GitHub respondió ${respuesta.status}: ${detalle.slice(0, 200)}`, [409, 422].includes(respuesta.status) ? 409 : 502);
  }
  return opciones.crudo ? respuesta.text() : respuesta.json();
};

/* ---------- Leer un archivo de contenido (siempre lo último guardado) ---------- */
export const leerArchivo = async (ruta) => {
  exigirConfiguracion();
  if (modo() === 'github') {
    return github(`/contents/${ruta}?ref=${encodeURIComponent(RAMA)}`, {
      crudo: true, permitir404: true, headers: { Accept: 'application/vnd.github.raw+json' },
    });
  }
  try { return await readFile(path.join(/*turbopackIgnore: true*/ process.cwd(), ruta), 'utf8'); } catch { return null; }
};

/* ---------- Listar las páginas guardadas ---------- */
export const listarPaginasGuardadas = async () => {
  exigirConfiguracion();
  let nombres;
  if (modo() === 'github') {
    const lista = await github(`/contents/contenido/paginas?ref=${encodeURIComponent(RAMA)}`, { permitir404: true });
    nombres = (lista || []).map((archivo) => archivo.name);
  } else {
    nombres = await readdir(path.join(/*turbopackIgnore: true*/ process.cwd(), 'contenido/paginas')).catch(() => []);
  }
  return nombres.filter((n) => n.endsWith('.json')).map((n) => n.replace(/\.json$/, ''));
};

/* ---------- Guardar (y borrar) archivos en un solo paso ----------
   archivos: { "contenido/paginas/inicio.json": "…texto…", "contenido/paginas/vieja.json": null }
   null = borrar el archivo. */
export const guardarArchivos = async (archivos, mensaje) => {
  exigirConfiguracion();
  for (const ruta of Object.keys(archivos)) {
    if (!rutaPermitida(ruta)) throw errorConEstado(`No se puede escribir ${ruta}`, 400);
  }

  if (modo() === 'local') {
    for (const [ruta, texto] of Object.entries(archivos)) {
      const destino = path.join(/*turbopackIgnore: true*/ process.cwd(), ruta);
      if (texto === null) await unlink(destino).catch(() => {});
      else {
        await mkdir(path.dirname(destino), { recursive: true });
        await writeFile(destino, texto);
      }
    }
    return { commit: null };
  }

  // Un solo commit con todos los cambios (Git Data API). Si alguien
  // publicó justo antes y la rama se movió, se reintenta una vez.
  const arbol = await Promise.all(Object.entries(archivos).map(async ([ruta, texto]) => {
    if (texto === null) return { path: ruta, mode: '100644', type: 'blob', sha: null };
    const { sha } = await github('/git/blobs', { method: 'POST', body: JSON.stringify({ content: texto, encoding: 'utf-8' }) });
    return { path: ruta, mode: '100644', type: 'blob', sha };
  }));

  for (let intento = 0; intento < 2; intento += 1) {
    const ref = await github(`/git/ref/heads/${encodeURIComponent(RAMA)}`);
    const padre = await github(`/git/commits/${ref.object.sha}`);
    const nuevoArbol = await github('/git/trees', { method: 'POST', body: JSON.stringify({ base_tree: padre.tree.sha, tree: arbol }) });
    const commit = await github('/git/commits', {
      method: 'POST',
      body: JSON.stringify({ message: mensaje, tree: nuevoArbol.sha, parents: [ref.object.sha] }),
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

/* ---------- Subir una imagen o un archivo ---------- */
export const subirArchivo = async (nombre, buffer, tipo) => {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import('@vercel/blob');
    const { url } = await put(`subidas/${nombre}`, buffer, { access: 'public', contentType: tipo, addRandomSuffix: true });
    return { url };
  }
  if (EN_VERCEL) {
    throw errorConEstado('Para subir imágenes falta activar Vercel Blob: en Vercel → Storage → Create → Blob, conectalo al proyecto y volvé a publicar.', 503);
  }
  const destino = path.join(/*turbopackIgnore: true*/ process.cwd(), 'public/subidas', nombre);
  await mkdir(path.dirname(destino), { recursive: true });
  await writeFile(destino, buffer);
  return { url: `/subidas/${nombre}` };
};
