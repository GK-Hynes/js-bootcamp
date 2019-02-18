let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
  console.log("Account is locked");
} else if (userRole === "admin") {
  console.log("Welcome, admin");
} else {
  console.log("Welcome");
}

// Challenge
let temp = 45;

// It is freezing

// It is hot outside

// Go for it, its is pretty nice

if (temp <= 32) {
  console.log("It is freezing outside");
} else if (temp >= 110) {
  console.log("It is way too hot outside");
} else {
  console.log("Go for it, it is pretty nice outside");
}
