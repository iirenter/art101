/*
* author. Israel Renteria
* date. 11/29/21
*/


var myUrl = "https://xkcd.com/info.0.json";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      //$("#output").html(JSON.stringify(data));
      var comicObj = data;
      var title = document.createElement('p');
      title= comicObj.title;
      $("#output").html("<h1>" + title + "</h1");
      var imgTag = "<img src=" + comicObj.img + ">";
      $("#output").append(imgTag);
      var imgAlt= document.createElement('p');
      imgAlt= comicObj.alt;
      $("#output").append("<p>" + imgAlt + "</p>");


  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);

	})

}
