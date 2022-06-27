import {somePhotos} from './create-photos.js';

//Находим шаблон изображения случайного пользователя
const templatePicture = document.querySelector('#picture').content;

//Находим контейнер для изображений
const similarPicture = document.querySelector('.pictures');

const similarListFragment = document.createDocumentFragment();

const TEST = somePhotos();

TEST.forEach((picture) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length; //не определяется длина, и даже если её отключить - миниатюры не отображаются корректно
  similarListFragment.appendChild(pictureElement);
});

similarPicture.appendChild(similarListFragment);
