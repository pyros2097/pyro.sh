const urlsToCache = ['/', '/index.html', '/assets/alpine.js', '/assets/logo.png', '/assets/styles.css'];  
const version = 'bible-v0.2.0';

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(version).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(version).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
