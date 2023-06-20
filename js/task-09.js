const refs = {
  colorSpan: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
  bodyRef: document.body,
};

refs.colorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  refs.bodyRef.style.backgroundColor = `${randomColor}`;
  refs.colorSpan.textContent = `${randomColor}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
