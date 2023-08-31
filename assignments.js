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
console.log(bills)
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
