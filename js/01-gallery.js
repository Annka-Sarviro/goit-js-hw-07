import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery');

galleryItems.forEach(element => {

    // ПОМЕНЯТЬ href!!!!!!!!!!!!!!!
    galleryBoxEl.insertAdjacentHTML('afterbegin', 
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
        </a>
    </div>`)
    
});

galleryBoxEl.addEventListener('click', onOpenModalImg);

function onOpenModalImg(event) {
    event.preventDefault();
    const urlImgOrig = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${urlImgOrig}">
	`).show()


    document.addEventListener("keydown", event => {
        if (event.code === "Escape") {
           document.querySelector('.basicLightbox').classList.remove('basicLightbox--visible')
        }       
    }) 
    
}