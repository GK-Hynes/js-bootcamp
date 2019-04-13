const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

const team = {
  name: "Kepler",
  coach: "Beth",
  players: ["Joe", "Susie", "Karen", "Saron"]
};

printTeam(team.name, team.coach, ...team.players);

let cities = ["Barcelona", "Cape Town", "Berlin"];
cities = [...cities, "Santiago"];
console.log(cities);

let house = {
  bedroom: 2,
  bathroom: 1.5,
  yearBuilt: 2015
};

let newHouse = {
  basement: false,
  ...house,
  bedroom: 3
};

console.log(house);
console.log(newHouse);

const person = {
  name: "Micah",
  age: 38
};

const location = {
  city: "San Diego",
  country: "US"
};

const overview = {
  ...person,
  ...location
};

console.log(overview);
