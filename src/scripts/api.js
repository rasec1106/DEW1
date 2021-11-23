const apiConfig = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "?api_key=2e24785394d993f26fba2a923499635d",
    POPULAR: "/popular",
    MOVIE: "/movie",
    VIDEOS: "/videos",
    RECOMMENDATIONS: "/recommendations",
    CREDITS: "/credits",
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

}
export default apiFunctions;