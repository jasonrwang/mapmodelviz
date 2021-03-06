const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
       { from: './src/assets/', to: 'assets/' },
     ], {}),
  ],
  devtool: 'inline-source-map',
  // mode: "development"
});
