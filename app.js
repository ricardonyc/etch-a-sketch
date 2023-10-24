const bodyElement = document.getElementById("body");
const btn = document.getElementById("btn");

for (let i = 0; i < 26; i++) {
  const div = document.createElement("div");
  div.classList.add("box-container");
  for (let j = 0; j < 26; j++) {
    // console.log(i, j);
    const insideDiv = document.createElement("div");
    insideDiv.classList.add("box");
    div.appendChild(insideDiv);
  }

  bodyElement.appendChild(div);
}

const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//   box.addEventListener("mouseover", (e) => {
//     // box.className.add("color");
//     console.log(e.target.className);
//     e.target.style.backgroundColor = "red"; // Apply the hover effect
//   });
// });

console.log(boxes);

btn.addEventListener("click", () => {
  const userColumns = prompt("select the amount of columns you want:");
  const userRows = prompt("select the amount of rows you want:");

  
});
