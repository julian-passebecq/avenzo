const services = {
  strategy: {
    index: '01',
    kicker: 'Stratégie',
    name: 'Marketing & Digital Strategy',
    title: 'Stratégie marketing, positionnement, communication, acquisition et développement de clientèle.',
    detailTitle: 'Marketing & Digital Strategy',
    summary: 'Une base stratégique claire avant l’exécution : marque, marché, acquisition, prix et go-to-market.',
    badge: 'STRATEGY',
    capabilities: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
    scope: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
    deliverables: ['Analyse marché & concurrence', 'Positionnement & proposition de valeur', 'Plan de communication', 'Go-to-market & plan marketing']
  },
  digital: {
    index: '02',
    kicker: 'Digital',
    name: 'Digital & E-commerce',
    title: 'Sites internet, e-commerce, réseaux sociaux, contenus, SEO, SEA et campagnes digitales.',
    detailTitle: 'Digital & E-commerce',
    summary: 'Une présence digitale cohérente, du site et de l’e-commerce jusqu’à l’acquisition, au CRM et au contenu.',
    badge: 'DIGITAL',
    capabilities: ['Website creation', 'Website management', 'E-commerce', 'Shopify', 'Landing pages', 'UX / digital experience', 'SEO', 'SEA', 'Google Ads', 'Meta Ads', 'Social media management', 'Email marketing', 'CRM', 'Digital content'],
    scope: ['Website creation & management', 'E-commerce & Shopify', 'SEO / SEA, Google Ads & Meta Ads', 'Social media, email marketing, CRM & content'],
    deliverables: ['Site / landing pages', 'E-commerce setup', 'Acquisition plan', 'Content & CRM activation']
  },
  growth: {
    index: '03',
    kicker: 'Croissance',
    name: 'Business Development',
    title: 'Prospection, acquisition, CRM, développement commercial et accompagnement des entreprises.',
    detailTitle: 'Business Development',
    summary: 'Structurer les actions commerciales pour générer, qualifier et développer les opportunités.',
    badge: 'GROWTH',
    capabilities: ['Commercial strategy', 'Lead generation', 'B2B prospecting', 'Client acquisition', 'Sales support', 'CRM', 'Partnership development', 'Market development', 'International business development'],
    scope: ['Commercial strategy', 'Lead generation & B2B prospecting', 'Client acquisition & sales support', 'CRM, partnerships & market development'],
    deliverables: ['Ciblage & stratégie commerciale', 'Prospection B2B', 'Pipeline CRM', 'Plan de développement marché']
  },
  trade: {
    index: '04',
    kicker: 'Trade Shows',
    name: 'Trade Shows & International Development',
    title: 'Préparation et accompagnement de projets liés aux salons professionnels, notamment à l’international et en Chine.',
    detailTitle: 'Trade Shows & International Development',
    summary: 'Un accompagnement de la stratégie salon jusqu’au sourcing, à la coordination du stand et au suivi commercial.',
    badge: 'CHINA',
    capabilities: ['Trade show strategy', 'Event concept', 'Exhibitor strategy', 'Booth project coordination', 'Supplier coordination', 'International sourcing', 'China market support', 'Pre-event communication', 'Lead generation', 'On-site commercial support', 'Post-event lead follow-up'],
    scope: ['Trade show & exhibitor strategy', 'Booth project & supplier coordination', 'International sourcing & China market support', 'Pre-event communication, on-site support & follow-up'],
    deliverables: ['Trade show plan', 'Booth & supplier brief', 'Lead capture plan', 'Post-event follow-up']
  }
};
const serviceOrder = ['strategy', 'digital', 'growth', 'trade'];
const pages = ['home', 'services', 'solutions', 'contact'];
let activeService = 'strategy';
let autoplayTimer = null;

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { page: 'home', service: null };
  const parts = raw.split('/').filter(Boolean);
  const page = pages.includes(parts[0]) ? parts[0] : 'home';
  const service = parts[1] && services[parts[1]] ? parts[1] : null;
  return { page, service };
}

function setPage(page, { push = true, service = null } = {}) {
  const safePage = pages.includes(page) ? page : 'home';
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === `page-${safePage}`));
  document.querySelectorAll('.main-nav [data-nav]').forEach(btn => {
    if (btn.dataset.nav === safePage) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  if (service && services[service]) {
    activeService = service;
    updateHomeService(service);
    updateServiceDetail(service);
  }

  if (push) {
    const nextHash = safePage === 'home' ? '#/home' : `#/${safePage}${safePage === 'services' && activeService ? `/${activeService}` : ''}`;
    if (window.location.hash !== nextHash) history.pushState({}, '', nextHash);
  }

  if (safePage === 'home') startServiceAutoplay();
  else stopServiceAutoplay();

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function capabilityChip(label, index) {
  return `<span class="marquee-chip"><em>${String(index + 1).padStart(2, '0')}</em>${label}</span>`;
}

function buildMarquee(capabilities) {
  const content = capabilities.map(capabilityChip).join('');
  return `<div class="marquee-track">${content}${content}</div>`;
}

function updateHomeService(key) {
  const service = services[key];
  if (!service) return;
  activeService = key;

  document.querySelectorAll('[data-service]').forEach(btn => {
    const active = btn.dataset.service === key;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  document.getElementById('home-service-kicker').textContent = `${service.index} · ${service.kicker}`;
  document.getElementById('home-service-index').textContent = service.index;
  document.getElementById('home-service-title').textContent = service.title;
  document.getElementById('home-service-summary').textContent = service.summary;

  const marquee = document.getElementById('home-capability-marquee');
  marquee.innerHTML = buildMarquee(service.capabilities);
  const track = marquee.querySelector('.marquee-track');
  track.style.animation = 'none';
  void track.offsetWidth;
  track.style.animation = '';
}

function updateServiceDetail(key) {
  const service = services[key];
  if (!service) return;
  document.querySelectorAll('[data-service-tab]').forEach(btn => btn.classList.toggle('active', btn.dataset.serviceTab === key));
  document.getElementById('detail-kicker').textContent = `${service.index} · ${service.name}`;
  document.getElementById('detail-title').textContent = service.detailTitle;
  document.getElementById('detail-summary').textContent = service.summary;
  document.getElementById('detail-badge').textContent = service.badge;
  document.getElementById('detail-count').textContent = `${service.capabilities.length} compétences`;
  document.getElementById('detail-scope').innerHTML = service.scope.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-deliverables').innerHTML = service.deliverables.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-capability-wrap').innerHTML = service.capabilities.map(v => `<span class="capability-pill">${v}</span>`).join('');

  if (document.getElementById('page-services').classList.contains('active')) {
    const expected = `#/services/${key}`;
    if (window.location.hash !== expected) history.replaceState({}, '', expected);
  }
}

function nextService(step = 1) {
  const currentIndex = serviceOrder.indexOf(activeService);
  const nextIndex = (currentIndex + step + serviceOrder.length) % serviceOrder.length;
  const nextKey = serviceOrder[nextIndex];
  updateHomeService(nextKey);
  updateServiceDetail(nextKey);
}

function startServiceAutoplay() {
  stopServiceAutoplay();
  autoplayTimer = window.setInterval(() => nextService(1), 5200);
}

function stopServiceAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  if (document.getElementById('page-home').classList.contains('active')) startServiceAutoplay();
}

function setTheme(theme) {
  const safeTheme = ['noir', 'slate', 'atelier'].includes(theme) ? theme : 'noir';
  document.documentElement.setAttribute('data-theme', safeTheme);
  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    const active = btn.dataset.themeChoice === safeTheme;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  localStorage.setItem('avenzo-theme', safeTheme);
}

for (const btn of document.querySelectorAll('[data-nav]')) {
  btn.addEventListener('click', () => setPage(btn.dataset.nav));
}

for (const btn of document.querySelectorAll('[data-service]')) {
  btn.addEventListener('click', () => {
    updateHomeService(btn.dataset.service);
    updateServiceDetail(btn.dataset.service);
    resetAutoplay();
  });
}

for (const btn of document.querySelectorAll('[data-service-tab]')) {
  btn.addEventListener('click', () => {
    activeService = btn.dataset.serviceTab;
    updateHomeService(activeService);
    updateServiceDetail(activeService);
    resetAutoplay();
  });
}

for (const btn of document.querySelectorAll('[data-rail]')) {
  btn.addEventListener('click', () => {
    nextService(btn.dataset.rail === 'next' ? 1 : -1);
    resetAutoplay();
  });
}

document.getElementById('home-service-link').addEventListener('click', () => setPage('services', { service: activeService }));

for (const btn of document.querySelectorAll('[data-theme-choice]')) {
  btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
}

const carouselHub = document.querySelector('.service-carousel-hub');
if (carouselHub) {
  carouselHub.addEventListener('mouseenter', stopServiceAutoplay);
  carouselHub.addEventListener('mouseleave', resetAutoplay);
  carouselHub.addEventListener('focusin', stopServiceAutoplay);
  carouselHub.addEventListener('focusout', event => {
    if (!carouselHub.contains(event.relatedTarget)) resetAutoplay();
  });
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopServiceAutoplay();
  else resetAutoplay();
});

window.addEventListener('popstate', () => {
  const route = routeFromHash();
  if (route.service) activeService = route.service;
  updateHomeService(activeService);
  updateServiceDetail(activeService);
  setPage(route.page, { push: false, service: route.service || activeService });
});

const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('contact@avenzostudio.com');
    const previous = copyButton.textContent;
    copyButton.textContent = 'Copié';
    window.setTimeout(() => copyButton.textContent = previous, 1500);
  } catch {
    copyButton.textContent = 'contact@avenzostudio.com';
  }
});

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const company = document.getElementById('contact-company').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const needs = [...document.querySelectorAll('input[name="need"]:checked')].map(el => el.value).join(', ');
  const subject = encodeURIComponent(`Projet Avenzo Studio — ${company || name}`);
  const body = encodeURIComponent([
    `Nom : ${name}`,
    `Entreprise : ${company || '—'}`,
    `Email : ${email}`,
    `Besoin : ${needs || 'À préciser'}`,
    '',
    message
  ].join('\n'));
  window.location.href = `mailto:contact@avenzostudio.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem('avenzo-theme');
setTheme(savedTheme || 'noir');

const initial = routeFromHash();
activeService = initial.service || 'strategy';
updateHomeService(activeService);
updateServiceDetail(activeService);
setPage(initial.page, { push: false, service: activeService });
