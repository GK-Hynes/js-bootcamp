// Variable shadowing - a variable in local scope uses its value instead of that of a variable in a parent scope.
// The local variable's value overshadows the parent's

// Global ()
//// Local ()
////// Local
//// Local

// let name = "Joe";

if (true) {
  // let name = "Rob";
  if (true) {
    name = "Annemarie"; // <== leaked global
    console.log(name); // Annemarie
  }
}

if (true) {
  console.log(name); // Annemarie
}

// Leaked global
// When you assign a value to a variable but that variable was never explicitly defined, you get it defined in the global scope.
