const staticDevCoffee = "monfu-v1"
const assets = [
    "/",
    "/index.php",
    "/views/css/init.css",
    "/views/app.js",
    "views/css/theme.css"

]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
});
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});
