import resolve from '@rollup/plugin-node-resolve';

const dir = "x";

export default [
	{
		input: [
			'@virtualstate/navigation/esnext/polyfill',
		],
		output: {
			dir,
			format: 'es',
			preserveModules: true,
			minifyInternalExports: false,
      entryFileNames: (chunkInfo) => {
				console.log('chunk', chunkInfo.name);
        return chunkInfo.name
          .replace('node_modules', '')
					.replace('/index','')
          + '.mjs';
      }
		},
		plugins: [
			resolve(),
		],
		preserveEntrySignatures: 'strict',
	},
]

