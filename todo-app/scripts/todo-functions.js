"use strict"

// Get saved todos from localStorage
const getSavedTodos = () => {
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

// Render todos to the page
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(todo => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Generate todo DOM
const generateTodoDOM = todo => {
  const todoElement = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  // Set up todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  todoElement.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Set up todo text
  todoText.textContent = todo.text;
  todoElement.appendChild(todoText);

  // Set up todo button
  removeButton.textContent = "x";
  todoElement.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoElement;
};

// Generate summary DOM
const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};