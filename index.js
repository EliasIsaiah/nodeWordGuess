const Word = require('./Word');
const inquirer = require('inquirer');

const GUESS_LIMIT = 10;

const game = {

    wordsArr: ["coding", "javascript", "object oriented programming", "bermuda", "linux",
        "visual studio", "manchester orchestra", "camera", "string theory", "dictionary",
        "thesaurus", "infinite loop", "hamburger menu", "mouse", "keyboard", "monitor", "lizard",
        "canine", "lipid", "solid", "liquid", "gas", "sphere", "rhombus", "cone", "gelato"],
    // wordsArr: ["a"],

    currentWord: "",

    guessedLettersArr: [],

    // counter: 0,

    guesses: GUESS_LIMIT,

    gameOver: function () {
        // this.counter = 0;
        this.currentWord = "";
        this.guesses = GUESS_LIMIT;
        this.guessedLettersArr = [];
    },

    gameIsOver: function () {

        console.log("word guessed", this.currentWord.wordGuessed());
        return (this.guesses < 1) || this.currentWord.wordGuessed();
    },

    getRandomNumber: function () {

        return Math.floor(Math.random() * this.wordsArr.length);
    },

    getRandomWord: function () {

        random = this.getRandomNumber();
        this.currentWord = new Word(this.wordsArr[random]);
    },

    start: function () {

        if (this.currentWord === "") this.getRandomWord();
        console.log("\n" + this.currentWord.returnString() + "\n");

        inquirer.prompt([{
            name: "guess",
            type: "input",
            message: "Guess a Letter"
        }]).then((response) => {

            // console.log(response);

            if (!this.guessedLettersArr.includes(response.guess)) {
                this.guessedLettersArr.push(response.guess);
            }
            else {
                // console.log("bypass endgame checker");
                this.start();
                return;
            }

            if (!this.currentWord.charsArr.includes(response.guess)) {
                this.guesses--;
                console.log(`Incorrect. you have ${this.guesses} guesses remaining`);
            }

            // console.log("response.guess:");
            // console.log(response.guess);

            this.currentWord.letterGuessed(response.guess);
            // console.log("word is guessed: ", this.currentWord.wordGuessed());

            // console.log("\n" + this.currentWord.returnString());

            if (this.gameIsOver()) this.endGame();
            else this.start();
            // this.start();
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

            // console.log(response);
            if (response.playAgain === "yes") this.start()
            else process.exit();
        })
    }
}

game.start();