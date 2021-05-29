'use strict';


//this line of code you must always write first help you have more secure code

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive 😁');

// function logger() {
//     console.log(' My name is Faramarz');
// }

// // calling / invoking /running function
// logger();
// logger();
// logger();
// logger();

// function foodMaker(apples, oranges) {

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = foodMaker(2, 5);
// console.log(appleJuice);
// console.log(foodMaker(2,5));

// // the  foodMaker(2, 5); return juice and so we can reuse it by define another variable
// const melonJuice =  foodMaker(0, 5);
// console.log(melonJuice);

//function declarations vs expressions------
//function declarations------------////////////


// function calcAge1(birthYear) {
//     return 2021-birthYear;
// }

// const age1 = calcAge1(1984);

// in function deceleration we can call function before deceleration before we define in the code
// const age1 = calcAge1(1984);


// function calcAge1(birthYear) {
//     return 2021-birthYear;
// }



//function expressions : function is value so you can save it in variable----

// we can not call function expressions before deceleration <===

// const calcAge2 =  function (birthYear) {
//     return 2021-birthYear;

// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow Function ====================
//we can use this form for one line function like this 
// const calcAge3 = birthyear => 2021 - birthyear;

// const age3 = calcAge3(1981);
// console.log(age3);
// // may example
// const fruitconter = fruit => 10 * fruit;

// const number = fruitconter(6);
// console.log(number);

//more complex Arrow======== 

// const yearsUntilRetirement = birthyear => {
//     const age = 2021 - birthyear; 
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));
//we must find age of person first so we define const age 
// const retirement = 65 - age; for finding year remind to retirement 
// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2021 - birthyear; 
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}years`;
// }

// console.log(yearsUntilRetirement(1991, 'faramarz'));
// console.log(yearsUntilRetirement(1981, 'mahsa'));

//functions calling other functions =====>

// function chapFruit(fruit) {
//     return fruit * 7;
// }

// function foodMaker(apples, oranges) {
//     const applePieces = chapFruit(apples);
//     const orangePieces = chapFruit(oranges);
//     const juice = `Juice with ${applePieces} apple piece and ${orangePieces} orange piece.`;
//     return juice;
// }

// console.log(foodMaker(2, 3));

//recap Function===================
// const calcAge = function(birthYear){
//     return 2021 - birthyear;
// }

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement}years`);
//       return retirement;
//     }else{
//       console.log(`${firstName} has already retired 🌹🎉`);
//       return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, 'faramarz')
// );

// console.log(yearsUntilRetirement(1951, 'farhad')
// );

//challenge 1///////////////////// 


//this part work independent
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(90, 54, 160);
//this part work independent and u do not need to use scoreDolphins to get result 
// and u can get result with any number that mach the if conditions

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins Wins 🏆 (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas Wins 🏆 (${avgKoalas} vs. ${avgDolhins})`);

//     } else {
//         console.log('No Team Wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
//hear we use random number and it works;
// checkWinner(600, 110);



//test 2 
// scoreDolphins = calcAverage (85, 54, 41);
// scoreKoalas = calcAverage (23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
//////////////////////////////////

// array.....................................................
// const friend = ['Michael', 'steven', 'peter' ]; 
// console.log(friend);

// another way of define array

// const y = new Array(1981, 1984, 2008, 2020);

// // console.log(friend[0]);
// // console.log(year[0]);
// // console.log(friend[0] ,year [0]);

// console.log(friend.length);
// console.log(friend[friend.length -1]);
// change content of array. mutate const with array
// friend[2] = 'jay';
// console.log(friend);

// can't do this 
// friend = ['bob', 'alice'];

// const firstName = 'faramarz';
// const lastName = 'bayat';
// const jonas = [firstName, lastName, 2021 - 1984, 'developer', friend];
// console.log(jonas);

// Exercise
// const calcAge = function (birthYeah) {
//     return 2021 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);
//////////////////////////
// Array Method basic push add  to last +

// const friend = ['Michael', 'steven', 'peter' ];
// const newLength = friend.push('jay'); 
// console.log(friend);
// console.log(newLength);

// //unshift method
// //Add elements to the first +
// friend.unshift('john');
// console.log(friend);

// //remove elements - from last
// friend.pop();//last element
// const poped = friend.pop();
// console.log(poped);
// console.log(friend);

// friend.shift(); // remove first element
// // const shifted = friend.shift();
// // console.log(shifted);
// console.log(friend);

// console.log(friend.indexOf('steven'));

// console.log(friend.indexOf('frank'));

// //ES6 method include
// friend.push(23);
// console.log(friend.includes('steven'));
// console.log(friend.includes('bob'));
// console.log(friend.includes('23'));

// if (friend.includes('steven')) {
//     console.log('you have friend called steven');
// }


 const calTip = function (bill) {
     return bill >= 50  && bill <= 300 ? bill * 0.15 : bill * 0.2;
   }
 
// with arrow function
// const calTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 

// const bills = [125, 555, 44];
// const tips =  [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips [2]];
// console.log(bills, tips);
//-------------------------------------------
//Object intro///////////////////////////

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'steven']
];

//define object
const jonas = {
firstName: 'jonas',
lastName: 'Schmedtmann',
age: 2037 - 1991,
job: 'teacher',
friends:  ['Michael', 'Peter', 'steven']
}

console.log(jonas);
// get property by .
console.log(jonas.lastName);
console.log(jonas.firstName);
console.log(jonas.age);
console.log(jonas.friends);
console.log(jonas.job);

// get property by []

console.log(jonas['lastName']);
// with this way we can use expression that creat value
//both firstName and lastName have Name 
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//exp 
const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');
// console.log(jonas[interestedIn]);

// in this exp we get input from user and than return value 
//like job ...etc and when we use jonas object we replace it with value we get from jonas object job = teacher or age 46😁

// we use if for when use type somethings that not in the list

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
 }else{
   console.log('Wrong request! choose between firstName, lastName, age, job, and friends')
 }

jonas.location = 'iran';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//challenge 
//"jonas has 3 friends, and his best friend is called Michael"




console.log(`${jonas.firstName} has ${jonas.friends.length} friend, and his best friends is called ${jonas.friends[0]}`);

// hear use `${jonas.firstName} to store name in it temporal literal and inside that using . object and for finding the number of friends i use array length and after that for finding best friend use array index the first one is best friend and so it is [0] ;
