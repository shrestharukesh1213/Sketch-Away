// function addGlobalEventListener(type, selector, callback) {
//   document.addEventListener(type, (e) => {
//     if (e.target.matches(selector)) callback(e);
//   });
// }
const container = document.querySelector("#container");
const buttonDiv = document.querySelector(".button");
const buttonChangeGrid = document.createElement("button");
const buttonClearGrid = document.createElement("button");
buttonChangeGrid.innerText = "Change Grid size";
buttonClearGrid.innerText = "Clear grid";
gridFunc(16);
function gridCreator() {
  const gridSize = prompt("Enter a grid size");
  if (gridSize > 100) {
    alert("Enter a grid size between 1-100");
    gridCreator();
  } else {
    gridFunc(gridSize);
  }
}

const existingDiv = document.getElementById("container");
function createGrid() {
  existingDiv.innerHTML = ""; //Deletes contents of #container to remove existing grids
  gridCreator();
}
function gridFunc(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    //Creates a (gridSize x gridSize) size grid
    let div = document.createElement("div");
    div.className = "grid";
    div.style.backgroundColor = "white";
    div.style.width = `${720 / gridSize}px`;
    div.style.height = `${720 / gridSize}px`;
    container.appendChild(div);
  }
}
function gridColor() {
  let singleGridPixel = document.querySelectorAll(".grid");
  for (i = 0; i < singleGridPixel.length; i++) {
    singleGridPixel[i].addEventListener("mouseover", (e) => {
      // console.log(e.target.style.backgroundColor);
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = `${color}`; //Sets the background color of div's having className = "grid"
    });
  }
}
function clearGrid() {
  let singleGridPixel = document.querySelectorAll(".grid");
  for (i = 0; i < singleGridPixel.length; i++) {
    singleGridPixel[i].style.backgroundColor = "white";
  }
}

document.addEventListener("mouseover", gridColor);
buttonDiv.appendChild(buttonChangeGrid);
buttonDiv.appendChild(buttonClearGrid);
buttonChangeGrid.addEventListener("click", createGrid);
buttonClearGrid.addEventListener("click", clearGrid);
