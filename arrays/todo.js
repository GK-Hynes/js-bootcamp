const todos = [
  { text: "make breakfast", completed: true },
  { text: "yoga", completed: false },
  { text: "shower", completed: false },
  { text: "programme", completed: true },
  { text: "walk", completed: false }
];

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsTodo = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
};

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

// deleteTodo(todos, "walk");
// console.log(todos);
// console.log(getThingsTodo(todos));

sortTodos(todos);
console.log(todos);
