const GridConfig = {
  gridWidth: 16,
  gridHeight: 16,
};

const grid = document.querySelector("#grid");

function createGrid() {
  for (let i = 0; i < GridConfig.gridWidth * GridConfig.gridHeight; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

createGrid();
