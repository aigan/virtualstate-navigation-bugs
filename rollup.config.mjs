import resolve from '@rollup/plugin-node-resolve';
//import copy from 'rollup-plugin-copy';
//import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
//import typescript from '@rollup/plugin-typescript';

const dir = "x";

export default [
	{
		input: [
//			'@virtualstate/navigation/esnext/polyfill.js',
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
//			typescript({ compilerOptions:{outDir:dir}}),
			resolve(),
//			html({
//				flattenOutput: false,
//				rootDir: 'src',
//			}),
		],
		preserveEntrySignatures: 'strict',

	},
	
]
