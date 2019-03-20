// Arrow function shorthand
const square = num => num * num;

const squareLong = num => {
  return num * num;
};

console.log(square(5));

const people = [
  { name: "Joe", age: 28 },
  { name: "Steve", age: 35 },
  { name: "Lucy", age: 31 }
];

const under30 = people.filter(function(person) {
  return person.age < 30;
});

const over30 = people.filter(person => person.age > 30);

console.log(under30);
console.log(over30);

const thirtyOne = people.find(person => person.age === 31);
console.log(thirtyOne);
