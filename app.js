const services = {
  strategy: {
    index: '01',
    kicker: 'Stratégie',
    name: 'Marketing & stratégie',
    title: 'Clarifier la marque, le marché et le plan d’action.',
    detailTitle: 'Construire le bon angle avant d’accélérer.',
    summary: 'Positionnement, analyse de marché, messages et plan d’action alignés sur un objectif commercial clair.',
    badge: 'MARKET',
    capabilities: ['Marketing strategy','Brand strategy','Positionnement','Analyse marché','Veille concurrence','Communication','Go-to-market','Pricing','Acquisition','Pilotage marketing'],
    scope: ['Analyse du marché et des concurrents','Positionnement et proposition de valeur','Architecture de messages et contenus','Plan marketing et priorisation des canaux'],
    deliverables: ['Diagnostic synthétique','Plateforme de marque légère','Plan d’action 90 jours','Roadmap marketing et KPI']
  },
  digital: {
    index: '02',
    kicker: 'Digital',
    name: 'Digital & e-commerce',
    title: 'Créer une présence digitale qui convertit vraiment.',
    detailTitle: 'Du site au trafic, connecter chaque point de contact.',
    summary: 'Site web, e-commerce, SEO/SEA, contenus et social media pensés comme un seul parcours d’acquisition.',
    badge: 'DIGITAL',
    capabilities: ['Site web','E-commerce','SEO','SEA','Social media','Content','Landing pages','Analytics','CRM','Emailing','Conversion','Campagnes paid','Localisation CN','Audit digital'],
    scope: ['Création ou refonte de site','Parcours e-commerce et landing pages','SEO / SEA et campagnes digitales','Contenus, réseaux sociaux et mesure'],
    deliverables: ['Wireframe / structure','Plan de contenus','Plan d’acquisition','Tableau de KPI digital']
  },
  growth: {
    index: '03',
    kicker: 'Business',
    name: 'Business development',
    title: 'Transformer une cible commerciale en pipeline suivi.',
    detailTitle: 'Structurer la prospection sans perdre la relation humaine.',
    summary: 'Ciblage, prospection, CRM et suivi commercial pour rendre le développement plus régulier et mesurable.',
    badge: 'GROWTH',
    capabilities: ['Prospection B2B','ICP & ciblage','Lead lists','CRM','Qualification','Scripts','Email outreach','Partenariats','Sales enablement','Pipeline','Suivi KPI','Market entry'],
    scope: ['Définition des cibles prioritaires','Construction de listes et scénarios de prospection','Mise en place du suivi CRM','Support à la qualification et au reporting'],
    deliverables: ['ICP / segments cibles','Séquences de prospection','Pipeline CRM structuré','Reporting commercial']
  },
  trade: {
    index: '04',
    kicker: 'International',
    name: 'Trade shows & Chine',
    title: 'Préparer une présence en Chine sans piloter à distance à l’aveugle.',
    detailTitle: 'Coordonner le terrain, les partenaires et les délais.',
    summary: 'Accompagnement des entreprises européennes pour les salons, partenaires, prestataires et opérations liés à la Chine.',
    badge: 'CHINA',
    capabilities: ['Trade shows','Stand sourcing','Stand construction','Supplier contact','Event planning','China coordination','Local partners','Bilingual liaison','Logistics brief','Booth content','Lead capture','Post-show follow-up'],
    scope: ['Recherche et coordination de constructeurs de stand','Interface avec prestataires et organisateurs','Planning, supports et besoins opérationnels','Préparation commerciale avant / pendant / après salon'],
    deliverables: ['Brief stand et planning','Comparatif prestataires','Plan d’exécution salon','Plan de suivi des leads']
  }
};

const pages = ['home','services','studio','contact'];
let activeService = 'strategy';

function routeFromHash(){
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { page: 'home', service: null };
  const parts = raw.split('/').filter(Boolean);
  const page = pages.includes(parts[0]) ? parts[0] : 'home';
  const service = parts[1] && services[parts[1]] ? parts[1] : null;
  return { page, service };
}

function setPage(page, {push = true, service = null} = {}){
  const safePage = pages.includes(page) ? page : 'home';
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === `page-${safePage}`));
  document.querySelectorAll('.main-nav [data-nav]').forEach(btn => {
    if (btn.dataset.nav === safePage) btn.setAttribute('aria-current','page');
    else btn.removeAttribute('aria-current');
  });
  if (service && services[service]) {
    activeService = service;
    updateServiceDetail(service);
    updateHomeService(service);
  }
  if (push) {
    const nextHash = safePage === 'home' ? '#/home' : `#/${safePage}${safePage === 'services' && service ? `/${service}` : ''}`;
    if (window.location.hash !== nextHash) history.pushState({}, '', nextHash);
  }
  window.scrollTo({top:0,behavior:'auto'});
}

function capabilityCard(label, index){
  return `<article class="capability-chip"><span>${String(index+1).padStart(2,'0')}</span><strong>${label}</strong></article>`;
}

function updateHomeService(key){
  const service = services[key];
  if (!service) return;
  activeService = key;
  document.querySelectorAll('[data-service]').forEach(btn => btn.classList.toggle('active', btn.dataset.service === key));
  document.getElementById('home-service-kicker').textContent = `${service.index} · ${service.kicker}`;
  document.getElementById('home-service-title').textContent = service.title;
  const rail = document.getElementById('home-capability-rail');
  rail.innerHTML = service.capabilities.map(capabilityCard).join('');
  rail.scrollLeft = 0;
}

function updateServiceDetail(key){
  const service = services[key];
  if (!service) return;
  activeService = key;
  document.querySelectorAll('[data-service-tab]').forEach(btn => btn.classList.toggle('active', btn.dataset.serviceTab === key));
  document.getElementById('detail-kicker').textContent = `${service.index} · ${service.name}`;
  document.getElementById('detail-title').textContent = service.detailTitle;
  document.getElementById('detail-summary').textContent = service.summary;
  document.getElementById('detail-badge').textContent = service.badge;
  document.getElementById('detail-count').textContent = `${service.capabilities.length} compétences`;
  document.getElementById('detail-scope').innerHTML = service.scope.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-deliverables').innerHTML = service.deliverables.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-capability-wrap').innerHTML = service.capabilities.map(v => `<span class="capability-pill">${v}</span>`).join('');
  updateHomeService(key);
  const expected = `#/services/${key}`;
  if (document.getElementById('page-services').classList.contains('active') && window.location.hash !== expected) history.replaceState({},'',expected);
}

function scrollRail(direction){
  const rail = document.getElementById('home-capability-rail');
  const delta = Math.max(rail.clientWidth * .72, 280) * (direction === 'next' ? 1 : -1);
  rail.scrollBy({left:delta,behavior:'smooth'});
}

document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => setPage(btn.dataset.nav));
});

document.querySelectorAll('[data-service]').forEach(btn => {
  btn.addEventListener('click', () => updateHomeService(btn.dataset.service));
});

document.getElementById('home-service-link').addEventListener('click', () => {
  setPage('services', {service: activeService});
});

document.querySelectorAll('[data-service-tab]').forEach(btn => {
  btn.addEventListener('click', () => updateServiceDetail(btn.dataset.serviceTab));
});

document.querySelectorAll('[data-rail]').forEach(btn => {
  btn.addEventListener('click', () => scrollRail(btn.dataset.rail));
});

window.addEventListener('popstate', () => {
  const route = routeFromHash();
  setPage(route.page, {push:false, service:route.service});
});

const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('contact@avenzostudio.com');
    const previous = copyButton.textContent;
    copyButton.textContent = 'Copié';
    window.setTimeout(() => copyButton.textContent = previous, 1400);
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

const initial = routeFromHash();
updateHomeService(initial.service || 'strategy');
updateServiceDetail(initial.service || 'strategy');
setPage(initial.page, {push:false, service:initial.service});