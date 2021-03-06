const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const WebpackDevServer = require('webpack-dev-server')
const { ModuleFederationPlugin } = require('webpack').container
const mockApis = require('./utils/mockApiConfig').mockApis
const { merge } = require('webpack-merge')
const devServerConfig = {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host: 'localhost',
    before: mockApis
}
const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        // new ModuleFederationPlugin({
        //     filename: 'commont.js',
        //     name: 'bsadmin',
        //     library: { type: 'var', name: 'bsadmin' },
        //     exposes: {
        //         './commont': path.resolve(__dirname, './config/exposes.js')
        //     },
        //     shared: {
        //         vue: {
        //             singleton: true
        //         },
        //         // lodash: {
        //         //     singleton: true,
        //         //     shareKey: 'vue',
        //         //     shareScope: 'default'
        //         // }
        //     }
        // })
    ]
})
WebpackDevServer.addDevServerEntrypoints(devConfig, devServerConfig)

const compiler = webpack(devConfig)
const server = new WebpackDevServer(compiler, devServerConfig)
server.listen(8080, function() {
    console.log('browser open in http://www.localhost:8080')
})