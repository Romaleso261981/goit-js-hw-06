function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyChangeColor = document.querySelector("body");
const spanColorBody = document.querySelector(".color");


changeColorBtn.addEventListener("click", changeColorBody);


function changeColorBody() {
  const color = getRandomHexColor();
  bodyChangeColor.style.background = color;
  spanColorBody.textContent = color;
}
