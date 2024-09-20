function changeBackground() {
    this.style.backgroundColor = "Black";
}

function changeGridBasedOnInput(){
    let gridNumber = parseInt(prompt("Enter number of squares per side"));
    while (true) {
        if (gridNumber > 100 || gridNumber < 1) {
            gridNumber = parseInt(prompt("Please Enter a Number between 1-100"));
        } else {
            break;
        }
    }
    generateGrid(gridNumber);
}

function generateGrid(gridNumber) {
    let container = document.querySelector(".container");
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let grid = document.createElement("div");
    const CONTAINER_WIDTH = 960;
    let dimension = String(Math.floor(CONTAINER_WIDTH / gridNumber));
    grid.style.width = dimension + "px";
    grid.style.height = dimension + "px";
    grid.style.border = "2px Black Solid";
    grid.style.boxSizing = "border-box";
    for (i = 0; i < Math.pow(gridNumber, 2); i++) {
        const gridClone = grid.cloneNode(true);
        gridClone.addEventListener("mouseenter", changeBackground);
        container.appendChild(gridClone);
    }
}

generateGrid(16);
btn = document.querySelector("button");
btn.addEventListener("click", changeGridBasedOnInput);





