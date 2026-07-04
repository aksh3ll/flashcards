/* ============================================================
   STATE
   ============================================================ */
const state = {
  collections: [],    // merged DEFAULT_COLLECTIONS + imported
  currentCollId: null,
  currentSession: null,
  lang: 'fr'         // 'fr' | 'en'
};

/* ============================================================
   STORAGE
   ============================================================ */
const KEYS = {
  IMPORTED: 'fc_imported',
  SRS:      'fc_srs'
};

function loadImported() {
  try { return JSON.parse(localStorage.getItem(KEYS.IMPORTED) || '[]'); }
  catch { return []; }
}
function saveImported(arr) {
  localStorage.setItem(KEYS.IMPORTED, JSON.stringify(arr));
}
function loadSRS() {
  try { return JSON.parse(localStorage.getItem(KEYS.SRS) || '{}'); }
  catch { return {}; }
}
function saveSRS(data) {
  localStorage.setItem(KEYS.SRS, JSON.stringify(data));
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
function normalize(str) {
  const s = str.trim().toLowerCase();
  return (typeof wanakana !== 'undefined') ? wanakana.toHiragana(s) : s;
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
      return s.total > 0 ? [{ label: 'Session SRS', total: s.total, correct: s.correct }] : [];
    }
    const labels = ['Phrases', 'Mots', 'Kanjis'];
    return this.stats
      .map((s, i) => ({ label: labels[i], total: s.total, correct: s.correct }))
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
   NAVIGATION
   ============================================================ */
function navigate(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');
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
        <p>Aucune collection.<br>Importez un fichier JSON pour commencer.</p>
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
        <span class="badge">📝 ${coll.sentences.length} phrases</span>
        <span class="badge">📖 ${coll.words.length} mots</span>
        <span class="badge">漢 ${coll.kanjis.length} kanjis</span>
        ${due > 0 ? `<span class="badge badge-due">⏰ ${due} à réviser</span>` : ''}
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
    ? `<span class="due-count">${due} cartes à réviser aujourd'hui</span>`
    : `<span>Aucune carte à réviser pour aujourd'hui</span>`;

  const preview = document.getElementById('coll-preview');
  preview.innerHTML = `
    ${previewSection('Phrases',  coll.sentences.map(s => ({
      jp: s.display, reading: s.hiragana, trans: t(s)
    })), 'normal')}
    ${previewSection('Mots', coll.words.map(w => ({
      jp: w.display, reading: w.hiragana, trans: t(w)
    })), 'normal')}
    ${previewSection('Kanjis', coll.kanjis.map(k => ({
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
  const phaseNames = ['Phrases', 'Mots', 'Kanjis'];
  document.getElementById('phase-label').textContent =
    session.mode === 'srs' ? 'Révision SRS' : phaseNames[session.phase];

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
    contextEl.textContent = srcWord ? `Dans le mot : ${srcWord.display} (${srcWord.hiragana})` : '';
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
  qbar.innerHTML = '<span class="label">Difficulté :</span>';

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
        <div class="feedback-value ok">Correct !</div>
      </div>
      ${session.mode !== 'srs' ? `<button class="btn btn-primary btn-sm" id="continue-btn">Continuer →</button>` : ''}
    `;
  } else {
    const typed    = esc(normalize(raw));
    const answerHtml = card.type === 'kanji'
      ? `<div class="feedback-label">Lecture(s) acceptée(s) :</div>
         <div class="feedback-value fail">${esc(card.data.readings.join('、'))}</div>
         <div class="feedback-typed">Tu as écrit : ${typed}</div>`
      : `<div class="feedback-label">Bonne réponse :</div>
         <div class="feedback-value fail">${esc(card.data.hiragana)}</div>
         <div class="feedback-typed">Tu as écrit : ${typed}</div>`;

    bodyHtml = `
      <span class="feedback-icon">❌</span>
      <div class="feedback-body">${answerHtml}</div>
      <button class="btn btn-primary btn-sm" id="continue-btn">Continuer →</button>
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

  const qualities = [
    { label: 'À revoir', q: 0, color: '#dc2626' },
    { label: 'Difficile', q: 1, color: '#d97706' },
    { label: 'Bien',      q: 2, color: '#16a34a' },
    { label: 'Facile',    q: 3, color: '#2563eb' }
  ];

  qualities.forEach(({ label, q, color }) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm';
    btn.style.cssText = `background:${color};color:#fff`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      scheduleSRS(key, q);
      bar.classList.remove('visible');
      bar.innerHTML = '<span class="label">Difficulté :</span>';
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
    const names = ['Phrases', 'Mots', 'Kanjis'];
    toast(`Phase ${session.phase + 1} : ${names[session.phase]}`);
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
    (totalOk === totalAll && totalAll > 0) ? '🎉 Parfait !' : '✅ Session terminée';
  document.getElementById('results-subtitle').textContent =
    `${totalOk} / ${totalAll} ${totalAll === 1 ? 'carte' : 'cartes'} correcte${totalAll === 1 ? '' : 's'}`;

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
        alert('Format invalide. Utilisez un fichier exporté par cette application.');
        return;
      }
      const existingIds = new Set(state.collections.map(c => c.id));
      const fresh = valid.filter(c => !existingIds.has(c.id));
      if (fresh.length === 0) {
        alert('Ces collections sont déjà chargées.');
        return;
      }
      const saved = loadImported();
      saveImported([...saved, ...fresh]);
      state.collections = [...DEFAULT_COLLECTIONS, ...loadImported()];
      renderHome();
      toast(`${fresh.length} collection(s) importée(s) ✓`);
    } catch {
      alert('Erreur lors de la lecture du fichier JSON.');
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   EVENTS
   ============================================================ */
function attachEvents() {
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
      toast('Aucune carte à réviser aujourd\'hui !');
      return;
    }
    state.currentSession = new Session(coll, 'srs');
    navigate('session');
    renderCard();
  });

  /* Session */
  document.getElementById('session-back-btn').addEventListener('click', () => {
    if (confirm('Quitter la session en cours ?')) {
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
  state.collections = [...DEFAULT_COLLECTIONS, ...loadImported()];

  /* bind wana-kana to the answer input */
  const input = document.getElementById('answer-input');
  if (typeof wanakana !== 'undefined') {
    wanakana.bind(input);
  }

  attachEvents();
  renderHome();
  navigate('home');
}

document.addEventListener('DOMContentLoaded', init);
