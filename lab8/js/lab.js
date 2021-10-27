/*
* author. Israel Renteria
* date. 10/27/21
*/

//Declaring function
function sqrNumber(x){
    var result = x * x;
    return result;
};
//testing function
console.log("5 squared is ",sqrNumber(5));

console.log("4 squared is ",sqrNumber(4));

console.log("7 squared is ",sqrNumber(7));

//declaring an array
array = [5,7,8,3,9];
console.log("My array: ", array);

var result= array.map(sqrNumber);
console.log("My array Squared: ", result);

var result= array.map(function(x){
    var results= x + 5;
    return results;
});
console.log("My array plus 5: ", result);
