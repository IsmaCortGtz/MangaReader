var APP_PREFIX = 'MangaReader_';
var VERSION = 'v_0.0.1';
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  "/manga-reader/",
  "/manga-reader/index.html",
  "/manga-readermanifest.json",
  "/manga-reader/js/backend.js",
  "/manga-reader/js/clickEvents.js",
  "/manga-reader/js/index.js",
  "/manga-reader/js/localStorage.js",
  "/manga-reader/js/components/ChapterCard.js",
  "/manga-reader/js/components/image.js",
  "/manga-reader/css/chaptersContainer.css",
  "/manga-reader/css/filePicker.css",
  "/manga-reader/css/index.css",
  "/manga-reader/css/reader.css",
  "/manga-reader/assets/icon.png"
]


self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      return request || fetch(e.request);
    })
  )
})



self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS)
    })
  )
})



self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})