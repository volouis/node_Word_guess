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
        var exist = true;
        for(i in this.eachLet){
            if(this.eachLet[i].guess(chara) === 1){
                exist = false;
            }
        }
        return exist;
    }
}

module.exports = word;