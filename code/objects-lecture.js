var currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75
}

// console.log(currentWeather.temp);
// console.log(currentWeather.humidity);
// console.log(currentWeather.feels_like);

// console.log(currentWeather["temp"]);
// var whatImInterestedIn = "humidity";
// console.log(currentWeather[whatImInterestedIn]);

// console.log("The current temperature is " + currentWeather.temp);
//
// function fahrenheitToCelsius(tempInF){
//     return ((tempInF - 32)*5)/9;
// }
//
// console.log("The current temperature is " + currentWeather.temp + "F, " + fahrenheitToCelsius(currentWeather.temp).toFixed(2) + "C");
//
// if (currentWeather.temp > 95) {
//     console.log("It's hot!");
// } else {
//     console.log("Not real Texas heat!");
// }


// you can add new properties to an existing object
currentWeather.uvIndex = 9.79;

// loop through the object and get the property names
for (var prop in currentWeather){
    console.log(prop + ": " + currentWeather[prop]);
}

console.log("The UV index is " + currentWeather.uvIndex);

// you can delete properties from an object
delete currentWeather.uvIndex;
console.log("The UV index is " + currentWeather.uvIndex);

var hourlyWeather = [
    {
        time: "08:00",
        temp: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temp: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temp: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temp: 84.49,
        feels_like: 89.24
    }
];
console.log(hourlyWeather[0].temp); //>combining array and object using dot notation
                                    // to access the elements of the object


// looping through the array for loop & forEach
/* var i = 0; i < hourlyWeather.length; i++){ console.log("At " + "the temperature will be " + hourlyWeather[i].temp +
+ "and it feels like " + hourlyWeather[i].feels_like);
}
hourlyWeather.forEach(function(hourlyForcast) {
console.log("At " + hourlyForecast.time + " the temp is " + hourlyForecast.temp + " and feels like " + hourlyFOrecast.feels_like);
});

 */