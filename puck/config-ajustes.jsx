/* =========================================================
   AJUSTES GENERALES — lo que se comparte entre todas las páginas:
   menú, banner de bienvenida, temporadas (colores), footer y datos
   de la empresa.
   Se edita con Puck igual que una página: a la derecha los campos,
   en el centro la vista previa (menú, banner y footer en vivo).
   Se guarda en contenido/ajustes.json.
   ========================================================= */
import { texto, parrafo, imagen, link, lista, grupo, opciones, numero, fecha, colorLibre } from './campos';
import Navbar from './marco/Navbar';
import Footer from './marco/Footer';
import { cssTemporadas, idTemporada, temporadaActiva } from './marco/temporadas';

const camposMenu = grupo('Menú', {
  items: lista('Opciones del menú', {
    tipo: opciones('Tipo', [['link', 'Link'], ['desplegable', 'Desplegable (con opciones)']], { radio: true }),
    texto: texto('Texto', { editable: false }),
    link: link('Lleva a (solo links)'),
    estilo: opciones('Estilo del desplegable', [['soluciones', 'Con lista debajo (como Soluciones)'], ['industrias', 'Con texto debajo (como Industrias)']]),
    opciones: lista('Opciones del desplegable', {
      titulo: texto('Título', { editable: false }),
      icono: imagen('Ícono'),
      link: link('Lleva a'),
      detalle: parrafo('Debajo: una línea por renglón (lista) o un texto', { editable: false }),
    }, { resumen: 'titulo', nuevo: { titulo: 'Nueva opción', icono: '/img/home/menu-pos.svg', link: '/', detalle: '' } }),
  }, { resumen: 'texto', nuevo: { tipo: 'link', texto: 'Nuevo', link: '/', estilo: 'soluciones', opciones: [] } }),
  botonTexto: texto('Botón de la derecha: texto (vacío = sin botón)', { editable: false }),
  botonLink: link('Botón de la derecha: lleva a'),
});

const camposFooter = grupo('Pie de página (footer)', {
  logo: imagen('Logo'),
  sellos: imagen('Sellos / certificaciones'),
  sellosAlt: texto('Descripción de los sellos', { editable: false }),
  columnas: lista('Columnas de links', {
    titulo: texto('Título', { editable: false }),
    links: lista('Links', { texto: texto('Texto', { editable: false }), link: link('Lleva a') }, { resumen: 'texto', nuevo: { texto: 'Nuevo link', link: '/' } }),
  }, { resumen: 'titulo', nuevo: { titulo: 'Columna', links: [] } }),
  contactoTitulo: texto('Título de contacto', { editable: false }),
  email: texto('Mail de contacto', { editable: false }),
  redes: lista('Redes sociales', { nombre: texto('Nombre (ej.: Instagram)', { editable: false }), link: link('Dirección'), icono: imagen('Ícono') },
    { resumen: 'nombre', nuevo: { nombre: 'Red', link: 'https://', icono: '' } }),
  copyright: texto('Texto final (copyright)', { editable: false }),
});

/* ---------- Banner al entrar a la web ----------
   Va aparte de las temporadas (antes estaba adentro de cada una y
   costaba encontrarlo). Tiene sus propias fechas: se prende y se
   apaga solo. */
const camposBanner = grupo('Banner al entrar a la web', {
  activo: opciones('Mostrar banner', [[true, 'Sí'], [false, 'No']], { radio: true }),
  desde: fecha('Desde (vacío = ya)'),
  hasta: fecha('Hasta (vacío = sin fin)'),
  titulo: texto('Título', { editable: false }),
  texto: parrafo('Texto', { editable: false }),
  imagen: imagen('Imagen (opcional)'),
  imagenAlt: texto('Descripción de la imagen', { editable: false }),
  botonTexto: texto('Texto del botón (vacío = sin botón)', { editable: false }),
  botonLink: link('El botón lleva a'),
  colorFondo: colorLibre('Color de fondo'),
  colorTexto: colorLibre('Color de la letra'),
  colorBoton: colorLibre('Color del botón'),
  frecuencia: opciones('Cada cuánto se muestra', [['sesion', 'Una vez por visita'], ['dia', 'Una vez por día'], ['una-vez', 'Una sola vez'], ['siempre', 'Siempre']]),
  paginas: opciones('Dónde', [['todas', 'En todas las páginas'], ['home', 'Solo en la Home']]),
  retraso: numero('Aparece a los (segundos)', { min: 0, max: 30 }),
});

const camposTemporadas = grupo('Temporadas (colores)', {
  activa: texto('Forzar una temporada (escribí su nombre; vacío = automática por fechas)', { editable: false }),
  lista: lista('Temporadas', {
    nombre: texto('Nombre (ej.: Navidad 2026)', { editable: false }),
    desde: fecha('Desde'),
    hasta: fecha('Hasta'),
    colores: grupo('Colores (vacío = los de siempre)', {
      botones: colorLibre('Botones (coral)'),
      acento: colorLibre('Acento (violeta)'),
      titulos: colorLibre('Títulos (azul)'),
      fondo: colorLibre('Fondo de las páginas'),
    }),
  }, {
    resumen: 'nombre',
    nuevo: { nombre: 'Nueva temporada', desde: '', hasta: '', colores: { botones: '', acento: '', titulos: '', fondo: '' } },
  }),
});

const camposSitio = grupo('Datos de la empresa (Google, IAs y al compartir)', {
  nombre: texto('Nombre', { editable: false }),
  razonSocial: texto('Razón social', { editable: false }),
  descripcion: parrafo('Qué es Thinkion (una o dos oraciones)', { editable: false }),
  email: texto('Mail', { editable: false }),
  dominio: texto('Dirección del sitio (ej.: https://www.thinkion.com.ar)', { editable: false }),
  imagenCompartir: imagen('Imagen al compartir el link (1200 × 630)'),
  redes: lista('Perfiles en redes', { nombre: texto('Red', { editable: false }), link: link('Dirección') }, { resumen: 'nombre', nuevo: { nombre: 'Red', link: 'https://' } }),
});

/* ---------- Vista previa: menú, colores de la temporada, banner y footer ---------- */
function VistaAjustes({ menu, footer, temporadas, banner }) {
  const lista = temporadas?.lista || [];
  const activa = temporadaActiva(temporadas);
  const actual = lista.find((t) => idTemporada(t.nombre) === activa);
  return (
    <div className="pagina-home" data-temporada={activa || undefined}>
      <style dangerouslySetInnerHTML={{ __html: cssTemporadas(temporadas).replace(/html\[data-temporada=/g, '[data-temporada=') }} />
      <div className="fondo-deco" aria-hidden="true"><img className="fondo-deco__hero" src="/img/home/fondo-hero.svg" alt="" width="2065" height="1564" /></div>
      <Navbar menu={menu} rutaActual="" eventos={{ onClickCapture: (e) => { if (e.target.closest('a')) e.preventDefault(); } }} />
      <main className="home" style={{ padding: '60px 16px 120px', display: 'grid', gap: 32, justifyItems: 'center' }}>
        <div style={{ color: '#fff', textAlign: 'center', maxWidth: 640 }}>
          <h1 style={{ fontSize: 40, fontWeight: 400 }}>Ajustes generales</h1>
          <p style={{ fontSize: 18, fontWeight: 300 }}>
            Lo que cambies acá se aplica en <strong>todas las páginas</strong>. Hoy está activa:{' '}
            <strong>{actual?.nombre || 'ninguna temporada'}</strong>.
          </p>
          <p style={{ marginTop: 16 }}><a className="boton" href="/demo">Así se ve un botón</a></p>
        </div>
        {banner?.activo ? (
          <div className="banner-temporada" style={{ position: 'static', display: 'block', '--banner-fondo': banner.colorFondo || '#fff', '--banner-texto': banner.colorTexto || '#1b1b1b', '--banner-boton': banner.colorBoton || '#c9373d' }}>
            {banner.imagen && <img className="banner-temporada__imagen" src={banner.imagen} alt="" />}
            <div className="banner-temporada__cuerpo">
              {banner.titulo && <h2>{banner.titulo}</h2>}
              {banner.texto && <p>{banner.texto}</p>}
              {banner.botonTexto && <span className="banner-temporada__boton">{banner.botonTexto}</span>}
            </div>
          </div>
        ) : (
          <p style={{ background: 'rgba(255,255,255,.85)', borderRadius: 16, padding: '16px 24px', maxWidth: 520, textAlign: 'center' }}>
            El banner está apagado. Para mostrarlo: a la derecha, <strong>Banner al entrar a la web → Mostrar banner: Sí</strong>.
          </p>
        )}
      </main>
      <Footer footer={footer} eventos={{ onClickCapture: (e) => { if (e.target.closest('a')) e.preventDefault(); } }} />
    </div>
  );
}

export const configAjustes = {
  components: {},
  root: {
    fields: { menu: camposMenu, banner: camposBanner, temporadas: camposTemporadas, footer: camposFooter, sitio: camposSitio },
    render: VistaAjustes,
  },
};
