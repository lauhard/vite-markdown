console.log("helper.js");

export let copyButtonList = document.querySelectorAll('.copy-button');

copyButtonList.forEach((copyButton) => {
    copyButton.addEventListener('click', (e) => {
      //let text = e.target.parentElement.querySelector('code').textContent;
      console.log("copy", e.target);
      navigator.clipboard.writeText("text");
    });
  });

