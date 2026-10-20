/* =========================================================
   LAYOUT DEL PANEL (/admin) — aparte de la web: carga los estilos de
   Puck y los del panel, no los del sitio (esos se cargan solo dentro
   de la vista previa del editor).
   ========================================================= */
import '@puckeditor/core/puck.css';
import './admin.css';

export const metadata = {
  title: 'Panel de administración · Thinkion',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.ico' },
};

export default function LayoutAdmin({ children }) {
  return (
    <html lang="es">
      <body className="admin">{children}</body>
    </html>
  );
}
