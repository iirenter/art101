/*
* author. Israel Renteria
* date. 11/1/21
*/

// assign the content of div output to a varable
var outputEl = document.getElementById("output");

//create a new element and assign it a varable
var new1El = document.createElement('p');
new1El.innerHTML= "This should work right?";

var new2El = document.createElement('p');
new2El.innerHTML = "I got this for sure";

//append outputEl

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
