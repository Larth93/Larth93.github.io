const version='reflexlab-v1',files=['./','./index.html','./style.css','./modes.js','./game.js','./extras.js','./ui.js','./icon.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(version).then(cache=>cache.addAll(files)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('reflexlab-')&&k!==version).map(k=>caches.delete(k)))).then(()=>clients.claim())));
self.addEventListener('fetch',event=>{let u=new URL(event.request.url);if(event.request.method!=='GET'||!u.href.startsWith(self.registration.scope))return;event.respondWith(caches.match(event.request,{cacheName:version,ignoreSearch:true}).then(hit=>hit||fetch(event.request)))});
