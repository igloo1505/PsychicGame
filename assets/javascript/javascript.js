//Create arrays that list out all the options (numbers 1-9)
var computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Declare remaining variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar;
var userGuessSpan = document.getElementById("userGuess");
var computerGuessSpan = document.getElementById("computerGuess");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var guessesLeftSpan = document.getElementById("guessesLeft");
var guessesSoFarSpan = document.getElementById("guessesSoFar");

//Determines which key is pressed and ignores invalid entries.
var userGuess = event.key;
  if (userChoices.indexOf(userGuess) === -1) {
      return 
  }
