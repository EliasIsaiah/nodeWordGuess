const Letter = class {

    constructor(letter) {

        this.letter = letter.toUpperCase(); //If a multi-character string is inputted it takes just the first character and passes it into this.letter
        this.isGuessed = false;
    }

    output() {

        if (this.isGuessed) return this.letter;

        if (this.letter === " ") return this.letter;

        return '_';
    }

    checkChar(letter) {

        if (letter.toUpperCase() === this.letter) {
            this.isGuessed = true;
            // return true;
        }
        // else return false;
    }

}

module.exports = Letter;