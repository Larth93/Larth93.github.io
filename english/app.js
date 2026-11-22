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
const DIALOGS = [];
function addUnits(level, units){ (COURSE[level] = COURSE[level] || []).push(...units); }
function addDialogs(d){ DIALOGS.push(...d); }
window.addUnits = addUnits; window.addDialogs = addDialogs;

let FLAT = [], LESSON_BY_ID = {};
function buildFlat(){
  FLAT = []; LESSON_BY_ID = {};
  LEVELS.forEach(L => {
    const units = COURSE[L.id]; if (!units.length) return;
    units.forEach(u => u.lessons.forEach(ls => {
      const item = {lesson:ls, level:L.id, unit:u};
      item.idx = FLAT.length; FLAT.push(item); LESSON_BY_ID[ls.id] = item;
    }));
    const ex = {exam:true, level:L.id, lesson:{id:'exam-'+L.id, title:'Экзамен уровня '+L.name, sub:'25 вопросов, 5 жизней. Открывает следующий уровень'}};
    ex.idx = FLAT.length; FLAT.push(ex); LESSON_BY_ID[ex.lesson.id] = ex;
  });
}

/* ---------- state ---------- */
const KEY = 'ascend.v1';
const DEF = {done:{}, stars:{}, xp:0, days:{}, streak:0, lastDay:null, srs:{}, placed:false, unlockedTo:0,
  settings:{theme:'auto', rate:0.95, goal:40, sound:true, speech:true, voice:''}, ach:{}, mist:{}, reports:[], lastExport:0, dlg:{},
  stats:{answers:0, right:0, ms:0, games:0, best:{}}};
let S = load();
function load(){ try{ const s = JSON.parse(localStorage.getItem(KEY)); if (s) return deepMerge(structuredClone(DEF), s); }catch(e){} return structuredClone(DEF); }
function deepMerge(a,b){ for (const k in b){ if (b[k] && typeof b[k]==='object' && !Array.isArray(b[k]) && a[k] && typeof a[k]==='object' && !Array.isArray(a[k])) deepMerge(a[k],b[k]); else a[k]=b[k]; } return a; }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
const dkey = d => d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today = () => dkey(new Date());
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
const esc = s => String(s??'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const pick = (a,n) => shuffle(a).slice(0,n);
const rnd = a => a[Math.random()*a.length|0];
const uniq = a => [...new Set(a)];
function toast(t){ const el=h(`<div class="toast">${esc(t)}</div>`); document.body.append(el); setTimeout(()=>el.remove(),2700); }
/* gap syntax: [main|alt|alt] */
const plain = s => String(s).replace(/\[([^\]|]+)(\|[^\]]*)?\]/g,'$1');
const gapAll = s => ((String(s).match(/\[([^\]]+)\]/)||[])[1] || '');
const gapMain = s => gapAll(s).split('|')[0];
const firstSentence = t => { t=String(t||''); const m=t.match(/^.*?[.!?](\s|$)/); return (m?m[0]:t).trim(); };

const CONTR = [["i'm","i am"],["you're","you are"],["we're","we are"],["they're","they are"],["he's","he is"],["she's","she is"],["it's","it is"],["that's","that is"],["what's","what is"],["there's","there is"],["where's","where is"],["who's","who is"],["isn't","is not"],["aren't","are not"],["wasn't","was not"],["weren't","were not"],["don't","do not"],["doesn't","does not"],["didn't","did not"],["can't","cannot"],["cannot","can not"],["won't","will not"],["wouldn't","would not"],["shouldn't","should not"],["couldn't","could not"],["haven't","have not"],["hasn't","has not"],["hadn't","had not"],["i've","i have"],["you've","you have"],["we've","we have"],["they've","they have"],["i'll","i will"],["you'll","you will"],["he'll","he will"],["she'll","she will"],["it'll","it will"],["we'll","we will"],["they'll","they will"],["i'd","i would"],["you'd","you would"],["he'd","he would"],["she'd","she would"],["we'd","we would"],["they'd","they would"],["let's","let us"],["mustn't","must not"],["needn't","need not"]];
function norm(s){
  s = String(s).toLowerCase().replace(/[’‘`]/g,"'").replace(/[.,!?;:"“”()\-–—…]/g,' ').replace(/\s+/g,' ').trim();
  for (const [a,b] of CONTR) s = s.replace(new RegExp("(^| )"+a+"(?= |$)","g"), "$1"+b);
  return s.replace(/\bgonna\b/g,'going to').replace(/\bwanna\b/g,'want to').replace(/\bok\b/g,'okay');
}
function lev(a,b){ const m=a.length,n=b.length; if(!m) return n; if(!n) return m; let p=[...Array(n+1).keys()];
  for(let i=1;i<=m;i++){ const c=[i]; for(let j=1;j<=n;j++) c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1)); p=c; } return p[n]; }
/* returns 2 exact, 1 typo, 0 wrong. target: string with | or array */
function check(input, target){
  const variants = Array.isArray(target) ? target : String(target).split('|');
  let best = 0;
  for (const t of variants){ const a=norm(input), b=norm(t); if (!b) continue; if (a===b) return 2;
    const tol = b.length>14 ? 2 : b.length>4 ? 1 : 0; if (lev(a,b)<=tol) best=1; }
  return best;
}
/* sentence variants: main + gap alternatives + full alternatives */
function sentVariants(sent){
  const en = sent[0], all = gapAll(en).split('|');
  const v = all.map(g => en.replace(/\[[^\]]+\]/, g));
  return uniq([...v, ...(sent[3]||[])]);
}

/* ---------- audio ---------- */
let VOICE = null;
function enVoices(){ return 'speechSynthesis' in window ? speechSynthesis.getVoices().filter(v => /^en[-_]US/i.test(v.lang)) : []; }
function pickVoice(){
  const vs = enVoices();
  if (S.settings.voice){ const v = vs.find(v=>v.name===S.settings.voice); if (v) return VOICE=v; }
  const pref = ['Ava (Premium)','Zoe (Premium)','Evan (Premium)','Ava (Enhanced)','Samantha (Enhanced)','Evan (Enhanced)','Google US English','Microsoft Aria','Microsoft Jenny','Samantha','Ava','Alex'];
  for (const p of pref){ const v = vs.find(v => v.name.includes(p)); if (v) return VOICE = v; }
  VOICE = vs[0] || ('speechSynthesis' in window ? speechSynthesis.getVoices().find(v=>/^en/i.test(v.lang)) : null) || null;
}
const voiceIsGood = () => VOICE && /Premium|Enhanced|Google|Microsoft|Neural|Natural/i.test(VOICE.name);
if ('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, rate, onend){
  if (!('speechSynthesis' in window)) { onend && onend(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(plain(text));
  u.lang='en-US'; if (VOICE) u.voice = VOICE; u.rate = rate || S.settings.rate;
  if (onend){ u.onend = onend; u.onerror = onend; }
  speechSynthesis.speak(u);
}
/* iOS: unlock audio on first touch */
let audioUnlocked = false;
function unlockAudio(){
  if (audioUnlocked) return; audioUnlocked = true;
  try{ if ('speechSynthesis' in window){ const u=new SpeechSynthesisUtterance(' '); u.volume=0; speechSynthesis.speak(u); } }catch(e){}
  try{ AC = AC || new (window.AudioContext||window.webkitAudioContext)(); AC.resume && AC.resume(); }catch(e){}
}
document.addEventListener('pointerdown', unlockAudio, {once:true, capture:true});
document.addEventListener('touchstart', unlockAudio, {once:true, capture:true});

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen(onres, onerr){
  if (!SR) return onerr && onerr('nosupport');
  const r = new SR(); r.lang='en-US'; r.interimResults=false; r.maxAlternatives=5;
  let got=false;
  r.onresult = e => { got=true; onres([...e.results[0]].map(a=>a.transcript)); };
  r.onerror = e => onerr && onerr(e.error); r.onend = () => { if(!got) onerr && onerr('end'); };
  try{ r.start(); }catch(e){ onerr && onerr('fail'); } return r;
}
function similarity(a,b){ a=norm(a); b=norm(b); if(!a||!b) return 0; return 1-lev(a,b)/Math.max(a.length,b.length); }
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
const sv = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const I = {
  path:sv('<path d="M4 19V5m0 14h16M8 15l3-4 3 2 5-7"/>'),
  cards:sv('<rect x="3" y="6" width="14" height="14" rx="3"/><path d="M7 3h11a3 3 0 0 1 3 3v11"/>'),
  game:sv('<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18.5 13.5h.01"/>'),
  stats:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  book:sv('<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5V21.5"/><path d="M8 7h8M8 11h6"/>'),
  chat:sv('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>'),
  ear:sv('<path d="M6 9a6 6 0 1 1 12 0c0 3-2 4-3 5.5S14 18 12 19.5 8 20 8 18"/><path d="M10 9a2 2 0 1 1 4 0c0 1.5-2 2-2 3.5"/>'),
  repeat:sv('<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'),
  flag:sv('<path d="M4 22V4m0 0h12l-2 4 2 4H4"/>'),
  target:sv('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
  fire:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a7 7 0 0 1-7-7c0-3.6 2.4-5.6 3.5-7.4.4 1.4 1.2 2.4 2.2 2.9C10.5 6 12.6 3.6 13.5 2c.6 3 5.5 6.2 5.5 13a7 7 0 0 1-7 7z"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  slow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg>',
  chev:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>',
  logo:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 12 5l8 14"/><path d="M8.5 13h7"/></svg>',
  heart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>'
};

/* ---------- theme ---------- */
function applyTheme(){ const t=S.settings.theme; if (t==='auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme',t);
  const dark = t==='dark' || (t==='auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  $('meta[name=theme-color]').setAttribute('content', dark ? '#0c0c0f' : '#f6f5f2'); }

/* ---------- progress ---------- */
function isDone(id){ return !!S.done[id]; }
function firstOpenIdx(){ for (let i=0;i<FLAT.length;i++) if (!isDone(FLAT[i].lesson.id)) return i; return FLAT.length; }
function isUnlocked(i){ return i <= Math.max(firstOpenIdx(), S.unlockedTo); }
function levelProgress(lv){ const items = FLAT.filter(x=>x.level===lv); const d = items.filter(x=>isDone(x.lesson.id)).length; return {d, n:items.length}; }
function currentLevel(){ const i = Math.min(firstOpenIdx(), FLAT.length-1); return FLAT[i] ? FLAT[i].level : 'c2'; }
function learnedWords(){ return Object.keys(S.srs).filter(k=>WORDS[k]).length; }
/* lessons the learner has seen: done + current */
function seenLessons(){ const fi=firstOpenIdx(); return FLAT.filter(x=>!x.exam && (isDone(x.lesson.id) || x.idx===fi)); }

/* ---------- words & SRS ---------- */
const WORDS = {};
function indexWords(){ FLAT.forEach(x => (x.lesson.words||[]).forEach(w => { if (!WORDS[w[0]]) WORDS[w[0]] = {en:w[0], ru:w[1], ipa:w[2]||'', lesson:x.lesson.id, level:x.level}; })); }
const LOOKUP = {};
function indexLookup(){ for (const k in WORDS){ const w=WORDS[k]; const key=k.toLowerCase(); if(!LOOKUP[key]) LOOKUP[key]=w; } }
function lookupWord(raw){
  const w = raw.toLowerCase().replace(/[^a-z'’-]/g,'').replace(/’/g,"'"); if (!w) return null;
  const cands=[w, w.replace(/'s$/,''), w.replace(/s$/,''), w.replace(/es$/,''), w.replace(/ies$/,'y'), w.replace(/ed$/,''), w.replace(/d$/,''), w.replace(/ied$/,'y'), w.replace(/ing$/,''), w.replace(/ing$/,'e'), w.replace(/(.)\1ing$/,'$1'), w.replace(/(.)\1ed$/,'$1'), w.replace(/ly$/,''), w.replace(/er$/,''), w.replace(/est$/,'')];
  for (const c of cands) if (LOOKUP[c]) return LOOKUP[c];
  for (const c of cands) if (c.length>2 && LOOKUP['to '+c]) return LOOKUP['to '+c];
  return null;
}
function srsAdd(en, due){ if (!S.srs[en]) S.srs[en] = {e:2.5, i:0, r:0, due:due||Date.now(), seen:0}; }
function srsGrade(en, q){
  const c = S.srs[en] || (S.srs[en] = {e:2.5,i:0,r:0,due:0,seen:0}); c.seen++;
  if (q===0){ c.r=0; c.i=0; c.due=Date.now()+10*60e3; c.e=Math.max(1.3,c.e-.2); }
  else { c.r++; c.i = c.r===1 ? 1 : c.r===2 ? (q===1?2:3) : Math.round(c.i * c.e * (q===1?.8:q===3?1.3:1));
    c.e = Math.max(1.3, c.e + (q===1?-.15:q===3?.1:0)); c.due = Date.now() + c.i*864e5; }
  save();
}
function srsDue(){ const now=Date.now(); return Object.keys(S.srs).filter(k => WORDS[k] && S.srs[k].due<=now).sort((a,b)=>S.srs[a].due-S.srs[b].due); }
function wordStrength(en){ const c=S.srs[en]; if(!c) return 0; return Math.min(4, c.r); }
/* known vocabulary pool: only words from lessons seen */
function knownWordsPool(extraLesson){
  const ids = new Set(seenLessons().map(x=>x.lesson.id)); if (extraLesson) ids.add(extraLesson.id);
  return Object.values(WORDS).filter(w=>ids.has(w.lesson) || S.srs[w.en]);
}

/* ---------- mistakes log ---------- */
function logMistake(step, ok){
  if (!step.ref) return;
  const k = step.ref; const m = S.mist[k];
  if (!ok){ S.mist[k] = {n:(m?m.n:0)+1, t:Date.now()}; }
  else if (m && step.fromReview){ m.n--; if (m.n<=0) delete S.mist[k]; }
  save();
}
function mistakeSteps(max){
  const keys = Object.keys(S.mist).sort((a,b)=>S.mist[b].n-S.mist[a].n || S.mist[b].t-S.mist[a].t).slice(0, max*2);
  const out=[];
  for (const k of shuffle(keys)){ const [type, lid, idx] = k.split('::'); const x=LESSON_BY_ID[lid]; if(!x) { delete S.mist[k]; continue; } const ls=x.lesson;
    let st=null;
    if (type==='s' && ls.sents && ls.sents[idx]) st = Math.random()<.5 ? stepGapType(ls.sents[idx], ls, +idx) : stepGapChoice(ls.sents[idx], ls, +idx);
    else if (type==='q' && ls.quiz && ls.quiz[idx]) st = stepQuiz(ls.quiz[idx], ls, +idx);
    else if (type==='t' && ls.sents && ls.sents[idx]) st = stepBuild(ls.sents[idx],'ru2en',[],ls,+idx);
    if (st){ st.fromReview=true; st.isRetry=true; out.push(st); }
    if (out.length>=max) break; }
  return out;
}
function weakTopics(){
  const cnt={}; for (const k in S.mist){ const lid=k.split('::')[1]; cnt[lid]=(cnt[lid]||0)+S.mist[k].n; }
  return Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([lid,n])=>({x:LESSON_BY_ID[lid], n})).filter(o=>o.x);
}

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
  ['d5','💬','5 диалогов',()=>Object.keys(S.dlg).length>=5],
  ['a1','🅰️','Сдан A1',()=>isDone('exam-a1')],
  ['b1','🅱️','Сдан B1',()=>isDone('exam-b1')],
  ['c2','👑','Сдан C2',()=>isDone('exam-c2')],
];
function checkAch(){ ACH.forEach(([id,e,t,f]) => { if (!S.ach[id] && f()){ S.ach[id]=Date.now(); setTimeout(()=>toast(e+' Достижение: '+t),400); } }); }

/* ---------- tap-to-translate ---------- */
function tappable(text){ // returns html with word spans
  return esc(text).split(/(\s+)/).map(t => /\s/.test(t)||!/[A-Za-z]/.test(t) ? t : `<span class="tw">${t}</span>`).join('');
}
function bindTap(root){
  root.querySelectorAll('.tw').forEach(sp => sp.onclick = (e) => {
    e.stopPropagation(); document.querySelectorAll('.pop-tr').forEach(p=>p.remove());
    const w = lookupWord(sp.textContent); say(sp.textContent.replace(/[^A-Za-z'’-]/g,''));
    const p = h(`<div class="pop-tr">${w?`<b>${esc(w.en)}</b> — ${esc(w.ru)}`:'<span class="muted">нет в словаре курса</span>'}</div>`);
    document.body.append(p); const r=sp.getBoundingClientRect();
    p.style.left = Math.max(8, Math.min(innerWidth-p.offsetWidth-8, r.left + r.width/2 - p.offsetWidth/2))+'px';
    p.style.top = (r.top - p.offsetHeight - 8 < 8 ? r.bottom + 8 : r.top - p.offsetHeight - 8)+'px';
    setTimeout(()=>p.remove(), 2600);
  });
}
document.addEventListener('click', ()=>document.querySelectorAll('.pop-tr').forEach(p=>p.remove()));

/* ================= VIEWS ================= */
let TAB = 'path';
function render(){
  const app = $('#app'); app.innerHTML = ''; app.classList.remove('fade'); void app.offsetWidth; app.classList.add('fade');
  app.append(topBar());
  ({path:viewPath, review:viewReview, practice:viewPractice, me:viewMe})[TAB](app);
  renderTabs();
}
function topBar(){
  const el = h(`<div class="top"><div class="brand"><div class="logo">${I.logo}</div>Ascend</div>
   <div class="chips"><button class="chip" id="ref" aria-label="Справочник">${I.book}</button><div class="chip fire">${I.fire}${curStreak()}</div><div class="chip xp">${I.bolt}${S.xp}</div></div></div>`);
  el.querySelector('#ref').onclick = openReference;
  return el;
}
function renderTabs(){
  let tb = $('.tabbar'); if (!tb){ tb = h(`<nav class="tabbar"><div class="in"></div></nav>`); document.body.append(tb); }
  const tabs=[['path','Путь',I.path],['review','Повтор',I.cards],['practice','Практика',I.game],['me','Прогресс',I.stats]];
  const due = srsDue().length;
  tb.firstChild.innerHTML = tabs.map(([k,n,ic])=>`<button class="tab ${TAB===k?'on':''}" data-t="${k}">${ic}<span>${n}${k==='review'&&due?` <i class="badge">${due>99?'99+':due}</i>`:''}</span></button>`).join('');
  tb.querySelectorAll('.tab').forEach(b => b.onclick = () => { TAB=b.dataset.t; render(); scrollTo(0,0); });
}

/* ---- path ---- */
function viewPath(app){
  const fi = firstOpenIdx();
  const cur = FLAT[Math.min(fi, FLAT.length-1)];
  const todayXP = S.days[today()]||0, goal = S.settings.goal;
  const pct = Math.min(100, Math.round(todayXP/goal*100));
  if (!S.placed){
    const hero=h(`<div class="hero"><div class="lbl">Добро пожаловать</div><h3>Определим твой уровень</h3>
      <p>Подробный адаптивный тест: слова, грамматика и аудирование, 8–15 минут. Уровень засчитывается только при уверенном результате.</p>
      <div class="hero-btns"><button class="btn" id="pt">Пройти тест</button><button class="btn ghost on-acc" id="skip">С нуля</button></div></div>`);
    app.append(hero); $('#pt').onclick = placementIntro; $('#skip').onclick = () => { S.placed=true; save(); render(); };
  } else {
    const box = h(`<div class="hero"><div class="lbl">Занятие дня</div><h3>${fi<FLAT.length?esc(cur.lesson.title):'Поддерживай форму'}</h3>
      <p>${dailyPlanText()}</p><div class="hero-btns"><button class="btn" id="daily">Начать занятие</button>${fi<FLAT.length?'<button class="btn ghost on-acc" id="only">Только урок</button>':''}</div></div>`);
    app.append(box); $('#daily').onclick = runDaily; const o=$('#only'); if(o) o.onclick = () => openItem(cur.idx);
  }
  app.append(h(`<div class="card goal"><div class="ring" style="--p:${pct}"><i>${pct}%</i></div><div style="flex:1"><b>Цель дня</b><div class="muted small">${todayXP} из ${goal} XP · к повторению ${srsDue().length} слов · ошибок к разбору ${Object.keys(S.mist).length}</div></div></div>`));
  // backup reminder
  const progress = Object.keys(S.done).length;
  if (progress>=3 && Date.now()-S.lastExport > 7*864e5){
    const b=h(`<div class="card warn mt"><div><b>Сохрани копию прогресса</b><div class="small muted">Прогресс хранится только на телефоне. Раз в неделю сохраняй файл, чтобы ничего не потерять.</div></div><button class="btn soft" style="height:40px;flex:none">Сохранить</button></div>`);
    b.querySelector('.btn').onclick = exportProgress; app.append(b);
  }

  LEVELS.forEach(L => {
    const items = FLAT.filter(x=>x.level===L.id); if (!items.length) return;
    const {d,n} = levelProgress(L.id);
    const sec = h(`<section class="level" id="lv-${L.id}"><div class="level-head"><div><div class="level-badge">${L.name}</div><h2>${L.title}</h2><div class="small muted">${L.desc}</div></div><div class="small muted nowrap">${d}/${n}</div></div><div class="bar"><b style="width:${n?d/n*100:0}%"></b></div></section>`);
    const open = L.id===cur?.level;
    const body = h(`<div class="${open?'':'hide'}"></div>`);
    // group by unit
    const groups=[]; items.forEach(x=>{ const key=x.exam?'exam':x.unit.id; let g=groups.find(g=>g.key===key); if(!g){ g={key, unit:x.unit, items:[]}; groups.push(g);} g.items.push(x); });
    let num=0;
    groups.forEach(g => {
      if (g.key==='exam'){ g.items.forEach(x=>body.append(lessonRow(x, ++num, fi))); return; }
      const dn = g.items.filter(x=>isDone(x.lesson.id)).length, hasCur = g.items.some(x=>x.idx===fi);
      const head = h(`<button class="unit-head ${hasCur?'cur':''}"><span><b>${esc(g.unit.title)}</b><span class="tiny"> · ${dn}/${g.items.length}</span></span><span class="chev ${hasCur?'rot':''}">${I.chev}</span></button>`);
      const list = h(`<div class="unit-list ${hasCur?'':'hide'}"></div>`);
      g.items.forEach(x=>list.append(lessonRow(x, ++num, fi)));
      head.onclick = () => { list.classList.toggle('hide'); head.querySelector('.chev').classList.toggle('rot'); };
      body.append(head, list);
    });
    const more = h(`<button class="btn ghost block mt">${open?'Свернуть уровень':'Показать уроки'}</button>`);
    more.onclick = () => { body.classList.toggle('hide'); more.textContent = body.classList.contains('hide')?'Показать уроки':'Свернуть уровень'; };
    if (!open && !isUnlocked(items[0].idx) && prevLevelId(L.id)){
      const jump = h(`<button class="btn soft block mt">Сдать экзамен ${LEVELS.find(l=>l.id===prevLevelId(L.id)).name} экстерном</button>`);
      jump.onclick = () => runExam(prevLevelId(L.id), true); sec.append(jump);
    }
    sec.append(body, more); app.append(sec);
  });
}
function lessonRow(x, num, fi){
  const id=x.lesson.id, done=isDone(id), un=isUnlocked(x.idx), isCur = x.idx===fi, st = S.stars[id]||0;
  const b = h(`<button class="lesson ${done?'done':''} ${isCur?'cur':''} ${un?'':'lock'} ${x.exam?'exam':''}">
    <div class="n">${x.exam?'★':done?'✓':num}</div><div class="t"><b>${esc(x.lesson.title)}</b><span>${esc(x.lesson.sub||'')}</span></div>
    ${done&&!x.exam?`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(3-st)}</div>`:''}</button>`);
  b.onclick = () => un ? openItem(x.idx) : toast('Сначала пройди предыдущие уроки или сдай экзамен экстерном');
  return b;
}
function prevLevelId(id){ const i = LEVELS.findIndex(l=>l.id===id); for (let k=i-1;k>=0;k--) if (COURSE[LEVELS[k].id].length) return LEVELS[k].id; return null; }
function openItem(idx){ const x = FLAT[idx]; if (!x) return; if (x.exam) runExam(x.level); else runLesson(x); }
function dailyPlanText(){
  const due=Math.min(srsDue().length,12), mist=Math.min(Object.keys(S.mist).length,6), fi=firstOpenIdx();
  const parts=[]; if(due) parts.push(`${due} слов на повтор`); if(mist) parts.push(`${mist} старых ошибок`); if(fi<FLAT.length) parts.push('новый урок');
  return parts.length ? 'В плане: '+parts.join(', ')+'.' : 'Всё повторено. Можно пройти диалог или сыграть.';
}

/* ================= PLAYER ================= */
function Player({steps, onFinish, hearts=null, lesson=null}){
  const el = h(`<div class="player"><div class="p-top"><button class="icon-btn q" aria-label="Выйти">${I.close}</button><div class="bar"><b style="width:0"></b></div>${hearts!==null?`<div class="hearts">${I.heart}<span>${hearts}</span></div>`:''}<button class="icon-btn rep" aria-label="Сообщить об ошибке">${I.flag}</button></div>
    <div class="p-body"></div><div class="p-foot"><div class="fb"><b></b><div></div></div><div class="fb-extra"></div><button class="btn block acc go">Проверить</button></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  const body = $('.p-body',el), foot=$('.p-foot',el), go=$('.go',el), fbB=$('.fb b',el), fbD=$('.fb div',el), fbX=$('.fb-extra',el), bar=$('.bar b',el);
  const P = {el, steps:[...steps], i:0, right:0, wrong:0, total:0, mistakes:[], hearts, t0:Date.now(), answered:false};
  $('.q',el).onclick = () => { if (confirm('Выйти? Прогресс этого занятия не сохранится.')) close(); };
  $('.rep',el).onclick = () => reportStep(P, lesson);
  function close(){ 'speechSynthesis' in window && speechSynthesis.cancel(); el.remove(); document.body.style.overflow=''; }
  P.close = close;
  P.setBtn = (txt, enabled=true, cls='acc') => { go.textContent=txt; go.disabled=!enabled; go.className='btn block go '+cls; };
  P.feedback = (ok, title, detail) => {
    foot.className = 'p-foot '+(ok?'ok':'bad'); fbB.textContent=title; fbD.innerHTML=detail||'';
    sfx(ok?'ok':'bad'); P.answered=true; P.setBtn('Дальше', true, ok?'ok':'bad');
    if (!ok) setTimeout(()=>foot.scrollIntoView({block:'end'}),50);
  };
  /* ex: {correct, why, wrongNote, okNote, tr} */
  P.grade = (ok, step, ex={}) => {
    if (step.graded===false) return;
    P.total++; S.stats.answers++;
    if (ok){ P.right++; S.stats.right++;
      P.feedback(true, rnd(['Верно!','Отлично!','Точно!','Именно так!']), [ex.okNote, ex.why?esc(firstSentence(ex.why)):''].filter(Boolean).join('<br>'));
    } else { P.wrong++; P.mistakes.push(step);
      if (!step.isRetry){ P.steps.push({...step, isRetry:true}); }
      if (P.hearts!==null){ P.hearts--; $('.hearts span',el).textContent=P.hearts; }
      const parts=[];
      if (ex.correct) parts.push(`<div class="fb-row"><span>Правильно</span><b>${esc(ex.correct)}</b>${ex.tr?`<i>${esc(ex.tr)}</i>`:''}</div>`);
      if (ex.wrongNote) parts.push(`<div class="fb-row"><span>Твой ответ</span>${ex.wrongNote}</div>`);
      if (ex.why) parts.push(`<div class="fb-row"><span>Почему</span>${esc(ex.why)}</div>`);
      if (ex.rule) parts.push(`<div class="fb-row"><span>Правило</span>${esc(ex.rule)}</div>`);
      P.feedback(false, 'Разберём ошибку', parts.join(''));
      if (ex.selfOk){ const b=h(`<button class="btn ghost block mt" style="height:42px;font-size:14px">Мой вариант тоже верен</button>`);
        b.onclick=()=>{ P.wrong--; P.right++; P.mistakes.pop(); if(!step.isRetry) P.steps.pop(); if(P.hearts!==null){P.hearts++; $('.hearts span',el).textContent=P.hearts;} logMistake(step,true); b.remove(); foot.className='p-foot ok'; fbB.textContent='Засчитано'; }; fbX.append(b); }
    }
    logMistake(step, ok);
    if (step.word) srsGrade(step.word, ok?2:0);
  };
  P.next = () => {
    P.i++; if (P.hearts!==null && P.hearts<=0) return finish(true);
    if (P.i >= P.steps.length) return finish(false);
    show();
  };
  function finish(failed){ close(); S.stats.ms += Date.now()-P.t0; save(); onFinish(P, failed); }
  function show(){
    const st = P.steps[P.i]; P.answered=false; foot.className='p-foot'; fbX.innerHTML='';
    bar.style.width = (P.i/P.steps.length*100)+'%';
    body.innerHTML=''; body.scrollTop=0; body.classList.remove('slide'); void body.offsetWidth; body.classList.add('slide');
    P.onGo = null; P.setBtn('Проверить', false);
    st.render(body, P, st);
    bindTap(body);
  }
  go.onclick = () => { if (P.answered || !P.onGo) return P.next(); P.onGo(); };
  P.show = show; show();
  return P;
}
function reportStep(P, lesson){
  const st = P.steps[P.i]; const txt = (P.el.querySelector('.p-body').innerText||'').slice(0,300).replace(/\s+/g,' ');
  const note = prompt('Что не так с заданием? (необязательно)', '');
  if (note===null) return;
  S.reports.push({lesson: lesson?lesson.id:(st.ref||'?'), ref: st.ref||'', text: txt, note, t: new Date().toISOString()}); save();
  toast('Сохранено. Список жалоб — в «Прогресс → Настройки»');
}

/* ----- step builders ----- */
const ruleOf = ls => ls ? `${ls.title}${ls.sub?': '+ls.sub:''}` : '';
function stepTheory(lesson){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Теория</div>`), h(`<h1>${esc(lesson.title)}</h1>`), h(`<div class="muted" style="margin-bottom:14px">${esc(lesson.sub||'')}</div>`));
    const t = h(`<div class="theory">${lesson.theory||''}</div>`); b.append(t);
    t.querySelectorAll('.ex').forEach(e => e.onclick = () => say((e.querySelector('b')||e).textContent));
    P.setBtn('Понятно, к практике');
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
function wordMeaning(opt){ const w = WORDS[opt] || Object.values(WORDS).find(x=>x.ru===opt); if(!w) return ''; return WORDS[opt] ? `«${esc(w.en)}» значит «${esc(w.ru)}»` : `«${esc(w.ru)}» по-английски — ${esc(w.en)}`; }
function stepChoice({kind, prompt, promptRu, audio, options, correct, okNote, why, rule, word, autoplay, explainWrong, ref}){
  return {word, ref, render(b,P,st){
    b.append(h(`<div class="kind">${kind}</div>`));
    const pr = h(`<div class="say" style="margin-bottom:18px">${audio?`<button class="speak">${I.sound}</button>`:''}<div class="prompt ${promptRu?'ru':''}" style="margin:0">${promptRu?esc(prompt||''):tappable(prompt||'')}</div></div>`);
    if (audio){ pr.querySelector('.speak').onclick=()=>say(audio); if (autoplay!==false) setTimeout(()=>say(audio),250); }
    b.append(pr);
    const box = h(`<div class="opts"></div>`); let sel=null;
    shuffle(options).forEach(o => { const btn=h(`<button class="opt">${esc(o)}</button>`); btn.onclick=()=>{ if(P.answered) return; box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); btn.classList.add('sel'); sel=o; P.setBtn('Проверить'); if (/^[A-Za-z]/.test(o) && o.length<40 && !promptRu===false) say(o); }; box.append(btn); });
    b.append(box);
    P.onGo = () => { const ok = sel===correct;
      box.querySelectorAll('.opt').forEach(x=>{ if (x.textContent===correct) x.classList.add('right'); else if (x.classList.contains('sel')) x.classList.add('wrong'); });
      P.grade(ok, st, {correct, okNote, why, rule, wrongNote: !ok && explainWrong ? explainWrong(sel) : ''}); };
  }};
}
function sentWhy(sent){ return sent[2] || ''; }
function stepGapChoice(sent, ls, idx){
  const [en, ru] = sent; const main = gapMain(en); const all = gapAll(en).split('|').map(norm);
  return {ref:`s::${ls.id}::${idx}`, render(b,P,st){
    b.append(h(`<div class="kind">Заполни пропуск</div>`));
    const parts = en.split(/\[[^\]]+\]/);
    const s = h(`<div class="gap-sent">${tappable(parts[0])}<span class="g">&nbsp;?&nbsp;</span>${tappable(parts[1]||'')}</div>`);
    b.append(s, h(`<div class="muted" style="margin:-10px 0 18px">${esc(ru)}</div>`));
    const box=h(`<div class="opts two"></div>`); let sel=null;
    shuffle(gapOptions(sent, ls)).forEach(o=>{ const btn=h(`<button class="opt">${esc(o)}</button>`); btn.onclick=()=>{ if(P.answered)return; box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); btn.classList.add('sel'); sel=o; $('.g',s).textContent=o; P.setBtn('Проверить'); }; box.append(btn); });
    b.append(box);
    P.onGo = () => { const ok = all.includes(norm(sel)); box.querySelectorAll('.opt').forEach(x=>{ if(all.includes(norm(x.textContent))) x.classList.add('right'); else if(x.classList.contains('sel')) x.classList.add('wrong'); });
      say(plain(en)); P.grade(ok, st, {correct: plain(en), tr: ru, why: sentWhy(sent), rule: sentWhy(sent)?'':ruleOf(ls), wrongNote: ok?'':`«${esc(sel)}» здесь не подходит.`}); };
  }};
}
function stepGapType(sent, ls, idx){
  const [en, ru] = sent; const g = gapAll(en);
  return {ref:`s::${ls.id}::${idx}`, render(b,P,st){
    b.append(h(`<div class="kind">Впиши пропущенное</div>`));
    const parts = en.split(/\[[^\]]+\]/);
    b.append(h(`<div class="gap-sent">${tappable(parts[0])}<span class="g">&nbsp;…&nbsp;</span>${tappable(parts[1]||'')}</div>`), h(`<div class="muted" style="margin:-10px 0 18px">${esc(ru)}</div>`));
    const hint = gapMain(en); b.append(h(`<div class="tiny" style="margin:-8px 0 12px">Подсказка: ${hint.split(' ').length>1?hint.split(' ').length+' слова':'одно слово'}, начинается на «${esc(hint[0])}»</div>`));
    const f = h(`<input class="field" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ответ">`); b.append(f);
    f.oninput = () => P.setBtn('Проверить', !!f.value.trim()); f.onkeydown = e => { if (e.key==='Enter' && f.value.trim()) $('.go',P.el).click(); };
    setTimeout(()=>f.focus(),300);
    P.onGo = () => { const r = check(f.value, g); f.blur(); say(plain(en));
      P.grade(r>0, st, {correct: plain(en), tr: ru, why: sentWhy(sent), rule: sentWhy(sent)?'':ruleOf(ls), okNote: r===1?`Засчитано с опечаткой: правильно «${esc(gapMain(en))}»`:'', wrongNote: r?'':`ты написал «${esc(f.value.trim())}»`}); };
  }};
}
function tokens(s){ return plain(s).replace(/([.,!?;:"“”])/g,'').split(/\s+/).filter(Boolean); }
function stepBuild(sent, mode, distract=[], ls, idx){
  const [en, ru] = sent; const tk = tokens(en);
  return {ref: ls?`t::${ls.id}::${idx}`:null, render(b,P,st){
    b.append(h(`<div class="kind">${mode==='listen'?'Собери услышанное':'Переведи, собрав фразу'}</div>`));
    if (mode==='listen'){ const r=h(`<div class="say" style="margin-bottom:12px"><button class="speak big">${I.sound}</button><button class="speak">${I.slow}</button></div>`); r.children[0].onclick=()=>say(en); r.children[1].onclick=()=>say(en,.6); b.append(r); setTimeout(()=>say(en),250); }
    else b.append(h(`<div class="prompt ru">${esc(ru)}</div>`));
    const line=h(`<div class="answer-line"></div>`), bank=h(`<div class="bank"></div>`); b.append(line,bank);
    const low = tk.map(t=>t.toLowerCase());
    const extra = pick(uniq(distract).filter(d=>!low.includes(d.toLowerCase())), Math.min(3, Math.max(1, 8-tk.length)));
    const picked=[];
    shuffle([...tk, ...extra]).forEach(w=>{ const t=h(`<button class="tile">${esc(w)}</button>`);
      t.onclick=()=>{ if(P.answered) return; t.classList.add('used'); const c=h(`<button class="tile">${esc(w)}</button>`); picked.push(c); line.append(c); if(mode!=='listen') say(w);
        c.onclick=()=>{ if(P.answered) return; c.remove(); picked.splice(picked.indexOf(c),1); t.classList.remove('used'); P.setBtn('Проверить', picked.length>0); };
        P.setBtn('Проверить'); }; bank.append(t); });
    P.onGo = () => { const ans = picked.map(c=>c.textContent).join(' '); const ok = sentVariants(sent).some(v=>norm(v)===norm(ans)); say(plain(en));
      P.grade(ok, st, {correct: plain(en), tr: mode==='listen'?ru:'', why: sentWhy(sent), wrongNote: ok?'':`«${esc(ans)}»`, rule: mode==='listen'?'Слушай медленную версию (кнопка с тихим динамиком) и обращай внимание на окончания и маленькие слова.':''}); };
  }};
}
function stepDictation(sent, ls, idx){
  const [en, ru] = sent;
  return {ref:`t::${ls.id}::${idx}`, render(b,P,st){
    b.append(h(`<div class="kind">Диктант</div>`), h(`<div class="muted" style="margin-bottom:14px">Напиши то, что слышишь. Можно слушать сколько угодно раз.</div>`));
    const r=h(`<div class="say" style="margin-bottom:18px"><button class="speak big">${I.sound}</button><button class="speak">${I.slow}</button></div>`); r.children[0].onclick=()=>say(en); r.children[1].onclick=()=>say(en,.55); b.append(r); setTimeout(()=>say(en),300);
    const f=h(`<textarea class="field" autocapitalize="sentences" spellcheck="false" placeholder="Type in English"></textarea>`); b.append(f);
    f.oninput=()=>P.setBtn('Проверить', !!f.value.trim());
    P.onGo=()=>{ const res=check(f.value, sentVariants(sent)); P.grade(res>0, st, {correct: plain(en), tr: ru, okNote: res===1?'Засчитано с небольшой опечаткой. Сверь с эталоном: '+esc(plain(en)):'', wrongNote: res?'':diffHtml(f.value, plain(en))}); };
  }};
}
function diffHtml(a, b){ // highlight words of b missing in a
  const aw = norm(a).split(' '); return norm(b).split(' ').map(w=>aw.includes(w)?esc(w):`<u>${esc(w)}</u>`).join(' ') + '<div class="tiny">Подчёркнуты слова, которые ты пропустил или написал иначе</div>';
}
function stepTranslateType(sent, ls, idx){
  const [en, ru] = sent;
  return {ref:`t::${ls.id}::${idx}`, render(b,P,st){
    b.append(h(`<div class="kind">Переведи на английский</div>`), h(`<div class="prompt ru">${esc(ru)}</div>`));
    const f=h(`<textarea class="field" autocapitalize="sentences" spellcheck="false" placeholder="Type in English"></textarea>`); b.append(f);
    f.oninput=()=>P.setBtn('Проверить', !!f.value.trim());
    P.onGo=()=>{ const vars = sentVariants(sent); const res=check(f.value, vars); say(plain(en));
      P.grade(res>0, st, {correct: plain(en), why: sentWhy(sent), okNote: res===1?'Засчитано с небольшой ошибкой, эталон: '+esc(plain(en)):'', wrongNote: res?'':diffHtml(f.value, plain(en)), selfOk:true}); };
  }};
}
function stepSpeak(sent, ls, idx){
  const [en, ru] = sent;
  return {render(b,P,st){
    b.append(h(`<div class="kind">Произнеси вслух</div>`));
    const r=h(`<div class="say" style="margin-bottom:8px"><button class="speak">${I.sound}</button><div class="prompt" style="margin:0">${esc(plain(en))}</div></div>`); r.firstChild.onclick=()=>say(en); b.append(r);
    b.append(h(`<div class="muted" style="margin-bottom:28px">${esc(ru)}</div>`));
    const mic=h(`<div class="center"><button class="speak big">${I.mic}</button><div class="tiny mt micst">Нажми и скажи фразу</div><button class="btn ghost mt skipmic" style="height:40px;font-size:14px">Не могу говорить сейчас</button></div>`); b.append(mic);
    $('.skipmic',mic).onclick=()=>{ st.graded=false; P.next(); };
    const ms = $('.micst',mic);
    mic.firstChild.onclick=()=>{
      if (!SR){ ms.textContent='Распознавание речи недоступно. Повтори фразу вслух и жми «Дальше».'; st.graded=false; P.setBtn('Дальше'); return; }
      ms.textContent='Слушаю…'; mic.firstChild.classList.add('pop'); let done=false;
      listen(alts=>{ done=true;
        let best=0, heard=alts[0]; alts.forEach(a=>{ const s=similarity(a, plain(en)); if(s>best){best=s;heard=a;} });
        const ok = best>=0.75;
        P.grade(ok, st, {correct: plain(en), okNote:`Распознано: «${esc(heard)}» · ${Math.round(best*100)}%`, wrongNote:`распознано «${esc(heard)}» · совпадение ${Math.round(best*100)}%`, rule:'Послушай образец ещё раз и произнеси чётче, особенно окончания. Если микрофон ошибается, нажми «Не могу говорить».'});
      }, err=>{ if (done||P.answered) return; ms.textContent = err==='end' ? 'Ничего не услышал. Нажми ещё раз.' : (err==='not-allowed'?'Нет доступа к микрофону. Разреши его в настройках Safari или пропусти.':'Не получилось ('+err+'). Попробуй ещё раз или пропусти.'); });
    };
  }};
}
function stepMatch(pairs){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Найди пары</div>`), h(`<div class="muted" style="margin-bottom:16px">Соедини слово и перевод</div>`));
    const g=h(`<div class="match"></div>`); b.append(g);
    const L=shuffle(pairs.map(p=>({t:p[0],k:p[0],en:1}))), R=shuffle(pairs.map(p=>({t:p[1],k:p[0]})));
    let sel=null, left=pairs.length;
    for (let i=0;i<pairs.length;i++) [L[i],R[i]].forEach(it=>{ const btn=h(`<button class="opt">${esc(it.t)}</button>`); btn._it=it;
      btn.onclick=()=>{ if (it.en) say(it.t);
        if (!sel || sel._it.en===it.en){ g.querySelectorAll('.sel').forEach(x=>x.classList.remove('sel')); sel=btn; btn.classList.add('sel'); return; }
        if (sel._it.k===it.k){ [sel,btn].forEach(x=>{x.classList.remove('sel');x.classList.add('right');setTimeout(()=>x.classList.add('gone'),250);}); sfx('ok'); srsGrade(it.k,2); sel=null; if(--left===0){ P.right++; P.total++; P.setBtn('Дальше'); P.answered=true; } }
        else { const s=sel; [s,btn].forEach(x=>x.classList.add('wrong','shake')); sfx('bad'); srsGrade(it.k,0); setTimeout(()=>[s,btn].forEach(x=>x.classList.remove('wrong','shake','sel')),400); sel=null; }
      }; g.append(btn); });
  }};
}
function stepQuiz(q, ls, idx){
  const [question, correct, ...rest] = q; const expl = rest.pop(); const wrong = rest.filter(Boolean);
  const qwhy = ls && ls.qwhy && ls.qwhy[idx];
  return stepChoice({kind:'Проверка правила', prompt:question, promptRu:true, options:[correct,...wrong], correct, why:expl||'', ref: ls?`q::${ls.id}::${idx}`:null,
    explainWrong: sel => { if (!qwhy) return `«${esc(sel)}» не подходит.`; const part = qwhy.split(/;\s*/).find(p=>p.trim().toLowerCase().startsWith(String(sel).toLowerCase())); return esc(part || qwhy); }});
}
function stepReading(text){
  return {graded:false, render(b,P){
    b.append(h(`<div class="kind">Чтение и аудирование</div>`), h(`<div class="muted" style="margin-bottom:14px">Послушай текст, нажимай на незнакомые слова для перевода. Полный перевод под кнопкой.</div>`));
    const ctr=h(`<div class="say" style="margin-bottom:16px;flex-wrap:wrap"><button class="speak">${I.sound}</button><button class="speak">${I.slow}</button><button class="btn ghost" style="height:44px;font-size:14px">Перевод</button><button class="btn ghost" style="height:44px;font-size:14px">${I.mic} Повтор</button></div>`);
    const sents = text.en.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) || [text.en];
    const rd=h(`<div class="reading">${sents.map((s,i)=>`<span class="s" data-i="${i}">${tappable(s)}</span>`).join('')}</div>`);
    const tr=h(`<div class="card mt hide muted" style="line-height:1.6">${esc(text.ru)}</div>`);
    let playing=false;
    const playAll=(rate)=>{ let i=0; playing=true; const step=()=>{ rd.querySelectorAll('.s').forEach(x=>x.classList.remove('on')); if(i>=sents.length||!playing){playing=false;return;} rd.children[i].classList.add('on'); rd.children[i].scrollIntoView({block:'center',behavior:'smooth'}); say(sents[i], rate, ()=>{i++;step();}); }; step(); };
    ctr.children[0].onclick=()=>playAll(); ctr.children[1].onclick=()=>playAll(.65);
    ctr.children[2].onclick=()=>tr.classList.toggle('hide');
    ctr.children[3].onclick=()=>{ playing=false; P.close(); runShadowing(sents.map(s=>[s.trim(),''])); };
    rd.querySelectorAll('.s').forEach(s=>s.addEventListener('dblclick',()=>{ playing=false; say(s.textContent); }));
    b.append(ctr, rd, tr); P.setBtn('Дальше');
  }};
}

/* ----- lesson assembly ----- */
function gapOptions(sent, ls){
  const all = gapAll(sent[0]).split('|'); const g = all[0]; const bad = new Set(all.map(norm));
  const own = (ls.sents||[]).map(s=>gapMain(s[0])).filter(x=>x && !bad.has(norm(x)));
  let pool = uniq(own);
  if (pool.length<3){ // only from seen lessons of the same level
    const lv = LESSON_BY_ID[ls.id]?.level; const seen = seenLessons().filter(x=>x.level===lv && x.lesson.sents);
    pool = uniq([...pool, ...seen.flatMap(x=>x.lesson.sents.map(s=>gapMain(s[0]))).filter(x=>x && !bad.has(norm(x)))]);
  }
  const sim = pool.sort((a,b)=>Math.abs(a.split(' ').length-g.split(' ').length)-Math.abs(b.split(' ').length-g.split(' ').length) || Math.abs(a.length-g.length)-Math.abs(b.length-g.length));
  return [g, ...pick(sim.slice(0,6),3)];
}
function wordOptions(w, field, ls){
  const idx = field==='ru'?1:0;
  let pool = (ls.words||[]).filter(x=>x[0]!==w[0]).map(x=>x[idx]);
  if (pool.length<3) pool = pool.concat(knownWordsPool(ls).filter(x=>x.en!==w[0]).map(x=>field==='ru'?x.ru:x.en));
  return [w[idx], ...pick(uniq(pool).filter(x=>x!==w[idx]),3)];
}
const wordExplain = (w) => sel => { const m = wordMeaning(sel); return m || `«${esc(sel)}» — другое слово`; };
function buildLessonSteps(ls){
  const steps=[];
  if (ls.theory) steps.push(stepTheory(ls));
  const words = ls.words||[];
  const sents=(ls.sents||[]).map((s,i)=>({s,i})).filter(o=>gapAll(o.s[0]));
  if (words.length) steps.push(stepWords(words));
  const vocab=[];
  words.slice(0,10).forEach((w,i)=>{
    const note = `${esc(w[0])}${w[2]?' /'+esc(w[2])+'/':''} — ${esc(w[1])}`;
    if (i%2===0) vocab.push(stepChoice({kind:'Выбери перевод', prompt:w[0], audio:w[0], options:wordOptions(w,'ru',ls), correct:w[1], word:w[0], okNote:note, explainWrong:wordExplain(w)}));
    else vocab.push(stepChoice({kind:'Как это по-английски?', prompt:w[1], promptRu:true, options:wordOptions(w,'en',ls), correct:w[0], word:w[0], okNote:note, explainWrong:wordExplain(w)}));
  });
  if (words.length>=4) vocab.push(stepMatch(pick(words,Math.min(5,words.length))));
  const distract = words.map(w=>w[0]).filter(w=>!w.includes(' '));
  const sentEx=[]; let speaks=0;
  const types=['gapChoice','build','gapType','listen','dict','speak','translate'];
  sents.slice(0,10).forEach(({s,i},k)=>{
    let t = types[k % types.length];
    const short = tokens(s[0]).length<=12;
    if (t==='speak' && (!S.settings.speech || speaks>=2)) t='gapType';
    if (t==='gapChoice') sentEx.push(stepGapChoice(s, ls, i));
    else if (t==='build' && short) sentEx.push(stepBuild(s,'ru2en',distract,ls,i));
    else if (t==='listen' && short) sentEx.push(stepBuild(s,'listen',distract,ls,i));
    else if (t==='dict') sentEx.push(stepDictation(s,ls,i));
    else if (t==='speak'){ speaks++; sentEx.push(stepSpeak(s,ls,i)); }
    else if (t==='translate') sentEx.push(stepTranslateType(s,ls,i));
    else sentEx.push(stepGapType(s,ls,i));
  });
  const listenW = words.slice(0,2).map(w=> stepChoice({kind:'Что ты слышишь?', prompt:'', audio:w[0], options:wordOptions(w,'en',ls), correct:w[0], word:w[0], okNote:`${esc(w[0])} — ${esc(w[1])}`, explainWrong:wordExplain(w)}));
  const half = Math.ceil(vocab.length/2);
  steps.push(...vocab.slice(0,half), ...shuffleLight([...sentEx, ...vocab.slice(half), ...listenW]));
  if (ls.text) steps.push(stepReading(ls.text));
  (ls.quiz||[]).forEach((q,i)=>steps.push(stepQuiz(q, ls, i)));
  return steps;
}
function shuffleLight(a){ const r=[...a]; for(let i=0;i<r.length-1;i+=2) if (Math.random()<.5) [r[i],r[i+1]]=[r[i+1],r[i]]; return r; }

function runLesson(x, after){
  const ls = x.lesson;
  Player({lesson:ls, steps:buildLessonSteps(ls), onFinish:(P)=>{
    const acc = P.total ? P.right/P.total : 1;
    const stars = acc>=.95?3:acc>=.8?2:1;
    const first = !isDone(ls.id);
    const xp = 10 + Math.round(acc*15) + (first?5:0);
    S.done[ls.id]=Date.now(); S.stars[ls.id]=Math.max(S.stars[ls.id]||0, stars);
    (ls.words||[]).forEach(w=>srsAdd(w[0])); addXP(xp);
    resultScreen({title: first?'Урок пройден':'Урок повторён', emoji: stars===3?'🏆':stars===2?'✨':'👍', xp, acc, time:Date.now()-P.t0, mistakes:P.mistakes,
      sub: P.mistakes.length?`Ошибки сохранены и вернутся в «Занятии дня».`:'Без ошибок, отлично.',
      next: after || (firstOpenIdx()<FLAT.length ? ()=>openItem(firstOpenIdx()) : null)});
  }});
}

function resultScreen({title, emoji, xp, acc, time, next, sub, failed, nextLabel}){
  render();
  const el=h(`<div class="player"><div class="p-body result"><div class="big">${emoji}</div><h1 class="mt">${esc(title)}</h1>${sub?`<p class="muted">${sub}</p>`:''}
    <div class="statgrid"><div class="stat"><b>+${xp}</b><span>XP</span></div><div class="stat"><b>${Math.round(acc*100)}%</b><span>точность</span></div><div class="stat"><b>${Math.max(1,Math.round(time/60000))} мин</b><span>время</span></div></div></div>
    <div class="p-foot"><button class="btn block acc nx">${nextLabel || (next?(failed?'Попробовать ещё':'Дальше'):'Готово')}</button><button class="btn block ghost mt bk">На карту</button></div></div>`);
  document.body.append(el); if(!failed){ sfx('win'); confetti(el); }
  $('.nx',el).onclick=()=>{ el.remove(); next?next():render(); };
  $('.bk',el).onclick=()=>{ el.remove(); render(); };
}
function confetti(root){
  const c=document.createElement('canvas'); c.className='confetti'; root.append(c); const x=c.getContext('2d');
  const W=c.width=innerWidth*devicePixelRatio, H=c.height=innerHeight*devicePixelRatio;
  const cols=['#4f46e5','#8b7cf8','#14a06b','#f59e0b','#ec4899'];
  const ps=[...Array(90)].map(()=>({x:W/2,y:H*.35,vx:(Math.random()-.5)*W*.02,vy:-Math.random()*H*.02-H*.006,r:Math.random()*6+4,c:rnd(cols),a:Math.random()*6}));
  let t=0; (function f(){ x.clearRect(0,0,W,H); ps.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=H*.0006; p.a+=.1; x.save(); x.translate(p.x,p.y); x.rotate(p.a); x.fillStyle=p.c; x.fillRect(-p.r,-p.r/2,p.r*2,p.r); x.restore(); }); if(++t<110) requestAnimationFrame(f); else c.remove(); })();
}

/* ----- daily session ----- */
function runDaily(){
  const steps=[];
  const due = srsDue().slice(0,12);
  due.forEach(k=>{ const w=WORDS[k]; const pool=knownWordsPool().filter(x=>x.en!==k);
    const toRu = Math.random()<.5;
    steps.push(stepChoice({kind: toRu?'Повтори слово':'Вспомни по-английски', prompt: toRu?w.en:w.ru, promptRu:!toRu, audio: toRu?w.en:null, word:k,
      options:[toRu?w.ru:w.en, ...pick(uniq(pool.map(x=>toRu?x.ru:x.en)).filter(o=>o!==(toRu?w.ru:w.en)),3)], correct: toRu?w.ru:w.en,
      okNote:`${esc(w.en)} — ${esc(w.ru)}`, explainWrong: s=>wordMeaning(s)}));
  });
  steps.push(...mistakeSteps(6));
  const fi=firstOpenIdx(); const nextL = fi<FLAT.length ? FLAT[fi] : null;
  if (!steps.length){ if (nextL) return openItem(nextL.idx); toast('Всё повторено! Загляни в «Практику».'); return; }
  Player({steps:shuffleLight(steps), onFinish:(P)=>{
    const xp = Math.max(5, P.right*2); addXP(xp);
    resultScreen({title:'Разминка готова', emoji:'💪', xp, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0,
      sub: nextL ? `Дальше по плану: «${esc(nextL.lesson.title)}»` : 'Курс пройден, остаётся поддерживать форму.',
      next: nextL ? ()=>openItem(nextL.idx) : null, nextLabel: nextL ? 'К уроку' : null});
  }});
}

/* ----- exams & placement ----- */
function examPool(level){
  const items=[];
  FLAT.filter(x=>x.level===level && !x.exam).forEach(x=>{
    (x.lesson.quiz||[]).forEach((q,i)=>items.push(stepQuiz(q, x.lesson, i)));
    (x.lesson.sents||[]).forEach((s,i)=>{ if(gapAll(s[0])) items.push(Math.random()<.6?stepGapChoice(s,x.lesson,i):stepGapType(s,x.lesson,i)); });
  });
  return items;
}
function runExam(level, extern=false){
  const L=LEVELS.find(l=>l.id===level);
  const pool = examPool(level); if (!pool.length) return;
  const qs = pick(pool, Math.min(25, pool.length)).map(s=>({...s, isRetry:true}));
  Player({steps:qs, hearts:5, onFinish:(P, failed)=>{
    const acc = P.total? P.right/P.total : 0; const pass = !failed && acc>=.8;
    if (pass){
      S.done['exam-'+level]=Date.now();
      if (extern){ const last = FLAT.findIndex(x=>x.lesson.id==='exam-'+level); for (let i=0;i<=last;i++) if(!S.done[FLAT[i].lesson.id]) S.done[FLAT[i].lesson.id]=Date.now(); }
      addXP(50);
    } else addXP(10);
    save();
    resultScreen({title: pass?`Уровень ${L.name} сдан`:'Пока не сдано', emoji: pass?'🎓':'📈', xp: pass?50:10, acc, time:Date.now()-P.t0, failed:!pass,
      sub: pass?'Следующий уровень открыт.':(failed?'Закончились жизни. ':'')+'Нужно 80% и не больше 5 ошибок. Ошибки сохранены для разбора.', next: pass? (firstOpenIdx()<FLAT.length?()=>openItem(firstOpenIdx()):null) : ()=>runExam(level, extern)});
  }});
}
function placementIntro(){
  const el=h(`<div class="player"><div class="p-body"><div class="kind mt2">Тест уровня</div><h1>Как это работает</h1>
    <div class="theory"><p>Тест идёт по уровням снизу вверх: A1, A2, B1 и дальше. На каждом уровне 12 заданий трёх типов:</p>
    <ul><li><b>Слова:</b> знаешь ли ты лексику уровня</li><li><b>Грамматика:</b> правила и формы</li><li><b>Аудирование:</b> понимаешь ли фразы на слух</li></ul>
    <p>Уровень засчитывается, только если ты уверенно набрал <b>85% и больше</b>. Тогда его уроки отмечаются пройденными, а его слова попадают в повторение, чтобы закрыть пробелы.</p>
    <div class="tip">Не угадывай. Если не знаешь, жми «Не знаю», так тест точнее поймёт твой уровень.</div></div></div>
    <div class="p-foot"><button class="btn block acc">Начать</button><button class="btn block ghost mt">Отмена</button></div></div>`);
  document.body.append(el); const bs=el.querySelectorAll('.p-foot .btn');
  bs[0].onclick=()=>{ el.remove(); placementTest(); }; bs[1].onclick=()=>el.remove();
}
function placementTest(){
  const order = LEVELS.map(l=>l.id).filter(id=>id!=='start' && COURSE[id].length);
  const results={}; let li=0;
  const IDK='Не знаю';
  const batch = (lv) => {
    const lessons = FLAT.filter(x=>x.level===lv && !x.exam);
    const words = lessons.flatMap(x=>(x.lesson.words||[]).map(w=>({w,ls:x.lesson})));
    const quiz = lessons.flatMap(x=>(x.lesson.quiz||[]).map((q,i)=>({q,ls:x.lesson,i})));
    const sents = lessons.flatMap(x=>(x.lesson.sents||[]).map(s=>({s,ls:x.lesson}))).filter(o=>tokens(o.s[0]).length<=12);
    const out=[];
    pick(words,4).forEach(({w})=>{ const others = pick(words.filter(o=>o.w[1]!==w[1]).map(o=>o.w[1]),3);
      out.push(stepChoice({kind:'Слова · '+LEVELS.find(l=>l.id===lv).name, prompt:w[0], audio:w[0], autoplay:false, options:[w[1],...others,IDK], correct:w[1], okNote:`${esc(w[0])} — ${esc(w[1])}`})); });
    pick(quiz,5).forEach(({q,ls,i})=>{ const s=stepQuiz(q,ls,i); const r=s.render; s.ref=null; s.render=(b,P,st)=>{ r(b,P,st); const box=b.querySelector('.opts'); const idk=h(`<button class="opt idk">${IDK}</button>`); idk.onclick=()=>{ if(P.answered) return; P.grade(false, st, {correct:q[1], why:q[q.length-1]}); }; box.append(idk); }; out.push(s); });
    pick(sents,3).forEach(({s})=>{ const others=pick(sents.filter(o=>o.s[1]!==s[1]).map(o=>o.s[1]),3);
      out.push(stepChoice({kind:'Аудирование · '+LEVELS.find(l=>l.id===lv).name, prompt:'Что прозвучало?', promptRu:true, audio:plain(s[0]), options:[s[1],...others,IDK], correct:s[1], okNote:esc(plain(s[0]))})); });
    return shuffle(out).map(s=>{ s.lv=lv; s.isRetry=true; return s; });
  };
  const P = Player({steps:batch(order[0]), onFinish:(P)=>{
    let reached=null;
    for (const lv of order){ const r=results[lv]; if (!r) break; if (r.ok/r.n >= .85) reached=lv; else break; }
    S.placed=true;
    let added=0;
    if (reached){
      const last = FLAT.findIndex(x=>x.lesson.id==='exam-'+reached);
      for(let i=0;i<=last;i++) if(!S.done[FLAT[i].lesson.id]) S.done[FLAT[i].lesson.id]=Date.now();
      // words of passed levels into SRS, spread over 3 weeks so they don't flood review
      const skipped = FLAT.slice(0,last+1).filter(x=>!x.exam && x.level!=='start').flatMap(x=>(x.lesson.words||[]).map(w=>w[0])).filter(w=>!S.srs[w]);
      skipped.forEach((w,i)=>{ srsAdd(w, Date.now() + Math.floor(i/25)*864e5); added++; });
    }
    save();
    const L = reached ? LEVELS.find(l=>l.id===reached) : null;
    const nextLv = reached ? LEVELS[LEVELS.findIndex(l=>l.id===reached)+1] : LEVELS.find(l=>l.id==='a1');
    const detail = order.filter(lv=>results[lv]).map(lv=>`${LEVELS.find(l=>l.id===lv).name}: ${Math.round(results[lv].ok/results[lv].n*100)}%`).join(' · ');
    resultScreen({title: L ? 'Уверенно: '+L.name : 'Начнём с A1', emoji:'🧭', xp:0, acc:P.total?P.right/P.total:0, time:Date.now()-P.t0,
      sub: `${detail}.<br>${reached?`Стартуем с ${nextLv?nextLv.name:'финала'}. ${added} слов пройденных уровней добавлены в повторение порциями по 25 в день, чтобы закрыть пробелы.`:'Уровень A1 будем проходить полностью. Если какие-то уроки покажутся лёгкими, их можно пройти быстро.'}`,
      next: firstOpenIdx()<FLAT.length?()=>openItem(firstOpenIdx()):null, nextLabel:'Начать учиться'});
  }});
  const origGrade = P.grade;
  P.grade = (ok, st, ex) => { origGrade(ok, st, ex); if(!st.lv) return; const r = results[st.lv] || (results[st.lv]={ok:0,n:0}); r.n++; if(ok) r.ok++;
    const total = P.steps.filter(s=>s.lv===st.lv).length;
    if (r.n - r.ok > total*.15 + .01 && r.n < total){ P.steps = P.steps.slice(0, P.i+1); return; } // level failed → stop
    if (r.n===total && r.ok/r.n >= .85 && li < order.length-1){ li++; P.steps.push(...batch(order[li])); }
  };
}

/* ================= REVIEW ================= */
function viewReview(app){
  const due = srsDue(); const total=learnedWords();
  app.append(h(`<h1>Повторение</h1>`), h(`<p class="muted">Интервальное повторение: слово возвращается как раз тогда, когда ты начинаешь его забывать.</p>`));
  app.append(h(`<div class="statgrid"><div class="stat"><b>${due.length}</b><span>к повтору</span></div><div class="stat"><b>${total}</b><span>в словаре</span></div><div class="stat"><b>${Object.values(S.srs).filter(c=>c.r>=4).length}</b><span>выучено</span></div></div>`));
  const b1=h(`<button class="btn block acc" ${due.length?'':'disabled'}>Карточки · ${Math.min(due.length,20)} слов</button>`); b1.onclick=()=>reviewCards(due.slice(0,20));
  const b2=h(`<button class="btn block soft mt" ${total>=4?'':'disabled'}>Тренировка на письмо</button>`); b2.onclick=reviewTyping;
  const mc = Object.keys(S.mist).length;
  const b3=h(`<button class="btn block soft mt" ${mc?'':'disabled'}>Работа над ошибками · ${mc}</button>`); b3.onclick=()=>{ const st=mistakeSteps(12); Player({steps:st, onFinish:(P)=>{ addXP(P.right*2); resultScreen({title:'Ошибки разобраны', emoji:'🎯', xp:P.right*2, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0}); }}); };
  app.append(b1,b2,b3);
  const weak = weakTopics();
  if (weak.length){ app.append(h(`<h2>Слабые темы</h2>`)); const c=h(`<div class="card" style="padding:4px 16px"></div>`);
    weak.forEach(({x,n})=>{ const r=h(`<div class="row"><div><b>${esc(x.lesson.title)}</b><div class="small muted">${LEVELS.find(l=>l.id===x.level).name} · ошибок: ${n}</div></div><button class="btn soft" style="height:38px;font-size:14px">Повторить</button></div>`); r.querySelector('.btn').onclick=()=>runLesson(x, ()=>render()); c.append(r); });
    app.append(c); }
  if (!total) app.append(h(`<p class="muted center mt2">Слова появятся здесь после первого урока.</p>`));
  if (total){
    app.append(h(`<h2>Словарь</h2>`));
    const f=h(`<input class="field" placeholder="Поиск: английский или русский" style="margin-bottom:8px">`); app.append(f);
    const list=h(`<div class="card list-words" style="padding:4px 16px"></div>`); app.append(list);
    const draw=()=>{ const q=f.value.toLowerCase(); list.innerHTML='';
      Object.keys(S.srs).filter(k=>WORDS[k]).filter(k=>!q||k.toLowerCase().includes(q)||WORDS[k].ru.toLowerCase().includes(q)).slice(0,150).forEach(k=>{
        const w=WORDS[k], st=wordStrength(k);
        const r=h(`<div class="row"><div><b>${esc(w.en)}</b>${w.ipa?` <span class="tiny">/${esc(w.ipa)}/</span>`:''}<div class="small muted">${esc(w.ru)}</div></div><div style="display:flex;align-items:center;gap:10px"><span class="tiny">${'●'.repeat(st)}${'○'.repeat(4-st)}</span><button class="speak" style="width:36px;height:36px">${I.sound}</button></div></div>`);
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
    b.append(h(`<div class="kind">Напиши по-английски</div>`), h(`<div class="prompt ru">${esc(w.ru)}</div>`), h(`<div class="tiny" style="margin:-8px 0 12px">Начинается на «${esc(w.en[0])}», ${w.en.length} симв.</div>`));
    const f=h(`<input class="field" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="English">`); b.append(f); setTimeout(()=>f.focus(),300);
    f.oninput=()=>P.setBtn('Проверить',!!f.value.trim()); f.onkeydown=e=>{ if(e.key==='Enter'&&f.value.trim()) $('.go',P.el).click(); };
    P.onGo=()=>{ const r=check(f.value,w.en); say(w.en); P.grade(r>0, st, {correct:w.en, okNote: r===1?'Опечатка, правильно: '+esc(w.en):`${esc(w.en)}${w.ipa?' /'+esc(w.ipa)+'/':''}`, wrongNote: r?'':`«${esc(f.value.trim())}»${wordMeaning(f.value.trim())?' — '+wordMeaning(f.value.trim()):''}`}); };
  }}; });
  Player({steps, onFinish:(P)=>{ const xp=P.right*2; addXP(xp); resultScreen({title:'Тренировка завершена', emoji:'✍️', xp, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0}); }});
}

/* ================= PRACTICE: dialogs, sounds, games ================= */
function gameWords(n){
  let pool = Object.keys(S.srs).filter(k=>WORDS[k]).map(k=>WORDS[k]);
  if (pool.length < 12) pool = uniq([...pool, ...knownWordsPool()]);
  return pick(pool, Math.min(n, pool.length));
}
const GAMES = [
  {id:'blitz', name:'Молния', d:'60 секунд: выбирай перевод быстро', c:'linear-gradient(135deg,#f59e0b,#ef4444)', ic:I.bolt, run:gameBlitz},
  {id:'pairs', name:'Пары', d:'Соедини 18 пар на время', c:'linear-gradient(135deg,#10b981,#0ea5e9)', ic:I.cards, run:gamePairs},
  {id:'sniper', name:'Аудио-снайпер', d:'Услышь слово и напиши его', c:'linear-gradient(135deg,#6366f1,#a855f7)', ic:I.sound, run:gameSniper},
  {id:'anagram', name:'Анаграмма', d:'Собери слово из букв', c:'linear-gradient(135deg,#ec4899,#f43f5e)', ic:sv('<path d="M4 7h4M6 5v4M14 17h6M4 17l3-6 3 6M5 15h4M15 5h4l-4 5h4"/>'), run:gameAnagram},
  {id:'builder', name:'Конструктор', d:'Собирай предложения на скорость', c:'linear-gradient(135deg,#0ea5e9,#22d3ee)', ic:I.path, run:gameBuilder},
  {id:'truefalse', name:'Верно / Неверно', d:'Совпадает ли перевод?', c:'linear-gradient(135deg,#84cc16,#16a34a)', ic:sv('<path d="M4 12l4 4 8-9"/><path d="M15 15l5 5M20 15l-5 5"/>'), run:gameTF},
];
function viewPractice(app){
  app.append(h(`<h1>Практика</h1>`), h(`<p class="muted">Разговор, произношение и игры. Всё строится на том, что ты уже прошёл.</p>`));
  // speaking & sounds
  const tools = h(`<div class="games"></div>`);
  [[I.chat,'Диалоги','Ролевые ситуации: отвечай вслух или выбирай реплику','linear-gradient(135deg,#4f46e5,#8b7cf8)', ()=>openDialogs()],
   [I.ear,'Минимальные пары','ship или sheep? Тренируй слух на похожие звуки','linear-gradient(135deg,#0f766e,#14b8a6)', runMinimalPairs],
   [I.repeat,'Shadowing','Повторяй за диктором, оценка похожести','linear-gradient(135deg,#be185d,#f472b6)', ()=>{ const s=shadowPool(); if(!s.length) return toast('Пройди хотя бы один урок'); runShadowing(s); }]
  ].forEach(([ic,n,d,c,fn])=>{ const b=h(`<button class="game"><div class="gi" style="background:${c}">${ic}</div><div><b>${n}</b><span>${d}</span></div></button>`); b.onclick=fn; tools.append(b); });
  app.append(tools, h(`<h2>Игры</h2>`));
  const known = gameWords(999).length;
  if (known<8) app.append(h(`<p class="muted small">Игры используют только изученные слова. Сейчас их ${known}, пройди пару уроков, и станет интереснее.</p>`));
  const g=h(`<div class="games"></div>`);
  GAMES.forEach(G=>{ const b=h(`<button class="game"><div class="gi" style="background:${G.c}">${G.ic}</div><div><b>${G.name}</b><span>${G.d}</span>${S.stats.best[G.id]?`<div class="tiny mt">Рекорд: ${S.stats.best[G.id]}</div>`:''}</div></button>`); b.onclick=()=>{ if(gameWords(999).length<4) return toast('Сначала пройди первый урок'); G.run(); }; g.append(b); });
  app.append(g);
}
/* dialogs */
function openDialogs(){
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><b style="flex:1">Диалоги</b></div><div class="p-body"></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  $('.q',el).onclick=()=>{ el.remove(); document.body.style.overflow=''; render(); };
  const body=$('.p-body',el); const cl=currentLevel(); const ci=LEVELS.findIndex(l=>l.id===cl);
  if (!DIALOGS.length) body.append(h(`<p class="muted">Диалоги не загрузились.</p>`));
  LEVELS.forEach((L,li)=>{ const ds=DIALOGS.filter(d=>d.level===L.id); if(!ds.length) return;
    body.append(h(`<div class="unit-title">${L.name} · ${L.title}${li>ci+1?' · пока сложно':''}</div>`));
    ds.forEach(d=>{ const r=S.dlg[d.id]; const b=h(`<button class="lesson ${r?'done':''}"><div class="n">${r?'✓':'💬'}</div><div class="t"><b>${esc(d.title)}</b><span>${esc(d.sub||'')}</span></div>${r?`<div class="stars">${'★'.repeat(r)}${'☆'.repeat(3-r)}</div>`:''}</button>`); b.onclick=()=>{ el.remove(); document.body.style.overflow=''; runDialog(d); }; body.append(b); }); });
}
function runDialog(d){
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><div style="flex:1"><b>${esc(d.title)}</b><div class="tiny">${esc(d.partner||'')} · ${esc(d.sub||'')}</div></div></div><div class="p-body chat"></div><div class="p-foot"></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  const body=$('.p-body',el), foot=$('.p-foot',el); let i=0, errors=0, turns=0;
  const close=()=>{ 'speechSynthesis' in window && speechSynthesis.cancel(); el.remove(); document.body.style.overflow=''; };
  $('.q',el).onclick=()=>{ close(); render(); };
  const bubble=(who, en, ru)=>{ const b=h(`<div class="bub ${who}"><div>${who==='npc'?tappable(en):esc(en)}</div>${ru?`<i class="hide">${esc(ru)}</i>`:''}</div>`); b.onclick=()=>{ const t=b.querySelector('i'); t&&t.classList.toggle('hide'); say(en); }; body.append(b); bindTap(b); b.scrollIntoView({behavior:'smooth',block:'end'}); return b; };
  const step=()=>{
    foot.innerHTML='';
    if (i>=d.steps.length){ const score = errors===0?3:errors<=2?2:1; S.dlg[d.id]=Math.max(S.dlg[d.id]||0,score); const xp=10+turns*3-errors; addXP(Math.max(5,xp));
      const done=h(`<div><div class="center muted mt">Диалог завершён · ошибок: ${errors}</div><button class="btn block acc mt">Готово</button><button class="btn block ghost mt">Пройти ещё раз</button></div>`);
      done.children[1].onclick=()=>{ close(); render(); }; done.children[2].onclick=()=>{ close(); runDialog(d); }; foot.append(done); sfx('win'); return; }
    const s=d.steps[i];
    if (s.npc){ bubble('npc', s.npc, s.ru); say(s.npc, null, ()=>{}); i++; setTimeout(step, Math.min(2600, 700+s.npc.length*35)); return; }
    turns++;
    foot.append(h(`<div class="tiny" style="margin-bottom:8px">Твой ответ: выбери реплику или скажи её вслух. Нажми на реплику собеседника, чтобы увидеть перевод.</div>`));
    const box=h(`<div class="opts"></div>`); foot.append(box);
    let tried=false;
    const choose=(o, btn)=>{
      if (o.ok){ btn && btn.classList.add('right'); sfx('ok'); bubble('me', o.en, o.ru); say(o.en);
        const fb=h(`<div class="fbline ok">${esc(o.fb||'Хорошо')}</div>`); body.append(fb); i++; setTimeout(step, 900); }
      else { btn && btn.classList.add('wrong'); sfx('bad'); if(!tried){ errors++; tried=true; }
        const old=foot.querySelector('.fbline'); old&&old.remove(); foot.insertBefore(h(`<div class="fbline bad">${esc(o.fb||'Не подходит')}</div>`), box); }
    };
    shuffle(s.me).forEach(o=>{ const b=h(`<button class="opt">${esc(o.en)}<span class="tiny" style="display:block">${esc(o.ru||'')}</span></button>`); b.onclick=()=>choose(o,b); box.append(b); });
    if (SR && S.settings.speech){ const mic=h(`<button class="btn soft block mt">${I.mic} Сказать вслух</button>`); foot.append(mic);
      mic.onclick=()=>{ mic.textContent='Слушаю…'; listen(alts=>{ let best=null,bs=0; s.me.forEach(o=>alts.forEach(a=>{ const v=similarity(a,o.en); if(v>bs){bs=v;best=o;} }));
        mic.innerHTML=`${I.mic} Сказать вслух`; if (best && bs>=.6) choose(best, [...box.children].find(b=>b.firstChild.textContent===best.en)); else toast('Не разобрал. Попробуй ещё раз или выбери реплику.'); }, e=>{ mic.innerHTML=`${I.mic} Сказать вслух`; }); }; }
  };
  step();
}
/* minimal pairs */
const MINPAIRS = [
  ['ship','sheep','короткий [ɪ] / долгий [iː]'],['sit','seat','[ɪ] / [iː]'],['live','leave','[ɪ] / [iː]'],['fill','feel','[ɪ] / [iː]'],['bit','beat','[ɪ] / [iː]'],
  ['bad','bed','[æ] / [e]'],['man','men','[æ] / [e]'],['sad','said','[æ] / [e]'],['bag','beg','[æ] / [e]'],['pan','pen','[æ] / [e]'],
  ['cup','cop','[ʌ] / [ɑ]'],['luck','lock','[ʌ] / [ɑ]'],['hut','hot','[ʌ] / [ɑ]'],['full','fool','[ʊ] / [uː]'],['pull','pool','[ʊ] / [uː]'],
  ['think','sink','[θ] / [s]'],['thick','sick','[θ] / [s]'],['three','tree','[θ] / [t]'],['thank','tank','[θ] / [t]'],['they','day','[ð] / [d]'],
  ['west','vest','[w] / [v]'],['wine','vine','[w] / [v]'],['wet','vet','[w] / [v]'],['light','right','[l] / [r]'],['lead','read','[l] / [r]'],
  ['bat','bad','глухой / звонкий конец'],['cap','cab','[p] / [b]'],['back','bag','[k] / [g]'],['rice','rise','[s] / [z]'],['leaf','leave','[f] / [v]'],
  ['hat','at','[h] / без [h]'],['heart','art','[h] / без [h]'],['sing','sin','[ŋ] / [n]'],['thing','thin','[ŋ] / [n]'],['walk','work','[ɔ] / [ɜr]'],
  ['bird','bud','[ɜr] / [ʌ]'],['coat','caught','[oʊ] / [ɔ]'],['boat','bought','[oʊ] / [ɔ]'],['shoes','choose','[ʃ] / [tʃ]'],['wash','watch','[ʃ] / [tʃ]']
];
function runMinimalPairs(){
  const items = pick(MINPAIRS, 15);
  const steps = items.map(([a,b,hint])=>{ const t = Math.random()<.5?a:b; const w=lookupWord(t);
    return stepChoice({kind:'Какое слово прозвучало?', prompt:'', audio:t, options:[a,b], correct:t, okNote:`${esc(t)}${w?' — '+esc(w.ru):''} · ${esc(hint)}`, why:`Различие: ${hint}. Нажми на динамик ещё раз и сравни.`, explainWrong: s=>`ты выбрал «${esc(s)}», а звучало «${esc(t)}»`}); });
  Player({steps, onFinish:(P)=>{ const xp=P.right; addXP(xp); resultScreen({title:'Минимальные пары', emoji:'👂', xp, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0, sub:'Чем чаще тренируешь, тем лучше слышишь разницу в живой речи.'}); }});
}
/* shadowing */
function shadowPool(){ return shuffle(seenLessons().flatMap(x=>(x.lesson.sents||[]).map(s=>[plain(s[0]), s[1]]))).slice(0,10); }
function runShadowing(sents){
  const steps = sents.slice(0,10).map(([en, ru])=>({graded:true, render(b,P,st){
    b.append(h(`<div class="kind">Shadowing · ${P.i+1}/${Math.min(10,sents.length)}</div>`), h(`<div class="muted small" style="margin-bottom:14px">Послушай и сразу повтори с той же интонацией и скоростью.</div>`));
    b.append(h(`<div class="prompt">${tappable(en)}</div>`)); if (ru) b.append(h(`<div class="muted" style="margin:-10px 0 18px">${esc(ru)}</div>`));
    const r=h(`<div class="say" style="margin-bottom:24px"><button class="speak big">${I.sound}</button><button class="speak">${I.slow}</button></div>`); r.children[0].onclick=()=>say(en); r.children[1].onclick=()=>say(en,.6); b.append(r); setTimeout(()=>say(en),300);
    const mic=h(`<div class="center"><button class="speak big">${I.mic}</button><div class="tiny mt">Нажми и повтори</div></div>`); b.append(mic);
    if (!SR){ mic.lastChild.textContent='Распознавание недоступно. Повтори вслух и оцени себя сам.'; st.graded=false; P.setBtn('Дальше'); return; }
    P.setBtn('Пропустить'); P.onGo=()=>{ st.graded=false; P.next(); };
    mic.firstChild.onclick=()=>{ mic.lastChild.textContent='Слушаю…'; listen(alts=>{ const best=Math.max(...alts.map(a=>similarity(a,en))); const heard=alts.sort((a,b)=>similarity(b,en)-similarity(a,en))[0];
      P.onGo=null; P.grade(best>=.8, st, {correct:en, okNote:`Похожесть ${Math.round(best*100)}%: «${esc(heard)}»`, wrongNote:`распознано «${esc(heard)}», похожесть ${Math.round(best*100)}%`, rule:'Включи медленную версию, повтори по кусочкам, потом целиком.'}); },
      e=>{ if(!P.answered) mic.lastChild.textContent='Не услышал, попробуй ещё раз'; }); };
  }}));
  Player({steps, onFinish:(P)=>{ const xp=5+P.right*2; addXP(xp); resultScreen({title:'Shadowing', emoji:'🎙️', xp, acc:P.total?P.right/P.total:1, time:Date.now()-P.t0}); }});
}
/* games */
function GameShell(seconds){
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
   <div class="p-foot"><button class="btn block acc a">Ещё раз</button><button class="btn block ghost mt b">К практике</button></div></div>`);
  document.body.append(el); sfx('win'); if (rec) confetti(el);
  $('.a',el).onclick=()=>{ el.remove(); GAMES.find(g=>g.id===id).run(); }; $('.b',el).onclick=()=>{ el.remove(); };
}
function gameBlitz(){
  const G=GameShell(60); const pool=gameWords(80); let i=0;
  const next=()=>{ const w=pool[i++ % pool.length]; G.body.innerHTML='';
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt" style="font-size:32px;margin:30px 0">${esc(w.en)}</div>`));
    const opts=[w.ru,...pick(uniq(pool.filter(x=>x.ru!==w.ru).map(x=>x.ru)),3)];
    const box=h(`<div class="opts"></div>`); shuffle(opts).forEach(o=>{ const b=h(`<button class="opt">${esc(o)}</button>`);
      b.onclick=()=>{ if(o===w.ru){ G.score++; sfx('ok'); b.classList.add('right'); srsGrade(w.en,2); setTimeout(next,180); } else { sfx('bad'); b.classList.add('wrong'); G.left=Math.max(1,G.left-3); box.querySelectorAll('.opt').forEach(x=>{ if(x.textContent===w.ru) x.classList.add('right'); }); srsGrade(w.en,0); setTimeout(next,700); } }; box.append(b); }); G.body.append(box); };
  next(); G.start(()=>G.end(()=>gameOver('blitz','Молния',G.score)));
}
function gamePairs(){
  const G=GameShell(90); const words=gameWords(18); let round=0, found=0; const rounds=Math.ceil(words.length/6);
  const draw=()=>{ G.body.innerHTML=''; const set=words.slice(round*6, round*6+6); if(!set.length) return G.end(()=>gameOver('pairs','Пары',found+G.left,'очков'));
    G.body.append(h(`<div class="kind">Раунд ${round+1}/${rounds} · найдено ${found}</div>`));
    const st=stepMatch(set.map(w=>[w.en,w.ru])); const fake={setBtn:()=>{}, answered:false, right:0,total:0};
    const g=h(`<div></div>`); G.body.append(g); st.render(g,fake);
    const iv=setInterval(()=>{ if(G.ended) return clearInterval(iv); found = round*6 + g.querySelectorAll('.opt.gone').length/2; if (g.querySelectorAll('.opt.gone').length===set.length*2){ clearInterval(iv); round++; setTimeout(draw,350); } },150);
  };
  draw(); G.start(()=>G.end(()=>gameOver('pairs','Пары',found,'пар')));
}
function gameSniper(){
  const G=GameShell(90); const pool=gameWords(40).filter(w=>w.en.length<18); let i=0;
  const next=()=>{ const w=pool[i++%pool.length]; G.body.innerHTML='';
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`));
    const r=h(`<div class="center" style="margin:30px 0"><button class="speak big">${I.sound}</button></div>`); r.firstChild.onclick=()=>say(w.en); G.body.append(r); say(w.en);
    const f=h(`<input class="field" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="Что прозвучало? Enter — проверить">`); G.body.append(f);
    const hint=h(`<div class="muted small mt center"></div>`); G.body.append(hint);
    const skip=h(`<button class="btn ghost block mt">Не знаю</button>`); skip.onclick=()=>{ hint.textContent=w.en+' — '+w.ru; srsGrade(w.en,0); setTimeout(next,1300); }; G.body.append(skip);
    setTimeout(()=>f.focus(),100);
    f.onkeydown=e=>{ if(e.key!=='Enter') return; const r=check(f.value,w.en); if(r===2){ G.score+=2; sfx('ok'); next(); } else if(r===1){ G.score+=1; sfx('ok'); hint.textContent='Почти: '+w.en; setTimeout(next,800);} else { sfx('bad'); f.classList.add('shake'); setTimeout(()=>f.classList.remove('shake'),400); } };
  };
  next(); G.start(()=>G.end(()=>gameOver('sniper','Аудио-снайпер',G.score)));
}
function gameAnagram(){
  const pool=gameWords(60).filter(w=>/^[a-z]{3,10}$/i.test(w.en)); if (pool.length<3) return toast('Пока мало подходящих слов, пройди ещё пару уроков');
  const G=GameShell(90); let i=0;
  const next=()=>{ const w=pool[i++%pool.length]; G.body.innerHTML='';
    let letters=shuffle(w.en.toLowerCase().split('')); if (letters.join('')===w.en.toLowerCase()) letters=letters.reverse();
    G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt ru" style="margin:20px 0">${esc(w.ru)}</div>`));
    const line=h(`<div class="answer-line" style="justify-content:center"></div>`), bank=h(`<div class="bank"></div>`); G.body.append(line,bank);
    let ans='';
    letters.forEach(ch=>{ const t=h(`<button class="tile" style="min-width:44px">${ch}</button>`); t.onclick=()=>{ t.classList.add('used'); ans+=ch; line.append(h(`<span class="tile">${ch}</span>`));
      if (ans.length===letters.length){ if(ans===w.en.toLowerCase()){ G.score++; sfx('ok'); say(w.en); setTimeout(next,450);} else { sfx('bad'); line.classList.add('shake'); setTimeout(()=>{ ans=''; line.innerHTML=''; line.classList.remove('shake'); bank.querySelectorAll('.tile').forEach(x=>x.classList.remove('used')); },400);} } }; bank.append(t); });
    const sk=h(`<button class="btn ghost block mt2">Показать ответ</button>`); sk.onclick=()=>{ sk.textContent=w.en; setTimeout(next,1000); }; G.body.append(sk);
  };
  next(); G.start(()=>G.end(()=>gameOver('anagram','Анаграмма',G.score)));
}
function gameBuilder(){
  let sents = shuffle(seenLessons().flatMap(x=>x.lesson.sents||[]).filter(s=>tokens(s[0]).length<=10));
  if (!sents.length) return toast('Пройди хотя бы один урок');
  const G=GameShell(120); let i=0;
  const next=()=>{ const s=sents[i++%sents.length]; G.body.innerHTML=''; G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`));
    const st=stepBuild(s,'ru2en'); const g=h(`<div></div>`); G.body.append(g);
    const go=h(`<button class="btn block acc mt2">Проверить</button>`); const sk=h(`<button class="btn block ghost mt">Пропустить</button>`);
    const fake={answered:false, setBtn:()=>{}, el:G.el}; st.render(g,fake,st); G.body.append(go, sk);
    sk.onclick=()=>{ toast(plain(s[0])); next(); };
    go.onclick=()=>{ const ans=[...g.querySelectorAll('.answer-line .tile')].map(t=>t.textContent).join(' ');
      if (sentVariants(s).some(v=>norm(v)===norm(ans))){ G.score++; sfx('ok'); say(plain(s[0])); next(); } else { sfx('bad'); go.classList.add('shake'); setTimeout(()=>go.classList.remove('shake'),400); } };
  };
  next(); G.start(()=>G.end(()=>gameOver('builder','Конструктор',G.score)));
}
function gameTF(){
  const G=GameShell(45); const pool=gameWords(80);
  const next=()=>{ const w=rnd(pool); const truth=Math.random()<.5; const others=pool.filter(x=>x.ru!==w.ru); const shown= truth||!others.length? w.ru : rnd(others).ru; const isTrue = shown===w.ru;
    G.body.innerHTML=''; G.body.append(h(`<div class="kind">Счёт: ${G.score}</div>`), h(`<div class="prompt center" style="font-size:30px;margin:40px 0 8px">${esc(w.en)}</div>`), h(`<div class="center muted" style="font-size:22px;margin-bottom:40px">${esc(shown)}</div>`));
    const box=h(`<div class="opts two"><button class="btn bad">Неверно</button><button class="btn ok">Верно</button></div>`); G.body.append(box);
    const ans=v=>{ if(v===isTrue){ G.score++; sfx('ok'); next(); } else { sfx('bad'); G.left=Math.max(1,G.left-3); toast(`${w.en} — ${w.ru}`); setTimeout(next,600); } };
    box.children[0].onclick=()=>ans(false); box.children[1].onclick=()=>ans(true);
  };
  next(); G.start(()=>G.end(()=>gameOver('truefalse','Верно / Неверно',G.score)));
}

/* ================= REFERENCE ================= */
function openReference(){
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><b style="flex:1">Справочник</b></div><div class="p-body"><input class="field" placeholder="Поиск: Past Perfect, артикли, much many…" style="margin-bottom:12px"><div class="list"></div></div></div>`);
  document.body.append(el); document.body.style.overflow='hidden';
  const close=()=>{ el.remove(); document.body.style.overflow=''; };
  $('.q',el).onclick=close;
  const f=$('.field',el), list=$('.list',el);
  const items = FLAT.filter(x=>!x.exam && x.lesson.theory).map(x=>({x, hay:(x.lesson.title+' '+(x.lesson.sub||'')+' '+x.lesson.theory.replace(/<[^>]+>/g,' ')).toLowerCase()}));
  const draw=()=>{ const q=f.value.trim().toLowerCase(); list.innerHTML=''; let lastLv=null, n=0;
    items.filter(o=>!q || o.hay.includes(q)).forEach(({x})=>{ if (n++>120) return; if(x.level!==lastLv){ lastLv=x.level; const L=LEVELS.find(l=>l.id===x.level); list.append(h(`<div class="unit-title">${L.name} · ${L.title}</div>`)); }
      const b=h(`<button class="lesson ${isDone(x.lesson.id)?'done':''}"><div class="t"><b>${esc(x.lesson.title)}</b><span>${esc(x.lesson.sub||'')}</span></div>${I.chev}</button>`);
      b.onclick=()=>showTheory(x.lesson); list.append(b); });
    if (!list.children.length) list.append(h(`<p class="muted">Ничего не найдено</p>`)); };
  f.oninput=draw; draw();
}
function showTheory(ls){
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><b style="flex:1"></b></div><div class="p-body"><h1>${esc(ls.title)}</h1><div class="muted" style="margin-bottom:14px">${esc(ls.sub||'')}</div><div class="theory">${ls.theory}</div></div></div>`);
  document.body.append(el); $('.q',el).onclick=()=>el.remove();
  el.querySelectorAll('.ex').forEach(e => e.onclick = () => say((e.querySelector('b')||e).textContent));
}

/* ================= ME ================= */
function forecast(){
  const now=Date.now(); const recent = Object.entries(S.done).filter(([k,t])=>!k.startsWith('exam') && now-t < 14*864e5).length;
  const perDay = recent/14; const remaining = FLAT.filter(x=>!isDone(x.lesson.id)).length;
  const byLevel = LEVELS.map(L=>{ const rest = FLAT.filter(x=>x.level===L.id && !isDone(x.lesson.id)).length; return {L, rest}; }).filter(o=>FLAT.some(x=>x.level===o.L.id));
  return {perDay, remaining, byLevel};
}
function viewMe(app){
  const lessons = Object.keys(S.done).filter(k=>!k.startsWith('exam')).length;
  const acc = S.stats.answers ? Math.round(S.stats.right/S.stats.answers*100) : 0;
  const lv = LEVELS.find(l=>l.id===currentLevel());
  app.append(h(`<h1>Прогресс</h1>`), h(`<p class="muted">Текущий уровень: <b>${lv.name} · ${lv.title}</b></p>`));
  app.append(h(`<div class="statgrid"><div class="stat"><b>${curStreak()}</b><span>дней подряд</span></div><div class="stat"><b>${lessons}</b><span>уроков</span></div><div class="stat"><b>${learnedWords()}</b><span>слов</span></div><div class="stat"><b>${S.xp}</b><span>XP всего</span></div><div class="stat"><b>${acc}%</b><span>точность</span></div><div class="stat"><b>${Math.round(S.stats.ms/60000)}</b><span>минут</span></div></div>`));
  // road to C2
  const fc = forecast();
  const road = h(`<div class="card"><b>Путь до C2</b><div class="small muted" style="margin:4px 0 10px">${fc.remaining} уроков осталось · темп ${fc.perDay?fc.perDay.toFixed(1)+' урока в день (за 2 недели)':'появится после первых уроков'}</div></div>`);
  let acc_ = 0;
  fc.byLevel.forEach(({L,rest})=>{ acc_ += rest; const {d,n}=levelProgress(L.id);
    const eta = rest===0 ? 'готово' : fc.perDay ? new Date(Date.now()+acc_/fc.perDay*864e5).toLocaleDateString('ru-RU',{day:'numeric',month:'short',year:'numeric'}) : '—';
    road.append(h(`<div style="margin-top:12px"><div style="display:flex;justify-content:space-between" class="small"><span><b>${L.name}</b> · ${L.title}</span><span class="muted">${rest===0?'✓':eta}</span></div><div class="bar" style="margin-top:6px"><b style="width:${n?d/n*100:0}%"></b></div></div>`)); });
  road.append(h(`<div class="tiny mt">Прогноз по текущему темпу. 2 урока в день плюс повторение доводят до C2 примерно за 6–7 месяцев учебника. Живую практику (сериалы, книги, разговоры) стоит добавлять с B1.</div>`));
  app.append(road);
  const days=[...Array(7)].map((_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); const k=dkey(d); return {k, v:S.days[k]||0, n:['вс','пн','вт','ср','чт','пт','сб'][d.getDay()]}; });
  const max=Math.max(S.settings.goal,...days.map(d=>d.v));
  app.append(h(`<div class="card mt"><b>XP за неделю</b><div class="chart">${days.map(d=>`<div><i style="height:${d.v/max*100}%"></i><span>${d.n}</span></div>`).join('')}</div></div>`));
  app.append(h(`<h2>Достижения</h2>`), h(`<div class="ach">${ACH.map(([id,e,t])=>`<div class="${S.ach[id]?'got':''}"><em>${e}</em>${t}</div>`).join('')}</div>`));
  // settings
  app.append(h(`<h2>Настройки</h2>`));
  const vs = enVoices();
  const st=h(`<div class="card" style="padding:4px 18px">
    <div class="row"><span>Тема</span><div class="seg" data-k="theme"><button data-v="auto">Авто</button><button data-v="light">Светлая</button><button data-v="dark">Тёмная</button></div></div>
    <div class="row"><span>Цель дня</span><div class="seg" data-k="goal"><button data-v="20">20</button><button data-v="40">40</button><button data-v="80">80</button></div></div>
    <div class="row"><span>Скорость речи</span><div class="seg" data-k="rate"><button data-v="0.75">0.75</button><button data-v="0.95">1.0</button><button data-v="1.1">1.15</button></div></div>
    <div class="row"><span>Упражнения на речь</span><div class="seg" data-k="speech"><button data-v="true">Вкл</button><button data-v="false">Выкл</button></div></div>
    <div class="row"><span>Звуки</span><div class="seg" data-k="sound"><button data-v="true">Вкл</button><button data-v="false">Выкл</button></div></div>
    <div class="row"><span>Голос</span><select class="sel" id="voice">${vs.length?vs.map(v=>`<option ${VOICE&&v.name===VOICE.name?'selected':''}>${esc(v.name)}</option>`).join(''):'<option>системный</option>'}</select></div>
  </div>`);
  if (!voiceIsGood()) st.append(h(`<div class="tip-card">Голос звучит роботизированно? На iPhone скачай качественный: <b>Настройки → Универсальный доступ → Устной контент → Голоса → English → Ava (Premium)</b>, потом перезапусти приложение и выбери его здесь.</div>`));
  st.querySelectorAll('.seg').forEach(sg=>{ const k=sg.dataset.k; sg.querySelectorAll('button').forEach(b=>{ const v = b.dataset.v==='true'?true:b.dataset.v==='false'?false:isNaN(+b.dataset.v)?b.dataset.v:+b.dataset.v;
    if (S.settings[k]===v) b.classList.add('on'); b.onclick=()=>{ S.settings[k]=v; save(); applyTheme(); if(k==='rate') say('This is how I sound.'); render(); }; }); });
  st.querySelector('#voice').onchange=e=>{ S.settings.voice=e.target.value; save(); pickVoice(); say('Hi! This is my voice.'); };
  app.append(st);
  const tools=h(`<div class="mt"><button class="btn ghost block" id="exp">Сохранить прогресс в файл</button><button class="btn ghost block mt" id="imp">Загрузить прогресс из файла</button>
    <button class="btn ghost block mt" id="reps" ${S.reports.length?'':'disabled'}>Жалобы на задания · ${S.reports.length}</button>
    <button class="btn ghost block mt" id="retest">Пройти тест уровня заново</button><button class="btn ghost block mt" id="rst" style="color:var(--bad)">Сбросить всё</button></div>`);
  app.append(tools, h(`<p class="tiny center mt2">Ascend · данные хранятся только на этом устройстве · работает офлайн${S.lastExport?' · последняя копия '+new Date(S.lastExport).toLocaleDateString('ru-RU'):''}</p>`));
  $('#exp').onclick=exportProgress;
  $('#imp').onclick=()=>{ const i=document.createElement('input'); i.type='file'; i.accept='.json,application/json'; i.onchange=()=>{ const r=new FileReader(); r.onload=()=>{ try{ S=deepMerge(structuredClone(DEF),JSON.parse(r.result)); save(); toast('Прогресс загружен'); render(); }catch(e){ toast('Не удалось прочитать файл'); } }; r.readAsText(i.files[0]); }; i.click(); };
  $('#reps').onclick=showReports;
  $('#retest').onclick=()=>{ if(confirm('Пройти тест заново? Уже пройденные уроки останутся пройденными.')) placementIntro(); };
  $('#rst').onclick=()=>{ if(confirm('Удалить весь прогресс без возможности восстановления?')){ localStorage.removeItem(KEY); S=load(); render(); } };
}
function exportProgress(){
  const data = JSON.stringify(S); const name='ascend-progress-'+today()+'.json';
  const file = new File([data], name, {type:'application/json'});
  const done=()=>{ S.lastExport=Date.now(); save(); toast('Копия сохранена'); render(); };
  if (navigator.canShare && navigator.canShare({files:[file]})) navigator.share({files:[file], title:'Ascend: прогресс'}).then(done).catch(()=>{});
  else { const a=document.createElement('a'); a.href=URL.createObjectURL(file); a.download=name; a.click(); done(); }
}
function showReports(){
  const txt = S.reports.map((r,i)=>`${i+1}. [${r.lesson}] ${r.note?'«'+r.note+'» — ':''}${r.text}`).join('\n\n');
  const el=h(`<div class="player"><div class="p-top"><button class="icon-btn q">${I.close}</button><b style="flex:1">Жалобы на задания</b></div><div class="p-body"><p class="muted">Скопируй список и пришли его мне в чат, я исправлю задания.</p><textarea class="field" style="min-height:50vh;font-size:13px">${esc(txt)}</textarea></div><div class="p-foot"><button class="btn block acc">Скопировать</button><button class="btn block ghost mt">Очистить список</button></div></div>`);
  document.body.append(el); $('.q',el).onclick=()=>el.remove();
  const bs=el.querySelectorAll('.p-foot .btn');
  bs[0].onclick=()=>{ (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast('Скопировано')).catch(()=>{ const t=el.querySelector('textarea'); t.select(); document.execCommand('copy'); toast('Скопировано'); }); };
  bs[1].onclick=()=>{ if(confirm('Очистить список жалоб?')){ S.reports=[]; save(); el.remove(); render(); } };
}

/* ================= boot ================= */
function boot(){
  buildFlat(); indexWords(); indexLookup(); applyTheme();
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(()=>{});
  checkAch(); render();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(()=>{});
}
document.addEventListener('DOMContentLoaded', boot);
