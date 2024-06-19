import path from 'path';
import buildWebpackConfig from './src/config/build/buildWebpackConfig/buildWebpackConfig.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default (env) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.js'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const PORT = env.port || 3000;
	const isDev = mode === 'development';

	const config = buildWebpackConfig({ paths, mode, port: PORT, isDev });

	return config;
};
