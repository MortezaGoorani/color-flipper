
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

   let x = getRandomNumber();
   let  y = getRandomNumber();
    let z = getRandomNumber();
    color.textContent = `rgb(${x},${y},${z})`;
  document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
   
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
