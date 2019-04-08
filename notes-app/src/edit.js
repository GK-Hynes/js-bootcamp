import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote, saveNotes } from "./notes";

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
const removeButton = document.querySelector("#remove-note");
const saveButton = document.querySelector("#save-note");
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

// Event handlers
titleElement.addEventListener("input", e => {
  const note = updateNote(noteId, {
    title: e.target.value
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener("input", e => {
  const note = updateNote(noteId, {
    body: e.target.value
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeButton.addEventListener("click", e => {
  removeNote(noteId);
  location.assign("index.html");
});

saveButton.addEventListener("click", e => {
  saveNotes();
  location.assign("index.html");
});

// Listen for changes to localStorage
window.addEventListener("storage", e => {
  if (e.key === "notes") {
    initializeEditPage(noteId);
  }
});
