
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
//
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
//
// The shape of the output should be the following:
//
// {
//     firstName: '...',
//         lastName: '...',
// }
//
// Regardless of the case of the first name and last name input, the output should be in all lower case.
//
var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}
/*

      Create a function, analyzeArray, that takes in a an array and returns an object with information about the passed array.
      The function should return an object with properties containing information about the array, including the lengthOfArray,
      containsAllStrings, and the combineResult of adding all elements together.

     */



/* EXAMPLE 1

        analyzeArray([1, 2, 3]) returns...

        {
          lengthOfArray: 3,
          containsAllStrings: false,
          combineResult: 6
        }


    EXAMPLE 2

        analyzeArray(['a', 'b', 'c']) returns...

        {
          lengthOfArray: 3,
          containsAllStrings: true,
          combineResult: 'abc'
        }


    EXAMPLE 3

        analyzeArray(['bob', 100, null]) returns...

        {
          lengthOfArray: 3,
          containsAllStrings: true,
          combineResult: 'bob123null'
        }


 */
function analyzeArray(arr) {
    // loop over the array
    var combine = arr[0];
    var isAllStrings = true;
    for(var i = 0; i < arr.length; i++) {
        if(i === 0) {

        } else {
            combine += arr[i];
        }
        // for each element combine into a vale to update the obj combineResult property
        // check if element is a string or not
        if(typeof arr[i] !=='string') {
            isAllstrings = false;
        }

    }
    // console.log(combine);
    console.log(isAllStrings);

    // return the obj containing the infor for the array
    return {
        lengthOfArray: arr.length,
        containsAllStrings: isAllStrings,
        combineResult: combine
    };
}