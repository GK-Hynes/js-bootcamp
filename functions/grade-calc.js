// student's score, total possible score
// 15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// First attempt
// let getGrade = function(score, max) {
//   let percent = (score / max) * 100;
//   let gradeLetter;
//   if (percent >= 90 && percent <= 100) {
//     gradeLetter = "A";
//   } else if (percent >= 80 && percent <= 89) {
//     gradeLetter = "B";
//   } else if (percent >= 70 && percent <= 79) {
//     gradeLetter = "C";
//   } else if (percent >= 60 && percent <= 69) {
//     gradeLetter = "D";
//   } else {
//     gradeLetter = "F";
//   }
//   return `You got a(n) ${gradeLetter} (${score}/${max})!`;
// };

// let result = getGrade(90, 100);
// console.log(result);

// Refactor
const gradeCalc = function(score, max) {
  if (typeof score !== "number" || typeof max !== "number") {
    throw Error("Please provide numbers only");
  }

  const percent = (score / max) * 100;
  let gradeLetter = "";

  if (percent >= 90) {
    gradeLetter = "A";
  } else if (percent >= 80) {
    gradeLetter = "B";
  } else if (percent >= 70) {
    gradeLetter = "C";
  } else if (percent >= 60) {
    gradeLetter = "D";
  } else {
    gradeLetter = "F";
  }

  return `You got a(n) ${gradeLetter} (${percent}%)`;
};

try {
  const result = gradeCalc(15, 20);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
