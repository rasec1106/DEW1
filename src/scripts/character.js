import API from './api.js';
import UTIL from './util.js';

/**
 * Getting the movieId from the url
 */
const params = new URLSearchParams(window.location.search);
const characterId = params.get('characterId');

/**
 * OVERVIEW SECTION
 */

// Getting the data from the API
const character = (await API.person(characterId));
let overviewContainer = document.getElementById('overviewContainer');
// overviewContainer.style.backgroundImage = `url(${API.backgroundUrl(movie)})`;
// Main Container
let plot = document.createElement('div');
plot.className += " plot";
// Image
let image = UTIL.createPersonImage(character);
plot.appendChild(image);
// Info
let infoContainer = UTIL.createPersonPlot(character);
plot.appendChild(infoContainer);
overviewContainer.appendChild(plot);

// /**
//  * TRAILER SECTION
//  */



// Getting the data from the API
const moviesData = (await API.personMovies(characterId));
let cast = moviesData.cast;
cast.sort((a,b)=> {
    if(a.release_date>b.release_date) return -1
    return 1;
} );
cast.sort((a,b)=> b.popularity-a.popularity);
cast = cast.slice(0,10);
overviewContainer.style.backgroundImage = `url(${API.backgroundUrl(cast[getRandomInt(cast.length)])})`;
let castContainer = document.getElementById('castContainer');
// Subheader
let title2 = document.createElement('div');
title2.className += " subheader";
title2.innerHTML = "Peliculas donde aparece";
castContainer.appendChild(title2);
// Creating the characters
let gridCastContainer = document.getElementById('gridCastContainer');
cast.map(movie=>{
    gridCastContainer.append(UTIL.createMovieThumbnail(movie));
})
castContainer.appendChild(gridCastContainer);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}