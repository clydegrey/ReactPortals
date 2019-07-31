const swSupported = !!('serviceWorker' in navigator);
const notifcationsSupported = !!('Notification' in window);

export { swSupported, notifcationsSupported };
