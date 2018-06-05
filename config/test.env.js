var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  DEBUG_MODE:true,
  API_KEY:'"/api"'
})
