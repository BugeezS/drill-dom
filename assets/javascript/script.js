const list = document.querySelector("ul");
const items = list.children;

let fastAndFuriousItem;
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.nodeType === 1 && item.textContent.includes("Fast and Furious")) {
    fastAndFuriousItem = item;
    if (i !== 0) {
      list.insertBefore(item, items[0]);
    }
    item.classList.add("important");
  }
  for (let j = i + 1; j < items.length; j++) {
    const nextItem = items[j];
    if (nextItem.nodeType === 1 && item.textContent === nextItem.textContent) {
      list.removeChild(nextItem);
    }
  }
}

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.nodeType === 1) {
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
}

document.body.addEventListener("keyup", function (event) {
  if (event.key === "r") {
    const shuffledItems = shuffle(
      [...items].filter((item) => item !== fastAndFuriousItem)
    );
    for (let i = 0; i < shuffledItems.length; i++) {
      const item = shuffledItems[i];
      list.insertBefore(item, fastAndFuriousItem.nextSibling);
    }
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
