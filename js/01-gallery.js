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

const bigPicture = event.target.dataset.source;
const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${bigPicture}" width="800" height="600"
    </div>
`,  { onShow: (instance) => window.addEventListener("keydown", escClose),
      onClose: (instance) => window.removeEventListener('keydown', escClose)})

instance.show()

function escClose (event) {
  if (event.key === "Escape") {
    instance.close()
  }
}

const modal = document.querySelector('.modal')
modal.addEventListener('click', onBigPictureClick)
function onBigPictureClick (event) {
if (event.target.nodeName === 'IMG') {
  instance.close()
}
}

}















 
  

  
