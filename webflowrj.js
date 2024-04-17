
// get all the copy buttons
const copyButtons = document.querySelectorAll("[wb-data=copy-button]");

// iterate over each copy button
copyButtons.forEach((copyButton) => {
  // listen for click on each copy button
  copyButton.addEventListener("click", (event) => {
    const buttonText = copyButton.querySelector('[wb-data="text"]');

    // change button text to inform user operation in progress
    buttonText.textContent = "Copying...";

    // define function to copy
    const copyJson = (event) => {
      event.preventDefault();
      const componentJson = copyButton.querySelector('[wb-data="json"]')
        .textContent;
      event.clipboardData.setData("application/json", componentJson);
    };

    // listen for copy
    document.addEventListener("copy", copyJson);
    // execute a copy command
    document.execCommand("copy");
    // remove copy listener (to allow normal copy/paste again)
    document.removeEventListener("copy", copyJson);

    // after 1 second, set button text back
    setTimeout(() => {
      buttonText.textContent = "Copied!";
    }, 800);
  });
});
