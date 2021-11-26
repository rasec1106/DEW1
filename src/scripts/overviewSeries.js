import API from './api.js';
import UTIL from './util.js';

/**
 * Getting the serieId from the url
 */
const params = new URLSearchParams(window.location.search);
const serieId = params.get('serieId');


/**
 * OVERVIEW SECTION
 */

// Getting the data from the API
const serie = (await API.serie(serieId));

let overviewContainer = document.getElementById('overviewContainer');
overviewContainer.style.backgroundImage = `url(${API.backgroundUrl(serie)})`;
// Main Container
let plot = document.createElement('div');
plot.className += " plot";
// Image
let image = UTIL.createDetailImage(serie);
plot.appendChild(image);
// Info
let infoContainer = UTIL.createSerieInfoPlot(serie);
plot.appendChild(infoContainer);
overviewContainer.appendChild(plot);

/**
 * TRAILER SECTION
 */

// Getting the data from the API
const videosJson = (await API.seriesVideos(serieId));
const video = videosJson.results[0];
let trailer = null;
if(video) trailer = video.key;
// If the trailer exists we include it
if(trailer){
    let trailerContainer = document.getElementById('trailerContainer');
    // Subheader
    let title = document.createElement('div');
    title.className += " subheader";
    title.innerHTML = "Trailer";
    trailerContainer.appendChild(title);
    // Embedded trailer from youtube
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
    // Some styling if the trailer doesn't exist
    let trailerContainer = document.getElementById('trailerContainer');
    trailerContainer.style = " width: 0;";
    let recommendationsContainer = document.getElementById('recommendationsContainer');
    recommendationsContainer.style = " width: 100%;";

}

/**
 * RECOMMENDATIONS SECTION
 */

// Getting the data from the API
let recommendations = (await API.seriesRecommendations(serieId));
let recommendedSeries = recommendations.results;
// If the trailer exists we only show 3 recommendations, if not we show 5
if (trailer) recommendedSeries = recommendedSeries.slice(0,3);
else recommendedSeries = recommendedSeries.slice(0,5);

let recommendationsContainer = document.getElementById('recommendationsContainer');
// Subheader
let title = document.createElement('div');
title.className += " subheader";
title.innerHTML = "Recomendaciones";
recommendationsContainer.appendChild(title);
// If there are no recommendations we show a message
if(recommendedSeries.length == 0){
    let message = document.createElement("h4");
    message.innerHTML = "No existen recomendaciones"
    message.style = "height: 350px; padding-top: 20px;"
    recommendationsContainer.appendChild(message);
}else{
    // Creating the recommendations
    let gridRecommendations = document.createElement('div');
    gridRecommendations.className += " recommendations";
    recommendedSeries.map(serie => {
        gridRecommendations.append(UTIL.createSerieThumbnail(serie));
    })
    recommendationsContainer.appendChild(gridRecommendations);
} 

/**
 * CAST SECTION
 */

// Getting the data from the API
let credits = (await API.seriesCredits(serieId));
let cast = credits.cast.slice(0,5);
let castContainer = document.getElementById('castContainer');
// Subheader
let title2 = document.createElement('div');
title2.className += " subheader";
title2.innerHTML = "Actores Principales";
castContainer.appendChild(title2);
// Creating the characters
let gridCastContainer = document.getElementById('gridCastContainer');
cast.map(character=>{
    gridCastContainer.append(UTIL.createCharacterThumbnail(character));
})
castContainer.appendChild(gridCastContainer);