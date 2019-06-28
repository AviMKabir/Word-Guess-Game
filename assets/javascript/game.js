// this iis a function i am going to call so when the word is right it refreshes after 5 seconds
// i found it online

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
};

// jk i changed the code to loop to a random word each time 

// word variable



var words = ["paramore", "helena", "maria"];
var wrongLetter = 0;
var guessesLeft = 6;
var k = 0;
var wins = 0;
// randomly pick a word

var word = words[Math.floor(Math.random() * words.length)];

console.log(word);


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



    var userGuess = event.key.toLowerCase();

    console.log(wins);

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




    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
        }
    }



    // decrementing guesses for wrong letter omg the || isnt working im going crazy 

    // for paramore



    if (word == "paramore" && userGuess !== "p") {
        guessesLeft--;
    }


    if (word == "paramore" && userGuess == "a") {
        guessesLeft++;
    }

    if (word == "paramore" && userGuess == "r") {
        guessesLeft++;
    }

    if (word == "paramore" && userGuess == "m") {
        guessesLeft++;
    }

    if (word == "paramore" && userGuess == "o") {
        guessesLeft++;
    }

    if (word == "paramore" && userGuess == "e") {
        guessesLeft++;
    }

    // for helena

    if (word == "helena" && userGuess !== "h") {
        guessesLeft--;
    }

    if (word == "helena" && userGuess == "e") {
        guessesLeft++;
    }

    if (word == "helena" && userGuess == "l") {
        guessesLeft++;
    }

    if (word == "helena" && userGuess == "n") {
        guessesLeft++;
    }

    if (word == "helena" && userGuess == "a") {
        guessesLeft++;
    }


    // maria letters

    if (word == "maria" && userGuess !== "m") {
        guessesLeft--;
    }


    if (word == "maria" && userGuess == "a") {
        guessesLeft++;
    }


    if (word == "maria" && userGuess == "r") {
        guessesLeft++;
    }


    if (word == "maria" && userGuess == "i") {
        guessesLeft++;
    }

    var guessesLeft2 = guessesLeft.toString();


    console.log(guessesLeft2);





    // pushing the guesses left
    document.getElementById("guessesLeftDiv").innerHTML = "guesses left: " + guessesLeft;;







    // showing hints
    if (word == "paramore") {


        document.getElementById("hint").innerHTML = "hint: past twlight banger / current feminist powerhouse";

    };

    if (word == "helena") {


        document.getElementById("hint").innerHTML = "hint: so long and goodnight";

    };

    if (word == "maria") {


        document.getElementById("hint").innerHTML = "hint: count her in";

    };



    console.log(answerArray.join(" "));

    var filledSpaces = answerArray.join(" ");

    //showingthe word variable

    document.getElementById("theWord").innerHTML = filledSpaces;



    // when you win its gonna refresh for now. i know i can make it just move up a variable through a loop too but i wanted to test this refresh thing out

    if (filledSpaces == "p a r a m o r e" || filledSpaces == "h e l e n a" || filledSpaces == "m a r i a") {


        alert("correct! the word was " + word);

        alert("press any key for the next word :)");

        // emptying the letters oh man

        document.getElementById("letter1").innerHTML = " ";
        document.getElementById("letter2").innerHTML = " ";
        document.getElementById("letter4").innerHTML = " ";
        document.getElementById("letter5").innerHTML = " ";
        document.getElementById("letter6").innerHTML = " ";
        document.getElementById("letter7").innerHTML = " ";
        document.getElementById("letter8").innerHTML = " ";
        document.getElementById("letter9").innerHTML = " ";
        document.getElementById("letter10").innerHTML = " ";
        document.getElementById("letter11").innerHTML = " ";
        document.getElementById("letter12").innerHTML = " ";
        document.getElementById("letter13").innerHTML = " ";
        document.getElementById("letter14").innerHTML = " ";
        document.getElementById("letter15").innerHTML = " ";
        document.getElementById("letter16").innerHTML = " ";
        document.getElementById("letter17").innerHTML = " ";
        document.getElementById("letter18").innerHTML = " ";
        document.getElementById("letter19").innerHTML = " ";
        document.getElementById("letter20").innerHTML = " ";
        document.getElementById("letter21").innerHTML = " ";
        document.getElementById("letter22").innerHTML = " ";
        document.getElementById("letter23").innerHTML = " ";
        document.getElementById("letter24").innerHTML = " ";
        document.getElementById("letter25").innerHTML = " ";
        document.getElementById("letter26").innerHTML = " ";


        wins++;

        document.getElementById("winsDiv").innerHTML = "wins: " + wins;;

        // javascript: timedRefresh(5000);

        // clear the word?

        answerArray = [" "];


        game2();


    }

    // this is the lose code

    if (guessesLeft2 == "0") {


        alert("you have lost")

        alert("press any key for the next word :)");


        game2();

    }

    // The end of the game loop




};

// Ill be honest im calling the game again so i can reload it 


function game2() {


    // word variable



    var words = ["paramore", "helena", "maria"];
    var wrongLetter = 0;
    var guessesLeft = 6;
    var k = 0

    // randomly pick a word

    var word = words[Math.floor(Math.random() * words.length)];

    console.log(word);


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



        var userGuess = event.key.toLowerCase();

        console.log(wins);

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




        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
            }
        }



        // decrementing guesses for wrong letter omg the || isnt working im going crazy 

        // for paramore



        if (word == "paramore" && userGuess !== "p") {
            guessesLeft--;
        }


        if (word == "paramore" && userGuess == "a") {
            guessesLeft++;
        }

        if (word == "paramore" && userGuess == "r") {
            guessesLeft++;
        }

        if (word == "paramore" && userGuess == "m") {
            guessesLeft++;
        }

        if (word == "paramore" && userGuess == "o") {
            guessesLeft++;
        }

        if (word == "paramore" && userGuess == "e") {
            guessesLeft++;
        }

        // for helena

        if (word == "helena" && userGuess !== "h") {
            guessesLeft--;
        }

        if (word == "helena" && userGuess == "e") {
            guessesLeft++;
        }

        if (word == "helena" && userGuess == "l") {
            guessesLeft++;
        }

        if (word == "helena" && userGuess == "n") {
            guessesLeft++;
        }

        if (word == "helena" && userGuess == "a") {
            guessesLeft++;
        }


        // maria letters

        if (word == "maria" && userGuess !== "m") {
            guessesLeft--;
        }


        if (word == "maria" && userGuess == "a") {
            guessesLeft++;
        }


        if (word == "maria" && userGuess == "r") {
            guessesLeft++;
        }


        if (word == "maria" && userGuess == "i") {
            guessesLeft++;
        }

        var guessesLeft2 = guessesLeft.toString();


        console.log(guessesLeft2);





        // pushing the guesses left
        document.getElementById("guessesLeftDiv").innerHTML = "guesses left: " + guessesLeft;;







        // showing hints
        if (word == "paramore") {


            document.getElementById("hint").innerHTML = "hint: past twlight banger / current feminist powerhouse";

        };

        if (word == "helena") {


            document.getElementById("hint").innerHTML = "hint: so long and goodnight";

        };

        if (word == "maria") {


            document.getElementById("hint").innerHTML = "hint: count her in";

        };



        console.log(answerArray.join(" "));

        var filledSpaces = answerArray.join(" ");

        //showingthe word variable

        document.getElementById("theWord").innerHTML = filledSpaces;



        // when you win its gonna refresh for now. i know i can make it just move up a variable through a loop too but i wanted to test this refresh thing out

        if (filledSpaces == "p a r a m o r e" || filledSpaces == "h e l e n a" || filledSpaces == "m a r i a") {


            alert("correct! the word was " + word);

            alert("press any key for the next word :)");

            document.getElementById("letter1").innerHTML = " ";
            document.getElementById("letter2").innerHTML = " ";
            document.getElementById("letter4").innerHTML = " ";
            document.getElementById("letter5").innerHTML = " ";
            document.getElementById("letter6").innerHTML = " ";
            document.getElementById("letter7").innerHTML = " ";
            document.getElementById("letter8").innerHTML = " ";
            document.getElementById("letter9").innerHTML = " ";
            document.getElementById("letter10").innerHTML = " ";
            document.getElementById("letter11").innerHTML = " ";
            document.getElementById("letter12").innerHTML = " ";
            document.getElementById("letter13").innerHTML = " ";
            document.getElementById("letter14").innerHTML = " ";
            document.getElementById("letter15").innerHTML = " ";
            document.getElementById("letter16").innerHTML = " ";
            document.getElementById("letter17").innerHTML = " ";
            document.getElementById("letter18").innerHTML = " ";
            document.getElementById("letter19").innerHTML = " ";
            document.getElementById("letter20").innerHTML = " ";
            document.getElementById("letter21").innerHTML = " ";
            document.getElementById("letter22").innerHTML = " ";
            document.getElementById("letter23").innerHTML = " ";
            document.getElementById("letter24").innerHTML = " ";
            document.getElementById("letter25").innerHTML = " ";
            document.getElementById("letter26").innerHTML = " ";


            wins++

            document.getElementById("winsDiv").innerHTML = "wins: " + wins;;

            // javascript: timedRefresh(5000);

            // clear the word?

            answerArray = [" "];


            game2();


        }

        // this is the lose code

        if (guessesLeft2 == "0") {

            // im making alerts so people know what to do more
            
            alert("you have lost")

            alert("press any key for the next word :)");

            game2();


        }

        // The end of the game loop




    };


};












// this is code to clear the divs with letters 

// document.getElementById("letter1").innerHTML = " " ;
// document.getElementById("letter2").innerHTML = " " ;
// document.getElementById("letter4").innerHTML = " " ;
// document.getElementById("letter5").innerHTML = " " ;
// document.getElementById("letter6").innerHTML = " " ;
// document.getElementById("letter7").innerHTML = " " ;
// document.getElementById("letter8").innerHTML = " " ;
// document.getElementById("letter9").innerHTML = " " ;
// document.getElementById("letter10").innerHTML = " " ;
// document.getElementById("letter11").innerHTML = " " ;
// document.getElementById("letter12").innerHTML = " " ;
// document.getElementById("letter13").innerHTML = " " ;
// document.getElementById("letter14").innerHTML = " " ;
// document.getElementById("letter15").innerHTML = " " ;
// document.getElementById("letter16").innerHTML = " " ;
// document.getElementById("letter17").innerHTML = " " ;
// document.getElementById("letter18").innerHTML = " " ;
// document.getElementById("letter19").innerHTML = " " ;
// document.getElementById("letter20").innerHTML = " " ;
// document.getElementById("letter21").innerHTML = " " ;
// document.getElementById("letter22").innerHTML = " " ;
// document.getElementById("letter23").innerHTML = " " ;
// document.getElementById("letter24").innerHTML = " " ;
// document.getElementById("letter25").innerHTML = " " ;
// document.getElementById("letter26").innerHTML = " " ;

