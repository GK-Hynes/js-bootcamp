import moment from "moment";
import { getFilters } from "./filters";
import { sortNotes, getNotes } from "./notes";

// Generate DOM structure for a note
const generateNoteDOM = note => {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p");
  const statusEl = document.createElement("p");

  // Set up note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);

  // Set up the link
  noteEl.setAttribute("href", `edit.html#${note.id}`);
  noteEl.classList.add("list-item");

  // Set up status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);

  return noteEl;
};

// Render notes to the page
const renderNotes = () => {
  const notesEl = document.querySelector("#notes");
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(note => {
      const noteEl = generateNoteDOM(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.appendChild(emptyMessage);
  }
};

// Initialize edit page
const initializeEditPage = noteId => {
  const titleElement = document.querySelector("#note-title");
  const bodyElement = document.querySelector("#note-body");
  const dateElement = document.querySelector("#last-edited");

  const notes = getNotes();
  const note = notes.find(note => note.id === noteId);

  // Return to index.html if note not found
  if (!note) {
    location.assign(index.html);
  }

  // Populate inputs
  titleElement.value = note.title;
  bodyElement.value = note.body;
  dateElement.textContent = generateLastEdited(note.updatedAt);
};

// Generate last edited message
const generateLastEdited = timestamp => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage };
