let num = 103.941;

// ToFixed()
console.log(num.toFixed(2)); // 103.94

// Math.round()
console.log(Math.round(num)); // 104

// Math.floor()
console.log(Math.floor(num)); // 103

// Math.ceil()
console.log(Math.ceil(num)); // 104

// Math.random() 0 - 0.99999
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 10 - 20
console.log(randomNum);

// Challenge
// 1 - 5
// true if correct - false if not correct

let guessNum = function(guess) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(randomNum);
  return guess === randomNum;
};

console.log(guessNum(1));
