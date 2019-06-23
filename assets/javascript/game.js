// this iis a function i am going to call so when the word is right it refreshes after 5 seconds
// i found it online

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
};


// word variable

var words = ["boob", "cactus"];
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

var filledSpaces = answerArray.join(" ");

if (filledSpaces == "b o o b" || filledSpaces == "c a c t u s" ) {


    console.log("CORRECT! THE WORD WAS " + word);

    javascript:timedRefresh(5000);
    

}

    // The end of the game loop



};



