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
        if(pick === this.character.toLowerCase()){
            this.correct = true;
            return 1;
        }else{
            return 0;
        }
    }
}

module.exports = letter;