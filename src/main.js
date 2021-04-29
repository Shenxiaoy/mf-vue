import Vue from 'vue'
// import App from './App.vue'
import routes from './router'

import { loadMain, structureApp } from './utils/mfInit'

(async function() {
    const mainSdk = await loadMain()
    const moduleContent = mainSdk.default
    structureApp(moduleContent, routes)
    console.log('333')
})()