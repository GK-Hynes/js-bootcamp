// Named export
// Default export

const add = (a, b) => a + b;

const name = "Bob";

const square = x => x * x;
console.log("From my code");

export { add, name, square as default };
