// Undefined variables

// You can declare a variable without assigning it a value. It will be assigned the value undefined.

let name;

name = "Julie";

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined function arguments
let square = function(num) {
  console.log(num);
};

square(); // undefined

// Function return values
// Undefined is the function return default value
let result = square();
console.log(result); // undefined

// Null as (re)assigned value
let age = 27;
age = null;
console.log(age);
