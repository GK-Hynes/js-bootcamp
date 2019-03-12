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

document.querySelector("#create-note").addEventListener("click", function(e) {
  e.target.textContent = "Clicked";
});

document.querySelector("#remove-all").addEventListener("click", function() {
  document.querySelectorAll(".note").forEach(function(note) {
    note.remove();
  });
});
