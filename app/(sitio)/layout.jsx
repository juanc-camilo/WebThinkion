/* =========================================================
   LAYOUT DE LA WEB PÚBLICA — <html>, <head> y la hoja de estilos.
   La hoja public/estilos/sitio.css la arma scripts/preparar.mjs
   uniendo los CSS de src/styles (la misma que usa el editor).
   suppressHydrationWarning: el script de temporadas agrega
   data-temporada y la clase "js" a <html> antes de que cargue React.
   ========================================================= */
export const metadata = {
  icons: { icon: '/favicon.ico' },
  other: { 'theme-color': '#7a4aeb' },
};

export default function LayoutSitio({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/outfit-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="stylesheet" href="/estilos/sitio.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
