/*Create a function called processNumber

Takes one parameter that should be numeric - should handle both a number and a numeric string
Starting from the original number, double the value of every other digit
Then add the values of the individual digits together
If the doubled value now has two digits, add the digits individually
Return the resulting number

If passed the number 176248, it should return 27

If passed the number 1762483, it should return 30 */
function processNumber(numbers) {

}
    // var numbers = 176248;
    // // string methods
    // var numsArr = number.toString().split("");
    // console.log(numsArr);
    //
    // // need a runnning total, starting point, which everywhere starts with 0
    // var numTotal = 0;
    // numsArr.forEach(function(number, index){
    //     if (index % 2 === 0) {
    //         numTotal += parseFloat(num);
    //     }
    // });
    // console.log(total);
var numbers = 176248;
// string methods
var numsArr = numbers.toString().split("");
console.log(numsArr);

// need a runnning total, starting point, which everywhere starts with 0
var numTotal = 0;
numsArr.forEach(function(number, index){
    if (index % 2 !== 0) {
        if((parseFloat(numbers) * 2) < 10) {
            numTotal += parseFloat(numbers) * 2;
        } else {
            let numsArr = numbers.toString().split("");
            // console.log(numsArr);
            var numAddedToTotal = parseFloat(numsArr[0]) * parseFloat(numsArr[1]);
            total += numAddedToTotal;
        }
    } else {
        total += parseFloat(numbers)
        }

});
console.log(total);



// for(var i in num) {
//     numtotal += num[i];
// }
// return numtotal;
