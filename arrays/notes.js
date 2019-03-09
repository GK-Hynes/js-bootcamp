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

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

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

// console.log(findNotes(notes, "new"));

// const note = findNote(notes, "office updates");
// console.log(note);

sortNotes(notes);
console.log(notes);
