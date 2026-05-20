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
  panel.setAttribute('aria-label', 'Software delivery loop animation');
  panel.innerHTML = `
    <div class="delivery-loop">
      <div class="delivery-loop-header">
        <div>
          <span>SOFTWARE DELIVERY LOOP</span>
          <strong>Data sources to production-ready applications</strong>
        </div>
        <div class="delivery-loop-badge">BS</div>
      </div>

      <div class="delivery-loop-stage" aria-live="polite">
        <div>
          <span id="delivery-stage-label">Stage 01</span>
          <strong id="delivery-stage-title">Collect operational data from multiple sources.</strong>
        </div>
        <small id="delivery-stage-status">Realtime loop active</small>
      </div>

      <div class="delivery-loop-scene">
        <div class="delivery-world" id="delivery-world">
          <div class="delivery-node source-iot"><span>IOT</span><strong>Sensors</strong></div>
          <div class="delivery-node source-api"><span>API</span><strong>Services</strong></div>
          <div class="delivery-node source-db"><span>DB</span><strong>Data</strong></div>
          <div class="delivery-node source-mobile"><span>APP</span><strong>Clients</strong></div>
          <div class="delivery-node source-ops"><span>OPS</span><strong>Tools</strong></div>
          <div class="delivery-node source-edge"><span>EDGE</span><strong>Devices</strong></div>

          <div class="delivery-layer layer-data" data-stage="0"><span>DATA</span><strong>Integration</strong></div>
          <div class="delivery-layer layer-service" data-stage="1"><span>API</span><strong>Service Layer</strong></div>
          <div class="delivery-layer layer-realtime" data-stage="2"><span>LIVE</span><strong>Messaging</strong></div>
          <div class="delivery-layer layer-runtime green" data-stage="3"><span>RUN</span><strong>Runtime</strong></div>
          <div class="delivery-layer layer-observe green" data-stage="4"><span>OBS</span><strong>Monitoring</strong></div>

          <div class="delivery-output output-dashboard" data-stage="5"><span>WEB</span><strong>Dashboard</strong></div>
          <div class="delivery-output output-app" data-stage="5"><span>MOBILE</span><strong>App UI</strong></div>
        </div>
      </div>

      <div class="delivery-status">
        <div><span>Services</span><strong>Running</strong></div>
        <div><span>Realtime</span><strong>Active</strong></div>
        <div><span>Delivery</span><strong>Ready</strong></div>
      </div>
    </div>
  `;
};

const initDeliveryLoopAnimation = () => {
  buildDeliveryLoopPanel();

  const world = document.getElementById('delivery-world');
  if (!world) return;

  const lines = [
    ['80px', '53px', '60px', false], ['80px', '117px', '60px', false], ['80px', '181px', '60px', false],
    ['80px', '245px', '60px', false], ['80px', '309px', '60px', false], ['80px', '373px', '60px', false],
    ['137px', '47px', '2px', true, '326px'], ['137px', '108px', '65px', false],
    ['262px', '108px', '24px', false], ['417px', '108px', '24px', false],
    ['506px', '146px', '2px', true, '150px'], ['350px', '292px', '96px', false], ['504px', '292px', '66px', false],
    ['468px', '180px', '2px', true, '76px'], ['468px', '180px', '128px', false],
    ['503px', '254px', '54px', false], ['557px', '196px', '2px', true, '112px'],
    ['557px', '196px', '66px', false], ['557px', '306px', '66px', false],
    ['620px', '62px', '2px', true, '338px'], ['20px', '60px', '600px', false], ['20px', '60px', '2px', true, '18px']
  ];

  lines.forEach(([left, top, size, vertical, height]) => {
    const line = document.createElement('div');
    line.className = `delivery-line${vertical ? ' vertical' : ''}`;
    line.style.left = left;
    line.style.top = top;
    if (vertical) line.style.height = height || size;
    else line.style.width = size;
    world.appendChild(line);
  });

  const stages = [
    { label: 'Stage 01', title: 'Collect data from IoT, APIs, databases, apps and edge devices.', selector: '.layer-data' },
    { label: 'Stage 02', title: 'Route data through APIs, gateways, workers and business services.', selector: '.layer-service' },
    { label: 'Stage 03', title: 'Stream realtime updates through WebSocket, MQTT, events and notifications.', selector: '.layer-realtime' },
    { label: 'Stage 04', title: 'Package services with Docker, Windows/Linux runtimes and deployment checks.', selector: '.layer-runtime' },
    { label: 'Stage 05', title: 'Observe logs, health checks, diagnostics and operational behavior.', selector: '.layer-observe' },
    { label: 'Stage 06', title: 'Deliver live dashboards and mobile app interfaces for real users.', selector: '.delivery-output' }
  ];

  const stageLabel = document.getElementById('delivery-stage-label');
  const stageTitle = document.getElementById('delivery-stage-title');
  let stageIndex = 0;

  const activateStage = () => {
    document.querySelectorAll('.delivery-layer, .delivery-output, .delivery-node').forEach(item => item.classList.remove('is-active'));
    const stage = stages[stageIndex];
    document.querySelectorAll(stage.selector).forEach(item => item.classList.add('is-active'));
    if (stageIndex === 0) document.querySelectorAll('.delivery-node').forEach(item => item.classList.add('is-active'));
    if (stageLabel) stageLabel.textContent = stage.label;
    if (stageTitle) stageTitle.textContent = stage.title;
    stageIndex = (stageIndex + 1) % stages.length;
  };

  activateStage();
  setInterval(activateStage, 1800);

  const paths = [
    [[57, 53], [137, 53], [137, 108], [196, 108]],
    [[57, 117], [137, 117], [137, 108], [196, 108]],
    [[57, 181], [137, 181], [137, 108], [196, 108]],
    [[57, 245], [137, 245], [137, 108], [196, 108]],
    [[57, 309], [137, 309], [137, 108], [196, 108]],
    [[57, 373], [137, 373], [137, 108], [196, 108]],
    [[262, 108], [285, 108]],
    [[417, 108], [440, 108]],
    [[506, 146], [506, 292], [350, 292]],
    [[350, 292], [372, 292]],
    [[504, 292], [557, 292], [557, 160], [604, 160]],
    [[504, 292], [557, 292], [557, 270], [604, 270]],
    [[604, 160], [620, 160], [620, 60], [20, 60], [20, 53]],
    [[604, 270], [620, 270], [620, 60], [20, 60], [20, 117]]
  ];

  const spawnParticle = () => {
    const path = paths[Math.floor(Math.random() * paths.length)];
    const particle = document.createElement('div');
    particle.className = `delivery-particle${Math.random() > 0.62 ? ' green' : ''}`;
    world.appendChild(particle);

    let segment = 0;
    let progress = 0;
    const speed = 0.024 + Math.random() * 0.012;

    const animate = () => {
      if (segment >= path.length - 1) {
        particle.remove();
        return;
      }

      const p1 = path[segment];
      const p2 = path[segment + 1];
      const dx = p2[0] - p1[0];
      const dy = p2[1] - p1[1];
      const distance = Math.hypot(dx, dy) || 1;
      progress += (speed * 100) / distance;

      if (progress >= 1) {
        progress = 0;
        segment += 1;
        requestAnimationFrame(animate);
        return;
      }

      const x = p1[0] + dx * progress;
      const y = p1[1] + dy * progress;
      particle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  setInterval(spawnParticle, 260);
  setInterval(spawnParticle, 520);
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
