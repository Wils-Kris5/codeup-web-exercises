/* Create a function named showMultiplicationTable*/


function  showMultiplicationTable(input) {
  for (var i = 1; i <= 10; i++) {
    var result = input * i;
    console.log(input + ' * ' + i + ' = ' + result);
  }
}
console.log(showMultiplicationTable(7));

/* output:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
*/



/* #2!!!
1st Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
2nd output to the console whether each number is odd or even.
output to the console whether each number is odd or even.
 */
for (i=20; i<200; i++) {
var randomNumber = Math.floor(Math.random() * 181) + 20;

if (randomNumber %2===0) {
  console.log(randomNumber + " is even.");

} else {
  console.log(randomNumber + " is odd");
}



for i =0 i <10 i++