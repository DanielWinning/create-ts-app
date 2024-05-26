const path = require('path');

const entries = {
	componentUI: './src/app.ts'
}

module.exports = () => {
	return {
		entry: entries,
		resolve: {
			extensions: ['.ts', '.js', '.css', '.scss']
		},
		watchOptions: {
			poll: true,
			ignored: /node_modules/
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'public/assets/')
		}
	}
}