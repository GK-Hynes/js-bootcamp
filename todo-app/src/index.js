// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import { getFilters, setFilters } from "./filters";
import {
  loadTodos,
  saveTodos,
  getTodos,
  createTodo,
  removeTodo,
  toggleTodo
} from "./todos";

import { renderTodos, generateTodoDOM, generateSummaryDOM } from "./views";

renderTodos();

// Filter todos
document.querySelector("#filter-todos").addEventListener("input", e => {
  filters.searchText = e.target.value;
  renderTodos();
});

// Add new todo
document.querySelector("#new-todo").addEventListener("submit", e => {
  e.preventDefault();
  createTodo(e.target.value);
});

// Hide completed todos
document.querySelector("#hide-completed").addEventListener("change", e => {
  filters.hideCompleted = e.target.checked;
  renderTodos();
});

console.log(getFilters());
console.log(setFilters());
console.log(loadTodos());
