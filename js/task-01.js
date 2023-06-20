const liItems = document.querySelectorAll(".item");
console.log("Number of categories: ", liItems.length);

liItems.forEach((item) => {
  const category = item.firstElementChild;
  console.log(`Category: ${category.textContent}`);

  const amountOfElements = item.querySelectorAll("ul li").length;
  console.log(amountOfElements);
});
