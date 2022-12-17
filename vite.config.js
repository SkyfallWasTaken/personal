import { sveltekit } from '@sveltejs/kit/vite';
import compress from 'vite-plugin-compress'
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [WindiCSS(), sveltekit(), compress]
};

export default config;
