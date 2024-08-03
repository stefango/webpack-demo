const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    // Tweak this to match your GitHub project name
    publicPath: '/webpack-demo/',
  },
};
