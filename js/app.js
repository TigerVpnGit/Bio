/* ================= ابزارها ================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ================= وضعیت برنامه ================= */
const State = {
  filter: 'all',
  lang: 'fa',
  themeMode: 'auto'
};

/* ================= ذخیره‌سازی ================= */
const Storage = {
  get(key, fallback = null) {
    try { return localStorage.getItem(key) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }
};

/* ================= تم ================= */
const THEME_CYCLE = ['auto', 'light', 'dark'];

function getSystemIsDark() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return false;
  }
  const h = new Date().getHours();
  return !(h >= 6 && h < 18);
}

function applyTheme() {
  const dark = State.themeMode === 'auto' ? getSystemIsDark() : State.themeMode === 'dark';
  document.documentElement.classList.toggle('dark', dark);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#0d1024' : '#eaf3ff');
  renderThemeIcon();
}

function renderThemeIcon() {
  const iconEl = $('#themeIcon');
  if (!iconEl) return;
  const icons = {
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" fill="currentColor"/><path d="M12 3a9 9 0 0 0 0 18" fill="currentColor" stroke="none"/><path d="M12 3a9 9 0 0 1 0 18" fill="none"/>',
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    dark: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'
  };
  iconEl.innerHTML = icons[State.themeMode];
}

function cycleTheme() {
  const i = THEME_CYCLE.indexOf(State.themeMode);
  State.themeMode = THEME_CYCLE[(i + 1) % THEME_CYCLE.length];
  Storage.set('tiger-theme-mode', State.themeMode);
  applyTheme();
}

/* ================= زبان ================= */
function applyLang() {
  const t = TRANSLATIONS[State.lang];
  const isRTL = State.lang === 'fa';

  document.documentElement.setAttribute('lang', State.lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.title = t.title;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  $$('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (t[key]) el.title = t[key];
  });

  const label = $('#langLabel');
  if (label) label.textContent = isRTL ? 'EN' : 'فا';

  render();
}

function toggleLang() {
  State.lang = State.lang === 'fa' ? 'en' : 'fa';
  Storage.set('tiger-lang', State.lang);
  applyLang();
}

/* ================= کپی ================= */
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    showToast(TRANSLATIONS[State.lang].copySuccess);
  } catch {
    showToast('⚠ Error');
  }
}

let toastTimer;
function showToast(msg) {
  const toast = $('#toast');
  const toastText = $('#toastText');
  if (!toast) return;
  if (toastText) toastText.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* ================= مودال QR ================= */
function showQRModal(url) {
  const modal = $('#qrModal');
  const qrImage = $('#qrImage');
  const qrLinkText = $('#qrLinkText');
  
  // استفاده از API رایگان برای ساخت QR کد
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  
  qrImage.src = qrApiUrl;
  qrLinkText.textContent = url;
  
  modal.classList.add('active');
}

function closeQRModal() {
  $('#qrModal').classList.remove('active');
}

/* ================= رندر کارت‌ها ================= */
function render() {
  const grid = $('#grid');
  const searchInput = $('#search');
  if (!grid || !searchInput) return;

  const lang = State.lang;
  const q = (searchInput.value || '').trim().toLowerCase();

  const filtered = LINKS_DATA.filter(l => {
    const matchCat = State.filter === 'all' || l.cat === State.filter;
    if (!matchCat) return false;
    if (!q) return true;
    const name = (l.name[lang] || l.name.fa).toLowerCase();
    const desc = (l.desc[lang] || l.desc.fa).toLowerCase();
    return name.includes(q) || desc.includes(q) || l.handle.toLowerCase().includes(q);
  });

  grid.innerHTML = '';

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty">${TRANSLATIONS[lang].empty}</div>`;
    return;
  }

  filtered.forEach((l, i) => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.setProperty('--brand', l.brand);
    
    // تاخیر پلکانی برای انیمیشن قوی‌تر
    a.style.animationDelay = (i * 0.08) + 's';

    const badgeHTML = l.badge && l.badge[lang] ? `<span class="badge">${l.badge[lang]}</span>` : '';

    a.innerHTML = `
      ${badgeHTML}
      <div class="card-top">
        <div class="card-icon">${l.icon}</div>
        <div class="card-actions">
          <button class="action-btn copy-btn" type="button" data-url="${l.url}" title="Copy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="action-btn qr-btn" type="button" data-url="${l.url}" title="QR Code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-name">${l.name[lang] || l.name.fa}</div>
      <div class="card-desc">${l.desc[lang] || l.desc.fa}</div>
      <div class="card-handle"><span>${l.handle}</span></div>
    `;

    const copyBtn = a.querySelector('.copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation(); copyText(l.url);
      });
    }

    const qrBtn = a.querySelector('.qr-btn');
    if (qrBtn) {
      qrBtn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation(); showQRModal(l.url);
      });
    }

    grid.appendChild(a);
  });
}

/* ================= رویدادها ================= */
function bindEvents() {
  const searchInput = $('#search');
  if (searchInput) searchInput.addEventListener('input', render);

  const tabs = $('#tabs');
  if (tabs) {
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab');
      if (!btn) return;
      $$('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      State.filter = btn.dataset.filter || 'all';
      render();
    });
  }

  const themeBtn = $('#themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', cycleTheme);

  const langBtn = $('#langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);

  // لوگو فال‌بک
  const logo = $('#brandLogo');
  const fallback = $('#brandFallback');
  if (logo && fallback) {
    logo.addEventListener('error', () => {
      logo.style.display = 'none'; fallback.style.display = 'inline-block';
    });
  }

  // گوش دادن به تغییر تم سیستم
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => { if (State.themeMode === 'auto') applyTheme(); };
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  }

  // بستن مودال QR
  const closeModalBtn = $('#closeModal');
  const modalOverlay = $('#qrModal');
  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', closeQRModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeQRModal();
    });
  }
}

/* ================= PWA ================= */
function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
}

/* ================= راه‌اندازی ================= */
function init() {
  State.lang = Storage.get('tiger-lang', 'fa') === 'en' ? 'en' : 'fa';
  State.themeMode = Storage.get('tiger-theme-mode', 'auto');
  if (!THEME_CYCLE.includes(State.themeMode)) State.themeMode = 'auto';

  const searchInput = $('#search');
  if (searchInput) searchInput.value = '';

  applyTheme();
  applyLang();
  bindEvents();
  registerSW();
  render();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
