const Letter = require('./Letter');

let Word = class {

    constructor(wordString) {

        this.lettersArr = [];
        

        wordString.split("").map(char => {
            let newChar = new Letter(char);
            this.lettersArr.push(newChar);
        })
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
}

module.exports = Word;

// let word1 = new Word("hotdogs");
// let word2 = new Word("steak and cheese");

// console.log(word2.returnString());
// word2.letterGuessed("a");
// console.log(word2.returnString());
// word2.letterGuessed("e");
// console.log(word2.returnString());
// module.exports = Word;
    // const allowedChars = /^[A-Za-z]+$/;

    // if (inputtxt.value.match(allowedChars)) {

    //     let newChar = new Lettter(char)
    //     this.lettersArr.push()
    // }
    // else return "Please enter an alphabet character"