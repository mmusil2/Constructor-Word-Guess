var Letter = require("./Letter");

var testword = ["e", "m", "p", "e", "r", "o", "r"];

var wordArray = [];

for (i=0; i < testword.length; i++) {
    var letter = new Letter(testword[i], false);
    wordArray.push(letter);
}

console.log(wordArray);

function Word(wordArray) {
    this.wordArray = wordArray;

}





function stringWord() {

}

// var first = new Letter("B", false);


















// console.log(first);
// console.log(first.check());
// console.log(first.isCorrect("F"));
// console.log(first);
// console.log(first.isCorrect("B"));
// console.log(first);