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

const injectDeliveryLoopStyles = () => {
  if (document.querySelector('link[href="./delivery-loop.css"]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './delivery-loop.css';
  document.head.appendChild(link);
};

const buildDeliveryLoopPanel = () => {
  const panel = document.querySelector('.architecture-panel');
  if (!panel) return;

  injectDeliveryLoopStyles();

  panel.className = 'architecture-panel delivery-loop-panel';
  panel.setAttribute('aria-label', 'Software delivery map animation');
  panel.innerHTML = `
    <div class="delivery-loop">
      <div class="delivery-loop-header">
        <div>
          <span>SOFTWARE DELIVERY MAP</span>
          <strong>Software delivery flow from data sources to live applications</strong>
        </div>
        <div class="delivery-loop-badge">BS</div>
      </div>

      <div class="delivery-loop-stage" aria-live="polite">
        <div>
          <span id="delivery-stage-label">Stage 01</span>
          <strong id="delivery-stage-title">Collect operational data from multiple sources.</strong>
        </div>
        <small id="delivery-stage-status">Cinematic loop active</small>
      </div>

      <div class="delivery-loop-scene">
        <div class="delivery-world" id="delivery-world">
          <svg class="delivery-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="deliveryCyan" x1="0" x2="1">
                <stop offset="0%" stop-color="rgba(56,189,248,0.15)" />
                <stop offset="100%" stop-color="rgba(34,197,94,0.34)" />
              </linearGradient>
            </defs>
            <path id="p-iot" class="delivery-path" d="M16 14 H31 V28 H40" />
            <path id="p-api" class="delivery-path" d="M16 27 H31 V28 H40" />
            <path id="p-db" class="delivery-path" d="M16 40 H31 V28 H40" />
            <path id="p-mobile" class="delivery-path" d="M16 53 H31 V28 H40" />
            <path id="p-camera" class="delivery-path" d="M16 66 H31 V28 H40" />
            <path id="p-edge" class="delivery-path" d="M16 79 H31 V28 H40" />
            <path id="p-core" class="delivery-path" d="M48 28 H58 H70" />
            <path id="p-runtime" class="delivery-path" d="M70 28 V66 H53" />
            <path id="p-observe" class="delivery-path green" d="M53 66 H66" />
            <path id="p-dashboard" class="delivery-path green" d="M66 66 H83 V38 H91" />
            <path id="p-app" class="delivery-path green" d="M66 66 H83 V64 H91" />
            <path id="p-loop" class="delivery-path green" d="M91 38 H96 V10 H8 V14" />

            <circle class="delivery-pulse"><animateMotion dur="5.8s" repeatCount="indefinite" begin="0s"><mpath href="#p-iot" /></animateMotion></circle>
            <circle class="delivery-pulse"><animateMotion dur="6.3s" repeatCount="indefinite" begin=".45s"><mpath href="#p-api" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="6.8s" repeatCount="indefinite" begin=".9s"><mpath href="#p-db" /></animateMotion></circle>
            <circle class="delivery-pulse"><animateMotion dur="6.5s" repeatCount="indefinite" begin="1.25s"><mpath href="#p-mobile" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="7s" repeatCount="indefinite" begin="1.7s"><mpath href="#p-camera" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="7.3s" repeatCount="indefinite" begin="2.1s"><mpath href="#p-edge" /></animateMotion></circle>
            <circle class="delivery-pulse"><animateMotion dur="4.6s" repeatCount="indefinite" begin=".2s"><mpath href="#p-core" /></animateMotion></circle>
            <circle class="delivery-pulse"><animateMotion dur="5s" repeatCount="indefinite" begin=".8s"><mpath href="#p-runtime" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="4.2s" repeatCount="indefinite" begin="1.1s"><mpath href="#p-dashboard" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="4.5s" repeatCount="indefinite" begin="1.55s"><mpath href="#p-app" /></animateMotion></circle>
            <circle class="delivery-pulse green"><animateMotion dur="8.2s" repeatCount="indefinite" begin="2.2s"><mpath href="#p-loop" /></animateMotion></circle>
          </svg>

          <div class="delivery-node" style="--x: 8; --y: 14"><span>IOT</span><strong>Sensor</strong></div>
          <div class="delivery-node" style="--x: 8; --y: 27"><span>API</span><strong>Service</strong></div>
          <div class="delivery-node" style="--x: 8; --y: 40"><span>DB</span><strong>PostgreSQL</strong></div>
          <div class="delivery-node" style="--x: 8; --y: 53"><span>APP</span><strong>Mobile</strong></div>
          <div class="delivery-node" style="--x: 8; --y: 66"><span>VIDEO</span><strong>Camera</strong></div>
          <div class="delivery-node" style="--x: 8; --y: 79"><span>EDGE</span><strong>Device</strong></div>

          <div class="delivery-layer layer-data" style="--x: 42; --y: 28" data-stage="0"><span>DATA</span><strong>Integration</strong></div>
          <div class="delivery-layer layer-service" style="--x: 58; --y: 28" data-stage="1"><span>API</span><strong>Service Layer</strong></div>
          <div class="delivery-layer layer-realtime" style="--x: 74; --y: 28" data-stage="2"><span>LIVE</span><strong>Messaging</strong></div>
          <div class="delivery-layer layer-runtime green" style="--x: 53; --y: 66" data-stage="3"><span>RUN</span><strong>Runtime</strong></div>
          <div class="delivery-layer layer-observe green" style="--x: 69; --y: 66" data-stage="4"><span>OBS</span><strong>Monitoring</strong></div>

          <div class="delivery-output output-dashboard" style="--x: 90; --y: 38" data-stage="5"><span>WEB</span><strong>Dashboard</strong></div>
          <div class="delivery-output output-app" style="--x: 90; --y: 64" data-stage="5"><span>MOBILE</span><strong>App UI</strong></div>

          <div class="delivery-mini-node" style="--x: 38; --y: 83"><span>WORKER</span><strong>Jobs</strong></div>
          <div class="delivery-mini-node" style="--x: 55; --y: 83"><span>DOCKER</span><strong>Runtime</strong></div>
          <div class="delivery-mini-node" style="--x: 72; --y: 83"><span>LOGS</span><strong>Health</strong></div>
        </div>
      </div>
    </div>
  `;
};

const initDeliveryLoopAnimation = () => {
  buildDeliveryLoopPanel();

  const stages = [
    { label: 'Stage 01', title: 'Collect data from IoT, APIs, databases, apps, video sources and edge devices.', selector: '.layer-data' },
    { label: 'Stage 02', title: 'Route data through APIs, gateways, workers and business services.', selector: '.layer-service' },
    { label: 'Stage 03', title: 'Stream realtime updates through WebSocket, MQTT, events and notifications.', selector: '.layer-realtime' },
    { label: 'Stage 04', title: 'Package services with Docker, Windows/Linux runtimes and deployment checks.', selector: '.layer-runtime' },
    { label: 'Stage 05', title: 'Observe logs, health checks, diagnostics and operational behavior.', selector: '.layer-observe, .delivery-mini-node' },
    { label: 'Stage 06', title: 'Deliver live dashboards and mobile application interfaces for real users.', selector: '.delivery-output' }
  ];

  const stageLabel = document.getElementById('delivery-stage-label');
  const stageTitle = document.getElementById('delivery-stage-title');
  let stageIndex = 0;

  const activateStage = () => {
    document.querySelectorAll('.delivery-layer, .delivery-output, .delivery-node, .delivery-mini-node').forEach(item => item.classList.remove('is-active'));
    const stage = stages[stageIndex];
    document.querySelectorAll(stage.selector).forEach(item => item.classList.add('is-active'));
    if (stageIndex === 0) document.querySelectorAll('.delivery-node').forEach(item => item.classList.add('is-active'));
    if (stageLabel) stageLabel.textContent = stage.label;
    if (stageTitle) stageTitle.textContent = stage.title;
    stageIndex = (stageIndex + 1) % stages.length;
  };

  activateStage();
  setInterval(activateStage, 1800);
};

initDeliveryLoopAnimation();

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
