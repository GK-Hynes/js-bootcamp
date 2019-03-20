// arguments only exists in regular functions

// const add = function(a, b) {
//   return arguments[0] + arguments[1];
// };

const add = () => {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

// Arrow functions don't bind their this value so they are bad as methods

// const car = {
//   color: "green",
//   getSummary: function() {
//     return `The car is ${this.color}`;
//   }
// };

// const car = {
//   color: "green",
//   getSummary: () => {
//     return `The car is ${this.color}`; // undefined
//   }
// };

const car = {
  color: "green",
  getSummary() {
    return `The car is ${this.color}`;
  }
};

console.log(car.getSummary());
