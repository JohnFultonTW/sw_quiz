var webpack = require('webpack');
var path = require ('path');

module.exports = {
  resolve: {
    root: [path.resolve('./js'), path.resolve('./js/app')]
  },
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css?$/, loader: 'style-loader!css-loader'}
    ]
  },
	devtool: 'inline-source-map'
};
