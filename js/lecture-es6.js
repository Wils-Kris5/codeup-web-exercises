//let
    // Block scoped variables.
    // Use let or const from now on.


    // without block scope
//     if (true) {
//     var name = 'codeup';
// }
// console.log(name); // 'codeup'
//
// //  with block scope
// if (true) {
//     let name = 'codeup';
// }
// console.log(name); // undefined
//
// // without block scope
// for (var i = 0; i < 10; i++) {
//     // ...
// }
// console.log(i); // 10
//
// // with block scope
// for (let i = 0; i < 10; i++) {
    // ...
// }
// console.log(i); // undefined
// //The const keyword will also create block scoped variables.
//
//    /* Template Strings
// Allows for interpolation in strings.
// Variables (and expressions!) inside of ${} will be evaluated.     */
//
//     const name = 'codeup';
// console.log('Hello, ' + name + '!');
// // same as
// console.log(`Hello, ${name}!`);
//
// const name = 'codeup';
// console.log(`Hello, ${name.toUpperCase()}!`); // Hello, CODEUP!
// //for .. of
//
// for (let element of iterable) {
    // ...
//}
/*Works with NodeLists.
    can also use const instead of let.  */



//Block scoped variables.
//    Use let or const from now on.

// without block scope
// if (true) {
//     var name = 'codeup';
// }
// console.log(name); // 'codeup'

// {
//     var name = 'javier';
// }
// console.log(name);

// {
//     let lastName='ruedas';
// }
//  while(true){
//     var name = 'javier';
//     break;
//  }
//  console.log(name);
//
//
// let name = 'Inigo Montoya'
// while(true){
//     let name = 'javier';
//     break;
// }
// console.log(name)
// let name = 'Jojo';
// if(true) {let name = 'javier';}
// console.log(name);
//
// var name = 'jojo';
//
// if(true) {var name = 'javier';}
//    console.log(name)

// function scopeTester(){
//     // var anotherName = 'luis';
//    // let  anotherName = 'luis';
//     anotherName = 'luis'
// }
// scopeTester();
// console.log(anotherName);
// let anotherName = 'javier';
//
// console.log(anotherName);

// Arrow Functions
// Shorthand function syntax, except this is bound lexically.
//     Shortand for a function that returns a single expression.


//     const sayHello = function (name) {
//     return 'Hello, ' + name + '!';
// }
// // same as
// const sayHello = (name) => 'Hello, ' + name + '!';
// //Optionally, the parentheses can be omitted if there is only one argument.
//
//
//     const sayHello = name => 'Hello, ' + name + '!';
// //Can also have multiple statements.
//
//
//     const sayHello = name => {
//     const greeting = 'Hello,  ' + name + '!';
//     return greeting;
// };
// //Default Function Parameter Values
//
// // old way
// function sayHello(name) {
//     if (typeof name === 'undefined') {
//         name = 'World';
//     }
//     return 'Hello, ' + name + '!';
// }
//
// sayHello(); // "Hello, World!"
// sayHello('codeup'); // "Hello, codeup!"
//
// // es6 syntax (including template strings)
// function sayHello(name = 'World') {
//     return `Hello, ${name}!`;
// }
//
// sayHello(); // "Hello, World!"
// sayHello('codeup'); // "Hello, codeup!"
//
// // works for arrow functions as well
// const sayHello = (name = 'World') => `Hello, ${name}!`;
//
// sayHello(); // "Hello, World!"
// sayHello('codeup'); // "Hello, codeup!"
//
// // Template Literals:
//
// let name = 'Javier';
// let job = 'programmer';
// let place = 'Texas';
//
// // NEW WAY
// console.log('${name} is a ${job} in ${place}');
//
// // OBJECT DESTRUCTING
//
// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2021,
//     milleage: 12657
// };
// let make = car.make;
// let model = car.model
//
// const {malke, model, year, mileage} = car;
// console.log(car.model);
//car.model = 'Tundra';
// //
// // console.log(car.model);
// //
// // const bicycle = {
// //     make: "Schwinn"
// // }
// //
// // car.tonneau = false;
// //
// // if (car.tonneau) {
// //     console.log("That toyota has a tonneau");
// // } else {
// //     console.log("You're gonna get rain in there. And leaves.");
// // }
//
// // car = bicycle;

//ARROW FUNCTIONS:
// you can declare default values for function parameters
// const add = (num1, num2) => num1 + num2;
// console.log(add(5, 7));

// const addSomethingSpecific = (augend, addend = 25) => augend + addend;
// console.log(addSomethingSpecific(50));
//

// // you can destructre objects within the parameters
// const outputCar =({make, model, year, mileage} = car) => 'I spy a ${year} ${make}, with ${mileage} miles';
//
//

// const add = (num1, num2) => num1 + num2;
// console.log(add(5, 7));
// traditional function expression
// variable declaration keyword
// variable name
//assignment operator
// function keyword
// parameters
// code block
// inside the code block, the return statement
// var addition = function(num1, num2){
//     return num1 + num2;
//
// }
//  // new function expression with arrow syntax
// const sum = (num1, num2) => num1 + num2;
//
// // if parameters === 1 {no parentheses needed}
// const addTen = number => number + 10;
//
// // if parameters === 0 {use empty parentheses
// const helloWorld = ()=> "Hello WOrld";
// consol.log(helloWorld());
//
// const doSomething = number => {
//     if (number > 100) {
//     } else {
//             console.log("small");
//
//     }
// }

//Arrow Functions CODEUP CIRRICULUM
// Shorthand function syntax, except this is bound lexically.
//     Shortand for a function that returns a single expression.


//     const sayHello = function (name) {
//     return 'Hello, ' + name + '!';
// }
// // same as
// const sayHello = (name) => 'Hello, ' + name + '!';
// //Optionally, the parentheses can be omitted if there is only one argument.
//
//
//     const sayHello = name => 'Hello, ' + name + '!';
// //Can also have multiple statements.
//
//
//     const sayHello = name => {
//     const greeting = 'Hello,  ' + name + '!';
//     return greeting;
// };



// for ...of loop
// allows you to iterate over data types that are defined as iterable objects -- strings and arrays, as well as nodeLists.
// But not regular Objects.

// Iterate over an array
// Iterate over an array
const instructors = ["Javier", "Justin", "Jay", "David"];
// for (const name of instructors) {
//     console.log(`${name} teaches at Codeup!`);
// }

// Array with four elements
// First iteration: declares const name = "Javier"
//                  does console.log "Javier teaches at Codeup"
//                  const name goes to garbage collection
// Second iteration: declares const name = "Justin" etc.

// Iterate over a string
// for (const letter of 'Codeup'){
//     console.log(letter);
//     let theParagraphIJustCreated = document.createElement('p');
//     document.getElementsByTagName("body")[0].append(letter, theParagraphIJustCreated);
// }
// Simple alphabetic shift cipher
// let newString = '';
// for (const letter of 'Codeup'){
//     let charCode = letter.charCodeAt(0);
//     charCode++;
//     newString += String.fromCharCode(charCode);
// }
// console.log(newString);

// Difference of for...in and for...of

// for...in -- loop over the enumerable properties of an object
// for...of -- loop over the values of an iterable object

for (const index in instructors) {
    console.log(index);
}

for (const name of instructors) {
    console.log(name);
}

// To get the values in a for ... in loop

for (const index in instructors){
    console.log(`${index}: ${instructors[index]}`);
}

// Typical use of for...in: get keys and values from an object

for (const property in car) {
    console.log(`${property}: ${car[property]}`);
}
// Simple alphabetic shift cipher
// let newString = '';
// for (const letter of 'Codeup'){
//     let charCode = letter.charCodeAt(0);
//     charCode++;
//     newString += String.fromCharCode(charCode);
// }
// console.log(newString);

// Difference of for...in and for...of

// for...in -- loop over the enumerable properties of an object
// for...of -- loop over the values of an iterable object

for (const index in instructors) {
    console.log(index);
}

for (const name of instructors) {
    console.log(name);
}

// To get the values in a for ... in loop

for (const index in instructors){
    console.log(`${index}: ${instructors[index]}`);
}

// Typical use of for...in: get keys and values from an object

for (const property in car) {
    console.log(`${property}: ${car[property]}`);
} 