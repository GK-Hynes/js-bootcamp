// When you pass an object into a function argument, what you get as that argument's value isn't a clone of the object but a reference to the object in memory.

// The variable myAccount is a pointer to the object and so is the argument account. So changing account also changes myAccount.

// If you assign a new value to the argument, you break this binding.

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

// Challenge
// addIncome - account, income
// resetAccount - reset expenses to 0
// getAccountSummary - Account for Ger has a balance of €300, €1200 in income and €900 in expenses

let addIncome = function(account, income) {
  account.income = account.income + income;
  console.log(account);
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has a balance of €${balance}, €${
    account.income
  } in income and €${account.expenses} in expenses.`;
};

let resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
