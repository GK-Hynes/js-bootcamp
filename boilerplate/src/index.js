// const calculateAverage = (target, ...numbers) => {
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += num;
//   });
//   const average = sum / numbers.length;
//   return `The average ${target} is ${average}`;
// };

// console.log(calculateAverage("grade", 0, 100, 23, 75));

// const printTeam = (team, coach, ...players) => {
//   console.log(`Team: ${team}`);
//   console.log(`Coach: ${coach}`);
//   console.log(`Players: ${players.join(", ")}`);
// };

// printTeam("Kepler", "Beth", "Joe", "Susie", "Karen", "Saron");

// const printTeam = (teamName, coach, ...players) => {
//   console.log(`Team: ${teamName}`);
//   console.log(`Coach: ${coach}`);
//   console.log(`Players: ${players.join(", ")}`);
// };

// const team = {
//   name: "Kepler",
//   coach: "Beth",
//   players: ["Joe", "Susie", "Karen", "Saron"]
// };

// printTeam(team.name, team.coach, ...team.players);

// let cities = ["Barcelona", "Cape Town", "Berlin"];
// cities = [...cities, "Santiago"];
// console.log(cities);

// let house = {
//   bedroom: 2,
//   bathroom: 1.5,
//   yearBuilt: 2015
// };

// let newHouse = {
//   basement: false,
//   ...house,
//   bedroom: 3
// };

// console.log(house);
// console.log(newHouse);

// const person = {
//   name: "Micah",
//   age: 38
// };

// const location = {
//   city: "San Diego",
//   country: "US"
// };

// const overview = {
//   ...person,
//   ...location
// };

// console.log(overview);

// Destructuring objects
const todo = {
  id: "agfhghjkk",
  text: "Buy clock",
  completed: false
};

const {
  text: todoText,
  completed,
  details: otherDetails = "No details provided",
  ...others
} = todo;

// const text = todo.text;
// const completed = todo.completed;

console.log(todoText);
console.log(completed);
console.log(otherDetails);
console.log(others);

// Destructuring arrays
const age = [65, 12, 21];
const [firstAge, ...otherAges] = age;

console.log(firstAge);
console.log(otherAges);

// Destructuring function parameters
const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);
