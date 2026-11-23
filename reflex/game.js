function createArena(canvas, mode, opt, onFinish, status){
 const c=canvas.getContext('2d'), k=mode.key,g=mode.g, diff=opt.diff;
 let W,H,t=0,last=0,paused=false,stopped=false,raf,clock=0,round=0,phase,targets=[],pointer=null,startPointer,firstMotion=null,previous,events=[],path=[],shots=[],hit=0,miss=0,expired=0,hold=0,track=0,up=false,word='',seq=[],progress=0,chain=[],sector,digit,removed,side,trail=[],lastBeat=-1,beatTime=0,period=720,beat=0,beatHits=0,beatTotal=0,beatDone=false,gradeTimes=[],offsets=[];
 const total=opt.seconds*1000, lime='#c4fa72', muted='#39463d', red='#ff886e';
 let seed=opt.seed>>>0;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296},int=n=>Math.floor(rand()*n);
 function size(){let b=canvas.getBoundingClientRect();W=b.width;H=b.height;let d=Math.min(2,devicePixelRatio||1);canvas.width=Math.round(W*d);canvas.height=Math.round(H*d);c.setTransform(d,0,0,d,0,0)}
 size();const obs=new ResizeObserver(size);obs.observe(canvas);
 const radius=()=>Math.max(opt.device==='touch'?17:10,Math.min(W,H)*.069)*(1.15-.14*diff);
 const at=(x,y,tag='',r=radius())=>({x,y,tag,r});
 const grid=(i,n=3)=>at((i%n+.5)/n,(Math.floor(i/n)+.5)/n,String(i),Math.min(W,H)/(n*3));
 const inside=(p,a)=>Math.hypot((p.x-a.x)*W,(p.y-a.y)*H)<=a.r;
 const say=s=>{word=s;status.hint.textContent=s};
 function newRound(){round++;progress=0;clock=t;firstMotion=null;startPointer=pointer;path=[];targets=[];phase='wait';up=false;
  if(g===2){phase='live';say(opt.device==='touch'?'Коснись цели и веди пальцем':'Веди прицел внутри цели');return}
  if(g===5){phase='beat';say(mode.desc);return}
  if(['seq','reverse','last','chain','missing'].includes(k)){phase='show';targets=Array.from({length:9},(_,i)=>grid(i));let count=3+diff;if(k==='chain'){if(!chain.length)chain=[int(9),int(9)];chain.push(int(9));seq=chain.slice()}else{seq=[];while(seq.length<count){let n=int(9);if(k==='missing'? !seq.includes(n):n!==seq.at(-1))seq.push(n)}}removed=seq[int(seq.length)];say('Запоминай');return}
  if(k==='periph'){phase='show';sector=int(4);digit=1+int(4);say('Запомни сектор и цифру');return}
  if(g!==0){appear();return}
  phase='wait';clock=t+350+rand()*1100;say('Жди сигнала')}
 function appear(){phase='live';clock=t;firstMotion=null;startPointer=pointer;path=[];let x=.14+.72*rand(),y=.17+.66*rand(),r=radius();side=round%2;
  if(k==='signal')x=y=.5;if(k==='peek'){x=side?.72:.28;y=.48}if(k==='micro'&&previous){x=Math.max(.12,Math.min(.88,previous.x+(rand()-.5)*.26));y=Math.max(.13,Math.min(.87,previous.y+(rand()-.5)*.28))}
  if(['switch','thumb'].includes(k))x=side?.17+rand()*.15:.68+rand()*.15;if(k==='small'||k==='micro')r*=.7;
  targets=[at(x,y,'',r)];previous=targets[0];up=(k==='friend'||k==='stop')&&rand()<.34;
  if(k==='search'||k==='order'){let ids=[0,1,2,3,4,5,6,7,8];for(let i=8;i>0;i--){let j=int(i+1);[ids[i],ids[j]]=[ids[j],ids[i]]}targets=ids.slice(0,k==='search'?9:4+diff).map((id,i)=>({...grid(id),tag:k==='search'?(i?'×':'•'):String(i+1)}))}
  if(k==='inverse'||k==='rule'){side=int(2);targets=[at(.25,.5,k==='rule'?'○':'←'),at(.75,.5,k==='rule'?'◇':'→')]}
  say(k==='inverse'?(side?'←  Жми наоборот':'→  Жми наоборот'):k==='rule'?(side?'Найди ромб':'Найди круг'):k==='order'?'Найди число 1':k==='stop'?'Дождись сплошного кольца':k==='friend'?'Крест пропускай':'Попади в цель')}
 function part(p){return at(Math.min(.999,Math.max(0,p.x)),Math.min(.999,Math.max(0,p.y)))}
 function record(ok,p,a,kind){if(ok)hit++;else miss++;let tt=Math.max(0,Math.round(t-clock));let e={ok,ms:tt,kind,x:p.x,y:p.y,tx:a?.x??p.x,ty:a?.y??p.y,motion:firstMotion,path:path.slice(-70)};if(events.length<450)events.push(e);shots.push({x:p.x,y:p.y,ok,t});if(ok&&['target','search'].includes(kind))gradeTimes.push(tt);if(opt.sound)tone(ok);if(opt.vib&&!ok)navigator.vibrate?.(18)}
 function answer(p){if(stopped||paused||t>=total)return;
  if(g===2)return;
  if(phase==='wait'||phase==='show'){record(false,p,null,'early');return}
  if(g===5){let nearest=t-beatTime;let index=beat;if(nearest>period/2){nearest-=period;index++}let ok=Math.abs(nearest)<Math.max(75,190-diff*32)&&index!==lastBeat&&(k!=='double'||index%2===0);if(ok){lastBeat=index;offsets.push(Math.round(nearest));beatHits++}record(ok,p,null,'beat');return}
  let idx=targets.findIndex(a=>inside(p,a)),a=targets[idx];
  if(phase==='sector'||phase==='digit'){let pick=idx;if(phase==='sector'&&pick===sector){phase='digit';targets=Array.from({length:4},(_,i)=>({...grid(i,2),tag:String(i+1)}));say('Какая цифра была в центре?');return}let ok=phase==='digit'&&pick===digit-1;record(ok,p,a,'periph');newRound();return}
  if(g===4){let solution=k==='missing'?[removed]:k==='last'?[seq.at(-1)]:k==='reverse'?seq.slice().reverse():seq;let ok=idx===solution[progress];record(ok,p,a,'memory');if(!ok)chain=[];if(!ok||++progress===solution.length)newRound();return}
  if(k==='inverse')idx=p.x>.5?1:0;
  let ok=idx>=0&&!up;if(k==='search')ok=idx===0;if(k==='order')ok=idx===progress;if(k==='inverse'||k==='rule')ok=idx===side;if(k==='stop'&&t-clock<420)ok=false;
  record(ok,p,targets[k==='order'?progress:k==='rule'||k==='inverse'?side:0],k==='search'?'search':k==='order'?'order':'target');
  if(k==='order'&&ok&&++progress<targets.length){say('Найди число '+(progress+1));return}
  if(ok||g===0||k==='rule'||k==='inverse')newRound()}
 function mover(){let s=t/1000*(.85+.32*diff),x=.5,y=.5;if(k==='strafe')x+=.35*Math.sin(s*2+.5*Math.sin(s*3));if(k==='jump'){x+=.26*Math.sin(s);y+=.31*(1-2*Math.abs(Math.sin(s*1.8)))}if(k==='orbit'||k==='eight'){x+=.31*Math.cos(s*1.8);y+=.30*Math.sin(s*(k==='eight'?3.6:1.8))}if(k==='bounce'){let tri=v=>1-4*Math.abs((v%1)-.5);x+=.38*tri(s*.42);y+=.35*tri(s*.33)}return at(x,y)}
 function ring(a,color=lime,tag=a.tag,filled=false){let x=a.x*W,y=a.y*H;c.beginPath();c.arc(x,y,Math.max(2,a.r),0,Math.PI*2);c.fillStyle=filled?color:color+'22';c.fill();c.lineWidth=2;c.strokeStyle=color;c.stroke();c.fillStyle=filled?'#142011':color;if(tag){c.font='bold '+Math.max(14,a.r*.85)+'px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(tag,x,y)}else{c.beginPath();c.arc(x,y,3,0,7);c.fill()}}
 function paint(){c.fillStyle='#101912';c.fillRect(0,0,W,H);c.fillStyle='#2d3b30';for(let x=12;x<W;x+=26)for(let y=12;y<H;y+=26)c.fillRect(x,y,1.5,1.5);
  if(k==='peek'){c.fillStyle='#29342c';c.fillRect(0,H*.25,W*.21,H*.5);c.fillRect(W*.79,H*.25,W*.21,H*.5)}
  if(g===2){let a=mover();ring(a,pointer&&inside(pointer,a)?'#79eaca':lime);if(pointer)ring({...pointer,r:6},'#ffffff');return}
  if(g===5){let d=t-beatTime,visible=k!=='blind'||beat<4,active=k!=='double'||beat%2===0;if(k==='cross'){c.fillStyle=lime;c.fillRect(W/2-1,H*.35,2,H*.3);ring(at(.5+.37*Math.sin(Math.PI*d/period)*(beat%2?-1:1),.5),lime)}else{let a=at(.5,.5,k==='blind'&&!visible?'♪':k==='double'&&active?'◎':'♪',32);ring(a,visible&&active&&d<160?lime:'#75877a',a.tag,visible&&active&&d<160)}return}
  if(phase==='show'&&k==='periph'){ring(at(.5,.5,String(digit)),lime);ring(grid(sector,2),lime,'',true);return}
  if(g===4){let step=Math.floor((t-clock)/540);targets.forEach((a,i)=>{let lit=k==='missing'?seq.includes(i)&&(phase==='show'||i!==removed):phase==='show'&&seq[step]===i&&(t-clock)%540<390;ring(a,lit?lime:'#708274','',lit)});return}
  if(phase==='wait'){ring(at(.5,.5,'+',10),'#657267');return}
  targets.forEach((a,i)=>{if(k==='order'&&i<progress)return;let tag=up?'×':a.tag,clr=up?red:lime;if(k==='stop'&&t-clock<420){tag='…';clr='#afbbb0'}ring(a,clr,tag,k==='stop'&&t-clock>=420&&!up)});
  shots=shots.filter(p=>t-p.t<170);shots.forEach(p=>ring({...p,r:8},p.ok?lime:red,p.ok?'·':'×'))}
 function tick(now){if(stopped)return;let dt=last?Math.min(now-last,100):0;last=now;if(!paused){t+=dt;if(t>=total){finish();return}
  if(phase==='wait'&&t>=clock)appear();
  if(phase==='show'){let duration=k==='periph'?650:k==='missing'?1400:seq.length*540;if(t-clock>=duration){clock=t;if(k==='periph'){phase='sector';targets=Array.from({length:4},(_,i)=>({...grid(i,2),tag:'?'}));say('В каком секторе была вспышка?')}else{phase='recall';say(k==='missing'?'Где исчезла отметка?':'Твой ход')}}}
  if(g===0&&phase==='live'&&t-clock>(k==='flash'?850:1600)-diff*150){if(up)hit++;else expired++;newRound()}
  if(k==='shrink'){targets[0].r=radius()*Math.max(.2,1-(t-clock)/1800);if(t-clock>1600){expired++;newRound()}}
  if(g===2){let a=mover();track+=dt;if(pointer&&inside(pointer,a))hold+=dt;if(!trail.length||t-trail.at(-1).t>160)trail.push({t:Math.round(t),x:a.x,y:a.y,px:pointer?.x,py:pointer?.y})}
  if(g===5&&t-beatTime>=period){beatTime+=period;beat++;if(k==='tempo')period=Math.max(320,720-45*Math.floor(beat/4));if(k!=='double'||beat%2===0)beatTotal++}
  paint();status.timer.textContent=Math.ceil((total-t)/1000)+' с';status.count.textContent=g===2?Math.round(100*hold/(track||1))+'%':hit+' / '+(hit+miss+expired)}
  raf=requestAnimationFrame(tick)}
 function point(e){let b=canvas.getBoundingClientRect();return part({x:(e.clientX-b.left)/W,y:(e.clientY-b.top)/H})}
 function move(e){pointer=point(e);if(phase==='live'&&!paused){if(startPointer&&firstMotion===null&&Math.hypot((pointer.x-startPointer.x)*W,(pointer.y-startPointer.y)*H)>3)firstMotion=Math.round(t-clock);if(!path.length||t-path.at(-1)[2]>18)path.push([pointer.x,pointer.y,t]);if(path.length>100)path.shift()}}
 canvas.onpointermove=move;canvas.onpointerdown=e=>{e.preventDefault();if(e.pointerType==='mouse'&&e.button!==0)return;pointer=point(e);if(e.pointerType!=='mouse')canvas.setPointerCapture(e.pointerId);answer(pointer)};
 canvas.onpointerup=e=>{if(e.pointerType!=='mouse')pointer=null};canvas.onpointerleave=()=>pointer=null;canvas.onpointercancel=()=>pointer=null;
 function stop(){stopped=true;cancelAnimationFrame(raf);obs.disconnect();document.removeEventListener('visibilitychange',hidden)}
 function pause(v){paused=v;last=0;status.pause(v)}function hidden(){if(document.hidden&&!paused)pause(true)}document.addEventListener('visibilitychange',hidden);
 function finish(){stop();let acc=g===2?hold/(track||1):g===5?beatHits/Math.max(1,beatTotal+1,beatHits+miss):hit/Math.max(1,hit+miss+expired);onFinish({key:k,device:opt.device,diff,seconds:opt.seconds,date:Date.now(),hit,miss,expired,accuracy:Math.min(100,Math.round(acc*100)),events,trail,hold:Math.round(hold),times:gradeTimes,offsets,seed:opt.seed})}
 newRound();raf=requestAnimationFrame(tick);return {stop,pause}}
let audioCtx;function tone(good){try{audioCtx||=new AudioContext();let o=audioCtx.createOscillator(),a=audioCtx.createGain();o.frequency.value=good?650:220;a.gain.value=.034;o.connect(a);a.connect(audioCtx.destination);o.start();a.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.06);o.stop(audioCtx.currentTime+.07)}catch{}}
