module.exports = {
  entry: './src/index.js',
  output: { 
    filename: 'index.js' ,
    libraryExport: 'default'
  },
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
