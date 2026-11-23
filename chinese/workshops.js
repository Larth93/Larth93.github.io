// Vocabulary workshops use the same word records and spaced-repetition queue as the dictionary.
const Workshops = (() => {
  const unitSize = 10;
  let session;
  const pools = new Map();
  function pool(level) {
    if (!pools.has(level)) pools.set(level, words.filter(word => word[3] === level));
    return pools.get(level);
  }
  function menu(level) {
    const available = pool(level);
    const count = Math.ceil(available.length / unitSize);
    const options = Array.from({length: count}, (_, i) => {
      const block = available.slice(i * unitSize, (i+1) * unitSize);
      const completed = block.every(w => S.cards[w[0]]?.n > 0);
      return '<option value="'+i+'">'+(i+1)+'. '+esc(block.slice(0,3).map(w=>w[0]).join(' · '))+(completed?' ✓':'')+'</option>';
    }).join('');
    popup('<span class="tag">'+levelLabel(level)+'</span><h2>Словарные занятия</h2><p>В этой ступени '+available.length+' слов и выражений. В каждом наборе до десяти карточек с произношением и проверкой перевода.</p><label class="line">Набор<select id="unit">'+options+'</select></label><div class="actions"><button class="btn" onclick="Workshops.start('+level+',+document.getElementById(\'unit\').value)">Начать набор</button><button class="subtle" onclick="openLevel('+level+')">К урокам</button></div>');
  }
  function start(level,index) {
    const selected=pool(level).slice(index*unitSize,(index+1)*unitSize);
    session={level,index,items:selected,pos:0,score:0,misses:[]};
    present();
  }
  function present() {
    let w=session.items[session.pos];
    popup('<span class="tag">'+levelLabel(session.level)+' · Набор '+(session.index+1)+' · '+(session.pos+1)+' / '+session.items.length+'</span><div class="flash"><div class="han">'+esc(w[0])+'</div><p>'+esc(w[1])+'</p>'+sound(w[0])+'<h2>'+esc(w[2])+'</h2></div><button class="btn" onclick="Workshops.next()">Запомнил, дальше</button>');
  }
  function next() {
    if(++session.pos<session.items.length){present();return}
    session.pos=0;session.items=shuffle(session.items);quiz();
  }
  function quiz(){
    const w=session.items[session.pos];
    const distractors=shuffle([...new Set(pool(session.level).map(x=>x[2]))].filter(x=>x!==w[2])).slice(0,2);
    const choices=shuffle([w[2],...distractors].map((v,i)=>[v,i]));
    popup('<span class="tag">Проверка · '+(session.pos+1)+' / '+session.items.length+'</span><h2>Вспомни перевод</h2><div class="flash"><span class="han">'+esc(w[0])+'</span> '+sound(w[0])+'</div>'+choices.map(([v,i])=>'<button class="opt" onclick="Workshops.answer('+i+')">'+esc(v)+'</button>').join('')+'<div id="unitAnswer"></div>');
  }
  function answer(i){
    const w=session.items[session.pos];
    inside.querySelectorAll('.opt').forEach(b=>b.disabled=true);
    if(i)session.misses.push(w);
    else session.score++;
    const existing=S.cards[w[0]];
    if(i||!existing||!existing.n)S.cards[w[0]]={n:i?0:1,due:Date.now()+(i?600000:86400000)};
    S.tries++;if(!i)S.correct++;award(i?1:3);
    $('unitAnswer').innerHTML='<p class="'+(i?'warn':'success')+'">'+(i?'Правильный ответ — '+esc(w[2]):'Верно!')+'</p><button class="btn" onclick="Workshops.advance()">Дальше</button>';
  }
  function advance(){
    if(++session.pos<session.items.length){quiz();return}
    render();
    popup('<span class="tag">Набор пройден</span><h2>'+session.score+' из '+session.items.length+'</h2><p>Карточки добавлены в расписание повторений.</p>'+session.misses.map(w=>'<div class="line"><b>'+esc(w[0])+'</b><span>'+esc(w[2])+'</span></div>').join('')+'<button class="btn band" onclick="Workshops.menu('+session.level+')">К наборам</button>');
  }
  return {menu,start,next,answer,advance};
})();
