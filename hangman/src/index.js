import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  renderGame();
});

const renderGame = () => {
  puzzleElement.innerHTML = "";
  guessesElement.textContent = game.statusMessage;

  game.puzzle.split("").forEach(letter => {
    const letterElement = document.createElement("span");
    letterElement.textContent = letter;
    puzzleElement.appendChild(letterElement);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 5);
  renderGame();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
