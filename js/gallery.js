import { createThumbnail } from './create-thumbnail.js';
import { removeElement } from './util.js';
import {showBigPhoto, hideBigPicture} from './big-picture.js';

const thumbnailContainerElement = document.querySelector('.pictures');
// const uploadFileInputElement = thumbnailContainerElement.querySelector('#upload-file'); //"загрузить" буду реализовывать в задании №8, сл.раздел

// let uploadButtonClickCallback = null;
// let upButtonClickCallback = null;

const renderPhoto = (photo) => {
  const thumbnailElement = createThumbnail(photo);

  thumbnailElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPhoto(photo);
    // setBigPictureButtonClickHandler(() => { // см. setUploadButtonClickHandler
    //   // console.log('click BigPictureButtonClick')
    hideBigPicture();
    // remove keydown
  });

  // add keydown
  // });

  return thumbnailElement;
};


const addPhotos = (photos) => {
  thumbnailContainerElement.append(...photos.map(renderPhoto));
};

const removePhotos = () => {
  thumbnailContainerElement.querySelectorAll('.picture').forEach(removeElement);};

// const setUploadButtonClickHandler = (callback) => {
//   uploadButtonClickCallback = callback;
// };

// const setBigPictureButtonClickHandler = (callback) => {
//   upButtonClickCallback = callback;

// };

// uploadFileInputElement.addEventListener('click', (evt) => {
//   evt.preventDefault();

//   uploadButtonClickCallback?.();
// })

export {
  addPhotos,
  removePhotos,
  // setUploadButtonClickHandler,
};
