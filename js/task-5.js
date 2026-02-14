const changeColor = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
const colorText = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  colorText.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
