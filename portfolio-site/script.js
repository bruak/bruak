const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = './favicon.svg';
document.head.appendChild(favicon);

const visualRefinements = document.createElement('style');
visualRefinements.textContent = `
  .hero-title {
    display: grid;
    gap: 12px;
    max-width: 920px;
  }

  .hero-title .title-kicker {
    display: inline-flex;
    width: max-content;
    max-width: 100%;
    padding: 9px 13px;
    border: 1px solid rgba(56, 189, 248, 0.22);
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.72);
    color: #bae6fd;
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(0.78rem, 1.4vw, 0.96rem);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-title .title-main {
    display: block;
    background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 42%, #38bdf8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .system-matrix.compact-matrix {
    gap: 0;
    padding-top: 18px;
  }

  .system-matrix.compact-matrix .matrix-layer {
    padding: 14px 16px;
    border-radius: 16px;
  }

  .system-matrix.compact-matrix .matrix-layer small {
    margin-top: 5px;
  }

  .system-matrix.compact-matrix .matrix-connector {
    height: 14px;
  }
`;
document.head.appendChild(visualRefinements);

const heroTitle = document.querySelector('#home h1');
if (heroTitle) {
  heroTitle.classList.add('hero-title');
  heroTitle.innerHTML = `
    <span class="title-kicker">Industrial systems engineering</span>
    <span class="title-main">From raw machine data to runtime-ready software.</span>
  `;
}

const systemMatrix = document.querySelector('.system-matrix');
if (systemMatrix) {
  systemMatrix.classList.add('compact-matrix');
  systemMatrix.innerHTML = `
    <div class="matrix-layer">
      <span>Field & Machine Layer</span>
      <strong>CNC / PLC / ERP / DB / API</strong>
      <small>Mitsubishi, NUM, Heidenhain, Siemens, Fanuc and operational data sources.</small>
    </div>
    <div class="matrix-connector" aria-hidden="true"></div>
    <div class="matrix-layer">
      <span>Acquisition Layer</span>
      <strong>Collectors / Adapters / Edge Services</strong>
      <small>Vendor SDKs, native libraries, polling workers, protocol bridges and gateways.</small>
    </div>
    <div class="matrix-connector" aria-hidden="true"></div>
    <div class="matrix-layer">
      <span>Data Flow Layer</span>
      <strong>Normalize / Transport / Stream</strong>
      <small>States, alarms, counters, OEE signals, MQTT, REST, WebSocket and MTConnect.</small>
    </div>
    <div class="matrix-connector" aria-hidden="true"></div>
    <div class="matrix-layer">
      <span>MES & Operations Layer</span>
      <strong>MES / Dashboards / Logs / Health</strong>
      <small>MES-ready telemetry, operator dashboards, service diagnostics and runtime visibility.</small>
    </div>
    <div class="matrix-connector" aria-hidden="true"></div>
    <div class="matrix-layer">
      <span>Delivery Layer</span>
      <strong>Packaging / Installers / Monitoring / Handoff</strong>
      <small>Windows/Linux services, Docker environments, deployment validation and documentation.</small>
    </div>
  `;
}

const architectureSummary = document.querySelector('.architecture-summary');
if (architectureSummary) {
  architectureSummary.innerHTML = `
    <div>
      <span>Primary Output</span>
      <strong>MES-ready industrial data systems</strong>
    </div>
    <div>
      <span>Delivery Scope</span>
      <strong>Machine connectivity → MES → Runtime delivery</strong>
    </div>
  `;
}

const stackCards = document.querySelectorAll('.stack-card');
stackCards.forEach(card => {
  const title = card.querySelector('h3');
  const description = card.querySelector('p');

  if (title && title.textContent.trim() === 'Diagnostics') {
    title.textContent = 'Diagnostics & Reverse Engineering';
    if (description) {
      description.textContent = 'Wireshark, dumpbin, Dependencies, ILSpy, TCPView, DLL export analysis, protocol tracing and Windows API tools';
    }
  }
});

const educationCopy = document.querySelector('.education-section .section-heading p:last-child');
if (educationCopy) {
  educationCopy.textContent = '42 School is a rigorous, project-based software engineering program with a broad systems curriculum that pushes C, C++, Unix, networking, algorithms, graphics, concurrency and DevOps fundamentals through peer-reviewed production-style assignments.';
}

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

const stageCopy = {
  collect: 'Collect operational data from machines, databases, protocols and service endpoints.',
  normalize: 'Normalize raw records into clean identifiers, payloads, states and runtime-safe structures.',
  stream: 'Move data through MQTT, WebSocket, REST, polling workers or gateway services.',
  deploy: 'Package the system with logs, health checks and Windows/Linux runtime delivery in mind.'
};

const pipelineButtons = document.querySelectorAll('.pipeline-node');
const architectureDetail = document.getElementById('architectureDetail');

pipelineButtons.forEach(button => {
  button.addEventListener('click', () => {
    pipelineButtons.forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');

    const stage = button.dataset.stage;
    if (architectureDetail && stageCopy[stage]) {
      architectureDetail.innerHTML = `<span>Selected stage</span><strong>${stageCopy[stage]}</strong>`;
    }
  });
});
