function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  changeColorBtn: document.querySelector(".change-color"),
  bodyChangeColor: document.querySelector("body"),
  spanColorBody : document.querySelector(".color"),
}


ref.changeColorBtn.addEventListener("click", changeColorBody);


function changeColorBody() {
  const color = getRandomHexColor();
  ref.bodyChangeColor.style.background = color;
  ref.spanColorBody.textContent = color;
}
