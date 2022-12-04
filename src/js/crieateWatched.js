import crieateGallery from './crieateGallery';
const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

export default function crieateWatchedGallery() {
  refs.gallery.innerHTML = '';
  let arrey = [];
  try {
    arrey = JSON.parse(localStorage.getItem('watched'));
  } catch (error) {}
  let watchedPhoto = [];

  // console.log(arrey);
  try {
    for (const photo of arrey) {
      // const value = JSON.parse(photo);
      // console.log(value);
      watchedPhoto.push(JSON.parse(photo));
      // console.log(watchedPhoto);
    }
  } catch (error) {}

  crieateGallery(watchedPhoto);
  refs.loadMore.classList.add('visually-hidden');
}
