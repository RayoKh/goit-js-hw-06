const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("ul");

ingredients.forEach((element) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.textContent = `${element}`;
  ingredientsList.classList.add("item");
  ingredientsRef.append(ingredientsList);
  console.log(ingredientsList);
});
