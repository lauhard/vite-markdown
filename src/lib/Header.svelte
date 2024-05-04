<script>
  import logo from "../assets/docker.svg";
</script>

<header>
  <nav>
    <figure>
      <img src={logo} class="logo svelte" alt="Docker Logo" />
    </figure>
    <h1>Docker 101</h1>
    <ul></ul>
  </nav>
</header>

<style>
  header {
    background-color: var(--background);
    width: 100%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
  figure > img {
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  ul > li {
  }
  ul > li > a {
    text-decoration: none;
    color: #333;
    padding: 1em;
  }
  ul > li > a:hover {
    background-color: #f4f4f4;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
</style>
