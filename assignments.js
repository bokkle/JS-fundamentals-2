"use strict";

//ASSIGNMENT 1
console.log("Assignment 1:");

const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
};
const canada = describeCountry("Canada", 40, "Ottawa");
console.log(canada);
const usa = describeCountry("USA", 334, "Washington DC");
console.log(usa);
const italy = describeCountry("Italy", 60, "Rome");
console.log(italy);

// ASSIGNMENT 2
console.log("Assignment 2:");
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const declaration = percentageOfWorld(1441);
console.log(declaration);

//ASSIGNMENT 3
console.log("Assignment 3:");
const percentageOfWorld2 = (population) => {
  return (population / 7900) * 100;
};
const expression = percentageOfWorld2(40);
console.log(expression);

//ASSIGNMENT 4
console.log("Assignment 4:");
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(
    1
  )}% of the world`;
};
console.log(describePopulation("China", 1441));
console.log(describePopulation("Canada", 40));
console.log(describePopulation("USA", 334));

// CODING CHALLENGE 1
console.log("Coding challenge 1:");
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  avgDolphins = scoreDolphins;
  avgKoalas = scoreKoalas;
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//ASSIGNMENT 5
console.log("Assignment 5:");

const populations = [40, 355, 80, 12];

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);

//ASSIGNMENT 6

console.log("Assignment 6:");
//array of countries bordering Italy
const neighbours = ["France", "Austria", "Switzerland", "Slovenia"];
console.log(neighbours);
//add new country
neighbours.push("Utopia");
console.log(neighbours);
//delete the new country
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
} else {
  console.log("Germany is a neighbour");
}
console.log(neighbours.indexOf("France"));
neighbours[0] = "France (is dogwater)";
console.log(neighbours);

// CODING CHALLANGE 2
console.log("Coding Challenge 2:");
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �

const calcTip = (bill) => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// ASSIGNMENT 7
console.log("Assignment 7:");

const myCountry = {
  country: "Canada",
  capital: "Ottawa",
  language: "English",
  population: 40,
  neighbour: ["USA"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbour.length} neighbouring country (${this.neighbour}) and it's capital is ${this.capital}`;
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbour.length === 0 ? true : false;
    return this.isIsland;
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbour.length} neighbouring country (${myCountry.neighbour}) and it's capital is ${myCountry.capital}`
);

const boostPop = (myCountry.population += 2);
console.log(boostPop);
const lowerPop = (myCountry["population"] -= 2);
console.log(lowerPop);

//ASSIGNMENT 8
console.log("Assignment 8:");
console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
console.log(myCountry);

//CODING CHALLENGE 3
console.log("Coding Challenge 3:");
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log("They have the same BMI.");
}

//ASSIGNMENT 9
console.log("Assignment 9:");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//ASSIGNMENT 10
console.log("Assignment 10:");
// const populations = [40, 355, 80, 12];
// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
//   }
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  let percentage = percentageOfWorld(populations[i]);
  percentages2.push(`${percentage.toFixed(2)}%`);
}
console.log(
  "Population (millions):",
  populations,
  "% of world pop:",
  percentages2
);

//ASSIGNMENT 11
console.log("Assignment 11:");

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log("---Neighbour(s)---");
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}

//CHALLENGE 4
console.log("Coding Challenge 4:");

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2.push(calcTip(bills2[i]));
  totals2.push(bills2[i] + calcTip(bills2[i]));
}
console.log(bills2);
console.log("Tips:", tips2);
console.log("totals:", totals2);

const calcAvgBill = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAvgBill(totals2));
