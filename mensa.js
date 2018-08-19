
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
  var i;

    htmlString += "<p>" + data[0].date + ": " + "</p>";

    for(i=0; i<data[0].meals.length; i++) {
      htmlString += "<p>" + data[0].meals[i].category + ": " + data[0].meals[i].name  + "</p>";
      htmlString += "<p>" + "Preis (Studenten): " + data[0].meals[i].prices.students + "€" + "</p>";
      htmlString += "<p>" + "Preis (Mitarbeiter): " + data[0].meals[i].prices.employees  + "€" + "</p>";
      htmlString += "<p>" + "Preis (Andere): " + data[0].meals[i].prices.others  + "€" + "</p>";

}

  mensaContainer.insertAdjacentHTML('beforeend', htmlString);
}


//Mensa am Ring
btn1.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://openmensa.org/api/v2/canteens/225/meals');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();

});

function renderHTML(data){
  var htmlString = "";
  var i;

    htmlString += "<p>" + data[0].date + ": " + "</p>";

    for(i=0; i<data[0].meals.length; i++) {
      htmlString += "<p>" + data[0].meals[i].category + ": " + data[0].meals[i].name  + "</p>";
      htmlString += "<p>" + "Preis (Studenten): " + data[0].meals[i].prices.students + "€" + "</p>";
      htmlString += "<p>" + "Preis (Mitarbeiter): " + data[0].meals[i].prices.employees  + "€" + "</p>";
      htmlString += "<p>" + "Preis (Andere): " + data[0].meals[i].prices.others  + "€" + "</p>";

}

  mensaContainer.insertAdjacentHTML('beforeend', htmlString);
}



//Mensa Da Vinci
btn2.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://openmensa.org/api/v2/canteens/228/meals');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();

});

function renderHTML(data){
  var htmlString = "";
  var i;

    htmlString += "<p>" + data[0].date + ": " + "</p>";

    for(i=0; i<data[0].meals.length; i++) {
      htmlString += "<p>" + data[0].meals[i].category + ": " + data[0].meals[i].name  + "</p>";
      htmlString += "<p>" + "Preis (Studenten): " + data[0].meals[i].prices.students + "€" + "</p>";
      htmlString += "<p>" + "Preis (Mitarbeiter): " + data[0].meals[i].prices.employees  + "€" + "</p>";
      htmlString += "<p>" + "Preis (Andere): " + data[0].meals[i].prices.others  + "€" + "</p>";

}

  mensaContainer.insertAdjacentHTML('beforeend', htmlString);
}



//Mensa Bispinghof
btn3.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://openmensa.org/api/v2/canteens/233/meals');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();

});

function renderHTML(data){
  var htmlString = "";
  var i;

    htmlString += "<p>" + data[0].date + ": " + "</p>";

    for(i=0; i<data[0].meals.length; i++) {
      htmlString += "<p>" + data[0].meals[i].category + ": " + data[0].meals[i].name  + "</p>";
      htmlString += "<p>" + "Preis (Studenten): " + data[0].meals[i].prices.students + "€" + "</p>";
      htmlString += "<p>" + "Preis (Mitarbeiter): " + data[0].meals[i].prices.employees  + "€" + "</p>";
      htmlString += "<p>" + "Preis (Andere): " + data[0].meals[i].prices.others  + "€" + "</p>";

}

  mensaContainer.insertAdjacentHTML('beforeend', htmlString);
}
