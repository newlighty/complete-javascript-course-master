/*let js = "amazing";
if (js === "amazing") alert("javascript is fun!");

console.log(40 + 8 + 23 - 10);
console.log('faramarz agho');
// define varible
let firstName = "kachal";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 234);
// console.log(typeof 'farfar');
javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);
javascriptIsFun = 34;
console.log(typeof javascriptIsFun);

let fuck;
console.log(fuck);
console.log(typeof fuck);

fuck = 1400;
console.log(fuck);
console.log(typeof fuck);
we use let for declar varibale that we can change later and empty variable

let age = 30;
age = 31;


and we use const for varible that are not changed 

const birthYear = 1991;
birthYear = 1990; --> we can not do that it runs to error 

do not use var anymore it is deprecated use const
*/
// Math operators=================
// const now = 2021;
// const agefary = now - 1984;
// const agemasy = now - 2001;
// console.log(agefary, agemasy);
// console.log(agefary * 3, agemasy/ 5, 2** 3);

// const firstName = 'Faramarz';
// const lastName = 'Bayat';
// console.log(firstName + ' ' + lastName);

// // Assignment operators====================
// let x = 10 + 5;
// console.log(x);
// x += 10;
// // x = x + 10 = 25;
// console.log(x);

// x *= 10;
// // x = x * 10 = 250;
// console.log(x);

// x++;
// console.log(x);
// //excuted from right to left

// // comparison oprators ===================
// console.log(agefary > agemasy);
// console.log(agemasy >= 18);

// const now = 2021;
// const agefary = now - 1984;
// const agemasy = now - 2001;

// console.log(now - 1991 > now -  2018);
// // در اینجا اول عدد 2018 کم میشود از 1991 اضافه میشود بعد
// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10 opration from assignment from right to left =

// //اول قسیم انجام میشه بعد بعلوه میشه
// // const averageAge = agefary + agemasy / 2  --> 37 20 47
// const averageAge = (agefary + agemasy) / 2
// //پرانتز بالاتری اولویت را دارد پس اول عملایات داخل پرانتز انجام میشود بعد تقسم و میانگین درست میشود
// //37 20 28.5
// console.log(agefary, agemasy, averageAge);

//chalenge one ===============

// const markmass = 78;
// const markheight = 1.69;

// const johnmass  = 92;
// const johnheight = 1.95;

// const BMIMark = markmass / markheight ** 2 ;
// const BMIJohn = johnmass / johnheight ** 2;

// const markheightBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markheightBMI);

// const markmass2  = 95;
// const markheight2 = 1.88;

// const johnmass2 = 85;
// const johnheight2 = 1.76;

// const BMImark2 = markmass2 / markheight2 ** 2;
// const BMIJohn2 = johnmass2 / johnheight2 ** 2;

// const markheight2BMI = BMImark2 > BMIJohn2;

// console.log(BMImark2, BMIJohn2, markheight2BMI);

// end of chalenge ======================

// const frank = 35;  Strings
// const ali = 28;
// const olderSon = frank > ali;
// console.log(olderSon);
/*
const firstName = 'faramarz';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + 
(year - birthYear) + 'years old ' + job  + ' !';

console.log(jonas);

const faramarz = `I'm ${firstName}, a ${year - birthYear} year old ${job ,''}!`;
console.log(faramarz);

const love = 'love';
const you = 'mahsa';
const loveme = `I ${love}, you ${you}`;
console.log(loveme);

console.log(`just a regular string...`

)

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
 multiple
 lines`);
end of srtings===============
 */
// if condition-part===============
// const age = 19;
// const ageLisens = age >= 18;

// if(ageLisens){
//     console.log(`Sara can start driving licence 🚒🚗`);
// }

//strings
// const age = 15;

// if (age >= 18) {
//     console.log(`Sara can start driving licence 🚒🚗`);
// } else {
//     const yearleft = 18 - age;
//     console.log(`sara is too young. wait another${yearleft} years 😁`);
// }
// // ---------------------------
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
// -----------------------------
//--chalange - 2--------------
// const markmass = 78;

// const markheight = 1.69;

// const johnmass = 92;
// const johnheight = 1.95;

// const BMIMark = markmass / markheight ** 2;
// const BMIJohn = johnmass / johnheight ** 2;

// // const markheightBMI = BMIMark > BMIJohn;

// // console.log(BMIMark, BMIJohn, markheightBMI);

// if (BMIMark > BMIJohn) {

//     console.log(`Mark's(${BMIMark}) BMI is higher than John's(${BMIJohn}) ✔ `);
// } else {
//     const newLocal = `John's BMI is higher than Mark's!`;

// }

//end of chalenge-2----

// type conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log( String(23), 23);
// console.log( typeof String(224));

//coercion
// console.log('I am ' +  23 + ' years old');
// //convert number to string   plus +
// console.log('23' - '10' - 3);
// //string converted to number with -
// console.log ('23' * '2');
// //mutltplay convert string to number and do the calculation
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log('10' - '4'- '3' -2+ '5');
//-------------------------------
//truthy & falsy
//5 falsy values: 0, '', undefined, null ,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// //we get false if money value is 0 otherwise like 10 true.
// const money = 0;
// if (money) {
//     console.log("Dont spand it all");
// }else{
//     console.log("you should got job");
// }

// //------------------
// // let height = 54; when you use height varaible as undifined it became falsy
// let height;
// if (height) {
//    console.log(`height is defind`);
// } else {
//     console.log('height is undefind');
// }
//------------------
//equality oprator == vs ===
// === only return true if the condition mach
// if we put '18' in hear it,s not working strict dont have type conversion most time try use this === rather this ==
// const age = 18;
// if (age === 18) console.log('you just became an adult (strict) 😍' );

// if (age == 18) console.log('you just became an adult (loose)😍' );

// //we must use Number keyword to convert string to number when we use ===

// const favorit = Number( prompt(`what's your favorit number? 💗`));
// console.log(favorit);
// // console.log(typeof favorit);

// if (favorit == 23) {
//    console.log(  `cool lucky number👍`);
// }

// it is not working strict do not have type conversion use this all the time
// if (favorit === 23) {
//     console.log(`cool 23 lucky number👍`);
//  } else if (favorit === 7) {
//      console.log('7 is cool number');
//  } else{
//      console.log('Number is not 23 or 7');
//  }

//-------
// we use !== oprator for not equall and this is strict version !== we must us this not this !=
// if (favorit !== 23) {
//     console.log('why not 23 😒');
// }
//end of equlity vs--------------------

//bolean logic-------------------
// age = 16;
// if (age> 20 & age < 30) {
//     console.log('you have passd')
// }else {
//     console.log(`you must waite more time `);
// }

// const hasDriversLicense = true; //A
// const hasGoodVision = true;  //B

// console.log(hasDriversLicense && hasGoodVision);

// console.log(hasDriversLicense ||hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`she can drive`)
// }else{
//     console.log(`somone else do it😘`);
// }
// how to use boolean with tree condtions----------
// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// const hasDriversLicense = true; //A
// const hasGoodVision = true;  //B
// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`sarah is able to drive!`);
// }else{
//     console.log(`someone else should drive`);
// }
// what happend above we needed tree true and for this case we must set
// so when this part run  !isTired means (is not tired ) the const we delclear  const isTired = false; means she is not and codition became true👌;

// const BMIMark = markmass / markheight ** 2;
// chalenge 3 my way

// const Dolphins  =   (96 + 108 + 89) + (97 + 112 + 101) + (97 + 112 + 101);

// const averageDolpins = Dolphins / 3 ;
// console.log(averageDolpins);
// const Koalas = (88 + 91 + 110) + (109 + 95 + 123) + (109 + 95 + 106);
// const averageKoalas = Koalas / 3;
// console.log(averageKoalas);

// if (averageDolpins > averageKoalas) {
//     console.log("Team Dolphin are Winner🏆");
// } else if (averageKoalas > averageDolpins) {
//     console.log("Team Koalas are Winner🏆");

// }else if (averageDolpins === averageKoalas) {
//     console.log(`you got drew🏆🏆`);
// }

// const Dolphinsdraw  =   (50 + 50 + 50) + (50 + 50 + 50) + (50 + 50 + 50);
// const averageDolpinsDrew = Dolphinsdraw / 3 ;
// console.log(averageDolpinsDrew);

// const Koalasdraw    =   (50 + 50 + 50) + (50 + 50 + 50) + (50 + 50 + 50);
// const averagKoalasDrew = Koalasdraw / 3 ;
// console.log(averagKoalasDrew);

// if (averageDolpinsDrew === averagKoalasDrew) {
//    console.log(`you got drew🏆🏆`);
// }

// solotion 2

// const scoreDolphins = (97 + 112+ 81) / 3;

// const scoreKoalas = (109 + 95 + 86) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Team Dolphin are Winner🏆");
// }else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("score koalas is winner 🏆");
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`you got drew🏆🏆`);
// }else {
//     console.log(`none win the 👎`);
// };

//End of chalenge 3

// Swich Statment

// const day = 'friday';

// switch (day) {
//     case "monday": //day === 'monday';
//        console.log('plan course stracture');
//        console.log('go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//     console.log('write code examples');
//     break;
//     case 'friday':
//         console.log('Recording videos');
//          break;
//          case 'saturday':
//          case 'sauday':
//              console.log('Enjoy the weekend😘 ');
//              break;
//     default:
//         console.log('Not a vaild day !');
//         break;
// };

// if (day === 'monday') {
//     console.log('plan course stracture');
//     console.log('go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }else if (day ==='wednesday' || day==='thursday' ) {
//      console.log('Prepare theory videos');
// }else if (day === 'friday') {
//     console.log('Recording videos');
// }else if (day === 'saturday' || day === 'suday') {
//     console.log('Enjoy the weekend😘 ');
// }else{
//     console.log('Not a vaild day !');
// };

// end of swich statment;
//|--------------------------------------|

//Conditional Operator (Ternary)
//this type of condition is one line and must have else exp": console.log('I like to drink water 💧');

// const age = 17;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💧');
// we save conditon in varible(drink).
// const age = 18;
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// //if else way
// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// }else{
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// // using for template literal
// console.log(`I like to drink ${age >= 10 ? 'wine 🍷' : 'water 💧'}`);

// mdn exm
// const age = 16;
// const beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage); // "Beer"

// // handling null values mdn

// let greeting = person => {
//     let name = person ? person.name : `stranger`
//     return `Howday, ${name}`
// }
// console.log(greeting({name: `Alice`}));
// console.log(greeting(null));

//also using as chain
// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;

// Equivalent to:

// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

//chalenge 4===============
// const bill = 450;
// // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// const tip = bill <= 400 && bill >= 70 ? bill * 0.1 : bill * 0.5;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`);
//پایان چالش 4
//------------------------
//
//Assignments ----------------------------------------

//JavaScript Fundamentals – Part 1-----------------
//LECTURE1: Values and Variables-->
// const country = `iran `;
// const continent = `Asia `;
// const population = 80; //in miluons
// console.log(country);
// console.log(continent);
// console.log(population);

//LECTURE: Data Types----------------------
// language = "farsi";
// const country = "iran";
// const continent = "Europe";
// const isIsland = false;
// isIsland = true;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//LECTURE: Basic Operators (My Way)-----------------
// const finland = 6;
// let populationSum = population / 2;
// console.log(populationSum);
// populationSum++;
// console.log(populationSum);

// if (finland >= country) {
//   console.log(finland);
// } else {
//   console.log(country);
// }

// const franceAve = 33;
// if (franceAve > population) {
//   console.log("fraance has more people ");
// } else {
//   console.log(`we have more people`);
// }
//this also solotion LECTURE: Strings and Template Literals---------

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// const description1 =
//   country +
//   "is in" +
//   continent +
//   ",and its" +
//   population +
//   " million people speak " +
//   language;
// console.log(description1);

// solotion main for LECTURE: Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description1);

// LECTURE: Taking Decisions: if / else Statements (My Way)---------------------------
// if (population > 33) {
//   console.log(`iran ${population} million population is above the averege`);
// } else {
//   console.log(`iran population is ${33 - population} million below the avrege`);
// }

//LECTURE: Taking Decisions: if / else Statements main-------------------
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
//   } else {
//   console.log(
//   `${country}'s population is ${33 - population} million
//   below average`,
//   );
//   }

//=======================
//LECTURE: Type Conversion and Coercion
// minus - oprator covert srting to number;
// plus + oprator convert number to string;
// console.log("9" + "7");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123 < 57");
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// console.log("22" / "2");
// console.log("200" - "20");
// console.log("70" < "57");

// LECTURE: Equality Operators: == vs. ===  -------------------------
//prompt give you input interface in browser so you can insert nuber or string in it

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

//=== does not have type conversion so we must convert it using Number or it,s not working like
// like line above
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const faramarzMind = Number(prompt("کسش چقدر  خله فرامرز"));

// if (faramarzMind === 1000) {
//   console.log("همین اندازه کم دارم🤣😂😊");
// } else {
//   console.log("بیشتر ازایت حرفها وظع خرابه");
// }

// const salad = Number(prompt("برای سلات برای دو نفر چند تا خیار لازم هست"));
// // const salad = prompt("برای سلات برای دو نفر چند تا خیار لازم هست");

// if (salad === 1) {
//   console.log("👍خیارش خوبه کاکو");
// } else {
//   console.log("🤢نه ایقد خیار رو  زیاده پدوک میکنیم");
// }

//LECTURE: Logical Operators=================
// const country = "iran";
// const speakEnglish = true;
// const notIcland = true;
// const population = 60;
// const language = "farsi";
// if (population < 50 && speakEnglish && notIcland) {
//   console.log("You should live in Portugal");
// } else {
//   console.log("Portugal does not meet your criteria");
// }

// //manin solotion
// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

//LECTURE: The switch Statement===========

//switch (day) {
//     case "monday": //day === 'monday';
//        console.log('plan course stracture');
//        console.log('go to coding meetup');
//         break;

// const language = "chinese";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "farsi":
//     console.log("one of greatest languge ever spoken");
//     break;

//   default:
//     console.log("Great language too :D");
//     break;
// }

// const countryPupulation = 33;
// const country = "iran";
// countryPupulation > 33
//   ? console.log("iran puplation is above the avreg")
//   : console.log(`Portugal's population is below average`);

//main ansrew
// console.log(
//   `${country}'s population is ${
//     countryPupulation > 33 ? "above" : "below"
//   } avrege`
// );
//Assignments  Ends ----------------------------------------
