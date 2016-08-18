const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

// App files location
const PATHS = {
  app: path.resolve(__dirname, './src/js'),
  styles: path.resolve(__dirname, './src/styles'),
  build: path.resolve(__dirname, './build'),
};

module.exports = {
  env: process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'main.jsx'),
    vendor: ['react'],
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  stats: {
    colors: true,
    reasons: true,
  },
  resolve: {
    // We can now require('file') instead of require('file.jsx')
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    // Shared code
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'eval',
};
