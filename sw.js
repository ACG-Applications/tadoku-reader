/* ================================================================
   TADOKU READER — Service Worker (App Shell Offline Support)
   ================================================================ */

const CACHE_NAME = "tadoku-v5";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/variables.css",
  "./css/components.css",
  "./css/tadoku.css",
  "./js/data/readers.js",
  "./js/app.js",
  "./images/icons/icon-192.png",
  "./images/icons/icon-512.png",
];

// 1. Install & Cache the App Shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting(); // Activate immediately
});

// 2. Cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// 3. Fetch strategy: Cache First, then Network
self.addEventListener("fetch", (event) => {
  // Ignore cross-origin requests and non-GET requests
  if (
    !event.request.url.startsWith(self.location.origin) ||
    event.request.method !== "GET"
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      return fetch(event.request); // Fetch from network
    }),
  );
});
