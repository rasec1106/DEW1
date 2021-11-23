import API from './api.js';
import UTIL from './util.js';

let movieDataGrid = document.getElementById("movieDataGridContainer");
let currentSearchTerm = '';

/**
 * SEARCH EVENT
 */
let search = document.getElementById("searchBarInput");
// Everytime the user writes the event is fired
search.addEventListener('keyup',eventHandler);
// The first time the page is load we call the function
searchMovies(search.value);
console.log(search.value);

function eventHandler(event){
  let searchTerm = event.target.value;
  // We give some time to the user to type the search query
  const timer = setTimeout(()=>{
    searchMovies(searchTerm);
  },500);
  // This is to clear the timeout
  return ()=> clearTimeout(timer);
}

function searchMovies(searchTerm) {
  if(searchTerm.localeCompare('') === 0){
    getPopularMovies();
    return;
  }else{
    // With this line we avoid executing the code with a repeated searchTerm
    if(currentSearchTerm.localeCompare(searchTerm) === 0) return;
    updateGridContainer(searchTerm)
    currentSearchTerm = searchTerm;
  }
  return;
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
      // Giving some animation
      movieDataGrid.animate([
          { // from
            opacity: 0
          },
          { // to
            opacity: 1
          }
        ], 3000);
  }
  );
  return;
}
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
      // Giving some animation
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
