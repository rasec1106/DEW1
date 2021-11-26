import API from './api.js';
import UTIL from './util.js';

/**
 * Fetching the data from the API
 */
const movies = (await API.popularMovies()).results;
const series = (await API.popularSeries()).results;

/**
 * Making the slider
 */
UTIL.setCarouselImages(movies.slice(0,5));

/**
 * Popular Movies
 */
 for(let i=0; i<4; i++){
    let slide = document.createElement('div');
    slide.className += "movieItem carousel-item"
    let container = document.createElement("div");
    container.className += " simple-grid";
    movies.slice(i*5,i*5+5).map(movie=>{
        container.appendChild(UTIL.createMovieThumbnail(movie))
    });
    slide.appendChild(container);
    $('#moviesCarousel').append(slide);
}
$('.movieItem').first()[0].className += " active";

/**
 * Popular Series
 */
 for(let i=0; i<4; i++){
    let slide = document.createElement('div');
    slide.className += "serieItem carousel-item"
    let container = document.createElement("div");
    container.className += " simple-grid";
    series.slice(i*5,i*5+5).map(serie=>{
        container.appendChild(UTIL.createSerieThumbnail(serie))
    });
    slide.appendChild(container);
    $('#seriesCarousel').append(slide);
}
$('.serieItem').first()[0].className += " active";