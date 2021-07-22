 // (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var Person = {
        firstName: "Kristen",
        lastName: "Wilson",
    }
    // console.log(person.firstName) // Kristen
    //console.log(person.lastName) // Wilson
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    var person = {};
    person.firstName = "Kristen",
    person.lastName = "Wilson"
    person.sayHello = function() {
        console.log("Hey you! it\'s " + this.firstName + " " + this.lastName + "!")
    }

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
     //
     // var discountThreshold = 200
     // var shoppers = [
     //    {name: 'Cameron', amount: 180},
     //    {name: 'Ryan', amount: 250},
     //    {name: 'George', amount: 320}

    // ];
  // if purchasing more than 200, will get 12% off

 // Cameron is purchasing $180.00. He will get 0.00 off and now pay 180.00
// Ryan is buying $250.00 of stuff he will get 30.00 off the purchase & pay 220.00.
 // .12 * 250 = 30
 // George is buying 320.00 of stuff. he will get 38.40 off the purchase and pay 281.60


//                                                                                       // vvv  good place for a function
//      var output1 = "Cameron is buying " + shoppers[0].amount + " of stuff. He will get " +
//  console.log(output1);
//
// function calculateDiscount(amount, threshold, discountPercentage) {
//     // if the amount is greater than the threshold apple the discount
//     if (amount <= threshold) {
//         return 0
//     } else {
//         return (amount * discountPercentage);
//     }
// }
//
//  for (var i = 0; i < shoppers.length; i += 1) {
//      var discountedAmount = calculateDiscount(shoppers[i].amount, discountThreshold, discountPercentage);
//      var output = shoppers[i].name + ' is purchasing ' + shoppers[i].amount +
//          ' of stuff. He will get ' + discountedAmount +
//          ' off the purchase and pay ' +
//          (shoppers[i].amount - discountedAmount) + '.';
//      console.log(output);
//  }
// shoppers.forEach(function(shopper) {
//     var discountedAmount = calculateDiscount(shoppers.amount, discountThreshold, discountPercentage);
//     var output = shopper.name + ' is purchasing ' + shopper.amount +
//         ' of stuff. He will get ' + discountedAmount +
//         ' off the purchase and pay ' +
//         (shoppers.amount - discountedAmount) + '.';
//     console.log(output);
// });


//shapes.forEach(function(shape) {
 //     console.log('Here is a lovely shape: ' + shape + '.');
 // });



 //  rough draft: shoppers.forEach(function(shopper){
//          if( shopper > 200 ) {
//              var newTotal = shopper.amount - (shopper.amount * .12)
//              console.log(shopper.name + "you spent: " + shopper.amount
//                  + "so heres a discount:"  + newTotal);
//          } else {
//              console.log("sorry " + shopper + "you didn\'t spend enough, you only spent " + customer.amount);
//          }
// });
// Example HEB problem  Expected output...
 //
 //         Cameron is purchasing $180.00 of stuff. He will get $0.00 off the purchase and pay $180.00.
 //         Ryan is purchasing $250.00 of stuff. He will get $30.00 off the purchase and pay $220.00.
 //         George is purchasing $320.00 of stuff. He will get 38.40 off the purchase and pay $281.60.
 //
 //      */
 //
 //     var discountThreshold = 200;
 //     var discountPercentage = .12;
 //
 //     var shoppers = [
 //         {name: 'Cameron', amount: 180},
 //         {name: 'Ryan', amount: 250},
 //         {name: 'George', amount: 320}
 //     ];
 //
 //     /**
 //      * Calculates the total amount of discount given the amount, discount threshold, and discount percentage
 //      * @param amount
 //      * @param threshold
 //      * @param discountPercentage
 //      * @returns {number|number}
 //      */
 //     function calculateDiscount(amount, threshold, discountPercentage) {
 //         return (amount > threshold) ? amount * discountPercentage : 0;
 //     }
 //
 //     function numToCurrency(num) {
 //         return '$' + num.toFixed(2);
 //     }
 //
 //     function formatOutput(shopper, discountedAmount) {
 //         return shopper.name + ' is purchasing ' + numToCurrency(shopper.amount) +
 //             ' of stuff. He will get ' + numToCurrency(discountedAmount) +
 //             ' off the purchase and pay ' +
 //             numToCurrency(shopper.amount - discountedAmount) + '.';
 //     }
 //
 //     function logInfoForAllShoppers(shoppers, discountThreshold, discountPercentage) {
 //         shoppers.forEach(function(shopper) {
 //             var discountedAmount = calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
 //             var output = formatOutput(shopper, discountedAmount);
 //             console.log(output);
 //         });
 //     }
 //
 //     logInfoForAllShoppers(shoppers, discountThreshold, discountPercentage);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

 // })();
