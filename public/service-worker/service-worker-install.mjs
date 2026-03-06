const cacheName = "my-site-cache";

const urls = [
    "/",
    "/index.html",
    "/app.mjs",
    "/app.css",
    "/components/createUser.mjs",
    "/components/deleteUser.mjs",
    "/components/editUser.mjs",
    "/components/dropboxClass.mjs",
    "/components/settingsClass.mjs",
     "/controllers/views.mjs",
    "/controllers/viewLoader.mjs",
    "/controllers/utils.mjs"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urls);
        })
    );
});

self.addEventListener("activate", () => {
    console.log("Service worker activated");
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});