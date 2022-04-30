import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery');

const makeGallaryItemsMarkup = ({preview, original, description}) => {
            return  `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
}


const makeGalleryItems = galleryItems.map(makeGallaryItemsMarkup).join('');

galleryBoxEl.insertAdjacentHTML('beforeend', makeGalleryItems);

galleryBoxEl.addEventListener('click', onOpenModalImg);

function onOpenModalImg(event) {
    event.preventDefault();
    const urlImgOrig = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${urlImgOrig}">`, {
        onShow: (instance) => {
            document.addEventListener("keydown", event => {
                if (event.code === "Escape") {
                document.querySelector('.basicLightbox').classList.remove('basicLightbox--visible')
                }       
            }) 
            }
        })

    instance.show();    
}