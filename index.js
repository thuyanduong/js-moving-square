let square = document.getElementById("square");
let button = document.querySelector("button");
let game = document.getElementById("game");
let opponent = document.createElement("div");
opponent.style.backgroundColor = "white";
opponent.style.position = "absolute";
opponent.style.width = "50px";
opponent.style.height = "50px";

button.addEventListener("click", function(){
  createSquare()
})

function checkCollision() {
  let left = parseInt(square.style.left.replace("px", ""));
  let top = parseInt(square.style.top.replace("px", ""));
  if(opponent.parentNode){
    let opponentLeft = parseInt(opponent.style.left.replace("px", ""));
    let opponentTop = parseInt(opponent.style.top.replace("px", ""));
    if(left >= opponentLeft - 50 && left<= opponentLeft + 50 && top <= opponentTop + 50 && top >= opponentTop - 50) {
      opponent.parentNode.removeChild(opponent)
    }
  }
  
}

function createSquare(){
  if(opponent.parentNode){
    opponent.parentNode.removeChild(opponent)
  }
  opponent.style.top = Math.floor(Math.random() * 300) + "px"
  opponent.style.left = Math.floor(Math.random() * 300) + "px"
  game.appendChild(opponent)
}

square.addEventListener("click", function(){
  square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
})

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveLeft();
  }else if(e.key === "ArrowRight"){
    moveRight()
  }
  else if(e.key === "ArrowDown"){
    moveDown()
  }
  else if(e.key === "ArrowUp"){
    moveUp()
  }
  checkCollision();
});

function moveLeft() {
  var leftPixels = square.style.left.replace("px", "");
  var left = parseInt(leftPixels);
  if (left > 0) {
    square.style.left = `${left - 5}px`;
  }
}

function moveRight() {
  var leftPixels = square.style.left.replace("px", "");
  var left = parseInt(leftPixels);
  if (left < 300) {
    square.style.left = `${left + 5}px`;
  }
}

function moveDown() {
  var topPixels = square.style.top.replace("px", "");
  var top = parseInt(topPixels);
  if (top < 300) {
    square.style.top = `${top + 5}px`;
  }
}

function moveUp(){
  var topPixels = square.style.top.replace("px", "");
  var top = parseInt(topPixels);
  if (top > 0) {
    square.style.top = `${top - 5}px`;
  }
}
