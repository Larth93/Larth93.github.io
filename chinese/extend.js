// Adapt each curriculum source to a single lesson shape before the app indexes it.
(() => {
  const lookup = new Map(EXTRA_WORDS.map(w=>[w[0],w.slice(0,3)]));
  const segmenter = typeof Intl.Segmenter==='function' ? new Intl.Segmenter('zh',{granularity:'word'}) : null;
  const split = text => segmenter ? Array.from(segmenter.segment(text),s=>s.segment) : Array.from(text);
  const row = ([zh,pinyin,ru]) => ({zh,pinyin,ru,chunks:split(zh)});
  function glossary(rows,level) {
    const found = new Map();
    for(const r of rows) for(const chunk of r.chunks||split(r.zh)) {
      const w=lookup.get(chunk);if(w)found.set(chunk,w);
    }
    return [...found.values()].sort((a,b)=>b[0].length-a[0].length).slice(0,5);
  }
  function insert(level,title,unit,question,options,task,model,words) {
    const r=unit.rows[0];
    LEVELS[level].lessons.push({title,unit,rule:unit.why,words:words?.length?words:glossary(unit.rows,level),example:[r.zh,r.pinyin||'',r.ru],question,options,task,model});
  }
  for (const [i,level] of LEVELS.entries()) for(const [j,l] of level.lessons.entries()) {
    const [why,how,pitfall,extra]=LESSON_NOTES[i][j];
    const context=i===0&&j===0?'Ты впервые видишь 马. Чтобы понять карточку, раздели три вещи: 马 — написание, mǎ — произношение, «лошадь» — перевод.':l.rule;
    l.unit={kind:'Основа',theme:'Основной курс',why,how,pitfall,where:context,rows:[row(l.example)],feedback:l.rule,extra};
    if(!i&&!j)l.unit.rows=l.words.map(row);
  }
  for(const group of ['foundation','intermediate','advanced','scenes']){
    for(const b of CURRICULUM[group]){
      const unit={kind:group==='scenes'?'Ситуация':'Разбор',theme:group==='scenes'?'Китайский в жизни':'Разбор конструкций',why:b.why,how:b.how,where:b.where,pitfall:b.pitfall,pattern:b.pattern,feedback:b.explain,rows:b.examples.map(row)};
      insert(b.level,b.title,unit,b.question,b.answers,b.task,b.model);
    }
  }
  for(const c of CURRICULUM.cases){
    const unit={kind:'Кейс',theme:'Чтение и аргументация',where:c.context,why:c.analysis,how:c.explain,pitfall:'Сверь свой вывод с исходным текстом. Найди формулировку, которая подтверждает ответ, и назови деталь, которую источник оставляет открытой.',feedback:c.explain,rows:[row([c.excerpt,'',c.translation])]};
    insert(c.level,c.title,unit,c.question,c.answers,c.task,c.model);
  }
  for(const c of CONTEXTS){
    const g=c.guide,rows=c.rows;
    const unit={kind:'Практикум',theme:g.label,why:g.why,how:g.how,where:g.where,pitfall:g.pitfall,feedback:g.feedback,pattern:c.target,rows,contrast:g.example?row(g.example):null};
    const last=rows[rows.length-1];
    insert(c.level,c.title,unit,g.question,g.choices,'Передай эту мысль по-китайски: «'+last.ru+'». Затем измени одну деталь и произнеси свой вариант. Объясни, какую роль здесь играет '+c.target+'.',last.zh,c.words);
  }
})();
