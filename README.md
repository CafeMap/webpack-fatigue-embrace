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
let wfe = new builder(options)

module.exports = wfe
```

## Default Config

```javascript
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
