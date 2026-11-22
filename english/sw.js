const V='mwrfa0pr';
const ASSETS=["./","index.html","app.css?v=mwrfa0pr","app.js?v=mwrfa0pr","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","apple-touch-icon.png","data/start-1.js?v=mwrfa0pr","data/a1-1.js?v=mwrfa0pr","data/a1-2.js?v=mwrfa0pr","data/a1-3.js?v=mwrfa0pr","data/a2-1.js?v=mwrfa0pr","data/a2-2.js?v=mwrfa0pr","data/b1-1.js?v=mwrfa0pr","data/b1-2.js?v=mwrfa0pr","data/b2-1.js?v=mwrfa0pr","data/b2-2.js?v=mwrfa0pr","data/c1-1.js?v=mwrfa0pr","data/c1-2.js?v=mwrfa0pr"];
self.addEventListener('install',e=>{e.waitUntil(caches.open('ascend-'+V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=='ascend-'+V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request,{ignoreSearch:e.request.mode==='navigate'}).then(r=>r||fetch(e.request).then(res=>{ if(res.ok&&new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open('ascend-'+V).then(c=>c.put(e.request,cp));} return res; }).catch(()=>caches.match('index.html'))));
});
