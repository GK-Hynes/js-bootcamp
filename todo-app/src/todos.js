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

loadTodos();

// Save todos to localStorage
const saveTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Expose todos from module
const getTodos = () => todos;

// Create new todo
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

// Remove a todo from the list
const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle the completed value for a todo
const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

export {
  todos,
  loadTodos,
  saveTodos,
  getTodos,
  createTodo,
  removeTodo,
  toggleTodo
};
