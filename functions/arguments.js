// Multiple arguments can be passed via a comma seperated list

let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score;
};

let scoreText = getScoreText(undefined, 7);

console.log(scoreText);

// Challenge
let getTip = function(total, tipPercent = 0.2) {
  return total * tipPercent;
};

let tip = getTip(100, 0.15);
console.log(tip); // 20
