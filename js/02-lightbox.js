import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryBoxEl = document.querySelector('.gallery');

const createGallaryMarkup = createGalleryItem(galleryItems);

function createGalleryItem (item) {
  return item.map(({original, preview, description}) => {
    return  `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
  }).join('')
}

galleryBoxEl.insertAdjacentHTML('beforeend', createGallaryMarkup);

galleryBoxEl.addEventListener('click', onOpenModalImg);

function onOpenModalImg(event) {
    event.preventDefault();
        
    let gallery = new SimpleLightbox('.gallery .gallery__item', {
        
        captionDelay: 250,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        
    });
}

