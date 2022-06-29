import {somePhotos} from './create-photos.js';
import {pictureTemplateElement, similarElement} from './gallery.js';

somePhotos.forEach((picture) => {
  const pictureElement = pictureTemplateElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarElement.appendChild(pictureElement);
});
