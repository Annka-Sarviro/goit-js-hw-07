import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryBoxEl = document.querySelector('.gallery');

galleryItems.forEach(element => {

     galleryBoxEl.insertAdjacentHTML('beforeend', 
    `<a class="gallery__item" href="${element.original}">
    <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
  </a>`)
    
});

galleryBoxEl.addEventListener('click', onOpenModalImg);

function onOpenModalImg(event) {
    event.preventDefault();
        
    let gallery = new SimpleLightbox('.gallery a', {
        
        captionDelay: 250,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        
    });
}

