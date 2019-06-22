// word variable

var words = ["boob"];
var wrongLetter = 0;

// randomly pick a word

var word = words[Math.floor(Math.random() * words.length)];


// array for the answer blanks

var answerArray = [];


for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// showing lettes left
var remainingLetters = word.length;




//showing progress






//key presses

document.onkeyup = function(event) {



    var userGuess = event.key;




        // Show the player their progress alert(answerArray.join(" "));

        console.log(answerArray.join(" "));

        // Get a guess from the player


        if (userGuess) {

            for (var j = 0; j < word.length; j++) {
                if ( userGuess === word[j]) {
                    answerArray[j] = userGuess; remainingLetters--;
                }
            }



        };

        

        // The end of the game loop
    


};



