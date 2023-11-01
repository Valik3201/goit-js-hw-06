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

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  return item;
});

ulItems.append(...items);
