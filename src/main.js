import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import { galleryContainer } from "./js/render-functions";

import { fetchImg } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

export const form = document.querySelector('.feedback-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputData = e.target.elements.searchImg.value;
  console.log(inputData);
  fetchImg(inputData)
    .then(data => {
      console.log(data.hits);
      const markup = imagesTemplate(data.hits);
      gallery.innerHTML = markup;
    })
    .catch(err => {});
});

const lightbox = new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
});

// function imageTemplate(images) {
//   return `<li class="gallery-item">
//     <a class="gallery-link" href="${images.largeImageURL}">
//       <img class="gallery-image" src="${images.webformatURL}" alt="${images.tags}" />
//     </a>
//     <ul class="info-list">
//         <li class="info-item">
//           <h4 class="info-item-header">Likes</h4>
//           <p class="info-item-value">${images.likes}</p>
//         </li>
//         <li class="info-item">
//           <h4 class="info-item-header">Views</h4>
//           <p class="info-item-value">${images.views}</p>
//         </li>
//         <li class="info-item">
//           <h4 class="info-item-header">Comments</h4>
//           <p class="info-item-value">${images.comments}</p>
//         </li>
//         <li class="info-item">
//           <h4 class="info-item-header">Downloads</h4>
//           <p class="info-item-value">${images.downloads}</p>
//         </li>
//       </ul>
//     </li>`;
// };
// export function imagesTemplate(arr) {
//   return arr.map(imageTemplate).join('')
// };
