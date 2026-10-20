/* =========================================================
   SEO Y DATOS PARA IAs — título, descripción, dirección oficial
   (canonical), Open Graph y datos estructurados (JSON-LD).
   Salen de los datos de cada página (panel → "Página") y de los
   ajustes generales (panel → Ajustes → Datos de la empresa).
   Las preguntas frecuentes se leen de los bloques "Preguntas
   frecuentes" de la página: se editan en un solo lugar.
   ========================================================= */
const sinEtiquetas = (html = '') => String(html)
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

export const dominioDe = (ajustes = {}) => String(ajustes.sitio?.dominio || 'https://webthinkion.vercel.app').replace(/\/+$/, '');

export const metadatosDePagina = ({ datos, ajustes, ruta }) => {
  const props = datos?.root?.props || {};
  const sitio = ajustes.sitio || {};
  const dominio = dominioDe(ajustes);
  const url = `${dominio}${ruta}`;
  const titulo = props.titulo || sitio.nombre || 'Thinkion';
  const descripcion = props.descripcion || sitio.descripcion || '';
  const imagen = sitio.imagenCompartir ? new URL(sitio.imagenCompartir, `${dominio}/`).href : undefined;
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: url },
    robots: props.indexar === false ? { index: false, follow: true } : undefined,
    openGraph: {
      type: 'website',
      siteName: sitio.nombre || 'Thinkion',
      locale: 'es_AR',
      title: titulo,
      description: descripcion,
      url,
      images: imagen ? [{ url: imagen, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: 'summary_large_image' },
  };
};

// Recorre todos los bloques (también los que están adentro de secciones y columnas)
const recorrer = (bloques = [], visitar) => {
  for (const b of bloques) {
    visitar(b);
    for (const valor of Object.values(b.props || {})) {
      if (Array.isArray(valor) && valor.every((v) => v && typeof v === 'object' && 'type' in v)) recorrer(valor, visitar);
    }
  }
};

export const preguntasDePagina = (datos) => {
  const preguntas = [];
  recorrer(datos?.content, (b) => {
    if (b.type !== 'PreguntasFrecuentes') return;
    for (const c of b.props.categorias || []) {
      for (const p of c.preguntas || []) {
        if (p.pregunta && p.respuesta) preguntas.push({ pregunta: sinEtiquetas(p.pregunta), respuesta: sinEtiquetas(p.respuesta) });
      }
    }
  });
  return preguntas;
};

export const datosEstructurados = ({ datos, ajustes, ruta }) => {
  const props = datos?.root?.props || {};
  const sitio = ajustes.sitio || {};
  const dominio = dominioDe(ajustes);
  const grafo = [
    {
      '@type': 'Organization',
      '@id': `${dominio}/#org`,
      name: sitio.nombre || 'Thinkion',
      legalName: sitio.razonSocial || undefined,
      url: `${dominio}/`,
      description: sitio.descripcion || undefined,
      logo: `${dominio}/img/home/logo-thinkion-oscuro.svg`,
      email: sitio.email || undefined,
      areaServed: 'AR',
      sameAs: (sitio.redes || []).map((r) => r.link).filter(Boolean),
    },
    {
      '@type': 'WebSite',
      '@id': `${dominio}/#web`,
      name: sitio.nombre || 'Thinkion',
      url: `${dominio}/`,
      inLanguage: 'es-AR',
      publisher: { '@id': `${dominio}/#org` },
    },
  ];
  if (props.productoNombre) {
    grafo.push({
      '@type': 'SoftwareApplication',
      name: props.productoNombre,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      description: props.productoDescripcion || props.descripcion || undefined,
      url: `${dominio}${ruta}`,
      publisher: { '@id': `${dominio}/#org` },
    });
  }
  const preguntas = preguntasDePagina(datos);
  if (preguntas.length) {
    grafo.push({
      '@type': 'FAQPage',
      mainEntity: preguntas.map((p) => ({ '@type': 'Question', name: p.pregunta, acceptedAnswer: { '@type': 'Answer', text: p.respuesta } })),
    });
  }
  // "<" escapado: evita cerrar el <script> por accidente
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(/</g, '\\u003c');
};
