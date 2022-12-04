import crieateGallery from './crieateGallery';
const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};
let watchedPhoto = [];

export default function crieateWatchedGallery() {
  refs.gallery.innerHTML = '';
  const arrey = JSON.parse(localStorage.getItem('watched'));
  // console.log(arrey);
  try {
    for (const photo of arrey) {
      const value = JSON.parse(photo);
      // console.log(value);
      watchedPhoto.push(value);
      // console.log(watchedPhoto);
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  crieateGallery(watchedPhoto);
  refs.loadMore.classList.add('visually-hidden');
}
