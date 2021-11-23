import API from './api.js';
import UTIL from './util.js';

/**
 * Getting the movieId from the url
 */
const params = new URLSearchParams(window.location.search);
const movieId = params.get('movieId');

/**
 * Getting the data from the API
 */
const movie = (await API.movie(movieId));
const videosJson = (await API.videos(movieId));
const video = videosJson.results[0];
let trailer = null;
if(video) trailer = video.key;

/**
 * OVERVIEW SECTION
 */
let overviewContainer = document.getElementById('overviewContainer');
overviewContainer.style.backgroundImage = `url(${API.backgroundUrl(movie)})`;
// Main Container
let plot = document.createElement('div');
plot.className += " plot";
// Image
let image = UTIL.createDetailImage(movie);
plot.appendChild(image);
// Info
let infoContainer = UTIL.createInfoPlot(movie);
plot.appendChild(infoContainer);
overviewContainer.appendChild(plot);

/**
 * TRAILER SECTION
 */
if(trailer){
    let trailerContainer = document.getElementById('trailerContainer');
    let title = document.createElement('div');
    title.className += " subheader";
    title.innerHTML = "Trailer";
    trailerContainer.appendChild(title);
    let videoTrailer = document.createElement('div');
    videoTrailer.className += " trailer";
    videoTrailer.innerHTML = `
        <iframe 
        width="560" 
        height="344" 
        src="https://www.youtube.com/embed/${trailer}" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        >
        </iframe>
    `;
    trailerContainer.appendChild(videoTrailer);
}else{
    let trailerContainer = document.getElementById('trailerContainer');
    trailerContainer.style = " width: 0;";
    let recommendationsContainer = document.getElementById('recommendationsContainer');
    recommendationsContainer.style = " width: 100%;";

}

/**
 * RECOMMENDATIONS SECTION
 */
let recommendations = (await API.recommendations(movieId));
let recommendedMovies = recommendations.results;
if (trailer) recommendedMovies = recommendedMovies.slice(0,3);
else recommendedMovies = recommendedMovies.slice(0,5);

let recommendationsContainer = document.getElementById('recommendationsContainer');
let title = document.createElement('div');
title.className += " subheader";
title.innerHTML = "Recomendaciones";
recommendationsContainer.appendChild(title);
if(recommendedMovies.length == 0){
    let message = document.createElement("h4");
    message.innerHTML = "No existen recomendaciones"
    message.style = "height: 350px; padding-top: 20px;"
    recommendationsContainer.appendChild(message);
}else{
    let gridRecommendations = document.createElement('div');
    gridRecommendations.className += " recommendations";
    recommendedMovies.map(movie => {
        gridRecommendations.append(UTIL.createThumbnail(movie));
    })
    recommendationsContainer.appendChild(gridRecommendations);
} 

/**
 * CAST SECTION
 */
let credits = (await API.credits(movieId));
let cast = credits.cast.slice(0,5);
let castContainer = document.getElementById('castContainer');
let title2 = document.createElement('div');
title2.className += " subheader";
title2.innerHTML = "Actores Principales";
castContainer.appendChild(title2);
let gridCastContainer = document.getElementById('gridCastContainer');
cast.map(character=>{
    gridCastContainer.append(UTIL.createCharacterThumbnail(character));
})
castContainer.appendChild(gridCastContainer);