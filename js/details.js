// A list of movies
const movieList = [
    {
        image: "1.jpg",
        title: "The Shawshank Redemption",
        genre: ["Drama"],
        director: "Frank Darabont",
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        time: "12: 00p.m. Sep 21th, 2023",
    },
    {
        image: "2.jpg",
        title: "The Godfather",
        genre: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        time: "14: 00p.m. Sep 22th, 2023",
    },
    {
        image: "3.jpg",
        title: "The Dark Knight",
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        time: "12: 00p.m. Sep 23th, 2023",
    },
    {
        image: "4.jpg",
        title: "The Godfather Part II",
        genre: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        stars: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
        time: "12: 00p.m. Sep 24th, 2023",
    },
    {
        image: "5.jpg",
        title: "12 Angry Men",
        genre: ["Crime", "Drama"],
        director: "Sidney Lumet",
        stars: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
        time: "14: 00p.m. Sep 25th, 2023",
    },
    {
        image: "6.jpg",
        title: "Schindler's List",
        genre: ["Biography", "Drama", "History"],
        director: "Steven Spielberg",
        stars: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        time: "12: 00p.m. Sep 26th, 2023",
    },
    {
        image: "7.jpg",
        title: "The Lord of the Rings: The Return of the King",
        genre: ["Action", "Adventure", "Drama"],
        director: "Peter Jackson",
        stars: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
        time: "12: 00p.m. Sep 27th, 2023",
    },
    {
        image: "8.jpg",
        title: "Pulp Fiction",
        genre: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        time: "12: 00p.m. Sep 28th, 2023",
    },
    {
        image: "9.jpg",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: ["Action", "Adventure", "Drama"],
        director: "Peter Jackson",
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        time: "14: 00p.m. Sep 29th, 2023",
    },
    {
        image: "10.jpg",
        title: "The Good, the Bad and the Ugly",
        genre: ["Adventure", "Western"],
        director: "Sergio Leone",
        stars: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
        time: "12: 00p.m. Sep 30th, 2023",
    },
];


document.addEventListener("DOMContentLoaded", () => {

    const btnSearch = document.querySelector('#btn-search');
    const btnClear = document.querySelector('#btn-clear');
    const inputElm = document.querySelector('#search-input');

    // By default, show search btn, hide clear btn
    btnSearch.style.display = 'block';
    btnClear.style.display = 'none';
    
    const pageLoaded = (movieList) => {
        
        // Clear out last search result
        document.querySelector('#main-movie').innerHTML = '';

        for (let movie of movieList) {
    
            // Adjust the font size of movie title according to the length of the title
            let fontSize = "35px";
            if (movie.title.length > 30) {
                fontSize = "24px";
            }
    
            // Join the genres together
            const genres = movie.genre.map(g => `<span>${g}</span>`).join('');
    
            // Join the stars together with ' · ' separator
            const stars = movie.stars.join(" · ");
    
            const output = `
                <div class="row">
                    <img src="./assets/images/movielist/${movie.image}" alt="${movie.title}" />
                    <div class="right-col">
                        <h2 id="movie-title" style="font-size: ${fontSize};">${movie.title}</h2>
                        <p class="genre">${genres}</p>
                        
                        <div class="cast-date">
                            <p class="title">Director</p>
                            <p class="content">${movie.director}</p>
                        </div>
                        <div class="cast-date">
                            <p class="title">Stars</p>
                            <p class="content">
                            ${stars}</p>
                        </div>
                        <div class="cast-date">
                            <p class="title">Starts at</p>
                            <p class="content">${movie.time}</p>
                        </div>
    
                        <a class="buy-ticket-link" href="purchase.html"
                            >Buy Ticket</a
                        >
                    </div>
                </div>
            `;
    
            document.querySelector('#main-movie').innerHTML += output;
        }
    };
    

    const searchBtnPressed = () => {
        
        // When search btn clicked, hide it, show clear btn
        btnClear.style.display = 'block';
        btnSearch.style.display = 'none';

        // Get user input
        const inputVal = inputElm.value;
        
        // Fill search result list
        let searchList = [];
        for (let each of movieList) {
    
            const stars = each.stars.join(" · ");
    
            if (each.title.toLowerCase().includes(inputVal.toLowerCase()) ||
                each.director.toLowerCase().includes(inputVal.toLowerCase()) ||
                stars.toLowerCase().includes(inputVal.toLowerCase())
            ) {
                searchList.push(each);
            }
        }
        
        // Load search result list
        pageLoaded(searchList);
    }
    

    const clearBtnPressed = () => {
        
        // Clear input field, and show hide clear btn
        inputElm.value = '';
        btnSearch.style.display = 'block';
        btnClear.style.display = 'none';

        // Show the full list
        pageLoaded(movieList);
    }

    
    // By default, show the full movie list
    pageLoaded(movieList);
    
    btnSearch.addEventListener('click', searchBtnPressed);
    btnClear.addEventListener('click', clearBtnPressed);
});

