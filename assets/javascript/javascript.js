//Create arrays that list out all the options (numbers 1-9)
var computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Declare remaining variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar;

var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var computerGuessText = document.getElementById("computerGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  //Determines which key is pressed.
  var userGuess = event.key;

  
  //Randomly chooses a number from the options array.  This is the computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if ((userGuess === "1") || (userGuess === "2") || (userGuess === "3") || (userGuess === "4") || (userGuess === "5") || (userGuess === "6") || (userGuess === "7") || (userGuess === "8") || (userGuess === "9")) {

    if (userGuess === computerGuess) {
      wins++
    }
    else {
      losses++
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guess Left: " + (--guessesLeft);
    guessesSoFarText.textContent = "Your Guesses So Far: " + userGuess;

  }

};


