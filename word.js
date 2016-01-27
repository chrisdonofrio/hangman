var Letter = require("./letter.js");

var Word = function(wrd) {
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function() {
		for (i = 0; i < this.word.length; i++) {
			letter = this.word.charAt(i);
			var let = new Letter(letter);
			this.lets.push(let);
		}
	}

this.checkIfLetterFound = function(guessLetter) {
	whatToReturn = 0;
	for (i = 0; i < this.lets.length; i++) {
		if (this.lets[i].charac === guessLetter) {
			this.lets[i].appear = true;
			whatToReturn += 1
		}
	}
		return whatToReturn;
}

this.didWeFindTheWord = function() {
	if(this.lets.every(function(curLet) {
		return curLet.appear === true;
		}) === true) {
		return true;
	}
}

this.wordRender = function(){
    var str = "";
    for (var i = 0; i < this.lets.length; i++){
      str += this.lets[i].letterRender(this.lets[i]);
    }
    return str;
  }
}

module.exports = Word;