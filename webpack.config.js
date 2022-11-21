const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	plugins: [new MiniCssExtractPlugin()],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist') 
		},
		port: 9000,
		hot: true
	}
}