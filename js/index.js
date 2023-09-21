//For MAP SECTION

//Here, we create a map by calling L's map() method and set its view to our chosen geographical coordinates (latitude, longitude)
//and a zoom level by calling that map's setView() method.
//Here, L is an object of the leaflet library
const map = L.map("map").setView([43.6532, -79.3832], 13);

//we’ll add a tile layer to add to our map,
//in this case it’s a OpenStreetMap tile layer.
//maxZoom: Specify the maximum zoom of the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// adding a market at the position of the TIFF Venues
const tiffMarker = L.marker([43.6532, -79.3832]).addTo(map);

// Bind popup to the marker with a popup
tiffMarker.bindPopup("Toronto International Film Festival").openPopup();



//For SLIDESHOW SECTION
// understand it
//Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

const showSlide = (n) => {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
}

const nextSlide = () => {
    slideIndex++;
    showSlide(slideIndex);
}

// function prevSlide() {
//     slideIndex--;
//     showSlide(slideIndex);
// }

// Initial slide display
showSlide(slideIndex);

//Automatically advance slides (uncomment the line below)
setInterval(nextSlide, 3000); // Change slide every 3 seconds




//For STICKY NAVBAR 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

// Get the navbar
const header = document.querySelector("header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}