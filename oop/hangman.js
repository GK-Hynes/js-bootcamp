const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ["c", "e"];
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

const game1 = new Hangman("Cairo", 3);
console.log(game1.getPuzzle());

const game2 = new Hangman("Budapest", 4);
console.log(game2.getPuzzle());
