const path = require('path')
    // const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const deps = require('../package.json').dependencies
const { ModuleFederationPlugin } = require('webpack').container
const prodConfig = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'child2',
            // library: { type: 'var', name: 'stockt' },
            remotes: {
                mainSdk: 'bsadmin@http://localhost:8080/commont.js',
                // mainSdk: 'bsadmin@[window.bsadmin]/commont.js',
            },
            exposes: {},
            shared: {
                vue: {
                    singleton: true
                },
                // lodash: {
                //     singleton: true,
                //     import: false
                // }
            }
        })
    ],
    // optimization: {
    //     minimizer: [

    //     ]
    // }
})

module.exports = prodConfig