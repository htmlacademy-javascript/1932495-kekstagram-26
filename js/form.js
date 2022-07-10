import { isEscapeEvent } from './util.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const buttonCloseFormElement = uploadFormElement.querySelector('#upload-cancel');
const commentFieldElement = uploadFormElement.querySelector('.text__description');
const hashtagsFieldElement = uploadFormElement.querySelector('.text__hashtags');


//Нажатие на ESC
const onEscapeKeydownClick = (evt) => {

  if (isEscapeEvent(evt)) {
    imgUploadOverlayElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    uploadFormElement.reset();
    document.removeEventListener('keydown', onEscapeKeydownClick);
  }
};

const onEscapeKeydownFormFocusClick = (evt) => {

  if (isEscapeEvent(evt)) {
    evt.stopPropagation();
  }
};

// Изменения значения поля #upload-file
uploadFileElement.addEventListener('change', () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydownClick);
});

//Функция закрытия окна загрузки
const closeUploudFileElement = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydownClick);

};

//Закрытие по кнопке
buttonCloseFormElement.addEventListener('click', () => {
  closeUploudFileElement();
});

//Обработчики по полям хэштег и описание
commentFieldElement.addEventListener('keydown', onEscapeKeydownFormFocusClick);
hashtagsFieldElement.addEventListener('keydown', onEscapeKeydownFormFocusClick);

export {uploadFormElement};
