import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";

// Render notes to the page
renderNotes();

// Add new note
document.querySelector("#create-note").addEventListener("click", e => {
  const id = createNote();
  location.assign(`edit.html#${id}`);
});

// Search notes
document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  });
  renderNotes();
});

// Filter notes
document.querySelector("#filter-by").addEventListener("change", e => {
  setFilters({
    sortBy: e.target.value
  });
  renderNotes();
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    renderNotes();
  }
});
