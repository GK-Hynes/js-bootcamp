// Destructuring objects
const todo = {
  id: "agfhghjkk",
  text: "Buy clock",
  completed: false
};

const {
  text: todoText,
  completed,
  details: otherDetails = "No details provided",
  ...others
} = todo;

// const text = todo.text;
// const completed = todo.completed;

console.log(todoText);
console.log(completed);
console.log(otherDetails);
console.log(others);

// Destructuring arrays
const age = [65, 12, 21];
const [firstAge, ...otherAges] = age;

console.log(firstAge);
console.log(otherAges);

// Destructuring function parameters
const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);
