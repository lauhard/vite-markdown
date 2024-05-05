<script>
  import { onMount } from "svelte";
  // @ts-nocheck
  import Header from "./lib/Header.svelte";
  // @ts-ignore
  import MdFile from "./lib/docker.md";
  //import './lib/helper.js';

  const handleClick = (e) => {
    let target = e.target;
    if (target.tagName === "I") {
      target = target.parentElement;
    }
    if (target.tagName === "BUTTON") {
      target = target.parentElement;
    }
    let code =target.nextElementSibling.children[0].textContent;
    console.info("copy-info:\n",code);
    // copy the text to the clipboard
    navigator.clipboard.writeText(code);
  };

  onMount(() => {
    let heading = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (let i = 0; i < heading.length; i++) {
      let id = heading[i].textContent
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      heading[i].setAttribute("id", id);
    }
    
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
      else
        language = "text";
   
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
      codeblockWrapper.parentNode.insertBefore(copyButtonWrapper,codeblockWrapper)

    }

    const copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    if (window.innerWidth < 768) {
      let codeBlocksMobile = document.querySelectorAll("code");
      for (let i = 0; i < codeBlocksMobile.length; i++) {
        codeBlocksMobile[i].addEventListener("touchstart", handleClick);
      }
    }
    //touch event for mobile devices
  });
</script>

<Header></Header>
<main>
  <MdFile />
</main>
