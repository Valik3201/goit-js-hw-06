const text = document.querySelector("#text");
const fontSizeInput = document.querySelector("#font-size-control");

const sizeControl = () => {
  text.style.fontSize = `${fontSizeInput.value}px`;
};

fontSizeInput.addEventListener("input", sizeControl);
