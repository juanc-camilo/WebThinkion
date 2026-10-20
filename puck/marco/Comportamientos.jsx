'use client';
/* =========================================================
   COMPORTAMIENTOS — lo que se mueve en la web publicada:
   menú (vidrio al bajar, desplegables, celular), pestañas, carrusel
   de clientes, carrusel genérico, línea de tiempo, adjuntar CV,
   filtros de clientes, "volver atrás", animación al aparecer, videos
   en ventana y banner de temporada.
   Es el mismo JavaScript que tenía el sitio (controller.js): trabaja
   sobre el HTML ya armado. En el editor de Puck no corre (ahí los
   bloques se editan, no se usan).
   ========================================================= */
import { useEffect } from 'react';

export default function Comportamientos({ temporadas }) {
  useEffect(() => {
    // Se inicia una sola vez por página (en desarrollo React lo llamaría dos veces)
    if (window.__thkComportamientos) return;
    window.__thkComportamientos = true;
    iniciar();
    iniciarCarruselesGenericos();
    iniciarVideos();
    iniciarBanner(temporadas);
  }, [temporadas]);
  return null;
}

function iniciar() {
  /* ---------- Navbar: fondo de vidrio al hacer scroll ---------- */
  const navbar = document.querySelector('[data-navbar]');
  const onScroll = () => navbar?.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú mobile (hamburguesa) ---------- */
  const hamburguesa = document.querySelector('.navbar__hamburguesa');
  hamburguesa?.addEventListener('click', () => {
    const abierto = navbar.classList.toggle('menu-abierto');
    hamburguesa.setAttribute('aria-expanded', String(abierto));
    document.body.classList.toggle('no-scroll', abierto);
  });

  /* ---------- Desplegables (Soluciones / Industrias) ---------- */
  const desplegables = document.querySelectorAll('[data-dropdown]');
  const cerrarDesplegables = (excepto) => desplegables.forEach((item) => {
    if (item === excepto) return;
    item.classList.remove('is-open');
    item.querySelector('button').setAttribute('aria-expanded', 'false');
  });
  desplegables.forEach((item) => {
    const boton = item.querySelector('button');
    boton.addEventListener('click', (evento) => {
      evento.stopPropagation();
      cerrarDesplegables(item);
      const abierto = item.classList.toggle('is-open');
      boton.setAttribute('aria-expanded', String(abierto));
    });
  });
  document.addEventListener('click', () => cerrarDesplegables());

  /* ---------- Tecla Escape: cierra desplegables y el menú mobile ---------- */
  document.addEventListener('keydown', (evento) => {
    if (evento.key !== 'Escape') return;
    cerrarDesplegables();
    // Si el menú mobile está abierto, se cierra y el foco vuelve al botón que lo abrió
    if (navbar?.classList.contains('menu-abierto')) {
      navbar.classList.remove('menu-abierto');
      hamburguesa.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      hamburguesa.focus();
    }
  });

  /* ---------- Pestañas (Industrias y Preguntas frecuentes) ----------
     Cada botón [data-tab] muestra el panel [data-panel] con el mismo nombre. */
  document.querySelectorAll('[data-tabs]').forEach((grupo) => {
    const botones = grupo.querySelectorAll('[data-tab]');
    botones.forEach((boton) => boton.addEventListener('click', () => {
      botones.forEach((otro) => {
        const activo = otro === boton;
        otro.classList.toggle('is-activa', activo);
        otro.setAttribute('aria-selected', String(activo));
      });
      grupo.querySelectorAll('[data-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.panel !== boton.dataset.tab;
      });
    }));
  });

  /* ---------- Carrusel de clientes (infinito) ----------
     - Se ven 4 tarjetas enteras y media a cada costado (en celular, 1 al centro).
     - Tocando un costado, arrastrando, deslizando o con las flechas del teclado
       avanza de a una tarjeta. La que sale por un lado entra por el otro, así
       los clientes se repiten sin fin.
     - La primera tarjeta entera queda destacada; con el mouse se destaca la
       que estás señalando (eso lo hace el CSS). */
  const sinAnimaciones = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carrusel]').forEach((carrusel) => {
    const lista = carrusel.querySelector('.carrusel__lista');
    let moviendo = false;

    const medidas = () => {
      const [primera, segunda] = lista.children;
      const paso = segunda.offsetLeft - primera.offsetLeft;       // tarjeta + espacio
      const enteras = carrusel.clientWidth >= 1000 ? 4 : 1;       // tarjetas enteras visibles
      const ancho = enteras * primera.offsetWidth + (enteras - 1) * (paso - primera.offsetWidth);
      return { paso, base: (carrusel.clientWidth - ancho) / 2 - paso };
    };
    const ubicar = (x, animar) => {
      lista.classList.toggle('is-animando', animar && !sinAnimaciones);
      lista.style.transform = `translateX(${x}px)`;
    };
    // Destaca la tarjeta que queda (o va a quedar) en el primer lugar entero
    const marcarActiva = (indice = 1) => {
      [...lista.children].forEach((tarjeta, i) => tarjeta.classList.toggle('cliente--activo', i === indice));
    };
    // Corre la acción cuando termina el movimiento de la lista (con respaldo por si el evento no llega).
    // Se ignoran las transiciones de las tarjetas (opacidad, sombra), que también avisan al terminar.
    const alTerminar = (accion) => {
      if (sinAnimaciones) { accion(); return; }
      let hecho = false;
      const correr = () => {
        if (hecho) return;
        hecho = true;
        lista.removeEventListener('transitionend', alFinal);
        accion();
      };
      const alFinal = (evento) => {
        if (evento.target === lista && evento.propertyName === 'transform') correr();
      };
      lista.addEventListener('transitionend', alFinal);
      setTimeout(correr, 650);
    };

    // Los clics que llegan durante una animación no se pierden: se acumulan y se
    // recorren seguidos, uno detrás del otro.
    let pendientes = 0;
    const pasoSiguiente = () => {
      const { paso, base } = medidas();
      marcarActiva(2); // la que entra se destaca desde el primer momento, igual que hacia la izquierda
      ubicar(base - paso, true);
      alTerminar(() => {
        lista.append(lista.firstElementChild);
        ubicar(base, false);
        terminarPaso();
      });
    };
    const pasoAnterior = () => {
      const { paso, base } = medidas();
      lista.prepend(lista.lastElementChild);
      ubicar(base - paso, false);
      lista.getBoundingClientRect(); // fuerza el reflow antes de animar
      ubicar(base, true);
      marcarActiva();
      alTerminar(terminarPaso);
    };
    const moverPendientes = () => {
      if (moviendo || pendientes === 0) return;
      moviendo = true;
      const sentido = Math.sign(pendientes);
      pendientes -= sentido;
      if (sentido > 0) pasoSiguiente(); else pasoAnterior();
    };
    function terminarPaso() {
      moviendo = false;
      moverPendientes();
    }
    const siguiente = () => { pendientes += 1; moverPendientes(); };
    const anterior = () => { pendientes -= 1; moverPendientes(); };

    ubicar(medidas().base, false);
    window.addEventListener('resize', () => ubicar(medidas().base, false));
    window.addEventListener('load', () => ubicar(medidas().base, false));

    carrusel.querySelector('[data-siguiente]').addEventListener('click', siguiente);
    carrusel.querySelector('[data-anterior]').addEventListener('click', anterior);
    carrusel.addEventListener('keydown', (evento) => {
      if (evento.key === 'ArrowRight') { evento.preventDefault(); siguiente(); }
      if (evento.key === 'ArrowLeft') { evento.preventDefault(); anterior(); }
    });

    // Arrastrar con el mouse o deslizar con el dedo
    let inicioX = null;
    lista.addEventListener('pointerdown', (evento) => { inicioX = evento.clientX; });
    window.addEventListener('pointerup', (evento) => {
      if (inicioX === null) return;
      const delta = evento.clientX - inicioX;
      inicioX = null;
      if (delta < -40) siguiente();
      if (delta > 40) anterior();
    });
    window.addEventListener('pointercancel', () => { inicioX = null; });
    lista.addEventListener('dragstart', (evento) => evento.preventDefault());
  });

  /* ---------- Línea de tiempo (Sobre nosotros) ---------- */
  document.querySelectorAll('[data-linea-tiempo]').forEach((seccion) => {
    const anios = [...seccion.querySelectorAll('[data-anio]')];
    const lista = seccion.querySelector('.anios__lista');
    const punto = seccion.querySelector('.anios__punto');
    const anterior = seccion.querySelector('[data-anterior]');
    const siguiente = seccion.querySelector('[data-siguiente]');
    let actual = 0;
    const mostrar = (i) => {
      actual = Math.max(0, Math.min(anios.length - 1, i));
      const paso = anios[0].offsetWidth;
      lista.style.transform = `translateX(${-actual * paso}px)`;
      anios.forEach((boton, j) => boton.classList.toggle('is-activo', j === actual));
      seccion.querySelectorAll('[data-hito]').forEach((hito) => { hito.hidden = hito.dataset.hito !== anios[actual].dataset.anio; });
      anterior.disabled = actual === 0;
      siguiente.disabled = actual === anios.length - 1;
      if (punto) punto.style.left = `${112}px`;
    };
    anterior.addEventListener('click', () => mostrar(actual - 1));
    siguiente.addEventListener('click', () => mostrar(actual + 1));
    anios.forEach((boton, i) => boton.addEventListener('click', () => mostrar(i)));
    window.addEventListener('resize', () => mostrar(actual));
  });

  /* ---------- Adjuntar CV: muestra el nombre del archivo y acepta arrastrar ---------- */
  document.querySelectorAll('[data-archivo]').forEach((campo) => {
    const input = campo.querySelector('input[type="file"]');
    const texto = campo.querySelector('[data-archivo-texto]');
    const original = texto.innerHTML;
    const actualizar = () => {
      texto.innerHTML = input.files.length ? `<b>${input.files[0].name}</b>` : original;
    };
    input.addEventListener('change', actualizar);
    ['dragenter', 'dragover'].forEach((tipo) => campo.addEventListener(tipo, (evento) => {
      evento.preventDefault();
      campo.classList.add('is-arrastrando');
    }));
    ['dragleave', 'drop'].forEach((tipo) => campo.addEventListener(tipo, () => campo.classList.remove('is-arrastrando')));
    campo.addEventListener('drop', (evento) => {
      evento.preventDefault();
      if (evento.dataTransfer.files.length) {
        input.files = evento.dataTransfer.files;
        actualizar();
      }
    });
  });

  /* ---------- Filtros de clientes ---------- */
  document.querySelectorAll('[data-filtros]').forEach((seccion) => {
    const botones = seccion.querySelectorAll('[data-filtro]');
    const tarjetas = seccion.querySelectorAll('[data-rubro]');
    const vacio = seccion.querySelector('[data-vacio]');
    botones.forEach((boton) => boton.addEventListener('click', () => {
      const filtro = boton.dataset.filtro;
      botones.forEach((otro) => {
        otro.classList.toggle('is-activa', otro === boton);
        otro.setAttribute('aria-pressed', String(otro === boton));
      });
      let visibles = 0;
      tarjetas.forEach((tarjeta) => {
        const mostrar = filtro === 'todos' || tarjeta.dataset.rubro.split(' ').includes(filtro);
        tarjeta.hidden = !mostrar;
        if (mostrar) visibles += 1;
      });
      if (vacio) vacio.hidden = visibles > 0;
    }));
  });

  /* ---------- "Volver atrás" (páginas en construcción) ----------
     Si llegaste desde otra página de la web, vuelve a esa; si no, va al inicio. */
  document.querySelectorAll('[data-volver]').forEach((enlace) => {
    enlace.addEventListener('click', (evento) => {
      const vieneDeLaWeb = document.referrer && new URL(document.referrer).origin === location.origin;
      if (vieneDeLaWeb && history.length > 1) {
        evento.preventDefault();
        history.back();
      }
    });
  });

  /* ---------- Animación al aparecer ---------- */
  const aparecer = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observer.unobserve(entrada.target);
      });
    }, { threshold: 0.12 });
    aparecer.forEach((item) => observer.observe(item));
  } else {
    aparecer.forEach((item) => item.classList.add('is-visible'));
  }

}

/* ---------- Carrusel genérico (bloque "Carrusel" del panel) ----------
   Avanza de a un elemento con las flechas, deslizando o solo (si
   "Pasa solo" está en Sí). Al llegar al final vuelve al principio. */
function iniciarCarruselesGenericos() {
  const sinAnimaciones = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carrusel-generico]').forEach((carrusel) => {
    const pista = carrusel.querySelector('.bloque-carrusel__pista');
    const items = [...pista.children];
    if (!items.length) return;
    let actual = 0;
    const porVista = () => Number(getComputedStyle(carrusel).getPropertyValue(window.innerWidth <= 760 ? '--por-vista-movil' : '--por-vista')) || 1;
    const maximo = () => Math.max(0, items.length - porVista());
    const mover = (i) => {
      actual = i > maximo() ? 0 : i < 0 ? maximo() : i;
      const paso = items[1] ? items[1].offsetLeft - items[0].offsetLeft : items[0].offsetWidth;
      pista.style.transform = `translateX(${-actual * paso}px)`;
    };
    carrusel.querySelector('[data-siguiente]')?.addEventListener('click', () => mover(actual + 1));
    carrusel.querySelector('[data-anterior]')?.addEventListener('click', () => mover(actual - 1));
    let inicioX = null;
    pista.addEventListener('pointerdown', (e) => { inicioX = e.clientX; });
    pista.addEventListener('pointerup', (e) => {
      if (inicioX === null) return;
      const delta = e.clientX - inicioX;
      inicioX = null;
      if (delta < -40) mover(actual + 1);
      if (delta > 40) mover(actual - 1);
    });
    window.addEventListener('resize', () => mover(Math.min(actual, maximo())));
    // Pasa solo, y se frena mientras el mouse está encima
    if (carrusel.dataset.automatico === 'si' && !sinAnimaciones && items.length > porVista()) {
      let pausa = false;
      carrusel.addEventListener('mouseenter', () => { pausa = true; });
      carrusel.addEventListener('mouseleave', () => { pausa = false; });
      setInterval(() => { if (!pausa && !document.hidden) mover(actual + 1); }, (Number(carrusel.dataset.segundos) || 4) * 1000);
    }
  });
}

/* ---------- Videos en ventana (sin salir de la página) ----------
   Cualquier link a un video se reproduce en una ventana sobre la página,
   con el fondo difuminado. Sirve para:
     YouTube  → https://www.youtube.com/watch?v=… · https://youtu.be/…
     Vimeo    → https://vimeo.com/123456 (también los privados: vimeo.com/123456/abc123)
     Drive    → https://drive.google.com/file/d/…/view (compartido como "Cualquier persona con el link")
     Archivo  → un link que termine en .mp4 o .webm
   Para cambiar el video alcanza con cambiar el href del link (o desde /admin). */
const embedDeVideo = (href) => {
  let url;
  try { url = new URL(href, location.href); } catch { return null; }
  const host = url.hostname.replace(/^www\.|^m\./, '');

  if (host === 'youtu.be' || host.endsWith('youtube.com') || host === 'youtube-nocookie.com') {
    const id = host === 'youtu.be'
      ? url.pathname.slice(1)
      : url.searchParams.get('v') || url.pathname.match(/\/(?:embed|shorts|live)\/([\w-]+)/)?.[1];
    return id ? { tipo: 'iframe', src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` } : null;
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const [, id, hash] = url.pathname.match(/(?:\/video)?\/(\d+)(?:\/(\w+))?/) || [];
    const h = hash || url.searchParams.get('h');
    return id ? { tipo: 'iframe', src: `https://player.vimeo.com/video/${id}?autoplay=1${h ? `&h=${h}` : ''}` } : null;
  }
  if (host === 'drive.google.com') {
    const id = url.pathname.match(/\/file\/d\/([\w-]+)/)?.[1] || url.searchParams.get('id');
    return id ? { tipo: 'iframe', src: `https://drive.google.com/file/d/${id}/preview` } : null;
  }
  if (/\.(mp4|webm|mov)$/i.test(url.pathname)) return { tipo: 'video', src: url.href };
  return null;
};

const abrirVideo = (video, titulo) => {
  const dialogo = document.createElement('dialog');
  dialogo.className = 'video-modal';
  dialogo.setAttribute('aria-label', titulo || 'Video');

  const cerrar = document.createElement('button');
  cerrar.type = 'button';
  cerrar.className = 'video-modal__cerrar';
  cerrar.setAttribute('aria-label', 'Cerrar video');
  cerrar.textContent = '×';
  cerrar.addEventListener('click', () => dialogo.close());

  const marco = document.createElement('div');
  marco.className = 'video-modal__marco';
  if (video.tipo === 'iframe') {
    const iframe = document.createElement('iframe');
    iframe.src = video.src;
    iframe.title = titulo || 'Video';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
    iframe.allowFullscreen = true;
    marco.append(iframe);
  } else {
    const reproductor = document.createElement('video');
    reproductor.src = video.src;
    reproductor.controls = true;
    reproductor.autoplay = true;
    reproductor.playsInline = true;
    marco.append(reproductor);
  }

  dialogo.append(cerrar, marco);
  // Clic en el fondo difuminado: cierra. Al cerrar se borra todo y el video se detiene.
  dialogo.addEventListener('click', (evento) => { if (evento.target === dialogo) dialogo.close(); });
  dialogo.addEventListener('close', () => dialogo.remove());
  document.body.append(dialogo);
  dialogo.showModal();
};

function iniciarVideos() {
  document.addEventListener('click', (evento) => {
    const link = evento.target.closest?.('a[href]');
    if (!link || evento.defaultPrevented || evento.ctrlKey || evento.metaKey || evento.shiftKey) return;
    const video = embedDeVideo(link.getAttribute('href'));
    if (!video) return;
    evento.preventDefault();
    abrirVideo(video, link.getAttribute('aria-label'));
  });
}


/* ---------- Banner de temporada (al entrar a la página) ----------
   Se configura en el panel → Ajustes generales → Temporadas.
   La temporada activa ya la eligió el script del principio de la
   página (atributo data-temporada en <html>).
   Frecuencia: "sesion" (una vez por visita), "dia" (una vez por día),
   "una-vez" (una sola vez por navegador) o "siempre".
   Con ?banner=ver en la dirección se muestra siempre (para probarlo). */
const guardado = (almacen, clave, valor) => {
  try {
    if (valor === undefined) return window[almacen].getItem(clave);
    window[almacen].setItem(clave, valor);
  } catch { return null; }
  return null;
};

const mostrarBannerTemporada = (banner) => {
  document.querySelector('.banner-temporada')?.remove();
  const dialogo = document.createElement('dialog');
  dialogo.className = 'banner-temporada';
  dialogo.setAttribute('aria-labelledby', 'banner-temporada-titulo');
  dialogo.style.setProperty('--banner-fondo', banner.colorFondo || '#fff');
  dialogo.style.setProperty('--banner-texto', banner.colorTexto || '#1b1b1b');
  dialogo.style.setProperty('--banner-boton', banner.colorBoton || '#c9373d');

  const cerrar = document.createElement('button');
  cerrar.type = 'button';
  cerrar.className = 'banner-temporada__cerrar';
  cerrar.setAttribute('aria-label', 'Cerrar');
  cerrar.textContent = '×';
  cerrar.addEventListener('click', () => dialogo.close());
  dialogo.append(cerrar);

  if (banner.imagen) {
    const imagen = document.createElement('img');
    imagen.className = 'banner-temporada__imagen';
    imagen.src = banner.imagen;
    imagen.alt = banner.imagenAlt || '';
    dialogo.append(imagen);
  }

  const cuerpo = document.createElement('div');
  cuerpo.className = 'banner-temporada__cuerpo';
  if (banner.titulo) {
    const titulo = document.createElement('h2');
    titulo.id = 'banner-temporada-titulo';
    titulo.textContent = banner.titulo;
    cuerpo.append(titulo);
  }
  if (banner.texto) {
    const texto = document.createElement('p');
    texto.textContent = banner.texto;
    cuerpo.append(texto);
  }
  if (banner.botonTexto && banner.botonLink) {
    const boton = document.createElement('a');
    boton.className = 'banner-temporada__boton';
    boton.href = banner.botonLink;
    boton.textContent = banner.botonTexto;
    cuerpo.append(boton);
  }
  dialogo.append(cuerpo);

  // Clic en el fondo oscuro (fuera de la tarjeta): cierra
  dialogo.addEventListener('click', (evento) => { if (evento.target === dialogo) dialogo.close(); });
  dialogo.addEventListener('close', () => dialogo.remove());
  document.body.append(dialogo);
  dialogo.showModal();
};

function iniciarBanner(temporadas = {}) {
  const id = document.documentElement.getAttribute('data-temporada');
  const nombreAId = (n = '') => String(n).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const banner = (temporadas.lista || []).find((t) => nombreAId(t.nombre) === id)?.banner;
  if (!banner?.activo) return;
  if (new URLSearchParams(location.search).has('banner')) { mostrarBannerTemporada(banner); return; }
  if (banner.paginas === 'home' && location.pathname !== '/') return;

  // Si se edita el banner, vuelve a aparecer aunque ya se haya visto
  const clave = `banner-visto:${[id, banner.titulo, banner.texto, banner.imagen].join('|')}`;
  const hoy = new Date().toDateString();
  const frecuencia = banner.frecuencia || 'sesion';
  if (frecuencia === 'sesion' && guardado('sessionStorage', clave)) return;
  if (frecuencia === 'una-vez' && guardado('localStorage', clave)) return;
  if (frecuencia === 'dia' && guardado('localStorage', clave) === hoy) return;

  setTimeout(() => {
    mostrarBannerTemporada(banner);
    if (frecuencia === 'sesion') guardado('sessionStorage', clave, '1');
    if (frecuencia === 'una-vez') guardado('localStorage', clave, '1');
    if (frecuencia === 'dia') guardado('localStorage', clave, hoy);
  }, Math.max(0, Number(banner.retraso) || 0) * 1000);
}
