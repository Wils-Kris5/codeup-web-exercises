// # Third JavaScript Assessment Practice Problems
//
// The third JavaScript assessment will require the writing of functions that manipulate various data types,
// including arrays and objects. The use of iteration (loops) in many cases will be required to achieve this.
// The second halve of the JavaScript 101 exercises is excellent preparation for the assessment problems.
// This is a resource for additional practice problems.
//
// ## Problems
//
// 1. Create a function, `printAll`, that takes an array and logs every element on a new line in the console.
//
// 	```javascript
// 	printAll(['hello', 'hi', 'greetings']);
// 	/*
// 	  prints...
// 	  hello
// 	  hi
// 	  greetings
// 	*/
let introductions = ['hello', 'hi', 'greetings'];

function printAll(arr){
    for(let i = 0; i <= arr.length; i++){
        console.log(arr[i]);
    }
}
function printOthers(arr){
    arr.forEach(function(element){
        console.log(element);
    })
}
printAll(introductions);
// 	```
//
// 1. Create a function, `getLowestNumber`, that take in an array of numbers and returns the lowest number.
//
// 	```javascript
// 	getLowestNumber([23,47,50,5]); // returns 5
// 	getLowestNumber([5.8,7.3,8.2,4.7, 4.3]); returns 4.3
// 	getLowestNumber([-7,9,76,0,-4]); // returns -7
// 	```
let lowestNumber = [23,47,50,5];
function getLowestNumber(arr){
    return Math.min.apply(Math, arr);
}
console.log(getLowestNumber(lowestNumber));
// 1. Create a function, `getOccurrences`,
// that that takes in two arguments,
// a string and a letter.
// The function will count the number of occurrences of the specified letter within the string and
// return that number.
// The function should recognize case for instances (e.g. 'M' does not equal 'm').
//
// 	```javascript
// 	getOccurrences('hello', 'l'); // returns 2
// 	getOccurrences('mississippi', 's'); // returns 4
// 	getOccurrences('Bubble', 'B'); // returns 1
// 	```

function getOccurences(arg1, arg2) {

    let count = 0;
    for(let i = 0; i < arg1.length; i++){
        if(arg1.charAt(i) == arg2)
            count++;
    }
    return count;

}
console.log(getOccurences('hello', 'l'))
// 1. Create a function, `getLongestString`,
// that takes in an array of strings and returns the longest string.
// If the two longest
// words are equal in length, return the last to appear in the array.
//
// 	```javascript
// 	getLongestString(['hello', 'hi', 'greetings']); // returns 'greetings'
// 	getLongestString(['hello', 'world', '!' ]); // returns 'world'
// 	```

function getLongestString(arr){
    //You assign a variable for the length of the first array element
    let maxStr = arr[0].length;
//and a value to keep track of the index
    let ans = arr[0];
//You loop over the array You check every element with this variable
    for(let i = 1; i < arr.length; i++){
        //// if bigger then re-assign the element value and update the index.
        let maxi = arr[i].length;
        if(maxi > maxStr) {
            ans = arr[i];
            // End of the loop. you have the biggest length and the index

            maxStr = maxi;
        }
    }
    return ans;
}
console.log(getLongestString(['hello', 'hi', 'greetings']))
// 1. Create a function, `getFirstLetter`,
// that takes an array of strings
// and returns an array of the first letter of each string.
//
// 	```javascript
// 	getFirstLetter(['hello', 'hi', 'greetings']); // returns ['h','h','g']
// 	getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']
// 	```
function getFirstLetter(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].charAt(0))
    }
// arr.forEach(e=>newArr.push(e.charAt(0)))

    arr.forEach(function(element,index, ){
        newArr.push(element.charAt(0))
        console.log(index)
    })
//     arr.forEach(e=> newArr.push(e.charAt(0)))
    return newArr
}

console.log(getFirstLetter(['hello', 'hi', 'greetings']))
// 1. Create a function, `arrayEndsWith`, that takes two arguments, an array and a shorter array,
// and returns a boolean whether or not the larger array ends with the same elements as the passed second array elements.
// The function should return true if the second array elements are at the end of the first array.
// Assume that neither array will be empty, contain only string, number, or boolean elements and that the length of the second array will always be shorter than the first.
//
// 	```javascript
// 	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 5]); // returns true
// 	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 9]); // returns false
// 	arrayEndsWith(['hi', 'hmmm'], ['hmmm']); // returns true
// 	arrayEndsWith([1, 2, 3], [2, 3]); // returns true
// 	arrayEndsWith([1, 2, 3], [3, 2]); // returns false
// 	```
//
// 1. Create a function, `numsToObject`, that takes in three number inputs
// and returns them as property values `num1`, `num2`, and `num3` on an object.
//
// 	```javascript
// 	numsToObject(4, 5, 6); // returns {num1: 4, num2: 5, num3: 6}
// 	numsToObject(1, 2, 3); // returns {num1: 1, num2: 2, num3: 3}
// 	numsToObject(0, 199, 34); // returns {num1: 0, num2: 199, num3: 34}
// 	```
function numsToObject(num1, num2, num3){
    //point is to override the obj properties
    // let objTemp = {num1: 0, num2: 0, num3: 0}
    let objTemp = {}
    //   objTemp.num1 = num1
    objTemp.number1 = num1
    //   objTemp.num2 = num2
    objTemp.number2 = num2
    //   objTemp.num3 = num3
    objTemp.number3 = num3
    return objTemp;

}

// 1. Create a function, `removeNums`, that takes in an array of data types and returns an array of the same elements except for any number data types. Numeric strings do not count as a number but NaN does.
//
// 	```javascript
// 	removeNums(['a', true, null, [], {}, 4, '5', NaN]) // returns ['a', true, null, [], {}, '5']
// 	removeNums(['a', 'b', 'c']) // returns ['a', true, null, [], {}, '5']
// 	```
function removeNums(arr) {
    var arr1 = []; //buckets = what we do want in this return but empty rn
    for(var i = 0; i < arr.length; i++) {  // we started  arr1 is empty so we have to start with arr
        if(typeof arr[i] != 'number') { // check if/indv item if it isNaN
            arr1.push(arr[i]); // push in to the bucket
        }
    }
    return arr1;
}
console.log(removeNums(['a', true, null, [], {}, 4, '5', NaN]))
// 1. Create a function, `objectToSum`, that takes in an object, and returns the sum of any number property values (numeric strings will not be added). Expect that no object property values will be NaN. If no number properties are present, return 0.
//
// 	```javascript
// 	objectToSum({prop1: 'bob', prop2: true, prop3: 5}) // returns 5
// 	objectToSum({a: '3', b: true, c: 5, d: 3}) // returns 8
// 	objectToSum({foo: 'one', bar: 'two'}) // returns 0
// 	```
//
// 1. Create a function, `objToObj`, that takes in an object with only property values of a string type and returns another object with a single property called 'all' with a value of all input object properties values concatenated together.
//
// 	***Please note that the order of object properties is uncertain and concatenating the object property values will be unpredictable. This is fine.***
//
// 	```javascript
// 	objToObj({foo: 'hello', bar:'world'}) // returns {all: 'helloworld'} or {all: 'worldhello'}
// 	objToObj({a: 'codeup', b:'rocks'}) // returns {all: 'rockscodeup'} or {all: 'codeuprocks'}
// 	```
//
// 1. Create a function, `getStringDeets`, that takes in a string and returns an object with specific properties containing information about the string, namely:
//
//   - `firstChar` -  containing the first character of the string
//   - `lastChar` - containing the last character of the string
//   - `length`- containing the length of characters of the string
//   - `shoutedVersion` - containing an all caps version of the string
//
// 	```javascript
// 	getStringDeets("apple"); // returns...
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
// 1. Create a function, `createUsersObject`, that takes in two arrays: the first array is an array of strings (usernames), the second is an array of numbers (user ages). The function should return an object with property names matching to the first array elements paired with property values matching the second  array elements. Assume both arrays are the same length.
//
// 	```javascript
// 	var usernames = ['cindy', 'fred', 'cathy'];
// 	var ages = [34, 22, 45];
// 	createUsersObject(usernames, ages) // returns {cindy: 34, fred: 22, cathy: 45}
// 	```
//FizzBuzz
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 ===0 && i % 3 === 0){
            console.log("Fizz Buzz");
        }
        else if(i % 3 === 0){
            console.log("Buzz");
        }
        else if(i % 2 === 0){
            console.log("Fizz");
        }
        else(console.log(i))
    }
}