function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");

const span = document.querySelector(".color");

const body = document.body;

btn.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  body.style.background = color;
  span.textContent = color;
});
