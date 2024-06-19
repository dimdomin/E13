export default function buildLoaders() {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const svgLoader = {
		test: /\.svg$/i,
		use: ['@svgr/webpack'],
	};

	const babelLoader = {
		test: /\.(?:js|mjs|cjs)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const cssLoader = {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	};

	return [fileLoader, svgLoader, babelLoader, cssLoader];
}
