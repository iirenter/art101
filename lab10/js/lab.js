/*
* author. Israel Renteria
* date. 11/3/21
*/

// Gets the user's name frome the prompt field
var field= document.getElementById("user-name");

//Assign field value to name
var name = field.value;

//Add a js event to listen for the button Press
var buttonEl= document.getElementById("my-button");


//From Lab7 sortUserName- A function that takes in a user's name then sorts the letters in alphabetical order

function sortUserName() {
  var field= document.getElementById("user-name");
  var userName = field.value;//window.prompt("Hi. Give me your name and I'll fix it");
//  console.log("User name = ", userName);

  // split string into an array
  var nameArray= userName.split('');
  console.log("Name array = ", nameArray);

  //Sort the nameArray
  var nameArraySorted = nameArray.sort();
  console.log("Name array sorted = ", nameArraySorted);

  //join the sorted array back into a string
  var nameSorted = nameArraySorted.join('');
  console.log("Name sorted = ", nameSorted);
  // assign the content of div output to a varable
  var outputEl = document.getElementById("output");

  var new1El = document.createElement('p');
  new1El.innerHTML= nameSorted;
  outputEl.appendChild(new1El);

  //return the result
  return nameSorted;
}



buttonEl.addEventListener("click", sortUserName);
