
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let x,y,z;
  let hexColor ;
     x = getRandomNumber();
     y = getRandomNumber();
     z = getRandomNumber();
     hexColor = rgb(x,y,z);
  }  
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
