const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'}),
	],
	mode: 'production',
	devtool: 'source-map'
};
