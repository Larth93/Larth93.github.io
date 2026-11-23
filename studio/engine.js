const instruments=[['Kick','#ffb68c'],['Snare','#ff9dba'],['Hat','#efcf87'],['Open hat','#cbd991'],['808','#c5a1fb'],['Bell','#8bdbdb']];
const hz=n=>440*2**((n-69)/12);
function channels(){return instruments.map(()=>({volume:.7,pan:0,mute:false,solo:false,sample:null}))}
function blank(name){return {name,lanes:instruments.map(()=>Array(16).fill(null))}}
function demo(){
 const pats=['Intro','Groove','Fill'].map(blank);
 pats.forEach((p,i)=>{let add=(tr,step,n,d=1,v=.9,slide=null)=>p.lanes[tr][step]={n,d,v,slide};
 for(let [step,n] of [[0,76],[3,71],[6,74],[10,67],[14,71]])add(5,step,n,2,i===0?.65:.48);
 if(!i)return;for(let s of [0,6,10,14])add(0,s,36);for(let s of [4,12])add(1,s,38);for(let s of (i===2?[0,2,4,6,8,10,12,13,14,15]:[0,2,6,8,10,14]))add(2,s,42,1,s%4?.48:.85);add(3,11,46,1,.55);
 add(4,0,28,5);add(4,6,28,3);add(4,10,31,3);add(4,14,35,2,.84,i===2?23:null)});
 return {format:'xirofa-studio-1',title:'После полуночи',bpm:148,patterns:pats,song:[0,0,1,1,1,2,1,2],mix:channels()}
}
function master(ctx){let gain=ctx.createGain(),lim=ctx.createDynamicsCompressor();gain.gain.value=.75;gain.connect(lim);lim.connect(ctx.destination);return gain}
const noises=new WeakMap();
function noise(ctx){if(!noises.has(ctx)){let b=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),a=b.getChannelData(0),s=93;for(let i=0;i<a.length;i++){s=Math.imul(1664525,s)+1013904223>>>0;a[i]=s/2147483648-1}noises.set(ctx,b)}return noises.get(ctx)}
function voice(ctx,bus,tr,e,when,step,mix,samples){let m=mix[tr];if(m.mute||mix.some(x=>x.solo)&&!m.solo)return;
 let a=ctx.createGain(),pan=ctx.createStereoPanner?.();if(pan){pan.pan.value=m.pan;a.connect(pan);pan.connect(bus)}else a.connect(bus);
 let src,fx,base=hz(e.n),len=e.d*step,level=m.volume*e.v;
 if(m.sample&&samples[tr]){src=ctx.createBufferSource();src.buffer=samples[tr];src.playbackRate.value=tr<4?1:2**((e.n-60)/12);len=Math.min(src.buffer.duration/src.playbackRate.value,tr<4?3:len);if(e.slide!==null&&tr>=4)src.playbackRate.exponentialRampToValueAtTime(2**((e.slide-60)/12),when+len)}
 else if(tr===1||tr===2||tr===3){src=ctx.createBufferSource();src.buffer=noise(ctx);fx=ctx.createBiquadFilter();fx.type='highpass';fx.frequency.value=tr===1?1150:6400;len=[0,.145,.052,.28][tr];level*=tr===1?.8:.52}
 else{src=ctx.createOscillator();src.type=tr===5?'triangle':'sine';if(tr===0){src.frequency.setValueAtTime(155,when);src.frequency.exponentialRampToValueAtTime(39,when+.10);len=.23}else{src.frequency.setValueAtTime(base,when);if(e.slide!==null)src.frequency.exponentialRampToValueAtTime(hz(e.slide),when+len*.92);if(tr===5){len+=.18;level*=.47}}}
 len=Math.max(.015,len);let end=when+len;a.gain.setValueAtTime(.00001,when);a.gain.exponentialRampToValueAtTime(Math.max(.00002,level),when+.004);if(tr===4)a.gain.setValueAtTime(Math.max(.00002,level*.8),Math.max(when+.005,end-.045));a.gain.exponentialRampToValueAtTime(.00001,end);if(fx){src.connect(fx);fx.connect(a)}else src.connect(a);src.start(when);src.stop(end+.01);src.onended=()=>{src.disconnect();fx?.disconnect();a.disconnect();pan?.disconnect()}
}
function wave(b){let frames=b.length,buf=new ArrayBuffer(44+frames*4),v=new DataView(buf),str=(at,s)=>[...s].forEach((x,i)=>v.setUint8(at+i,x.charCodeAt(0)));str(0,'RIFF');v.setUint32(4,36+frames*4,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,b.sampleRate,true);v.setUint32(28,b.sampleRate*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,frames*4,true);for(let ch=0;ch<2;ch++){let a=b.getChannelData(ch);for(let i=0;i<frames;i++)v.setInt16(44+i*4+ch*2,Math.round(Math.max(-1,Math.min(1,a[i]))*32767),true)}return new Blob([buf],{type:'audio/wav'})}
