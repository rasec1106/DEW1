const apiConfig = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "2e24785394d993f26fba2a923499635d",
    POPULAR_MOVIE_URL: "/movie/popular?api_key=",
    spanish: "&language=es-MX"
}

const apiFunctions = {
    popularMovies: async()=>{
        let url = apiConfig.BASE_URL+apiConfig.POPULAR_MOVIE_URL+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    posterUrl: function(movie) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w300/";
        return baseImageUrl + movie.poster_path; 
    }

}
export default apiFunctions;