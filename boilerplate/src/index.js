const calculateAverage = (target, ...numbers) => {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  const average = sum / numbers.length;
  return `The average ${target} is ${average}`;
};

console.log(calculateAverage("grade", 0, 100, 23, 75));

const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

printTeam("Kepler", "Beth", "Joe", "Susie", "Karen", "Saron");
