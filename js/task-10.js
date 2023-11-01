const numberInput = document.querySelector("input[type='number']");

const minValue = numberInput.min;
const maxValue = numberInput.max;

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  container.innerHTML = "";
  amount = numberInput.value;
  const minValue = parseInt(numberInput.min);
  const maxValue = parseInt(numberInput.max);

  if (amount < minValue || amount > maxValue) {
    alert(`Please enter a number between ${minValue} and ${maxValue}.`);
    return;
  }

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    container.appendChild(div);
    boxSize += 10;
  }
}

function destroyBoxes() {
  container.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
