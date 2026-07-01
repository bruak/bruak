const readingList = document.getElementById('reading-list');
const filterButtons = document.querySelectorAll('[data-filter]');

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

const getLocalizedValue = (value, locale) => {
  if (!value || typeof value === 'string') return value || '';
  return value[locale] || value.tr || value.en || '';
};

const formatReadDate = (value, locale) => {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

const getSourceLabel = entry => {
  if (entry.source) return entry.source;
  if (!entry.url) return '';

  try {
    return new URL(entry.url, window.location.href).hostname.replace(/^www\./, '');
  } catch (error) {
    return '';
  }
};

const buildEntryCard = (entry, locale) => {
  const article = document.createElement('article');
  article.className = 'post-card reading-card interactive-card';

  const title = getLocalizedValue(entry.title, locale);
  const note = getLocalizedValue(entry.note, locale);
  const topics = Array.isArray(entry.topics) ? entry.topics : [];
  const topicTags = topics.map(topic => `<span>${escapeHtml(topic)}</span>`).join('');
  const languageLabel = entry.language ? entry.language.toUpperCase() : '';
  const favoriteLabel = locale === 'tr' ? 'Seçili' : 'Favorite';
  const sourceLabel = getSourceLabel(entry);
  const linkUrl = entry.url || '#';

  article.dataset.topics = topics.join('|').toLowerCase();
  article.innerHTML = `
    <div class="post-meta reading-meta">
      ${sourceLabel ? `<span>${escapeHtml(sourceLabel)}</span>` : ''}
      ${entry.readAt ? `<time datetime="${escapeHtml(entry.readAt)}">${escapeHtml(formatReadDate(entry.readAt, locale))}</time>` : ''}
      ${languageLabel ? `<span>${escapeHtml(languageLabel)}</span>` : ''}
      ${entry.favorite ? `<span>${favoriteLabel}</span>` : ''}
    </div>
    <h2><a href="${escapeHtml(linkUrl)}" target="_blank" rel="noreferrer">${escapeHtml(title)}</a></h2>
    ${note ? `<p>${escapeHtml(note)}</p>` : ''}
    ${topicTags ? `<div class="tag-list">${topicTags}</div>` : ''}
  `;

  return article;
};

const showEmptyState = (title, copy) => {
  if (!readingList) return;
  readingList.innerHTML = `
    <div class="reading-empty">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(copy)}</p>
    </div>
  `;
};

const renderEntries = entries => {
  if (!readingList) return;

  const locale = readingList.dataset.locale || 'tr';
  const activeFilter = document.querySelector('[data-filter].is-active')?.dataset.filter || 'all';
  const normalizedFilter = activeFilter.toLowerCase();
  const sortedEntries = [...entries].sort((a, b) => String(b.readAt || '').localeCompare(String(a.readAt || '')));
  const filteredEntries = normalizedFilter === 'all'
    ? sortedEntries
    : sortedEntries.filter(entry => (entry.topics || []).some(topic => topic.toLowerCase() === normalizedFilter));

  if (!filteredEntries.length) {
    showEmptyState(readingList.dataset.emptyTitle, readingList.dataset.emptyCopy);
    return;
  }

  readingList.innerHTML = '';
  filteredEntries.forEach(entry => readingList.appendChild(buildEntryCard(entry, locale)));
};

const loadReadingList = async () => {
  if (!readingList) return;

  try {
    const response = await fetch('./data/reading-list.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const entries = await response.json();
    const safeEntries = Array.isArray(entries) ? entries : [];

    renderEntries(safeEntries);

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(item => item.classList.remove('is-active'));
        button.classList.add('is-active');
        renderEntries(safeEntries);
      });
    });
  } catch (error) {
    showEmptyState(readingList.dataset.errorTitle, readingList.dataset.errorCopy);
  }
};

loadReadingList();
