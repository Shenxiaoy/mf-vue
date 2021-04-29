const actions = {
    setMenus ({ commit, state }, menulist) {
        return new Promise((resolve) => {
            // const routes = filterAsyncRoutes(asyncRoutes, resources);
            commit('SET_ROUTES', menulist);
            resolve(menulist);
        });
        /*  获取后台给的权限数组 */
        // let permissionList = await fetchPermission()

        // /*  根据后台权限跟我们定义好的权限对比，筛选出对应的路由并加入到path=''的children */
        // let routes = recursionRouter(permissionList, dynamicRouter)
        // let MainContainer = DynamicRoutes.find(v => v.path === '')
        // let children = MainContainer.children
        // children.push(...routes)

        // /* 生成左侧导航菜单 */
        // commit('SET_MENU', children)

        // setDefaultRoute([MainContainer])

        // /*  初始路由 */
        // let initialRoutes = router.options.routes

        // /*  动态添加路由 */
        // router.addRoutes(DynamicRoutes)

        // /* 完整的路由表 */
        // commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
    },
    generateRoutes (state) {
        return state.menus
    },
    fedLogOut (state) {
        return state.menus
    }
};

export default actions;
