console.log("dom-lec");


// getting element by id
var header = document.getElementId('main-title');
console.log(header);



//getting elements by class
var cards = document.getElementsByClassName("card");
console.log(cards);
var firstCard = cards[0];
console.log(firstCard);

var cardsArr = Array.from(cards);
console.log(cardsArr);

// the code stops as soon as the error occurs

// getting elements by tags = get all the tags name like <a>
document.getElementsByTagName("section");
// but nothings gonna show until you store the value & do something with it
// console.log(sections) // << console.logging will do this


//getting element by document.querySelector
// var headingElement = document.querySelector('header h1');
// var headingElement = document.querySelector('#main-title')
// console.log(headingElement);

// formElements, one good thing about form is that
// they can be accessed through document.forms
// the browser treats form elements diferently than any other elements

// Direct access to form elements
// var feedbackFormValue = document.forms[0].feedback.value;
// console.log(feedbackFormValue);
//
// var title = document.getElementById("main-title");
// console.log(title);
//
// console.log(title.innerHTML);
// console.log(title.innerText);
//
// title.innerHtml = <em>Hello, Draco!</em>
// title.innerText= <em>Hello, Draco!</em> <this is if you want to ignore special elements


// you can put a set of elements inside another set of elements
// attributes dont get rendered

var cowboyElement = document.querySelector('#cowboy');

console.log(cowboyElement);

// getting a value of an attribute
console.log(cowboyElement.hasAttribute( data-1));

// setting the value of an attribute
cowboyElement.setAttribute("data-1", 'hello');

//Remove an attribute
cowboyElement.removeAttribute('data-test');

// Changing the styles
var jumbotron = document.querySelector(.jumbotron);
console.log(jumbotron);
jumbotron.style.display = 'none';

//styling a node list
var tableRows = document.getElementsByTagName("tr");
console.log(tableRows)
    for(var i = 0; i < tableRows.length; i++) {
  tableRows[i].style.background = "red";
}