import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
// import imageWatcherPlugin from './img-plugin.js'; // Import your custom plugin

export default defineConfig({
	plugins: [
		// imageWatcherPlugin(),
		enhancedImages(),
		sveltekit(),
		tailwindcss()
	],
	optimizeDeps: {
		// Force Vite to not cache these image-related modules
		exclude: ['vite-imagetools', 'imagetools-core']
	}
});
