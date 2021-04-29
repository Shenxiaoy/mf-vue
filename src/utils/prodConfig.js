export function addChildRoutes(routes = []) {
    console.log('11111111111111')
    const mainRouter = window.mainRouter
    if (!mainRouter) {
        throw new Error('this main newRouter can not into window')
    }

    routes.forEach(item => {
            mainRouter.addRoute('layout', item)
        })
        // dynamicMenu()

}