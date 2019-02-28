let myAccount = {
  name: "Ger",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  // account = {};
  account.expenses = account.expenses + amount;
  // console.log(account);
};

addExpense(myAccount, 2.5);
console.log(myAccount);

// When you pass an object into a function argument, what you get as that argument's value isn't a clone of the object but a reference to the object in memory.

// The variable myAccount is a pointer to the object and so is the argument account. So changing account also changes myAccount.

// If you assign a new value to the argument, you break this binding.
