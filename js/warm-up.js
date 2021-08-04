"use strict"
/*

  TODO 1: Create a function, allAs, that takes in an array of letters and returns true
    if all letters in the passed array are the letter 'A' or 'a' and false otherwise.
    An empty array argument will return false.

    Examples...

    allAs(['b', 'a', 'A', 'c']) // false
    allAs(['c', 'a', 'b', 'A']) // false
    allAs(['a', 'A', 'a', 'a']) // true
    allAs([]) // false

*/

function allAs(arr) {
    if(arr.length === 0) {
        return false;
    }
    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] !== 'a' && arr[i] !== 'A') {
            return false;                                 // if the current element does not = 'a' , 'A' then equal false
        }
    }
    return true;                     // undefined will return bc it cant return true if theres nothing that says to return true.
}

/*

 TODO: 2. Create a function, all2s, that takes in an array of numbers and returns true
   if all numbers in the passed array are the number 2 and false otherwise. An empty
   array argument will return false.

   Examples...
 */
function all2s(arr) {
    if(arr.length=== 0){
        return false
    }
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] !== 2) {
            return false;
        }
    }
    return true;
}

   all2s([2, 4, 1, 9]) // false
   all2s([2, 2, 2, 2, 2]) // true
   all2s([2]) // true
   all2s([]) // false


/*

 TODO: 3. Create a function, objectHasAllAsAnd2s, that takes in an object with properties
  for 'letters' and 'numbers' that are arrays. The function will return true if
  all elements in the 'letters' array are 'A's or 'a's and all elements in the
  'numbers' array are 2s. Assume that the 'letters' array will only contain valid letters
  and the 'numbers' array will only contain valid numbers. If one or both arrays are empty,
  the function should return false.

  Examples

  objectHasAllAsAnd2s({
    letters: ['a', 'A', 'a', 'A'],
    numbers: [2, 2, 2, 2, 2, 2]
  }); // returns true;

  objectHasAllAsAnd2s({
    letters: ['a', 'A', 'b, 'A'],
    numbers: [2, 2, 2, 2, 2, 2]
  }); // returns false;

  objectHasAllAsAnd2s({
    letters: ['a', 'A', 'a', 'A'],
    numbers: []
  }); // returns false;

  objectHasAllAsAnd2s({
    letters: ['a'],
    numbers: [2]
  }); // returns true;
  */

function objectHasAllAsAnd2s(obj) {
   return allAs(obj.letters) && all2s(obj.numbers);
}


