import fetchPhotoOnId from './fetchPhotoOnId';

const refs = {
  photoCard: document.querySelector('.photo-catd'),
  gallery: document.querySelector('.gallery'),
};
let watchedPhoto = [];

export default function selectPhotoCard() {
  refs.gallery.addEventListener('click', selectCard);
}

function selectCard(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  fetchPhotoOnId(event.target.previousElementSibling.textContent).then(
    arrey => {
      // console.log(arrey.data.hits[0])
      watchedPhoto.push(
        JSON.stringify(arrey.data.hits[0])
        // `{${arrey.data.hits[0].id}:${JSON.stringify(arrey.data.hits[0])}}`
      );
      // console.dir(watchedPhoto);

      // for (const photo of watchedPhoto) {
      //   const value = JSON.parse(photo);
      // }
      localStorage.setItem('watched', JSON.stringify(watchedPhoto));
    }
  );
}
