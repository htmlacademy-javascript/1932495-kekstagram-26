import { renderBigPictureComments } from './big-picture-comments.js';

const fullPhotoElement = document.querySelector('.big-picture');
const bigPhotoImageElement = fullPhotoElement.querySelector('img');
const bigPhotoLikesElement = fullPhotoElement.querySelector('.likes-count');
const bigPhotoCommentsElement = fullPhotoElement.querySelector('.comments-count');
const bigPhotoDescriptionElement = fullPhotoElement.querySelector('.social__caption');
const bigPhotoCancelButtonElement = fullPhotoElement.querySelector('.big-picture__cancel');
const bigPhotoCommentCountElement = fullPhotoElement.querySelector('.social__comment-count');
const bigPhotoCommentLoaderElement = fullPhotoElement.querySelector('.comments-loader');

const commentListElements = document.querySelector('.social__comments');

let cancelButtonClickCallback = null;

const onBigPhotoCancelButtonElement = () => {
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
  bigPhotoCommentCountElement.classList.add('hidden');
  bigPhotoCommentLoaderElement.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPhotoCancelButtonElement.addEventListener('click', onBigPhotoCancelButtonElement);
};

const hideBigPicture = () => {
  fullPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPhotoCancelButtonElement.removeEventListener('click', onBigPhotoCancelButtonElement);
};

const setBigPictureCancelButtonHandler = (callback) => {
  cancelButtonClickCallback = callback;
};

export {
  showBigPicture,
  hideBigPicture,
  setBigPictureCancelButtonHandler,
};
