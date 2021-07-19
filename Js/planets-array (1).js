(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */


    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    planets.unshift("The Sun");

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    planets.push("Pluto")

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    planets.shift("The Sun");
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    planets.pop("Pluto")
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf("Earth"); // 3
    console.log(index);

    console.log("Reversing the order of the planets array.");
    console.log(planets);
    colors.reverse();

    console.log("Sorting the planets array.");
    console.log(planets);
    planets.sort(); // (9) ["Earth", "Jupiter", "Mars", "Mercury", "Neptune",
    // "Saturn", "The Sun", "Uranus", "Venus"]
})();
