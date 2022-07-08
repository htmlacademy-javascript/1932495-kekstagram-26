import { uploadFormElement } from './form.js';
import { checkTextLength } from './util.js';

const COMMENT_MAX_LENGTH = 140;
const HASHTAG_MAX_LENGTH = 5;
const commentFieldElement = uploadFormElement.querySelector('.text__description'); //вот этого здесь в идеале быть не должно, может вообще надо было в одном модуле все делать, потому что начинают нарушаться принципы
const hashtagsFieldElement = uploadFormElement.querySelector('.text__hashtags');

const messageFormError = {
  HASHTAG_FORMAT: 'Хештег должен начинаться с решетки и состоять из букв и цифр ',
  HASHTAG_LENGTH: `Вы можете указать не больше ${HASHTAG_MAX_LENGTH} хэштегов`,
  HASHTAG_DUPLICATION: 'Хэштег можно использовать только один раз',
  COMMENT_LENGTH: `Длина комментария может быть не более ${COMMENT_MAX_LENGTH} символов`,
};

// Проверяем все хештеги с помощью регулярного выражения
const validateHashtags = (value) => {
  const reValidHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const hashtags = value.toLowerCase().trim().split(' ');
  return hashtags.every((hashTag) => reValidHashtag.test(hashTag));
};

// Проверяем количество хэштегов
const validateCountHashtags = (value) => {
  const hashtags = value.toLowerCase().trim().split(' ');
  return hashtags.length <= HASHTAG_MAX_LENGTH;
};

// Проверяем уникальность хэштегов
const validateUniqueHashtags = (value) => {
  const hashtags = value.toLowerCase().trim().split(' ');
  return hashtags.length === (new Set(hashtags)).size;
};


const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__form', //Элемент, на который будут добавляться классы
  errorTextParent: 'img-upload__field-wrapper' //Класс для элемента с текстом ошибки
});

// Добавляем валидаторы
pristine.addValidator(commentFieldElement, (value) => checkTextLength(value, COMMENT_MAX_LENGTH), messageFormError.COMMENT_LENGTH);//пыталась реализовать отдельно проверку длины, но не вышло, оставляю себе на доработку
pristine.addValidator(hashtagsFieldElement, validateHashtags, messageFormError.HASHTAG_FORMAT);
pristine.addValidator(hashtagsFieldElement, validateUniqueHashtags, messageFormError.HASHTAG_DUPLICATION);
pristine.addValidator(hashtagsFieldElement, validateCountHashtags, messageFormError.HASHTAG_LENGTH);


uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
