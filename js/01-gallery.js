import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')


const galleryItemsMarkup = galleryItems.map(({ preview, description }) => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="">
       <img
         class="gallery__image"
         src="${preview}"
         data-source=""
         alt="${description}"
       />
     </a>
   </li>`
   
})
.join("")


galleryEl.innerHTML = galleryItemsMarkup
// const linkEl = document.querySelector('.gallery-link')

// galleryEl.addEventListener('click', onPictureZoomClick )

//  function onPictureZoomClick (event) {

//     if (!event.target.classList.contains('gallery__link')){
//         return
//     }
// linkEl.href = "galleryItems.original"

// console.log(event.target)

// }


