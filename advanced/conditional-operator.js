// const myAge = 17;
// const message = myAge >= 18 ? "You can vote" : "You can't vote yet";

// if (myAge >= 18) {
//   message = "You can vote";
// } else {
//   message = "You can't vote yet";
// }

// console.log(message);

const myAge = 38;
const showPage = () => {
  return "Showing the page";
};
const showErrorPage = () => {
  return "Show error page";
};

const message = myAge >= 21 ? showPage() : showErrorPage();

console.log(message);

const team = ["Wes", "Scott", "Quincy", "MPJ", "Saron"];

console.log(
  team.length <= 4
    ? `Team size: ${team.length}`
    : "Too many people on your team"
);
