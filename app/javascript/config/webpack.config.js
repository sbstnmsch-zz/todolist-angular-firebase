/* globals module, require, process */
var
  webpack = require('webpack'),
  styleLoader,
  _isProduction = function() {

    return (
      process.argv.indexOf('--optimize-minimize') >= 0
    );
  },

  _plugins,
  ExtractTextPlugin = require('extract-text-webpack-plugin');

_plugins = [
  new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main'])
  ),
  new ExtractTextPlugin('../stylesheets/todolist.min.css'),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: _isProduction() ? '"production"' : '"development"'
    }
  })
];

if (_isProduction()) {
  styleLoader = ExtractTextPlugin.extract(
    'style-loader', 'css-loader'
  );
} else {
  styleLoader = 'style-loader!css-loader';
}

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'inline-source-map',
  entry: {
    main: ['./app/javascript/ng-todolist']
  },
  output: {
    path: './dist/javascript',
    filename: 'todolist.bundle.js'
  },
  resolve: {
    alias: {

    },
    modulesDirectories: [
      'app/javascript',
      'dist/stylesheets',
      'node_modules',
      'test/mock/javascript'
    ]
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    quiet: true,
    noInfo: true,
    watch: true,
    hot: true,
    inline: true
  },
  externals: {
    angular: 'angular',
    lodash: '_',
    Firebase: 'Firebase'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: styleLoader },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=runtime'}
    ]
  },
  plugins: _plugins
};
