// function addGlobalEventListener(type, selector, callback) {
//   document.addEventListener(type, (e) => {
//     if (e.target.matches(selector)) callback(e);
//   });
// }
const container = document.querySelector("#container");
const gridSize = prompt("Enter a grid size");
function gridCreator(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement("div");
    div.className = "grid";
    container.appendChild(div);
  }
}
gridCreator(gridSize);
let singleGridPixel = document.getElementsByClassName("grid");
console.log(singleGridPixel.length);
for (i = 0; i < singleGridPixel.length; i++) {
  singleGridPixel[i].addEventListener("mouseover", (e) => {
    console.log(e.target.style.backgroundColor);
    e.target.style.backgroundColor = "black";
  });
}
