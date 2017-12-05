/* global require process module __dirname */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV !== 'production';

const config = {
  context: path.resolve(__dirname, 'src'),
	entry: './App.jsx',

  output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
	},

  resolve: {
		extensions: ['.jsx', '.js', '.json', '.less'],
  },

  module: {
    rules: [
      {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'env', 'react' ],
            },
          },
        ],
			},
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: CSS_MAPS },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: CSS_MAPS },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  devtool: 'source-map',

  devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		publicPath: '/',
		contentBase: path.join(__dirname, 'build'),
    compress: true,
		historyApiFallback: true,
		open: true,
		openPage: '',
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		},
	},
};

module.exports = config;
