let grid = document.createElement("div");
const CONTAINER_WIDTH = 960;
let gridNumber = 16;
let dimension = String(Math.floor(CONTAINER_WIDTH/gridNumber));
grid.style.width = dimension + "px";
grid.style.height = dimension + "px";
grid.style.border = "2px Black Solid";
grid.style.boxSizing = "border-box";
let container = document.querySelector(".container");
for (i=0; i<Math.pow(gridNumber,2);i++) {
    const gridClone = grid.cloneNode(true);
    container.appendChild(gridClone);
}



