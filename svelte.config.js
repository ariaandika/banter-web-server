import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
        alias: { "$/*": "./src/*" },
		adapter: adapter({ fallback: 'spa.html' })
	}
};

export default config;
