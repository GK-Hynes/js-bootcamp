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

const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query);
    const isBodyMatch = note.body.toLowerCase().includes(query);
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "new"));

// const note = findNote(notes, "office updates");
// console.log(note);
