let name = "  Darach Ó Séaghdha ";

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = "abc123asdf098";
console.log(password.includes("password"));

// Trim
console.log(name.trim());

// Challenge
// isValidPassword
// length > 8 and doesn't contain password

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdf"));
console.log(isValidPassword("abc123%$*&"));
console.log(isValidPassword("abc123passwordf098"));
