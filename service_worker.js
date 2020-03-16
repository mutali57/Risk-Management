//service worker supported
//call installl addEventListener
const cacheName = "m"
//const cacheAssets =['dash.html',"js/auth.js","js/dash.js"]

/*self.addEventListener('install', function(e){

  console.log ("Sevice worker:Installed");

/*  e.waitUntil(caches.open(cacheName).then(function(cache) {
    console.log('service worker: caching files')
    cache.addAll(cacheAssets). then(function(){
      self.skipWaiting()

    });
  }) );*/
/*})
 // call activate event
 self.addEventListener('activate', function(e){

   console.log ("Sevice worker:Activated");

// remove unwanted casches
e.waitUntil(caches.keys().then(function(cacheNames){
  return Promise.all(cacheNames.map( function(cache){
    if(cache!==cacheName){
      console.log("service worker clearing old cache");
      return caches.delete(cache);
    }
  }));

})
)
});
// catch fectch event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Make copy/clone of response
        const resClone = res.clone();
        // Open cahce
        caches.open(cacheName).then(cache => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});*/
