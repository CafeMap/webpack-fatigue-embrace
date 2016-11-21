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

let wfe = new builder()

module.exports = wfe
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
