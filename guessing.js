// Script

var randomnumber = Math.round(100 * Math.random())
var array = [];

function guessNumber() {
    var prompt = require('prompt');
        prompt.get(['guess'], function(err, result) {
            numberedguess = parseInt(result.guess)
            if (numberedguess === randomnumber) {
              return console.log("congratulations! You have won!")  
            } else {
                array.push(result.guess)
                if (array.length === 4) {
                    console.log("Sorry you have run out of guesses, your guesses were " + array );
                    return
                } else {
                console.log("Try again, your guess was " + numberedguess)
                console.log("You have " + (4 - array.length) + " guesses left")
                return guessNumber()
            }
            }
        });
};

guessNumber();