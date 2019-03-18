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
  notes.push({
    id: id,
    title: "",
    body: ""
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

// Unix Epoch - January 1st 1970 00:00:00
const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const dateOne = new Date("March 7 2010 03:00:00");
const dateTwo = new Date("June 25 1997 14:00:00");
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwoTimestamp) {
  console.log(dateOne.toString());
} else if (dateTwoTimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
}
