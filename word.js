var Letter = require("./letter.js")

function word(){
    this.eachLet = [],
    this.print = function(){
        var soFar = "";
        for(i in this.eachLet){
            soFar += this.eachLet[i].val();
        }
        console.log(soFar);
    },
    this.check = function(chara){
        for(i in this.eachLet){
            this.eachLet[i].guess(chara);
        }
    }
}

module.exports = word;