import { cloneDeep } from 'lodash';
import { staticRoutes, asyncRoutes } from '../router';
// import { userInfoObj } from '@/utils';

/**
 * @description: 有无权限
 * @param {<Array>} resources 菜单权限列表
 * @param {<Function>} route
 * @return: {<boolean>}
 */
function hasPermission(resources, route) {
  if (route.meta && route.meta.permissions) {
    return resources.some((resourceCode) => route.meta.permissions.includes(resourceCode));
  }
  return true;
}

/**
 * @description: 过滤动态路由
 * @param {<Array>} routes 需要过滤的路由列表
 * @param {<Array>} resources 菜单权限列表
 * @return: {<Array>}
 */
function filterAsyncRoutes(routes, resources) {
  const arr = [];
  routes.forEach((route) => {
    const routeObj = cloneDeep(route);
    if (routeObj.children) {
      routeObj.children = filterAsyncRoutes(routeObj.children, resources);
    }
    if (hasPermission(resources, routeObj)) {
      // if (routeObj.path === 'draw') {
      //   if (userInfoObj().loginName === 'liyuncong') {
      //     arr.push(routeObj);
      //   } else {
      //     arr.push({
      //       ...routeObj,
      //       meta: {
      //         ...routeObj.meta,
      //         is404: true,
      //       },
      //       component: () => import('@/views/not-found'),
      //     });
      //   }
      // } else {
      arr.push(routeObj);
      // }
    } else {
      arr.push({
        ...routeObj,
        meta: {
          ...routeObj.meta,
          is403: true
        },
        [routeObj.children ? undefined : 'component']: () => import('../views/not-permission')
      });
    }
  });
  return arr;
}

export function getDefaultState() {
  return {
  };
}

export default {
  namespaced: true,
  state: {
    ...getDefaultState(),
    routes: undefined
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = staticRoutes.concat(routes);
    }
  },
  actions: {
    filterAsyncRoutes({ commit }, resources) {
      return new Promise((resolve) => {
        const routes = filterAsyncRoutes(asyncRoutes, resources);
        console.log('routes', routes)
        commit('SET_ROUTES', routes);
        resolve(routes);
      });
    }
  }
};
