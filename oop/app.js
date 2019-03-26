// Primitive value: string, number, Boolean, null, undefined
// Everything else is an object: objects, arrays, functions

// null and undefined are true primitives
// strings, numbers and Booleans have an object wrapper

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = "Computer";
console.log(product);
