// node build.js — regenerates script list in index.html and sw.js precache
const fs=require('fs'),path=require('path');
const order=['start','a1','a2','b1','b2','c1','c2'];
const files=fs.readdirSync(path.join(__dirname,'data')).filter(f=>/\.js$/.test(f))
  .sort((a,b)=>{const [la,na]=a.replace('.js','').split('-'),[lb,nb]=b.replace('.js','').split('-');return order.indexOf(la)-order.indexOf(lb)||(+na)-(+nb);});
const v=Date.now().toString(36);
const tags=files.map(f=>`<script src="data/${f}?v=${v}"></script>`).join('\n');
let html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
html=html.replace(/<!--DATA-->[\s\S]*?<!--\/DATA-->/,`<!--DATA-->\n${tags}\n<!--/DATA-->`).replace(/(app\.(?:js|css))(\?v=\w+)?/g,`$1?v=${v}`);
fs.writeFileSync(path.join(__dirname,'index.html'),html);
const assets=['./','index.html',`app.css?v=${v}`,`app.js?v=${v}`,'manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png',...files.map(f=>`data/${f}?v=${v}`)];
let sw=fs.readFileSync(path.join(__dirname,'sw.js'),'utf8');
sw=sw.replace(/const V=.*?;/,`const V='${v}';`).replace(/const ASSETS=[\s\S]*?;\n/,`const ASSETS=${JSON.stringify(assets)};\n`);
fs.writeFileSync(path.join(__dirname,'sw.js'),sw);
console.log('files',files.length,'version',v);
