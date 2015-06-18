// webpack.config.js
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['.', 'node_modules', 'src', 'src/components']
  },
  externals: {
    "react" : "React"
  }
};