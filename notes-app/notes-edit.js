const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
const removeButton = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(function(note) {
  return note.id === noteId;
});

// Return to index.html if note not found
if (note === undefined) {
  location.assign(index.html);
}

// Populate inputs
titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

// Event handlers
titleElement.addEventListener("input", function(e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", function(e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeButton.addEventListener("click", function(e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("index.html");
});

// Listen for changes to localStorage
window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find(function(note) {
      return note.id === noteId;
    });

    // Return to index.html if note not found
    if (note === undefined) {
      location.assign(index.html);
    }

    // Populate inputs
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
