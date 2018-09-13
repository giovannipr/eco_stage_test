const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: common.entry,

  output: common.output,

  plugins: [
    new CleanPlugin([common.paths.prod], {
      root: common.paths.root,
    }),

    new ExtractTextPlugin({
      filename: '[name]-[hash].css',
    }),


    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      minChunks: ({ resource }) => (
        /node_modules\/react(-dom)?\//.test(resource)
      ),
    }),

    new HtmlPlugin(common.htmlPluginConfig),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
    }),
  ],

  module: {
    rules: [
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader,
      Object.assign({}, common.stylusLoader, {
        use: ExtractTextPlugin.extract({
          fallback: common.stylusLoader.use[0],
          use: common.stylusLoader.use.slice(1),
        }),
      }),
    ],
  },

  resolve: common.resolve,
}
