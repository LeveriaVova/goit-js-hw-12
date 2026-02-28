


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";

import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector(".btn");


loadMoreBtn.addEventListener("click", handleLoadMore);

form.addEventListener('submit', handleSubmit);

let page = 1;
let currentQuery = "";
let totalHits = 0;

async function handleSubmit(event) {
  event.preventDefault();
        const valueForm = event.target.elements["search-text"];
        const query = valueForm.value.trim();
        if (query.length === 0) {
            return iziToast.show({
                title: 'Hey',
                message: 'Please enter a search query'
            });
        }

  showLoader();
  page = 1;
  currentQuery = query;
  clearGallery();
  hideLoadMoreButton();

  try {
    const response = await getImagesByQuery(query, page);

    if (response.hits.length === 0) {
        iziToast.show({
            title: "Sorry",
            message: "No images found"
        });
      return;
    }

    createGallery(response.hits);
    totalHits = response.totalHits;

    if (page * 15 < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results."
      });
    }

  } catch (error) {
      iziToast.show({
          title: "Error",
          message: "Something went wrong"
      });
  } finally {
    hideLoader();
  }
}


async function handleLoadMore() {
  try {
    page += 1;
    showLoader();
    const response = await getImagesByQuery(currentQuery, page);

    if (response.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results."
      });
      return;
    }
      createGallery(response.hits);
      
    const card = document.querySelector(".gallery-item");
    if (card) {
      const { height } = card.getBoundingClientRect();
      window.scrollBy({
        top: height * 2,
        behavior: "smooth"
      });
    }

    
    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results."
      });
    }

  } catch (error) {
    iziToast.show({
      title: "Error",
      message: "Something went wrong"
    });
  } finally {
    hideLoader();
  }
}
 