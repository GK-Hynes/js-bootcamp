const todos = [
  { text: "make breakfast", completed: true },
  { text: "yoga", completed: false },
  { text: "shower", completed: false },
  { text: "programme", completed: true },
  { text: "walk", completed: false }
];

filters = {
  searchText: ""
};

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function(todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#filter-todos").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  const newTodo = e.target.elements.newTodo.value;
  todos.push({ text: newTodo, completed: false });
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});
