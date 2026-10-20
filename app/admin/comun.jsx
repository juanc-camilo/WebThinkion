'use client';
/* =========================================================
   PIEZAS COMUNES DEL PANEL: pedidos a /api, ingreso y avisos.
   ========================================================= */
import { useEffect, useState } from 'react';

// Pedido a la API del panel. Si la sesión venció, avisa con estado 401.
export const api = async (ruta, { metodo = 'GET', cuerpo } = {}) => {
  const respuesta = await fetch(`/api/${ruta}`, {
    method: metodo,
    credentials: 'same-origin',
    headers: cuerpo ? { 'Content-Type': 'application/json' } : {},
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  });
  const datos = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) throw Object.assign(new Error(datos.error || `Error ${respuesta.status}`), { estado: respuesta.status });
  return datos;
};

/* ---------- Sesión: devuelve el estado y muestra el ingreso si hace falta ---------- */
export function useSesion() {
  const [sesion, setSesion] = useState(null); // null = cargando
  const revisar = () => api('sesion').then(setSesion).catch(() => setSesion({ conectado: false, error: true }));
  useEffect(() => { revisar(); }, []);
  return [sesion, revisar];
}

export function Ingreso({ alEntrar, error: errorInicial }) {
  const [error, setError] = useState(errorInicial ? 'No se pudo conectar con el servidor del panel.' : '');
  const [enviando, setEnviando] = useState(false);
  const enviar = async (evento) => {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);
    setEnviando(true);
    setError('');
    try {
      await api('login', { metodo: 'POST', cuerpo: { usuario: datos.get('usuario'), clave: datos.get('clave') } });
      alEntrar();
    } catch (e) {
      setError(e.message);
    } finally {
      setEnviando(false);
    }
  };
  return (
    <main className="a-centro">
      <form className="a-tarjeta" onSubmit={enviar}>
        <img src="/img/home/logo-thinkion-oscuro.svg" alt="Thinkion" width="189" height="33" />
        <h1>Panel de administración</h1>
        <label className="a-campo">Usuario<input name="usuario" autoComplete="username" required autoFocus /></label>
        <label className="a-campo">Contraseña<input name="clave" type="password" autoComplete="current-password" required /></label>
        <p className="a-error" role="alert">{error}</p>
        <button className="a-btn a-btn--primario" type="submit" disabled={enviando}>{enviando ? 'Entrando…' : 'Ingresar'}</button>
      </form>
    </main>
  );
}

/* ---------- Aviso corto abajo de la pantalla ---------- */
export function useToast() {
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), toast.duracion || 4000);
    return () => clearTimeout(t);
  }, [toast]);
  const mostrar = (mensaje, opciones = {}) => setToast({ mensaje, ...opciones });
  const nodo = toast ? <div className={`a-toast${toast.error ? ' a-toast--error' : ''}`} role="status">{toast.mensaje}</div> : null;
  return [mostrar, nodo];
}

/* ---------- Aviso si el guardado no está configurado ---------- */
export function AvisoConfiguracion({ sesion }) {
  if (!sesion) return null;
  const avisos = [];
  if (sesion.modo === 'sin-configurar') avisos.push('Falta configurar GITHUB_TOKEN en Vercel: se puede editar, pero no publicar.');
  if (sesion.imagenes === 'sin-configurar') avisos.push('Para subir imágenes falta Vercel Blob. Si ya lo conectaste, falta un Redeploy: Vercel → Deployments → el último → ⋯ → Redeploy (la conexión se toma recién en el deploy siguiente). Si no: Storage → Create → Blob → conectarlo al proyecto. Mientras tanto se pueden elegir las imágenes que ya tiene el sitio.');
  if (sesion.modo === 'local') avisos.push('Estás en la compu: lo que publiques se guarda directo en los archivos del proyecto.');
  return avisos.map((a) => <p className="a-aviso" key={a}>{a}</p>);
}
