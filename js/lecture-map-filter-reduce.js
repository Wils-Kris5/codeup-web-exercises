// //Array Iteration Method = methods that operate on every item inside an array
//        //template    literals:Synonyms:
// //
// // Template Literals
// // Template Strings
// // String Templates
// // Back-Tics Syntax
//
//
//
// // Map, filter, reduce do not alter the original array (it does not mutate the array)
// // either create a new array from the old one OR Generate a value based on the old array
// //
// // var output = "";
// // var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//   // name of the array
// prices.forEach();
//
// //oldway
// // prices.forEach(function(){});
//
// //new way
// prices.forEach(()=>{});
//
// // =
// prices.forEach((item)=>{console.log(item);});
// // ^^^ you create a local variable called item
//
// // DOM STYLE STUFF
// // you will need to concat the HTML
// // prices.forEach((item)=>{
// //   //  console.log(item);
// //     output += '<p>${item}</p>';
// //    // $("#output").html(output);
// // });
// // $("#output").html(output); // when its outside of the forEach function, this means it gets to complete the loop before outputting it to the div id="output"
// //
// // prices.forEach((item, index) => {
// //     let tax = (item * 0.0825).toFixed(2);
// //     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
// //     output += '<p>Item number ${index +1}. Price: $${item}. Tax: {tax}.
// //         Total: ${total}. </p>';
// // });
// // $("#output").html(output);
// //
//
//  // .map()
// let pricesAfterTax = [];
//
// var pricesAfterTax = prices.map((item) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
// let output = "";
// pricesAfterTax.forEach().
//
// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map(function(item){
//     item = item + 's';
//     return item;
// });
// let pluralTHings = things.map((item) => {
//     item = item + 's';
//
// });
// let things = ["book", "pencil", "marker", "eraser"];
//  //The map() method creates a new array with the results of calling a function for every array element.
// //
// // The map() method calls the provided function once for each element in an array, in order.
// //
// // map() does not execute the function for empty elements.
// //
// // map() does not change the original array.
// // Map is always going to have the same number of elements as the original array
// let pluralThings = things.map((item) => `${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// $("#output").html(output);
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
//
// //const mileages = cars.map(car=>car.mileage);   // since theres only one parameter you dont need (), and you dont meed []
// //          is the same as
// // const mileages = cars.map(function(car){
// //     return car.mileage;
// // });
// //     let output = "";
// //     mileages.forEach(item => output += '<p>${item}</p>' );
// //  $("#output").html(output);
//
//
// // .filter()
// // const under10K = cars.filter(car =>car.mileage < 10000 );
//  const under10K = cars.filter(function(car){
//      if(car.mileage < 10000) {
//               return true;
//      }  else {
//          return false;
//      }
//      //return car.mileage < 10000;     long head1
//  });
//
//  // chain filter & map
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let affordableWithTax = prices.filter(price => price < 10).map(price => {
//     let tax = (item * 0.0825).toFixed(2);
//      let total = (parseFloat(price) + parseFloat()).toFixed(2);
// //     output += '<p>Item number ${index +1}. Price: $${item}. Tax: {tax}.
// //         Total: ${total}. </p>';
//
// //});
//
// // ========================.reduce()================================
//
//  let totalCost = affdablesWithTax.reduce((total, indivItemCost))

// Did you say that it takes on the value at index 0


//it takes on the value at index 0 your return value will always be the value of the array at the next iteration
 //
// let averatePrice = affordablesWithTax.reduce
    // (if we do not have a default then 32.99 is the total, then 21.99 is price, and 6.99 is is index if therre is no second param)
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
//
//
//
//     const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey",
//         "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion",
//         "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep",
//         "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork",
//         "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion",
//         "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat",
//         "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];
//
//     let aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
//          total[animal] = 1;
//          return total; //total is the name of the object//on the 1st iteration this property was set to an empty object that through every iteration we are adding to it
//     }, {});
//
//et aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
//     if (!total[animal]) {
//         total[animal] = 1;
//     } else {
//         total[animal] += 1;
//     }
//     console.log(`${animal}: ${total[animal]}`);
//     return total;
// }, {});
const mileages = cars.reduce((accumulator, car) => {
    accumulator.push(car.mileage);
    return    accumulator;
}, []);
// let accumulator = [];
// accumulator = [10428];
// accumulator = [10428, 9425]
// accumulator = [10428, 9425, 2567] etc.



// const hiestMileage = cars.reduce((accumulator, car, index, carsArray) => {
// },
// })
//reduce
// 1set set the accumulator to an empty array
  // sorting from lower to higher is the default = so if your return the accumulatior you would be getting an array sorted lowerest to highest
 // reduce within a reduce: to get an array of objects and use reduce to figure what the hiesgt in term of 1 prop or the lower 1 prop
// nesting a reduce within a reduce would be the best way
// const hiesthestMilleage + cars.reduce((accumulatpr, car, index, carsArray) =>{
//     if(indec === carsArray.length -1) {
//         accumulator.push(car.mileage);
//         let maxMileage = accumulator.reduce((mileage1, mileage)
//             => math.max(mileage1, mileage2));
//         return maxMileage
//     } else {
//         accumulator.push(car.mileage);
//         return accumulator;
//     }
// })
// reduce is specifically built to keep returning because the previous return value becomes the initial value for the next iteration



 ///===============JAVIER'S LECTURE NOTES==============///////
//// Array Iteration Methods = methods that operate on every item inside an array.
//
// // Map, filter, reduce do not alter the original array (does not the mutate the array)
// // either create a new array from the old one, OR generate a value based on the old array
//
// // forEach review
//
// // let output = "";
// // let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// // prices.forEach((item)=>{
// //     console.log(item);
// // });
//
// // prices.forEach((item) => output += `<p>${item}</p>`);
// // $("#output").html(output);
//
// // prices.forEach((item, index) => {
// //     let tax = (item * 0.0825).toFixed(2);
// //     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
// //     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total: $${total}.</p>`;
// // });
// // $("#output").html(output);
//
// // .map()
//
// // let pricesAfterTax = [];
//
// // let pricesAfterTax = prices.map((item) => {
// //     let tax = (item * 0.0825).toFixed(2);
// //     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
// //     return parseFloat(total);
// // });
// // let output = "";
// // pricesAfterTax.forEach((item)=>output+=`<p>${item}</p>`);
// // $("#output").html(output);
//
// let things = ["book", "pencil", "marker", "eraser"];
// // var pluralThings = things.map(function(item){
// //     item = item + 's';
// //     return item;
// // });
//
// // let pluralThings = things.map((item) => `${item}s`);
// // let output = "";
// // pluralThings.forEach((item, index)=>{
// //     if (index === 0) {
// //         output = "<p>You must bring the following items:</p>";
// //         output += `<p>${item}</p>`;
// //     } else {
// //         output += `<p>${item}</p>`;
// //     }
// // });
// // $("#output").html(output);
//
// // let pluralThings = things.map((item) => `${item}s`);
// // let output = "";
// // pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// // $("#output").html(output);
//
//
// // const cars = [
// //     {
// //         make: "Honda",
// //         model: "Civic",
// //         mileage: 10428
// //     },
// //     {
// //         make: "Toyota",
// //         model: "Corolla",
// //         mileage: 9425
// //     },
// //     {
// //         make: "Ford",
// //         model: "Mustang",
// //         mileage: 2567
// //     },
// //     {
// //         make: "Audi",
// //         model: "A3",
// //         mileage: 14500
// //     },
// //     {
// //         make: "Mazda",
// //         model: "3",
// //         mileage: 11248
// //     }
// // ];
//
// // const mileages = cars.map( car => car.mileage );
//
// // const mileages = cars.map(function(car){
// //     return car.mileage;
// // });
//
// // let output = "";
// // mileages.forEach( item => output += `<p>${item}</p>` );
// // $("#output").html(output);
//
// // .filter()
//
// // const under10K = cars.filter(car => car.mileage < 10000 );
//
// // const under10K = cars.filter(function(car){
// //    if (car.mileage < 10000) {
// //        return true;
// //    } else {
// //        return false;
// //    }
// // });
//
// // var output = "";
// // under10K.forEach(function(car){
// //     output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
// //     $("#output").html(output);
// // });
//
// // let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// // let affordablesWithTax = prices.filter( price => price < 10).map(price => {
// //     let tax = (price * 0.0825).toFixed(2);
// //     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
// //     return parseFloat(total);
// // });
//
// // let affordablesWithTax = prices.filter( price => price < 10).map(price =>
// //     parseFloat((parseFloat(price) + parseFloat((price * 0.0825).toFixed(2))).toFixed(2))
// // );
// // let output = "";
// // affordablesWithTax.forEach(function(item){
// //     output = output + "<p>" + item + "</p>";
// //     $("#output").html(output);
// // });
//
//
// //===========================.reduce()==================
//
// // let totalCost = affordablesWithTax.reduce((total, indivItemCost) => total + indivItemCost );
//
//
// // var totalCost = affordablesWithTax.reduce(function(total, itemPrice){
// //     return total + itemPrice;
// // });
//
// // let totalCost = affordablesWithTax.reduce((total, indivItemCost, index) => {
// //     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`);
// //     return total + indivItemCost;
// // });
// //
// // let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
// //     total = total + indivItemCost;
// //     if (index === array.length - 1) {
// //         return total/array.length;
// //     } else {
// //         return total;
// //     }
// // });
//
// // let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) =>
// //   (index === array.length - 1 ? (total + indivItemCost)/array.length : total + indivItemCost)
// // );
//
// // let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// // var total = prices.reduce(function(total, price, index){
// //     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${price}`);
// //     return total + price;
// // }, 158.76);
//
// // const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];
// //
// // let aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
// //     if (!total[animal]) {
// //         total[animal] = 1;
// //     } else {
// //         total[animal] += 1;
// //     }
// //     console.log(`${animal}: ${total[animal]}`);
// //     console.log(total);
// //     return total;
// // }, {});
// //
// // // when I do total[animal] = 1, I create a key-value pair ant: 1
// //
// // const aesopsAnimalsCountedAndSorted = Object.entries(aesopsAnimalsCounted).sort(function(a, b){return b[1]-a[1]});
// //
// // for (let i = 0; i < aesopsAnimalsCountedAndSorted.length; i++){
// //     $("#output").append(
// //         aesopsAnimalsCountedAndSorted[i][0] + ": " + aesopsAnimalsCountedAndSorted[i][1] + "<br>"
// //     );
// // };
//
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
//
// const mileages = cars.reduce((accumulator, car) => {
//    accumulator.push(car.mileage);
//    return accumulator;
// }, []);
// // let accumulator = [];
// // accumulator = [10428];
// // accumulator = [10428, 9425]
// // accumulator = [10428, 9425, 2567] etc.
//
// // const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
// //     if (index === carsArray.length -1) {
// //         accumulator.push(car.mileage);
// //         accumulator.sort((a,b) => b-a);
// //         return accumulator[0];
// //     } else {
// //         accumulator.push(car.mileage);
// //         return accumulator;
// //     }
// // }, []);
//
// const highestMileage = cars.reduce((accumulator, car, index, carsArray)=>{
//     if (index === carsArray.length -1) {
//         accumulator.push(car.mileage);
//         let maxMileage = accumulator.reduce((mileage1, mileage2) => Math.max(mileage1, mileage2));
//         return maxMileage;
//     } else {
//         accumulator.push(car.mileage);
//         return accumulator;
//     }
// },[]);
//
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let highLowPrices = prices.reduce((accumulatorArray, price, index, pricesArray)=>{
//


