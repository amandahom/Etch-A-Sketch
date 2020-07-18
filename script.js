// Initialize the starting grid
let container = document.getElementById("container");
let box;

// Function to create the grid
function gridCreate(square) {
  let totalSquares = square * square;
  for (let i = 0; i < totalSquares; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "box");
    let currentDiv = document.getElementById("container");
    currentDiv.appendChild(newDiv);
  }
  document.documentElement.style.setProperty("--gridRow", square);
  document.documentElement.style.setProperty("--gridCol", square);
}

gridCreate(16);

// Getting a random color
function setColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Applying random color to boxes
function hoverColor() {
  let colorButton = document.getElementById("color");
  colorButton.addEventListener("click", function(e) {
    $("#box").css("background-color", color);
  });
}

// Applying black color to boxes
function hoverBlack() {
  let blackButton = document.getElementById("black");
  blackButton.addEventListener("click", function(e) {
    $("#box").css("background-color", "#000");
  });
}

// Size Prompt
const sizeMessage = document.querySelector("#size");
sizeMessage.addEventListener("click", sizePrompt);

function sizePrompt() {
  let response = prompt("How many squares by squares would you like? Max: 16.");
  if (response == "") {
    return alert("Please input a number and try again.");
  } else if (isNaN(response)) {
    return alert("Not a number! Please enter a number.");
  } else {
    let parsed = parseInt(response);
  }
}
