//Here, we create a map by calling L's map() method and set its view to our chosen geographical coordinates (latitude, longitude)
//and a zoom level by calling that map's setView() method.
//Here, L is an object of the leaflet library
const map = L.map('map').setView([43.6532, -79.3832], 13);

//we’ll add a tile layer to add to our map, 
//in this case it’s a OpenStreetMap tile layer.
//maxZoom: Specify the maximum zoom of the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// adding a market at the position of the TIFF Venues
const tiffMarker = L.marker([43.6532, -79.3832]).addTo(map);
 
// Bind popup to the marker with a popup
tiffMarker.bindPopup("Toronto International Film Festival").openPopup();
