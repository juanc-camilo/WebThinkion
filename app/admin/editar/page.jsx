'use client';
/* =========================================================
   EDITOR (/admin/editar?pagina=check) — Puck en español.
   - Izquierda: bloques para arrastrar a la página (y el esquema).
   - Centro: la página tal cual se ve en la web (celular, tablet o escritorio).
   - Derecha: los campos del bloque elegido (o de la página).
   - Publicar: guarda en GitHub y Vercel publica en 1 o 2 minutos.
   Mientras editás, se guarda un borrador en este navegador: si cerrás
   sin publicar, al volver te ofrece recuperarlo.
   ?pagina=_ajustes edita los Ajustes generales (menú, footer, temporadas).
   ========================================================= */
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Puck } from '@puckeditor/core';
import { config } from '@/puck/config';
import { configAjustes } from '@/puck/config-ajustes';
import { ListaDePaginas } from '@/puck/campos-ui';
import { api, useSesion, Ingreso, useToast } from '../comun';

/* ---------- Interfaz de Puck en español ---------- */
const DICCIONARIO = {
  'header-publish': 'Publicar',
  'header-undo': 'Deshacer',
  'header-redo': 'Rehacer',
  'header-toggle-leftsidebar': 'Mostrar u ocultar bloques',
  'header-toggle-rightsidebar': 'Mostrar u ocultar campos',
  'header-toggle-menubar': 'Mostrar u ocultar menú',
  'action-selectparent': 'Elegir el bloque que lo contiene',
  'action-duplicate': 'Duplicar',
  'action-delete': 'Borrar',
  'label-page': 'Página',
  'label-component': 'Bloque',
  'outline-empty': 'Todavía no hay bloques',
  'outline-item-collapse': 'Contraer',
  'outline-item-expand': 'Expandir',
  'outline-header-title': 'Esquema',
  'outline-header-collapseall': 'Contraer todo',
  'outline-item-duplicate': 'Duplicar',
  'outline-item-delete': 'Borrar',
  'drawer-category-collapse': 'Contraer {title}',
  'drawer-category-expand': 'Expandir {title}',
  'drawer-category-other': 'Otros',
  'canvas-noconfig': 'Bloque desconocido: {type}',
  'field-readonly': 'Solo lectura',
  'field-arrayitem-summary': 'Elemento {index}',
  'field-arrayitem-duplicate': 'Duplicar',
  'field-arrayitem-delete': 'Borrar',
  'field-external-selectdata': 'Elegir',
  'field-external-search': 'Buscar',
  'field-external-togglefilters': 'Filtros',
  'field-external-item': 'Elemento',
  'field-external-result-singular': '{count} resultado',
  'field-external-result-plural': '{count} resultados',
  'field-richtext-bold': 'Negrita',
  'field-richtext-italic': 'Cursiva',
  'field-richtext-underline': 'Subrayado',
  'field-richtext-strikethrough': 'Tachado',
  'field-richtext-blockquote': 'Cita',
  'field-richtext-code-inline': 'Código',
  'field-richtext-code-block': 'Bloque de código',
  'field-richtext-list-bullet': 'Lista con viñetas',
  'field-richtext-list-ordered': 'Lista numerada',
  'field-richtext-horizontalrule': 'Línea',
  'field-richtext-align-left': 'Alinear a la izquierda',
  'field-richtext-align-center': 'Centrar',
  'field-richtext-align-right': 'Alinear a la derecha',
  'field-richtext-align-justify': 'Justificar',
  'field-richtext-select': 'Elegir',
  'field-richtext-headingselect-1': 'Título 1',
  'field-richtext-headingselect-2': 'Título 2',
  'field-richtext-headingselect-3': 'Título 3',
  'field-richtext-headingselect-4': 'Título 4',
  'field-richtext-headingselect-5': 'Título 5',
  'field-richtext-headingselect-6': 'Título 6',
  'field-richtext-alignselect-left': 'Izquierda',
  'field-richtext-alignselect-center': 'Centro',
  'field-richtext-alignselect-right': 'Derecha',
  'field-richtext-alignselect-justify': 'Justificado',
  'field-richtext-listselect-bullet': 'Viñetas',
  'field-richtext-listselect-ordered': 'Numerada',
  'viewport-zoom-in': 'Acercar',
  'viewport-zoom-out': 'Alejar',
  'viewport-zoom-auto': '{zoom}% (automático)',
  'viewport-toggle-menu': 'Tamaños de pantalla',
  'viewport-switch': 'Ver en {label}',
  'viewport-switch-default': 'Cambiar tamaño',
  'plugin-blocks': 'Bloques',
  'plugin-outline': 'Esquema',
  'plugin-fields': 'Campos',
  'plugin-components': 'Bloques',
  'layout-maximize': 'Maximizar',
  'layout-minimize': 'Minimizar',
  'loader-loading': 'Cargando',
};

const PANTALLAS = [
  { width: 390, height: 'auto', label: 'Celular', icon: 'Smartphone' },
  { width: 768, height: 'auto', label: 'Tablet', icon: 'Tablet' },
  { width: 1440, height: 'auto', label: 'Escritorio', icon: 'Monitor' },
];

/* La vista previa (iframe) carga la misma hoja de estilos que la web.
   Además, adentro de la vista previa los links no navegan y los
   formularios no se envían: un clic sirve para elegir el bloque. */
const noNavegar = (evento) => { if (evento.target.closest?.('a[href]')) evento.preventDefault(); };
const noEnviar = (evento) => evento.preventDefault();

function IframeConEstilos({ children, document: doc }) {
  useEffect(() => {
    if (!doc) return undefined;
    if (!doc.getElementById('estilos-sitio')) {
      const link = doc.createElement('link');
      link.id = 'estilos-sitio';
      link.rel = 'stylesheet';
      link.href = '/estilos/sitio.css';
      doc.head.append(link);
      doc.documentElement.lang = 'es';
    }
    doc.addEventListener('click', noNavegar, true);
    doc.addEventListener('submit', noEnviar, true);
    return () => {
      doc.removeEventListener('click', noNavegar, true);
      doc.removeEventListener('submit', noEnviar, true);
    };
  }, [doc]);
  return children;
}

const claveBorrador = (pagina) => `thk-borrador:${pagina}`;
const leerBorrador = (pagina) => { try { return JSON.parse(localStorage.getItem(claveBorrador(pagina)) || 'null'); } catch { return null; } };
const guardarBorrador = (pagina, datos) => { try { localStorage.setItem(claveBorrador(pagina), JSON.stringify(datos)); } catch { /* sin espacio: no pasa nada */ } };
const borrarBorrador = (pagina) => { try { localStorage.removeItem(claveBorrador(pagina)); } catch { /* nada */ } };

function Editor() {
  const pagina = useSearchParams().get('pagina') || 'inicio';
  const esAjustes = pagina === '_ajustes';
  const [sesion, revisar] = useSesion();
  const [estado, setEstado] = useState({ cargando: true });
  const [toast, nodoToast] = useToast();
  const publicado = useRef('');

  useEffect(() => {
    if (!sesion?.conectado) return;
    (async () => {
      try {
        const [{ ajustes }, { paginas }, pag] = await Promise.all([
          api('ajustes'),
          api('paginas'),
          esAjustes ? Promise.resolve(null) : api(`paginas?nombre=${pagina}`),
        ]);
        let datos = esAjustes ? { root: { props: ajustes }, content: [], zones: {} } : pag.datos;
        publicado.current = JSON.stringify(datos);
        // ¿Quedó un borrador sin publicar en este navegador?
        const borrador = leerBorrador(pagina);
        if (borrador && JSON.stringify(borrador) !== publicado.current
          && confirm('Hay cambios sin publicar de la última vez que editaste esta página en este navegador. ¿Recuperarlos?')) {
          datos = borrador;
        } else if (borrador) {
          borrarBorrador(pagina);
        }
        setEstado({ datos, ajustes, ruta: pag?.ruta || '/', paginas });
      } catch (e) {
        setEstado({ error: e.message });
      }
    })();
  }, [sesion?.conectado, pagina, esAjustes]);

  // Aviso al cerrar la pestaña con cambios sin publicar
  useEffect(() => {
    const avisar = (evento) => {
      const borrador = leerBorrador(pagina);
      if (borrador && JSON.stringify(borrador) !== publicado.current) evento.preventDefault();
    };
    window.addEventListener('beforeunload', avisar);
    return () => window.removeEventListener('beforeunload', avisar);
  }, [pagina]);

  const overrides = useMemo(() => ({
    iframe: IframeConEstilos,
    headerActions: ({ children }) => (
      <>
        <a className="a-btn a-btn--chico" href="/admin">← Panel</a>
        {!esAjustes && <a className="a-btn a-btn--chico" href={estado.ruta || '/'} target="_blank" rel="noopener">Ver en la web ↗</a>}
        {children}
      </>
    ),
  }), [esAjustes, estado.ruta]);

  if (!sesion) return null;
  if (!sesion.conectado) return <Ingreso alEntrar={revisar} error={sesion.error} />;
  if (estado.error) return <main className="a-centro"><div className="a-tarjeta"><p className="a-error">{estado.error}</p><a className="a-btn" href="/admin">Volver al panel</a></div></main>;
  if (estado.cargando) return <main className="a-centro"><p className="a-ayuda">Cargando la página…</p></main>;

  const publicar = async (datos) => {
    toast('Publicando…', { duracion: 30000 });
    try {
      if (esAjustes) await api('ajustes', { metodo: 'POST', cuerpo: { ajustes: datos.root.props } });
      else await api('paginas', { metodo: 'POST', cuerpo: { nombre: pagina, datos } });
      publicado.current = JSON.stringify(datos);
      borrarBorrador(pagina);
      toast(sesion.modo === 'github'
        ? '✅ Publicado. En 1 o 2 minutos se ve en la web (Vercel lo está armando).'
        : '✅ Guardado en los archivos del proyecto.', { duracion: 7000 });
    } catch (e) {
      toast(`No se pudo publicar: ${e.message}`, { error: true, duracion: 10000 });
    }
  };

  const titulo = esAjustes ? 'Ajustes generales' : (estado.paginas.find((p) => p.nombre === pagina)?.titulo || pagina);

  return (
    <>
      <ListaDePaginas paginas={estado.paginas} />
      <Puck
        config={esAjustes ? configAjustes : config}
        data={estado.datos}
        metadata={{ ajustes: estado.ajustes, ruta: estado.ruta }}
        onPublish={publicar}
        onChange={(datos) => guardarBorrador(pagina, datos)}
        dictionary={DICCIONARIO}
        viewports={PANTALLAS}
        overrides={overrides}
        // En los ajustes no hay bloques para arrastrar: sin columna izquierda
        ui={esAjustes ? { leftSideBarVisible: false } : undefined}
        headerTitle={titulo}
        headerPath={esAjustes ? 'Menú, footer, temporadas y banner' : estado.ruta}
      />
      {nodoToast}
    </>
  );
}

export default function PaginaEditor() {
  return <Suspense fallback={null}><Editor /></Suspense>;
}
