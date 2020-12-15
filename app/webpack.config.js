const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
	mode: 'development'
}
