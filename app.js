/* ============================================================
   API BASE URL
   ============================================================ */
const API_BASE = 'http://flashcards.akshell.eu/api/v1';

/* ============================================================
   INTERNATIONALISATION
   ============================================================ */
const I18N = {
  fr: {
    back:          '← Retour',
    drill:         '▶ Drill',
    srs:           '⏰ SRS',
    exportColl:    '⬇ Exporter cette collection',
    results:       'Résultats',
    restart:       'Rejouer',
    homeBtn:       'Accueil',
    importJson:    '⬆ Importer JSON',
    exportAll:     '⬇ Exporter tout',
    placeholder:   'Hiragana ou romaji…',
    submit:        'Valider',
    difficulty:    'Difficulté :',
    srsMode:       'Révision SRS',
    phases:        ['Phrases', 'Mots', 'Kanjis'],
    correct:       'Correct !',
    continueBtn:   'Continuer →',
    correctAnswer: 'Bonne réponse :',
    youWrote:      'Tu as écrit :',
    accepted:      'Lecture(s) acceptée(s) :',
    noDueToast:    "Aucune carte à réviser aujourd'hui !",
    dueCount:      n  => `${n} carte${n > 1 ? 's' : ''} à réviser aujourd'hui`,
    noDue:         "Aucune carte à réviser pour aujourd'hui",
    quitConfirm:   'Quitter la session en cours ?',
    perfect:       '🎉 Parfait !',
    sessionDone:   '✅ Session terminée',
    score:         (ok, n) => `${ok} / ${n} ${n === 1 ? 'carte' : 'cartes'} correcte${n > 1 ? 's' : ''}`,
    phaseToast:    (n, name) => `Phase ${n} : ${name}`,
    srcWord:       w  => `Dans le mot : ${w.display} (${w.hiragana})`,
    emptyState:    'Aucune collection.<br>Importez un fichier JSON pour commencer.',
    importInvalid: 'Format invalide. Utilisez un fichier exporté par cette application.',
    alreadyLoaded: 'Ces collections sont déjà chargées.',
    imported:      n  => `${n} collection(s) importée(s) ✓`,
    readError:     'Erreur lors de la lecture du fichier JSON.',
    qualityLabels: ['À revoir', 'Difficile', 'Bien', 'Facile'],
    phrases: 'Phrases', words: 'Mots', kanjis: 'Kanjis',
    signIn:        'Se connecter',
    signOut:       'Se déconnecter',
    syncOk:        n => `${n} collection(s) synchronisée(s) ✓`,
    syncError:     'Erreur de synchronisation',
    syncing:       'Synchronisation…',
    withGoogle:    'Continuer avec Google',
    withGitHub:    'Continuer avec GitHub',
    signedInAs:    name => `Connecté : ${name}`,
  },
  en: {
    back:          '← Back',
    drill:         '▶ Drill',
    srs:           '⏰ SRS',
    exportColl:    '⬇ Export this collection',
    results:       'Results',
    restart:       'Play again',
    homeBtn:       'Home',
    importJson:    '⬆ Import JSON',
    exportAll:     '⬇ Export all',
    placeholder:   'Hiragana or romaji…',
    submit:        'Submit',
    difficulty:    'Difficulty:',
    srsMode:       'SRS Review',
    phases:        ['Sentences', 'Words', 'Kanjis'],
    correct:       'Correct!',
    continueBtn:   'Continue →',
    correctAnswer: 'Correct answer:',
    youWrote:      'You wrote:',
    accepted:      'Accepted reading(s):',
    noDueToast:    'No cards due today!',
    dueCount:      n  => `${n} card${n !== 1 ? 's' : ''} due today`,
    noDue:         'No cards due today',
    quitConfirm:   'Quit the current session?',
    perfect:       '🎉 Perfect!',
    sessionDone:   '✅ Session complete',
    score:         (ok, n) => `${ok} / ${n} ${n === 1 ? 'card' : 'cards'} correct`,
    phaseToast:    (n, name) => `Phase ${n}: ${name}`,
    srcWord:       w  => `In word: ${w.display} (${w.hiragana})`,
    emptyState:    'No collections.<br>Import a JSON file to get started.',
    importInvalid: 'Invalid format. Use a file exported by this app.',
    alreadyLoaded: 'These collections are already loaded.',
    imported:      n  => `${n} collection(s) imported ✓`,
    readError:     'Error reading the JSON file.',
    qualityLabels: ['Again', 'Hard', 'Good', 'Easy'],
    phrases: 'Sentences', words: 'Words', kanjis: 'Kanjis',
    signIn:        'Sign in',
    signOut:       'Sign out',
    syncOk:        n => `${n} collection(s) synced ✓`,
    syncError:     'Sync error',
    syncing:       'Syncing…',
    withGoogle:    'Continue with Google',
    withGitHub:    'Continue with GitHub',
    signedInAs:    name => `Signed in: ${name}`,
  }
};

function i18n(key, ...args) {
  const dict = I18N[state.lang] || I18N.fr;
  const val = dict[key];
  if (typeof val === 'function') return val(...args);
  return val != null ? val : key;
}

/* ============================================================
   STATE
   ============================================================ */
const state = {
  collections:    [],
  currentCollId:  null,
  currentSession: null,
  currentView:    'home',
  lang:           'fr',
  auth:           null,
};

/* ============================================================
   COOKIES
   ============================================================ */
function getCookie(name) {
  const entry = document.cookie.split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(name + '='));
  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : null;
}
function setCookie(name, value, days = 365) {
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${exp};path=/;SameSite=Lax`;
}
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

/* ============================================================
   LANGUAGE
   ============================================================ */
function detectLang() {
  const saved = getCookie('fc_lang');
  if (saved === 'fr' || saved === 'en') return saved;
  for (const l of (navigator.languages || [navigator.language || 'fr'])) {
    if (l.startsWith('fr')) return 'fr';
    if (l.startsWith('en')) return 'en';
  }
  return 'fr';
}

function setLang(lang, saveCookie = false) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-lang').textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
  if (saveCookie) setCookie('fc_lang', lang);
  translateUI();
  switch (state.currentView) {
    case 'home':       renderHome(); break;
    case 'collection': renderCollection(state.currentCollId); break;
    case 'results':    renderResults(); break;
    case 'session':    renderCard(); break;
  }
}

/* ============================================================
   STORAGE
   ============================================================ */
const KEYS = {
  IMPORTED:     'fc_imported',
  SRS:          'fc_srs',
  SRS_REMOTE:   'fc_srs_remote',
  AUTH:         'fc_auth',
  REMOTE_COLLS: 'fc_remote_colls',
};

function loadImported() {
  try { return JSON.parse(localStorage.getItem(KEYS.IMPORTED) || '[]'); }
  catch { return []; }
}
function saveImported(arr) {
  localStorage.setItem(KEYS.IMPORTED, JSON.stringify(arr));
}
function loadSRS() {
  const key = state.auth ? KEYS.SRS_REMOTE : KEYS.SRS;
  try { return JSON.parse(localStorage.getItem(key) || '{}'); }
  catch { return {}; }
}
function saveSRS(data) {
  const key = state.auth ? KEYS.SRS_REMOTE : KEYS.SRS;
  localStorage.setItem(key, JSON.stringify(data));
  if (state.auth) pushSRS(data);
}
function loadRemoteColls() {
  try { return JSON.parse(localStorage.getItem(KEYS.REMOTE_COLLS) || '[]'); }
  catch { return []; }
}

/* ============================================================
   AUTH
   ============================================================ */
function loadAuth() {
  try { return JSON.parse(localStorage.getItem(KEYS.AUTH) || 'null'); }
  catch { return null; }
}
function saveAuth(data) { localStorage.setItem(KEYS.AUTH, JSON.stringify(data)); }
function clearAuth() {
  localStorage.removeItem(KEYS.AUTH);
  localStorage.removeItem(KEYS.SRS_REMOTE);
  localStorage.removeItem(KEYS.REMOTE_COLLS);
}

async function apiFetch(path, opts = {}) {
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
  if (state.auth?.token) headers['Authorization'] = `Bearer ${state.auth.token}`;
  const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
  if (!res.ok) throw new Error(res.status);
  return res.json();
}

async function fetchAndCacheRemote() {
  if (!state.auth) return;
  try {
    toast(i18n('syncing'));
    const [colls, srsData] = await Promise.all([
      apiFetch('/collections'),
      apiFetch('/srs'),
    ]);
    if (Array.isArray(colls))
      localStorage.setItem(KEYS.REMOTE_COLLS, JSON.stringify(colls));
    if (srsData && typeof srsData === 'object')
      localStorage.setItem(KEYS.SRS_REMOTE, JSON.stringify(srsData));
    state.collections = mergeCollections();
    renderHome();
    toast(i18n('syncOk', Array.isArray(colls) ? colls.length : 0));
  } catch {
    toast(i18n('syncError'));
  }
}

async function pushSRS(data) {
  if (!state.auth) return;
  try { await apiFetch('/srs', { method: 'PUT', body: JSON.stringify(data) }); }
  catch { /* silent — local copy already saved */ }
}

function mergeCollections() {
  const remote   = loadRemoteColls();
  const imported = loadImported();
  const remoteIds  = new Set(remote.map(c => c.id));
  const impFiltered = imported.filter(c => !remoteIds.has(c.id));
  const allIds   = new Set([...remote, ...impFiltered].map(c => c.id));
  const defFiltered = DEFAULT_COLLECTIONS.filter(c => !allIds.has(c.id));
  return [...defFiltered, ...impFiltered, ...remote];
}

function handleOAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  const token  = params.get('token');
  if (!token) return;
  const auth = {
    token,
    name:   params.get('user_name')   || params.get('name')   || 'User',
    avatar: params.get('user_avatar') || params.get('avatar') || null,
  };
  saveAuth(auth);
  state.auth = auth;
  window.history.replaceState({}, '', window.location.pathname);
}

/* ============================================================
   SRS  (simplified SM-2)
   quality: 0 = wrong  1 = hard  2 = good  3 = easy
   ============================================================ */
function srsKey(collId, type, itemId) {
  return `${collId}:${type}:${itemId}`;
}

function scheduleSRS(key, quality) {
  const all = loadSRS();
  let it = all[key] || { interval: 0, ef: 2.5, reps: 0, due: null };

  if (quality < 1) {
    it.interval = 1;
    it.reps = 0;
  } else {
    if (it.reps === 0)      it.interval = 1;
    else if (it.reps === 1) it.interval = 6;
    else                    it.interval = Math.round(it.interval * it.ef);
    it.reps++;
    it.ef = Math.max(1.3, it.ef + 0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02));
  }

  it.due = new Date(Date.now() + it.interval * 86_400_000).toISOString();
  all[key] = it;
  saveSRS(all);
}

function getDueItems(coll) {
  const all = loadSRS();
  const now = new Date();
  const items = [
    ...coll.sentences.map(s => ({ type: 'sentence', item: s })),
    ...coll.words    .map(w => ({ type: 'word',     item: w })),
    ...coll.kanjis   .map(k => ({ type: 'kanji',    item: k }))
  ];
  return items.filter(({ type, item }) => {
    const d = all[srsKey(coll.id, type, item.id)];
    return !d || !d.due || new Date(d.due) <= now;
  });
}

/* ============================================================
   ANSWER CHECKING
   ============================================================ */
const PUNCT_RE = /[\s\u3000\u3001\u3002\uff01\uff0c\uff0e\uff1f\u30fb！？、。・…,.!?]+/g;

function normalize(str) {
  const s = str.trim().toLowerCase().replace(PUNCT_RE, '');
  const h = (typeof wanakana !== 'undefined') ? wanakana.toHiragana(s) : s;
  return h.replace(PUNCT_RE, '');
}

function checkAnswer(input, card) {
  const n = normalize(input);
  if (card.type === 'kanji') {
    return card.data.readings.some(r => normalize(r) === n);
  }
  return normalize(card.data.hiragana) === n;
}

/* ============================================================
   SESSION
   ============================================================ */
class Session {
  constructor(coll, mode) {
    this.coll   = coll;
    this.mode   = mode;   // 'drill' | 'srs'
    this.phase  = 0;      // drill: 0=sentences, 1=words, 2=kanjis
    this.queue  = [];
    this.idx    = 0;
    // Per-phase stats: { total, correct, errorIds: Set }
    this.stats  = [0, 1, 2].map(() => ({ total: 0, correct: 0, errorIds: new Set() }));

    if (mode === 'drill') this._drillPhase0();
    else                  this._buildSRS();
  }

  /* ---- drill helpers ---- */
  _drillPhase0() {
    this.phase = 0;
    this.queue = shuffle(this.coll.sentences.map(s => ({ type: 'sentence', data: s })));
    this.idx   = 0;
  }

  _drillPhase1(errorSentenceIds) {
    const ids = new Set(errorSentenceIds);
    const words = this.coll.words.filter(w => w.sentenceIds.some(id => ids.has(id)));
    this.phase = 1;
    this.queue = shuffle(words.map(w => ({ type: 'word', data: w })));
    this.idx   = 0;
  }

  _drillPhase2(errorWordIds) {
    const ids = new Set(errorWordIds);
    const kanjis = this.coll.kanjis.filter(k => k.wordIds.some(id => ids.has(id)));
    this.phase = 2;
    this.queue = shuffle(kanjis.map(k => ({ type: 'kanji', data: k })));
    this.idx   = 0;
  }

  /* ---- SRS helper ---- */
  _buildSRS() {
    this.phase = 0;
    this.queue = shuffle(getDueItems(this.coll).map(({ type, item }) => ({ type, data: item })));
    this.idx   = 0;
  }

  /* ---- public API ---- */
  current() { return this.queue[this.idx] || null; }
  progress() { return { current: this.idx, total: this.queue.length }; }

  recordResult(correct) {
    const card     = this.current();
    const phaseIdx = this.mode === 'srs' ? 0 : this.phase;
    const st       = this.stats[phaseIdx];
    st.total++;
    if (correct) {
      st.correct++;
    } else {
      st.errorIds.add(card.data.id);
    }
  }

  /** Advance to next card. Returns: 'next' | 'phase' | 'done' */
  advance() {
    if (this.idx < this.queue.length - 1) {
      this.idx++;
      return 'next';
    }
    if (this.mode === 'srs') return 'done';
    return this._nextDrillPhase();
  }

  _nextDrillPhase() {
    if (this.phase === 0) {
      const errs = [...this.stats[0].errorIds];
      if (errs.length > 0) {
        this._drillPhase1(errs);
        if (this.queue.length > 0) return 'phase';
      }
      return 'done';
    }
    if (this.phase === 1) {
      const errs = [...this.stats[1].errorIds];
      if (errs.length > 0) {
        this._drillPhase2(errs);
        if (this.queue.length > 0) return 'phase';
      }
      return 'done';
    }
    return 'done';
  }

  resultsSummary() {
    if (this.mode === 'srs') {
      const s = this.stats[0];
      return s.total > 0 ? [{ label: i18n('srsMode'), total: s.total, correct: s.correct }] : [];
    }
    const phases = i18n('phases');
    return this.stats
      .map((s, idx) => ({ label: phases[idx], total: s.total, correct: s.correct }))
      .filter(r => r.total > 0);
  }
}

/* ============================================================
   UTILITIES
   ============================================================ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCollection(id) {
  return state.collections.find(c => c.id === id) || null;
}

function t(item) {
  return (state.lang === 'fr' ? item.fr : item.en) || item.en || item.fr || '';
}

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}

function cardSizeClass(text) {
  const len = (text || '').length;
  if (len <= 1)  return 'size-xl';
  if (len <= 4)  return 'size-lg';
  if (len <= 10) return 'size-md';
  return 'size-sm';
}

/* ============================================================
   UI TRANSLATION — static labels
   ============================================================ */
function translateUI() {
  const $ = id => document.getElementById(id);
  $('btn-import').textContent       = i18n('importJson');
  $('btn-export-all').textContent   = i18n('exportAll');
  $('coll-back-btn').textContent    = i18n('back');
  $('btn-drill').textContent        = i18n('drill');
  $('btn-srs').textContent          = i18n('srs');
  $('btn-export-coll').textContent  = i18n('exportColl');
  $('answer-input').placeholder     = i18n('placeholder');
  $('submit-btn').textContent       = i18n('submit');
  $('results-h1').textContent       = i18n('results');
  $('btn-restart').textContent      = i18n('restart');
  $('btn-results-home').textContent = i18n('homeBtn');
  updateAuthButton();
}

/* ============================================================
   AUTH UI
   ============================================================ */
function updateAuthButton() {
  const btn = document.getElementById('btn-auth');
  if (state.auth) {
    btn.innerHTML = state.auth.avatar
      ? `<img src="${esc(state.auth.avatar)}" class="auth-btn-avatar" alt="">`
      : `<span class="auth-btn-initial">${esc((state.auth.name || 'U')[0].toUpperCase())}</span>`;
    btn.title = i18n('signedInAs', state.auth.name || 'User');
    btn.classList.add('signed-in');
  } else {
    btn.innerHTML = '👤';
    btn.title = i18n('signIn');
    btn.classList.remove('signed-in');
  }
}

function renderAuthModal() {
  const modal = document.getElementById('auth-modal');
  const inner = document.getElementById('auth-modal-inner');
  const redirect = encodeURIComponent(window.location.href.split('?')[0]);

  if (state.auth) {
    inner.innerHTML = `
      <div class="auth-user">
        ${state.auth.avatar
          ? `<img class="auth-avatar" src="${esc(state.auth.avatar)}" alt="">`
          : `<div class="auth-avatar-initial">${esc((state.auth.name || 'U')[0].toUpperCase())}</div>`
        }
        <div class="auth-name">${esc(state.auth.name || 'User')}</div>
      </div>
      <button class="btn btn-ghost" id="btn-signout-inner">${i18n('signOut')}</button>
    `;
    inner.querySelector('#btn-signout-inner').addEventListener('click', () => {
      clearAuth();
      state.auth = null;
      state.collections = mergeCollections();
      modal.classList.add('hidden');
      updateAuthButton();
      renderHome();
    });
  } else {
    inner.innerHTML = `
      <h2 class="auth-title">${i18n('signIn')}</h2>
      <a class="btn btn-auth-provider btn-google"
         href="${API_BASE}/auth/google?redirect_uri=${redirect}">
        <svg viewBox="0 0 18 18" width="18" height="18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
        ${i18n('withGoogle')}
      </a>
      <a class="btn btn-auth-provider btn-github"
         href="${API_BASE}/auth/github?redirect_uri=${redirect}">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        ${i18n('withGitHub')}
      </a>
    `;
  }
  modal.classList.remove('hidden');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');
  state.currentView = viewId;
}

/* ============================================================
   HOME
   ============================================================ */
function renderHome() {
  const grid = document.getElementById('collections-grid');
  grid.innerHTML = '';

  if (state.collections.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="icon">📚</div>
        <p>${i18n('emptyState')}</p>
      </div>`;
    return;
  }

  state.collections.forEach(coll => {
    const due  = getDueItems(coll).length;
    const card = document.createElement('div');
    card.className = 'coll-card';
    card.innerHTML = `
      <h2>${esc(coll.name)}</h2>
      <div class="coll-badges">
        <span class="badge">📝 ${coll.sentences.length} ${i18n('phrases').toLowerCase()}</span>
        <span class="badge">📖 ${coll.words.length} ${i18n('words').toLowerCase()}</span>
        <span class="badge">漢 ${coll.kanjis.length} ${i18n('kanjis').toLowerCase()}</span>
        ${due > 0 ? `<span class="badge badge-due">⏰ ${i18n('dueCount', due)}</span>` : ''}
      </div>`;
    card.addEventListener('click', () => {
      state.currentCollId = coll.id;
      renderCollection(coll.id);
      navigate('collection');
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   COLLECTION
   ============================================================ */
function renderCollection(collId) {
  const coll = getCollection(collId);
  if (!coll) return;

  document.getElementById('coll-name').textContent = coll.name;

  const due = getDueItems(coll).length;
  document.getElementById('srs-status').innerHTML = due > 0
    ? `<span class="due-count">${i18n('dueCount', due)}</span>`
    : `<span>${i18n('noDue')}</span>`;

  const preview = document.getElementById('coll-preview');
  preview.innerHTML = `
    ${previewSection(i18n('phrases'), coll.sentences.map(s => ({
      jp: s.display, reading: s.hiragana, trans: t(s)
    })), 'normal')}
    ${previewSection(i18n('words'), coll.words.map(w => ({
      jp: w.display, reading: w.hiragana, trans: t(w)
    })), 'normal')}
    ${previewSection(i18n('kanjis'), coll.kanjis.map(k => ({
      jp: k.kanji, reading: k.readings.join('、'), trans: t(k)
    })), 'kanji')}
  `;
}

function previewSection(title, items, style) {
  return `
    <div class="preview-section">
      <h3>${esc(title)} (${items.length})</h3>
      ${items.map(it => `
        <div class="preview-row">
          <div>
            <div class="jp" style="${style === 'kanji' ? 'font-size:1.5rem' : ''}">${esc(it.jp)}</div>
            <div class="reading">${esc(it.reading)}</div>
          </div>
          <div class="trans">${esc(it.trans)}</div>
        </div>
      `).join('')}
    </div>`;
}

/* ============================================================
   SESSION — render card
   ============================================================ */
function renderCard() {
  const session = state.currentSession;
  if (!session) return;

  const card = session.current();
  if (!card) { continueSession(); return; } // safety – shouldn't happen

  const { current, total } = session.progress();

  /* progress */
  document.getElementById('progress-fill').style.width = `${total > 0 ? ((current) / total) * 100 : 0}%`;
  document.getElementById('progress-text').textContent = `${current + 1} / ${total}`;

  /* phase dots (drill only) */
  const dotsEl = document.getElementById('phase-dots');
  if (session.mode === 'drill') {
    dotsEl.innerHTML = [0, 1, 2].map(i =>
      `<span class="phase-dot ${i < session.phase ? 'done' : i === session.phase ? 'active' : ''}"></span>`
    ).join('');
  } else {
    dotsEl.innerHTML = '';
  }

  /* phase label */
  document.getElementById('phase-label').textContent =
    session.mode === 'srs' ? i18n('srsMode') : i18n('phases')[session.phase];

  /* card type badge */
  const badgeEl = document.getElementById('card-type-badge');
  const badgeMap = {
    sentence: ['文章', 'badge-sentence'],
    word:     ['単語', 'badge-word'],
    kanji:    ['漢字', 'badge-kanji']
  };
  const [label, cls] = badgeMap[card.type];
  badgeEl.textContent = label;
  badgeEl.className   = `card-type-badge ${cls}`;

  /* display text */
  const displayEl = document.getElementById('card-display');
  const text = card.type === 'kanji' ? card.data.kanji : card.data.display;
  displayEl.textContent = text;
  displayEl.className   = `card-display ${cardSizeClass(text)}`;

  /* context line (kanji → show source word) */
  const contextEl = document.getElementById('card-context');
  if (card.type === 'kanji') {
    const srcWord = session.coll.words.find(w => card.data.wordIds.includes(w.id));
    contextEl.textContent = srcWord ? i18n('srcWord', srcWord) : '';
  } else {
    contextEl.textContent = '';
  }

  /* translation */
  document.getElementById('card-translation').textContent = t(card.data);

  /* reset input & UI */
  const input = document.getElementById('answer-input');
  input.value    = '';
  input.className = '';
  input.readOnly  = false;

  document.getElementById('answer-feedback').classList.add('hidden');
  document.getElementById('answer-feedback').innerHTML = '';
  document.getElementById('submit-btn').classList.remove('hidden');

  const qbar = document.getElementById('srs-quality-bar');
  qbar.classList.remove('visible');
  qbar.innerHTML = `<span class="label">${i18n('difficulty')}</span>`;

  input.focus();
}

/* ============================================================
   SESSION — submit answer
   ============================================================ */
function submitAnswer() {
  const session = state.currentSession;
  if (!session) return;

  const input = document.getElementById('answer-input');
  const raw   = input.value;
  if (!raw.trim()) { input.focus(); return; }

  const card    = session.current();
  const correct = checkAnswer(raw, card);

  session.recordResult(correct);
  input.readOnly  = true;
  input.className = correct ? 'correct' : 'wrong';
  input.focus(); // keep focus so Enter/Tab fire on the input
  document.getElementById('submit-btn').classList.add('hidden');

  /* SRS scheduling */
  if (session.mode === 'srs') {
    const key = srsKey(session.coll.id, card.type, card.data.id);
    if (!correct) {
      scheduleSRS(key, 0);
    } else {
      showSRSQualityBar(key);
    }
  }

  /* feedback */
  const fb = document.getElementById('answer-feedback');
  fb.classList.remove('hidden');

  let bodyHtml;
  if (correct) {
    bodyHtml = `
      <span class="feedback-icon">✅</span>
      <div class="feedback-body">
        <div class="feedback-value ok">${i18n('correct')}</div>
      </div>
      ${session.mode !== 'srs' ? `<button class="btn btn-primary btn-sm" id="continue-btn">${i18n('continueBtn')}</button>` : ''}
    `;
  } else {
    const typed    = esc(normalize(raw));
    const answerHtml = card.type === 'kanji'
      ? `<div class="feedback-label">${i18n('accepted')}</div>
         <div class="feedback-value fail">${esc(card.data.readings.join('、'))}</div>
         <div class="feedback-typed">${i18n('youWrote')} ${typed}</div>`
      : `<div class="feedback-label">${i18n('correctAnswer')}</div>
         <div class="feedback-value fail">${esc(card.data.hiragana)}</div>
         <div class="feedback-typed">${i18n('youWrote')} ${typed}</div>`;

    bodyHtml = `
      <span class="feedback-icon">❌</span>
      <div class="feedback-body">${answerHtml}</div>
      <button class="btn btn-primary btn-sm" id="continue-btn">${i18n('continueBtn')}</button>
    `;
  }

  fb.innerHTML = bodyHtml;

  const cont = document.getElementById('continue-btn');
  if (cont) cont.addEventListener('click', continueSession);
}

/* ============================================================
   SESSION — SRS quality buttons
   ============================================================ */
function showSRSQualityBar(key) {
  const bar = document.getElementById('srs-quality-bar');
  bar.classList.add('visible');

  const colors = ['#dc2626', '#d97706', '#16a34a', '#2563eb'];
  i18n('qualityLabels').forEach((label, q) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm';
    btn.style.cssText = `background:${colors[q]};color:#fff`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      scheduleSRS(key, q);
      bar.classList.remove('visible');
      bar.innerHTML = `<span class="label">${i18n('difficulty')}</span>`;
      continueSession();
    });
    bar.appendChild(btn);
  });
}

/* ============================================================
   SESSION — continue / advance
   ============================================================ */
function continueSession() {
  const session = state.currentSession;
  if (!session) return;

  const result = session.advance();

  if (result === 'done') {
    renderResults();
    navigate('results');
    return;
  }

  if (result === 'phase') {
    toast(i18n('phaseToast', session.phase + 1, i18n('phases')[session.phase]));
  }

  renderCard();
}

/* ============================================================
   RESULTS
   ============================================================ */
function renderResults() {
  const session  = state.currentSession;
  const summary  = session.resultsSummary();
  const totalOk  = summary.reduce((s, p) => s + p.correct, 0);
  const totalAll = summary.reduce((s, p) => s + p.total, 0);

  document.getElementById('results-title').textContent =
    (totalOk === totalAll && totalAll > 0) ? i18n('perfect') : i18n('sessionDone');
  document.getElementById('results-subtitle').textContent = i18n('score', totalOk, totalAll);

  document.getElementById('results-breakdown').innerHTML = summary.map(p => {
    const pct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
    return `
      <div class="results-phase">
        <h3>${esc(p.label)}</h3>
        <div class="score-row">
          <div class="score-bar">
            <div class="score-fill" style="width:${pct}%"></div>
          </div>
          <span class="score-text">${p.correct} / ${p.total}</span>
        </div>
      </div>`;
  }).join('');
}

/* ============================================================
   IMPORT / EXPORT
   ============================================================ */
function exportCollections(collections) {
  const json = JSON.stringify(collections, null, 2);
  const url  = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  const a    = document.createElement('a');
  a.href     = url;
  a.download = collections.length === 1 ? `${collections[0].name}.json` : 'flashcards.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const raw  = JSON.parse(e.target.result);
      const arr  = Array.isArray(raw) ? raw : [raw];
      const valid = arr.filter(c =>
        c && typeof c.id === 'string' && typeof c.name === 'string' &&
        Array.isArray(c.sentences) && Array.isArray(c.words) && Array.isArray(c.kanjis)
      );
      if (valid.length === 0) {
        alert(i18n('importInvalid'));
        return;
      }
      const existingIds = new Set(state.collections.map(c => c.id));
      const fresh = valid.filter(c => !existingIds.has(c.id));
      if (fresh.length === 0) {
        alert(i18n('alreadyLoaded'));
        return;
      }
      const saved = loadImported();
      saveImported([...saved, ...fresh]);
      state.collections = mergeCollections();
      renderHome();
      toast(i18n('imported', fresh.length));
    } catch {
      alert(i18n('readError'));
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   EVENTS
   ============================================================ */
function attachEvents() {
  /* Language toggle */
  document.getElementById('btn-lang').addEventListener('click', () => {
    setLang(state.lang === 'fr' ? 'en' : 'fr', true);
  });

  /* Auth */
  document.getElementById('btn-auth').addEventListener('click', renderAuthModal);
  document.getElementById('auth-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
  });
  document.getElementById('auth-modal-close').addEventListener('click', () => {
    document.getElementById('auth-modal').classList.add('hidden');
  });

  /* Home */
  document.getElementById('btn-import').addEventListener('click', () =>
    document.getElementById('file-import').click()
  );
  document.getElementById('file-import').addEventListener('change', e => {
    importFile(e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('btn-export-all').addEventListener('click', () =>
    exportCollections(state.collections)
  );

  /* Collection */
  document.getElementById('coll-back-btn').addEventListener('click', () => navigate('home'));

  document.getElementById('btn-export-coll').addEventListener('click', () => {
    const coll = getCollection(state.currentCollId);
    if (coll) exportCollections([coll]);
  });

  document.getElementById('btn-drill').addEventListener('click', () => {
    const coll = getCollection(state.currentCollId);
    if (!coll) return;
    state.currentSession = new Session(coll, 'drill');
    navigate('session');
    renderCard();
  });

  document.getElementById('btn-srs').addEventListener('click', () => {
    const coll = getCollection(state.currentCollId);
    if (!coll) return;
    if (getDueItems(coll).length === 0) {
      toast(i18n('noDueToast'));
      return;
    }
    state.currentSession = new Session(coll, 'srs');
    navigate('session');
    renderCard();
  });

  /* Session */
  document.getElementById('session-back-btn').addEventListener('click', () => {
    if (confirm(i18n('quitConfirm'))) {
      navigate('collection');
    }
  });

  document.getElementById('submit-btn').addEventListener('click', submitAnswer);

  document.getElementById('answer-input').addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== 'Tab') return;
    e.preventDefault(); // prevent Tab from shifting focus
    const qbar = document.getElementById('srs-quality-bar');
    if (qbar.classList.contains('visible')) return; // wait for quality pick
    const fb = document.getElementById('answer-feedback');
    if (fb.classList.contains('hidden')) {
      if (e.key === 'Enter') submitAnswer(); // Tab does nothing before submitting
    } else {
      continueSession();
    }
  });

  /* Results */
  document.getElementById('btn-restart').addEventListener('click', () => {
    const coll = getCollection(state.currentCollId);
    if (!coll) return;
    state.currentSession = new Session(coll, state.currentSession.mode);
    navigate('session');
    renderCard();
  });

  document.getElementById('btn-results-home').addEventListener('click', () => {
    navigate('home');
    renderHome();
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  handleOAuthCallback();
  state.auth = loadAuth();
  state.lang = detectLang();
  document.documentElement.lang = state.lang;
  state.collections = mergeCollections();

  const input = document.getElementById('answer-input');
  if (typeof wanakana !== 'undefined') wanakana.bind(input);

  attachEvents();
  translateUI();
  renderHome();
  navigate('home');

  if (state.auth) fetchAndCacheRemote();
}

document.addEventListener('DOMContentLoaded', init);
