"use strict";

/*

    Create a function, createNames, that takes in an array of first names and array of second names.
    The function should return an array of name objects with firstName and lastName properties with the input array values.
    Assume both input arrays are not empty, the same length and only contain name strings.

    var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
    var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

    createNames(firstNames, lastNames) // returns...

      [
        {
          firstName: 'CJ',
          lastName: 'Cat'
        },
        {
          firstName: 'Max',
          lastName: 'Feline'
        },
        {
          firstName: 'Claude',
          lastName: 'Kitten'
        },
        {
          firstName: 'Meowmeow',
          lastName: 'Calico'
        }
      ]

 */
var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

function createNames(firstNames, lastNames) {
    var names = [];
    for(var i = 0; i < firstNames.length; i += 1) {
        names.push({
            firstName: [],
            lastNames: lastNames[index]
        });
    });
    return names;
}
console.log(createNames(firstnames, lastNames));

/*iterate over the length of the array*/