/* =========================================================
   CONTROLLER — solo interacción. No genera contenido:
   todos los textos e imágenes están en el HTML.
   ========================================================= */

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
document.addEventListener('keydown', (evento) => { if (evento.key === 'Escape') cerrarDesplegables(); });

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
