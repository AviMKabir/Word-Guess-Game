// this iis a function i am going to call so when the word is right it refreshes after 5 seconds
// i found it online

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
};


// word variable

var words = ["paramore"];
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


// showing pressed letters functions lmaoo

function showA() {
    var x = document.getElementById("letter1");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "A";
    }
};

function showB() {
    var x = document.getElementById("letter2");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "B";
    }
};

function showC() {
    var x = document.getElementById("letter3");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "C";
    }
};

function showD() {
    var x = document.getElementById("letter4");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "D";
    }
};

function showE() {
    var x = document.getElementById("letter5");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "E";
    }
};

function showF() {
    var x = document.getElementById("letter6");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "F";
    }
};

function showG() {
    var x = document.getElementById("letter7");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "G";
    }
};

function showH() {
    var x = document.getElementById("letter8");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "H";
    }
};

function showI() {
    var x = document.getElementById("letter9");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "I";
    }
};

function showJ() {
    var x = document.getElementById("letter10");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "J";
    }
};

function showK() {
    var x = document.getElementById("letter11");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "K";
    }
};

function showL() {
    var x = document.getElementById("letter12");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "L";
    }
};

function showM() {
    var x = document.getElementById("letter13");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "M";
    }
};

function showN() {
    var x = document.getElementById("letter14");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "N";
    }
};

function showO() {
    var x = document.getElementById("letter15");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "O";
    }
};

function showP() {
    var x = document.getElementById("letter16");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "P";
    }
};

function showQ() {
    var x = document.getElementById("letter17");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "Q";
    }
};

function showR() {
    var x = document.getElementById("letter18");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "R";
    }
};

function showS() {
    var x = document.getElementById("letter19");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "S";
    }
};

function showT() {
    var x = document.getElementById("letter20");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "T";
    }
};

function showU() {
    var x = document.getElementById("letter21");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "U";
    }
};

function showV() {
    var x = document.getElementById("letter22");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "V";
    }
};

function showW() {
    var x = document.getElementById("letter23");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "W";
    }
};

function showX() {
    var x = document.getElementById("letter24");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "X";
    }
};

function showY() {
    var x = document.getElementById("letter25");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "Y";
    }
};

function showZ() {
    var x = document.getElementById("letter26");
    if (x.innerHTML === " ") {
        x.innerHTML = " ";
    } else {
        x.innerHTML = "Z";
    }
};



//key presses

document.onkeyup = function (event) {



    var userGuess = event.key;

    //calling function to show letters lol

    if (userGuess == "a") {

        showA();

    };

    if (userGuess == "b") {

        showB();

    };

    if (userGuess == "c") {

        showC();

    };

    if (userGuess == "d") {

        showD();

    };

    if (userGuess == "e") {

        showE();

    };

    if (userGuess == "f") {

        showF();

    };
    
    if (userGuess == "g") {

        showG();

    };

    if (userGuess == "h") {

        showH();

    };

    if (userGuess == "i") {

        showI();

    };

    if (userGuess == "j") {

        showJ();

    };

    if (userGuess == "k") {

        showK();

    };

    if (userGuess == "l") {

        showL();

    };

    if (userGuess == "m") {

        showM();

    };

    if (userGuess == "n") {

        showN();

    };

    if (userGuess == "o") {

        showO();

    };

    if (userGuess == "p") {

        showP();

    };

    if (userGuess == "q") {

        showQ();

    };

    if (userGuess == "r") {

        showR();

    };

    if (userGuess == "s") {

        showS();

    };
    
    if (userGuess == "t") {

        showT();

    };

    if (userGuess == "u") {

        showU();

    };

    if (userGuess == "v") {

        showV();

    };

    if (userGuess == "w") {

        showW();

    };

    if (userGuess == "x") {

        showX();

    };

    if (userGuess == "y") {

        showY();

    };

    if (userGuess == "z") {

        showZ();

    };











    // Get a guess from the player


    if (userGuess) {

        for (var j = 0; j < word.length; j++) {
            if (userGuess === word[j]) {
                answerArray[j] = userGuess; remainingLetters--;
            }

        }



    };

if (word = "paramore") {


    document.getElementById("hint").innerHTML = "hint: twlight banger";

};
    



    console.log(answerArray.join(" "));

    var filledSpaces = answerArray.join(" ");

    //showingthe word variable

    document.getElementById("theWord").innerHTML = filledSpaces;


    if (filledSpaces == "p a r a m o r e" || filledSpaces == "c a c t u s") {


        console.log("correct! the word was " + word);

        javascript: timedRefresh(5000);


    }

    // The end of the game loop



};



