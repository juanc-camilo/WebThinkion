/* =========================================================
   NEXT.JS — configuración del sitio
   - Direcciones viejas (/index.html, /src/views/check.html) llevan a
     las nuevas (/ y /check), así no se rompen links guardados.
   ========================================================= */
/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/src/views/:pagina.html', destination: '/:pagina', permanent: true },
      { source: '/admin/', destination: '/admin', permanent: false },
    ];
  },
  async headers() {
    return [
      { source: '/admin/:ruta*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/api/:ruta*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
    ];
  },
  // Las imágenes subidas se guardan en Vercel Blob
  images: { unoptimized: true },
};

export default config;
