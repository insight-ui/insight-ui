const path = require('path')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackCommonConfig = require('./webpack.common')

const developmentConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    })
  ]
}

module.exports = webpackMerge(developmentConfig, webpackCommonConfig)
