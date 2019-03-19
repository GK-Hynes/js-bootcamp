// Get notes from localStorage
let notes = getSavedNotes();

// Filters
const filters = {
  searchText: ""
};

// Render notes to the page
renderNotes(notes, filters);

// Add new note
document.querySelector("#create-note").addEventListener("click", function(e) {
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
document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// Filter notes
document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});

window.addEventListener("storage", function(e) {
  if ((e.key = "notes")) {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
