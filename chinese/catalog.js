const Catalog=(()=>{
  let level=-1,kind='Все',page=0,query='',only='Все уроки';
  const size=12;
  const route=LEVELS.map((v,i)=>{
    const entries=v.lessons.map((lesson,j)=>({id:i+'-'+j,lesson}));
    const taught=entries.filter(e=>e.lesson.unit.kind!=='Практикум'&&e.lesson.unit.kind!=='Кейс');
    const contexts=entries.filter(e=>e.lesson.unit.kind==='Практикум');
    const cases=entries.filter(e=>e.lesson.unit.kind==='Кейс');
    // Space sentence practice between teaching topics instead of one long vocabulary block.
    const ordered=[];let used=0;
    taught.forEach((item,n)=>{
      ordered.push(item);
      const stop=Math.round((n+1)*contexts.length/taught.length);
      ordered.push(...contexts.slice(used,stop));used=stop;
    });
    ordered.push(...cases);return ordered.map(e=>e.id);
  });
  const routeAll=route.flat();
  function open(i=-1){level=i;page=0;query='';kind='Все';only='Все уроки';const cnt=i<0?lessons.length:route[i].length;
    popup('<span class="tag">Программа · '+cnt+' уроков</span><h2>'+(i<0?'Найти урок':esc(LEVELS[i].name))+'</h2><div class="catalog-controls"><input type="search" id="catalogInput" aria-label="Поиск уроков" placeholder="Например, кафе, тоны, 把…" oninput="Catalog.find(this.value)"><select aria-label="Ступень" id="catalogLevel" onchange="Catalog.level(+this.value)"><option value="-1">Все ступени</option>'+LEVELS.map((v,n)=>'<option value="'+n+'" '+(i===n?'selected':'')+'>'+levelLabel(n)+'</option>').join('')+'</select><select aria-label="Формат" onchange="Catalog.kind(this.value)">'+['Все','Основа','Разбор','Ситуация','Практикум','Кейс'].map(s=>'<option value="'+s+'">'+(s==='Все'?'Все форматы':s)+'</option>').join('')+'</select><select aria-label="Статус урока" onchange="Catalog.status(this.value)">'+['Все уроки','Ещё не пройдены','Пройдены','Закладки'].map(s=>'<option>'+s+'</option>').join('')+'</select></div><div id="catalogResult"></div><div id="catalogTools"></div>');list();
  }
  function list(){const pool=level<0?routeAll:route[level],q=norm(query);
    const filtered=pool.filter(id=>{let l=byId[id];return(kind==='Все'||kind===l.unit.kind)&&(only==='Все уроки'||(only==='Закладки'?(S.bookmarks||[]).includes(id):S.done.includes(id)===(only==='Пройдены')))&&(!q||norm(l.title+' '+l.unit.theme+' '+(l.unit.pattern||'')+' '+l.unit.rows.map(x=>[x.zh,x.ru,x.pinyin].join(' ')).join(' ')).includes(q))});
    const total=Math.ceil(filtered.length/size);page=Math.min(page,Math.max(0,total-1));
    $('catalogResult').innerHTML='<p class="metadata">Найдено: '+filtered.length+'</p>'+filtered.slice(page*size,(page+1)*size).map(id=>{let l=byId[id];return '<button class="line levelrow" onclick="startLesson(\''+id+'\')"><span><small>'+levelLabel(l.i)+' · '+esc(l.unit.kind)+(l.unit.kind==='Практикум'?' · '+esc(l.unit.theme):'')+'</small><b>'+esc(l.title)+'</b></span><span>'+(S.done.includes(id)?'✓':'›')+'</span></button>'}).join('')+(total>1?'<div class="pager"><button class="subtle" '+(!page?'disabled':'')+' onclick="Catalog.turn(-1)">Назад</button><span>'+(page+1)+' / '+total+'</span><button class="subtle" '+(page===total-1?'disabled':'')+' onclick="Catalog.turn(1)">Дальше</button></div>':'');
    $('catalogTools').innerHTML=level<0?'':'<div class="actions"><button class="subtle" onclick="Workshops.menu('+level+')">Слова ступени</button><button class="subtle" onclick="levelTest('+level+')">Проверка ступени</button><button class="subtle" onclick="readingShelf('+level+')">Чтение</button></div>';
  }
  function bookmark(id){S.bookmarks??=[];const present=S.bookmarks.includes(id);if(present)S.bookmarks=S.bookmarks.filter(x=>x!==id);else S.bookmarks.push(id);save();let b=$('bookmark');if(b){b.setAttribute('aria-pressed',String(!present));b.textContent=present?'В закладки':'В закладках ✓'}}
  function upcoming(from){const done=new Set(S.done);let begin=from?routeAll.indexOf(from)+1:0;return byId[routeAll.slice(begin).find(id=>!done.has(id))||routeAll.find(id=>!done.has(id))||routeAll[0]]}
  return {open,bookmark,upcoming,find(s){query=s;page=0;list()},level(i){level=i;page=0;list()},kind(s){kind=s;page=0;list()},status(s){only=s;page=0;list()},turn(d){page+=d;list();$('catalogResult').scrollIntoView({block:'start'})}};
})();
