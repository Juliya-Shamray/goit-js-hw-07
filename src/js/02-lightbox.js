import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const gallery = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}" ><img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"></a></li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', gallery);

let lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 500,
});
