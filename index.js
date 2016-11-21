var path = require('path')
var webpack = require('webpack')

function isFunction(fn) {
  return typeof fn === 'function'
}

function assign(origin, insert) {
  return Object.assign({}, origin, insert)
}

function concat(origin, insert) {
  return origin.concat(insert)
}

let DefaultModule = {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
  ]
}

let DefaultDevEnvSetting = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './bundle.js',
    publicPath: 'build'
  },
  devtool: '#eval-source-map',
  module: DefaultModule
}

function WebapckFatigueEmbrace(options, customOptions) {
  if (customOptions) {
    this.customOptions = customOptions
  }
  if (options) {
    this.options = {}
    this.env = (isFunction(options.env) ? options.env(__dirname) : (process.env.NODE_ENV ? process.env.NODE_ENV : 'develop'))
    this.options.entry = isFunction(options.entry) ? options.entry(__dirname) : options.entry || './src/index.js'

    if (options.vendor) {
      this.options.vendor = ifFunction(options.vendor) ? options.vendor() : options.vendor
    }

    if (options.output) {
      this.options.output.path = isFunction(options.output.path) ? options.output.path(__dirname) : options.output.path || path.resolve(__dirname, 'build')
      this.options.output.filename = isFunction(options.output.filename) ? options.output.filename(__dirname) : options.output.filename || './bundle.js'
      this.options.output.publicPath = isFunction(options.output.publicPath) ? options.output.publicPath(__dirname) : options.output.publicPath || 'build'
    }

    if (options.module) {
      this.options.module = isFunction(options.module) ? options.module(__dirname) : assign({}, { loaders: concat(DefaultModule.loaders, options.module) }) || DefaultModule
    }

    if (options.plugins) {
      this.options.plugins = (function() {
        let plugins = []
        if (options.plugins.normal) {
          options.plugins.normal.forEach(function(key) {
            plugins.push(eval(`new webpack.${key}Plugin(${key.options})`))
          })
        }
        if (options.plugins.optimize) {
          options.plugins.optimize.forEach(function(key) {
            plugins.push(eval(`new webpack.optimize.${key}Plugin(${key.option})`))
          })
        }
        return plugins
      })()
    }
  }

  return this.devBuilder(DefaultDevEnvSetting)
}

let wfep = WebapckFatigueEmbrace.prototype

wfep.devBuilder = function(setting) {
  return Object.assign({}, DefaultDevEnvSetting, setting, this.customOptions, this.options)
}

module.exports = WebapckFatigueEmbrace
