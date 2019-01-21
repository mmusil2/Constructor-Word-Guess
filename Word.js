var Letter = require("./Letter");

function Word(word) {
    this.word = word;
    var wordArray = [];
    for (i=0; i < word.length; i++) {
        var letter = new Letter(word[i], false);
        wordArray.push(letter);
    }
    // return wordArray;
    this.wordString = function() {
        var wordStr = "";
        for (i=0; i < wordArray.length; i++) {
            wordStr += wordArray[i].check();
            wordStr += " ";
        }
        return wordStr;
    }
    this.letterCheck = function(letter) {
        for (i=0; i < wordArray.length; i++) {
            wordArray[i].isCorrect(letter);
        }
        // console.log(wordArray);
        return wordArray;
    }
    this.arr = wordArray;
}

module.exports = Word;

// var newWord = new Word("emperor");

// console.log(newWord);
// console.log(newWord.wordString());
// newWord.letterCheck("r");
// console.log(newWord.wordString());
// newWord.letterCheck("e");
// console.log(newWord.wordString());


















// var first = new Letter("B", false);

// console.log(first);
// console.log(first.check());
// console.log(first.isCorrect("F"));
// console.log(first);
// console.log(first.isCorrect("B"));
// console.log(first);
// console.log(first.check());