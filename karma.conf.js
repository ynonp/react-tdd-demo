var webpack = require('webpack');
var RewirePlugin = require("rewire-webpack");

module.exports = function (config) {
  config.set({
    customLaunchers: {
      chrome_react: {
        base: 'Chrome',
        flags: ['--load-extension=/Users/ynonperek/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.13.1_1/']
      }
    },

    browsers: [ 'chrome_react' ],

    singleRun: true,

    frameworks: [ 'mocha', 'chai-sinon' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        modulesDirectories: ['.', 'node_modules', 'src']
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ }
        ]
      },
      plugins: [
        new RewirePlugin()
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};
