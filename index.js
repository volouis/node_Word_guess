var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");


var list = ["Hello", "Jurassic Park", "Avengers", "World", "Coffee", "Adidas", "Nothing Can Go Wrong"];

var wor = new Word();

var ranWord;

var guesses = 10;

newWord();
game();

function newWord(){
    ranWord = list[Math.floor((Math.random() * list.length))];
    wor.eachLet = [];

    for(i in ranWord){
        wor.eachLet.push(new Letter(ranWord[i]));
        if(ranWord[i] === " "){
            wor.eachLet[i].correct = true;
        }
    }

}

function game(){
    var winner = false;

    if(guesses === 0){
        console.log("You ran out of guesses. NEW WORD!!!")
        newWord();
        guesses = 10;
    }

    for(i in wor.eachLet){
        if(!wor.eachLet[i].correct){
            winner = false;
            break;
        }
        winner = true;
    }

    if(winner){
        console.log("Congrats you win. NEW WORD!!!")
        newWord();
        guesses = 10;
        winner = false;
    }

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "guess a letter",
        }
    ]).then(function(answer) {
        var see = wor.check(answer.name);
        if(see){
            console.log("INCORRECT!!!")
            guesses -= 1;
            console.log("you have " + guesses + " guess left")
        }else{
            console.log("CORRECT!!!")
        }
        wor.print();
        game();
    });
}