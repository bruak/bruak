const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const sanitizeCompanySpecificCopy = root => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const replacements = [
    [/Local SMARTFACTORY database/g, 'Local production database'],
    [/local SMARTFACTORY database/g, 'local production database'],
    [/SMARTFACTORY/g, 'production database'],
    [/SmartFactory/g, 'production system'],
    [/smartfactory/g, 'production system']
  ];

  while (walker.nextNode()) {
    let value = walker.currentNode.nodeValue;
    replacements.forEach(([pattern, replacement]) => {
      value = value.replace(pattern, replacement);
    });
    walker.currentNode.nodeValue = value;
  }
};

sanitizeCompanySpecificCopy(document.body);

const buildDeliveryMapPanel = () => {
  const panel = document.querySelector('.architecture-panel');
  if (!panel) return;

  panel.className = 'architecture-panel delivery-map-panel';
  panel.setAttribute('aria-label', 'Software delivery map animation');
  panel.innerHTML = `
    <div class="delivery-map-embed">
      <iframe src="software-delivery-map.html" title="Software Delivery Map animation" allowfullscreen loading="lazy"></iframe>
    </div>
  `;
};

buildDeliveryMapPanel();

const cards = document.querySelectorAll('.project-card, .capability-card, .stack-card, .timeline-item');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach(card => {
  card.classList.add('reveal-card');
  observer.observe(card);
});

const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('has-pointer');

  window.addEventListener('pointermove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

const interactiveCards = document.querySelectorAll('.interactive-card');
interactiveCards.forEach(card => {
  card.addEventListener('pointermove', event => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
