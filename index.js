var Letter = require("./letter.js");
var Word = require("./word.js");

var list = ["Hello", "Jurassic Park"];

var wor = new Word();

wor.eachLet.push(new Letter("h"));
wor.eachLet.push(new Letter("e"));
wor.eachLet.push(new Letter("l"));
wor.eachLet.push(new Letter("l"));
wor.eachLet.push(new Letter("o"));

// console.log(wor.eachLet);
wor.check("h");
wor.check("l");
wor.print();