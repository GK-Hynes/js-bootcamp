let myBook = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  pageCount: 1178
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "The Hobbit";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge
// name, age, location

let person = {
  name: "Barry",
  age: 56,
  location: "The Midlands"
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
