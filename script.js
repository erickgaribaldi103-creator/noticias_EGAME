/* ===============================================================
   NOTICIAS EGAME — 01 · DATOS DE LA EDICIÓN
   Cambia titulares, descripciones, enlaces, fuentes y categorías aquí.
   Estas notas son una selección de fuentes periodísticas externas.
   No se actualizan solas. No atribuirlas a una redacción EGAME.
================================================================ */
const ARTICLES = [
  {
    id: 'movilizaciones-cdmx',
    category: 'Movilidad',
    title: 'Movilizaciones y bloqueos: lo que debes revisar antes de salir hoy en CDMX',
    summary: 'La agenda de marchas y concentraciones de este lunes puede afectar desplazamientos. Revisa las rutas y los reportes más recientes antes de viajar.',
    source: 'N+',
    date: '23 nov 2026',
    url: 'https://www.nmas.com.mx/ciudad-de-mexico/movilidad/marchas/marchas-en-cdmx-hoy-lunes-23-de-noviembre-de-2026-calles-bloqueos-avenidas-alternativas/',
    image: 'assets/ciudad.svg',
    imageAlt: 'Ilustración editorial de la Ciudad de México y sus avenidas',
    readTime: 'Movilidad · Fuente externa'
  },
  {
    id: 'beca-transporte',
    category: 'Ciudad',
    title: 'CDMX anuncia aumento de beca de transporte para universitarios en 2027',
    summary: 'Una propuesta de apoyo al transporte estudiantil figura entre los temas de la agenda capitalina para el próximo año.',
    source: 'La Jornada',
    date: '23 nov 2026',
    url: 'https://www.jornada.com.mx/2026/11/23/capital',
    image: 'assets/ciudad-barrio.svg',
    imageAlt: 'Ilustración de edificios y espacios urbanos de la capital',
    readTime: 'Ciudad · Fuente externa'
  },
  {
    id: 'metro-servicio',
    category: 'Movilidad',
    title: 'Metro y Metrobús: consulta los reportes de servicio de este lunes',
    summary: 'Los sistemas de transporte publican avisos de estaciones y líneas para planear mejor los traslados.',
    source: 'adn Noticias',
    date: '23 nov 2026',
    url: 'https://www.adn40.mx/ciudad/2026-11-23/como-va-el-metro-y-metrobus-cdmx-hoy-asi-estan-las-estaciones-y-lineas-este-lunes-23-de-noviembre/',
    image: 'assets/metro.svg',
    imageAlt: 'Ilustración de un tren urbano en estación',
    readTime: 'Movilidad · Fuente externa'
  },
  {
    id: 'zona-metropolitana',
    category: 'Ciudad',
    title: 'Valle de México: movilidad, vivienda y agua, retos de la planeación metropolitana',
    summary: 'La actualización del programa metropolitano vuelve a poner el foco en infraestructura y desarrollo territorial.',
    source: 'El Sol de Toluca',
    date: '22 nov 2026',
    url: 'https://oem.com.mx/elsoldetoluca/local/el-valle-de-mexico-cambio-pero-su-plan-metropolitano-no-33245910',
    image: 'assets/ciudad-barrio.svg',
    imageAlt: 'Ilustración editorial de viviendas y áreas verdes',
    readTime: 'Ciudad · Fuente externa'
  },
  {
    id: 'operativo-cdmx',
    category: 'Seguridad',
    title: 'Reportan operativo en Coyoacán y Tlalpan por robos relacionados con el aeropuerto',
    summary: 'Autoridades informaron sobre acciones de investigación y detenciones vinculadas con asaltos a usuarios del AICM.',
    source: 'La Jornada',
    date: '23 nov 2026',
    url: 'https://www.jornada.com.mx/2026/11/23/capital',
    image: 'assets/seguridad.svg',
    imageAlt: 'Ilustración de calles urbanas con luces nocturnas',
    readTime: 'Seguridad · Fuente externa'
  },
  {
    id: 'agenda-cultural',
    category: 'Cultura',
    title: 'Cultura para todos los bolsillos: qué hacer en CDMX esta semana',
    summary: 'Una selección de exposiciones, teatro y otras actividades para los días del 23 al 27 de noviembre.',
    source: 'Reporte Índigo',
    date: '23 nov 2026',
    url: 'https://www.reporteindigo.com/entretenimiento/eventos-de-la-semana-que-hacer-hoy-en-cdmx-20261121-0048.html',
    image: 'assets/cultura.svg',
    imageAlt: 'Ilustración de un museo y una sala de exposiciones',
    readTime: 'Cultura · Fuente externa'
  },
  {
    id: 'estudios-churubusco',
    category: 'Cultura',
    title: 'La historia del cine mexicano ocupa espacio en la cartelera cultural',
    summary: 'Exposiciones dedicadas a Estudios Churubusco se suman a las opciones culturales en la capital.',
    source: 'CDMX365',
    date: '23 nov 2026',
    url: 'https://www.cdmx365.com/public/es',
    image: 'assets/cine.svg',
    imageAlt: 'Ilustración de cámara cinematográfica y sala de proyección',
    readTime: 'Cultura · Fuente externa'
  },
  {
    id: 'hoy-no-circula',
    category: 'Movilidad',
    title: 'Hoy No Circula: conoce las restricciones de este lunes 23 de noviembre',
    summary: 'La guía del día repasa el programa para vehículos con engomado amarillo y placas terminadas en 5 o 6.',
    source: 'UnoTV',
    date: '23 nov 2026',
    url: 'https://www.unotv.com/landing-sms/ciudad-de-mexico/2026/11/23/ciudad-de-mexico-noviembre-23-2026/',
    image: 'assets/metro.svg',
    imageAlt: 'Ilustración de transporte y vialidades urbanas',
    readTime: 'Movilidad · Fuente externa'
  },
  {
    id: 'repartidores-moto',
    category: 'Movilidad',
    title: 'Repartidores y motociclistas ponen sobre la mesa cambios a licencias y placas',
    summary: 'Una movilización anunciada para el lunes abre el debate sobre un programa piloto y su impacto en quienes trabajan sobre dos ruedas.',
    source: '24 Horas',
    date: '23 nov 2026',
    url: 'https://24-horas.mx/impreso-pdf/?ed=cdmx&fecha=2026-11-23',
    image: 'assets/reparto.svg',
    imageAlt: 'Ilustración de motocicleta de reparto en la ciudad',
    readTime: 'Movilidad · Fuente externa'
  },
  {
    id: 'balance-seguridad',
    category: 'Seguridad',
    title: 'Gobierno capitalino presenta balance de seguridad correspondiente a octubre',
    summary: 'Las cifras difundidas por las autoridades abren espacio para revisar resultados, metodología y contexto.',
    source: 'Jefatura de Gobierno CDMX (fuente oficial)',
    date: '10 nov 2026',
    url: 'https://jefadegobierno.cdmx.gob.mx/cerramos-el-paso-a-la-delincuencia-tuvimos-el-octubre-con-menos-homicidios-en-29-anos-y-suman-cinco-meses-de-tendencia-a-la-baja-en-este-delito-afirma-clara-brugada/',
    image: 'assets/seguridad.svg',
    imageAlt: 'Ilustración simbólica de luces de una ciudad',
    readTime: 'Seguridad · Fuente oficial'
  },
  {
    id: 'arte-en-museos',
    category: 'Cultura',
    title: 'Museos, exposiciones y barrios: rutas culturales para descubrir la capital',
    summary: 'Recintos y espacios culturales ofrecen alternativas para quienes prefieren explorar la ciudad con calma.',
    source: 'Roam CDMX',
    date: '23 nov 2026',
    url: 'https://roamcdmx.com/es/eventos/noviembre/',
    image: 'assets/cultura.svg',
    imageAlt: 'Ilustración editorial de museo y obras de arte',
    readTime: 'Cultura · Fuente externa'
  },
  {
    id: 'congreso-vivienda',
    category: 'Política',
    title: 'Congreso de la CDMX aborda iniciativas de protección habitacional',
    summary: 'La agenda legislativa incluye propuestas vinculadas con vivienda y seguridad de habitantes de la ciudad.',
    source: 'Congreso de la CDMX (fuente oficial)',
    date: '22 nov 2026',
    url: 'https://www.congresocdmx.gob.mx/notas.php',
    image: 'assets/ciudad-barrio.svg',
    imageAlt: 'Ilustración de la ciudad y edificios públicos',
    readTime: 'Política · Fuente oficial'
  }
];

// 02 · Nodos y utilidades
const $ = (selector, root = document) => root.querySelector(selector);
const displayDate = new Intl.DateTimeFormat('es-MX', {timeZone:'America/Mexico_City',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());
$('#todayText').textContent = displayDate.charAt(0).toUpperCase() + displayDate.slice(1);
$('#year').textContent = new Date().getFullYear();
const escapeHTML = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function card(article, variant='standard') {
  const label = `<span class="article-category">${escapeHTML(article.category)}</span>`;
  const src = `<span class="source-line">${escapeHTML(article.date)} <span aria-hidden="true">·</span> Fuente: ${escapeHTML(article.source)}</span>`;
  const img = `<img src="${escapeHTML(article.image)}" alt="${escapeHTML(article.imageAlt)}" loading="${variant==='lead'?'eager':'lazy'}">`;
  const heading = variant === 'lead' ? 'h2' : 'h3';
  return `<article class="news-card news-card--${variant}"><a class="story-link" href="${escapeHTML(article.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente externa: ${escapeHTML(article.title)}"><div class="story-image">${img}<span class="image-caption">ILUSTRACIÓN EDITORIAL</span></div><div class="story-body">${label}<${heading}>${escapeHTML(article.title)}</${heading}><p>${escapeHTML(article.summary)}</p>${src}<span class="read-source">Consultar fuente <span aria-hidden="true">↗</span></span></div></a></article>`;
}
function brief(article) {
  return `<li><a href="${escapeHTML(article.url)}" target="_blank" rel="noopener noreferrer"><span class="brief-cat">${escapeHTML(article.category)}</span><span class="brief-title">${escapeHTML(article.title)}</span><span class="brief-source">${escapeHTML(article.source)} ↗</span></a></li>`;
}
function shortCard(article) {
  return `<article class="short-card"><div><span class="article-category">${escapeHTML(article.category)}</span><h3><a href="${escapeHTML(article.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(article.title)} <span aria-hidden="true">↗</span></a></h3><span class="source-line">${escapeHTML(article.source)} · ${escapeHTML(article.date)}</span></div><img src="${escapeHTML(article.image)}" alt="${escapeHTML(article.imageAlt)}" loading="lazy"></article>`;
}

// 03 · Portada editorial: lo más relevante primero
$('#leadStory').innerHTML = card(ARTICLES[0], 'lead');
$('#sideStories').innerHTML = [ARTICLES[1],ARTICLES[2]].map(a => card(a,'side')).join('');
$('#briefList').innerHTML = [ARTICLES[4],ARTICLES[7],ARTICLES[8],ARTICLES[11]].map(brief).join('');
$('#cityGrid').innerHTML = [ARTICLES[3],ARTICLES[4],ARTICLES[8]].map(a=>card(a,'standard')).join('');
$('#cultureGrid').innerHTML = [ARTICLES[5],ARTICLES[6]].map(a=>card(a,'culture')).join('');
$('#latestList').innerHTML = [ARTICLES[7],ARTICLES[9],ARTICLES[10],ARTICLES[11]].map(shortCard).join('');

// 04 · Filtros por sección (sin fingir una redacción en tiempo real)
const homeView = $('#homeView');
const resultsView = $('#resultsView');
const resultsGrid = $('#resultsGrid');
const emptyState = $('#emptyState');
const nav = $('#mainNav');
function setResults(items,title) {
  homeView.hidden=true;
  resultsView.hidden=false;
  $('#resultsTitle').textContent=title;
  $('#resultsCount').textContent=`${items.length} ${items.length === 1 ? 'nota disponible' : 'notas disponibles'} en esta edición de muestra.`;
  resultsGrid.innerHTML=items.map(a=>card(a,'result')).join('');
  emptyState.hidden=items.length>0;
  window.scrollTo({top:0,behavior:'smooth'});
}
function setCategory(category) {
  nav.querySelectorAll('.nav-link').forEach(b=>{
    const selected=b.dataset.category===category;
    b.classList.toggle('is-active',selected);
    if(selected)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
  });
  if(category==='Todos') {
    homeView.hidden=false;
    resultsView.hidden=true;
    window.scrollTo({top:0,behavior:'smooth'});
  } else {
    setResults(ARTICLES.filter(a=>a.category===category),category);
  }
  nav.classList.remove('is-open');
  $('#menuButton').setAttribute('aria-expanded','false');
}
nav.addEventListener('click',e=>{
  const b=e.target.closest('button[data-category]');
  if(b)setCategory(b.dataset.category);
});
$('#backToCover').addEventListener('click',()=>setCategory('Todos'));

// 05 · Buscador local de la edición
const searchToggle=$('#searchToggle');
const searchPanel=$('#searchPanel');
searchToggle.addEventListener('click',()=>{
  const opening=searchPanel.hidden;
  searchPanel.hidden=!opening;
  searchToggle.setAttribute('aria-expanded',String(opening));
  if(opening)$('#searchInput').focus();
});
searchPanel.addEventListener('submit',e=>{
  e.preventDefault();
  const q=$('#searchInput').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  if(!q) {setCategory('Todos');return;}
  nav.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('is-active'));
  const found=ARTICLES.filter(a=>`${a.title} ${a.summary} ${a.category} ${a.source}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(q));
  setResults(found,`Resultados para «${$('#searchInput').value.trim()}»`);
  searchPanel.hidden=true;
  searchToggle.setAttribute('aria-expanded','false');
});

// 06 · Menú responsive
$('#menuButton').addEventListener('click',()=>{
  const expanded=nav.classList.toggle('is-open');
  $('#menuButton').setAttribute('aria-expanded',String(expanded));
});
