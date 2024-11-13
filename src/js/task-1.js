const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);

item.forEach((num) => {
  const title = num.querySelector("h2").textContent;
  const liItem = num.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Category: ${liItem}`);
});
