function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountInput: document.querySelector("[type=number]"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesDiv: document.getElementById("boxes"),
};

let width = 30;
let height = 30;

refs.createBtn.addEventListener("click", () => {
  for (let i = 0; i < refs.amountInput.value; i += 1) {
    const divEl = document.createElement("div");

    divEl.classList.add("color-box");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;

    refs.boxesDiv.append(divEl);

    width += 10;
    height += 10;
  }
});

refs.destroyBtn.addEventListener("click", () => {
  const numberOfBoxes = refs.boxesDiv.querySelectorAll(".color-box").length;

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const divBox = refs.boxesDiv.querySelector(".color-box");
    divBox.remove();
  }

  width = 30;
  height = 30;
});
