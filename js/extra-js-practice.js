
// # Third JavaScript Assessment Practice Problems
// The third JavaScript assessment will require the writing of functions that manipulate various data types, including arrays and objects.
// The use of iteration (loops) in many cases will be required to achieve this.
// The second halve of the JavaScript 101 exercises is excellent preparation for the assessment problems.
// This is a resource for additional practice problems.
//
//     ## Problems
//
// 1. Create a function, `printAll`, that takes an array
// and logs every element on a new line in the console.
function printAll(arr) {
for(var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
}


//     ```javascript
// 	printAll(['hello', 'hi', 'greetings']);
// 	/*
// 	  prints...
// 	  hello
// 	  hi
// 	  greetings
// 	*/
// 	```
//
// 1. Create a function, `getLowestNumber`, that take in an array of numbers
// and returns the lowest number.
function getLowestNumber(arr){

    return Math.min.apply(Math, arr); //apply fun will apply the function (Math.min)
                               // is the function and since he only takes in numbers

}


console.log(getLowestNumber([23, 47, 50, 5])); // returns 5
// 	getLowestNumber([5.8,7.3,8.2,4.7, 4.3]); returns 4.3
// 	getLowestNumber([-7,9,76,0,-4]); // returns -7
// 	```
//
// 1. Create a function, `getOccurrences`, that that takes in two arguments,a string and a letter.
// The function will count the number of occurrences of the specified letter within the string and return that number.
// The function should recognize case for instances (e.g. 'M' does not equal 'm').
//
function getOccurences(arg1, arg2) {
    //turning string to arr, looping through , then checks if
    var occurences = 0;

    // for(var i = 0; i < str.)
}
// 	getOccurrences('hello', 'l'); // returns 2
// 	getOccurrences('mississippi', 's'); // returns 4
// 	getOccurrences('Bubble', 'B'); // returns 1
// 	```
//
// 1. Create a function, `getLongestString`,
// that takes in an array of strings and returns the longest string.
// If the two longest words are equal in length, return the last to appear in the array.
//
function getLongestString(arr) {
    var maxStr = "";
    for(var i = 0; i < arr.length; i++) {
        console.log(i)
        console.log(arr[i])                           // < "mary" being compared to ""
        if(arr[i].length >= maxStr.length) {   // < now "mary" is whats being compared to "had"
            maxStr = arr[i]
            console.log(maxStr)
        }
    }
}


console.log(getLongestString(['hello', 'hi', 'greetings'])); // returns 'greetings'
// 	getLongestString(['hello', 'world', '!' ]); // returns 'world'
// 	```
//
// 1. Create a function, `getFirstLetter`, that takes an array of strings
// and returns an array of the first letter of each string.

// 	getFirstLetter(['hello', 'hi', 'greetings']); // returns ['h','h','g']
// 	getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']

function getFirstLetter(arr){
    return arr.map(function(str){ //map method will loop thru and return a copy of the array & with any functionality you want it to
        return str[0];
    });
    var str1 = []; //buckets
    for(var i = 0; i < arr.length; i++) {
       // if(arr.charAt(str1[i])) {
       str1.push(arr[i].charAt(0));

    }
    return str1;
}

// console.log(getFirstLetter(['hello', 'hi', 'greetings']));
 // returns ['h','h','g']
// 	getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']


// 1. Create a function, `arrayEnds// With`, that takes two arguments,an array and a shorter array, and returns a boolean whether or not the larger array ends with the same elements as the passed second array elements.
// The function should return true if the second array elements are at the end of the first array.
// Assume that neither array will be empty, contain only string, number, or boolean elements and that the length of the second array will always be shorter than the first.
function arrayEndsWith(arr1, arr2){
    var stop = arr1.length - arr2.length; //the differences between the first & second array
    var logIndex = arr2.length - 1; // very end of the second array
    for (var i = arr1.length -1; i >= stop; i--) { //starting iteration at the END of the array
       if(arr1[i] !== arr2[logIndex]) {
           return false;

       }
        logIndex--
    }
    return true;
}
//
//
// console.log(arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 5])); // returns true
// console.log(arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 9])); // returns false
// console.log(arrayEndsWith(['hi', 'hmmm'], ['hmmm'])); // returns true
// console.log(arrayEndsWith([1, 2, 3], [2, 3])); // returns true
// console.log(arrayEndsWith([1, 2, 3], [3, 2])); // returns false
//
//

//
// 1. Create a function, `numsToObject`, that takes in three number inputs
// and returns them as property values `num1`, `num2`, and `num3` on an object.
//
function numsToObject(input1, input2, input3) {
    var obj = {
        num1: input1,
        num2: input2,
        num3: input3,
    };
    return obj;
}
//
//
//
//
//
// 	console.log(numsToObject(4, 5, 6)); // returns {num1: 4, num2: 5, num3: 6}
	// numsToObject(1, 2, 3); // returns {num1: 1, num2: 2, num3: 3}
	// numsToObject(0, 199, 34); // returns {num1: 0, num2: 199, num3: 34}
// 	```
//
// 1. Create a function, `removeNums`, that takes in an array of data types
// and returns an array of the same elements except for any number data types.
// Numeric strings do not count as a number but NaN does.
//
function removeNums(arr) {
    var arr1 = []; //buckets = what we do want in this return but empty rn
    for(var i = 0; i < arr.length; i++) {  // we started  arr1 is empty so we have to start with arr
     if(isNaN(arr[i])) { // check if/indv item if it isNaN
            arr1.push(arr[i]); // push in to the bucket
        }
        return arr1;
    }
}


//console.log(removeNums(['a', true, null, [], {}, 4, '5', NaN]));// returns ['a', true, null, [], {}, '5']
//	removeNums(['a', 'b', 'c']) // returns ['a', true, null, [], {}, '5']
// 	```
//
// 1. Create a function, `objectToSum`, that takes in an object,
// and returns the sum of any number property values (numeric strings will not be added).
// Expect that no object property values will be NaN.
// If no number properties are present, return 0.
//
function objectToSum(obj){
	    var bucket = 0;
  for(const property in obj) {   // the constant value will not change but
      if(isNaN(obj[property]) !== true && typeof obj[property] !== "boolean") {
          bucket += obj[property];
      }
  }
      return bucket;
}
// function objectToSum(obj) {
//     var objArr = Object.values(obj);
//     var newArr = 0;
//     objArr.forEach(function (arr){        //kyles example
//         if (typeof arr !== "number") {
//             newArr += 0;
//         } else {
//             newArr += arr;
//         }
//     });
//     return newArr;
// }
                   // prop name       prop value
   // console.log(objectToSum({prop1: 'bob', prop2: true, prop3: 5})); // returns 5
// 	objectToSum({a: '3', b: true, c: 5, d: 3}) // returns 8
// 	objectToSum({foo: 'one', bar: 'two'}) // returns 0
// 	```
//
// 1. Create a function, `objToObj`, that takes in an object with only property values of a string type and
// returns another object with a single property called 'all' with a value of all input object properties values concatenated together.
//
// ***Please note that the order of object properties is uncertain and concatenating the object property values will be unpredictable. This is fine.***
//
function objToObj(obj) {
    var all = Object.values(obj);
    var str = "";
    all.forEach(function(element){      //trying to concat var all taking in obj param, and this will split to an array
        str += element;             //and
    });
     return {all: str};  //{} output is a single prop of an OBJs element
}

//console.log(objToObj({foo: 'hello', bar: 'world'})); // returns {all: 'helloworld'} or {all: 'worldhello'}
// 	objToObj({a: 'codeup', b:'rocks'}) // returns {all: 'rockscodeup'} or {all: 'codeuprocks'}
// 	```
//
// 1. Create a function, `getStringDeets`, that takes in a string and returns an object with specific properties containing information about the string,
// namely:
//
// - `firstChar` -  containing the first character of the string
// - `lastChar` - containing the last character of the string
// - `length`- containing the length of characters of the string
// - `shoutedVersion` - containing an all caps version of the string
//
//     ```javascript
// 	getStringDeets("apple"); // returns...

function getStringDeets(str) {
   var isFstChar = str[0];
   var isLstChar = 0;

    for(var i = 0; i < str.length; i++){
        if( i === str[0]) {
            isFstChar = str[i];
        }
        if( i === str[str[0].length -1]) {
         isLstChar = str[str[i].length -1]
        }

    }
    return {
        firstChar: isFstChar,
        lastChar: isLstChar,
        length: str.length,
        shoutedVersion: str.toUpperCase()

    };
}
// console.log(getStringDeets("apple"));
// 	/*
// 	  {
// 	    firstChar: "a",
// 	    lastChar: "e",
// 	    length: 5,
// 	    shoutedVersion: "APPLE"
// 	  }
// 	*/
// 	```
//
// 1. Create a function, `createUsersObject`, that takes in two arrays:
// the first array is an array of strings (usernames), the second is an array of numbers (user ages).
// The function should return an object with property names matching to the first array elements paired with property values matching the second  array elements.
// Assume both arrays are the same length.
//
function createUserObject(userNames, userAges) {
  var obj =  {}
  userNames.forEach(function(name, index) {  //index its the place of where you plug in as one of the parameters
      obj[name] = userAges[index];
  });
  return obj;
}
	// var usernames = ['cindy', 'fred', 'cathy'];
	// var ages = [34, 22, 45];
// 	createUsersObject(usernames, ages) // returns {cindy: 34, fred: 22, cathy: 45}
//	```