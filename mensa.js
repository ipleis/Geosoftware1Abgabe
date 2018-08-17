
//current date in Url
//var d = new Date();
//document.getElementById("demo").innerHTML = d;

var mensaContainer = document.getElementById("mensa-info");
var btn = document.getElementById("btn");
//Mensa am Aasee
btn.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://openmensa.org/api/v2/canteens/226/meals');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();

});

function renderHTML(data){
  var htmlString = "";

  for (i=0; i < data.length; i++){
    htmlString += "<p>" + data[0].date + " : " + data[0].meals.name + "</p>";
    for(ii=0; ii < data[i].meals.length; ii++){
      htmlString += "<p>" + data[i].meals.prices + "</p>";
    }

}

  mensaContainer.insertAdjacentHTML('beforeend', htmlString);
}
