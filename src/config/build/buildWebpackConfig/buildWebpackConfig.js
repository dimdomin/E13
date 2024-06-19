import { buildDevServer } from '../buildDevServer/buildDevServer.js';
import buildLoaders from '../buildLoaders/buildLoaders.js';
import buildPlugins from '../buildPlugins/buildPlugins.js';
import buildResolvers from '../buildResolvers/buildResolvers.js';

export default function buildWebpackConfig(options) {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.buld,
			clean: true,
		},
		plugins: buildPlugins(options),

		module: {
			rules: buildLoaders(options),
		},

		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: buildDevServer(options),
	};
}
