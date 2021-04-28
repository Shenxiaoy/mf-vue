export default {
    scope: 'shopSystem', // 方便以后配置项目作用域、css隔离等功能
    devConfig: {
        port: 8082
    },
    buildConfig: {
        mf: {
            mainScope: {
                url: 'http://localhost:8080/commont.js',
                scope: 'bsadmin',
                module: {
                    commont: './commont'
                }
            }

        }
    }
}