(function(){
	"use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Roxanne", "Christopher", "Kimberly", "Johnny"];

	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the
	 * names
	 * array.
	 */
    // var numOfNames = names.length;
	// console.log(numOfNames); // 4
	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */
    //
	// console.log("This is " + names[0]);  // This is Roxanne
	// console.log("This is " + names[1]);  // This is Christopher
	// console.log("This is " + names[2]);  // This is Kimberly
	// console.log("This is " + names[3]); // This is Johnny

	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */
	// for(var i = 0; i < names.length; i += 1) {
	// 	console.log("This is " + names[i]);
	// }
//This is Roxanne
// VM276:2 This is Christopher
// VM276:2 This is Kimberly
// VM276:2 This is Johnny
// undefined
	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */
	// names.forEach(function(element, index, array){
	//
	// 	console.log("Element " + element + " is at the index " + index);
	// 	console.log(index);
	// 	console.log(array);
	// });

	// Element Roxanne is at the index 0
	// VM660:4 0
	// VM660:5 (4) ["Roxanne", "Christopher", "Kimberly", "Johnny"]
	// VM660:3 Element Christopher is at the index 1
	// VM660:4 1
	// VM660:5 (4) ["Roxanne", "Christopher", "Kimberly", "Johnny"]
	// VM660:3 Element Kimberly is at the index 2
	// VM660:4 2
	// VM660:5 (4) ["Roxanne", "Christopher", "Kimberly", "Johnny"]
	// VM660:3 Element Johnny is at the index 3
	// VM660:4 3
	// VM660:5 (4) ["Roxanne", "Christopher", "Kimberly", "Johnny"]
	// undefined


	/**
	 * TODO:
	 * Create the following three functions,
	 * each will accept an array and
	 * return an an element from it

	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *

	 * Example:
	 */
	//
	// var theArray = [1, 2, 3, 4, 5];
    // var index = theArray.indexOf(1);
    // console.log(index);
    // var theLength = theArray.length
	// console.log(theLength); // 5


	// second([1, 2, 3, 4, 5]) // returns 2
	//  last([1, 2, 3, 4, 5]) // return 5
	//
// function first(input) {
//    return theArray[0];
// }
//
// function second(input) {
// 	return theArray[1];
// }
// function last(input) {
// 	return theArray[4];
// }




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
})()
