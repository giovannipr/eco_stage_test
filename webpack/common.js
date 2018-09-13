const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  dev: join(__dirname, '..', 'src'),
  prod: join(__dirname, '..', 'bin'),
  cssAwesome: join(__dirname, '..', 'node_modules', 'font-awesome', 'css'),
  fontAwesome: join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts'),
  reactSelect: join(__dirname, '..', 'node_modules', 'react-select', 'dist'),
  flexBoxGrid: join(__dirname, '..', 'node_modules', 'flexboxgrid', 'dist'),
}
module.exports = {
  paths,

  entry: ['babel-polyfill', join(paths.dev, 'index')],

  output: {
    path: paths.prod,
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
  },

  htmlPluginConfig: {
    title: '..:: Telzir - Fale Mais ::..',
    template: join(paths.dev, 'index.html'),
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: paths.dev,
    use: 'babel-loader',
  },

  cssLoader: {
    test: /\.css$/,
    include: [
      paths.dev,
      paths.cssAwesome,
      paths.flexBoxGrid,
      paths.reactSelect,
    ],
    use: [
      'style-loader',
      'css-loader',
    ],
  },

  stylusLoader: {
    test: /\.styl$/,
    include: paths.dev,
    use: [
      'style-loader',
      'css-loader?modules',
      'stylus-loader'],
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt|pdf)(\?.*)?$/,
    include: [
      paths.dev,
      paths.fontAwesome,
    ],
    use: {
      loader: 'file-loader',
      query: {
        name: 'media/[name].[ext]',
      },
    },
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.dev,
    use: {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]',
      },
    },
  },

  resolve: {
    alias: {
      dev: paths.dev,
      lib: join(paths.dev, 'lib'),
      models: join(paths.dev, 'models'),
      reducers: join(paths.dev, 'reducers'),

      fontAwesome: join(paths.dev, 'css/font-awesome.min.css'),

      components: join(paths.dev, 'components'),
      API_ComponentsBase: join(paths.dev, 'API/Components/Base'),
    },
  },
}
