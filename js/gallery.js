import { createThumbnail } from './create-thumbnail.js';
import { removeElement, isEscapeEvent } from './util.js';
import {showBigPicture, hideBigPicture, setBigPictureCancelButtonHandler} from './big-picture.js';

const thumbnailContainerElement = document.querySelector('.pictures');

const onEscapeKeydown = (evt) => {
  evt.preventDefault();

  if (isEscapeEvent(evt)) {
    hideBigPicture();
    document.removeEventListener('keydown', onEscapeKeydown);
  }
};

const renderPhoto = (photo) => {
  const thumbnailElement = createThumbnail(photo);

  thumbnailElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    showBigPicture(photo);
    setBigPictureCancelButtonHandler(() => {
      hideBigPicture();
      document.removeEventListener('keydown', onEscapeKeydown);
    });

    document.addEventListener('keydown', onEscapeKeydown);
  });

  return thumbnailElement;
};

const addPhotos = (photos) => {
  thumbnailContainerElement.append(...photos.map(renderPhoto));
};

const removePhotos = () => {
  thumbnailContainerElement.querySelectorAll('.picture').forEach(removeElement);
};

export {
  addPhotos,
  removePhotos,
};
