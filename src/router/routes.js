import Vue from 'vue'
// import Home from '../views/home'
import System from '../views/system'

export const routes = [{
        path: '/',
        redirect: '/system',
        name: 'home'
    },
    // {
    //     path: '/home',
    //     component: Home,
    //     name: 'home'
    // },
    {
        path: '/system',
        component: System,
        name: 'system'
    }
]