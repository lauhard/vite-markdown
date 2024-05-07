<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./lib/Header.svelte";
  // @ts-ignore
  import MdFile from "./lib/index.md";
  import { copy2ClipBoard, getMetaInfo, smoothScroll2Anchor } from "./lib/utils";

  const handleClick = async (e) => {
    await copy2ClipBoard(e);
  };

  const styleCodeBlock = () => {
    let codeBlocks = document.querySelectorAll("pre code");
    for (let i = 0; i < codeBlocks.length; i++) {
      //get the current code block
      let codeblock = codeBlocks[i];

      //read the class name of the code block
      let language = codeblock.className;

      //check if the classname contains language-
      if (language.includes("language-"))
        //get the language name
        language = language.replace("language-", "");
      else language = "text";

      //create an span element for displaying the language
      let languageElement = document.createElement("span");
      languageElement.className = "language-description";
      languageElement.textContent = language;

      //create a copy button
      let copyButton = document.createElement("button");
      copyButton.className = "copy-button";

      //create font awesome icon
      let icon = document.createElement("i");
      icon.className = "fa-solid fa-copy";
      copyButton.appendChild(icon);

      //create a wrapper for the copy button
      let copyButtonWrapper = document.createElement("div");
      copyButtonWrapper.className = "copy-button-wrapper";

      //append the copy button to the wrapper
      copyButtonWrapper.appendChild(copyButton);

      //append the language element to the wrapper
      copyButtonWrapper.appendChild(languageElement);

      //insert the copy button wrapper before the code block
      let codeblockWrapper = codeblock.parentElement;
      codeblockWrapper.parentNode.insertBefore(
        copyButtonWrapper,
        codeblockWrapper
      );
    }

    const copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  };

  let y = 0;
  $:metadata = {} as Record<string, string>;

  onMount(async() => {
    const metaInfo = await getMetaInfo();
    metadata = metaInfo[0].metadata;

    styleCodeBlock();

    smoothScroll2Anchor();

  });

</script>

<!-- on scroll -->

<svelte:window bind:scrollY={y} />

<Header title={metadata.title}></Header>

<main>
  <MdFile />
</main>
