var webpack = require('webpack');
var path = require ('path');

module.exports = {
  resolve: {
    root: [path.resolve('./js')]
  },
  entry: "index.js",
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: {
        cacheDirectory: true, presets: ['es2015']
      }}
    ]
  }
};
