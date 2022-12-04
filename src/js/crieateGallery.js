const refs = {
  gallery: document.querySelector('.gallery'),
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
let value = [];

function watchedPhotoId(arrey) {
  for (const iterator of arrey) {
    value.push(JSON.parse(iterator).id);
    // console.log(JSON.parse(iterator).id);
  }
  // console.log(value);
  return value;
}
watchedPhotoId(watchedPhoto);

export default function crieateGallery(photos) {
  for (const photo of photos) {
    // console.dir(value);
    // console.log(value.includes(photo.id));

    if (value.includes(photo.id)) {
      refs.gallery.innerHTML += `<div class="photo-card">
    <p class='visually-hidden photo-card__id'>${photo.id}</p>
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <button class='photo-card__btn'>Видалити</button>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${photo.downloads}</b>
    </p>
  </div>
</div>`;
    } else {
      refs.gallery.innerHTML += `<div class="photo-card">
    <p class='visually-hidden photo-card__id'>${photo.id}</p>
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <button class='photo-card__btn'>Додати</button>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${photo.downloads}</b>
    </p>
  </div>
</div>`;
    }
  }
}
