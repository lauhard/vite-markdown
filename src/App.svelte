<script>
  import { onMount } from 'svelte';

  // @ts-ignore

  // @ts-nocheck
  import Header from './lib/Header.svelte';
  // @ts-ignore
  import MdFile from './lib/docker.md';

  
  onMount(() => {
    let heading = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (let i = 0; i < heading.length; i++) {
      let id = heading[i].textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
      heading[i].setAttribute('id', id);
    }
  });
  
</script>

<Header></Header>
<main>
  <MdFile />
</main>

