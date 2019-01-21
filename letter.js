function Letter(char, guessed) {
    this.char = char;
    this.guessed = guessed;
    this.check = function() {
        if (this.guessed) {
            return this.char;
        } 
        if (this.char == " ") {
            this.guessed = true;
            return (" ");
        }
        if (this.char == "-") {
            this.guessed = true;
            return ("-");
        }
        else {
            return ("_");
        }
    }
    this.isCorrect = function(letterGuess) {
        if (letterGuess === this.char) {
            this.guessed = true;
        }
        // else {
        //     console.log("Incorrect Guess");
        // }
    }
};

module.exports = Letter;


// var first = new Letter("B", false);

// console.log(first);
// console.log(first.check());
// console.log(first.isCorrect("F"));
// console.log(first);
// console.log(first.isCorrect("B"));
// console.log(first);