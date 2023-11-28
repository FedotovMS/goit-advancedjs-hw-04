import SimpleLightbox from 'simplelightbox';
import { fetchImages, per_page } from './js/service-api.js';
import renderMarkup from './js/markup.js';
import Messages from './js/iziToast.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let page = 1;
let searchQuery = '';
let totalHits = 0;
let totalPages = 1;

const options = {
  rootMargin: '200px',
  threshold: 0.1,
};

const modal = new SimpleLightbox('.gallery a', {});

function onEntry(items, observer) {
  items.forEach(async item => {
    if (item.isIntersecting) {
      observer.unobserve(item.target);
      await renderGallery();
    }
  });
}

const observer = new IntersectionObserver(onEntry, options);

async function onSubmit(e) {
  e.preventDefault();

  const searchQueryValue = e.target.elements.searchQuery.value.trim();

  if (searchQueryValue === '') {
    return Messages.error('Please enter a search query!');
  }
  if (searchQueryValue === searchQuery) {
    return Messages.warning('Please enter a new search query! Or scroll down');
  }
  await renderGallery();
}

function pageHandler() {
  const newQuery = form.elements.searchQuery.value.trim();

  if (newQuery !== searchQuery) {
    page = 1;
    totalPages = 1;
    searchQuery = newQuery;
    return true;
  }
  page += 1;
  return false;
}

async function renderGallery() {
  const isQuery = pageHandler();

  if (isQuery) {
    gallery.innerHTML = '';
  }

  if (page > totalPages) {
    Messages.warning('No more images');
    return;
  }

  let hits;

  try {
    const data = await fetchImages(searchQuery, page);
    hits = data.hits;
    totalHits = data.totalHits;
    totalPages = Math.ceil(totalHits / per_page);
  } catch (error) {
    Messages.error(error.message);
  }

  if (!hits.length) {
    Messages.error(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  if (isQuery) {
    const massage = `"Hooray! We found ${totalHits} images."`;
    Messages.success(massage);
  }

  gallery.insertAdjacentHTML('beforeend', renderMarkup(hits));
  observer.observe(gallery.lastElementChild);
  modal.refresh();
}

form.addEventListener('submit', onSubmit);

let debounceTimer;

window.addEventListener('scroll', async () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);

    const threshold = 10;

    if (distanceToBottom < threshold) {
      const lastPage = page;
      await renderGallery();

      if (lastPage === page) {
        Messages.warning('No more images');

        window.removeEventListener('scroll');
      }
    }
  }, 200);
});
