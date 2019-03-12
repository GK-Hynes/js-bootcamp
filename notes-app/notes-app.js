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

document.querySelector("button").addEventListener("click", function(e) {
  e.target.textContent = "Clicked";
});
