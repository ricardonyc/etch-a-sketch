const bodyElement = document.getElementById("body");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("box-container");
  for (let j = 0; j < 16; j++) {
    console.log(i, j);
    const insideDiv = document.createElement("div");
    insideDiv.classList.add("box");
    div.appendChild(insideDiv);
  }

  bodyElement.appendChild(div);
}
