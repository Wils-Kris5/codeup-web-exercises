"use strict";


alert("Welcome to my website!");

console.log("hello from external Javascript");
var favColor = prompt("what's your favorite color?");

alert(favColor + "Wow thats my favorite too");
console.log('The user entered: ' + favColor);

// Movie Rentals
var pricperDay = 3;
var littleMermDays = prompt("How many days will you be renting the Little Mermaid?");
var broBearDays = prompt("How many days will you be renting Brother Bear");
var hercDays = prompt("How many days will you be renting Hercules?");
var totalRentalCost = (littleMermDays * 3) + (broBearDays * 3) + (hercDays * 3);
var totalRentalCost = alert("Your total will be $" +
    (parseInt(littleMermDays) + parseInt(broBearDays) + parseInt(hercDays)) * parseInt(pricePerDay));


// Hourly Rate
var googleDollars = 400;
var amazonDollars = 380;
var facebookDollars = 350;
var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

var totalPayment;

totalPayment = googleHours * googleDollars;
 + amazonHours * amazonDollars
+ facebookHours * facebookDollars;


// Product Offer
var numberOfItemsForDiscount;
var numberOfItems; // number
var offerIsNotExpired; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = premiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);


// Password Validator
var username = 'codeup';
var password = 'notastrongpassword';

 var passIsCorrectLength = password.length >= 5;
var passIsTrim = password === password.trim();
var noUsernamePass = password.indexOf(username) === -1;
var usernameIsCorrectLength = username.length <= 20;
var usernameIsTrim = username === username.trim();
var passIsValid = passIsCorrectLength && noUsernamePass && passIsTrim;
var usernameIsValid = usernameIsCorrectLength && usernameIsTrim;
var isValidRegistration = passIsValid && usernameIsValid;

//Student Enrollment
var classIsNotFull; // boolean
var classSchedulesCheck; // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;


// Password validator
var passIsCorrectLength = password.length >= 5;
var passIsTrim = password === password.trim();
var noUsernamePass = password.indexOf(username) === -1;
var usernameIsCorrectLength = username.length <= 20;
var usernameIsTrim = username === username.trim();
var passIsValid = passIsCorrectLength && noUsernamePass && passIsTrim;
var usernameIsValid = usernameIsCorrectLength && usernameIsTrim;
var isValidRegistration = passIsValid && usernameIsValid;

// // Pre-lecture questions:
// //   - What is a function?
// A function is a reusable block of code that performs a specified task, usually taking an input and producing an output.
//
// //   - How are functions first-class citizens in JS?
// in designing or assigning a function it can use and be used of all elements and make ups in javascript
//
// //   - What is the difference between an argument and a parameter?
//
// defining = parameters is the variable listed inside the parentheses in the function definition
// calling = arguments - is the value that is sent to the function when it is called
//
//
// //   - What is the difference between a function expression and function declaration?
// The main difference between a function expression and a function declaration is the function name,
// which can be omitted in function expressions to create anonymous functions.
//
// //   - What is the difference between the values stored in the variables in the following statements:
// values stored in functions are called "local variables" var x is INVOKING OR CALLING THE FUNCTION

//     var x = someFunction(); is the returned value of the function

//     var y = someFunction; parameter- How functions take in input, defining




