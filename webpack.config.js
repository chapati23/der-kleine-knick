import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

function getEntry(env) {
  const entry = []
  if (env === 'development') {
    entry.push('webpack-hot-middleware/client')
  }
  entry.push('./src/index')
  return entry
}

function getPlugins(env) {
  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(env), __DEV__: env === 'development'}) // Tells React to build in prod mode
  ]

  switch (env) {
    case 'production':
      plugins.push(new ExtractTextPlugin('styles.css', { allChunks: true }))
      plugins.push(new webpack.optimize.DedupePlugin())
      plugins.push(new webpack.optimize.UglifyJsPlugin())
      break

    case 'development':
      plugins.push(new webpack.HotModuleReplacementPlugin())
      plugins.push(new webpack.NoErrorsPlugin())
      break
  }

  return plugins
}

function getLoaders(env) {
  const loaders = [{
    test: /\.js$/,
    include: path.join(__dirname, 'src'),
    loaders: ['babel', 'eslint']
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file']
  }]

  if (env === 'production' ) {
    // generate separate physical stylesheet for production build using ExtractTextPlugin.
    // This provides separate caching and avoids a flash of unstyled content on load.
    loaders.push({
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    })
  } else {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
    })
  }

  return loaders
}

function getConfig(env) {
  return {
    debug: true,
    devtool: env === 'production'  ? 'source-map' : 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, // set to false to see a list of every file being bundled.
    entry: getEntry(env),

    output: env === 'test' ? {
      libraryTarget: 'commonjs2'
    } : {
      path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
      publicPath: '',
      filename: 'bundle.js'
    },

    module: { loaders: getLoaders(env) },
    plugins: getPlugins(env),
    target: env === 'test' ? 'node' : 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    postcss: [
      require('autoprefixer'),
      require('postcss-calc'),
      require('postcss-nested')
    ]
  }
}

export default getConfig
