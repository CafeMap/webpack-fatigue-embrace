let WebapckFatigueEmbrace = require('../index')

let options = {
  libOnly: true,
  output: {
    library: 'WebpackFatigueEmbrace',
    libraryTarget: 'umd'
  },
  externals: [
    'react'
  ],
  plugins: {
    normal: [
      ['Define', { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }] // DefinePlugin
    ],
    optimize: [
      ['OccurrenceOrder'], // OccurrenceOrderPlugin
      ['UglifyJs', { compress: { warnings: false } }] // UglifyJs options
    ]
  }
}

let wfe = new WebapckFatigueEmbrace(options)
console.log(wfe)

module.exports = wfe
