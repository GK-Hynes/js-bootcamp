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

const filters = {
  searchText: ""
};

// const user = {
//   name: "Joe",
//   age: 29
// };

// userJSON = JSON.stringify(user);

// console.log(userJSON);

// localStorage.setItem("user", userJSON);

const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);

console.log(`${user.name} is ${user.age}`);

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  e.target.textContent = "Clicked";
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
