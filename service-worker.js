/* ============================================================
   service-worker.js  —  Offline support
   ------------------------------------------------------------
   Strategy:
     - App shell (HTML, CSS, JS, data files): cache first, then
       update in the background. The site opens instantly and
       works with no signal.
     - Images: cache as they are used, up to a sensible limit.
     - Navigations: always fall back to index.html when offline,
       so every #/route still resolves.

   IMPORTANT: bump CACHE_VERSION whenever you change any file in
   PRECACHE, otherwise students keep seeing the old version.
   ============================================================ */

var CACHE_VERSION = "vpath-v16";
var SHELL_CACHE = CACHE_VERSION + "-shell";
var IMG_CACHE = CACHE_VERSION + "-img";

var MAX_IMAGES = 300;

var PRECACHE = [
  "./",
  "index.html",
  "manifest.json",

  "images/favicon-32.png",
  "images/apple-touch-icon.png",
  "images/icon-192.png",
  "images/icon-512.png",
  "images/icon-maskable-512.png",

  "assets/css/tokens.css",
  "assets/css/main.css",
  "assets/css/sections.css",
  "assets/css/deep-guide.css",
  "assets/css/events.css",
  "assets/css/revision.css",
  "assets/css/animations.css",

  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-theory-unit4.JS",
  "data/data-theory-unit5.JS",
  "data/data-theory-unit6.JS",
  "data/data-practical.JS",
  "data/data-why.JS",
  "data/data-qa.JS",
  "data/data-quiz.JS",
  "data/data-revision.JS",
  "data/events-data.js",

  "revision/index.html",
  "revision/assets/revision.css",
  "revision/unit-1.html",
  "revision/unit-2.html",
  "revision/unit-3.html",
  "revision/unit-4.html",
  "revision/unit-5.html",
  "revision/unit-6.html",

  "js/store.js",
  "js/revision.js",
  "js/quiz.js",
  "js/dashboard.js",
  "js/glossary.js",
  "js/search.js",
  "js/deep-guide.js",
  "js/events.js",
  "js/app.js"
];

/* Files are requested with cache-busting query strings in places
   (e.g. revision.css?v=15). Matching with ignoreSearch means those
   still hit the precached copy instead of failing offline. */
var MATCH_OPTS = { ignoreSearch: true };

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(function (c) {
        // addAll fails entirely if one file 404s, so add them one by one.
        return Promise.all(PRECACHE.map(function (url) {
          return c.add(url).catch(function () { /* skip missing file */ });
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf(CACHE_VERSION) !== 0) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Lets the page tell a waiting worker to take over immediately. */
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

/* Keep the image cache from growing without bound. */
function trimImageCache(cache) {
  cache.keys().then(function (keys) {
    if (keys.length <= MAX_IMAGES) return;
    for (var i = 0; i < keys.length - MAX_IMAGES; i++) cache.delete(keys[i]);
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.origin !== location.origin) return;   // never touch third-party requests

  // ---- Navigations: network first, fall back to the cached shell ----
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req, MATCH_OPTS).then(function (hit) {
          return hit || caches.match("index.html", MATCH_OPTS);
        });
      })
    );
    return;
  }

  // ---- Images: cache on first use ----
  if (/\.(png|jpg|jpeg|webp|gif|svg|ico)$/i.test(url.pathname)) {
    e.respondWith(
      // Icons are precached into the shell, so look there too.
      caches.match(req, MATCH_OPTS).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(IMG_CACHE).then(function (c) {
              c.put(req, copy);
              trimImageCache(c);
            });
          }
          return res;
        }).catch(function () { return hit; });
      })
    );
    return;
  }

  // ---- Everything else: cache first, refresh in background ----
  e.respondWith(
    caches.match(req, MATCH_OPTS).then(function (hit) {
      var network = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return hit;
      });
      return hit || network;
    })
  );
});
