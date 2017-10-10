var path = require('path');

var SRC_PATH = path.resolve(__dirname, 'src');
var DST_PATH = path.resolve(__dirname, 'dist');

var config = {
  entry: SRC_PATH + '/app/index.js',
  output: {
    path: DST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
}

module.exports = config;
