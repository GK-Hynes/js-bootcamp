const todos = [
  { text: "make breakfast", completed: true },
  { text: "yoga", completed: false },
  { text: "shower", completed: false },
  { text: "programme", completed: true },
  { text: "walk", completed: false }
];

// Challenge
// 1. Convert array to array of object => text, completed
// 2. Create function to remove todo by text value

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "walk");
console.log(todos);
