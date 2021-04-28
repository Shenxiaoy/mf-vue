import Vue from 'vue'
import { routes } from '../router/routes'
// import { mountDom } from '../router'
import { mountDom } from '../router/addRoutes'
import { addChildRoutes } from './prodConfig'

console.log('main-object')
export default {
    routes,
    mountDom,
    addChildRoutes
}