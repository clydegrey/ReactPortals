var FALLBACK_HTML_URL = '/offline.html';

var doNotCache = [{
    route: new RegExp('/admin/')
  },
  {
    route: new RegExp('/Admin/')
  },
  {
    route: new RegExp('/CMSPages/')
  }
];

var cacheAssets = [{
    route: /.*(?:googleapis|gstatic)\.com.*$/,
    cacheName: 'google-font'
  },
  {
    route: /.*(?:typekit)\.net.*$/,
  cacheName: 'typekit-fonts'
  },
  {
    route: /.*(?:fontawesome)\.com.*$/,
  cacheName: 'fontawesome'
  },
  {
    route: 'https://cdn.jsdelivr.net/npm/scrollreveal@4.0.5/dist/scrollreveal.min.js',
    cacheName: 'scrollReveal'
  },
  {
    route: 'https://cdn.jsdelivr.net/blazy/latest/blazy.min.js',
    cacheName: 'blazy'
  },
  {
    route: /\.(?:png|gif|jpg|svg)$/,
    cacheName: 'images-cache'
  },
  {
    route: new RegExp('/getmedia/(.*)'),
    cacheName: 'images-cache'
  }
];



function isHTML(routeData) {
  return (routeData.event.request.headers.get('accept').includes('text/html'));
}

function networkFirstWithOffline(args) {
  return fetch(args.event.request)
    .then(function (res) {
      return caches.open('dynamic-html-pages')
        .then(function (cache) {
          cache.put(args.event.request.url, res.clone());
          console.log('sw: 1');
          return res;
        })
    })
    .catch(function (err) {
      return caches.match(args.event.request)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            var key = workbox.precaching.getCacheKeyForURL(FALLBACK_HTML_URL);
            return caches.match(key)
              .then(function (res) {
                return res;
              });
          }
        }).catch(function (err) {
          console.log(err);
        });
    })
}

if ('workbox' in self) {

  cacheAssets.forEach(function (asset) {
    workbox.routing.registerRoute(asset.route, workbox.strategies.staleWhileRevalidate({
      cacheName: asset.cacheName
    }));
  });


  doNotCache.forEach(function (asset) {
    workbox.routing.registerRoute(
      asset.route, workbox.strategies.networkOnly()
    );
  });

  workbox.routing.registerRoute(isHTML, networkFirstWithOffline);

  console.log(self.__precacheManifest.length);
  console.table(self.__precacheManifest);

  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}