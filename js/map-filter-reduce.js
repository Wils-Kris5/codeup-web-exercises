const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//1 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
 let leastThreeLang = users.filter(user =>user.languages.length < 3);

 console.log(leastThreeLang);
 // 0: {id: 1, name: "ryan", email: "ryan@codeup.com", languages: Array(2), yearsOfExperience: 5}
// 1: {id: 3, name: "zach", email: "zach@codeup.com", languages: Array(2), yearsOfExperience:



//2 Use .map to create an array of strings where each element is a user's email address
  let usersEmail = users.map( user => user.email);

  console.log(usersEmail);
// (5) ["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com", "fernando@codeup.com", "justin@codeup.com"]
// 0: "ryan@codeup.com"
// 1: "luis@codeup.com"
// 2: "zach@codeup.com"
// 3: "fernando@codeup.com"
// 4: "justin@codeup.com"




//3 Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
let avgtotalYrsExp = users.reduce((totalYears, user, index, array)
    => total + user.yearsOfExperience/array.length, 0);


 


//4 Use .reduce to get the longest email from the list of users.
  const longestEmail = users.reduce((accumulator, user, index, users) => {
      if(index === users.length-1){
          accumulator.push(user.email);
        let maxMileage = accumulator.reduce((mileage1, mileage2) => Math.max(mileage1, mileage2));
        return maxMileage;
    } else {
        accumulator.push(car.mileage);
        return accumulator;
    }
},[]);
//5 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNamesSingleStr = prices.reduce((accumulatorArray, price, index, pricesArray)=>{
//    if (index === users.length-1){



//        accumulatorArray.push(e);
//        let returnArray = [];
//        accumulatorArray.sort((price1, price2)=>price1-price2);
//        let lowestPrice = accumulatorArray[0];
//        let highestPrice = accumulatorArray[accumulatorArray.length-1];
//        returnArray.push(lowestPrice);
//        returnArray.push(highestPrice);
//        return returnArray;
//    } else {
//        accumulatorArray.push(price);
//        return accumulatorArray;
//    }
// }, []);




//let uniqueUserLanguages = users.reduce(function(accumulator, user){
//     let languages = user.languages;
//     for (let i = 0; i < languages.length; i++){
//         if (!accumulator.includes(languages[i])){
//             accumulator.push(languages[i]);
//         }
//     }
//     return accumulator.sort();
// }, []);
// console.log(uniqueUserLanguages);