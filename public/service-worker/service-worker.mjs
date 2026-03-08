const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/service-worker/service-worker-install.mjs");
            console.log("Service Worker registered:", registration);
        } catch (error) {
            console.error("Service Worker registration failed:", error);
        }
    }
}

export default registerServiceWorker;