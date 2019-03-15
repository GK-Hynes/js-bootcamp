// Get notes from localStorage
const notes = getSavedNotes();

// Filters
const filters = {
  searchText: ""
};

// Render notes to the page
renderNotes(notes, filters);

// Add new note
document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    title: "",
    body: ""
  });
  saveNotes(notes);
  renderNotes(notes, filters);
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
