let temp = 55;

// Logical And Operator - True if both sides are true
// Logical Or Operator - True if one side is true

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice outside");
} else if (temp < 0 || temp > 100) {
  console.log("Do not go outside!");
} else {
  console.log("Eh, do what you want");
}

// Challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? Only offer vegan dishes

// At least one vegan. Offer some vegan options

// Neither are vegan. Offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer vegan options");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Offer some vegan options");
} else {
  console.log("Offer anything on the menu");
}
