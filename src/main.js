import Vue from 'vue'
// import App from './App.vue'
import routes from './router'

import { loadMain, structureApp, isdev, devLoadMain } from './utils/mfInit'

(async function() {
    // devLoadMain()
    const mainSdk = isdev ? await devLoadMain() : await loadMain()
    const moduleContent = mainSdk.default
    structureApp(moduleContent, routes)
})()