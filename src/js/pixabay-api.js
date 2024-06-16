"use strict";


export function fetchImg(searchedImg) {
  const BASE_URL = 'https://pixabay.com/api/';
  const END_POINT = '';
  const params = new URLSearchParams({
    key: '44411721-4da839cd813b8d67e233adef2',
    q: searchedImg,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res => res.json()).then(data => {
    const arr = [];
    if (data.hits === arr) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#fafafb',
      });
    }
  }).catch(error => {
    console.log(error);
    
  });
};







