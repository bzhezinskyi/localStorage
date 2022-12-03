const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

let gallery = '';

export default function crieateWatchedGallery() {
  gallery = localStorage.getItem('watched');
  console.log(gallery);
  refs.gallery.innerHTML = gallery;
  refs.loadMore.classList.add('visually-hidden');
}
