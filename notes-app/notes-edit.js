const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeButton = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
console.log(notes);
const note = notes.find(function(note) {
  return note.id === noteId;
});

// Return to index.html if note not found
if (note === undefined) {
  location.assign(index.html);
}

// Populate inputs
titleElement.value = note.title;
bodyElement.value = note.body;

// Event handlers
titleElement.addEventListener("input", function(e) {
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", function(e) {
  note.body = e.target.value;
  saveNotes(notes);
});

removeButton.addEventListener("click", function(e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("index.html");
});
