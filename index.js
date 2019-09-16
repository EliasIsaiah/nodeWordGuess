const Word = require('./Word');
const inquirer = require('inquirer');

const GUESS_LIMIT = 10;

const game = {

    wordsArr: ["coding", "javascript", "object oriented programming", "bermuda", "linux",
        "visual studio", "manchester orchestra", "camera", "string theory", "dictionary",
        "thesaurus", "infinite loop", "hamburger menu", "mouse", "keyboard", "monitor", "lizard",
        "canine", "lipid", "solid", "liquid", "gas", "sphere", "rhombus", "cone", "gelato"],

    currentWord: "",

    // counter: 0,

    guesses: GUESS_LIMIT,

    gameOver: function () {
        // this.counter = 0;
        this.currentWord = "";
        this.guesses = GUESS_LIMIT;
    },

    gameIsOver: function () {
        // if (this.counter > this.wordsArr.length) return true;
        if (this.guesses < 1) return true;
        return false;
    },

    getRandomNumber: function () {
        // this.counter--;
        // console.log(this.counter);
        // if (this.counter < this.wordsArr.length) {

        return Math.floor(Math.random() * this.wordsArr.length);
        // } else this.gameOver();

        // if (this.guesses < 1) {
        //     this.gameOver();
        // }
    },

    getRandomWord: function () {
        // this.randomWord = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length)];
        random = this.getRandomNumber();
        console.log(random);
        this.currentWord = new Word(this.wordsArr[random]);
    },

    start: function () {

        if (this.currentWord === "") this.getRandomWord();
        console.log(this.currentWord.returnString());

        inquirer.prompt([{
            name: "guess",
            type: "input",
            message: "Guess a Letter"
        }]).then((response) => {

            console.log(response);

            if (!this.currentWord.charsArr.includes(response.guess)) {
                this.guesses--;
                console.log(`Incorrect. you have ${this.guesses} guesses remaining`);
            }
            this.currentWord.letterGuessed(response.guess);
            // console.log("\n" + this.currentWord.returnString());
            if (this.gameIsOver()) this.endGame();
            else this.start();
        })
    },

    endGame: function () {

        this.gameOver();

        inquirer.prompt([{
            name: "playAgain",
            type: "list",
            message: "Play again?",
            choices: ["yes", "no"]
        }]).then((response) => {

            console.log(response);
            if (response.playAgain === "yes") this.start()
            else process.exit();
        })
    }
}

game.start();