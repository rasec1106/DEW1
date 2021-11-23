import API from './api.js';
import UTIL from './util.js';

let movieDataGrid = document.getElementById("movieDataGridContainer");
getPopularMovies();
/**
 * POPULAR MOVIES
 */
function getPopularMovies() {
    API.popularMovies()
    .then(response=>{
        const popularMovies = response.results;
        // Removing all the content
        movieDataGrid.innerHTML = "";
        popularMovies.map((movie) =>{
            movieDataGrid.appendChild(UTIL.createThumbnail(movie));
        })
        movieDataGrid.animate([
            { // from
              opacity: 0
            },
            { // to
              opacity: 1
            }
          ], 3000);
    })
}

/**
 * SEARCH EVENT
 */
let search = document.getElementById("searchBarInput");
// Everytime the user writes the event is fired
search.addEventListener('keyup',searchMovies);
let currentSearchTerm = '';
function searchMovies(event) {
    // We give some time to the user to type the search query
    const timer = setTimeout(()=>{
        let searchTerm = event.target.value;
        // With this line we avoid executing the code with a repeated searchTerm
        if(currentSearchTerm.localeCompare(searchTerm) === 0) return;
        if(searchTerm.localeCompare('') === 0){
            getPopularMovies();
            return;
        }else{
            updateGridContainer(searchTerm)
            currentSearchTerm = searchTerm;
        }
    },500);
    // This is to clear the timeout
    return ()=> clearTimeout(timer);
}

function updateGridContainer(searchTerm) {
    API.searchMovies(searchTerm)
    .then( response =>{
        const results = response.results;
        // Removing all the content
        movieDataGrid.innerHTML = "";
        results.map((movie) =>{
            movieDataGrid.appendChild(UTIL.createThumbnail(movie));
        })
        movieDataGrid.animate([
            { // from
              opacity: 0
            },
            { // to
              opacity: 1
            }
          ], 3000);
    }
    )
}



/**
 * OVERVIEW SECTION
 */

// Getting the data from the API
// const movie = (await API.movie(movieId));

// let overviewContainer = document.getElementById('overviewContainer');
// overviewContainer.style.backgroundImage = `url(${API.backgroundUrl(movie)})`;
// // Main Container
// let plot = document.createElement('div');
// plot.className += " plot";
// // Image
// let image = UTIL.createDetailImage(movie);
// plot.appendChild(image);
// // Info
// let infoContainer = UTIL.createInfoPlot(movie);
// plot.appendChild(infoContainer);
// overviewContainer.appendChild(plot);

// /**
//  * TRAILER SECTION
//  */

// // Getting the data from the API
// const videosJson = (await API.videos(movieId));
// const video = videosJson.results[0];
// let trailer = null;
// if(video) trailer = video.key;
// // If the trailer exists we include it
// if(trailer){
//     let trailerContainer = document.getElementById('trailerContainer');
//     // Subheader
//     let title = document.createElement('div');
//     title.className += " subheader";
//     title.innerHTML = "Trailer";
//     trailerContainer.appendChild(title);
//     // Embedded trailer from youtube
//     let videoTrailer = document.createElement('div');
//     videoTrailer.className += " trailer";
//     videoTrailer.innerHTML = `
//         <iframe 
//         width="560" 
//         height="344" 
//         src="https://www.youtube.com/embed/${trailer}" 
//         title="YouTube video player" frameborder="0" 
//         allow="accelerometer; autoplay; clipboard-write; 
//         encrypted-media; gyroscope; picture-in-picture" 
//         allowfullscreen
//         >
//         </iframe>
//     `;
//     trailerContainer.appendChild(videoTrailer);
// }else{
//     // Some styling if the trailer doesn't exist
//     let trailerContainer = document.getElementById('trailerContainer');
//     trailerContainer.style = " width: 0;";
//     let recommendationsContainer = document.getElementById('recommendationsContainer');
//     recommendationsContainer.style = " width: 100%;";

// }

// /**
//  * RECOMMENDATIONS SECTION
//  */

// // Getting the data from the API
// let recommendations = (await API.recommendations(movieId));
// let recommendedMovies = recommendations.results;
// // If the trailer exists we only show 3 recommendations, if not we show 5
// if (trailer) recommendedMovies = recommendedMovies.slice(0,3);
// else recommendedMovies = recommendedMovies.slice(0,5);

// let recommendationsContainer = document.getElementById('recommendationsContainer');
// // Subheader
// let title = document.createElement('div');
// title.className += " subheader";
// title.innerHTML = "Recomendaciones";
// recommendationsContainer.appendChild(title);
// // If there are no recommendations we show a message
// if(recommendedMovies.length == 0){
//     let message = document.createElement("h4");
//     message.innerHTML = "No existen recomendaciones"
//     message.style = "height: 350px; padding-top: 20px;"
//     recommendationsContainer.appendChild(message);
// }else{
//     // Creating the recommendations
//     let gridRecommendations = document.createElement('div');
//     gridRecommendations.className += " recommendations";
//     recommendedMovies.map(movie => {
//         gridRecommendations.append(UTIL.createThumbnail(movie));
//     })
//     recommendationsContainer.appendChild(gridRecommendations);
// } 

// /**
//  * CAST SECTION
//  */

// // Getting the data from the API
// let credits = (await API.credits(movieId));
// let cast = credits.cast.slice(0,5);
// let castContainer = document.getElementById('castContainer');
// // Subheader
// let title2 = document.createElement('div');
// title2.className += " subheader";
// title2.innerHTML = "Actores Principales";
// castContainer.appendChild(title2);
// // Creating the characters
// let gridCastContainer = document.getElementById('gridCastContainer');
// cast.map(character=>{
//     gridCastContainer.append(UTIL.createCharacterThumbnail(character));
// })
// castContainer.appendChild(gridCastContainer);