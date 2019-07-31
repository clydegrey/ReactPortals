/*jslint devel: true */
// import debounce from 'lodash.debounce';
// import throttle from 'lodash.throttle';

// SCSS entry point
// import '../scss/style.scss';

// import blazy from './components/blazy.js'

// import Nav from './components/nav.js'
// import Tabs from './components/tabs.js'
// import Labels from './components/labels.js'
// import ToggleVisibility from './components/toggleVisibility.js'
// import EventAlert from './components/eventAlert.js'
// import QuickDonate from './components/quickDonate.js'
// import BackToTop from './components/backToTop.js'
// import CopyTable from './components/copyTable.js'
// import WrapIframes from './components/wrapIframes.js'
// import FileUpload from './components/fileUpload.js'
// import FormSubmit from './components/formSubmit.js'
// import NewsletterSubscription from './components/newsletterSubscription.js'
// import Gallery from './components/gallery.js'
// import ServiceWorkerRegistration from './service-workers/service-worker-registration'

import dynamicList from "./components/dynamicList";
import sticky from "./components/sticky";
import detailsSummary from "./components/deatilsSummary";
import MountComponents from "./react/MountComponents";
// const responsiveFunctions = () => {
//   const prevSize = document.body.dataset.size;

//   document.body.setAttribute('data-size', window.innerWidth);

//   // run these functions only if the breakpoint has been changed from desktop to mobile
//   if (prevSize <= 960 && window.innerWidth <= 960 ||
//     prevSize >= 960 && window.innerWidth >= 960) {
//     return
//   } else {
//     ToggleVisibility.checkSize();
//     Nav.checkSize();
//   }
// }

// const scrollFunctions = () => {
//   if (window.location.pathname != '/') {
//     BackToTop.checkScroll();
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  dynamicList.init();
  sticky.init();
  detailsSummary.init();
  MountComponents.init();

  // Tabs.init();
  // Labels.init();
  // ToggleVisibility.init();
  // EventAlert.init();
  // QuickDonate.init();
  // Nav.init();
  // BackToTop.init();
  // CopyTable.init();
  // WrapIframes.init();
  // FileUpload.init();
  // FormSubmit.init();
  // NewsletterSubscription.init();
  // Gallery.init();
  // responsiveFunctions();
});

// window.addEventListener('resize', debounce(() => {
//   responsiveFunctions();
// }, 150));

// window.addEventListener('scroll', throttle(() => {
//   scrollFunctions();
// }, 150));

// const register =  new ServiceWorkerRegistration({swPath : "/dc-service-worker-dev.js"});
// register.init();
