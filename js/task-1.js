const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);
for (const item of allItems) {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const elements = item.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
}
