// JS uses lexical scoping (static scoping)
// A variable defined in one part of the programme might not be accessible elsewhere

// Global scope - things defined outside of code blocks
// Local scope - things defined inside a code block

// ==================
// In a scope you can access variables defined in that scope or in any parent/ancestor scope
// ==================

// Global scope (varOne)
//// Local scope (varTwo)
////// Local scope (varFour)
//// Local scope (varThree)

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo); // varTwo is not defined
