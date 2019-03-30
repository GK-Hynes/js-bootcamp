// HTTP (Hypertext Transfer Protocol)
// Request
// Response

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("New York", 3);

puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.puzzle;
  guessesElement.textContent = game1.statusMessage;
});

// Making an HTTP Request
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});
request.open("GET", "http://puzzle.mead.io/puzzle");
request.send();
