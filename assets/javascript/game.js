var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
];
var wins = 0;
var losses = 0;
var guesses = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var userGuessDOM = document.getElementById("userGuessDOM-text")
var computerText = document.getElementById("computerchoice-text");

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (guesses < 10) {
        if ((userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {
            if ((userGuess === computerGuess)) {
                wins++;
                alert("You Win!");
            } else {
                guesses++;
            }
            directionsText.textContent = "What letter am I thinking of?";
            userChoiceText.textContent = "You chose: " + userGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " +
                losses;
            guessesText.textContent = "guesses: " + guesses;
            userGuessDOM.insertAdjacentText("beforeend", userGuess +
                ", ");

        }
    } else {
        losses++;
        guesses = 0;
        directionsText.textContent = "What letter am I thinking of?";
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guesses: " + guesses;
        userGuessDOM.textContent = "guesses so far: ";
    }
};