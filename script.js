const box1 = document.querySelector(".box1 > div");
const box2 = document.querySelector(".box2 > div");
const container2 = document.querySelector(".container2");

// header text
const infoHeader = container2.querySelector(".infoHeader h1");

// subtexts
const why = container2.querySelector(".why");
const how = container2.querySelector(".how");

// store original texts
const originalWhy = why.textContent;
const originalHow = how.textContent;

// Box 1 click
box1.addEventListener("click", () => {
  box1.style.backgroundColor = "purple";
  container2.style.backgroundColor = "pink";
  infoHeader.textContent = "BOX 1 SELECTED";

  // change box1 subtext
  why.textContent = "why did u choose this";

  // reset box2 subtext
  how.textContent = originalHow;
  how.style.color = "";
});

// Box 2 click
box2.addEventListener("click", () => {
  box2.style.backgroundColor = "pink";
  container2.style.backgroundColor = "purple";
  infoHeader.textContent = "BOX 2 SELECTED";

  // change box2 subtext
  how.textContent = "how did u choose this";
  how.style.color = "red";

  // reset box1 subtext
  why.textContent = originalWhy;
  why.style.color = ""; 
});
