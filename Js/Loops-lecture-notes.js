// var pizzaSlices = 4;
//
// while (pizzaSlices > 0){
//     console.log("Mmmmm.... Pizza ... There's " + pizzaSlices + " slices!");
//     console.log("I'll have one!");
//     pizzaSlices = pizzaSlices - 1;
//     console.log("Now there's " + pizzaSlices + " slices left!");
// }
//
// console.log("Is it already all eaten? :(");

// var counter = 0;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
// }

// var counter = 1000;
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }

// var counter = 1;
// var number = 5;
// while (counter <= 100){
//     number = number * 2;
//     console.log(number);
//     counter++;
// }

// var number = 5;
// while (number < 200) {
//     number *= 2; // number = number * 2;
//     console.log(number);
// }
//
// var number = 5;
// while (number < 200) {
//     console.log(number);
//     number *= 2; // number = number * 2;
// }

// pseudocode
// Ask user for input -- store user input in a variable
// Declare variable to hold running total
// Add user input price of item to a running total
// Loop back and ask the user for price of next item
// I need some way for user to break out of loop --
// ?? stop or end or some other way for them to end the program
// Tell user how to end the program
//?? Feature: warn user when they reach the limit
//?? When do you get free shipping?

// // accumulator variable: var total
// var total = 0;
//
// var priceOfItem;
//
// while (true){
//     var userInput = prompt("Enter the price of your item: " + "\n " +
//         "Enter STOP to end program");
//     // sentinel value: STOP
//     if (userInput == "STOP"){
//         alert("OK. Your final total is " + total);
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total cost is now " + total.toFixed(2));
//     }
// }

// accumulator variable: var total
// var total = 0;
//
// var priceOfItem;
//
// while (true){
//     var userInput = prompt("Enter the price of your item: " + "\n " +
//         "Enter STOP to end program");
//     // sentinel value: STOP
//     if (userInput == "STOP"){
//         alert("OK. Your final total is " + total);
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = Decimal.add(total, priceOfItem);
//         alert("Your total cost is now " + total);
//     }
// }

// Let's get a number between 1 and 6

// var number = Math.ceil(Math.random() * 6);
// var guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6: "));
// } while (guess !== number);
// alert("Your guess of " + guess + " matches the number " + number + "!");



