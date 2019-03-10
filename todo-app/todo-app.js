const todos = [
  { text: "make breakfast", completed: true },
  { text: "yoga", completed: false },
  { text: "shower", completed: false },
  { text: "programme", completed: true },
  { text: "walk", completed: false }
];

// Print summary - You have 2 todos left
// Add p for each todo

const incompleteTodos = todos.filter(function(todo) {
  return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function(todo) {
  const newTodo = document.createElement("p");
  newTodo.textContent = todo.text;
  document.querySelector("body").appendChild(newTodo);
});
