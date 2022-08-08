const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", textOutput);

function textOutput(event) {
  console.log(event.currentTarget.value);
  if (textInput.value === "") {
    return output.textContent = "Anonymous";
  }
  output.textContent = event.currentTarget.value;
}
