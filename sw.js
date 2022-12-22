var APP_PREFIX = 'MangaReader_';
var VERSION = 'v_0.1.0';
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./js/backend.js",
  "./js/clickEvents.js",
  "./js/index.js",
  "./js/localStorage.js",
  "./js/transaltor.js",
  "./js/components/ChapterCard.js",
  "./js/components/image.js",
  "./css/chaptersContainer.css",
  "./css/filePicker.css",
  "./css/index.css",
  "./css/reader.css",
  "./assets/icon.png",
  "./assets/SymbolsNerdFontMono.ttf"
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