const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const WebpackDevServer = require('webpack-dev-server')
const { ModuleFederationPlugin } = require('webpack').container
const mockApis = require('./utils/mockApiConfig').mockApis
const { merge } = require('webpack-merge')
const devServerConfig = {
    contentBase: '../dist',
    hot: true,
    host: 'localhost',
    before: mockApis
}
console.log('ggggg')
const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new ModuleFederationPlugin({
            name: 'child2',
            remotes: {
                mainSdk: 'bsadmin@http://localhost:8080/commont.js',
                // mainSdk: 'bsadmin@../public/test.js',
            },
            exposes: {

            },
            shared: {
                vue: {
                    singleton: true,
                },
                // lodash: {
                //     singleton: true,
                //     import: false
                // }
            }
        })
    ]
})
WebpackDevServer.addDevServerEntrypoints(devConfig, devServerConfig)

const compiler = webpack(devConfig)
const server = new WebpackDevServer(compiler, devServerConfig)
server.listen(8081, function() {
    console.log('browser open in http://www.localhost:8081')
})