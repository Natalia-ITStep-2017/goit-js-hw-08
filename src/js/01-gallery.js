// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const galleryItemsHtml = galleryItems.map(({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
  </a>
</div>`
).join('');


galleryEl.innerHTML = galleryItemsHtml;

new SimpleLightbox('.gallery a',
  {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    showCounter: false
  });



