import API from './api.js'

function setCarouselImages(images){
    for(const pos in images){
        // Creating the images
        let container = document.createElement('div');
        container.className += " carousel-item";
        let image = document.createElement('img');
        image.className += " d-block w-100 carousel-img";
        image.src = API.backgroundUrl(images[pos]);
        container.appendChild(image);
        $('#carouselContainer').append(container);
  
        // Creating the dots
        let list = document.getElementById('carouselList');
        list.innerHTML += `<li data-target="#slideshow" data-slide-to="${pos}" class="indicator"></li>`;
      }
      // Setting the first element to be shown
      $('.carousel-item').first()[0].className += " active";
      $('.indicator').first()[0].className += " active";
}

function createMovieThumbnail(movie){
    let thumbnail = document.createElement('div');
    thumbnail.className += "thumbnail";
    let link = createThumbnailLink(movie);
    link.className += " link";
    link.appendChild(createThumbnailImage(movie));
    thumbnail.appendChild(link);
    return thumbnail;
}

function createThumbnailLink(movie){
    let link = document.createElement('a');
    link.href = `./overview.html?movieId=${movie.id}`;
    return link;
}
function createThumbnailImage(movie){
    let image = document.createElement('img');
    image.src = API.posterUrl(movie);
    image.className += "thumbnail-image";
    return image;
}
function createDetailImage(movie){
    let image = document.createElement('img');
    image.src = API.detailImageUrl(movie);
    image.className += "detail-image";
    return image;
}
function createInfoPlot(movie){
    let info = document.createElement('div');
    info.className += " plot-info";
    // Titulo
    let title = document.createElement('h2');
    title.className += " plot-title";
    title.innerHTML = movie.title+` (${movie.release_date.slice(0,4)})`;
    info.appendChild(title);
    // Subtitulo
    let subtitle = document.createElement('h4');
    subtitle.className += " plot-subtitle";
    subtitle.innerHTML = movie.tagline;
    info.appendChild(subtitle);
    // Overview
    let description = document.createElement('p');
    description.className += " plot-description";
    description.innerHTML = movie.overview;
    info.appendChild(description);
    // Score
    let rating = document.createElement('div');
    rating.className += "plot-rating";
    rating.innerHTML = "Rating"
    let score = document.createElement('div');
    score.className += " plot-score";
    score.innerHTML = movie.vote_average;
    rating.appendChild(score);
    info.appendChild(rating);
    return info;
}
function createCharacterThumbnail(character){
    let thumbnail = document.createElement('div');
    thumbnail.className += "thumbnail";
    let link = createCharacterThumbnailLink(character);
    link.className += " link";
    link.appendChild(createCharacterThumbnailImage(character));
    let description = document.createElement('div');
    description.className += " characterDescription";
    let name = document.createElement('h4');
    name.className += " characterActorName"
    name.innerHTML = character.name;
    let characterName = document.createElement('div');
    characterName.className += " characterName"
    characterName.innerHTML = character.character;
    description.appendChild(name);
    description.appendChild(characterName);
    link.appendChild(description);
    thumbnail.appendChild(link);
    return thumbnail;
}
function createCharacterThumbnailLink(character){
    let link = document.createElement('a');
    link.href = `./character.html?characterId=${character.id}`;
    return link;
}
function createCharacterThumbnailImage(character){
    let image = document.createElement('img');
    image.src = API.posterCharacterUrl(character);
    image.className += "thumbnail-image";
    return image;
}
function createPersonImage(person) {
    let image = document.createElement('img');
    image.src = API.personImageUrl(person);
    image.className += "detail-image";
    return image;
}
function createPersonPlot(person){
    let info = document.createElement('div');
    info.className += " plot-info";
    // Titulo
    let title = document.createElement('h2');
    title.className += " plot-title";
    title.innerHTML = person.name;
    info.appendChild(title);
    // Subtitulo
    let subtitle = document.createElement('h4');
    subtitle.className += " plot-subtitle";
    subtitle.innerHTML = person.birthday;
    info.appendChild(subtitle);
    // Overview
    let description = document.createElement('p');
    description.className += " plot-description";
    description.innerHTML = person.biography;
    info.appendChild(description);
    // // Score
    // let rating = document.createElement('div');
    // rating.className += "plot-rating";
    // rating.innerHTML = "Rating"
    // let score = document.createElement('div');
    // score.className += " plot-score";
    // score.innerHTML = movie.vote_average;
    // rating.appendChild(score);
    // info.appendChild(rating);
    return info;
}
function createSerieThumbnail(serie){
    let thumbnail = document.createElement('div');
    thumbnail.className += "thumbnail";
    let link = createSerieThumbnailLink(serie);
    link.className += " link";
    link.appendChild(createThumbnailImage(serie));
    thumbnail.appendChild(link);
    return thumbnail;
}
function createSerieThumbnailLink(serie){
    let link = document.createElement('a');
    link.href = `./overviewSeries.html?serieId=${serie.id}`;
    return link;
}
function createSerieInfoPlot(serie){
    let info = document.createElement('div');
    info.className += " plot-info";
    // Titulo
    let title = document.createElement('h2');
    title.className += " plot-title";
    title.innerHTML = serie.name+` (${serie.first_air_date.slice(0,4)})`;
    info.appendChild(title);
    // Subtitulo
    let subtitle = document.createElement('h4');
    subtitle.className += " plot-subtitle";
    subtitle.innerHTML = `Temporadas: ${serie.number_of_seasons} | Episodios: ${serie.number_of_episodes}`;
    info.appendChild(subtitle);
    // Overview
    let description = document.createElement('p');
    description.className += " plot-description";
    description.innerHTML = serie.overview;
    info.appendChild(description);
    // Score
    let rating = document.createElement('div');
    rating.className += "plot-rating";
    rating.innerHTML = "Rating"
    let score = document.createElement('div');
    score.className += " plot-score";
    score.innerHTML = serie.vote_average;
    rating.appendChild(score);
    info.appendChild(rating);
    return info;
}
const util = {
    setCarouselImages: images => setCarouselImages(images),
    createMovieThumbnail: movie => createMovieThumbnail(movie),
    createDetailImage: movie => createDetailImage(movie),
    createInfoPlot: movie => createInfoPlot(movie),
    createCharacterThumbnail: character => createCharacterThumbnail(character),
    createPersonImage: person => createPersonImage(person),
    createPersonPlot: person => createPersonPlot(person),
    createSerieThumbnail: serie => createSerieThumbnail(serie),
    createSerieInfoPlot: serie => createSerieInfoPlot(serie),
}

export default util;