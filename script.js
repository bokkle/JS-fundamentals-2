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


//OBJECTS
//instead of
const mitchArray = [
  "Mitch",
  "Riccio",
  1996,
  "programmer",
  ["sani", "nedo", "benny", "bruce"],
];
//can use
const mitchObject = {
  firstName: "Mitch",
  lastName: "Riccio",
  birthYear: 1996,
  job: "programmer",
  friends: ["sani", "nedo", "benny", "bruce"],
};
console.log(mitchObject);

//retrieve info from obj...

//DOT NOTATION
console.log(mitchObject.lastName);

//BRACKET NOTATION
console.log(mitchObject["lastName"]);

const nameKey = "Name";
console.log(mitchObject["first" + nameKey]);
console.log(mitchObject["last" + nameKey]);

//if you dont know which property to show, and you get the
//info from a UI...

// const interestedIn = prompt(
//   "What do you want to know about Mitch? Choose between firstName, lastName, birthYear, job, and friends"
// );
// console.log(mitchObject[interestedIn])

// if (mitchObject[interestedIn]) {
//     console.log(mitchObject[interestedIn])
// } else {
//     console.log('Wrong request!')
// }

//add new properties

mitchObject.location = "Canada";
mitchObject["twitter"] = "@MitchIsBased";
console.log(mitchObject);

//mini challenge
//'Mitch has 3 friends and his best friend is named 'benny'
console.log(
  `${mitchObject.firstName} has ${mitchObject.friends.length} friends and his best friend is named ${mitchObject.friends[2]}`
);
//We've hired a new programmer, his name is mitch riccio, he was born in 1996 and he's brought his friend bruce with him today
console.log(
  `We've hired a new ${mitchObject.job}, his name is ${mitchObject.firstName} ${mitchObject.lastName}, he was born in ${mitchObject.birthYear} and he brought his friend ${mitchObject.friends[3]} with him today`
);

const bokkle = {
  name: "bokkle",
  class: "bruiser",
  strength: 300,
  con: 200,
  pocket: "Luna",
};

const _4PF = `${bokkle.name} is the best ${bokkle.class} on the server. He runs ${bokkle.strength} strength and ${bokkle.con} con, all of you should design your build after his. Also, he is unkillable when his pocket ${bokkle.pocket} is with him.`
console.log(_4PF)

const bokkleInfo = prompt('What would you like to know about bokkle?')

if (bokkle[bokkleInfo]) {
    console.log(bokkle[bokkleInfo])
} else {
    console.log('wrong input')
}


const bokkle = {
  name: "bokkle",
  class: "bruiser",
  strength: 300,
  birthYear: 1996,
  con: 200,
  pocket: "Luna",
  hasBFL: true,
  friends: ["yungin", "TARDY", "leilow"],

  // calcAge: function (birthYear) {
  //     return 2023 - birthYear
  // }

  // calcAge: function () {
  //     console.log(this)
  //     return 2023 - this.birthYear
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.name} is a ${this.calcAge()} year old ${this.class}. He has ${
      this.hasBFL ? "a" : "no"
    } Battlefield Legend title.`;
  },
};

console.log(bokkle.calcAge(1991));
//   console.log(bokkle['calcAge'](1996))
console.log(bokkle.age);
console.log(bokkle.getSummary());

//MINI CHALLENGE
//getSummary() summarize the data about bokkle
//'bokkle is a 27 year old bruiser. He has a/no battlefield legend title'

// LOOPS   
console.log('Bench repitition 1')
console.log('Bench repitition 2')
console.log('Bench repitition 3')
console.log('Bench repitition 4')
console.log('Bench repitition 5')
console.log('Bench repitition 6')
console.log('Bench repitition 7')
console.log('Bench repitition 8')
console.log('Bench repitition 9')
console.log('Bench repitition 10')

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Bench repitition ${rep}`)
}

const bokkle = [
  "bokkle",
  "bruiser",
  300,
  200,
  "BFL",
  ["yungin", "TARDY", "leilow"],
];

const types = [];

// for (let i = 0; i < bokkle.length; i++) {
//     console.log(bokkle[i], typeof bokkle[i])
//     types.push(typeof bokkle[i])
// }

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  let age = 2023 - years[i];
  ages.push(age);
}
console.log(ages);

//continue and break
console.log("ONLY STRINGS");
for (let i = 0; i < bokkle.length; i++) {
  if (typeof bokkle[i] !== "string") continue; //only prints the strings
  console.log(bokkle[i], typeof bokkle[i]);
}

console.log("BREAK @ NUMBER");
for (let i = 0; i < bokkle.length; i++) {
  if (typeof bokkle[i] === "number") break; //logs everything up until the first number, at which point, the loop is exited
  console.log(bokkle[i], typeof bokkle[i]);
}

//loop backwards thru array
const bokkle = [
  "bokkle",
  "bruiser",
  300,
  200,
  "BFL",
  ["yungin", "TARDY", "leilow"],
];

for (let i = bokkle.length - 1; i >= 0; i--) {
  console.log(i, bokkle[i]);
}

//LOOP WITHIN A LOOP
//log 3 sets of 5 reps each

for (let set = 1; set <= 3; set++) {
    console.log(`---SET ${set}---`)
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep}`)
    }
}

// WHILE LOOP
let rep = 1 
while (rep <= 10) {
    console.log(`WHILE: Repitition ${rep}`)
    rep++
}

let dice = Math.floor(Math.random() * 7)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.floor(Math.random() * 7)
    if (dice === 6) console.log('Winner')
}
*/
