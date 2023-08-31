"use strict";
/*
//FUNCTIONS
// function logger() {
//     console.log('My name is Mitch')
// }
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

//FUNCTION DELCARATION
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const myAge = calcAge1(1996);
console.log(myAge);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const myAge2 = calcAge2(1996);
console.log(myAge2);

//ARROW FUNCTION ES6
const calcAge3 = (birthYear) => 2023 - birthYear;
const myAge3 = calcAge3(1996);
console.log(myAge3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1996, 'Mitch'))
// console.log(yearsUntilRetirement(1999, 'Daryl'))

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
  return juice;
}
console.log(fruitProcessor(5, 4));

//INTRO TO ARRAYS
const friends = ["michael", "steven", "peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //last elem of array
friends[2] = "jay";
console.log(friends);
// friends = ['bob', 'alice'] THIS IS ILLEGAL, CANNOT REASSIGN
const mitch = ["mitch", "riccio", 1996, "programmer", friends];
console.log(mitch);

const y = [
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  2022, 2023,
];

const calcMyAge = (yr) => {
  return yr - 1996;
};

const age1 = calcMyAge(y[0]);
console.log(age1);
const age2 = calcMyAge(y[10]);
console.log(age2);
const age3 = calcMyAge(y[14]);
console.log(age3);
const age4 = calcMyAge(y[y.length - 1])
console.log(age4)


//add elements
const friends = ['pisani', 'pinedo', 'bruce', 'tim', 'benny']
const newLength = friends.push('xave') //push to end of array
console.log(friends)

friends.unshift('jimmy') //push to start of array
console.log(friends)

// remove elements
friends.pop
const popped = friends.pop() // last elem removed
console.log(popped + ' was removed')
console.log(friends)

friends.shift() //first elem removed
console.log(friends)

//locate elem
console.log(friends.indexOf('bruce')) //returns 2
console.log(friends.indexOf('bob')) // returns -1 if elem doesnt exist

console.log(friends.includes('bruce')) // returns true
console.log(friends.includes('bob')) // returns false

if (friends.includes('tim')) {
    console.log('Tim is your boi')
} 
*/