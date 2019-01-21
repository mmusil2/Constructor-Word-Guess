var Word = require("./Word");
var inquirer = require("inquirer");

//var wordChoices = ["iron man", "hulk", "thor", "captain america", "spider-man"];
var wordChoices = ["IRON MAN", "HULK", "THOR", "CAPTAIN AMERICA", "SPIDER-MAN",
    "HAWKEYE", "BLACK WIDOW", "ANT-MAN", "BLACK PANTHER", "DOCTOR STRANGE", "VISION",
    "WINTER SOLDIER", "DRAX", "STAR-LORD", "ROCKET RACCOON"
];

function setWord() {
    ranNum = Math.floor(Math.random() * wordChoices.length);
    currentWord = wordChoices[ranNum];
    newWord = new Word(currentWord);
}
var ranNum;

var currentWord;

var newWord;

var count = 10;

var guessLetter = function() {
    var trueCount = 0;
    // console.log(newWord.arr[1].guessed);
    for (i=0; i < newWord.arr.length; i++) {
        if (newWord.arr[i].guessed === true) {
            trueCount++;
        }
    }

    if (trueCount < newWord.arr.length) {
        if (count > 0) {
            console.log(newWord.wordString());
            console.log("\n");
            // console.log("Guess a letter!");
            inquirer.prompt([
                {
                    name: "guess",
                    message: "Guess a letter!"
                }
            ]).then(function(answers) {
                // console.log(answers.guess);
                answers.guess = answers.guess.toUpperCase();
                newWord.letterCheck(answers.guess);
                var compareWord = newWord.wordString();
                
                if (compareWord.indexOf(answers.guess) == -1) {
                    console.log("INCORRECT!\n");
                    count--;
                    console.log("You have " + count + " guesses left");
                } else {
                    console.log("CORRECT!\n");
                }
                
                guessLetter();
            });
        }
    } else {
        console.log(newWord.wordString());
        console.log("You got it right!! Next word!!");
        setWord();
        guessLetter();
    }
}

setWord();
guessLetter();