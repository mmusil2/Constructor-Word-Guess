var Word = require("./Word");
var inquirer = require("inquirer");

var wordChoices = ["emperor"];

// math random to select word

var currentWord = wordChoices[0];

var newWord = new Word(currentWord);

var count = 0;

var guessLetter = function() {
    var trueCount = 0;
    // console.log(newWord.arr[1].guessed);
    for (i=0; i < newWord.arr.length; i++) {
        if (newWord.arr[i].guessed === true) {
            trueCount++;
        }
    }

    if (trueCount < newWord.arr.length) {
        if (count < 10) {
            console.log(newWord.wordString());
            // console.log("Guess a letter!");
            inquirer.prompt([
                {
                    name: "guess",
                    message: "Guess a letter!"
                }
            ]).then(function(answers) {
                // console.log(answers.guess);
                newWord.letterCheck(answers.guess);
                var compareWord = newWord.wordString();
                
                if (compareWord.indexOf(answers.guess) == -1) {
                    console.log("INCORRECT!\n");
                } else {
                    console.log("CORRECT!\n");
                }
                
                count++;
                guessLetter();
            });
        }
    } else {
        console.log("YOU WIN!");
    }
}

guessLetter();