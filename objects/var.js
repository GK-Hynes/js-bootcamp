// var can be reassigned
// var is function scoped, not block scoped
// var declarations are hoisted to the top of the scope

age = 23;
console.log(age);
var age;

var firstName = "Rex";

firstName = "Terry";

var firstName = "Jen";

console.log(firstName); // Jen

if (10 === 10) {
  var firstName = "Billy";
}

console.log(firstName); // Billy

const setName = function() {
  var firstName = "Jen";
};

setName();
console.log(firstName); // Billy
