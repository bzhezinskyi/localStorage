import fetchPhotoOnId from './fetchPhotoOnId';

const refs = {
  photoCard: document.querySelector('.photo-catd'),
  gallery: document.querySelector('.gallery'),
  photoCard__btn: document.querySelector('.photo-card__btn'),
};
let watchedPhoto;
function crieateWatchedPhoto() {
  if (localStorage.getItem('watched')) {
    return (watchedPhoto = JSON.parse(localStorage.getItem('watched')));
  } else {
    watchedPhoto = [];
  }
}
crieateWatchedPhoto();
export default function selectPhotoCard() {
  refs.gallery.addEventListener('click', selectCard);
}

function selectCard(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  function redoBtn() {
    event.target.textContent = 'Видалити';
  }
  fetchPhotoOnId(
    event.target.previousElementSibling.previousElementSibling.textContent
  ).then(arrey => {
    // console.log(arrey.data.hits[0])
    if (watchedPhoto.includes(JSON.stringify(arrey.data.hits[0]))) {
      const deleted = arrey.data.hits[0];
      let newWatchedPhoto = [];

      function removeWatchedPhoto(watched) {
        for (const iterator of watched) {
          // console.log(JSON.parse(iterator).id);
          // console.log('deleted', deleted.id);
          if (JSON.parse(iterator).id === deleted.id) {
            // console.log(JSON.parse(iterator).id === deleted.id);
          } else {
            // console.log(JSON.parse(iterator).id === deleted.id);
            newWatchedPhoto.push(iterator);
          }
        }
        console.log(newWatchedPhoto);
        // try {
        //   const namber = watchedPhoto.indexOf(
        //     JSON.stringify(arrey.data.hits[0])
        //   );
        //   const deletedWatchedPhoto = watchedPhoto.JSON.parse(watchedPhoto);
        //   console.log(watchedPhoto);
        // } catch (error) {
        //   console.dir(error);
        // }
      }
      removeWatchedPhoto(watchedPhoto);
      watchedPhoto = newWatchedPhoto;
      event.target.textContent = 'Додати';
    } else {
      watchedPhoto.push(JSON.stringify(arrey.data.hits[0]));
      redoBtn();
    }
    // console.dir(watchedPhoto);

    // for (const photo of watchedPhoto) {
    //   const value = JSON.parse(photo);
    // }
    localStorage.setItem('watched', JSON.stringify(watchedPhoto));
  });
}
