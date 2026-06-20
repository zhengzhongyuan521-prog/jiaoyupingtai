/* LinguaVerse Service Worker — 离线缓存核心资源 */
const VERSION = 'lv-v9.0.0';
const CORE_CACHE = `${VERSION}-core`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './bundle.js',
  './manifest.json',
  './icon.svg',
  './favicon.svg'
];

/* 安装：把核心资源一次性缓存 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* 激活：清理旧版本缓存 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* 拦截请求：网络优先（保证拿到最新版本），失败回退缓存 */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* 同源核心资源：网络优先，缓存兜底 */
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req).then((networkRes) => {
        const copy = networkRes.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
        return networkRes;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  /* 跨域资源（字体等）： stale-while-revalidate */
  event.respondWith(
    caches.open(RUNTIME_CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req).then((networkRes) => {
          cache.put(req, networkRes.clone());
          return networkRes;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
