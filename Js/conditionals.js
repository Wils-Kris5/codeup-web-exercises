"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') === returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
  function analyzeColor(color) {
      if (color === 'blue') {
          return 'blue is the color of the sky';
      } else if (color === 'red') {
          return 'Strawberries are red';
      } else {
          return 'I don\'t know anything about ' + color;
  }

  }

console.log(analyzeColor('blue'), 'blue is the color of the sky');
console.log(analyzeColor('red'), 'Strawberries are red');
console.log(analyzeColor('cyan'), 'I don\'t know anything about cyan');
console.log(analyzeColor('purple'), 'I don\'t know anything about purple');
// // Don't change the next two lines!
// // These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
 var colorSwch;
 switch (color) {
    case 'blue':
        colorSwch =  'blue is the color of the sky';
        break;
     case 'red':
         colorSwch = 'Strawberries are red';
           break;
    default:
    colorSwch = 'I don\'t know anything about' + color;
 }
  return colorSwch;
}

console.log(analyzeColor('blue'), 'blue is the color of the sky');
console.log(analyzeColor('red'), 'Strawberries are red');
console.log(analyzeColor('cyan'), 'I don\'t know anything about cyan');
console.log(analyzeColor('purple'), 'I don\'t know anything about purple');

   /**
    * TODO:
    * Prompt the user for a color when the page loads, and pass the input from the
    * user to your `analyzeColor` function. Alert the return value from your
    * function to show it to the user.
    */
   // var userColor = prompt('Please enter a color').toLowerCase();
   // alert(analyzeColor(userColor));
   //


   /* ########################################################################## */

  /**
   * TODO:
   * Suppose there's a promotion in Walmart, each customer is given a randomly
   * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
   * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
   * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
   * all for free!.
   *
   * Write a function named `calculateTotal` that accepts a lucky number and total
   * amount, and returns the discounted price.
   *
   * Example:
   * calculateTotal(0, 100) // returns 100
   * calculateTotal(4, 100) // returns 50
   * calculateTotal(5, 100) // returns 0
   *
   * Test your function by passing it various values and checking for the expected
   * return value.
   */
  function calculateTotal(luckyNumber, totalAmount) {
   var discountNumber;
   switch (luckyNumber) {
    case 0:
     discountNumber = 0;
     break;
    case 1:
     discountNumber = .1;
     break;
    case 2:
     discountNumber = .25;
     break;
    case 3:
     discountNumber = .35;
     break;
    case 4:
     discountNumber = .5;
     break;
    case 5:
     discountNumber = 1;
     break;
    default:
     console.log('Invalid')
   }
   return totalAmount - (discountNumber * totalAmount);
  }

   console.log (calculateTotal(0, 100), 100);
   console.log (calculateTotal(4, 100), 50;
   console.log (calculateTotal(5, 100), 0);
//
//
//    /**
//     * TODO:
//     * Uncomment the line below to generate a random number between 0 and 6.
//     * Prompt the user for their total bill, then use your `calculateTotal` function

    //     * and alerts to display to the user :
//     what their lucky number was,
//     what their price before the discount was,
//     and what their price after the discount is.
//     */
// Generate a random number between 0 and 6
   var luckyNumber = Math.floor(Math.random() * 6);

function numberToCurrency(number) {
   return '$' + number.toFixed(2);
  }
   var totalBill = parseFloat(prompt('What is the total bill in dollars?'));
   var message = 'Your lucky jumber is: ' + luckyNumber + '. '
       +'Your price before discount is: ' + numberToCurrency(totalBill) + '. '
       + 'Your price after discount is: ' + numberToCurrency(calculateTotal(luckyNumber, totalBill)) + '. ';
   alert(message);

   /**


//     * TODO:
//    > * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//     * would like to enter a number. If they click 'Ok', prompt the user for a
//     * number, then use 3 separate alerts to tell the user:
//     *
//    > * - whether the number is even or odd
//    > * - what the number plus 100 is
//    > * - if the number is negative or positive
//     *
    //    if: * if what the user enters is not a number, use an alert to tell them that, and
//     * do *not* display any of the above information.
//     *
//     * Can you refactor your code to use functions?
//     * HINT: The way we prompt for a value could be improved
//     */
// / HOISTING: YOU WANT TO DECLARE YOUR VARIABLES AT THE TOP OF A FUNCTION
// YOU DONT WAS TO DECLARE A VAR IN THE
// MIDDLE OF DEFINING A FUNCTION
//


function isNumeric(input) {
    return !IsNaN(input);
}

function evenOddMessage(num) {
    return (num % 2 === 0) ? 'Number is even.' : 'Number is odd.';
}

function plusHundred(num) {
    return num + ' plus 100 equals ' + (num + 100);
}

function isPosNeg(num) {
    return (number < 0) ? 'Number is negative' : 'Number is Positive';

}

function userNumInfo() {
    var confirmNumber = confirm("Click 'Ok', to enter a number");
    var userNumber;
    if (confirmNumber) {
         userNumber = parseFloat(prompt('Please enter a number'));

         // input is a num
        if (isNumeric(userNumber)) {
            alert(evenOddMessage(userNumber));
            // +100
            alert(plusHundred(userNumber));
            // neg/pos
            alert(isPosNeg(userNumber));
        } else {
            //NaN
            alert('Input not a number!');
        }
    }
}

