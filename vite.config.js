import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export let blub = 'blub';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      svelte({
        //svelte.config.js preprocess
        configFile: './svelte.config.js',
      }),
  ],
  base: '/'
})
