const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const libraryName = 'dices'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `${libraryName}.min.js`,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dice roll',
      favicon: 'favicon.png'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'favicon.png', to: '' }
      ]
    })
  ]
}
