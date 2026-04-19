const CACHE_NAME = 'stories-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests and skip browser extensions/etc
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Use a network-first strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache successful standard responses
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(async () => {
        // Fallback to cache if network fails
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // If it's a page navigation, we could return a custom offline page
        // For now, we just let the error propagate if nothing is found
        throw new Error('No network connection and resource not in cache');
      })
  );
});
