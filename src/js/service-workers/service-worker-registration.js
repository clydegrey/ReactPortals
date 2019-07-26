import { swSupported } from './sw-helpers';

class ServiceWorkerRegistration {
  constructor({ swPath }) {
    this.swPath = swPath;
  }
  register() {
    if (swSupported) {
      console.log('registered this Service Worker:', this.swPath);
      navigator.serviceWorker.register(this.swPath)
        .then(() => {
          console.log('new Workbox SW Registered');
        })
        .catch(e => console.log(`Error: ${e}`) );
    }
  }
  init() {
    this.register();
  }
}

export default ServiceWorkerRegistration;
