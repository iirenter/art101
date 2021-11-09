/*
* author. Israel Renteria
* date. 11/8/21
*/

//Find the section you want to add the button to
//Create the button
//Give it a text label
//Add it to the section

$("#Challenge").append("<button id= 'button1'>Change Challenge</button>");
$("#Problems").append("<button id= 'button2'>Change Problems</button>");
$("#Results").append("<button id= 'button3'>Change Results</button>");

$("#button1").click(function(){
  $(this).parent().toggleClass("special");
})

$("#button2").click(function(){
  $(this).parent().toggleClass("special");
})

$("#button3").click(function(){
  $(this).parent().toggleClass("special");
})
