// How much cash

var cashAmount = ( 10.68 ) * 100;

// Coin values 

var quarterValue = 25;
var dimeValue = 10;
var nickelValue = 5;
var pennyValue = 1;

// Number of Quarters
var quartersSum = (cashAmount / quarterValue);
var numofQuarters = Math.floor(cashAmount / quarterValue);
console.log(quartersSum);
console.log(numofQuarters);


// Number of Dimes
var dimesSum = (cashAmount - (numofQuarters * quarterValue));
var numofDimes = Math.floor(dimesSum / dimeValue);
console.log(dimesSum);
console.log(numofDimes);

// Number of Nickels 
var nickelsSum = dimesSum - (numofDimes * dimeValue);
var numofNickels = Math.floor(nickelsSum / nickelValue);
console.log(nickelsSum);
console.log(numofNickels);

// Number of Pennies
var penniesSum = nickelsSum - (numofNickels * nickelValue);
var numofPennies = Math.floor(penniesSum / pennyValue);
console.log(penniesSum);
console.log(numofPennies);

// Place to put coins

var coinJar = {quarters: numofQuarters, dimes: numofDimes, nickels: numofNickels, pennies: numofPennies};
console.log(coinJar);







