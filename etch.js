const container = document.getElementById("container");




function makeGrid(rows, columns) {
    while (document.querySelector("button") !== null){
        document.querySelector("button").remove();
    }
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  container.style.width = "960px";
  container.style.overflow = "hidden";


  for (i = 0; i < (rows * columns); i++) {
    let square = document.createElement("div");
    square.style.minHeight = "0";
    square.style.minWidth = "0";
    square.style.overflow = "hidden";
    container.appendChild(square).className = "grid-item";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
  }
  createButton();
}

makeGrid(16, 16);

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.style.margin = "20px";
    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userInput = prompt("Please enter the number of grid squares per side (Max: 100).");
        if (userInput > 100){
            alert("ERROR. No numbers of 100 are allowed!!!");
            makeGrid(16, 16);
            return;
        }
        rows = userInput;
        columns = userInput;
        makeGrid(rows, columns);
    })
}



