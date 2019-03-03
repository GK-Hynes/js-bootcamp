const todos = ["make breakfast", "yoga", "shower", "programme", "walk"];

todos.splice(2, 1);
todos.push("dancing practice");
todos.shift();

console.log(`You have ${todos.length} todos`);

// Print each item's index and content
todos.forEach(function(todo, index) {
  console.log(`${index + 1}. ${todo}`);
});

for (let count = 0; count < todos.length; count++) {
  console.log(`${count + 1}. ${todos[count]}`);
}
