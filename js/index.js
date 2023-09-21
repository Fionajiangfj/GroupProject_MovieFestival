// Javascript of Homepage


//For STICKY NAVBAR in header
// Get the header which has navbar
const header = document.querySelector("header");

// Get the offset position of the header
const headerHeight = header.offsetHeight;

// Function to handle the scroll event
// Adding the sticky class to the navbar when we reach its scroll position. 
//Remove "sticky" when we leave the scroll position
const handleScroll = () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);



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
};

const nextSlide = () => {
  slideIndex++;
  showSlide(slideIndex);
};

// Initial slide display
showSlide(slideIndex);

//Automatically advance slides (uncomment the line below)
setInterval(nextSlide, 3000); // Change slide every 3 seconds



//TALKS SECTION
//Contents of the card
console.log("Card contents");

const speakerList = [
  { image: "linklater.jpeg", name: "Richard Linklater" },
  { image: "toro.jpeg", name: "Guillermo del Toro" },
  { image: "belo.jpeg", name: "Mahalia Belo" },
  { image: "korine.jpeg", name: "Harmony Korine" },
];

const speakerCardContent = () => {
  console.log(`hellloooo`);

  for (currSpeaker of speakerList) {
    console.log(speakerList);

    //Create a string that stores all this html
    const output = `
      <div class="card">
        <img src="./assets/images/talklist/${currSpeaker.image}"/>
        <h3>${currSpeaker.name}</h3>
        <button class="btn-card">Watch Now</button>
      </div>
      `;
    console.log(output);


    //aappend that html to the section element
    document.querySelector("#card-container").innerHTML += output;
  }
};


document.addEventListener("DOMContentLoaded", speakerCardContent);



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