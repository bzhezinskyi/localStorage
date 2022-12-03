const refs = {
  photoCard: document.querySelector('.photo-catd'),
  gallery: document.querySelector('.gallery'),
};
let watchedPhoto = '';

export default function selectPhotoCard() {
  refs.gallery.addEventListener('click', selectCard);
}

function selectCard(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.dir(event.target.parentElement);
  watchedPhoto += event.target.parentElement.outerHTML;
  localStorage.setItem('watched', watchedPhoto);
}
