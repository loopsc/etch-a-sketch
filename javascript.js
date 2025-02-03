const container = document.querySelector("#container");
const inputGridButton = document.querySelector(".squares-input");
const startingGrid = 16;
const containerSize = 960;

let cellDimensions = containerSize/startingGrid

let gridList = document.querySelectorAll(".cell");

drawGrid(startingGrid);


gridList.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "grey";
  });
});

inputGridButton.addEventListener("click", () => {
  userInputGrids = prompt("Number of squares per side?");
  while (userInputGrids > 100) {
    userInputGrids = prompt("Number of squares per side? (<= 100)");
  }

  removeGrid();
  
  cellDimensions = containerSize / userInputGrids

  drawGrid(userInputGrids);
});

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function drawGrid(numGrid) {
  for(let row = 0; row < numGrid; row++){
    for(let col = 0; col < numGrid; col++){
      const cell = document.createElement('div')
      cell.classList.add('cell')
      
      cell.setAttribute('style', `width: ${cellDimensions}px; height: ${cellDimensions}px; `)

      container.appendChild(cell)
    }
  }
  gridList = document.querySelectorAll(".cell");
}
