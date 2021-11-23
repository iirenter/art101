/*
* author. Israel Renteria
* date. 11/22/21
*/

function fizzBuzzBoom() {
  for(i=0; i<=200; i++){
    console.log("running");
    var outputstr= "";
    if(i%3== 0 && i%5== 0 && i%7 == 0){
      outputstr += "FizzBuzzBoom";
      $("#output").append("<p>" + outputstr + "</p>");
      console.log("Hi");
    } else if(i%3== 0 && i%5== 0){
      outputstr += "FizzBuzz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%3== 0 && i%7== 0){
      outputstr += "FizzBoom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%7== 0 && i%5== 0){
      outputstr += "BuzzBoom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if(i%3== 0 ){
      outputstr = "Fizz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if (i%5== 0){
      outputstr = "Buzz";
      $("#output").append("<p>" + outputstr + "</p>");
    } else if (i%7 == 0){
      outputstr = "Boom";
      $("#output").append("<p>" + outputstr + "</p>");
    } else{
      outputstr= i;
      $("#output").append("<p>" + outputstr + "</p>");
    }
  }
}

$("#my-button").click(function(){
  console.log("click");
  fizzBuzzBoom();
  })
