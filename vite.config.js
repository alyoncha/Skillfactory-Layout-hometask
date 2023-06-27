import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import path from 'path'
// import viteImagemin from 'vite-plugin-imagemin'

// custom vite module
// import { convertImgToWebP as convert } from './vite-modules/convertImg'
// import { svgSp as svgSprite } from './vite-modules/svgSprite'

export default defineConfig(({ command, mode }) => ({
	build: {
		brotliSize: false,
		manifest: false,
		minify: mode === 'development' ? false : 'esbuild',
		sourcemap: mode === 'development' ? false : 'hidden',

		// rollupOptions: {
		// 	output: {
		// 		assetFileNames: '[ext]/[name][extname]',
		// 		chunkFileNames: 'chunks/[name].[hash].js',
		// 		entryFileNames: 'js/[name].js',
		// 	},
		// },
	},
	server: {
		port: 8080,
		host: '0.0.0.0',
		hmr: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		// convert(),
		// svgSprite(),
		// vue(),
		// viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: 'removeViewBox',
		// 			},
		// 			{
		// 				name: 'removeEmptyAttrs',
		// 				active: false,
		// 			},
		// 		],
		// 	},
		// }),
	],
}))
