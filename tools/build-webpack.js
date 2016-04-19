import webpack from 'webpack'
import getConfig from '../webpack.config'
import colors from 'colors'

// this assures React is built in prod mode and that the Babel dev config doesn't apply.
process.env.NODE_ENV = 'production'

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue)

webpack(getConfig('production')).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.error(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.error(error.red))
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow)
    jsonStats.warnings.map(warning => console.warning(warning.yellow))
  }

  console.log(`Webpack stats: ${stats}`)

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green)

  return 0
})
