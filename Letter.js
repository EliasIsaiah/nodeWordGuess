const Letter = class {

    constructor(letter) {
        this.letter = letter.charAt(0).toUpperCase(); //If a multi-character string is inputted it takes just the first character and passes it into this.letter
        this.isGuessed = false;
    }

    output() {

        if (this.isGuessed) {

            return this.letter;
        }
        return '_';
    }

    checkChar(letter) {

        if(letter.toUpperCase() === this.letter) {
            this.isGuessed = true;
            return true;
        }
        else return false;
    }

}

let letter1 = new Letter("A");
let letter2 = new Letter("Egg");
let letter3 = new Letter("h");

letter1.checkChar("d");
letter2.checkChar("e");
letter3.output();

console.log(letter2.letter);
console.log(letter2.isGuessed);
console.log(letter1.output());

module.exports = Letter;