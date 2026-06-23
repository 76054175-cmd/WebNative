const CACHE_NAME = 'genesystech-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/estilos1.css',
  '/css/estilos2.css',
  '/app.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); })
    ))
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  // For navigation requests, try network first then fallback to cache (app shell)
  if (request.mode === 'navigate' || (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'))) {
    event.respondWith(
      fetch(request).then(res => {
        // Successful network - update cache
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return res;
      }).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // For other requests: cache-first, then network
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(networkRes => {
      // Cache GET responses for same-origin resources
      if (request.method === 'GET' && networkRes && networkRes.status === 200 && networkRes.type !== 'opaque') {
        const copy = networkRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return networkRes;
    }).catch(() => {
      // If image request and offline, return a simple placeholder response (optional)
      if (request.destination === 'image') {
        return new Response('', { status: 503, statusText: 'Offline' });
      }
    }))
  );
});
