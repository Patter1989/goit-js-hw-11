import{S as l}from"./assets/vendor-10cb7c31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function n(o){const s="https://pixabay.com/api/",r="",i=new URLSearchParams({key:"44411721-4da839cd813b8d67e233adef2",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${r}?${i}`;return fetch(e).then(t=>t.json()).then(t=>{const a=[];t.hits===a&&iziToast.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb"})}).catch(t=>{console.log(t)})}function c(o){return`<li class="gallery-item">
    <a class="gallery-link" href="${o.largeImageURL}">
      <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
    </a>
    <ul class="info-list">
        <li class="info-item">
          <h4 class="info-item-header">Likes</h4>
          <p class="info-item-value">${o.likes}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Views</h4>
          <p class="info-item-value">${o.views}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Comments</h4>
          <p class="info-item-value">${o.comments}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Downloads</h4>
          <p class="info-item-value">${o.downloads}</p>
        </li>
      </ul>
    </li>`}function f(o){return o.map(c).join("")}const m=document.querySelector(".feedback-form"),u=document.querySelector(".gallery");m.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.searchImg.value;console.log(s),n(s).then(r=>{console.log(r.hits);const i=f(r.hits);u.innerHTML=i}).catch(r=>{})});new l(".gallery",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
