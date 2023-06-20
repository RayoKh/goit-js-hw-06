const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  valueContent: document.getElementById("value"),
};
let counterValue = 0;

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.valueContent.innerHTML = counterValue;
});
refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.valueContent.innerHTML = counterValue;
});
