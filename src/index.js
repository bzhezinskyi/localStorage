import crieateNewGallery from './js/crieateNewGallery';
import crieateNextGallery from './js/crieateNextGallery';
import selectPhotoCard from './js/localStorage';
import crieateWatchedGallery from './js/crieateWatched';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  loadMore: document.querySelector('.load-more'),
  photoCard: document.querySelector('.photo-catd'),
  gallery: document.querySelector('.gallery'),
  btn: document.querySelector('#watched'),
};

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', newHandleSubmit);
refs.btn.addEventListener('click', crieateWatchedGallery);

function handleSubmit(event) {
  event.preventDefault();
  crieateNewGallery(refs.input.value);
}

function newHandleSubmit(event) {
  event.preventDefault();
  crieateNextGallery(refs.input.value);
}
selectPhotoCard();
