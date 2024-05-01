import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex, escapeSvelte } from 'mdsvex'
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex({ extension: '.md' })],
  extensions: ['.svelte', '.md'],
}
