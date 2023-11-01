const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulItems = document.querySelector("#ingredients");

const heading = document.createElement("h2");
heading.textContent = "Ingredients:";
ulItems.before(heading);

ingredients.forEach((ingridient) => {
  const item = document.createElement("li");
  item.textContent = ingridient;
  item.className = "item";
  ulItems.append(item);
});
