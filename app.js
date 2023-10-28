const bodyElement = document.getElementById("body");
const btn = document.getElementById("btn");
const gridContainer = document.getElementById("container");

function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    const div = document.createElement("div");
    div.classList.add("box-container");
    for (let j = 0; j < columns; j++) {
      // console.log(i, j);
      const insideDiv = document.createElement("div");
      insideDiv.classList.add("box");
      div.appendChild(insideDiv);
    }

    gridContainer.appendChild(div);
  }
}

createGrid(16, 16);

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    // box.className.add("color");
    console.log(e.target.className);
    e.target.style.backgroundColor = "red"; // Apply the hover effect
  });
  console.log("inside for each!");
});

btn.addEventListener("click", () => {
  let columnsNum;
  let rowsNum;

  while (true) {
    columnsNum = parseInt(prompt("select the number of columns you want:"));
    rowsNum = parseInt(prompt("select the number of rows you want:"));

    if (!isNaN(columnsNum && rowsNum) && columnsNum < 100 && rowsNum < 100) {
      break;
    } else {
      alert("Please insert a number (must be less than 100)");
    }
  }

  while (gridContainer.children.length > 0) {
    gridContainer.removeChild(gridContainer.children[0]);
  }

  createGrid(rowsNum, columnsNum);
  console.log("inside click listener");
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red"; // Apply the hover effect
    });
  });
});
