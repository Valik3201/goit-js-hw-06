function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

const handleClick = (event) => {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
};

button.addEventListener("click", handleClick);
