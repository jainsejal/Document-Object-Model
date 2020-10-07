var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2+".png");
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
