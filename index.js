let square = document.getElementById("square");
let game = document.getElementById("opponent");

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
