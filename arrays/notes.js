const notes = [
  {
    title: "My next trip",
    body: "Go to Iceland"
  },
  {
    title: "Habits",
    body: "Eating better"
  },
  {
    title: "Office updates",
    body: "Get a new monitor"
  }
];

// console.log(notes.pop());
// notes.push("New Note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

// notes[2] = "This is now the new note three";

// notes.forEach(function(note, index) {
//   console.log(index);
//   console.log(note);
// });

// Loop over notes - incrementing
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// Loop over notes - decrementing
// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// Two objects do not equal each other if they have the same object properties
// Two objects only equal each other if they point to the same object in memory
// For this reason, indexOf can't be used to search through an array of objects, use findIndex instead

// let someObject = {};
// let otherObject = someObject;
// console.log({} === {}); // false
// console.log(someObject === otherObject); // true

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function(note, index) {
//   console.log(note);
//   return note.title === "Habits";
// });

// console.log(index);

const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, "office updates");
console.log(note);
