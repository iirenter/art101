/*
* author. Israel Renteria
* date. 11/15/21
*/

//Create a function sortingHat()
//that takes a string as an argument: function sortingHat(str)
function sortingHat(str) {
  //counts the letters in str and assigns it to a variable length
  var length= str.length;
  //uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  //mod will now be a value between 0 and 3
    var mod = length % 4;
  //create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if(mod == 0){
    return "Gryffindor";
  }else if(mod == 1){
    return "RavenClaw";
  } else if(mod == 2){
    return "Slytherin";
  } else if(mod == 3) {
    return "Hufflepuff";
  }
}

//Create an click listener attached to #button
var myButton = document.getElementById("my-button");
//that gets the value of #input and assigns it to a variable name
myButton.addEventListener("click",function(){
  var name = document.getElementById("name").value;
  //runs sortingHat(name) and stores the result in a variable house
  var house= sortingHat(name);
  //appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  var newText= "<h1> The sorting hat says your house is "+ house + "</h1>";
  document.getElementById("output").innerHTML= newText;
})
