/* =========================================================
   CONFIGURACIÓN DE PUCK — qué bloques hay y cómo se agrupan en el panel.
   La usan el editor (/admin) y la web publicada (app/(sitio)).
   Para sumar un bloque nuevo: crealo en puck/bloques/, importalo acá,
   agregalo a "components" y a una categoría.
   ========================================================= */
import * as Inicio from './bloques/inicio';
import * as Producto from './bloques/producto';
import * as Industria from './bloques/industria';
import * as Institucional from './bloques/institucional';
import * as Genericos from './bloques/genericos';
import Pagina, { PLANTILLAS } from './marco/Pagina';
import { texto, parrafo, opciones } from './campos';

const { BLOQUES_INTERNOS, ...BloquesGenericos } = Genericos;
const { pestanaAbierta, ...BloquesInicio } = Inicio;

export const config = {
  categories: {
    armar: {
      title: 'Armar secciones',
      components: ['Seccion', 'Columnas', 'Titulo', 'Texto', 'Imagen', 'Boton', 'Video', 'Carrusel', 'Espacio'],
      defaultExpanded: true,
    },
    inicio: {
      title: 'Secciones del Home',
      components: ['HeroInicio', 'Diferenciales', 'DiagramaSoluciones', 'Industrias', 'ClientesCarrusel', 'PreguntasFrecuentes', 'Separador', 'LlamadoFinal'],
    },
    producto: {
      title: 'Secciones de producto',
      components: ['HeroProducto', 'MediaProducto', 'Ventajas', 'Mockup', 'Logos', 'Funciones', 'Integraciones'],
    },
    industria: {
      title: 'Secciones de industria',
      components: ['HeroIndustria', 'ModulosPestanas', 'HojaDeRuta', 'Calidad', 'Tecnologia', 'Productos'],
    },
    institucional: {
      title: 'Institucional y formularios',
      components: ['HeroNosotros', 'Valores', 'Evolucion', 'TextoLargo', 'GrillaClientes', 'BotonFlotante', 'FormularioDemo', 'FormularioEmpleo', 'EnConstruccion'],
    },
  },
  components: {
    ...BloquesGenericos,
    ...BloquesInicio,
    ...Producto,
    ...Industria,
    ...Institucional,
  },
  root: {
    fields: {
      titulo: texto('Título (pestaña del navegador y Google, hasta 60 letras)', { editable: false }),
      descripcion: parrafo('Descripción para Google y al compartir (70 a 160 letras)', { editable: false }),
      plantilla: opciones('Estilo de la página (fondo y colores)', Object.entries(PLANTILLAS).map(([clave, p]) => [clave, p.label])),
      indexar: opciones('Que aparezca en Google y en las IAs', [[true, 'Sí'], [false, 'No (página en construcción o privada)']], { radio: true }),
      productoNombre: texto('Producto: nombre (opcional, para Google: "Thinkion POS & ERP")', { editable: false }),
      productoDescripcion: parrafo('Producto: descripción corta (opcional)', { editable: false }),
    },
    defaultProps: { titulo: 'Thinkion', descripcion: '', plantilla: 'producto', indexar: true, productoNombre: '', productoDescripcion: '' },
    render: Pagina,
  },
};

export default config;
