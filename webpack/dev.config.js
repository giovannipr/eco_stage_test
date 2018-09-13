const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3002',
    'webpack/hot/only-dev-server',
  ].concat(common.entry),

  output: Object.assign({}, common.output, {
    filename: '[name].js',
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),

    new HtmlPlugin(common.htmlPluginConfig),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

  ],

  module: {
    rules: [
      common.jsLoader,
      common.cssLoader,
      common.stylusLoader,
      common.fileLoader,
      common.urlLoader,
    ],
  },

  resolve: common.resolve,
}
