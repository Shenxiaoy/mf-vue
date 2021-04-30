import config from '../../webpack/config'

const { mf: { mainScope: { url, scope, module: { commont } } } } = config.buildConfig
export const isdev = process.env.NODE_ENV === 'development'

// 动态获取共享域信息
export async function loadMain() {
    const container = window[scope]
    console.log(__webpack_init_sharing__, 'qqqqq')
    await __webpack_init_sharing__("default")
    await container.init(__webpack_require__.S.default)
    const factory = await container.get(commont);
    const Module = factory();
    console.log(Module)
    return Module;
}

// 开发环境远程引入共享js
export async function devLoadMain() {
    const result = await
    import ("mainSdk/commont")
    return result
}

export function structureApp(exposes, routes) {
    const { mountDom, addChildRoutes } = exposes
    if (isdev) {
        mountDom(routes)
    } else {

        addChildRoutes(routes)
    }
}