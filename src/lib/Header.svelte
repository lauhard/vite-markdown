<script>
  import { onMount } from "svelte";
  import { insertSVG } from "./utils";
  export let title="Cheatsheet";  
  import git from './assets/git.svg'
  console.log("git",git)
  let figure;
  onMount(async () => {
    insertSVG(figure, git, '--accent');
  });
</script>

<header>
  <nav>
    <figure bind:this={figure}></figure>
    <h1 class="show"> {title}</h1>
  </nav>
</header>

<style>
  header {
    background-color: var(--background);
    width: 100%;
  }
  nav {
    top:0;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: var(--background);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    z-index: 9999;
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    margin: 0rem;
    padding: 0;
    top:0;
    left:1rem;
    z-index: 9999;
    height: 80px;
    max-height: 80px;
  }
  h1 {
    padding: .5em;
    font-size: 2rem;
    letter-spacing:0px;
    z-index: 9999;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }
  ul {
    display: flex;
    flex-direction: row;
  }

  ul > li > a {
    text-decoration: none;
    color: #333;
    padding: 1em;
  }
  ul > li > a:hover {
    background-color: #f4f4f4;
  }
  svg {
    width: 60px;
    max-width: 60px;
    height: 60px;
    max-height: 60px;
    padding: 0em;
    will-change: filter;
    transition: filter 300ms;
  }

  @media screen and (max-width: 768px){
  .show{
    display: none;
  }
}

</style>
