function trendPanel(){
 const host=document.createElement('section');host.className='box';app.querySelector('.sub').after(host);
 const list=recent(),key=list[0]?.key||'signal';
 host.innerHTML='<h2>История упражнения</h2><div class="row"><select aria-label="Дисциплина для графика">'+modes.map(m=>'<option value="'+m.key+'">'+m.name+'</option>').join('')+'</select><span class="sub">Последние 12 сопоставимых раундов</span></div><div class="bars"></div><p class="sub trendnote"></p>';
 const pick=host.querySelector('select');pick.value=key;
 function update(){let m=find(pick.value),sample=list.find(h=>h.key===m.key),rows=sample?list.filter(h=>h.key===m.key&&h.seconds===sample.seconds&&h.diff===sample.diff).slice(0,12).reverse():[];
 host.querySelector('.bars').innerHTML=rows.map(r=>'<div title="'+new Date(r.date).toLocaleDateString('ru-RU')+'"><strong>'+r.accuracy+'%</strong><i style="height:'+Math.max(2,r.accuracy*.65)+'px"></i></div>').join('');
 host.querySelector('.trendnote').textContent=sample?labels[sample.diff]+' · '+sample.seconds+' с · лучший результат '+Math.max(...rows.map(r=>r.accuracy))+'%':'Пока нет результатов для этой дисциплины.'}pick.onchange=update;update();
}
function replay(r,e){
 drawMap(r,e);if(!e.path.length)return;
 const cv=$('map'),c=cv.getContext('2d'),pts=e.path,start=performance.now(),base=pts[0][2];
 const marker={};cv.replay=marker;
 function frame(now){if(!cv.isConnected||cv.replay!==marker)return;let elapsed=(now-start)*.5;
 let i=0;while(i+1<pts.length&&pts[i+1][2]-base<elapsed)i++;
 drawMap(r,{...e,path:pts.slice(0,i+1)});c.fillStyle='#fff';c.beginPath();c.arc(pts[i][0]*cv.width,pts[i][1]*cv.height,5,0,7);c.fill();if(i<pts.length-1)requestAnimationFrame(frame)}requestAnimationFrame(frame)
}
