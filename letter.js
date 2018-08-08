function letter(character){
    this.character = character,
    this.correct = false,
    this.val = function(){
        if(this.correct){
            return this.character;
        }else{
            return "_";
        }
    },
    this.guess = function(pick){
        if(pick === this.character){
            this.correct = true;
        }
    }
}

module.exports = letter;