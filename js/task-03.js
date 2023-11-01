const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    (img) =>
      `<li class="image" style="height: 30%;"><img src="${img.url} alt="${img.alt} width="100%"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.insertAdjacentHTML("beforebegin", "<h2>Images</h2>");

gallery.style.display = "flex";
gallery.style.justifyContent = "center";
gallery.style.gap = "3%";
gallery.style.listStyleType = "none";
gallery.style.paddingRight = "40px";
