import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery')


const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`

   
})
.join("")



galleryListEl.innerHTML = galleryItemsMarkup

const simpleLightBox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: 250 });


 




  