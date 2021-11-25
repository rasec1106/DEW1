const apiConfig = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "?api_key=2e24785394d993f26fba2a923499635d",
    DISCOVER: "/discover",
    POPULAR: "/popular",
    MOVIE: "/movie",
    TV: "/tv",
    FILTER:"&watch_region=US&with_watch_providers=8|9|119|337&sort_by=popularity.desc",
    VIDEOS: "/videos",
    RECOMMENDATIONS: "/recommendations",
    CREDITS: "/credits",
    SEARCH: "/search",
    PERSON: "/person",
    PERSON_MOVIES: "/movie_credits",
    spanish: "&language=es-MX"
}

const apiFunctions = {
    popularMovies: async()=>{
        let url = apiConfig.BASE_URL+apiConfig.MOVIE+apiConfig.POPULAR+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    movie: async(movieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.MOVIE+`/${movieId}`+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    videos: async(movieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.MOVIE+`/${movieId}`+apiConfig.VIDEOS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    posterUrl: function(movie) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w220_and_h330_face";
        return baseImageUrl + movie.poster_path; 
    },
    posterCharacterUrl: function(character) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w220_and_h330_face";
        return baseImageUrl + character.profile_path; 
    },
    detailImageUrl: function(movie) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w500";
        return baseImageUrl + movie.poster_path; 
    },
    backgroundUrl: function(movie) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
        return baseImageUrl + movie.backdrop_path; 
    },
    recommendations: async(movieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.MOVIE+`/${movieId}`+apiConfig.RECOMMENDATIONS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    credits: async(movieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.MOVIE+`/${movieId}`+apiConfig.CREDITS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    searchMovies: async(searchTerm)=>{
        let url = apiConfig.BASE_URL+apiConfig.SEARCH+apiConfig.MOVIE+apiConfig.API_KEY+apiConfig.spanish+`&query=${searchTerm}`;
        return await (await fetch(url)).json();
    },
    person: async(personId)=>{
        let url = apiConfig.BASE_URL+apiConfig.PERSON+`/${personId}`+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    personImageUrl: function(person) {
        var baseImageUrl = "http://image.tmdb.org/t/p/w500";
        return baseImageUrl + person.profile_path; 
    },
    personMovies: async(personId)=>{
        let url = apiConfig.BASE_URL+apiConfig.PERSON+`/${personId}`+apiConfig.PERSON_MOVIES+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    popularSeries: async()=>{
        let url = apiConfig.BASE_URL+apiConfig.DISCOVER+apiConfig.TV+apiConfig.API_KEY+apiConfig.FILTER;
        return await (await fetch(url)).json();
    },
    serie: async(serieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.TV+`/${serieId}`+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    seriesRecommendations: async(serieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.TV+`/${serieId}`+apiConfig.RECOMMENDATIONS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    seriesCredits: async(serieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.TV+`/${serieId}`+apiConfig.CREDITS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },
    seriesVideos: async(serieId)=>{
        let url = apiConfig.BASE_URL+apiConfig.TV+`/${serieId}`+apiConfig.VIDEOS+apiConfig.API_KEY+apiConfig.spanish;
        return await (await fetch(url)).json();
    },

}
export default apiFunctions;