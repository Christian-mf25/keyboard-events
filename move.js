
'use strict';
let boxTop = 200;
let boxLeft = 200;

const move = x =>{

	x === "ArrowUp" ? boxTop -= 10 : (x === "ArrowDown" ? boxTop += 10 : (x === "ArrowLeft" ? boxLeft -= 10 : boxLeft += 10))

}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  move(keyName)

  console.log(keyName);
  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
});