/**
 * @description: 过滤路由
 * @param {<Array>} routes 需要过滤的路由列表
 * @param {<Array>} newRoutes 容器列表
 * @return: {<Array>}
 */
export function filterRoutes(routes = [], newRoutes = [], parentPath = "") {
    routes.forEach(route => {
        let obj = {};
        parentPath = parentPath === "/" ? "" : parentPath;
        const path = route.path.startsWith("/") ? route.path : `/${route.path}`;
        if (route.meta) {
            obj = {
                ...route.meta,
                path: `${parentPath}${path}`
            };
            newRoutes.push(obj);
        }
        if (route.children) {
            if (route.meta && route.meta.icon) {
                obj.children = [];
            }
            filterRoutes(route.children, obj.children || newRoutes, `${parentPath}${path}`);
        }
    });
    return newRoutes;
}