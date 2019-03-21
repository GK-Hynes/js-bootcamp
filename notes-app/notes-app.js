// Get notes from localStorage
let notes = getSavedNotes();

// Filters
const filters = {
  searchText: "",
  sortBy: "byEdited"
};

// Render notes to the page
renderNotes(notes, filters);

// Add new note
document.querySelector("#create-note").addEventListener("click", e => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp
  });
  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

// Search notes
document.querySelector("#search-text").addEventListener("input", e => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// Filter notes
document.querySelector("#filter-by").addEventListener("change", e => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
