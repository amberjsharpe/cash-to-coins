// Put coins in your piggy bank

const piggyBank = {quarters: 26, dimes: 39, nickels: 5, pennies: 7};

// What is the value of each

const coinValue = {quarters: .25, dimes: .10, nickels: .05, pennies: .01};

// Get coin amounts with math
let quartersValue = piggyBank.quarters * coinValue.quarters;
let dimesValue = piggyBank.dimes * coinValue.dimes;
let nickelsValue = piggyBank.nickels * coinValue.nickels;
let penniesValue = piggyBank.pennies * coinValue.pennies;

// Add coin amounts together

var piggyCash = quartersValue + dimesValue + nickelsValue + penniesValue;

// Make it rain
console.log(piggyCash);



