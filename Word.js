const Letter = require('./Letter');

let Word = class {

    constructor(wordString) {

        this.lettersArr = [];
        wordString.split("").map(char => {
            let newChar = new Letter(char);
            this.lettersArr.push(newChar);
        })

        this.charsArr = wordString.split("");
        this.wordCompleted = "false";
    }

    returnString() {

        let wordString = [];

        this.lettersArr.map(char => {

            wordString.push(char.output());
        })

        return wordString.join(" ");
    }

    letterGuessed(letter) {

        this.lettersArr.map(char => {

            char.checkChar(letter);
        })
    }

    wordGuessed() {
        return this.lettersArr.every(letter => {

            return letter.isGuessed === true;
        })
    }
}

module.exports = Word;