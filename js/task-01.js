const categories = document.querySelector("#categories");

const items = categories.querySelectorAll(".item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const category = item.querySelector("h2");
  console.log("Category:", category.textContent);
  const elements = item.querySelectorAll("li");
  console.log("Elements:", elements.length);
});
