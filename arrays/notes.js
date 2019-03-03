const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.pop());
// notes.push("New Note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

notes[2] = "This is now the new note three";

notes.forEach(function(note, index) {
  console.log(index);
  console.log(note);
});

console.log(notes.length);
console.log(notes);

// Counting... 1
for (let count = 0; count <= 2; count++) {
  console.log(count);
}

// Loop over notes
for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}
