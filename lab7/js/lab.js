/*
* author. Israel Renteria
* date. 10/25/21
*/

// sortUserName- A function that takes in a user's name then sorts the letters in alphabetical order

function sortUserName() {
  var userName = window.prompt("Hi. Give me your name and I'll fix it");
  console.log("User name = ", userName);

  // split string into an array
  var nameArray= userName.split('');
  console.log("Name array = ", nameArray);

  //Sort the nameArray
  var nameArraySorted = nameArray.sort();
  console.log("Name array sorted = ", nameArraySorted);

  //join the sorted array back into a string
  var nameSorted = nameArraySorted.join('');
  console.log("Name sorted = ", nameSorted);

  //return the result
  return nameSorted;
}

//output
document.writeln("Hey, I fixed your name: ",sortUserName(), " Enjoy your new name <br>");
