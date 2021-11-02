import API from './api.js'

function setCarouselInterval(time){
    setInterval(()=>{
        $('.carousel').carousel('next');
    },time)
}

function setCarouselImages(images){
    for(const pos in images){
        // Creating the images
        let container = document.createElement('div');
        container.className += " carousel-item";
        let image = document.createElement('img');
        image.className += " d-block w-100";
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

const util = {
    setCarouselInterval: time => setCarouselInterval(time), 
    setCarouselImages: images => setCarouselImages(images)
}

export default util;