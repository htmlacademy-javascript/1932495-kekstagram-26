import { renderBigPictureComments } from './big-picture-comments.js';

const fullPhotoElement = document.querySelector('.big-picture');
const bigPhotoImageElement = fullPhotoElement.querySelector('img');
const bigPhotoLikesElement = fullPhotoElement.querySelector('.likes-count');
const bigPhotoCommentsElement = fullPhotoElement.querySelector('.comments-count');
const bigPhotoDescriptionElement = fullPhotoElement.querySelector('.social__caption');
const bigPhotoCancelButtonElement = fullPhotoElement.querySelector('.big-picture__cancel');
const bigPhotoCommentCount = fullPhotoElement.querySelector('.social__comment-count');
const bigPhotoCommentLoader = fullPhotoElement.querySelector('.comments-loader');

const commentListElements = document.querySelector('.social__comments');

let cancelButtonClickCallback = null;

const onBigPhotoCloseButtonElement = () => {
  if (typeof cancelButtonClickCallback === 'function') {
    cancelButtonClickCallback();
  }
};

const showBigPicture = (photo) => {
  const { url, likes, description, comments } = photo;

  bigPhotoImageElement.src = url;
  bigPhotoLikesElement.textContent = likes;
  bigPhotoDescriptionElement.textContent = description;
  bigPhotoCommentsElement.textContent = comments.length;

  commentListElements.innerHTML = '';

  renderBigPictureComments(commentListElements, comments);

  fullPhotoElement.classList.remove('hidden');
  bigPhotoCommentCount.classList.add('hidden');
  bigPhotoCommentLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPhotoCancelButtonElement.addEventListener('click', onBigPhotoCloseButtonElement);
};

const hideBigPicture = () => {
  fullPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPhotoCancelButtonElement.removeEventListener('click', onBigPhotoCloseButtonElement);
};

const setBigPictureCancelButtonHandler = (callback) => {
  cancelButtonClickCallback = callback;
};

export {
  showBigPicture,
  hideBigPicture,
  setBigPictureCancelButtonHandler,
};
