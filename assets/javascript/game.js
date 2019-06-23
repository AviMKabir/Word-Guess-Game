// word variable

var words = ["boob", "super", "balloon", "fantastic"];
var wrongLetter = 0;

// randomly pick a word

var word = words[Math.floor(Math.random() * words.length)];


// array for the answer blanks

var answerArray = [];


for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// showing letters left
var remainingLetters = word.length;



//key presses

document.onkeyup = function (event) {



    var userGuess = event.key;


    // Get a guess from the player


    if (userGuess) {

        for (var j = 0; j < word.length; j++) {
            if (userGuess === word[j] && remainingLetters > 0) {
                answerArray[j] = userGuess; remainingLetters--;
            }

        }



    };

    console.log(answerArray.join(" "));

console.log("letters left: " + remainingLetters)



    // The end of the game loop



};



