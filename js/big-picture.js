const fullPhotoElement = document.querySelector('.big-picture');
const bigPhotoImageElement = fullPhotoElement.querySelector('img');
const bigPhotoLikesElement = fullPhotoElement.querySelector('.likes-count');
const bigPhotoCommentsElement = fullPhotoElement.querySelector('.comments-count');
const bigPhotoDescriptionElement = fullPhotoElement.querySelector('.social__caption');
const bigPhotoCloseElement = fullPhotoElement.querySelector('.big-picture__cancel');
const bigPhotoCommentCount = fullPhotoElement.querySelector('.social__comment-count');
const bigPhotoCommentLoader = fullPhotoElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

//Берем список комментариев
const commentListElements = document.querySelector('.social__comments');

//Берем li у списка
const commentElement = document.querySelector('.social__comment');

//Создаем контейнер для комментариев
const commentListFragment = document.createDocumentFragment();

const showBigPhoto = (photo) => {

  fullPhotoElement.classList.remove('hidden');
  bigPhotoCommentCount.classList.add('hidden');
  bigPhotoCommentLoader.classList.add('hidden');
  bodyElement.classList.add('modal-open');

  bigPhotoImageElement.src = photo.url;
  bigPhotoLikesElement.textContent = photo.likes;
  bigPhotoCommentsElement.textContent = photo.comments.length;
  bigPhotoDescriptionElement.textContent = photo.description;

  commentListElements.textContent = '';

  photo.comments.forEach((comment) => {

    const copyCommentElement = commentElement.cloneNode(true);

    const commentAvatar = copyCommentElement.querySelector('.social__picture');
    const commentMessage = copyCommentElement.querySelector('.social__text');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMessage.textContent = comment.message;
    commentListFragment.append(copyCommentElement);
  });

  // Размещаем фрагмент с комментариями
  commentListElements.append(commentListFragment);

  document.addEventListener('keydown', onEscapeClick);
};

const hideBigPicture = () => {
  fullPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeClick);
};

bigPhotoCloseElement.addEventListener('click', () => {
  hideBigPicture();
});

function onEscapeClick(e) {
  if (e.code === 'Escape') {
    hideBigPicture();
  }
}

showBigPhoto();
hideBigPicture(); //чтобы линтер не ругался

export {showBigPhoto, hideBigPicture};
