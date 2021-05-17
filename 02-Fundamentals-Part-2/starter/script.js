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

// array
const friend = ['Michael', 'steven', 'peter'];
console.log(friend);

// another way of define array

const year = new Array(1981, 1984, 2008, 2020);