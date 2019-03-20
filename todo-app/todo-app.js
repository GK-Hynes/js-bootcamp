// Todos
const todos = getSavedTodos();

// Filters
filters = {
  searchText: "",
  hideCompleted: false
};

// Render todos to the page
renderTodos(todos, filters);

// Filter todos
document.querySelector("#filter-todos").addEventListener("input", e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Add new todo
document.querySelector("#new-todo").addEventListener("submit", e => {
  e.preventDefault();
  const newTodo = e.target.elements.newTodo.value;
  todos.push({
    id: uuidv4(),
    text: newTodo,
    completed: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});

// Hide completed todos
document.querySelector("#hide-completed").addEventListener("change", e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
