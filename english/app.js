/* Ascend — English A0→C2. Vanilla JS, offline, no backend. */
'use strict';

/* ---------- course registry ---------- */
const LEVELS = [
  {id:'start',name:'Старт',title:'Звуки и чтение',desc:'Алфавит, звуки, правила чтения, американское произношение'},
  {id:'a1',name:'A1',title:'Основа',desc:'Базовая грамматика и слова для жизни'},
  {id:'a2',name:'A2',title:'Повседневность',desc:'Прошлое, опыт, планы, путешествия'},
  {id:'b1',name:'B1',title:'Самостоятельность',desc:'Условия, пассив, косвенная речь, мнения'},
  {id:'b2',name:'B2',title:'Уверенность',desc:'Сложные структуры, регистр, эссе и спикинг'},
  {id:'c1',name:'C1',title:'Свобода',desc:'Академический и деловой язык, нюансы'},
  {id:'c2',name:'C2',title:'Мастерство',desc:'Идиоматика, стиль, ирония, носительский уровень'}
];
const COURSE = {}; LEVELS.forEach(l => COURSE[l.id] = []);
function addUnits(level, units){ (COURSE[level] = COURSE[level] || []).push(...units); }
window.addUnits = addUnits;

let FLAT = [];          // [{lesson, level, unit, idx}] including exams
let LESSON_BY_ID = {};
function buildFlat(){
  FLAT = []; LESSON_BY_ID = {};
  LEVELS.forEach(L => {
    const units = COURSE[L.id]; if (!units.length) return;
    units.forEach(u => u.lessons.forEach(ls => {
      const item = {lesson:ls, level:L.id, unit:u};
      item.idx = FLAT.length; FLAT.push(item); LESSON_BY_ID[ls.id] = item;
    }));
    const ex = {exam:true, level:L.id, lesson:{id:'exam-'+L.id, title:'Экзамен уровня '+L.name, sub:'Сдай на 80% и выше, чтобы открыть следующий уровень'}};
    ex.idx = FLAT.length; FLAT.push(ex); LESSON_BY_ID[ex.lesson.id] = ex;
  });
}

/* ---------- state ---------- */
const KEY = 'ascend.v1';
const DEF = {done:{}, stars:{}, xp:0, days:{}, streak:0, lastDay:null, srs:{}, placed:false, unlockedTo:0,
  settings:{theme:'auto', rate:0.95, goal:40, sound:true, speech:true}, ach:{}, stats:{answers:0, right:0, ms:0, games:0, best:{}}};
let S = load();
function load(){ try{ const s = JSON.parse(localStorage.getItem(KEY)); if (s) return deepMerge(structuredClone(DEF), s); }catch(e){} return structuredClone(DEF); }
function deepMerge(a,b){ for (const k in b){ if (b[k] && typeof b[k]==='object' && !Array.isArray(b[k]) && a[k] && typeof a[k]==='object') deepMerge(a[k],b[k]); else a[k]=b[k]; } return a; }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
const today = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
function dayDiff(a,b){ return Math.round((new Date(b)-new Date(a))/864e5); }
function addXP(n){
  const t = today(); S.xp += n; S.days[t] = (S.days[t]||0) + n;
  if (S.lastDay !== t){ S.streak = (S.lastDay && dayDiff(S.lastDay,t)===1) ? S.streak+1 : 1; S.lastDay = t; }
  checkAch(); save();
}
function curStreak(){ if (!S.lastDay) return 0; return dayDiff(S.lastDay, today()) <= 1 ? S.streak : 0; }

/* ---------- helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const h = (html) => { const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const pick = (a,n) => shuffle(a).slice(0,n);
const rnd = a => a[Math.random()*a.length|0];
function toast(t){ const el=h(`<div class="toast">${esc(t)}</div>`); document.body.append(el); setTimeout(()=>el.remove(),2700); }
const plain = s => s.replace(/\[|\]/g,'');
const gapOf = s => (s.match(/\[([^\]]+)\]/)||[])[1] || '';

const CONTR = [["i'm","i am"],["you're","you are"],["we're","we are"],["they're","they are"],["he's","he is"],["she's","she is"],["it's","it is"],["that's","that is"],["what's","what is"],["there's","there is"],["isn't","is not"],["aren't","are not"],["wasn't","was not"],["weren't","were not"],["don't","do not"],["doesn't","does not"],["didn't","did not"],["can't","cannot"],["cannot","can not"],["won't","will not"],["wouldn't","would not"],["shouldn't","should not"],["couldn't","could not"],["haven't","have not"],["hasn't","has not"],["hadn't","had not"],["i've","i have"],["you've","you have"],["we've","we have"],["they've","they have"],["i'll","i will"],["you'll","you will"],["he'll","he will"],["she'll","she will"],["we'll","we will"],["they'll","they will"],["i'd","i would"],["you'd","you would"],["let's","let us"],["mustn't","must not"],["needn't","need not"]];
function norm(s){
  s = s.toLowerCase().replace(/[’‘`]/g,"'").replace(/[.,!?;:"“”()\-–—…]/g,' ').replace(/\s+/g,' ').trim();
  for (const [a,b] of CONTR) s = s.replace(new RegExp("(^| )"+a.replace(/'/g,"'")+"(?= |$)","g"), "$1"+b);
  return s.replace(/\bgonna\b/g,'going to').replace(/\bwanna\b/g,'want to');
}
function lev(a,b){ const m=a.length,n=b.length; if(!m) return n; if(!n) return m; let p=[...Array(n+1).keys()];
  for(let i=1;i<=m;i++){ const c=[i]; for(let j=1;j<=n;j++) c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1)); p=c; } return p[n]; }
/* returns 2 exact, 1 typo, 0 wrong */
function check(input, target){
  const variants = String(target).split('|');
  let best = 0;
  for (const t of variants){ const a=norm(input), b=norm(t); if (a===b) return 2;
    const tol = b.length>14 ? 2 : b.length>4 ? 1 : 0; if (lev(a,b)<=tol) best=1; }
  return best;
}

/* ---------- audio: TTS + recognition + sfx ---------- */
let VOICE = null;
function pickVoice(){
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]US/i.test(v.lang));
  const pref = ['Ava (Premium)','Ava (Enhanced)','Samantha (Enhanced)','Zoe (Premium)','Evan (Enhanced)','Google US English','Microsoft Aria','Microsoft Jenny','Samantha','Ava','Alex'];
  for (const p of pref){ const v = vs.find(v => v.name.includes(p)); if (v) return VOICE = v; }
  VOICE = vs[0] || speechSynthesis.getVoices().find(v=>/^en/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, rate, onend){
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(plain(text));
  u.lang='en-US'; if (VOICE) u.voice = VOICE; u.rate = rate || S.settings.rate;
  if (onend) u.onend = onend;
  speechSynthesis.speak(u);
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen(onres, onerr){
  if (!SR) return onerr && onerr('nosupport');
  const r = new SR(); r.lang='en-US'; r.interimResults=false; r.maxAlternatives=5;
  r.onresult = e => onres([...e.results[0]].map(a=>a.transcript));
  r.onerror = e => onerr && onerr(e.error); r.onend = () => onerr && onerr('end');
  try{ r.start(); }catch(e){ onerr && onerr('fail'); } return r;
}
let AC;
function sfx(type){
  if (!S.settings.sound) return;
  try{ AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    const notes = type==='ok' ? [660,880] : type==='win' ? [523,659,784,1046] : [220,180];
    notes.forEach((f,i)=>{ const o=AC.createOscillator(), g=AC.createGain(); o.type= type==='bad'?'triangle':'sine';
      o.frequency.value=f; const t=AC.currentTime+i*.09; g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.12,t+.01); g.gain.exponentialRampToValueAtTime(.001,t+.22);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t+.25); });
  }catch(e){}
  if (navigator.vibrate) navigator.vibrate(type==='bad'?[30,40,30]:12);
}

/* ---------- icons ---------- */
const I = {
  path:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5m0 14h16M8 15l3-4 3 2 5-7"/></svg>',
  cards:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="14" rx="3"/><path d="M7 3h11a3 3 0 0 1 3 3v11"/></svg>',
  game:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18.5 13.5h.01"/></svg>',
  stats:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s5 4.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5S9 11 10.5 11C10.5 7 12 2 12 2zm0 20a7 7 0 0 0 7-7c0-1.5-.4-2.8-1-4 0 3-2 5-3 5 1-3-1-6-1-6s-1 4-4 5c-1.2.4-2-.5-2-1.5-.6 1-1 2.3-1 3.5a5 5 0 0 0 5 5z" opacity=".0"/><path d="M12 22a7 7 0 0 1-7-7c0-3.6 2.4-5.6 3.5-7.4.4 1.4 1.2 2.4 2.2 2.9C10.5 6 12.6 3.6 13.5 2c.6 3 5.5 6.2 5.5 13a7 7 0 0 1-7 7z"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  slow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  logo:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 12 5l8 14"/><path d="M8.5 13h7"/></svg>',
  heart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>'
};

/* ---------- theme ---------- */
function applyTheme(){ const t=S.settings.theme; if (t==='auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme',t);
  const dark = t==='dark' || (t==='auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  $('meta[name=theme-color]').setAttribute('content', dark ? '#0c0c0f' : '#f6f5f2'); }

/* ---------- progress logic ---------- */
function isDone(id){ return !!S.done[id]; }
function firstOpenIdx(){ for (let i=0;i<FLAT.length;i++) if (!isDone(FLAT[i].lesson.id)) return i; return FLAT.length; }
function isUnlocked(i){ return i <= Math.max(firstOpenIdx(), S.unlockedTo); }
function levelProgress(lv){ const items = FLAT.filter(x=>x.level===lv); const d = items.filter(x=>isDone(x.lesson.id)).length; return {d, n:items.length}; }
function currentLevel(){ const i = Math.min(firstOpenIdx(), FLAT.length-1); return FLAT[i] ? FLAT[i].level : 'c2'; }
function learnedWords(){ return Object.keys(S.srs).length; }

/* ---------- SRS (SM-2 lite) ---------- */
const WORDS = {}; // en -> {en, ru, ipa, lesson}
function indexWords(){ FLAT.forEach(x => (x.lesson.words||[]).forEach(w => { if (!WORDS[w[0]]) WORDS[w[0]] = {en:w[0], ru:w[1], ipa:w[2]||'', lesson:x.lesson.id, level:x.level}; })); }
function srsAdd(en){ if (!S.srs[en]) S.srs[en] = {e:2.5, i:0, r:0, due:Date.now(), seen:0}; }
function srsGrade(en, q){ // q: 0 forgot,1 hard,2 good,3 easy
  const c = S.srs[en] || (S.srs[en] = {e:2.5,i:0,r:0,due:0,seen:0}); c.seen++;
  if (q===0){ c.r=0; c.i=0; c.due=Date.now()+10*60e3; c.e=Math.max(1.3,c.e-.2); }
  else { c.r++; c.i = c.r===1 ? 1 : c.r===2 ? (q===1?2:3) : Math.round(c.i * c.e * (q===1?.8:q===3?1.3:1));
    c.e = Math.max(1.3, c.e + (q===1?-.15:q===3?.1:0)); c.due = Date.now() + c.i*864e5; }
  save();
}
function srsDue(){ const now=Date.now(); return Object.keys(S.srs).filter(k => WORDS[k] && S.srs[k].due<=now).sort((a,b)=>S.srs[a].due-S.srs[b].due); }
function wordStrength(en){ const c=S.srs[en]; if(!c) return 0; return Math.min(4, c.r); }

/* ---------- achievements ---------- */
const ACH = [
  ['first','🌱','Первый урок',()=>Object.keys(S.done).length>=1],
  ['l10','📘','10 уроков',()=>Object.keys(S.done).length>=10],
  ['l50','📚','50 уроков',()=>Object.keys(S.done).length>=50],
  ['l100','🏛️','100 уроков',()=>Object.keys(S.done).length>=100],
  ['s3','🔥','3 дня подряд',()=>curStreak()>=3],
  ['s7','⚡','Неделя подряд',()=>curStreak()>=7],
  ['s30','🌋','30 дней подряд',()=>curStreak()>=30],
  ['w100','🧠','100 слов',()=>learnedWords()>=100],
  ['w500','💎','500 слов',()=>learnedWords()>=500],
  ['xp1k','✨','1000 XP',()=>S.xp>=1000],
  ['xp10k','🌟','10 000 XP',()=>S.xp>=10000],
  ['g10','🎮','10 игр',()=>S.stats.games>=10],
  ['a1','🅰️','Сдан A1',()=>isDone('exam-a1')],
  ['b1','🅱️','Сдан B1',()=>isDone('exam-b1')],
  ['c2','👑','Сдан C2',()=>isDone('exam-c2')],
];
function checkAch(){ ACH.forEach(([id,e,t,f]) => { if (!S.ach[id] && f()){ S.ach[id]=Date.now(); setTimeout(()=>toast(e+' Достижение: '+t),400); } }); }

/* ================= VIEWS ================= */
let TAB = 'path';
function render(){
  const app = $('#app'); app.innerHTML = '';
  app.append(topBar());
  ({path:viewPath, review:viewReview, games:viewGames, me:viewMe})[TAB](app);
  renderTabs();
}
function topBar(){
  return h(`<div class="top"><div class="brand"><div class="logo">${I.logo}</div>Ascend</div>
   <div class="chips"><div class="chip fire">${I.fire}${curStreak()}</div><div class="chip xp">${I.bolt}${S.xp}</div></div></div>`);
}
function renderTabs(){
  let tb = $('.tabbar'); if (!tb){ tb = h(`<nav class="tabbar"><div class="in"></div></nav>`); document.body.append(tb); }
  const tabs=[['path','Путь',I.path],['review','Повтор',I.cards],['games','Игры',I.game],['me','Прогресс',I.stats]];
  const due = srsDue().length;
  tb.firstChild.innerHTML = tabs.map(([k,n,ic])=>`<button class="tab ${TAB===k?'on':''}" data-t="${k}">${ic}${n}${k==='review'&&due?` · ${due}`:''}</button>`).join('');
  tb.querySelectorAll('.tab').forEach(b => b.onclick = () => { TAB=b.dataset.t; render(); scrollTo(0,0); });
}

/* ---- path ---- */
function viewPath(app){
  const fi = firstOpenIdx();
  const cur = FLAT[Math.min(fi, FLAT.length-1)];
  const todayXP = S.days[today()]||0, goal = S.settings.goal;
  const pct = Math.min(100, Math.round(todayXP/goal*100));
  if (!S.placed){
    app.append(h(`<div class="hero"><div class="lbl">Добро пожаловать</div><h3>Определим твой уровень</h3>
      <p>Короткий адаптивный тест: 3–6 минут. Откроем курс с нужного места, чтобы не тратить время на то, что ты уже знаешь.</p>
      <div style="display:flex;gap:10px;position:relative;z-index:1"><button class="btn" id="pt">Пройти тест</button><button class="btn ghost" id="skip" style="color:#fff;border-color:rgba(255,255,255,.4)">С нуля</button></div></div>`));
    $('#pt').onclick = placementTest; $('#skip').onclick = () => { S.placed=true; save(); render(); };
  } else if (cur && fi < FLAT.length){
    const L = LEVELS.find(l=>l.id===cur.level);
    const hero = h(`<div class="hero"><div class="lbl">${L.name} · Продолжить</div><h3>${esc(cur.lesson.title)}</h3><p>${esc(cur.lesson.sub||'')}</p>
      <button class="btn">Начать урок</button></div>`);
    hero.querySelector('.btn').onclick = () => openItem(cur.idx);
    app.append(hero);
  } else app.append(h(`<div class="hero"><div class="lbl">Курс пройден</div><h3>Ты прошёл весь путь до C2</h3><p>Повторяй слова и играй, чтобы держать форму.</p></div>`));

  app.append(h(`<div class="card goal"><div class="ring" style="--p:${pct}"><i>${pct}%</i></div><div style="flex:1"><b>Цель дня</b><div class="muted small">${todayXP} из ${goal} XP · к повторению ${srsDue().length} слов</div></div></div>`));

  LEVELS.forEach(L => {
    const items = FLAT.filter(x=>x.level===L.id); if (!items.length) return;
    const {d,n} = levelProgress(L.id);
    const sec = h(`<section class="level" id="lv-${L.id}"><div class="level-head"><div><div class="level-badge">${L.name}</div><h2>${L.title}</h2><div class="small muted">${L.desc}</div></div><div class="small muted" style="white-space:nowrap">${d}/${n}</div></div><div class="bar"><b style="width:${n?d/n*100:0}%"></b></div></section>`);
    const open = L.id===cur?.level;
    const body = h(`<div class="${open?'':'hide'}"></div>`);
    let lastUnit = null, num = 0;
    items.forEach(x => {
      if (x.unit && x.unit!==lastUnit){ lastUnit=x.unit; body.append(h(`<div class="unit-title">${esc(x.unit.title)}</div>`)); }
      num++;
      const id=x.lesson.id, done=isDone(id), un=isUnlocked(x.idx), isCur = x.idx===fi;
      const st = S.stars[id]||0;
      const b = h(`<button class="lesson ${done?'done':''} ${isCur?'cur':''} ${un?'':'lock'} ${x.exam?'exam':''}">
        <div class="n">${x.exam?'★':done?'✓':num}</div><div class="t"><b>${esc(x.lesson.title)}</b><span>${esc(x.lesson.sub||'')}</span></div>
        ${done&&!x.exam?`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(3-st)}</div>`:''}</button>`);
      b.onclick = () => un ? openItem(x.idx) : toast('Сначала пройди предыдущие уроки или экзамен уровня');
      body.append(b);
    });
    const more = h(`<button class="btn ghost block mt">${open?'Свернуть':'Показать уроки'}</button>`);
    more.onclick = () => { body.classList.toggle('hide'); more.textContent = body.classList.contains('hide')?'Показать уроки':'Свернуть'; };
    if (!open && !isUnlocked(items[0].idx)){
      const jump = h(`<button class="btn soft block mt">Сдать экзамен экстерном и открыть ${L.name}</button>`);
      jump.onclick = () => runExam(prevLevelId(L.id), true);
      if (prevLevelId(L.id)) sec.append(jump);
    }
    sec.append(body, more); app.append(sec);
  });
}
function prevLevelId(id){ const i = LEVELS.findIndex(l=>l.id===id); for (let k=i-1;k>=0;k--) if (COURSE[LEVELS[k].id].length) return LEVELS[k].id; return null; }
function openItem(idx){ const x = FLAT[idx]; if (x.exam) runExam(x.level); else runLesson(x); }

/* ================= PLAYER ================= */
function Player({title, steps, onFinish, hearts=null, onQuit}){
  const el = h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><div class="bar"><b style="width:0"></b></div>${hearts!==null?`<div class="hearts">${I.heart}<span>${hearts}</span></div>`:''}</div>
    <div class="p-body"></div><div class="p-foot"><div class="fb"><b></b><div></div></div><button class="btn block acc go">Проверить</button></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  const body = $('.p-body',el), foot=$('.p-foot',el), go=$('.go',el), fbB=$('.fb b',el), fbD=$('.fb div',el), bar=$('.bar b',el);
  const P = {el, steps:[...steps], i:0, right:0, wrong:0, total:0, mistakes:[], hearts, t0:Date.now(), answered:false, retry:new Set()};
  $('.q',el).onclick = () => { if (confirm('Выйти? Прогресс урока не сохранится.')){ close(); onQuit && onQuit(); } };
  function close(){ speechSynthesis && speechSynthesis.cancel(); el.remove(); document.body.style.overflow=''; }
  P.close = close;
  P.setBtn = (txt, enabled=true, cls='acc') => { go.textContent=txt; go.disabled=!enabled; go.className='btn block go '+cls; };
  P.feedback = (ok, title, detail) => {
    foot.className = 'p-foot '+(ok?'ok':'bad'); fbB.textContent=title; fbD.innerHTML=detail||'';
    sfx(ok?'ok':'bad'); P.answered=true; P.setBtn('Дальше', true, ok?'ok':'bad');
  };
  P.grade = (ok, step, correctText, note) => {
    if (step.graded===false) return;
    P.total++; S.stats.answers++;
    if (ok){ P.right++; S.stats.right++; P.feedback(true, rnd(['Верно!','Отлично!','Точно!','Так держать!']), note||''); }
    else { P.wrong++; P.mistakes.push(step);
      if (!step.isRetry){ const r = {...step, isRetry:true}; P.steps.push(r); }
      if (P.hearts!==null){ P.hearts--; $('.hearts span',el).textContent=P.hearts; }
      P.feedback(false, 'Не совсем', (correctText?`Правильно: <b>${esc(correctText)}</b>`:'') + (note?`<br>${note}`:'')); }
    if (step.word) srsGrade(step.word, ok?2:0);
  };
  P.next = () => {
    P.i++; if (P.hearts!==null && P.hearts<=0) return finish(true);
    if (P.i >= P.steps.length) return finish(false);
    show();
  };
  function finish(failed){ close(); S.stats.ms += Date.now()-P.t0; save(); onFinish(P, failed); }
  function show(){
    const st = P.steps[P.i]; P.answered=false; foot.className='p-foot';
    bar.style.width = (P.i/P.steps.length*100)+'%';
    body.innerHTML=''; body.scrollTop=0;
    P.onGo = null; P.setBtn('Проверить', false);
    st.render(body, P, st);
  }
  go.onclick = () => { if (P.answered || !P.onGo) return P.next(); P.onGo(); };
  P.show = show; show();
  return P;
}

/* ----- step builders ----- */
function stepTheory(lesson){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Теория</div>`), h(`<h1>${esc(lesson.title)}</h1>`), h(`<div class="muted" style="margin-bottom:14px">${esc(lesson.sub||'')}</div>`));
    const t = h(`<div class="theory">${lesson.theory||''}</div>`); b.append(t);
    t.querySelectorAll('.ex').forEach(e => e.onclick = () => say((e.querySelector('b')||e).textContent));
    P.setBtn('Понятно, к практике'); P.onGo = null;
  }};
}
function stepWords(words){
  return {graded:false, render(b,P){
    let i=0;
    const draw = () => {
      const w = words[i]; b.innerHTML='';
      b.append(h(`<div class="kind">Новые слова · ${i+1}/${words.length}</div>`));
      const c = h(`<div class="wcard"><div class="in"><div class="face"><div class="w">${esc(w[0])}</div>${w[2]?`<div class="ipa">/${esc(w[2])}/</div>`:''}<div class="hint">Нажми, чтобы перевернуть</div></div><div class="face back"><div class="tr">${esc(w[1])}</div><div class="ipa">${esc(w[0])}</div></div></div></div>`);
      c.onclick = () => { c.classList.toggle('flip'); if (!c.classList.contains('flip')) say(w[0]); };
      const ctr = h(`<div class="center"><button class="speak big">${I.sound}</button></div>`); ctr.firstChild.onclick=()=>say(w[0]);
      b.append(c, ctr); say(w[0]); srsAdd(w[0]);
      P.setBtn(i<words.length-1?'Следующее слово':'К упражнениям');
    };
    P.onGo = () => { i++; if (i>=words.length){ save(); P.next(); } else draw(); };
    draw();
  }};
}
function stepChoice({kind, prompt, promptRu, audio, options, correct, note, word, autoplay}){
  return {word, render(b,P,st){
    b.append(h(`<div class="kind">${kind}</div>`));
    const pr = h(`<div class="say" style="margin-bottom:18px">${audio?`<button class="speak">${I.sound}</button>`:''}<div class="prompt ${promptRu?'ru':''}" style="margin:0">${esc(prompt||'')}</div></div>`);
    if (audio){ pr.querySelector('.speak').onclick=()=>say(audio); if (autoplay!==false) setTimeout(()=>say(audio),250); }
    b.append(pr);
    const box = h(`<div class="opts"></div>`); let sel=null;
    shuffle(options).forEach(o => { const btn=h(`<button class="opt">${esc(o)}</button>`); btn.onclick=()=>{ if(P.answered) return; box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); btn.classList.add('sel'); sel=o; P.setBtn('Проверить'); if (/^[A-Za-z]/.test(o) && o.length<40) say(o); }; box.append(btn); });
    b.append(box);
    P.onGo = () => { const ok = sel===correct;
      box.querySelectorAll('.opt').forEach(x=>{ if (x.textContent===correct) x.classList.add('right'); else if (x.classList.contains('sel')) x.classList.add('wrong'); });
      P.grade(ok, st, correct, note); };
  }};
}
function stepGapChoice(sent, options){
  const [en, ru] = sent; const g = gapOf(en);
  return {render(b,P,st){
    b.append(h(`<div class="kind">Заполни пропуск</div>`));
    const s = h(`<div class="gap-sent">${esc(en).replace(/\[[^\]]+\]/, '<span class="g">&nbsp;?&nbsp;</span>')}</div>`);
    b.append(s, h(`<div class="muted" style="margin:-10px 0 18px">${esc(ru)}</div>`));
    const box=h(`<div class="opts two"></div>`); let sel=null;
    shuffle(options).forEach(o=>{ const btn=h(`<button class="opt">${esc(o)}</button>`); btn.onclick=()=>{ if(P.answered)return; box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); btn.classList.add('sel'); sel=o; $('.g',s).textContent=o; P.setBtn('Проверить'); }; box.append(btn); });
    b.append(box);
    P.onGo = () => { const ok = norm(sel)===norm(g); box.querySelectorAll('.opt').forEach(x=>{ if(norm(x.textContent)===norm(g)) x.classList.add('right'); else if(x.classList.contains('sel')) x.classList.add('wrong'); });
      say(plain(en)); P.grade(ok, st, plain(en)); };
  }};
}
function stepGapType(sent){
  const [en, ru] = sent; const g = gapOf(en);
  return {render(b,P,st){
    b.append(h(`<div class="kind">Впиши пропущенное</div>`));
    b.append(h(`<div class="gap-sent">${esc(en).replace(/\[[^\]]+\]/, '<span class="g">&nbsp;…&nbsp;</span>')}</div>`), h(`<div class="muted" style="margin:-10px 0 18px">${esc(ru)}</div>`));
    const f = h(`<input class="field" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ответ">`); b.append(f);
    f.oninput = () => P.setBtn('Проверить', !!f.value.trim()); f.onkeydown = e => { if (e.key==='Enter' && f.value.trim()) $('.go',P.el).click(); };
    setTimeout(()=>f.focus(),300);
    P.onGo = () => { const r = check(f.value, g); f.blur(); say(plain(en)); P.grade(r>0, st, plain(en), r===1?`Почти: опечатка, правильно «${esc(g)}»`:''); };
  }};
}
function tokens(s){ return plain(s).replace(/([.,!?;:])/g,'').split(/\s+/).filter(Boolean); }
function stepBuild(sent, mode, distract=[]){ // mode 'ru2en' | 'listen'
  const [en, ru] = sent; const tk = tokens(en);
  return {render(b,P,st){
    b.append(h(`<div class="kind">${mode==='listen'?'Собери услышанное':'Переведи, собрав фразу'}</div>`));
    if (mode==='listen'){ const r=h(`<div class="say" style="margin-bottom:12px"><button class="speak big">${I.sound}</button><button class="speak">${I.slow}</button></div>`); r.children[0].onclick=()=>say(en); r.children[1].onclick=()=>say(en,.6); b.append(r); setTimeout(()=>say(en),250); }
    else b.append(h(`<div class="prompt ru">${esc(ru)}</div>`));
    const line=h(`<div class="answer-line"></div>`), bank=h(`<div class="bank"></div>`); b.append(line,bank);
    const extra = pick(distract.filter(d=>!tk.map(t=>t.toLowerCase()).includes(d.toLowerCase())), Math.min(3, Math.max(1, 8-tk.length)));
    const picked=[];
    shuffle([...tk, ...extra]).forEach(w=>{ const t=h(`<button class="tile">${esc(w)}</button>`);
      t.onclick=()=>{ if(P.answered) return; t.classList.add('used'); const c=h(`<button class="tile">${esc(w)}</button>`); picked.push(c); line.append(c);
        c.onclick=()=>{ if(P.answered) return; c.remove(); picked.splice(picked.indexOf(c),1); t.classList.remove('used'); P.setBtn('Проверить', picked.length>0); };
        P.setBtn('Проверить'); }; bank.append(t); });
    P.onGo = () => { const ans = picked.map(c=>c.textContent).join(' '); const ok = norm(ans)===norm(plain(en)); say(plain(en)); P.grade(ok, st, plain(en), mode==='listen'?esc(ru):''); };
  }};
}
function stepDictation(sent){
  const [en, ru] = sent;
  return {render(b,P,st){
    b.append(h(`<div class="kind">Диктант</div>`), h(`<div class="muted" style="margin-bottom:14px">Напиши то, что слышишь</div>`));
    const r=h(`<div class="say" style="margin-bottom:18px"><button class="speak big">${I.sound}</button><button class="speak">${I.slow}</button></div>`); r.children[0].onclick=()=>say(en); r.children[1].onclick=()=>say(en,.55); b.append(r); setTimeout(()=>say(en),300);
    const f=h(`<textarea class="field" autocapitalize="sentences" spellcheck="false" placeholder="Type in English"></textarea>`); b.append(f);
    f.oninput=()=>P.setBtn('Проверить', !!f.value.trim());
    P.onGo=()=>{ const res=check(f.value, plain(en)); P.grade(res>0, st, plain(en), (res===1?'Засчитано с опечаткой. ':'')+esc(ru)); };
  }};
}
function stepTranslateType(sent){
  const [en, ru] = sent;
  return {render(b,P,st){
    b.append(h(`<div class="kind">Переведи на английский</div>`), h(`<div class="prompt ru">${esc(ru)}</div>`));
    const f=h(`<textarea class="field" autocapitalize="sentences" spellcheck="false" placeholder="Type in English"></textarea>`); b.append(f);
    f.oninput=()=>P.setBtn('Проверить', !!f.value.trim());
    P.onGo=()=>{ const res=check(f.value, plain(en)); say(plain(en)); P.grade(res>0, st, plain(en), res===1?'Засчитано с небольшой ошибкой':'Перевод может быть разным, но сверься с эталоном'); };
  }};
}
function stepSpeak(sent){
  const [en, ru] = sent;
  return {graded:true, render(b,P,st){
    b.append(h(`<div class="kind">Произнеси вслух</div>`));
    const r=h(`<div class="say" style="margin-bottom:8px"><button class="speak">${I.sound}</button><div class="prompt" style="margin:0">${esc(plain(en))}</div></div>`); r.firstChild.onclick=()=>say(en); b.append(r);
    b.append(h(`<div class="muted" style="margin-bottom:28px">${esc(ru)}</div>`));
    const mic=h(`<div class="center"><button class="speak big">${I.mic}</button><div class="tiny mt" id="micst">Нажми и скажи фразу</div><button class="btn ghost mt" id="skipmic" style="height:40px;font-size:14px">Не могу говорить сейчас</button></div>`); b.append(mic);
    $('#skipmic',mic).onclick=()=>{ st.graded=false; P.next(); };
    let rec=null;
    mic.firstChild.onclick=()=>{
      if (!SR){ $('#micst').textContent='Распознавание речи не поддерживается в этом браузере. Повтори фразу вслух и жми «Дальше».'; st.graded=false; P.setBtn('Дальше'); P.onGo=null; return; }
      $('#micst').textContent='Слушаю…'; mic.firstChild.classList.add('pop');
      rec = listen(alts=>{
        const target=norm(plain(en)); let best=0, heard=alts[0];
        alts.forEach(a=>{ const n=norm(a); const sim=1-lev(n,target)/Math.max(n.length,target.length); if(sim>best){best=sim;heard=a;} });
        const ok = best>=0.75; st._done=true;
        P.grade(ok, st, plain(en), `Распознано: «${esc(heard)}» · совпадение ${Math.round(best*100)}%`);
        if (!ok && st.isRetry===undefined) {}
      }, err=>{ if (st._done) return; if (err!=='end') $('#micst').textContent='Не получилось распознать ('+err+'). Попробуй ещё раз или пропусти.'; else if(!P.answered) $('#micst').textContent='Нажми и скажи фразу'; });
    };
  }};
}
function stepMatch(pairs){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Найди пары</div>`), h(`<div class="muted" style="margin-bottom:16px">Соедини слово и перевод</div>`));
    const g=h(`<div class="match"></div>`); b.append(g);
    const L=shuffle(pairs.map(p=>({t:p[0],k:p[0],en:1}))), R=shuffle(pairs.map(p=>({t:p[1],k:p[0]})));
    let sel=null, left=pairs.length, errs=0;
    for (let i=0;i<pairs.length;i++) [L[i],R[i]].forEach(it=>{ const btn=h(`<button class="opt">${esc(it.t)}</button>`); btn._it=it;
      btn.onclick=()=>{ if (it.en) say(it.t);
        if (!sel || sel._it.en===it.en){ g.querySelectorAll('.sel').forEach(x=>x.classList.remove('sel')); sel=btn; btn.classList.add('sel'); return; }
        if (sel._it.k===it.k){ [sel,btn].forEach(x=>{x.classList.remove('sel');x.classList.add('right');setTimeout(()=>x.classList.add('gone'),250);}); sfx('ok'); srsGrade(it.k,2); sel=null; if(--left===0){ P.right++; P.total++; P.setBtn('Дальше'); P.answered=true; } }
        else { errs++; const s=sel; [s,btn].forEach(x=>x.classList.add('wrong','shake')); sfx('bad'); setTimeout(()=>[s,btn].forEach(x=>x.classList.remove('wrong','shake','sel')),400); sel=null; }
      }; g.append(btn); });
  }};
}
function stepQuiz(q){
  const [question, correct, ...rest] = q; const note = rest.pop(); const wrong = rest.filter(Boolean);
  return stepChoice({kind:'Проверка правила', prompt:question, promptRu:true, options:[correct,...wrong], correct, note:esc(note||'')});
}
function stepReading(text){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Чтение и аудирование</div>`), h(`<div class="muted" style="margin-bottom:14px">Послушай текст целиком, потом нажимай на предложения. Перевод под кнопкой.</div>`));
    const ctr=h(`<div class="say" style="margin-bottom:16px"><button class="speak">${I.sound}</button><button class="speak">${I.slow}</button><button class="btn ghost" style="height:44px;font-size:14px">Показать перевод</button></div>`);
    const sents = text.en.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) || [text.en];
    const rd=h(`<div class="reading">${sents.map((s,i)=>`<span class="s" data-i="${i}">${esc(s)}</span>`).join('')}</div>`);
    const tr=h(`<div class="card mt hide muted" style="line-height:1.6">${esc(text.ru)}</div>`);
    let playing=false;
    const playAll=(rate)=>{ let i=0; playing=true; const step=()=>{ rd.querySelectorAll('.s').forEach(x=>x.classList.remove('on')); if(i>=sents.length||!playing){playing=false;return;} rd.children[i].classList.add('on'); rd.children[i].scrollIntoView({block:'center',behavior:'smooth'}); say(sents[i], rate, ()=>{i++;step();}); }; step(); };
    ctr.children[0].onclick=()=>playAll(); ctr.children[1].onclick=()=>playAll(.65);
    ctr.children[2].onclick=()=>tr.classList.toggle('hide');
    rd.querySelectorAll('.s').forEach(s=>s.onclick=()=>{ playing=false; rd.querySelectorAll('.s').forEach(x=>x.classList.remove('on')); s.classList.add('on'); say(s.textContent); });
    b.append(ctr, rd, tr); P.setBtn('Дальше');
  }};
}

/* ----- lesson assembly ----- */
function allGaps(level){ const out=[]; FLAT.forEach(x=>{ if(x.level===level && x.lesson.sents) x.lesson.sents.forEach(s=>{const g=gapOf(s[0]); if(g) out.push(g);}); }); return out; }
function gapOptions(sent, lesson){
  const g = gapOf(sent[0]); const lg = (lesson.sents||[]).map(s=>gapOf(s[0])).filter(x=>x && norm(x)!==norm(g));
  let pool = [...new Set(lg)];
  if (pool.length<3) pool = [...new Set([...pool, ...allGaps(LESSON_BY_ID[lesson.id]?.level||'a1').filter(x=>norm(x)!==norm(g))])];
  // prefer distractors of similar shape
  const sim = pool.sort((a,b)=>Math.abs(a.length-g.length)-Math.abs(b.length-g.length));
  return [g, ...pick(sim.slice(0,8),3)];
}
function wordOptions(w, field, lesson){
  const idx = field==='ru'?1:0;
  let pool = (lesson.words||[]).filter(x=>x[0]!==w[0]).map(x=>x[idx]);
  if (pool.length<3) pool = pool.concat(Object.values(WORDS).filter(x=>x.en!==w[0]).map(x=>field==='ru'?x.ru:x.en));
  return [w[idx], ...pick([...new Set(pool)].filter(x=>x!==w[idx]),3)];
}
function buildLessonSteps(ls){
  const steps=[];
  if (ls.theory) steps.push(stepTheory(ls));
  const words = ls.words||[], sents=(ls.sents||[]).filter(s=>gapOf(s[0]));
  const allSents = ls.sents||[];
  if (words.length) steps.push(stepWords(words));
  const ex=[];
  // vocab exercises
  words.forEach((w,i)=>{
    if (i%2===0) ex.push(stepChoice({kind:'Выбери перевод', prompt:w[0], audio:w[0], options:wordOptions(w,'ru',ls), correct:w[1], word:w[0]}));
    else ex.push(stepChoice({kind:'Как это по-английски?', prompt:w[1], promptRu:true, options:wordOptions(w,'en',ls), correct:w[0], word:w[0]}));
  });
  if (words.length>=4) ex.push(stepMatch(pick(words,Math.min(5,words.length))));
  // sentence exercises: rotate types
  const distract = words.map(w=>w[0]).filter(w=>!w.includes(' '));
  const types=['gapChoice','build','gapType','listen','dict','speak','translate'];
  sents.forEach((s,i)=>{
    const t = types[i % types.length];
    const short = tokens(s[0]).length<=12;
    if (t==='gapChoice') ex.push(stepGapChoice(s, gapOptions(s, ls)));
    else if (t==='build' && short) ex.push(stepBuild(s,'ru2en',distract));
    else if (t==='listen' && short) ex.push(stepBuild(s,'listen',distract));
    else if (t==='dict') ex.push(stepDictation(s));
    else if (t==='speak' && S.settings.speech) ex.push(stepSpeak(s));
    else if (t==='translate') ex.push(stepTranslateType(s));
    else ex.push(stepGapType(s));
  });
  // vocab listening
  words.slice(0,3).forEach(w=> ex.push(stepChoice({kind:'Что ты слышишь?', prompt:'', audio:w[0], options:wordOptions(w,'en',ls), correct:w[0], word:w[0]})));
  // order: interleave vocab and sentences gently, then quiz at end
  const vocabEx = ex.slice(0, words.length + (words.length>=4?1:0));
  const rest = ex.slice(vocabEx.length);
  steps.push(...vocabEx.slice(0,Math.ceil(vocabEx.length/2)), ...shuffleLight(rest.concat(vocabEx.slice(Math.ceil(vocabEx.length/2)))));
  if (ls.text) steps.push(stepReading(ls.text));
  (ls.quiz||[]).forEach(q=>steps.push(stepQuiz(q)));
  return steps;
}
function shuffleLight(a){ const r=[...a]; for(let i=0;i<r.length-1;i+=2) if (Math.random()<.5) [r[i],r[i+1]]=[r[i+1],r[i]]; return r; }

function runLesson(x){
  const ls = x.lesson;
  Player({title:ls.title, steps:buildLessonSteps(ls), onFinish:(P)=>{
    const acc = P.total ? P.right/P.total : 1;
    const stars = acc>=.95?3:acc>=.8?2:1;
    const first = !isDone(ls.id);
    const xp = 10 + Math.round(acc*15) + (first?5:0);
    S.done[ls.id]=Date.now(); S.stars[ls.id]=Math.max(S.stars[ls.id]||0, stars);
    (ls.words||[]).forEach(w=>srsAdd(w[0])); addXP(xp);
    resultScreen({title: first?'Урок пройден':'Урок повторён', emoji: stars===3?'🏆':stars===2?'✨':'👍', xp, acc, time:Date.now()-P.t0, mistakes:P.mistakes, next: firstOpenIdx()<FLAT.length ? ()=>openItem(firstOpenIdx()) : null});
  }});
}

function resultScreen({title, emoji, xp, acc, time, next, sub, failed}){
  render();
  const el=h(`<div class="player"><div class="p-body result"><div class="big">${emoji}</div><h1 class="mt">${esc(title)}</h1>${sub?`<p class="muted">${sub}</p>`:''}
    <div class="statgrid"><div class="stat"><b>+${xp}</b><span>XP</span></div><div class="stat"><b>${Math.round(acc*100)}%</b><span>точность</span></div><div class="stat"><b>${Math.max(1,Math.round(time/60000))} мин</b><span>время</span></div></div></div>
    <div class="p-foot"><button class="btn block acc nx">${next?(failed?'Попробовать ещё':'Следующий урок'):'Готово'}</button><button class="btn block ghost mt bk">На карту</button></div></div>`);
  document.body.append(el); if(!failed) sfx('win');
  $('.nx',el).onclick=()=>{ el.remove(); next?next():render(); };
  $('.bk',el).onclick=()=>{ el.remove(); render(); };
}

/* ----- exams & placement ----- */
function examPool(level){
  const items=[];
  FLAT.filter(x=>x.level===level && !x.exam).forEach(x=>{
    (x.lesson.quiz||[]).forEach(q=>items.push(stepQuiz(q)));
    (x.lesson.sents||[]).filter(s=>gapOf(s[0])).forEach(s=>items.push(Math.random()<.6?stepGapChoice(s,gapOptions(s,x.lesson)):stepGapType(s)));
  });
  return items;
}
function runExam(level, extern=false){
  const L=LEVELS.find(l=>l.id===level);
  let pool = examPool(level); if (!pool.length) return;
  const qs = pick(pool, Math.min(25, pool.length)).map(s=>({...s, isRetry:true}));
  Player({steps:qs, hearts:null, onFinish:(P)=>{
    const acc = P.total? P.right/P.total : 0; const pass = acc>=.8;
    if (pass){
      S.done['exam-'+level]=Date.now();
      if (extern){ FLAT.filter(x=>x.level===level).forEach(x=>{ if(!S.done[x.lesson.id]) S.done[x.lesson.id]=Date.now(); });
        // also everything before
        const last = FLAT.findIndex(x=>x.lesson.id==='exam-'+level); for (let i=0;i<=last;i++) if(!S.done[FLAT[i].lesson.id]) S.done[FLAT[i].lesson.id]=Date.now(); }
      addXP(50);
    } else addXP(10);
    save();
    resultScreen({title: pass?`Уровень ${L.name} сдан`:'Пока не сдано', emoji: pass?'🎓':'📈', xp: pass?50:10, acc, time:Date.now()-P.t0, failed:!pass,
      sub: pass?'Следующий уровень открыт.':'Нужно 80%. Повтори уроки уровня и попробуй ещё раз.', next: pass? (firstOpenIdx()<FLAT.length?()=>openItem(firstOpenIdx()):null) : ()=>runExam(level, extern)});
  }});
}
function placementTest(){
  const order = LEVELS.map(l=>l.id).filter(id=>id!=='start' && COURSE[id].length);
  let li=0, results={}, step=0;
  const perLevel=5;
  const steps=[];
  // dynamic: we generate one level batch at a time using a custom Player that appends
  const makeBatch = (lv) => pick(FLAT.filter(x=>x.level===lv && x.lesson.quiz).flatMap(x=>x.lesson.quiz.map(q=>({q,lv}))), perLevel)
    .map(({q,lv})=>{ const s=stepQuiz(q); s.lv=lv; s.isRetry=true; s.kindOverride=true; return s; });
  const first = makeBatch(order[0]);
  const P = Player({steps:first, onFinish:(P)=>{
    // compute
    let reached = null;
    for (const lv of order){ const r=results[lv]; if (!r) break; if (r.ok/r.n >= .6) reached=lv; else break; }
    S.placed=true;
    if (reached){ const last = FLAT.findIndex(x=>x.lesson.id==='exam-'+reached); for(let i=0;i<=last;i++) if(!S.done[FLAT[i].lesson.id]) S.done[FLAT[i].lesson.id]=Date.now(); }
    save();
    const nextLv = reached ? LEVELS[LEVELS.findIndex(l=>l.id===reached)+1] : LEVELS.find(l=>l.id==='a1');
    resultScreen({title:'Твой уровень: '+(reached? LEVELS.find(l=>l.id===reached).name : 'ниже A1'), emoji:'🧭', xp:0, acc:P.total?P.right/P.total:0, time:Date.now()-P.t0,
      sub: reached? `Предыдущие уровни открыты как пройденные. Начинаем с ${nextLv?nextLv.name:'финала'}. Модуль «Старт» про произношение доступен всегда.`:'Начнём с основ. Если хочешь подтянуть произношение, загляни в модуль «Старт».',
      next: firstOpenIdx()<FLAT.length?()=>openItem(firstOpenIdx()):null});
  }});
  // wrap grade to collect per-level results and extend steps adaptively
  const origGrade = P.grade;
  P.grade = (ok, st, c, n) => { origGrade(ok, st, c, n); const r = results[st.lv] || (results[st.lv]={ok:0,n:0}); r.n++; if(ok) r.ok++;
    const lvSteps = P.steps.filter(s=>s.lv===st.lv);
    if (r.n===lvSteps.length){ // batch done
      const wrongs = r.n - r.ok;
      if (r.ok/r.n >= .6 && li < order.length-1){ li++; P.steps.push(...makeBatch(order[li])); }
    }
    if (r.n - r.ok >= 3 && r.n < lvSteps.length){ P.steps = P.steps.slice(0, P.i+1); } // early stop on failure
  };
}

/* ================= REVIEW (SRS) ================= */
function viewReview(app){
  const due = srsDue(); const total=learnedWords();
  app.append(h(`<h1>Повторение</h1>`), h(`<p class="muted">Интервальное повторение: слова возвращаются тогда, когда ты начинаешь их забывать.</p>`));
  app.append(h(`<div class="statgrid"><div class="stat"><b>${due.length}</b><span>к повтору</span></div><div class="stat"><b>${total}</b><span>в словаре</span></div><div class="stat"><b>${Object.values(S.srs).filter(c=>c.r>=4).length}</b><span>выучено</span></div></div>`));
  const b1=h(`<button class="btn block acc" ${due.length?'':'disabled'}>Карточки · ${Math.min(due.length,20)} слов</button>`);
  b1.onclick=()=>reviewCards(due.slice(0,20));
  const b2=h(`<button class="btn block soft mt" ${total>=4?'':'disabled'}>Тренировка на письмо</button>`);
  b2.onclick=()=>reviewTyping();
  app.append(b1,b2);
  if (!total) app.append(h(`<p class="muted center mt2">Слова появятся здесь после первого урока.</p>`));
  // dictionary
  if (total){
    app.append(h(`<h2>Словарь</h2>`));
    const f=h(`<input class="field" placeholder="Поиск по словам" style="margin-bottom:8px">`); app.append(f);
    const list=h(`<div class="card list-words" style="padding:4px 16px"></div>`); app.append(list);
    const draw=()=>{ const q=f.value.toLowerCase(); list.innerHTML='';
      Object.keys(S.srs).filter(k=>WORDS[k]).filter(k=>!q||k.toLowerCase().includes(q)||WORDS[k].ru.toLowerCase().includes(q)).slice(0,200).forEach(k=>{
        const w=WORDS[k], st=wordStrength(k);
        const r=h(`<div class="row"><div><b>${esc(w.en)}</b><div class="small muted">${esc(w.ru)}</div></div><div style="display:flex;align-items:center;gap:10px"><span class="tiny">${'●'.repeat(st)}${'○'.repeat(4-st)}</span><button class="speak" style="width:36px;height:36px">${I.sound}</button></div></div>`);
        r.querySelector('.speak').onclick=()=>say(w.en); list.append(r); }); };
    f.oninput=draw; draw();
  }
}
function reviewCards(keys){
  const steps = keys.map(k=>({graded:false, render(b,P){
    const w=WORDS[k]; const rev = Math.random()<.5;
    b.append(h(`<div class="kind">Карточка · ${P.i+1}/${keys.length}</div>`));
    const c=h(`<div class="wcard"><div class="in"><div class="face"><div class="${rev?'tr':'w'}">${esc(rev?w.ru:w.en)}</div>${!rev&&w.ipa?`<div class="ipa">/${esc(w.ipa)}/</div>`:''}<div class="hint">Вспомни и переверни</div></div><div class="face back"><div class="${rev?'w':'tr'}">${esc(rev?w.en:w.ru)}</div>${rev&&w.ipa?`<div class="ipa">/${esc(w.ipa)}/</div>`:''}</div></div></div>`);
    b.append(c); if(!rev) say(w.en);
    const grades=h(`<div class="opts two hide"><button class="opt" data-q="0">Забыл</button><button class="opt" data-q="1">С трудом</button><button class="opt" data-q="2">Вспомнил</button><button class="opt" data-q="3">Легко</button></div>`);
    b.append(grades);
    const flip=()=>{ c.classList.add('flip'); say(w.en); grades.classList.remove('hide'); P.setBtn('Оцени, насколько легко', false); };
    c.onclick=flip; P.setBtn('Показать ответ'); P.onGo=flip;
    grades.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{ const q=+o.dataset.q; srsGrade(k,q); P.total++; if(q>0)P.right++; P.next(); });
  }}));
  Player({steps, onFinish:(P)=>{ addXP(P.total*2); resultScreen({title:'Повторение завершено', emoji:'🧠', xp:P.total*2, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0}); }});
}
function reviewTyping(){
  const keys = pick(Object.keys(S.srs).filter(k=>WORDS[k]).sort((a,b)=>S.srs[a].r-S.srs[b].r).slice(0,40),12);
  const steps = keys.map(k=>{ const w=WORDS[k]; return {word:k, render(b,P,st){
    b.append(h(`<div class="kind">Напиши по-английски</div>`), h(`<div class="prompt ru">${esc(w.ru)}</div>`));
    const f=h(`<input class="field" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="English">`); b.append(f); setTimeout(()=>f.focus(),300);
    f.oninput=()=>P.setBtn('Проверить',!!f.value.trim()); f.onkeydown=e=>{ if(e.key==='Enter'&&f.value.trim()) $('.go',P.el).click(); };
    P.onGo=()=>{ const r=check(f.value,w.en); say(w.en); P.grade(r>0, st, w.en, r===1?'Опечатка':''); };
  }}; });
  Player({steps, onFinish:(P)=>{ const xp=P.right*2; addXP(xp); resultScreen({title:'Тренировка завершена', emoji:'✍️', xp, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0}); }});
}

/* ================= GAMES ================= */
function gameWords(n){
  let keys = Object.keys(S.srs).filter(k=>WORDS[k]);
  if (keys.length < 12){ const lv=currentLevel(); keys = keys.concat(Object.keys(WORDS).filter(k=>WORDS[k].level===lv||WORDS[k].level==='a1')); }
  keys=[...new Set(keys)]; if (keys.length<4) keys = Object.keys(WORDS);
  return pick(keys, Math.min(n, keys.length)).map(k=>WORDS[k]);
}
const GAMES = [
  {id:'blitz', name:'Молния', d:'60 секунд: выбирай перевод как можно быстрее', c:'linear-gradient(135deg,#f59e0b,#ef4444)', ic:I.bolt, run:gameBlitz},
  {id:'pairs', name:'Пары', d:'Соедини 18 пар на время', c:'linear-gradient(135deg,#10b981,#0ea5e9)', ic:I.cards, run:gamePairs},
  {id:'sniper', name:'Аудио-снайпер', d:'Услышь слово и напиши его без ошибок', c:'linear-gradient(135deg,#6366f1,#a855f7)', ic:I.sound, run:gameSniper},
  {id:'anagram', name:'Анаграмма', d:'Собери слово из перемешанных букв', c:'linear-gradient(135deg,#ec4899,#f43f5e)', ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h4M6 5v4M14 17h6M4 17l3-6 3 6M5 15h4M15 5h4l-4 5h4"/></svg>', run:gameAnagram},
  {id:'builder', name:'Конструктор', d:'Собирай предложения на скорость', c:'linear-gradient(135deg,#0ea5e9,#22d3ee)', ic:I.path, run:gameBuilder},
  {id:'truefalse', name:'Верно / Неверно', d:'Совпадает ли перевод? Решай за секунду', c:'linear-gradient(135deg,#84cc16,#16a34a)', ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l4 4 8-9"/><path d="M15 15l5 5M20 15l-5 5"/></svg>', run:gameTF},
];
function viewGames(app){
  app.append(h(`<h1>Игры</h1>`), h(`<p class="muted">Быстрые раунды на словах, которые ты изучаешь. Рекорды сохраняются.</p>`));
  const g=h(`<div class="games"></div>`);
  GAMES.forEach(G=>{ const b=h(`<button class="game"><div class="gi" style="background:${G.c}">${G.ic}</div><div><b>${G.name}</b><span>${G.d}</span>${S.stats.best[G.id]?`<div class="tiny mt">Рекорд: ${S.stats.best[G.id]}</div>`:''}</div></button>`); b.onclick=()=>G.run(); g.append(b); });
  app.append(g);
}
function GameShell(name, seconds){
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><div class="bar"><b style="width:100%"></b></div><div class="timer">${seconds}</div></div><div class="p-body"></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  const G={el, body:$('.p-body',el), score:0, left:seconds, timer:null, ended:false};
  G.end=(onDone)=>{ if(G.ended) return; G.ended=true; clearInterval(G.timer); el.remove(); document.body.style.overflow=''; onDone&&onDone(); };
  $('.q',el).onclick=()=>G.end(()=>render());
  G.start=(onTimeout)=>{ G.timer=setInterval(()=>{ G.left--; $('.timer',el).textContent=G.left; $('.bar b',el).style.width=(G.left/seconds*100)+'%'; if(G.left<=0) onTimeout(); },1000); };
  return G;
}
function gameOver(id, name, score, unit='очков'){
  S.stats.games++; const best = S.stats.best[id]||0; const rec = score>best; if (rec) S.stats.best[id]=score;
  const xp = Math.min(30, Math.round(score/2)+3); addXP(xp);
  render();
  const el=h(`<div class="player"><div class="p-body result"><div class="big">${rec?'🏆':'🎮'}</div><h1 class="mt">${esc(name)}</h1><p class="muted">${rec?'Новый рекорд!':'Рекорд: '+best}</p>
   <div class="statgrid two"><div class="stat"><b>${score}</b><span>${unit}</span></div><div class="stat"><b>+${xp}</b><span>XP</span></div></div></div>
   <div class="p-foot"><button class="btn block acc a">Ещё раз</button><button class="btn block ghost mt b">К играм</button></div></div>`);
  document.body.append(el); sfx('win');
  $('.a',el).onclick=()=>{ el.remove(); GAMES.find(g=>g.id===id).run(); }; $('.b',el).onclick=()=>{ el.remove(); };
}
function gameBlitz(){
  const G=GameShell('Молния',60); const pool=gameWords(80); let i=0;
  const next=()=>{ const w=pool[i++ % pool.length]; G.body.innerHTML='';
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt" style="font-size:32px;margin:30px 0">${esc(w.en)}</div>`));
    const opts=[w.ru,...pick(pool.filter(x=>x.ru!==w.ru).map(x=>x.ru),3)];
    const box=h(`<div class="opts"></div>`); shuffle(opts).forEach(o=>{ const b=h(`<button class="opt">${esc(o)}</button>`);
      b.onclick=()=>{ if(o===w.ru){ G.score++; sfx('ok'); b.classList.add('right'); srsGrade(w.en,2); } else { sfx('bad'); b.classList.add('wrong'); G.left=Math.max(1,G.left-3); }
        setTimeout(next,180); }; box.append(b); }); G.body.append(box); };
  next(); G.start(()=>G.end(()=>gameOver('blitz','Молния',G.score)));
}
function gamePairs(){
  const G=GameShell('Пары',90); const words=gameWords(18); let round=0, found=0;
  const draw=()=>{ G.body.innerHTML=''; const set=words.slice(round*6, round*6+6); if(!set.length) return G.end(()=>gameOver('pairs','Пары',found+G.left,'очков'));
    G.body.append(h(`<div class="kind">Раунд ${round+1}/3 · найдено ${found}</div>`));
    const st=stepMatch(set.map(w=>[w.en,w.ru])); const fake={setBtn:()=>{}, answered:false, right:0,total:0};
    const g=h(`<div></div>`); G.body.append(g); st.render(g,fake);
    const iv=setInterval(()=>{ found = round*6 + g.querySelectorAll('.opt.gone').length/2; if (g.querySelectorAll('.opt.gone').length===set.length*2){ clearInterval(iv); round++; setTimeout(draw,350); } },150);
  };
  draw(); G.start(()=>G.end(()=>gameOver('pairs','Пары',found,'пар')));
}
function gameSniper(){
  const G=GameShell('Аудио-снайпер',90); const pool=gameWords(40).filter(w=>!w.en.includes(' ')||w.en.length<16); let i=0;
  const next=()=>{ const w=pool[i++%pool.length]; G.body.innerHTML='';
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`));
    const r=h(`<div class="center" style="margin:30px 0"><button class="speak big">${I.sound}</button></div>`); r.firstChild.onclick=()=>say(w.en); G.body.append(r); say(w.en);
    const f=h(`<input class="field" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="Что прозвучало?">`); G.body.append(f);
    const hint=h(`<div class="muted small mt center"></div>`); G.body.append(hint);
    const skip=h(`<button class="btn ghost block mt">Пропустить</button>`); skip.onclick=()=>{ hint.textContent=w.en+' — '+w.ru; setTimeout(next,1100); }; G.body.append(skip);
    setTimeout(()=>f.focus(),100);
    f.onkeydown=e=>{ if(e.key!=='Enter') return; const r=check(f.value,w.en); if(r===2){ G.score+=2; sfx('ok'); next(); } else if(r===1){ G.score+=1; sfx('ok'); hint.textContent='Почти: '+w.en; setTimeout(next,700);} else { sfx('bad'); f.classList.add('shake'); setTimeout(()=>f.classList.remove('shake'),400); } };
  };
  next(); G.start(()=>G.end(()=>gameOver('sniper','Аудио-снайпер',G.score)));
}
function gameAnagram(){
  const G=GameShell('Анаграмма',90); const pool=gameWords(60).filter(w=>/^[a-z]{3,10}$/i.test(w.en)); let i=0;
  if (!pool.length){ G.end(); return toast('Пока мало слов для анаграмм, пройди пару уроков'); }
  const next=()=>{ const w=pool[i++%pool.length]; G.body.innerHTML='';
    let letters=shuffle(w.en.toLowerCase().split('')); if (letters.join('')===w.en.toLowerCase()) letters=letters.reverse();
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt ru" style="margin:20px 0">${esc(w.ru)}</div>`));
    const line=h(`<div class="answer-line" style="justify-content:center"></div>`), bank=h(`<div class="bank"></div>`); G.body.append(line,bank);
    let ans='';
    letters.forEach(ch=>{ const t=h(`<button class="tile" style="min-width:44px">${ch}</button>`); t.onclick=()=>{ t.classList.add('used'); ans+=ch; line.append(h(`<span class="tile">${ch}</span>`));
      if (ans.length===letters.length){ if(ans===w.en.toLowerCase()){ G.score++; sfx('ok'); say(w.en); setTimeout(next,450);} else { sfx('bad'); line.classList.add('shake'); setTimeout(()=>{ ans=''; line.innerHTML=''; line.classList.remove('shake'); bank.querySelectorAll('.tile').forEach(x=>x.classList.remove('used')); },400);} } }; bank.append(t); });
    const sk=h(`<button class="btn ghost block mt2">Пропустить</button>`); sk.onclick=next; G.body.append(sk);
  };
  next(); G.start(()=>G.end(()=>gameOver('anagram','Анаграмма',G.score)));
}
function gameBuilder(){
  const G=GameShell('Конструктор',120);
  const lv=currentLevel(); let sents=[]; FLAT.filter(x=>(x.level===lv||isDone(x.lesson.id)) && x.lesson.sents).forEach(x=>sents.push(...x.lesson.sents));
  sents=shuffle(sents.filter(s=>tokens(s[0]).length<=10)); let i=0;
  const next=()=>{ const s=sents[i++%sents.length]; G.body.innerHTML=''; G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`));
    const st=stepBuild(s,'ru2en'); const g=h(`<div></div>`); G.body.append(g);
    const go=h(`<button class="btn block acc mt2">Проверить</button>`);
    const fake={answered:false, setBtn:()=>{}, el:G.el}; st.render(g,fake,st); G.body.append(go);
    go.onclick=()=>{ const ans=[...g.querySelectorAll('.answer-line .tile')].map(t=>t.textContent).join(' ');
      if (norm(ans)===norm(plain(s[0]))){ G.score++; sfx('ok'); say(plain(s[0])); next(); } else { sfx('bad'); go.classList.add('shake'); setTimeout(()=>go.classList.remove('shake'),400); } };
  };
  if (!sents.length){ G.end(); return; } next(); G.start(()=>G.end(()=>gameOver('builder','Конструктор',G.score)));
}
function gameTF(){
  const G=GameShell('Верно / Неверно',45); const pool=gameWords(80);
  const next=()=>{ const w=rnd(pool); const truth=Math.random()<.5; const shown= truth? w.ru : rnd(pool.filter(x=>x.ru!==w.ru)).ru;
    G.body.innerHTML=''; G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt center" style="font-size:30px;margin:40px 0 8px">${esc(w.en)}</div>`), h(`<div class="center muted" style="font-size:22px;margin-bottom:40px">${esc(shown)}</div>`));
    const box=h(`<div class="opts two"><button class="btn bad">Неверно</button><button class="btn ok">Верно</button></div>`); G.body.append(box);
    const ans=v=>{ if(v===truth){ G.score++; sfx('ok'); } else { sfx('bad'); G.left=Math.max(1,G.left-3); } next(); };
    box.children[0].onclick=()=>ans(false); box.children[1].onclick=()=>ans(true);
  };
  next(); G.start(()=>G.end(()=>gameOver('truefalse','Верно / Неверно',G.score)));
}

/* ================= ME ================= */
function viewMe(app){
  const lessons = Object.keys(S.done).filter(k=>!k.startsWith('exam')).length;
  const acc = S.stats.answers ? Math.round(S.stats.right/S.stats.answers*100) : 0;
  const lv = LEVELS.find(l=>l.id===currentLevel());
  app.append(h(`<h1>Прогресс</h1>`), h(`<p class="muted">Текущий уровень: <b>${lv.name} · ${lv.title}</b></p>`));
  app.append(h(`<div class="statgrid"><div class="stat"><b>${curStreak()}</b><span>дней подряд</span></div><div class="stat"><b>${lessons}</b><span>уроков</span></div><div class="stat"><b>${learnedWords()}</b><span>слов</span></div><div class="stat"><b>${S.xp}</b><span>XP всего</span></div><div class="stat"><b>${acc}%</b><span>точность</span></div><div class="stat"><b>${Math.round(S.stats.ms/60000)}</b><span>минут</span></div></div>`));
  // chart
  const days=[...Array(7)].map((_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); const k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); return {k, v:S.days[k]||0, n:['вс','пн','вт','ср','чт','пт','сб'][d.getDay()]}; });
  const max=Math.max(S.settings.goal,...days.map(d=>d.v));
  app.append(h(`<div class="card"><b>XP за неделю</b><div class="chart">${days.map(d=>`<div><i style="height:${d.v/max*100}%"></i><span>${d.n}</span></div>`).join('')}</div></div>`));
  // levels
  const lvCard=h(`<div class="card mt"><b>Уровни</b></div>`);
  LEVELS.forEach(L=>{ const {d,n}=levelProgress(L.id); if(!n) return; lvCard.append(h(`<div style="margin-top:12px"><div style="display:flex;justify-content:space-between" class="small"><span><b>${L.name}</b> · ${L.title}</span><span class="muted">${Math.round(d/n*100)}%</span></div><div class="bar mt" style="margin-top:6px"><b style="width:${d/n*100}%"></b></div></div>`)); });
  app.append(lvCard);
  app.append(h(`<h2>Достижения</h2>`), h(`<div class="ach">${ACH.map(([id,e,t])=>`<div class="${S.ach[id]?'got':''}"><em>${e}</em>${t}</div>`).join('')}</div>`));
  // settings
  app.append(h(`<h2>Настройки</h2>`));
  const st=h(`<div class="card" style="padding:4px 18px">
    <div class="row"><span>Тема</span><div class="seg" data-k="theme"><button data-v="auto">Авто</button><button data-v="light">Светлая</button><button data-v="dark">Тёмная</button></div></div>
    <div class="row"><span>Цель дня</span><div class="seg" data-k="goal"><button data-v="20">20</button><button data-v="40">40</button><button data-v="80">80</button></div></div>
    <div class="row"><span>Скорость речи</span><div class="seg" data-k="rate"><button data-v="0.75">0.75</button><button data-v="0.95">1.0</button><button data-v="1.1">1.15</button></div></div>
    <div class="row"><span>Упражнения на речь</span><div class="seg" data-k="speech"><button data-v="true">Вкл</button><button data-v="false">Выкл</button></div></div>
    <div class="row"><span>Звуки</span><div class="seg" data-k="sound"><button data-v="true">Вкл</button><button data-v="false">Выкл</button></div></div>
    <div class="row"><span>Голос</span><span class="small muted" style="text-align:right">${VOICE?esc(VOICE.name):'системный'}</span></div>
  </div>`);
  st.querySelectorAll('.seg').forEach(sg=>{ const k=sg.dataset.k; sg.querySelectorAll('button').forEach(b=>{ const v = b.dataset.v==='true'?true:b.dataset.v==='false'?false:isNaN(+b.dataset.v)?b.dataset.v:+b.dataset.v;
    if (S.settings[k]===v) b.classList.add('on'); b.onclick=()=>{ S.settings[k]=v; save(); applyTheme(); if(k==='rate') say('This is how I sound.'); render(); }; }); });
  app.append(st);
  const tools=h(`<div class="mt"><button class="btn ghost block" id="exp">Сохранить прогресс в файл</button><button class="btn ghost block mt" id="imp">Загрузить прогресс из файла</button><button class="btn ghost block mt" id="retest">Пройти тест уровня заново</button><button class="btn ghost block mt" id="rst" style="color:var(--bad)">Сбросить всё</button></div>`);
  app.append(tools, h(`<p class="tiny center mt2">Ascend · данные хранятся только на этом устройстве · работает офлайн</p>`));
  $('#exp').onclick=()=>{ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})); a.download='ascend-progress-'+today()+'.json'; a.click(); };
  $('#imp').onclick=()=>{ const i=document.createElement('input'); i.type='file'; i.accept='.json,application/json'; i.onchange=()=>{ const r=new FileReader(); r.onload=()=>{ try{ S=deepMerge(structuredClone(DEF),JSON.parse(r.result)); save(); toast('Прогресс загружен'); render(); }catch(e){ toast('Не удалось прочитать файл'); } }; r.readAsText(i.files[0]); }; i.click(); };
  $('#retest').onclick=placementTest;
  $('#rst').onclick=()=>{ if(confirm('Удалить весь прогресс без возможности восстановления?')){ localStorage.removeItem(KEY); S=load(); render(); } };
}

/* ================= boot ================= */
function boot(){
  buildFlat(); indexWords(); applyTheme();
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  checkAch(); render();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(()=>{});
}
document.addEventListener('DOMContentLoaded', boot);
