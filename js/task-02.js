const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.getElementById("ingredients");

const liIngredients = ingredients.map((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredient;

  return liIngredient;
});

ingredientsRef.append(...liIngredients);
