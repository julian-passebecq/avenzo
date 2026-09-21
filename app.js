const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    mainNav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

function scrollToHashTarget() {
  const id = decodeURIComponent(window.location.hash.replace('#', ''));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  window.setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

window.addEventListener('hashchange', scrollToHashTarget);
window.addEventListener('DOMContentLoaded', scrollToHashTarget);

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const needs = [...contactForm.querySelectorAll('input[name="need"]:checked')].map(input => input.value);
    const name = (data.get('name') || '').toString().trim();
    const company = (data.get('company') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const project = (data.get('project') || '').toString().trim();

    const subject = encodeURIComponent(`Projet Avenzo — ${company || name || 'nouvelle demande'}`);
    const body = encodeURIComponent([
      `Nom : ${name}`,
      `Entreprise : ${company || '—'}`,
      `Email : ${email}`,
      `Besoins : ${needs.length ? needs.join(', ') : 'Non précisé'}`,
      '',
      'Projet :',
      project
    ].join('\n'));

    window.location.href = `mailto:contact@avenzostudio.com?subject=${subject}&body=${body}`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', href);
  });
});
