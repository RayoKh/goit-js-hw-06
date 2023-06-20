const refs = {
  inputBtn: document.getElementById("validation-input"),
};

const inputLength = parseInt(refs.inputBtn.getAttribute("data-length"));

refs.inputBtn.addEventListener("blur", (event) => {
  refs.inputBtn.classList.remove("valid", "invalid");

  if (inputLength !== refs.inputBtn.value.length) {
    return refs.inputBtn.classList.add("invalid");
  }

  return refs.inputBtn.classList.add("valid");
});
