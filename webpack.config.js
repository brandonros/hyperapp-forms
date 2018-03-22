module.exports = {
  entry: './src/index.js',
  output: { filename: 'lib/index.js' },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ 'es2015' ]
        }
      }
    ]
  }
};
