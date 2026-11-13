document.documentElement.classList.add('js');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const isEnglish = document.documentElement.lang === 'en';
if (navToggle && mainNav) {
  const closeMenu = (restoreFocus = false) => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', isEnglish ? 'Open menu' : 'Menüyü aç');
    if (restoreFocus) navToggle.focus();
  };
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', isEnglish ? (open ? 'Close menu' : 'Open menu') : (open ? 'Menüyü kapat' : 'Menüyü aç'));
  });
  mainNav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    if (link.hash && link.pathname === window.location.pathname) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mainNav.classList.contains('is-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', () => closeMenu());
}
const filters = document.querySelector('.project-filters');
if (filters) {
  const projects = [...document.querySelectorAll('[data-project-category]')];
  const count = document.getElementById('project-count');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected) return;
    const category = selected.dataset.filter;
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
    let visible = 0;
    projects.forEach(project => {
      project.hidden = category !== 'all' && project.dataset.projectCategory !== category;
      if (!project.hidden) visible += 1;
    });
    if (count) count.textContent = isEnglish ? `${visible} projects` : `${visible} çalışma`;
  });
}
