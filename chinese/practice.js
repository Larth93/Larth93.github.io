/* Interactive Mandarin practice. All state belongs to the current exercise. */
const HanPractice = (() => {
  const modes = [
    ['dialog', '说', 'Диалоги', 'Познакомься, закажи чай или договорись о встрече.', '#91c7b0'],
    ['tones', '声', 'Четыре тона', 'Услышь мелодию слога и определи тон.', '#f4a481'],
    ['write', '笔', 'Прописи', 'Напиши иероглиф по чертам прямо на экране.', '#d0b885'],
    ['build', '句', 'Собери фразу', 'Выстрой китайские слова в нужном порядке.', '#9cbed3'],
    ['studio', '述', 'Языковая мастерская', 'Перевод, изложение и устный пересказ на девяти ступенях.', '#95c7b8'],
    ['sprint', '快', 'Словарный спринт', 'За минуту вспомни как можно больше переводов.', '#b7aed6']
  ];
  const dialogs = [
    ['Знакомство', [
      ['Привет!','你好！','Nǐ hǎo!','Поздоровайся в ответ.',['你好！','再见！','谢谢！'],'Nǐ hǎo!','你好 подходит для приветствия. 再见 говорят при прощании.'],
      ['Как тебя зовут?','你叫什么名字？','Nǐ jiào shénme míngzi?','Представься.',['我叫丹尼。','我在家。','不客气。'],'Wǒ jiào Dānní.','После 我叫 поставь своё имя.'],
      ['Рад знакомству.','很高兴认识你。','Hěn gāoxìng rènshi nǐ.','Скажи, что тоже рад знакомству.',['我也很高兴认识你。','我不喝茶。','明天见。'],'Wǒ yě hěn gāoxìng rènshi nǐ.','也 означает «тоже» и стоит перед 很高兴.']
    ]],
    ['В чайной', [
      ['Что ты хочешь выпить?','你想喝什么？','Nǐ xiǎng hē shénme?','Попроси чашку чая.',['我想喝一杯茶。','我姓王。','在那儿。'],'Wǒ xiǎng hē yì bēi chá.','一杯茶 — одна чашка чая. 杯 указывает на ёмкость.'],
      ['Добавить сахар?','要加糖吗？','Yào jiā táng ma?','Вежливо откажись.',['不用，谢谢。','再来一碗。','我不知道他是谁。'],'Bú yòng, xièxie.','不用 означает «не нужно».'],
      ['Ещё что-нибудь?','还要别的吗？','Hái yào bié de ma?','Скажи, что это всё.',['就这些，谢谢。','我有两本书。','我坐地铁。'],'Jiù zhèxiē, xièxie.','就这些 — «только это», обычный способ завершить заказ.']
    ]],
    ['Встреча', [
      ['В субботу есть время?','你星期六有空吗？','Nǐ xīngqīliù yǒu kòng ma?','Подтверди и предложи сходить на выставку.',['有空，我们去看展览吧。','我从北京来。','两杯，谢谢。'],'Yǒu kòng, wǒmen qù kàn zhǎnlǎn ba.','Финальное 吧 смягчает предложение.'],
      ['Где встретимся?','我们在哪儿见面？','Wǒmen zài nǎr jiànmiàn?','Предложи вход в музей.',['在博物馆门口吧。','大概两个小时。','我想看看。'],'Zài bówùguǎn ménkǒu ba.','在 перед названием места показывает, где произойдёт встреча.'],
      ['В три удобно?','三点方便吗？','Sān diǎn fāngbiàn ma?','Попроси перенести встречу на полчаса.',['三点半可以吗？','今天很暖和。','不用袋子。'],'Sān diǎn bàn kěyǐ ma?','三点半 — половина четвёртого, то есть 15:30 или 3:30.']
    ]]
  ];
  const phrases = [
    ['Я пью чай.',['我','喝','茶'],'Wǒ hē chá.','Кто → действие → что.'],
    ['Как тебя зовут?',['你','叫','什么','名字'],'Nǐ jiào shénme míngzi?','什么 занимает место неизвестной части.'],
    ['Я хочу изучать китайский.',['我','想','学','中文'],'Wǒ xiǎng xué Zhōngwén.','想 перед глаголом означает «хочу».'],
    ['Он сегодня дома читает книгу.',['他','今天','在家','看书'],'Tā jīntiān zài jiā kàn shū.','Здесь начало задано подлежащим 他. Затем идут время, место и действие.'],
    ['Эта чашка чая слишком горячая.',['这','杯','茶','太','烫','了'],'Zhè bēi chá tài tàng le.','Сочетание 太…了 усиливает признак, а 杯 связывает 这 и 茶.'],
    ['Я бывал в Пекине.',['我','去','过','北京'],'Wǒ qù guo Běijīng.','过 после глагола указывает на жизненный опыт.'],
    ['Она говорит по-китайски очень свободно.',['她','中文','说','得','很','流利'],'Tā Zhōngwén shuō de hěn liúlì.','Поставь 中文 сразу после 她, а оценку речи — после 得.'],
    ['Лишь бы ты согласился, и мы сможем начать.',['只要','你','同意','我们','就','能','开始'],'Zhǐyào nǐ tóngyì, wǒmen jiù néng kāishǐ.','Пара 只要…就… выражает достаточное условие.'],
    ['Даже если пойдёт дождь, я всё равно пойду.',['即使','下雨','我','也','会','去'],'Jíshǐ xiàyǔ, wǒ yě huì qù.','即使 вводит допущение, 也 открывает основную часть.']
  ];
  const scripts = [
    ['一','yī','один',[[[18,53],[83,50]]]],
    ['二','èr','два',[[[29,33],[71,31]],[[15,72],[85,69]]]],
    ['三','sān','три',[[[27,25],[73,23]],[[31,49],[69,47]],[[16,75],[85,72]]]],
    ['十','shí','десять',[[[16,44],[84,42]],[[51,14],[51,86]]]],
    ['人','rén','человек',[[[53,16],[48,42],[36,63],[18,81]],[[48,43],[59,60],[72,73],[84,80]]]],
    ['大','dà','большой',[[[21,42],[80,39]],[[52,12],[49,43],[38,64],[16,83]],[[49,45],[61,63],[73,75],[86,82]]]]
  ];
  const tones = [
    ['妈','mā','мама','Ровный','держи голос высоко на одной высоте',[205,205,205]],
    ['麻','má','конопля','Восходящий','начни со средней высоты и подними голос',[145,173,228]],
    ['马','mǎ','лошадь','Низкий','опусти голос вниз. В отдельном слоге он может подняться в конце',[155,100,163]],
    ['骂','mà','ругать','Нисходящий','начни высоко и быстро опусти голос',[233,170,95]]
  ];
  const baseWords = [['你','nǐ','ты'],['我','wǒ','я'],['茶','chá','чай'],['水','shuǐ','вода'],['人','rén','человек'],['书','shū','книга'],['好','hǎo','хороший'],['家','jiā','дом']];
  const css = `<style>
  .hp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:14px}
  .hp-card{color:inherit;text-align:left;display:flex;flex-direction:column;align-items:flex-start;gap:10px;cursor:pointer;background:var(--panel,#17231f);border:1px solid #899c8d44;border-radius:18px;padding:22px;min-height:170px}
  .hp-card:hover,.hp-card:focus-visible{border-color:var(--hp-ink)}
  .hp-card strong{font-size:1.14rem}.hp-card small{font-size:.95rem;opacity:.73;line-height:1.5}
  .hp-mark{font:500 1.8rem/1.4 serif;color:var(--hp-ink);display:grid;place-items:center;background:color-mix(in srgb,var(--hp-ink) 12%,transparent);height:46px;width:46px;border-radius:12px}
  .hp-wrap{display:grid;gap:14px;position:relative}.hp-wrap h2,.hp-wrap p{margin:0}.hp-wrap h2{padding-right:26px}
  .hp-prompt{border:1px solid #899c8d45;border-radius:16px;padding:18px;display:grid;gap:8px;background:#829d8910}
  .hp-han{font-size:clamp(1.5rem,6vw,2.25rem);line-height:1.35}.hp-pinyin,.hp-sub{opacity:.78;font-size:.95rem;line-height:1.45}
  .hp-actions,.hp-tokens{display:flex;gap:9px;flex-wrap:wrap}.hp-choice{display:grid;gap:8px}
  .hp-button,.hp-token{border:1px solid #8b9f9366;border-radius:11px;padding:.75rem 1rem;background:transparent;color:inherit;font:inherit;cursor:pointer;text-align:left}
  .hp-button:disabled,.hp-token:disabled{opacity:.45;cursor:default}.hp-button:hover:enabled,.hp-token:hover:enabled{background:#749d7e22}
  .hp-feedback{padding:13px 15px;border-radius:11px;background:#7aa99221;line-height:1.5}.hp-feedback.bad{background:#c3836526}
  .hp-field{display:block;touch-action:none;width:min(100%,270px);aspect-ratio:1;border-radius:12px;background:#f6eddc;justify-self:center}
  .hp-answer{min-height:56px;padding:8px;border:1px dashed #78948180;border-radius:12px;align-items:center}.hp-token{font-size:1.12rem;padding:8px 12px}
  .hp-label{font-size:.85rem;opacity:.74}.hp-wrap button:focus-visible,.hp-card:focus-visible{outline:2px solid #de9b7d;outline-offset:2px}
  </style>`;
  let round, interval, audio;
  const mix = a => { const out = a.slice(); for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]} return out };
  const b = (label,fn,cls='hp-button') => '<button type="button" class="'+cls+'" onclick="HanPractice.'+fn+'">'+label+'</button>';
  const choices = (pieces,fn) => '<div class="hp-choice">'+pieces.map((v,i)=>b(esc(v),fn+'('+i+')')).join('')+'</div>';
  function page(){return css+'<div class="intro"><div><h1>Практика</h1><p>Выбери навык для короткой тренировки.</p></div></div><div class="modebar"><button class="tile" onclick="openPinyinLab()"><b>Лаборатория произношения</b><small>Сравни звуки и распознай слог на слух</small></button><button class="tile" onclick="openRoleplays()"><b>Разговорные сценарии</b><small>Собеседник отвечает на твою реплику</small></button></div><div class="hp-grid">'+modes.map(([id,mark,title,desc,color])=>'<button class="hp-card" style="--hp-ink:'+color+'" onclick="HanPractice.open(\''+id+'\')"><span class="hp-mark" lang="zh">'+mark+'</span><strong>'+title+'</strong><small>'+desc+'</small></button>').join('')+'</div>'}
  function stop(){clearInterval(interval);interval=null}
  function open(mode){cleanRecorder();stop();round={mode,i:0,score:0,locked:false};popup(css+'<div id="hp-area" class="hp-wrap"></div>');if(mode==='dialog'){show('<h2>Выбери ситуацию</h2>'+choices(dialogs.map(d=>d[0]),'startDialog'))}
    if(mode==='studio')studioStart();
    if(mode==='tones'){round.list=mix([0,1,2,3,0,1,2,3]);toneScreen()}
    if(mode==='write'){round.list=scripts.map((_,i)=>i);writeScreen()}
    if(mode==='build'){round.list=[...phrases.keys()];buildScreen()}
    if(mode==='sprint'){show('<h2>Словарный спринт</h2><p>На экране появятся иероглифы с пиньинем. Выбирай перевод. В запасе 60 секунд.</p>'+b('Начать минуту','startSprint()','btn'))}}
  const area=()=>document.getElementById('hp-area');
  function show(html){if(area())area().innerHTML=html}
  function progress(title,n){return '<span class="hp-label">'+esc(title)+' · '+(round.i+1)+' / '+n+'</span>'}
  function feedback(correct,text,next){return '<div role="status" class="hp-feedback '+(correct?'':'bad')+'">'+(correct?'Верно. ':'Разберём ответ. ')+esc(text)+'</div>'+b('Дальше',next,'btn')}
  function finish(title,detail,xp){if(round.finished)return;round.finished=true;stop();if(xp>0)award(xp);if(!area())popup(css+'<div id="hp-area" class="hp-wrap"></div>');show('<span class="hp-label">Тренировка завершена</span><h2>'+esc(title)+'</h2><p>'+esc(detail)+'</p><strong>+'+xp+' XP</strong><button type="button" class="btn" onclick="closePop()">Готово</button>')}
  function startDialog(s){round.s=s;dialogScreen()}
  function dialogScreen(){const d=dialogs[round.s][1][round.i];round.locked=false;round.opts=mix(d[4]);show(progress(dialogs[round.s][0],3)+'<h2>'+esc(d[3])+'</h2><div class="hp-prompt"><span class="hp-han" lang="zh">'+d[1]+'</span><span>'+d[2]+'</span><details><summary>Перевод собеседника</summary>'+esc(d[0])+'</details>'+b('Послушать','playDialog()')+'</div>'+choices(round.opts,'answerDialog'))}
  function playDialog(){speak(dialogs[round.s][1][round.i][1])}
  function answerDialog(i){if(round.locked)return;round.locked=true;const d=dialogs[round.s][1][round.i],yes=round.opts[i]===d[4][0];if(yes)round.score++;show(progress(dialogs[round.s][0],3)+'<h2>'+esc(d[3])+'</h2><div class="hp-prompt"><strong lang="zh" class="hp-han">'+d[4][0]+'</strong><span>'+d[5]+'</span>'+b('Послушать ответ','playReply()')+'</div>'+feedback(yes,d[6],'nextDialog()'))}
  function playReply(){speak(dialogs[round.s][1][round.i][4][0])}
  function nextDialog(){if(++round.i<3)dialogScreen();else finish('Диалог завершён','Уместных ответов с первой попытки: '+round.score+' из 3.',round.score*4)}
  function toneScreen(){round.locked=false;round.visual=false;show(progress('Четыре тона',round.list.length)+'<h2>Какой тон звучит?</h2><p class="hp-sub">Прослушай запись слога ma. При необходимости открой подсказку.</p><div class="hp-actions">'+b('Прослушать','playTone()','btn')+b('Показать контур','revealTone()')+'</div><div id="hp-curve"></div>'+choices(tones.map((t,i)=>(i+1)+' · '+t[3]),'answerTone'))}
  function playTone(){speak(tones[round.list[round.i]][0])}
  function revealTone(){const node=document.getElementById('hp-curve');if(!node)return;round.visual=true;const i=round.list[round.i];node.innerHTML='<div class="hp-prompt"><strong class="hp-han">'+tones[i][1]+'</strong><span>'+['Высоко и ровно','От средней высоты вверх','Вниз, затем немного вверх','Резко сверху вниз'][i]+'</span></div>'}
  function answerTone(i){if(round.locked)return;round.locked=true;const n=round.list[round.i],t=tones[n],yes=i===n;if(yes)round.score++;show('<h2>'+t[0]+' · '+t[1]+'</h2><p>'+esc(t[2])+'</p>'+feedback(yes,(n+1)+'-й тон: '+t[4]+'.','nextTone()'))}
  function nextTone(){if(++round.i<round.list.length)toneScreen();else finish('Тоны разобраны','Правильных ответов: '+round.score+' из '+round.list.length+'.',round.score*2)}
  function buildScreen(){const p=phrases[round.list[round.i]];round.opts=mix(p[1]);if(round.opts.join('')===p[1].join(''))round.opts.reverse();round.selected=[];round.hinted=false;drawBuild()}
  function drawBuild(err=''){const p=phrases[round.list[round.i]],s=round.selected;show(progress('Конструктор',round.list.length)+'<h2>'+esc(p[0])+'</h2><p class="hp-sub">Нажимай на слова по порядку. Чтобы вернуть слово вниз, коснись его в ответе.</p><div class="hp-tokens hp-answer">'+(s.length?s.map((n,i)=>b(round.opts[n],'removeToken('+i+')','hp-token')).join(''):'<span class="hp-label">Твой ответ</span>')+'</div><div class="hp-tokens">'+round.opts.map((v,i)=>s.includes(i)?'':b(v,'addToken('+i+')','hp-token')).join('')+'</div>'+(err?'<div role="status" class="hp-feedback bad">'+esc(err)+'</div>':'')+(round.hinted?'<div class="hp-feedback">'+esc(p[3])+'</div>':'')+'<div class="hp-actions">'+(s.length===p[1].length?b('Проверить','checkBuild()','btn'):'')+b('Подсказка','hintBuild()')+b('Показать разбор','solveBuild()')+'</div>')}
  function addToken(i){if(!round.selected.includes(i))round.selected.push(i);drawBuild()}
  function removeToken(i){round.selected.splice(i,1);drawBuild()}
  function hintBuild(){round.hinted=true;drawBuild()}
  function checkBuild(){const p=phrases[round.list[round.i]],answer=round.selected.map(k=>round.opts[k]).join('');if(answer!==p[1].join('')&&!(round.list[round.i]===3&&answer==='今天他在家看书')){drawBuild('Проверь порядок слов. Можно открыть подсказку или посмотреть разбор.');return}round.score++;buildResult(true)}
  function solveBuild(){buildResult(false)}
  function buildResult(ok){const p=phrases[round.list[round.i]];show('<h2>'+(ok?'Фраза собрана':'Разбор фразы')+'</h2><div class="hp-prompt"><strong class="hp-han" lang="zh">'+p[1].join('')+'</strong><span>'+p[2]+'</span><span>'+p[3]+'</span>'+b('Послушать','playPhrase()')+'</div>'+b('Дальше','nextBuild()','btn'))}
  function playPhrase(){speak(phrases[round.list[round.i]][1].join(''))}
  function nextBuild(){if(++round.i<round.list.length)buildScreen();else finish('Конструктор пройден','Собрано самостоятельно: '+round.score+' из '+round.list.length+'.',round.score*3)}
  function writeScreen(){const w=scripts[round.i];round.step=0;round.paths=[];round.pen=null;show(progress('Прописи',scripts.length)+'<h2>'+w[0]+' · '+w[2]+'</h2><div class="hp-sub">'+w[1]+' · Веди линию от красной точки по тёмной подсказке. Проверяются направление и форма.</div><canvas width="512" height="512" id="hp-paper" class="hp-field" aria-label="Поле для рисования иероглифа"></canvas><div id="hp-pen-note" aria-live="polite"></div><div class="hp-actions">'+b('Начать заново','writeScreen()')+b('Пропустить знак','nextWrite()')+'</div>');const c=document.getElementById('hp-paper');const xy=e=>{const r=c.getBoundingClientRect();return [(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100]};
    c.onpointerdown=e=>{if(round.step>=w[3].length||round.pen)return;c.setPointerCapture(e.pointerId);round.pen=e.pointerId;round.current=[xy(e)];paint()};
    c.onpointermove=e=>{if(round.pen!==e.pointerId)return;round.current.push(xy(e));paint()};
    c.onpointercancel=()=>{round.pen=null;paint()};
    c.onpointerup=e=>{if(round.pen!==e.pointerId)return;round.current.push(xy(e));round.pen=null;const path=round.current,target=w[3][round.step];const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);const close=(point,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1];const u=Math.max(0,Math.min(1,((point[0]-a[0])*dx+(point[1]-a[1])*dy)/(dx*dx+dy*dy)));return dist(point,[a[0]+dx*u,a[1]+dy*u])};
      const fits=dist(path[0],target[0])<13&&dist(path.at(-1),target.at(-1))<15&&path.every(point=>Math.min(...target.slice(1).map((v,j)=>close(point,target[j],v)))<16);
      if(fits){round.paths.push(path);round.step++}paint(fits?'':'Начни у точки и дойди до конца подсвеченной черты.');
      if(round.step===w[3].length){document.getElementById('hp-pen-note').innerHTML='<div class="hp-feedback">Готово! Ты написал '+w[0]+'.</div>'+b('Следующий знак','completeWrite()','btn')}};paint()}
  function paint(message=''){const c=document.getElementById('hp-paper');if(!c)return;const ctx=c.getContext('2d'),strokes=scripts[round.i][3];ctx.setTransform(5.12,0,0,5.12,0,0);ctx.clearRect(0,0,100,100);ctx.lineCap='round';ctx.lineJoin='round';
    function path(points,color,width){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke()}
    ctx.setLineDash([1,2]);for(const seg of [[[50,0],[50,100]],[[0,50],[100,50]],[[0,0],[100,100]],[[0,100],[100,0]]])path(seg,'#cec4af',.4);ctx.setLineDash([]);strokes.forEach((s,i)=>path(s,i===round.step?'#a09b87':'#ded7c7',4.2));round.paths.forEach(p=>path(p,'#243c35',3.1));if(round.pen!==null)path(round.current,'#243c35',3.1);
    if(round.step<strokes.length){const [x,y]=strokes[round.step][0];ctx.fillStyle='#b7533e';ctx.beginPath();ctx.arc(x,y,2.5,0,Math.PI*2);ctx.fill();document.getElementById('hp-pen-note').textContent=message||'Черта '+(round.step+1)+' из '+strokes.length}}
  function completeWrite(){round.score++;nextWrite()}
  function nextWrite(){if(++round.i<scripts.length)writeScreen();else finish('Прописи завершены','Написано знаков: '+round.score+' из '+scripts.length+'.',round.score*3)}
  function vocabulary(){const found=new Map(baseWords.map(w=>[w[0],w]));for(const id of S.done||[]){const [lv,le]=String(id).split('-').map(Number);const words=LEVELS[lv]?.lessons[le]?.words||[];for(const w of words){if(Array.isArray(w)&&w.length>=3)found.set(w[0],w)}}return [...found.values()]}
  function startSprint(){round.pool=vocabulary();round.end=Date.now()+60000;round.answers=0;round.score=0;sprintQuestion();stop();interval=setInterval(()=>{const clock=document.getElementById('hp-clock');if(!clock){stop();return}const sec=Math.max(0,Math.ceil((round.end-Date.now())/1000));clock.textContent=sec+' с';if(!sec)finishSprint()},220)}
  function sprintQuestion(last=''){if(Date.now()>=round.end){finishSprint();return}const next=mix(round.pool.filter(w=>w[0]!==round.last))[0];round.last=next[0];round.current=next;round.opts=mix([next[2],...mix([...new Set(round.pool.map(w=>w[2]).filter(r=>r!==next[2]))]).slice(0,3)]);show('<div class="hp-label">Спринт · <strong id="hp-clock">'+Math.ceil((round.end-Date.now())/1000)+' с</strong> · Верно '+round.score+'</div><h2>Выбери перевод</h2><div class="hp-prompt"><strong class="hp-han" lang="zh">'+esc(next[0])+'</strong><span>'+esc(next[1])+'</span></div>'+choices(round.opts,'answerSprint')+(last?'<div class="hp-sub" aria-live="polite">'+esc(last)+'</div>':'')+b('Завершить спринт','finishSprint()'))}
  function answerSprint(i){if(Date.now()>=round.end){finishSprint();return}const w=round.current,ok=round.opts[i]===w[2];round.answers++;if(ok)round.score++;sprintQuestion((ok?'Верно. ':'Запомни: ')+w[0]+' — '+w[2]+'.')}
  function finishSprint(){finish('Спринт завершён','Верных переводов: '+round.score+' из '+round.answers+'.',round.score*2)}
  const studioTexts = [
    null,
    ['Новая знакомая','我叫小林。我住在北京。我喜欢喝茶。','Меня зовут Сяолинь. Я живу в Пекине. Я люблю пить чай.','小林住在北京，喜欢喝茶。','Назови человека, город и напиток.'],
    ['Встреча после работы','今天我五点下班。我和朋友约好六点在书店见面。我们想一起买书。','Сегодня я заканчиваю работу в пять. Мы с другом договорились встретиться в шесть в книжном магазине. Хотим вместе купить книги.','我下班以后，要跟朋友在书店见面买书。','Различи время окончания работы и время встречи.'],
    ['Поезд вместо самолёта','小周本来想坐飞机去上海，可是机票太贵了。她买了一张火车票。虽然路上时间长一些，但她可以在车上看书。','Сяочжоу хотела полететь в Шанхай, но билет на самолёт оказался слишком дорогим. Она взяла билет на поезд. Поездка займёт чуть больше времени, зато по дороге можно почитать.','因为机票贵，小周决定坐火车去上海，还打算在路上看书。','Передай причину решения и преимущество поезда.'],
    ['Смена места встречи','我们原来打算在公园举办读书会。听说明天下雨，负责人就联系了附近的书店。书店同意借给我们一个房间，不过活动必须在下午五点前结束。','Мы собирались провести встречу книжного клуба в парке. Услышав, что завтра обещают дождь, организатор связался с ближайшим книжным магазином. Магазин согласился предоставить помещение, но встречу придётся закончить до пяти вечера.','因为可能下雨，读书会改在书店举行，活动要在下午五点前结束。','Отрази изменение плана, причину и условие магазина.'],
    ['Цена удобства','社区在地铁站旁设置了共享单车停放区。通勤者觉得换乘方便了，部分店主却反映自行车占用了顾客排队的空间。社区决定先调整停车线的位置，一个月后再收集意见。','Рядом с метро в квартале разметили стоянку прокатных велосипедов. Пассажирам стало удобнее делать пересадку, а некоторые владельцы магазинов пожаловались, что велосипеды занимают место для очередей. Решено сначала перенести разметку, а через месяц снова собрать отзывы.','共享单车方便了换乘，却影响了部分商户。社区将调整停车线，再听取反馈。','Сохрани обе точки зрения и последовательность мер.'],
    ['Что измеряет опрос','一份问卷显示，大多数受访者支持延长图书馆开放时间。不过，问卷只通过图书馆的公众号发放，平时不关注该账号的居民很难参与。研究者因此建议补充线下访谈，再据此安排试点。','По результатам анкеты большинство опрошенных поддерживает продление часов работы библиотеки. Однако анкету распространяли только через её официальный аккаунт, поэтому жители, не подписанные на него, практически не могли участвовать. Исследователи предлагают дополнить опрос очными интервью и затем спланировать пилотный проект.','现有问卷的样本来源有限，研究者建议先通过访谈补充资料，再决定如何试点。','Ограничь вывод кругом опрошенных и объясни причину дополнительного сбора данных.'],
    ['Оригинал и цифровая копия','博物馆将一批旧地图数字化后，访问量明显上升。策展人指出，放大图像确实有助于辨认细节，但纸张厚薄、折痕与修补痕迹同样承载着使用史。若把数字化简单等同于保存，人们便可能忽略原件所提供的另一类证据。','После оцифровки коллекции старых карт посещаемость музея заметно выросла. По словам куратора, увеличение изображения действительно позволяет рассмотреть детали. Но толщина бумаги, сгибы и следы ремонта тоже свидетельствуют об истории использования. Если считать оцифровку равнозначной сохранению, можно упустить другой вид свидетельств, который дают оригиналы.','数字图像扩大了地图的可见范围，却难以完整呈现原件的物质特征。因此，数字化与原件保存应相互补充。','Разведи доступность изображения и информацию, заключённую в материале.'],
    ['Среднее скрывает различия','某市试行弹性办公后，员工的平均通勤时间有所缩短。进一步分析却发现，受益者主要是能自主调整工作时间的岗位，而需要按时交接班的一线员工变化不大。若下一轮评估仅比较全市平均值，就难以判断政策是否真正改善了不同群体的处境。','После введения гибкого графика в одном городе среднее время поездки на работу сократилось. Более подробный анализ показал, что выиграли преимущественно сотрудники, которые сами выбирают время работы. Для работников первой линии с фиксированной пересменкой мало что изменилось. Если в следующем исследовании сравнивать лишь общегородские средние значения, будет трудно судить об эффекте для разных групп.','弹性办公缩短了平均通勤时间，但岗位差异限制了收益的分布。评估时应把总体指标与分组分析结合起来。','Передай оговорку о распределении эффекта и её значение для оценки.'],
    ['Когда индикатор становится целью','评估制度原本借助可量化的指标，试图让公共服务的成效更容易比较。然而，当经费分配直接取决于某一指标时，机构就可能优先改善最容易被记录的部分。数据看似不断向好，服务对象真正重视的体验却未必随之改善。这并不意味着应当放弃量化，而是要求评估者持续检验指标与目标之间的联系，并为难以计量的经验保留表达的空间。','Система оценки изначально опиралась на количественные показатели, чтобы упростить сравнение результатов общественных услуг. Однако если финансирование напрямую зависит от одного показателя, учреждения могут в первую очередь улучшать то, что проще зафиксировать. Данные выглядят всё лучше, хотя опыт, которым дорожат получатели услуг, при этом может не меняться. Это довод в пользу постоянной проверки связи показателя с целью и внимания к трудноизмеримому опыту при сохранении количественной оценки.','作者承认量化有助于比较成效，同时指出，指标与经费挂钩可能诱发目标偏移。因此，评估既须检验指标的有效性，也须吸纳难以量化的使用者经验。','Сохрани условный характер риска и позицию автора относительно количественной оценки.']
  ];
  const studioNames={translate:'Перевод',summary:'Изложение',oral:'Устный пересказ'};
  let studioRec=null, studioStream=null, studioURL='', studioTicket=0, studioTimer=0;
  function cleanRecorder(){studioTicket++;clearTimeout(studioTimer);if(studioRec&&studioRec.state!=='inactive'){studioRec.onstop=null;studioRec.stop()}studioRec=null;if(studioStream)studioStream.getTracks().forEach(t=>t.stop());studioStream=null;if(studioURL)URL.revokeObjectURL(studioURL);studioURL=''}
  function studioStart(){round.lv=1;round.kind='translate';studioForm()}
  function studioSelect(key,value){if(key==='lv')round.lv=Number(value);if(key==='kind')round.kind=value;studioForm()}
  function studioForm(){cleanRecorder();const [title,zh,ru]=studioTexts[round.lv],kind=round.kind;
    const explanation=kind==='translate'?'Переведи текст с русского на китайский.':kind==='summary'?'Прочитай текст и передай основную мысль по-китайски своими словами.':'Прочитай текст и перескажи его по-китайски. Можно записать голос или напечатать свой пересказ.';
    const mic=kind==='oral'?'<div class="hp-actions"><button class="hp-button" id="hp-rec" onclick="HanPractice.studioRecord()">Записать голос</button></div><span class="hp-label" id="hp-mic-status" role="status">Запись остаётся в этом окне. Лимит — 3 минуты.</span><div id="hp-playback"></div>':'';
    show('<h2>Языковая мастерская</h2><div class="hp-actions"><label>Ступень <select onchange="HanPractice.studioSelect(\'lv\',this.value)">'+studioTexts.slice(1).map((_,i)=>'<option value="'+(i+1)+'" '+(round.lv===i+1?'selected':'')+'>'+(i+1)+'</option>').join('')+'</select></label><label>Навык <select onchange="HanPractice.studioSelect(\'kind\',this.value)">'+Object.entries(studioNames).map(([id,name])=>'<option value="'+id+'" '+(kind===id?'selected':'')+'>'+name+'</option>').join('')+'</select></label></div><h3>'+esc(title)+'</h3><p>'+explanation+'</p><div class="hp-prompt"><span '+(kind==='translate'?'':'lang="zh"')+'>'+esc(kind==='translate'?ru:zh)+'</span>'+(kind==='translate'?'':b('Послушать текст','studioListen()'))+'</div>'+mic+'<label for="hp-draft">'+(kind==='oral'?'Текстовая версия пересказа':'Твой ответ на китайском')+'</label><textarea id="hp-draft" lang="zh" rows="4" placeholder="输入中文…" style="width:100%"></textarea><span id="hp-studio-hint" aria-live="polite"></span>'+b('Сверить с образцом','studioCompare()','btn'));
    const dialog=area()?.closest('dialog');if(dialog){dialog.removeEventListener('close',cleanRecorder);dialog.addEventListener('close',cleanRecorder,{once:true})}}
  function studioListen(){speak(studioTexts[round.lv][1])}
  async function studioRecord(){
    if(studioRec?.state==='recording'){studioRec.stop();return}
    const status=document.getElementById('hp-mic-status'),btn=document.getElementById('hp-rec');if(!status||!btn)return;
    if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){status.textContent='В этом браузере запись недоступна. Введи текст пересказа в поле ниже.';return}
    const ticket=++studioTicket;btn.disabled=true;status.textContent='Ожидаем доступ к микрофону…';
    let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:true});
      if(ticket!==studioTicket||!area()?.closest('dialog')?.open){stream.getTracks().forEach(t=>t.stop());return}
      studioStream=stream;const recorder=new MediaRecorder(stream),parts=[];studioRec=recorder;
      recorder.ondataavailable=e=>{if(e.data.size)parts.push(e.data)};
      recorder.onstop=()=>{clearTimeout(studioTimer);stream.getTracks().forEach(t=>t.stop());if(ticket!==studioTicket)return;studioStream=null;studioRec=null;btn.textContent='Записать заново';btn.disabled=false;
        if(!parts.length){status.textContent='Запись пуста. Повтори попытку или введи пересказ текстом.';return}
        if(studioURL)URL.revokeObjectURL(studioURL);studioURL=URL.createObjectURL(new Blob(parts,{type:recorder.mimeType||parts[0].type}));const player=document.createElement('audio');player.controls=true;player.src=studioURL;player.style.maxWidth='100%';document.getElementById('hp-playback').replaceChildren(player);status.textContent='Прослушай свой пересказ перед сравнением.'};
      recorder.start();btn.disabled=false;btn.textContent='Остановить запись';status.textContent='Идёт запись…';studioTimer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop()},180000);
    }catch{stream?.getTracks().forEach(t=>t.stop());if(ticket!==studioTicket)return;studioRec=null;studioStream=null;btn.disabled=false;status.textContent='Запись недоступна. Проверь разрешение на микрофон или введи текст пересказа ниже.'}}
  function studioCompare(){const draft=document.getElementById('hp-draft').value.trim(),hint=document.getElementById('hp-studio-hint');
    if(studioRec?.state==='recording'){hint.textContent='Сначала останови запись.';return}
    if(!draft&&!studioURL){hint.textContent='Сначала введи ответ'+(round.kind==='oral'?' или запиши пересказ':'')+'.';return}
    studioTicket++;const [title,zh,,summary,focus]=studioTexts[round.lv],model=round.kind==='translate'?zh:summary;
    const criteria=[focus,round.kind==='translate'?'Проверь, переданы ли отрицание, время, степень уверенности и связи между предложениями.':'Убедись, что основная мысль звучит своими словами и без новых фактов.',round.kind==='oral'?'Прослушай запись или прочитай ответ вслух. Понятны ли тоны и границы смысловых групп?':'Прочитай ответ вслух. Проверь порядок слов, связки и ясность формулировок.'];
    show('<span class="hp-label">Самопроверка · ступень '+round.lv+'</span><h2>'+esc(title)+'</h2><div class="hp-prompt"><strong>Твой ответ</strong>'+(draft?'<p lang="zh" style="white-space:pre-wrap">'+esc(draft)+'</p>':'')+(studioURL?'<audio id="hp-own-audio" controls style="max-width:100%"></audio>':'')+'</div><div class="hp-prompt"><strong>Один из вариантов</strong><p lang="zh">'+esc(model)+'</p>'+b('Послушать образец','studioModel()')+'</div><p>Сравни ответы по смыслу. Формулировки могут отличаться.</p>'+criteria.map((c,i)=>'<label class="hp-button"><input type="checkbox" class="hp-criterion" value="'+i+'"> '+esc(c)+'</label>').join('')+b('Завершить самопроверку','studioFinish()','btn'));
    if(studioURL)document.getElementById('hp-own-audio').src=studioURL}
  function studioModel(){speak(studioTexts[round.lv][round.kind==='translate'?1:3])}
  function studioFinish(){const n=area().querySelectorAll('.hp-criterion:checked').length;cleanRecorder();finish('Самопроверка завершена','По твоей оценке выполнено '+n+' из 3 критериев. XP начислены за практику.',3)}
  return {studioSelect,studioListen,studioRecord,studioCompare,studioModel,studioFinish,page,open,startDialog,playDialog,answerDialog,playReply,nextDialog,playTone,revealTone,answerTone,nextTone,addToken,removeToken,hintBuild,checkBuild,solveBuild,playPhrase,nextBuild,writeScreen,completeWrite,nextWrite,startSprint,answerSprint,finishSprint}
})();
function practicePage(){return HanPractice.page()}
