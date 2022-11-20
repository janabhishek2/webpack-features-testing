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
			}
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist') 
		},
		port: 9000
	}
}