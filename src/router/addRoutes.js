import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from '../App.vue'
import Home from '../views/home'
import ant from 'ant-design-vue'
import store from '@/store'
import 'ant-design-vue/dist/antd.css'

const ss = {
    path: '/qq',
    component: Home,
    meta: {
        title: 'qq'
    }
}
export const router = new VueRouter({
    routes
})
export function dynamicMenu() {
    store.dispatch('setMenus', router.getRoutes()).then(() => {})
}
Vue.use(VueRouter)
Vue.use(ant)

if (!window.mainRouter) {
    window.mainRouter = router
}

export const mainRouter = window.mainRouter

// dev
export function mountDom(routes = []) {
    routes.forEach(item => {
        router.addRoute('layout', item)
    })
    router.addRoute('layout', ss)
    dynamicMenu()
        /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
}
// bundle
export function addChildRoutes(routes = []) {
    const mainRouter = window.mainRouter
    if (!mainRouter) {
        throw new Error('this main newRouter can not into window')
    }

    routes.forEach(item => {
        mainRouter.addRoute('layout', item)
    })
    dynamicMenu()

}