let player = document.getElementById("player");
let opponent = document.getElementById("opponent");
let game = document.getElementById("opponent");

opponent.addEventListener("click", function(e){
  opponent.parentNode.removeChild(opponent)
})

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else if(e.key === "ArrowRight"){
    moveDodgerRight()
  }
  else if(e.key === "ArrowDown"){
    moveDodgerDown()
  }
  else if(e.key === "ArrowUp"){
    moveDodgerUp()
  }
  checkCollision()
});

function moveDodgerLeft() {
  var leftPixels = player.style.left.replace("px", "");
  var left = parseInt(leftPixels);
  if (left > 0) {
    player.style.left = `${left - 5}px`;
  }
}

function moveDodgerRight() {
  var leftPixels = player.style.left.replace("px", "");
  var left = parseInt(leftPixels);
  if (left < 300) {
    player.style.left = `${left + 5}px`;
  }
}

function moveDodgerDown() {
  var topPixels = player.style.top.replace("px", "");
  var top = parseInt(topPixels);
  if (top < 300) {
    player.style.top = `${top + 5}px`;
  }
}

function moveDodgerUp(){
  var topPixels = player.style.top.replace("px", "");
  var top = parseInt(topPixels);
  if (top > 0) {
    player.style.top = `${top - 5}px`;
  }
}

function checkCollision() {
  let left = parseInt(player.style.left.replace("px", ""));
  let top = parseInt(player.style.top.replace("px", ""));
  if(left >= 100 && left <=200 && top >= 50 && top <= 150) {
    if(opponent.parentNode){
      opponent.parentNode.removeChild(opponent)
    }
  }
}
