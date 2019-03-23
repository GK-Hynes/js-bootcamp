const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;
};

const game1 = new Hangman("Cairo", 3);
console.log(game1);

const game2 = new Hangman("Budapest", 4);
console.log(game2);
