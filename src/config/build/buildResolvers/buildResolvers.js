export default function buildResolvers({ paths }) {
	return {
		extensions: ['.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
