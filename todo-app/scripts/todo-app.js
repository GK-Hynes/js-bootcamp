"use strict";

// Todos
const todos = getSavedTodos();

// Filters
const filters = {
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
  const text = e.target.elements.newTodo.value.trim();
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text: text,
      completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = "";
  }
});

// Hide completed todos
document.querySelector("#hide-completed").addEventListener("change", e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
