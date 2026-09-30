/* ============================================================
   service-worker.js  —  Offline support
   ------------------------------------------------------------
   Goal: after ONE visit with internet, the whole app opens and
   works with no connection at all — every lesson, quiz, the
   dashboard and revision sheets. Nothing in the app is loaded
   from another site, so everything it needs is cached here.

   Strategy:
     - Install: download every app file. If any core file fails,
       the install is abandoned and the previous version (with its
       complete cache) stays in charge — a half-downloaded update
       can never replace a working offline copy.
     - Page loads: answered from the cache first, so the app opens
       instantly offline and on weak signal. A fresh copy is
       fetched in the background for the next launch.
     - Files (CSS, JS, data, images): cache first, refreshed in
       the background.

   Why the redirect handling below matters:
     Cloudflare answers every *.html address with a redirect
     (/index.html -> /, /revision/unit-1.html -> /revision/unit-1).
     Browsers refuse to use a cached *redirected* response to open
     a page, so an offline launch of /index.html showed the
     "you're offline" error. Every cached copy is therefore stored
     as a plain 200 response, under both the old and new address.

   IMPORTANT: bump CACHE_VERSION whenever you change any app file,
   otherwise students keep seeing the old version.
   ============================================================ */

var CACHE_VERSION = "vpath-v32";
var CACHE = CACHE_VERSION + "-app";

/* Everything the app needs to run. All must download for an
   update to be accepted. */
var CORE = [
  "./",
  "manifest.json",

  "assets/css/tokens.css",
  "assets/css/main.css",
  "assets/css/sections.css",
  "assets/css/deep-guide.css",
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

  "js/store.js",
  "js/revision.js",
  "js/quiz.js",
  "js/dashboard.js",
  "js/glossary.js",
  "js/search.js",
  "js/deep-guide.js",
  "js/app.js"
];

/* Nice to have offline, but a missing one must not block an update. */
var EXTRA = [
  "index.html",

  "images/favicon-32.png",
  "images/apple-touch-icon.png",
  "images/icon-192.png",
  "images/icon-512.png",
  "images/icon-maskable-512.png",

  "revision/index.html",
  "revision/assets/revision.css",
  "revision/unit-1.html",
  "revision/unit-2.html",
  "revision/unit-3.html",
  "revision/unit-4.html",
  "revision/unit-5.html",
  "revision/unit-6.html"
];

/* Files are requested with cache-busting query strings (e.g.
   quiz.js?v=21). Matching with ignoreSearch means those still hit
   the cached copy instead of failing offline. */
var MATCH_OPTS = { ignoreSearch: true };

function absolute(url) {
  return new URL(url, self.registration.scope).href;
}

function withoutHashOrQuery(url) {
  var u = new URL(url);
  u.hash = "";
  u.search = "";
  return u.href;
}

/* Store a response as a plain 200 so it can always answer a page
   load, under the requested address and, if it was redirected,
   under the final address too. */
function put(cache, url, res) {
  if (!res || !res.ok || res.type === "opaqueredirect" || res.type === "opaque") {
    return Promise.resolve();
  }
  var finalUrl = res.url;
  var redirected = res.redirected;
  var headers = new Headers(res.headers);
  return res.blob().then(function (body) {
    var init = { status: 200, statusText: "OK", headers: headers };
    var jobs = [cache.put(url, new Response(body, init))];
    if (redirected && finalUrl && finalUrl !== url) {
      jobs.push(cache.put(finalUrl, new Response(body, init)));
    }
    return Promise.all(jobs);
  });
}

function download(cache, url) {
  var abs = absolute(url);
  return fetch(new Request(abs, { cache: "reload" })).then(function (res) {
    if (!res.ok) throw new Error("Could not download " + url + " (" + res.status + ")");
    return put(cache, abs, res);
  });
}

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(CORE.map(function (url) { return download(cache, url); }))
        .then(function () {
          return Promise.all(EXTRA.map(function (url) {
            return download(cache, url).catch(function () { /* optional file */ });
          }));
        });
    }).then(function () {
      return self.skipWaiting();
    }).catch(function (err) {
      // Throw away the partial cache so the old, complete one keeps working.
      return caches.delete(CACHE).then(function () { throw err; });
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Lets the page tell a waiting worker to take over immediately. */
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

/* The app is a single page with #/ routes, so any page load that is
   not one of the standalone revision sheets is answered by the app
   shell. */
function cachedPage(req) {
  return caches.match(withoutHashOrQuery(req.url), MATCH_OPTS).then(function (hit) {
    if (hit) return hit;
    var path = new URL(req.url).pathname;
    if (path.indexOf("/revision/") !== -1) return null;
    return caches.match(absolute("./")).then(function (shell) {
      return shell || caches.match(absolute("index.html"), MATCH_OPTS);
    });
  });
}

function offlineResponse() {
  return new Response(
    "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'>" +
    "<title>Offline</title><body style='font-family:system-ui;padding:32px;line-height:1.5'>" +
    "<h2>This page is not saved yet</h2>" +
    "<p>Open the app once with internet so it can finish saving itself for offline use.</p>" +
    "<p><a href='./'>Go to the home page</a></p>",
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.origin !== location.origin) return;   // never touch third-party requests

  // ---- Page loads: cache first, refresh in the background ----
  if (req.mode === "navigate") {
    e.respondWith(
      cachedPage(req).then(function (cached) {
        var network = fetch(req).then(function (res) {
          if (res && res.ok && res.type === "basic") {
            var copy = res.clone();
            e.waitUntil(caches.open(CACHE).then(function (c) {
              return put(c, withoutHashOrQuery(req.url), copy);
            }));
          }
          return res;
        });

        if (cached) {
          e.waitUntil(network.catch(function () {}));
          return cached;
        }
        return network.catch(function () { return offlineResponse(); });
      })
    );
    return;
  }

  // ---- Everything else: cache first, refresh in the background ----
  e.respondWith(
    caches.match(req, MATCH_OPTS).then(function (hit) {
      var network = fetch(req).then(function (res) {
        if (res && res.ok && res.type === "basic") {
          var copy = res.clone();
          e.waitUntil(caches.open(CACHE).then(function (c) {
            return put(c, withoutHashOrQuery(req.url), copy);
          }));
        }
        return res;
      });

      if (hit) {
        e.waitUntil(network.catch(function () {}));
        return hit;
      }
      return network.catch(function () {
        return new Response("", { status: 504, statusText: "Offline" });
      });
    })
  );
});
