const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", textOutput);

function textOutput (event) {
  output.textContent = event.currentTarget.value;
}