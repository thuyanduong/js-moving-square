let square=document.getElementById("square"),button=document.querySelector("button"),game=document.getElementById("game"),opponent=document.createElement("div");function checkCollision(){let e=parseInt(square.style.left.replace("px","")),t=parseInt(square.style.top.replace("px",""));if(opponent.parentNode){let o=parseInt(opponent.style.left.replace("px","")),n=parseInt(opponent.style.top.replace("px",""));e>=o-50&&e<=o+50&&t<=n+50&&t>=n-50&&opponent.parentNode.removeChild(opponent)}}function createSquare(){opponent.parentNode&&opponent.parentNode.removeChild(opponent),opponent.style.top=Math.floor(300*Math.random())+"px",opponent.style.left=Math.floor(300*Math.random())+"px",game.appendChild(opponent)}function moveLeft(){var e=square.style.left.replace("px",""),t=parseInt(e);t>0&&(square.style.left=`${t-10}px`)}function moveRight(){var e=square.style.left.replace("px",""),t=parseInt(e);t<300&&(square.style.left=`${t+10}px`)}function moveDown(){var e=square.style.top.replace("px",""),t=parseInt(e);t<300&&(square.style.top=`${t+10}px`)}function moveUp(){var e=square.style.top.replace("px",""),t=parseInt(e);t>0&&(square.style.top=`${t-10}px`)}opponent.style.backgroundColor="white",opponent.style.position="absolute",opponent.style.width="50px",opponent.style.height="50px",button.addEventListener("click",function(){createSquare()}),square.addEventListener("click",function(){square.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16)}),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key?moveLeft():"ArrowRight"===e.key?moveRight():"ArrowDown"===e.key?moveDown():"ArrowUp"===e.key&&moveUp(),checkCollision()});
