let WebapckFatigueEmbrace = require('../index')

let options = {
  plugins: {
    optimize: ['OccurrenceOrder']
  }
}

let wfe = new WebapckFatigueEmbrace(options)

module.exports = wfe
