import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from '../App.vue'

Vue.use(VueRouter)
export const router = new VueRouter({
    routes
})

if (!window.mainRouter) {
    window.mainRouter = router
}

export const mainRouter = window.mainRouter

export function mountDom(routes = []) {
    routes.forEach(item => {
            router.addRoute(item)
        })
        /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })
}