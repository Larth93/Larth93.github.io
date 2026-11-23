const LessonRoom = (() => {
  let l,u,rows,deck,picked=[],answered=false,attempts=0,repairMode=false;
  const phases=['Понять','Разобрать','Потренироваться','Применить'];
  const plain=s=>String(s).replace(/[\p{P}\p{Z}\s]/gu,'');
  
  function lessonRows(l){
    const result=l.unit.rows;
    if(result.length>1)return result;
    if(l.i===0&&l.words.length)return [...result,...l.words.map(w=>({zh:w[0],pinyin:w[1],ru:w[2]}))].filter((r,i,rs)=>rs.findIndex(x=>plain(x.zh)===plain(r.zh))===i);
    return result;
  }
  function chunks(r){
    let a=(r.chunks||Array.from(r.zh)).filter(s=>plain(s)).map(plain);
    if(a.length<2)a=Array.from(plain(r.zh));
    if(a.length>9){const n=Math.ceil(a.length/8),group=[];for(let i=0;i<a.length;i+=n)group.push(a.slice(i,i+n).join(''));a=group}
    return a;
  }
  function challenges(){
    const a=[{k:'rule',q:l.question,opts:l.options,why:u.feedback}];
    if(l.id==='0-0'){
      for(const i of [2,0,3,1])a.push({k:'ear',r:rows[i],q:'Какое слово произносит диктор?',opts:[rows[i].ru,...rows.filter((x,j)=>j!==i).map(x=>x.ru)],why:rows[i].pinyin+' — '+rows[i].ru+'. '+['Голос остаётся на одной высоте.','Голос поднимается.','Голос сначала опускается низко.','Голос резко падает.'][i]});
      return a;
    }
    const r=rows[0],r2=rows[1]||r;
    if(rows.length>1&&new Set(rows.map(x=>x.ru)).size>=2){
      a.push({k:'meaning',r:r2,q:'Какой перевод передаёт эту фразу?',opts:[r2.ru,...[...new Set(rows.filter(x=>x.ru!==r2.ru).map(x=>x.ru))].slice(0,3)],why:r2.zh+' — '+r2.ru+'. '+u.how});
    }
    if((u.kind==='Кейс'||l.i>=7)&&clauses(r.zh).length>1){
      a.push({k:'evidence',r,q:'На какие слова оригинала ты опираешься?'});
    }else if(chunks(r).length>1)a.push({k:'order',r,q:'Восстанови исходную фразу по смысловым частям.'});
    let key=u.pattern&&r.zh.includes(u.pattern)?u.pattern:[...l.words].sort((a,b)=>b[0].length-a[0].length).find(w=>r.zh.includes(w[0]))?.[0];
    if(key&&plain(r.zh)!==key) a.push({k:'gap',r,key,q:'Восстанови пропуск в исходной фразе.'});
    else if(r.pinyin)a.push({k:'read',r,q:'Вспомни чтение и произнеси вслух.',opts:null});
    return a;
  }
  function clauses(text){return text.match(/[^。？！；，：]+[。？！；，：”’」』]*/gu)?.map(s=>s.trim()).filter(Boolean)||[text]}
  function annotated(r){return (r.chunks||[r.zh]).map(s=>bank.has(s)?'<button class="lexpart" data-lookup="'+esc(s)+'" lang="zh" aria-label="Значение '+esc(s)+'">'+esc(s)+'</button>':esc(s)).join('')}
  function source(r){
    return r.idZh?'<small class="sources">Пиньинь добавлен автоматически · Tatoeba · <a target="_blank" rel="noopener" href="https://tatoeba.org/en/sentences/show/'+Number(r.idZh)+'">'+esc(r.authorZh||'中文')+'</a> / <a target="_blank" rel="noopener" href="https://tatoeba.org/en/sentences/show/'+Number(r.idRu)+'">'+esc(r.authorRu||'Русский')+'</a> · <a href="corpus-license.txt" target="_blank" rel="noopener">лицензия</a></small>':'';
  }
  function sample(r,label='',conceal=false){
    return '<section class="sample">'+(label?'<small class="tag">'+esc(label)+'</small>':'')+'<div class="sample-line"><div class="chinese" lang="zh">'+annotated(r)+'</div>'+sound(r.zh)+'</div><div class="wordLookup" aria-live="polite"></div>'+(conceal?'<details><summary>Чтение и перевод</summary>':'')+(r.pinyin?'<span class="phon">'+esc(r.pinyin)+'</span>':'')+'<p>'+esc(r.ru)+'</p>'+(conceal?'</details>':'')+source(r)+'</section>';
  }
  function header(step){
    return '<div class="lesson-header"><button id="bookmark" class="bk" aria-pressed="'+!!S.bookmarks?.includes(l.id)+'" onclick="Catalog.bookmark(\''+l.id+'\')">'+(S.bookmarks?.includes(l.id)?'В закладках ✓':'В закладки')+'</button><span class="tag">'+levelLabel(l.i)+' · '+esc(u.kind)+'</span><h2>'+esc(l.title)+'</h2><div class="phasebar">'+phases.map((p,i)=>'<span class="'+(i<=step?'on':'')+'">'+(i+1)+'. '+p+'</span>').join('')+'</div></div>';
  }
  const action=(name,call,cl='btn')=>'<button class="'+cl+'" onclick="'+call+'">'+name+'</button>';
  const next=(name,step)=>action(name,'LessonRoom.go('+step+')');
  function explain(){
    const first=l.id==='0-0';
    return '<div class="lesson-prose"><h3>Где пригодится</h3><p>'+esc(u.where)+'</p><h3>Как это работает</h3><p>'+esc(u.why)+'</p>'+
    (u.pattern?'<div class="formula">'+esc(u.pattern)+'</div>':'')+'<p>'+esc(u.how)+'</p></div>'+
    (first?'<div class="tonegrid">'+[['妈','mā','ровно'],['麻','má','вверх'],['马','mǎ','низко'],['骂','mà','вниз']].map(([h,p,d])=>'<button data-say="'+h+'"><b>'+p+'</b><small>'+d+'</small></button>').join('')+'</div>':sample(rows[0],'Разобранный пример'))+
    '<div class="pitfall"><strong>Где легко ошибиться</strong><p>'+esc(u.pitfall)+'</p></div>'+next('К разбору примеров',1);
  }
  function study(){
    const gloss=l.words.length?'<details><summary>Слова этого урока · '+l.words.length+'</summary>'+l.words.map(w=>'<div class="line"><div><b>'+esc(w[0])+'</b>'+esc(w[1])+' · '+esc(w[2])+'</div>'+sound(w[0])+'</div>').join('')+'</details>':'';
    return '<p class="metadata">Нажми на подчёркнутое слово, чтобы посмотреть его чтение и значение.</p>'+rows.map((r,i)=>sample(r,'Пример '+(i+1),true)).join('')+(u.contrast?'<details><summary>Ещё один пример конструкции</summary>'+sample(u.contrast)+'</details>':'')+gloss+(u.extra?'<p>'+esc(u.extra)+'</p>':'')+'<div class="actions">'+next('К тренировке',2)+action('Назад','LessonRoom.go(0)','subtle')+'</div>';
  }
  function renderExercise(){
    const n=Math.min(sess.exercise||0,deck.length-1),x=deck[n];answered=false;attempts=0;picked=[];
    let h='<div class="drilltitle"><span class="tag">Задание '+(n+1)+' / '+deck.length+'</span><h3>'+esc(x.q)+'</h3></div>';
    if(x.k==='ear')h+=sound(x.r.zh)+'<details><summary>Подсказка без звука</summary>'+esc(x.r.pinyin)+'</details>';
    if(x.k==='meaning')h+='<div class="chinese">'+esc(x.r.zh)+' '+sound(x.r.zh)+'</div>';
    if(x.opts)h+=shuffle(x.opts.map((v,i)=>[v,i])).map(([v,i])=>action(esc(v),'LessonRoom.choice(this,'+i+')','opt')).join('');
    if(x.k==='order'){
      let pieces=chunks(x.r);let ids=shuffle(pieces.map((_,i)=>i));
      if(ids.map(i=>pieces[i]).join('')===pieces.join(''))ids.reverse();
      h+='<p>'+esc(x.r.ru)+'</p><div id="assembled" class="assembled" aria-live="polite">Нажимай на части фразы по порядку</div><div class="tokens">'+ids.map(i=>action(esc(pieces[i]),'LessonRoom.pick(this,'+i+')','subtle token')).join('')+'</div><div class="actions">'+action('Проверить','LessonRoom.checkOrder()')+action('Собрать заново','LessonRoom.clearOrder()','subtle')+'</div>';
    }
    if(x.k==='evidence'){
      const saved=S.evidence?.[l.id]||{};
      h+='<p>Отметь фрагмент, который помогает ответить на вопрос «'+esc(l.question)+'». Объясни выбор своими словами.</p><div class="citation-list">'+clauses(x.r.zh).map((part,i)=>'<label><input type="checkbox" value="'+i+'" '+(saved.ids?.includes(i)?'checked':'')+'><span lang="zh">'+esc(part)+'</span></label>').join('')+'</div><textarea id="reason" aria-label="Обоснование цитаты" placeholder="Эти слова показывают, что…">'+esc(saved.reason||'')+'</textarea>'+action('Сверить аргумент','LessonRoom.evidence()');
    }
    if(x.k==='gap'){
      const masked=x.r.zh.replace(x.key,'〔 … 〕');let distract=l.words.map(w=>w[0]).filter(w=>w!==x.key);
      h+='<div class="sample"><div class="chinese">'+esc(masked)+'</div><p>'+esc(x.r.ru)+'</p></div><label>Введи пропущенный фрагмент<input id="gap" placeholder="Иероглифы" autocomplete="off"></label>';
      const candidates=[...new Set([x.key,...distract])].slice(0,4);
      if(candidates.length>1)h+='<details><summary>Выбрать без китайской клавиатуры</summary><div class="tokens">'+shuffle(candidates).map(v=>'<button class="subtle" data-fill="'+esc(v)+'">'+esc(v)+'</button>').join('')+'</div></details>';
      else h+='<details><summary>Подсказка для ввода</summary><button class="subtle" data-fill="'+esc(x.key)+'">'+esc(x.key)+'</button></details>';
      h+=action('Проверить','LessonRoom.checkGap()');
    }
    if(x.k==='read')h+='<div class="sample chinese">'+esc(x.r.zh)+'</div>'+action('Сверить произношение','LessonRoom.reveal()');
    return h+'<div id="lessonFeedback" aria-live="polite"></div><div class="actions">'+(repairMode?'':action('Вернуться к примерам','LessonRoom.go(1)','subtle'))+'</div>';
  }
  function record(ok){
    if(!attempts){S.tries++;if(ok)S.correct++}
    attempts++;
    if(!ok){
      if(!S.errors.includes(sess.id))S.errors.push(sess.id);
      S.repairs??={};const pending=S.repairs[sess.id]??=[];
      if(!pending.includes(sess.exercise))pending.push(sess.exercise);
      S.repairs[sess.id]=pending;
    }
    save();
  }
  function message(ok,why,graded=true){
    if(answered)return;
    if(graded)record(ok);
    if(ok){
      answered=true;
      inside.querySelectorAll('.opt,.tokens button,#gap').forEach(b=>b.disabled=true);
    }
    $('lessonFeedback').innerHTML='<div class="'+(ok?'goodbox':'pitfall')+'"><strong>'+(ok?'Разбор ответа':'Попробуй ещё раз')+'</strong><p>'+esc(why)+'</p></div>'+(ok?action(repairMode?'Продолжить разбор':sess.exercise+1>=deck.length?'К своему ответу':'Следующее задание','LessonRoom.advance()'):'');
  }
  function active(){return deck[sess.exercise||0]}
  function choice(b,i){if(answered)return;const x=active();b.disabled=true;if(i===0)message(true,x.why);else message(false,x.k==='ear'?'Ты выбрал «'+x.opts[i]+'». Послушай запись ещё раз и обрати внимание на направление голоса.':x.k==='meaning'?'Этот перевод относится к другому примеру. Сверь действие и участников.':u.pitfall)}
  function pick(b,i){if(answered)return;b.disabled=true;picked.push(i);$('assembled').textContent=picked.map(j=>chunks(active().r)[j]).join('')}
  function clearOrder(){if(answered)return;picked=[];inside.querySelectorAll('.token').forEach(b=>b.disabled=false);$('assembled').textContent='Нажимай на части фразы по порядку'}
  function checkOrder(){if(answered)return;let p=chunks(active().r);if(picked.length!==p.length){$('lessonFeedback').textContent='Сначала используй все фрагменты.';return}const same=picked.map(j=>p[j]).join('')===p.join('');message(same,same?active().r.zh+' — '+active().r.ru:'Сравни порядок с исходной фразой: '+active().r.zh);if(!same)clearOrder()}
  function checkGap(){if(answered)return;let x=active(),v=plain($('gap').value);if(!v){$('lessonFeedback').textContent='Введи ответ или раскрой варианты.';return}message(v===x.key,v===x.key?x.r.zh+' — '+x.r.ru:'В исходном примере стоит '+x.key+'. '+u.how)}
  function evidence(){
    if(answered)return;const ids=Array.from(inside.querySelectorAll('.citation-list input:checked'),b=>+b.value),reason=$('reason').value.trim();
    if(!ids.length||!reason){$('lessonFeedback').textContent='Выбери хотя бы одну цитату и объясни её значение.';return}
    S.evidence??={};S.evidence[l.id]={ids,reason};save();message(true,'Сопоставь свой аргумент с разбором: '+u.feedback+' '+u.why,false);
  }
  function reveal(){let r=active().r;speak(r.zh);message(true,r.pinyin+' — '+r.ru,false)}
  function produce(){
    const q=esc(l.task);return '<div class="drilltitle"><span class="tag">Самостоятельная работа</span><h3>'+q+'</h3></div><textarea id="myOutput" placeholder="Твой вариант, пиньинь или заметка о произношении" aria-label="Самостоятельный ответ" oninput="LessonRoom.draft(this.value)">'+esc(S.drafts[l.id]||'')+'</textarea><div class="actions">'+action('Сверить с образцом','LessonRoom.compare()')+action('Я ответил вслух','LessonRoom.compare(true)','subtle')+'</div><div id="comparison" aria-live="polite"></div>';
  }
  function draft(text){S.drafts[l.id]=text;save()}
  function compare(oral=false){if(!oral&&!$('myOutput').value.trim()){$('comparison').textContent='Запиши свой вариант или выбери устный ответ.';return}
    $('comparison').innerHTML='<div class="sample"><small class="tag">Один из вариантов</small><p>'+esc(l.model)+'</p></div><p><b>Проверь свою формулировку.</b> '+esc(u.pitfall)+'</p><div class="actions">'+action('Сверил, завершить','finishLesson()')+action('Исправить ответ','LessonRoom.revise()','subtle')+'</div>';
  }
  function revise(){$('comparison').innerHTML='';$('myOutput').focus()}
  function go(step){sess.step=step;show()}
  function advance(){if(!answered)return;if(repairMode){
    const pending=(S.repairs?.[sess.id]||[]).filter(n=>n!==sess.exercise);
    if(pending.length)S.repairs[sess.id]=pending;
    else{if(S.repairs)delete S.repairs[sess.id];S.errors=S.errors.filter(id=>id!==sess.id)}
    save();repair();return;
  }if(sess.exercise+1===deck.length)go(3);else{sess.exercise++;show()}}
  function repair(){
    const id=S.errors.find(id=>byId[id]);if(!id){repairMode=false;render();popup('<h2>Ошибки разобраны</h2><p>Все задания из очереди пройдены.</p>'+action('Готово','closePop()'));return}
    repairMode=true;sess={id,step:2,exercise:S.repairs?.[id]?.[0]||0};show();
  }
  function start(id){repairMode=false;const c=S.checkpoint;sess=c?.id===id?{...c}:{id,step:0,exercise:0};show()}
  function show(){
    l=byId[sess.id];u=l.unit;rows=lessonRows(l);deck=challenges();
    sess.exercise=Math.min(Math.max(0,sess.exercise||0),deck.length-1);if(!repairMode){S.checkpoint={...sess};save()}
    const views=[explain,study,renderExercise,produce];popup((repairMode?'<span class="tag">Очередь ошибок</span><h2>'+esc(l.title)+'</h2>':header(sess.step))+views[sess.step]());
  }
  document.addEventListener('click',e=>{let b=e.target.closest('[data-fill]');if(b&&$('gap'))$('gap').value=b.dataset.fill});
  document.addEventListener('click',e=>{const b=e.target.closest('[data-lookup]');if(!b)return;const w=bank.get(b.dataset.lookup),out=b.closest('.sample').querySelector('.wordLookup');if(w&&out)out.innerHTML='<b>'+esc(w[0])+'</b> · '+esc(w[1])+' · '+esc(w[2])+' '+sound(w[0])});
  return {evidence,start,repair,show,go,advance,choice,pick,clearOrder,checkOrder,checkGap,reveal,draft,compare,revise};
})();
