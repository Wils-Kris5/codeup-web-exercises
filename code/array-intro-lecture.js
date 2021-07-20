
    "use strict";



//================================ ARRAY LESSON QUESTIONS
    // What is an array?
// holds an orderlist items, each slot in an array can hold a different type of data.

    // What is an array index?
//

    // What is an array element?


    // What happens if you access and index outside of the size of an array?

    // What is a forEach loop?

    // Why use a forEach loop to interate over an array instead of a for or while loop?

    // Are arrays mutable? What does mutable mean?







    // ============================= Arrays Definition

    /*
    In JS, an array is a special object data type that may contain
    a collection of multiple data types at numeric indices.
    In other words, an array allows us to store and access multiple values (elements)
    through one variable name (array name) and a specific index number.
    Array of animals...
    _______  _______  _______  _______
    |       ||       ||       ||       |
    |  DOG  ||  CAT  ||  EGG  ||  EMU  |
    |       ||       ||       ||       |
    -------  -------  -------  -------
    Index 0  Index 1  Index 2  Index 3

    Arrays may contain no defined elements, one, or many.

    Arrays in JS may contain elements of mixed types.

    Several array methods and properties are built in to JS to work with arrays.
    */

    // ============================= Declaring/Initializing an Array with Array Literal Syntax

    // empty arrays may be declared
     // var pies = [];
    // console.log(pies);
    // pies
    //     []length: 0__proto__: Array(0)
    //  var pies = ["apple", "cherry", "key lime", "huckleberry"];
    //  // there are 4 values in the pies array there are 4 elements
    //  console.log(pies);

    // declaring and initializing a large array
                           // you can have white space when declaring var in array
    // var students = [
    //     "Student 1",
    //     "Student 2",
    //     "Student 3",
    //     "Student 4",
    //     "Student 5",
    //     "Student 6",
    //     "Student 7",
    //     "Student 8"
    // ];

// students[6]
//     student 7

    // separate declaration and initialization

   //  var pies = [];
   //  pies[0] = "apple";
   //  pies[1] = "cherry";
   // console.log(pies);
   //
   //  // declaring and initializing a high index number
   //  pies[10] = "huckleberry";
   //  console.log(pies);
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
// var cherry = pies[1];
// var huckleberry = pies[3];

    // ============================= Counting Array Items

    // var pies = ["apple", "cherry", "key lime", "huckleberry"];
    // var numberOfPies = pies.length;
    // console.log(numberOfPies);


    // ============================= Accessing Array Elements

    // console.log(pies[100]);
    // console.log(pies[3]);


    // ============================= For Loop


    /* SYNTAX

    for (var i = 0; i < someArray.length; i += 1) {
      console.log(someArray[i]);
    }
    - in the above context "someArray[i]" will access the next array element in each iteration

    - PROS: variety of traversals

    - CONS: more complicated syntax
    -  USE: when you need to iterate partially or backwards through an array
    */

    // example
    var pies = ["apple", "cherry", "key lime", "huckleberry"];
    for (var i = 0; i < pies.length; i += 1) {
        console.log("I like " + pies[i]);
    }
// once the loop reaches 4, it stops because 4 < 4 four is not less than 4
    // backwards

    // for (var i = pies.length - 1; i >= 0; i -= 1) {
    //     console.log("I like " + pies[i]);
    // }
    //
    // console.log(pies);

//


    // ============================= Foreach Loop


    /* SYNTAX


        someArray.forEach(function(element, index, array){ // forward to backward
            console.log(element);
            console.log(index);
        });  { 3 parameters
        - PROS: simpler syntax
        - CONS: can only increment through entire array
        -  USE: when you need to iterate through entire array
        REMINDERS...
        - the parameters are optional to pass in to the anonymous function
        - parameters may be semantically named but order matters
     */


    // standard syntax
    //  var pies = ["apple", "cherry", "key lime", "huckleberry"];
    //  pies.forEach(function(element, index, array) {
    //      console.log()
    //
    //  });
    // defining all three parameters
    // pies.forEach(function(element, index, array){
    //
    //     console.log("Element " + element + " is at index " + index);
    //     console.log(pies);
    //     console.log(array);
    //
    // });


    // with different parameter names
    // pies.forEach(function(pie, index, array){
    //
    //     console.log("Element " + pie + " is at index " + index);
    //     console.log(pies);
    //     console.log(array);
    //
    // });


    // with only one parameter

    // pies.forEach(function(element){
    //     console.log("Element " + element);
    // });
    //
    //
    // console.log("----------------");


    // callback function syntax

    // function logElements(element) {
    //     console.log("Element " + element);
    // }
    //
    // pies.forEach(logElements);
// pies.forEach(function(pie) {
//     console.log(pie);
// });

