/* Create a function named showMultiplicationTable
- that accepts a number
- and console.logs the multiplication table for that number (just multiply by the numbers 1 through  i.e 100)
 */



// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }
// ** The value of the lcv is checked in the conditional test
var multiplier = 7;
for(var i = 1; i <= 10; i++) {
  var result = multiplier * i;
  console.log(multiplier + ' * ' + i + ' = ' + result);
}
// example:https://www.teaching-materials.org/javascript/exercises/forloops
// for (var multiplier = 0; multipler <= 10; multiplier++) {
//   for (var i = 0; i <= 10; i++) {
//     var result multiplier * i; console.log(multiplier + ' * ' + i ' = ' + result);
//
//   }
//
// }
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
7 x 10 = 70 */


//