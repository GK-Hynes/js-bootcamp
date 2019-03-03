const todos = ["make breakfast", "yoga", "shower", "programme", "walk"];

// Delete the 3rd item
// Add a new item to the end
// Remove thr first item

todos.splice(2, 1);
todos.push("dancing practice");
todos.shift();

console.log(`You have ${todos.length} todos`);
console.log(todos);
