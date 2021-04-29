import Vue from 'vue'
import Layout from '../components/layout'
import System from '../views/system'

export const routes = [{
        path: '/',
        component: Layout,
        name: 'layout',
        redirect: '/system',
        meta: {
            title: '首页'
        },
        children: [{
            path: '/system',
            component: System,
            meta: {
                title: '系统'
            }
        }]
    },
    {
        path: '/system1',
        component: System,
        meta: {
            title: '系统1'
        }
    }
]