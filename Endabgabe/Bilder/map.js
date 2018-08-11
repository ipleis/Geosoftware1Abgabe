/**
 * @desc creating the webmap
 * @author Anika Graupner: 437401
 * @author Cornelia Zygar: 437451
 */
"use strict";

//creating the map

var map = L.map('map').setView([51.95, 7.61], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

map.locate({
    setView: true,
    maxZoom: 16
});


/**
 * @see http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html
 * @desc Adding the edit toolbar
 */

// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

var json;

/**
 * @desc function to draw on the map
 */


map.on(L.Draw.Event.CREATED, function(e) {
    var type = e.layerType,
        layer = e.layer;
    json = layer.toGeoJSON();
    map.addLayer(layer);
});

/**
 * @see https://github.com/eligrey/FileSaver.js/wiki/FileSaver.js-Example
 * @desc saves a file using FileSaver.js
 */

function SaveAsFile(t, f, m) {
    try {
        var b = new Blob([t], {
            type: m
        });
        saveAs(b, f);
    } catch (e) {
        window.open("data:" + m + "," + encodeURIComponent(t), '_blank', '');
    }
}


/**
 * saves a drawn layer as a geojson file.
 */

function SaveGeoJSON() {
    // creates a String from the geojson object.
    var jsonString = JSON.stringify(json);
    var filename = document.getElementById("geojsonName").value + ".txt";

    SaveAsFile(jsonString, filename, "text/plain;charset=utf-8");
}

/**
 * function to be executed if a location is available.
 */
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

/**
 * function to be executed if the location fails
 */

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// creating a permanent marker with popup and picture

var popupcont = {
    "Domplatz": "Here is the Domplatz of Münster: <img src= images/Domplatz.jpg height=200 width= 200>"
}
var marker = L.marker([51.962518, 7.625911]).addTo(map);
marker.bindPopup(popupcont["Domplatz"]).openPopup();

/**
 * @desc upload function for geojson files which then will be added to the map.
 * @see https://www.w3schools.com/js/js_ajax_intro.asp
 */

function loadDoc() {
    var upload = document.getElementById("input").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var inhalt = this.responseText;
            inhalt = JSON.parse(inhalt);
            L.geoJSON(inhalt).addTo(map);
        }

    };
    xhttp.open("GET", upload, true);
    xhttp.send();
}
