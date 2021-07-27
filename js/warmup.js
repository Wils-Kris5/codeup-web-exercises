<!--================================= WARM UP-->

<!--In a new HTML file in codeup-web-exercises, add a script to solve the following problem...-->

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

function getSimpleUser(fred) {
return fred.toLowerCase(firstName), fred.toLowerCase(lastName);
}
//
// function getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
// return fred.firstName, fred.lastName
