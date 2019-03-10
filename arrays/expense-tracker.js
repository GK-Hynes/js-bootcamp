const account = {
  name: "Barry",
  income: [],
  expenses: [],
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    let balance = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncome = totalIncome + income.amount;
    });

    balance = totalIncome - totalExpenses;

    return `${
      this.name
    } has a balance of €${balance}. €${totalIncome} in income and €${totalExpenses} in expenses`;
  }
};

// Expense - description, amount
// addExpense => description, amount
// getAccountSummary => total up all expenses => Barry has €1250 in expenses

// Add income array to account
// addIncome method = description,amount
// update getAccountSummary to get balance

// Barry has a balance of €20. €100 in income, €80 in expenses

account.addExpense("Rent", 900);
account.addExpense("Cofee", 2.5);
account.addIncome("Job", 1000);
// console.log(account);
console.log(account.getAccountSummary());
