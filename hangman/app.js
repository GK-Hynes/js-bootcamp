const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  renderGame();
});

const renderGame = () => {
  puzzleElement.textContent = game.puzzle;
  guessesElement.textContent = game.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 5);
  renderGame();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
