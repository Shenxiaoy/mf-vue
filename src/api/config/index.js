import dbaseUrl from './dev.env.js'
import pbaseUrl from './prod.env.js'
import lbaseUrl from './local.env.js'

const globalEnv = 'local'
// let envObj = {}

let url = ""

if (globalEnv === 'env') {
    url = dbaseUrl
    // envObj = Object.assign({}, dev)
} else if (globalEnv === 'prod') {
    url = pbaseUrl
    // envObj = Object.assign({}, prod)
} else {
    url = lbaseUrl
    // envObj = Object.assign({}, local)
}
export default url