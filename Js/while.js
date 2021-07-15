

// while Loops : Create a while loop that uses console.log()
// to create the output shown below.
var x = 2;
while (x <= 65536) {
 console.log(x);
 x *= 2;
}





//While Loops
// A while loop is a basic looping construct that will execute a code block as long as a certain condition is true. For example:
//
// Syntax:

// while (/*condition*/) {
//     // body
// }

//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// #2 Do-while:
// a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;

console.log('There are ' + allCones + ' cones in stock.');

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) {
        allCones = allCones - conesSold;
        console.log(conesSold + ' cones purchased');
    } else {
        console.log('Sorry! I can\'t sell you ' + conesSold + ' cones.');
    }
    console.log('We have ' + allCones + ' cones left.');
} while (conesSold < allCones);


//random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
