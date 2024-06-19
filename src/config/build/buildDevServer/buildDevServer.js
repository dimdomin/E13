export function buildDevServer({isDev, port}) {
	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: isDev
	};
}