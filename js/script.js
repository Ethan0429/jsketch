const GridConfig = {
  gridWidth: 16,
  gridHeight: 16,
};

const canvasSize = 900;
const grid = document.querySelector("#grid");
const gridSettingsButton = document.querySelector("#grid-settings");
const modal = document.querySelector(".modal");

function addEventListeners() {
  gridSettingsButton.addEventListener("click", (e) => {
    modal.style.display = "flex";

    // Close modal
    const modalClose = document.querySelector(".close-icon");
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Change grid size
    const gridWidthInput = document.querySelector("#width");
    const gridHeightInput = document.querySelector("#height");
    const gridChangeButton = document.querySelector("#confirm");
    gridChangeButton.addEventListener("click", () => {
      GridConfig.gridWidth = gridWidthInput.value;
      GridConfig.gridHeight = gridHeightInput.value;
      destroyGrid();
      createGrid();
      modal.style.display = "none";
    });
  });
}

function createGrid() {
  for (let i = 0; i < GridConfig.gridWidth * GridConfig.gridHeight; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }

  let mouseIsDown = false;
  const cells = document.querySelectorAll(".cell");

  // dynamically size cells
  cells.forEach((cell) => {
    cell.style.width = `${canvasSize / GridConfig.gridWidth}px`;
    cell.style.height = `${canvasSize / GridConfig.gridHeight}px`;
  });

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", function () {
      mouseIsDown = true;
      cell.style.backgroundColor = "black";
    });

    cell.addEventListener("mouseup", function () {
      mouseIsDown = false;
    });

    cell.addEventListener("mousemove", function (event) {
      if (mouseIsDown) {
        cell.style.backgroundColor = "black";
      }
    });
  });
}

function destroyGrid() {
  grid.innerHTML = "";
}

createGrid();
addEventListeners();
