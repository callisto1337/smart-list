const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['env']
          }
        }
      }
    ]
  },
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
};