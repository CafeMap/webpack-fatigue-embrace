# Webpack Fatigue Embrace

**Build fatigue webpack config**

## Installation

```command
> npm install webpack-fatigue-embrace
```

## Uses

### webpack.config.js

```javascript
let builder = require('webpack-fatigue-embrace')

let options = {}
let customOptions = {}

let wfe = new builder(options, customOptions)

module.exports = wfe
```

## Options

|    Options    | Type |          Description          | Default | Done |
| -------------  | ---- |          -----------          | ------- | ---- |
|env|string|webpack build env|develop|Done|
|entry|string/array/function(dir)|setting entry point|'./src/index.js'|Done|
|vendor|object|setting vendor object|[]|Done|
|output|object|setting output object|{ path: path.resolve(__dirname, 'build'), filename: './bundle.js', publicPath: 'build' }|Done|
|module|object|setting bundle loader|{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }|Done|
|plugins|object|setting plugins|{ plugins: { normal: [], optimize: [] } }|Done|

## Plugin System

if you want to use webpack native plugin, you can just use module name like:

```javascript
// use webpack native plugin without optimize
let options = {
  plugins: {
    normal: [
      ['Define', { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }] // DefinePlugin
    ]
  }
}

// with optimize
let options = {
  plugins: {
    optimize: [
      ['OccurrenceOrder'] // OccurrenceOrderPlugin
    ]
  }
}
```

## Default Config

```javascript
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
```
