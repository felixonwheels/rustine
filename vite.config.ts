import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
		}),
		sveltekit(),
	],

	server: {
		host: true,
		port: 8080,
		strictPort: true,
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
