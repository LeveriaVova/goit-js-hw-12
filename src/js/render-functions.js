
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");


const galleryBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
    const markup = markUpGallery(images);
    gallery.insertAdjacentHTML("beforeend", markup);
    galleryBox.refresh()
};

function markUpGallery(arr) {
    return arr.map((item) => { 
        return `<li class="gallery-item">
            <a class="gallery-link" href="${item.largeImageURL}">
                <img class="gallery-img"
                src="${item.webformatURL}"
                alt="${item.tags}">
            </a>
            <ul class="list-ue">
                <li class="item-ue">
                <h2 class="item-title">likes</h2>
                <p class="item-value">${item.likes}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">views</h2>
                <p class="item-value">${item.views}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">comments</h2>
                <p class="item-value">${item.comments}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">downloads</h2>
                <p class="item-value">${item.downloads}</p>
                </li>
            </ul>
        </li>`
        
    }).join("")
    
}


function clearGallery() {
  gallery.innerHTML = "";
}

function showLoader() {
  loader.classList.remove("hidden");
}
function hideLoader() {
  loader.classList.add("hidden");
}
function showLoadMoreButton() { 
    loadMoreBtn.classList.remove("hidden");
}

function hideLoadMoreButton() {
    loadMoreBtn.classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton };
