const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache: string[] = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/public/images/illustrator.webp'
];

self.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache: Cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(
        caches.match(event.request)
            .then((response: Response | undefined) => {
                return response || fetch(event.request);
            })
    );
});