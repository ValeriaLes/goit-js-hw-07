import { galleryItems } from './gallery-items.js';
// Change code below this line





const galleryListEl = document.querySelector('.gallery')


const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`
   
})
.join("")





galleryListEl.innerHTML = galleryItemsMarkup



galleryListEl.addEventListener('click', onPictureZoomClick )


function onPictureZoomClick (event) {
  event.preventDefault()

  if (event.target.nodeName !== 'IMG'){
        return
    }
    

createBasicLightbox(event.target.dataset.source)


}



function createBasicLightbox (zoomImageSourceEl) {
    const modal = basicLightbox.create(`
    <div class="modal">
    <img src="${zoomImageSourceEl}" width="800" height="600"
    </div>
`)
modal.show()

const modalClose = (event) => {
  if(event.key === "Escape") {
    modal.close()
    document.removeEventListener("keydown", modalClose)
  } 
}

document.addEventListener("keydown", modalClose)

}



 
  

  
