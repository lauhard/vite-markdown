<script>
  import { onMount } from 'svelte';

  // @ts-ignore
  import logo from './assets/docker.svg'

  // @ts-nocheck
  // @ts-ignore
  import MdFile from './lib/docker.md';

  
  onMount(() => {
    let x = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(x);
    for (let i = 0; i < x.length; i++) {
      let id = x[i].textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
      x[i].setAttribute('id', id);
    }
  });
  
</script>

<main>
  <h1>Docker 101</h1>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={logo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <MdFile />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

</style>
