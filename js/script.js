const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

const grid = document.querySelector("#grid");

function createGrid() {
  for (let i = 0; i < GRID_WIDTH * GRID_HEIGHT; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

createGrid();
