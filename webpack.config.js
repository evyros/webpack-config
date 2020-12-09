const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'}),
	],
	mode: 'production',
	devtool: 'source-map'
};
