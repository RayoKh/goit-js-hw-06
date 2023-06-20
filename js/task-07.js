// 1. Отримати посилання
// 2. Повісити слухача
// 3. Змінюючи ренж - змінювати розмір тексту
//  3.1. Якщо

const refs = {
  inputControler: document.getElementById("font-size-control"),
  inputText: document.getElementById("text"),
};

refs.inputText.style.fontSize = `${refs.inputControler.value}px`;

refs.inputControler.addEventListener("input", (event) => {
  //   console.log(refs.inputControler.value);
  refs.inputText.style.fontSize = `${event.currentTarget.value}px`;
});
