let myBook = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  pageCount: 1178
};

let otherBook = {
  title: "A People's History of the United States",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);

// Challenge
// Create funcion - take fahrenheit in
// Return obj with all 3 temps

let convertFahrenheit = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    clesius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  };
};

let results = convertFahrenheit(100);
console.log(results);
