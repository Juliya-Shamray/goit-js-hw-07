import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

list.addEventListener('click', onClick);

document.addEventListener('keydown', onEscape);

const gallery = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${item.preview}"  data-source="${item.original}" alt="${item.description}"></a></li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', gallery);

let instance;

function onClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );

  instance.show();
}

function onEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
