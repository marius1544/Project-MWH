const cacheName = "my-site-cache-v1";

const urls = [
    "/",
    "/index.html",
    "/app.mjs",
    "/app.css",
    "/manifest.json",

    "/components/createUser.mjs",
    "/components/deleteUser.mjs",
    "/components/editUser.mjs",
    "/components/dropboxClass.mjs",
    "/components/settingsClass.mjs",
    "/controllers/views.mjs",
    "/controllers/viewLoader.mjs",

    "/utils-folder/utils.mjs",
    "/utils-folder/fetchreq.mjs",
    "/utils-folder/settings-gear.png",

    "/views/createuserView.html",
    "/views/deleteuserView.html",
    "/views/dropboxView.html",
    "/views/edituserView.html",
    "/views/settingsView.html",

    "/public-localization/i18n-frontend-loader.mjs",
    "/service-worker-install.mjs",
    "/service-worker.mjs",
    "/dropbox-background.jpg",
    "/icons/logo.png"
]

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urls);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
        cacheNames.map(name => {
            if (name !==cacheName){
            return caches.delete(name);
            }
        })
    ))
    )
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