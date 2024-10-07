var randomPlayer1 =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"; // this enables the dice files from dice1 to dice6 and its compiled with the random number picker calculation.
document.querySelectorAll("img")[0].setAttribute("src", randomPlayer1); // This is to select the element of the "img"and change the attribute of the "src" to the randomPicker inside the image.

var randomPlayer2 =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomPlayer2);

if (randomPlayer1>randomPlayer2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
} else if (randomPlayer2>randomPlayer1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else{
    document.querySelector("h1").innerHTML = "DRAW! 💪"
}