const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};