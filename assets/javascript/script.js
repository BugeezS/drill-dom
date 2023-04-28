const list = document.querySelector("ul");
const items = list.children;

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  if (item.nodeType === 1) {
    if (item.textContent.includes("Fast and Furious")) {
      if (i !== 0) {
        list.insertBefore(item, items[0]);
      }
      item.classList.add("important");
    }
    item.addEventListener("click", function () {
      if (item.textContent.includes("Fast and Furious")) {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
        );
      } else {
        alert(item.textContent);
      }
    });
  }

  for (let j = i + 1; j < items.length; j++) {
    const nextItem = items[j];
    if (nextItem.nodeType === 1 && item.textContent === nextItem.textContent) {
      list.removeChild(nextItem);
    }
  }
}
