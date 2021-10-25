/*
*author. Israel Renteria & Sophia Syed
*Date Created. 10/20/21
*/

//Declaring array and Objects
var myTransports = ["walk", "bike", "bus", "Ford Taurus"];

var myMainRide = {
  make : "Ford",
  model : "Taurus",
  year : 1994,
  age : function() {
    return 2021 - year;
  }
};

//Output
document.writeln("Getting around on: " + myTransports + "<br>");
document.writeln("My Main Ride : <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
