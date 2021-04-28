export function addChildRoutes(routes) {
    const mainRouter = window.mainRouter
    if (!mainRouter) {
        throw new Error('this main newRouter can not into window')
    }

    routes.forEach(item => {
        mainRouter.addRoute(item)
    })

}