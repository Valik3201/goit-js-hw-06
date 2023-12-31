const textInput = document.querySelector("#validation-input");
const maxLength = textInput.getAttribute("data-length");

const validation = () => {
  if (textInput.value.length === parseInt(maxLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else if (textInput.value.length === 0) {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
};

textInput.addEventListener("blur", validation);
