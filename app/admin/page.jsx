'use client';
/* =========================================================
   PANEL (/admin) — lista de páginas: editar, ver, crear y borrar.
   Arriba, los Ajustes generales (menú, banner, temporadas y footer).
   Abajo, los DISEÑOS FUTUROS: el próximo diseño de una página (o una
   página nueva) que se va armando de a poco sin que se vea en la web.
   Cuando está listo, "Pasar a la web" lo publica.
   ========================================================= */
import { useEffect, useRef, useState } from 'react';
import { api, useSesion, Ingreso, useToast, AvisoConfiguracion } from './comun';
import { PLANTILLAS } from '@/puck/marco/Pagina';

const aNombre = (texto = '') => texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

export default function Panel() {
  const [sesion, revisar] = useSesion();
  const [paginas, setPaginas] = useState(null);
  const [futuros, setFuturos] = useState([]);
  const [error, setError] = useState('');
  const [toast, nodoToast] = useToast();
  const dialogo = useRef(null);
  const [nueva, setNueva] = useState({ titulo: '', nombre: '', plantilla: 'producto', copiarDe: '', version: '' });

  const cargar = () => api('paginas').then((r) => { setPaginas(r.paginas); setFuturos(r.futuros || []); }).catch((e) => setError(e.message));
  useEffect(() => { if (sesion?.conectado) cargar(); }, [sesion?.conectado]);

  if (!sesion) return null;
  if (!sesion.conectado) return <Ingreso alEntrar={revisar} error={sesion.error} />;

  const salir = async () => { await api('logout', { metodo: 'POST' }).catch(() => {}); revisar(); };

  const crear = async (evento) => {
    evento.preventDefault();
    try {
      const r = await api('paginas', { metodo: 'POST', cuerpo: { accion: 'crear', ...nueva } });
      dialogo.current.close();
      location.href = `/admin/editar?pagina=${r.nombre}${r.version === 'futuro' ? '&version=futuro' : ''}`;
    } catch (e) { toast(e.message, { error: true }); }
  };

  const borrar = async (pagina) => {
    if (!confirm(`¿Borrar la página "${pagina.titulo}" (${pagina.ruta})? Se puede recuperar desde el historial de GitHub.`)) return;
    try {
      await api(`paginas?nombre=${pagina.nombre}`, { metodo: 'DELETE' });
      toast('Página borrada. En 1 o 2 minutos deja de verse en la web.');
      cargar();
    } catch (e) { toast(e.message, { error: true }); }
  };

  const pasarALaWeb = async (f) => {
    const aviso = f.enLaWeb
      ? `¿Pasar el diseño futuro de "${f.titulo}" a la web? Reemplaza a la página que se ve hoy en ${f.ruta}. La de hoy queda en el historial de GitHub.`
      : `¿Publicar "${f.titulo}"? Es una página nueva: va a quedar en ${f.ruta}.`;
    if (!confirm(aviso)) return;
    try {
      await api('paginas', { metodo: 'POST', cuerpo: { accion: 'pasar-a-la-web', nombre: f.nombre } });
      toast('✅ Listo. En 1 o 2 minutos se ve en la web.');
      cargar();
    } catch (e) { toast(e.message, { error: true }); }
  };

  const descartar = async (f) => {
    if (!confirm(`¿Descartar el diseño futuro de "${f.titulo}"? La web no cambia. Se puede recuperar desde el historial de GitHub.`)) return;
    try {
      await api(`paginas?nombre=${f.nombre}&version=futuro`, { metodo: 'DELETE' });
      toast('Diseño futuro descartado.');
      cargar();
    } catch (e) { toast(e.message, { error: true }); }
  };

  const abrirNueva = (version = '') => {
    setNueva({ titulo: '', nombre: '', plantilla: 'producto', copiarDe: '', version });
    dialogo.current.showModal();
  };

  return (
    <>
      <header className="a-barra">
        <div className="a-barra__marca"><img src="/img/home/logo-thinkion-oscuro.svg" alt="Thinkion" width="120" height="21" /> Panel</div>
        <a className="a-btn" href="/" target="_blank" rel="noopener">Ver la web ↗</a>
        <button className="a-btn" type="button" onClick={salir}>Salir</button>
      </header>

      <div className="a-contenido">
        <AvisoConfiguracion sesion={sesion} />

        <div className="a-ajustes">
          <div>
            <strong>Ajustes generales</strong>
            <p className="a-ayuda">Menú, banner al entrar a la web, temporadas (colores), footer y datos de la empresa. Se aplican en todas las páginas.</p>
          </div>
          <a className="a-btn a-btn--primario" href="/admin/editar?pagina=_ajustes">Editar ajustes</a>
        </div>

        <h2>Páginas</h2>
        <p className="a-ayuda" style={{ marginBottom: 12 }}>
          Tocá <strong>Editar</strong> para cambiar textos, imágenes y bloques. A la izquierda del editor están los bloques: arrastralos a la página.
          Cuando termines, <strong>Publicar</strong> (arriba a la derecha): en 1 o 2 minutos se ve en la web.
        </p>
        {error && <p className="a-aviso">{error}</p>}
        <div className="a-lista">
          {(paginas || []).map((p) => (
            <div className="a-pagina" key={p.nombre}>
              <div className="a-pagina__datos">
                <div className="a-pagina__titulo">
                  {p.titulo}
                  {!p.indexar && <span className="a-insignia">fuera de Google</span>}
                  {p.futuro && <span className="a-insignia a-insignia--futuro">con diseño futuro</span>}
                </div>
                <div className="a-pagina__ruta">{p.ruta} · {p.bloques} bloques</div>
              </div>
              <div className="a-acciones">
                <a className="a-btn a-btn--primario a-btn--chico" href={`/admin/editar?pagina=${p.nombre}`}>Editar</a>
                <a className="a-btn a-btn--chico" href={p.ruta} target="_blank" rel="noopener">Ver ↗</a>
                <a className="a-btn a-btn--chico" href={`/admin/editar?pagina=${p.nombre}&version=futuro`}
                  title="Armar el próximo diseño de esta página sin que se vea en la web">
                  {p.futuro ? 'Diseño futuro' : '＋ Diseño futuro'}
                </a>
                {p.nombre !== 'inicio' && <button className="a-btn a-btn--chico a-btn--peligro" type="button" onClick={() => borrar(p)}>Borrar</button>}
              </div>
            </div>
          ))}
          {paginas === null && !error && <p className="a-ayuda">Cargando…</p>}
        </div>
        <p style={{ marginTop: 16 }}>
          <button className="a-btn" type="button" onClick={() => abrirNueva()}>＋ Página nueva</button>
        </p>

        <h2>Diseño futuro</h2>
        <p className="a-ayuda" style={{ marginBottom: 12 }}>
          El próximo diseño de una página, que se arma <strong>de a poco</strong> y <strong>no se ve en la web</strong>.
          Mientras tanto, la página de hoy se sigue editando aparte (arriba, en <strong>Editar</strong>).
          En el editor, <strong>Guardar diseño futuro</strong> guarda sin publicar; cuando esté listo, <strong>Pasar a la web</strong>.
          Para empezar uno, tocá <strong>＋ Diseño futuro</strong> en la página (arranca como copia de la de hoy).
        </p>
        <div className="a-lista">
          {futuros.map((f) => (
            <div className="a-pagina a-pagina--futuro" key={f.nombre}>
              <div className="a-pagina__datos">
                <div className="a-pagina__titulo">
                  {f.titulo}
                  {!f.enLaWeb && <span className="a-insignia a-insignia--futuro">página nueva</span>}
                </div>
                <div className="a-pagina__ruta">{f.ruta} · {f.bloques} bloques</div>
              </div>
              <div className="a-acciones">
                <a className="a-btn a-btn--primario a-btn--chico" href={`/admin/editar?pagina=${f.nombre}&version=futuro`}>Editar</a>
                <button className="a-btn a-btn--chico" type="button" onClick={() => pasarALaWeb(f)}>Pasar a la web</button>
                <button className="a-btn a-btn--chico a-btn--peligro" type="button" onClick={() => descartar(f)}>Descartar</button>
              </div>
            </div>
          ))}
          {!futuros.length && paginas !== null && <p className="a-ayuda">Todavía no hay diseños futuros.</p>}
        </div>
        <p style={{ marginTop: 16 }}>
          <button className="a-btn" type="button" onClick={() => abrirNueva('futuro')}>＋ Página nueva como diseño futuro</button>
        </p>
      </div>

      <dialog className="a-dialogo" ref={dialogo}>
        <form onSubmit={crear}>
          <h3>{nueva.version === 'futuro' ? 'Página nueva (diseño futuro)' : 'Página nueva'}</h3>
          {nueva.version === 'futuro' && <p className="a-ayuda">Se arma de a poco y no aparece en la web hasta que toques <strong>Pasar a la web</strong>.</p>}
          <label className="a-campo">Título
            <input required value={nueva.titulo} placeholder="Promo de verano"
              onChange={(e) => setNueva({ ...nueva, titulo: e.target.value, nombre: aNombre(e.target.value) })} />
          </label>
          <label className="a-campo">Dirección
            <input required pattern="[a-z0-9][a-z0-9\-]*" value={nueva.nombre} onChange={(e) => setNueva({ ...nueva, nombre: aNombre(e.target.value) })} />
            <span className="a-ayuda">Va a quedar en <strong>/{nueva.nombre || 'nombre'}</strong></span>
          </label>
          <label className="a-campo">Empezar con
            <select value={nueva.copiarDe} onChange={(e) => setNueva({ ...nueva, copiarDe: e.target.value })}>
              <option value="">Una página en blanco</option>
              {(paginas || []).map((p) => <option key={p.nombre} value={p.nombre}>Una copia de: {p.titulo}</option>)}
            </select>
          </label>
          <label className="a-campo">Estilo (fondo y colores)
            <select value={nueva.plantilla} onChange={(e) => setNueva({ ...nueva, plantilla: e.target.value })}>
              {Object.entries(PLANTILLAS).map(([clave, p]) => <option key={clave} value={clave}>{p.label}</option>)}
            </select>
          </label>
          <div className="a-acciones">
            <button className="a-btn" type="button" onClick={() => dialogo.current.close()}>Cancelar</button>
            <button className="a-btn a-btn--primario" type="submit">Crear y editar</button>
          </div>
        </form>
      </dialog>
      {nodoToast}
    </>
  );
}
