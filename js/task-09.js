function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    colorEl.textContent = bodyEl.style.backgroundColor;
}