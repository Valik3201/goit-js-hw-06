const counter = document.getElementById("value");

let counterValue = 0;

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
