'use client';
/* =========================================================
   CAMPOS PROPIOS DEL PANEL (se dibujan en el navegador)
   - CampoImagen: vista previa, subir (se pasa a WebP) y elegir del sitio.
   - CampoLink: página del sitio o dirección escrita.
   - ListaDePaginas: sugerencias para el campo link.
   ========================================================= */
import { useEffect, useState } from 'react';

/* ---------- Estilos compartidos de los campos propios ---------- */
const estilos = {
  caja: { display: 'grid', gap: 8 },
  vista: { width: '100%', maxHeight: 140, objectFit: 'contain', borderRadius: 6, background: 'repeating-conic-gradient(#eee 0 25%, #fff 0 50%) 0 0 / 14px 14px', border: '1px solid #ddd' },
  fila: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  boton: { padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6, background: '#fff', cursor: 'pointer', fontSize: 13 },
  input: { width: '100%', padding: '7px 9px', border: '1px solid #ccc', borderRadius: 6, fontSize: 13, boxSizing: 'border-box' },
  ayuda: { fontSize: 12, color: '#666', margin: 0 },
  error: { fontSize: 12, color: '#c9373d', margin: 0 },
  biblioteca: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, maxHeight: 260, overflowY: 'auto', padding: 4, border: '1px solid #ddd', borderRadius: 6 },
  miniatura: { width: '100%', aspectRatio: '1', objectFit: 'contain', border: '1px solid #eee', borderRadius: 4, background: '#fafafa', cursor: 'pointer', padding: 2 },
};

/* ---------- Subir una imagen: se achica y pasa a WebP en el navegador ---------- */
const aWebp = async (archivo, maximo = 2400) => {
  if (/\.(svg|gif)$/i.test(archivo.name)) return { blob: archivo, nombre: archivo.name };
  const imagen = await createImageBitmap(archivo);
  const escala = Math.min(1, maximo / Math.max(imagen.width, imagen.height));
  const lienzo = document.createElement('canvas');
  lienzo.width = Math.round(imagen.width * escala);
  lienzo.height = Math.round(imagen.height * escala);
  lienzo.getContext('2d').drawImage(imagen, 0, 0, lienzo.width, lienzo.height);
  const blob = await new Promise((listo) => lienzo.toBlob(listo, 'image/webp', 0.85));
  return { blob, nombre: archivo.name.replace(/\.[^.]+$/, '') + '.webp' };
};

export const subirArchivo = async (archivo, { convertir = true } = {}) => {
  const { blob, nombre } = convertir ? await aWebp(archivo) : { blob: archivo, nombre: archivo.name };
  const datos = new FormData();
  datos.append('archivo', blob, nombre);
  const respuesta = await fetch('/api/subir', { method: 'POST', body: datos });
  const resultado = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) throw new Error(resultado.error || 'No se pudo subir el archivo');
  return resultado.url;
};

/* Lista de imágenes del sitio (la arma scripts/preparar.mjs) + las subidas al Blob */
let cacheBiblioteca = null;
const cargarBiblioteca = async () => {
  if (cacheBiblioteca) return cacheBiblioteca;
  const [sitio, subidas] = await Promise.all([
    fetch('/estilos/imagenes.json').then((r) => r.json()).catch(() => []),
    fetch('/api/subir').then((r) => r.json()).then((r) => r.imagenes || []).catch(() => []),
  ]);
  cacheBiblioteca = [...subidas, ...sitio];
  return cacheBiblioteca;
};

/* ---------- Campo IMAGEN ---------- */
export function CampoImagen({ value, onChange, field, readOnly }) {
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [verBiblioteca, setVerBiblioteca] = useState(false);
  const [biblioteca, setBiblioteca] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => { if (verBiblioteca) cargarBiblioteca().then(setBiblioteca); }, [verBiblioteca]);

  const elegirArchivo = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      const archivo = input.files?.[0];
      if (!archivo) return;
      setError('');
      setEstado('Subiendo…');
      try {
        onChange(await subirArchivo(archivo));
        cacheBiblioteca = null;
        setEstado('');
      } catch (e) {
        setError(e.message);
        setEstado('');
      }
    };
    input.click();
  };

  const filtradas = biblioteca.filter((ruta) => ruta.toLowerCase().includes(filtro.toLowerCase())).slice(0, 120);

  return (
    <div style={estilos.caja}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{field.label}</span>
      {value ? <img src={value} alt="" style={estilos.vista} /> : <p style={estilos.ayuda}>Sin imagen</p>}
      {!readOnly && (
        <div style={estilos.fila}>
          <button type="button" style={estilos.boton} onClick={elegirArchivo}>⬆️ Subir</button>
          <button type="button" style={estilos.boton} onClick={() => setVerBiblioteca(!verBiblioteca)}>🖼️ Elegir del sitio</button>
          {value && field.opcional !== false && <button type="button" style={estilos.boton} onClick={() => onChange('')}>Quitar</button>}
        </div>
      )}
      {estado && <p style={estilos.ayuda}>{estado}</p>}
      {error && <p style={estilos.error}>{error}</p>}
      {verBiblioteca && (
        <>
          <input style={estilos.input} placeholder="Buscar (ej.: logo, icono)…" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
          <div style={estilos.biblioteca}>
            {filtradas.map((ruta) => (
              <img key={ruta} src={ruta} alt={ruta} title={ruta.split('/').pop()} style={estilos.miniatura} loading="lazy"
                onClick={() => { onChange(ruta); setVerBiblioteca(false); }} />
            ))}
            {!filtradas.length && <p style={estilos.ayuda}>No hay imágenes con ese nombre.</p>}
          </div>
        </>
      )}
    </div>
  );
}
/* ---------- Campo LINK ---------- */
export function CampoLink({ value = '', onChange, field, readOnly }) {
  return (
    <label style={estilos.caja}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{field.label}</span>
      <input style={estilos.input} list="paginas-del-sitio" value={value} readOnly={readOnly}
        placeholder="/demo o https://…" onChange={(e) => onChange(e.target.value)} />
      <p style={estilos.ayuda}>Elegí una página de la lista o pegá una dirección (https://…, mailto:…, un video de YouTube, Vimeo o Drive).</p>
    </label>
  );
}
/* Lista de páginas para el campo link: la pinta una sola vez el editor */
export function ListaDePaginas({ paginas = [] }) {
  return (
    <datalist id="paginas-del-sitio">
      {paginas.map(({ ruta, titulo }) => <option key={ruta} value={ruta}>{titulo}</option>)}
      <option value="#">Sin link</option>
    </datalist>
  );
}

/* ---------- Campo FECHA (calendario) ---------- */
export function CampoFecha({ value = '', onChange, field, readOnly }) {
  return (
    <label style={estilos.caja}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{field.label}</span>
      <div style={estilos.fila}>
        <input type="date" style={{ ...estilos.input, flex: 1 }} value={value} readOnly={readOnly} onChange={(e) => onChange(e.target.value)} />
        {value && !readOnly && <button type="button" style={estilos.boton} onClick={() => onChange('')}>Sin fecha</button>}
      </div>
    </label>
  );
}

/* ---------- Campo COLOR libre (para el banner) ---------- */
export function CampoColor({ value = '', onChange, field, readOnly }) {
  const valido = /^#[0-9a-f]{6}$/i.test(value);
  return (
    <label style={estilos.caja}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{field.label}</span>
      <div style={estilos.fila}>
        <input type="color" value={valido ? value : '#ffffff'} disabled={readOnly} onChange={(e) => onChange(e.target.value)}
          style={{ width: 44, height: 34, padding: 2, border: '1px solid #ccc', borderRadius: 6, background: '#fff' }} />
        <input style={{ ...estilos.input, flex: 1 }} value={value} readOnly={readOnly} placeholder="Automático" onChange={(e) => onChange(e.target.value.trim())} />
        {value && !readOnly && <button type="button" style={estilos.boton} onClick={() => onChange('')}>✕</button>}
      </div>
    </label>
  );
}
