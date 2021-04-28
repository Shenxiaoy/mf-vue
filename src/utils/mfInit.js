import config from '../../webpack/config'

const { mf: { mainScope: { scope, module: { commont } } } } = config.buildConfig
const isdev = process.env.NODE_ENV === 'development'

// 动态获取共享域信息
export async function loadMain() {
    const container = window[scope]
    await __webpack_init_sharing__("default")
    await container.init(__webpack_require__.S.default)
    const factory = await container.get(commont);
    const Module = factory();
    console.log(Module)
    return Module;
}

export function structureApp(exposes, routes) {
    const { mountDom, addChildRoutes } = exposes
    if (isdev) {
        mountDom(routes)
    } else {
        addChildRoutes(routes)
    }
}