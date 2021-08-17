"use strict"



$(document).ready(function(){
// Konami code
var konamiCode = ['up', 'up', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
var code = [];
// ad the keydown event listener

$(document).keydown(function(event){
    $(".konami-code-input").html(String.fromCharCode(event.keycode));


    console.log((code.slice(code.length - 11, code.length)).toString());
    console.log(konamiCode.toString());

    if((code.slice(code.length - 11, code.length).toString()) === konamiCode.toString()) {
        alert("30 Extra Lives!")
    }

});

});



