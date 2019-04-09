// Setup the empty todos array

// loadTodos
// Arguments: none
// Return value: none

// saveTodos
// Arguments: none
// Return value: none

// getTodos
// Arguments: none
// Return value: todos array

// createTodo
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports

import uuidv4 from "uuid/v4";

let todos = [];

const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Expose todos from module
const getTodos = () => todos;

const createTodo = text => {
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text: text,
      completed: false
    });
    saveTodos();
    renderTodos(todos, filters);
  }
};

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo };
