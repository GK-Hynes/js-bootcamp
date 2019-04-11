import { setFilters } from "./filters";
import { loadTodos, createTodo } from "./todos";
import { renderTodos } from "./views";

renderTodos();

// Filter todos
document.querySelector("#filter-todos").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  });
  renderTodos();
});

// Add new todo
document.querySelector("#new-todo").addEventListener("submit", e => {
  const text = e.target.elements.newTodo.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.newTodo.value = "";
  }
});

// Hide completed todos
document.querySelector("#hide-completed").addEventListener("change", e => {
  setFilters({
    hideCompleted: e.target.checked
  });
  renderTodos();
});

window.addEventListener("storage", e => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
