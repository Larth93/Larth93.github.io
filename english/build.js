// node build.js — regenerates script list in index.html and sw.js precache
const fs=require('fs'),path=require('path');
const order=['start','a1','a2','b1','b2','c1','c2'];
const files=fs.readdirSync(path.join(__dirname,'data')).filter(f=>/\.js$/.test(f))
  .sort((a,b)=>{const [la,na]=a.replace('.js','').split('-'),[lb,nb]=b.replace('.js','').split('-');return order.indexOf(la)-order.indexOf(lb)||(+na)-(+nb);});
const v=Date.now().toString(36);
const extra=fs.existsSync(path.join(__dirname,'extra'))?fs.readdirSync(path.join(__dirname,'extra')).filter(f=>f.endsWith('.js')).map(f=>'extra/'+f):[];
const all=[...files.map(f=>'data/'+f),...extra];
const vfiles=fs.existsSync(path.join(__dirname,'vocab'))?fs.readdirSync(path.join(__dirname,'vocab')).filter(f=>/^v-.*\.js$/.test(f)).map(f=>`vocab/${f}?v=${v}`):[];
let vtotal=0; global.addVocab=a=>vtotal+=a.length; vfiles.forEach(f=>{ try{ require(path.join(__dirname,f.split('?')[0])); }catch(e){ console.log('VOCAB BAD',f,e.message); } });
const tags=`<script>window.VOCAB_FILES=${JSON.stringify(vfiles)};window.VOCAB_TOTAL=${vtotal};</script>\n`+all.map(f=>`<script src="${f}?v=${v}"></script>`).join('\n');
let html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
html=html.replace(/<!--DATA-->[\s\S]*?<!--\/DATA-->/,`<!--DATA-->\n${tags}\n<!--/DATA-->`).replace(/(app\.(?:js|css))(\?v=\w+)?/g,`$1?v=${v}`);
fs.writeFileSync(path.join(__dirname,'index.html'),html);
const assets=['./','index.html',`app.css?v=${v}`,`app.js?v=${v}`,'manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png',...all.map(f=>`${f}?v=${v}`)];
let sw=fs.readFileSync(path.join(__dirname,'sw.js'),'utf8');
sw=sw.replace(/const V=.*?;/,`const V='${v}';`).replace(/const ASSETS=[\s\S]*?;\n/,`const ASSETS=${JSON.stringify(assets)};\n`);
fs.writeFileSync(path.join(__dirname,'sw.js'),sw);
console.log('files',files.length,'extra',extra.length,'vocab',vfiles.length,vtotal,'version',v);
