// Production Technology Study Website - script.js

// ── THEME ──
const root = document.documentElement;
const btn = document.getElementById('theme-btn');
const stored = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', stored);
if (btn) {
  btn.textContent = stored === 'dark' ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ── ACTIVE NAV LINK ──
const links = document.querySelectorAll('.topnav-links a');
links.forEach(a => {
  if (a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))) {
    a.classList.add('active');
  }
});

// ── SIDEBAR ACTIVE ──
const sideLinks = document.querySelectorAll('.sidebar a');
function updateSideActive() {
  const sections = document.querySelectorAll('[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  sideLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateSideActive, { passive: true });
updateSideActive();

// ── SMOOTH SCROLL for sidebar links ──
sideLinks.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});
