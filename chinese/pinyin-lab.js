'use strict';

/* Native recordings are keyed by their source transcription, including tone. */
(() => {
  const entries = {
    ba1:['bā','八','восемь'], pa1:['pā','趴','лежать ничком'],
    dao1:['dāo','刀','нож'], tao1:['tāo','掏','доставать из кармана'],
    du4:['dù','度','градус'], tu4:['tù','兔','кролик'],
    ge1:['gē','哥','старший брат'], ke1:['kē','科','отделение, дисциплина'],
    ji1:['jī','鸡','курица'], qi1:['qī','七','семь'],
    zhi1:['zhī','汁','сок'], chi1:['chī','吃','есть'],
    zi4:['zì','字','письменный знак'], ci4:['cì','次','раз'],
    dan1:['dān','单','одиночный'], tan1:['tān','摊','прилавок'],
    gu3:['gǔ','鼓','барабан'], ku3:['kǔ','苦','горький'],
    jian4:['jiàn','见','видеть'], qian4:['qiàn','欠','быть должным'],
    zhao4:['zhào','照','освещать'], chao4:['chào','耖','рыхлить поле бороной'],
    zao3:['zǎo','早','рано'], zao4:['zào','皂','мыло'],
    shan1:['shān','山','гора'], san1:['sān','三','три'],
    shi1:['shī','诗','стихотворение'], si1:['sī','丝','шёлк'],
    zhai1:['zhāi','摘','срывать'], zai1:['zāi','栽','сажать растение'],
    chai1:['chāi','拆','разбирать'], cai1:['cāi','猜','угадывать'],
    zhang1:['zhāng','张','счётное слово для листов'], zang1:['zāng','脏','грязный'],
    shao3:['shǎo','少','мало'], sao3:['sǎo','扫','подметать'],
    xi1:['xī','西','запад'], qi2:['qí','骑','ехать верхом'],
    ju1:['jū','居','проживать'], qu1:['qū','区','район'], xu1:['xū','需','нуждаться'],
    nu3:['nǔ','努','прилагать усилия'], nv3:['nǚ','女','женщина'],
    lu4:['lù','路','дорога'], lv4:['lǜ','绿','зелёный'],
    yan1:['yān','烟','дым'], yang1:['yāng','央','середина'],
    jin1:['jīn','金','золото'], jing1:['jīng','京','столица'],
    chen2:['chén','沉','тонуть'], cheng2:['chéng','城','город'],
    shen1:['shēn','深','глубокий'], sheng1:['shēng','生','рождаться'],
    pin1:['pīn','拼','соединять'], ping1:['pīng','乒','пинг (в названии пинг-понга)'],
    ban1:['bān','班','группа'], bang1:['bāng','帮','помогать'],
    lan2:['lán','蓝','синий'], lang2:['láng','狼','волк'],
    li2:['lí','梨','груша'], li3:['lǐ','里','внутри'], li4:['lì','立','стоять'],
    shu1:['shū','书','книга'], shu2:['shú','熟','спелый'], shu3:['shǔ','数','считать'], shu4:['shù','树','дерево'],
    ma1:['mā','妈','мама'], ma2:['má','麻','конопля'], ma3:['mǎ','马','лошадь'], ma4:['mà','骂','ругать']
  };
  const groups = [
    {title:'Четыре движения голоса', hint:'Сравнивай высоту голоса на одной и той же гласной. Первый тон ровный и высокий, второй идёт вверх, третий уходит вниз к нижней части диапазона, четвёртый резко падает. У третьего тона на отдельном слоге часто слышен подъём в конце.', tip:'Положи палец на горло и пропой каждый слог без спешки. Затем произнеси его с обычной скоростью.', sets:[
      ['Четыре тона ma','ma1 ma2 ma3 ma4'],['Четыре тона shu','shu1 shu2 shu3 shu4'],['Три тона li','li2 li3 li4'],['Низкий или падающий?','zao3 zao4']
    ]},
    {title:'Согласные и придыхание',hint:'В парах b/p, d/t, g/k, j/q, zh/ch, z/c второй согласный произносится с заметным выбросом воздуха. Первый обычно тоже глухой. Озвончение по образцу русских «б» или «д» не передаёт главный контраст.',tip:'Поднеси ладонь к губам. При pā, tāo и kē должен ощущаться более сильный толчок воздуха, чем при bā, dāo и gē.',sets:[
      ['Губы · b / p','ba1 pa1'],['За верхними зубами · d / t','dao1 tao1'],['Та же пара в четвёртом тоне','du4 tu4'],['Задняя часть языка · g / k','ge1 ke1'],['Передняя часть языка · j / q','ji1 qi1'],['Кончик языка приподнят · zh / ch','zhi1 chi1'],['У зубов · z / c','zi4 ci4'],['Проверь d / t на другой финали','dan1 tan1'],['Проверь g / k с третьим тоном','gu3 ku3'],['Проверь j / q с четвёртым тоном','jian4 qian4'],['Проверь zh / ch перед ao','zhao4 chao4']
    ]},
    {title:'Где находится кончик языка?',hint:'Для s, z, c кончик языка направлен вперёд, к зубам. Для sh, zh, ch отведи его немного назад и приподними к участку за верхними зубами. При s и sh струя воздуха идёт непрерывно, при z и zh начинается со смычки.',tip:'Сначала прошепчи s и sh: так легче услышать разницу в шипении. После этого добавь гласную, сохраняя один и тот же тон.',sets:[
      ['s / sh перед an','san1 shan1'],['Слоги si / shi','si1 shi1'],['z / zh перед ai','zai1 zhai1'],['c / ch перед ai','cai1 chai1'],['z / zh перед ang','zang1 zhang1'],['s / sh перед ao','sao3 shao3']
    ]},
    {title:'Финали с n и ng',hint:'В конце -n кончик языка касается участка за верхними зубами. В конце -ng поднята задняя часть языка, кончик остаётся внизу. Окончание ng — единый носовой звук, отдельное «г» в конце не добавляется.',tip:'На секунду задержись в конце слога. Почувствуй, какая часть языка перекрывает выход воздуха через рот. В парах с an и ang меняется и оттенок гласной.',sets:[
      ['an / ang','ban1 bang1'],['in / ing','jin1 jing1'],['en / eng','chen2 cheng2'],['Тот же выбор после sh','shen1 sheng1'],['После придыхательного p','pin1 ping1'],['Начало на y','yan1 yang1'],['После l во втором тоне','lan2 lang2']
    ]},
    {title:'Гласная ü и мягкие согласные',hint:'Чтобы получить ü, удерживай язык как при «и», а губы округли как при «у». В nü и lü точки пишутся, чтобы отличать их от nu и lu. После j, q, x пишут обычную u, а произносят ü.',tip:'Начни со звука «и» и, не сдвигая язык назад, вытяни губы. Сравни lù и lǜ с одинаковым четвёртым тоном. В j, q и x кончик языка у нижних зубов, а передняя спинка приближается к твёрдому нёбу.',sets:[
      ['u / ü после n','nu3 nv3'],['u / ü после l','lu4 lv4'],['Точки скрыты после j, q, x','ju1 qu1 xu1'],['j / q / x с i','ji1 qi1 xi1'],['Два тона qi','qi1 qi2']
    ]}
  ];
  const sandhi = [
    {text:'你好',written:'nǐ hǎo',said:'ní hǎo',rule:'Перед другим третьим тоном первый третий в паре произносится как второй. В словарной записи оба слога сохраняют знак третьего тона.',wrong:['nǐ háo','nì hǎo']},
    {text:'很好',written:'hěn hǎo',said:'hén hǎo',rule:'Снова два третьих тона подряд. Первый поднимается, а второй сохраняет третий тон.',wrong:['hěn háo','hēn hǎo']},
    {text:'不是',written:'bù shì',said:'bú shì',rule:'Перед четвёртым тоном 不 меняет свой четвёртый тон на второй.',wrong:['bù shí','bū shì']},
    {text:'不忙',written:'bù máng',said:'bù máng',rule:'У 忙 второй тон. Перед ним у 不 сохраняется обычный четвёртый тон.',wrong:['bú máng','bù màng']},
    {text:'一个',written:'yī gè',said:'yí gè',rule:'Перед четвёртым тоном 一 в сочетании произносится со вторым тоном. В беглой речи 个 также может ослабляться.',wrong:['yì gè','yī gé']},
    {text:'一天',written:'yī tiān',said:'yì tiān',rule:'Перед первым, вторым или третьим тоном числительное 一 в таком сочетании меняется на четвёртый.',wrong:['yí tiān','yī tián']},
    {text:'第一',written:'dì yī',said:'dì yī',rule:'В порядковом числительном после 第 у 一 остаётся первый тон.',wrong:['dì yí','dì yì']}
  ];
  const groupSets = groups.map(group => group.sets.map(([label,keys]) => ({label,keys:keys.split(' ')})));
  let session, player, playbackId=0;
  function stopAudio(){
    playbackId++;
    if(player){player.pause();player=null;}
    window.speechSynthesis?.cancel();
  }
  function shell(heading,body){
    popup('<div id="pinyin-lab"><span class="tag">Лаборатория пиньиня</span><h2>'+heading+'</h2>'+body+'</div>');
  }
  function choice(action,label,primary=false){
    return '<button type="button" class="'+(primary?'btn':'opt')+'" data-lab="'+esc(action)+'">'+label+'</button>';
  }
  function soundButton(key){
    const [pin,han,meaning]=entries[key];
    return choice('play:'+key,icon('audio')+' <b lang="zh-Latn">'+pin+'</b> · <span lang="zh">'+han+'</span> · '+meaning);
  }
  function home(){
    stopAudio();session=null;
    shell('Услышать разницу','<p>Выбери звуки, которые хочешь разобрать. Сначала послушай примеры, затем определи слог по записи с закрытой подсказкой.</p>'+
      groups.map((g,i)=>choice('group:'+i,g.title)).join('')+
      choice('changes','Изменение тонов во фразе')+choice('mixed','Проверка вперемешку · 10 записей',true)+
      '<p class="metadata">Изолированные слоги записала диктор Ван Чэнь. <a style="color:var(--mint)" href="audio/lab/credits.txt" target="_blank" rel="noopener">Об аудио</a></p>');
  }
  function guide(index){
    stopAudio();session=null;
    const g=groups[index];
    shell(g.title,'<p>'+g.hint+'</p><p class="panel">'+g.tip+'</p>'+
      groupSets[index].map(set=>'<section><h3>'+set.label+'</h3><div class="actions">'+set.keys.map(soundButton).join('')+'</div></section>').join('')+
      '<div class="actions">'+choice('test:'+index,'Проверить слух',true)+choice('home','К темам')+'</div>');
  }
  function changes(){
    stopAudio();session=null;
    shell('Тоны в соседних слогах','<p>Знаки в словаре помогают узнать слово. В речи высота голоса зависит ещё и от следующего слога. Сравни запись отдельных слов с произношением во фразе.</p>'+
      sandhi.map(s=>'<section class="panel"><div class="row"><h3 lang="zh">'+s.text+'</h3>'+sound(s.text)+'</div><p>В словаре <b>'+s.written+'</b><br>В сочетании <b class="pinyin">'+s.said+'</b></p><p>'+s.rule+'</p></section>').join('')+
      '<p class="metadata">Фразы читает китайский голос устройства. Записи отдельных слогов доступны во всех темах лаборатории.</p><div class="actions">'+choice('ruleTest','Проверить правила',true)+choice('home','К темам')+'</div>');
  }
  function nativePlay(key,activated){
    stopAudio();
    const id=playbackId;
    // The first four ma recordings are also used by the first course lesson.
    const src=/^ma[1-4]$/.test(key)?'audio/'+key+'.mp3':'audio/lab/'+key+'.mp3';
    player=new Audio(src);
    player.playbackRate=Number(S.rate)||1;
    player.play().then(()=>{
      if(id===playbackId&&activated)activated();
    }).catch(error=>{
      if(id===playbackId&&error.name!=='AbortError')notice('Запись не воспроизвелась. Проверь звук и нажми «Послушать» ещё раз.');
    });
  }
  function buildQuiz(index){
    const pool=index<0?groupSets.flatMap((sets,group)=>sets.map(set=>({set,group}))):groupSets[index].map(set=>({set,group:index}));
    const items=shuffle(pool.flatMap(({set,group})=>set.keys.map(key=>({key,group,options:shuffle(set.keys),label:set.label}))));
    // Separate identical targets when the same syllable belongs to two contrasts.
    const seen=new Set(),unique=items.filter(q=>!seen.has(q.key)&&seen.add(q.key));
    return unique.slice(0,index<0?10:Math.min(6,unique.length));
  }
  function start(index,type='audio'){
    stopAudio();
    const questions=type==='rules'?shuffle(sandhi).map(s=>({rule:s,key:s.said,options:shuffle([s.said,...s.wrong])})):buildQuiz(index);
    session={index,type,questions,step:0,heard:false,answer:null,correct:0,mistakes:[],paid:false};
    question();
  }
  function question(){
    const q=session.questions[session.step],rules=session.type==='rules';
    const answered=session.answer!==null;
    const options=q.options.map(key=>{
      const label=rules?key:entries[key][0];
      const feedback=answered&&(key===q.key?' ✓':key===session.answer?' ✕':'');
      return '<button type="button" class="opt" data-lab="answer:'+esc(key)+'" '+(answered||(!rules&&!session.heard)?'disabled':'')+'>'+esc(label)+feedback+'</button>';
    }).join('');
    const result=answered?'<section role="status" class="panel"><h3>'+(session.answer===q.key?'Верно':'Разберём ответ')+'</h3><p>'+(rules?q.rule.rule:'Прозвучало <b>'+entries[q.key][0]+'</b> · '+entries[q.key][1]+' · '+entries[q.key][2]+'. '+groups[q.group].hint)+'</p></section>':'';
    const review=!rules&&answered?'<div class="actions">'+q.options.map(soundButton).join('')+'</div>':'';
    const lead=rules?'<p lang="zh" class="han">'+q.rule.text+'</p><p>Словарные тоны: '+q.rule.written+'. Как произнести сочетание?</p>':'<p>Нажми «Послушать», затем выбери, какой слог прозвучал. Запись можно повторять.</p>'+choice('blind',icon('audio')+' Послушать',true);
    shell(rules?'Как меняется тон?':'Какой слог прозвучал?',
      '<p class="metadata">Задание '+(session.step+1)+' из '+session.questions.length+'</p>'+track(session.step,session.questions.length)+lead+options+result+review+
      (answered?choice('next',session.step+1===session.questions.length?'Результат':'Дальше',true):'')+choice('home','К темам'));
  }
  function finish(){
    const s=session;
    if(!s.paid){s.paid=true;if(s.correct)award(s.correct*2);}
    const list=s.mistakes.length?'<h3>Ещё раз сравни</h3>'+s.mistakes.map(q=>q.rule?'<p lang="zh">'+q.rule.text+' · '+q.rule.said+'</p>':'<div class="actions">'+soundButton(q.key)+'</div>').join(''):'<p>Все ответы верны.</p>';
    shell('Тренировка завершена','<div class="flash"><b class="han">'+s.correct+' / '+s.questions.length+'</b><p>Верных ответов · +'+(s.correct*2)+' XP</p></div>'+list+'<div class="actions">'+choice('again','Новая попытка',true)+choice('home','К темам')+'</div>');
  }
  function handle(action){
    const sep=action.indexOf(':'),name=sep===-1?action:action.slice(0,sep),value=sep===-1?'':action.slice(sep+1);
    if(name==='home')return home();
    if(name==='group')return guide(Number(value));
    if(name==='changes')return changes();
    if(name==='play'&&entries[value])return nativePlay(value);
    if(name==='test'||name==='mixed')return start(name==='mixed'?-1:Number(value));
    if(name==='ruleTest')return start(-1,'rules');
    if(!session)return;
    if(name==='again')return start(session.index,session.type);
    const q=session.questions[session.step];
    if(!q)return;
    if(name==='blind')return nativePlay(q.key,()=>{
      if(session&&session.questions[session.step]===q&&!session.heard){
        session.heard=true;
        document.querySelectorAll('#pinyin-lab [data-lab^="answer:"]').forEach(b=>{b.disabled=false;});
      }
    });
    if(name==='answer'&&session.answer===null&&q.options.includes(value)&&(session.type==='rules'||session.heard)){
      session.answer=value;
      S.tries++;
      if(value===q.key){session.correct++;S.correct++;}else{session.mistakes.push(q);}
      save();question();
    }else if(name==='next'&&session.answer!==null){
      stopAudio();session.step++;session.answer=null;session.heard=false;
      if(session.step===session.questions.length)finish();else question();
    }
  }
  document.addEventListener('click',e=>{
    const button=e.target.closest('#pinyin-lab [data-lab]');
    if(button&&!button.disabled)handle(button.dataset.lab);
  });
  document.getElementById('modal')?.addEventListener('close',()=>{
    if(document.getElementById('pinyin-lab')){stopAudio();session=null;}
  });
  window.nativeClipFor = text => {
    const match = Object.entries(entries).find(([, values])=>values[1]===text);
    if(!match || (bank.has(text)&&bank.get(text)[1].toLowerCase()!==match[1][0].toLowerCase()))return null;
    return (/^ma[1-4]$/.test(match[0])?'audio/':'audio/lab/')+match[0]+'.mp3';
  };
  window.openPinyinLab=home;
})();
