// Multiple arguments can be passed via a comma seperated list

let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} = Score: ${score}`;
};

let scoreText = getScoreText(undefined, 7);

console.log(scoreText);

// Challenge
// Return string: A 20% tip on €50 would be €10
let getTip = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on €${total} would be €${tip}`;
  // return `A ${tipPercent * 100}% tip on €${total} would be €${total * tipPercent}`;
};

let tip = getTip(50, 0.2);
console.log(tip);
