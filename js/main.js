/* eslint-disable indent */
// const { name } = require("browser-sync"); //я все таки не понимаю, что это такое, как оно появилось в коде?

const getRandomInteger = (min,max) => {
  if (min < 0 || max < 0)  {
    throw new Error ('Введите число больше нуля!');
  }
  if (max <= min) {
    throw new Error ('Значение "до" должно быть больше значения "от"!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(5,20);

const checkTextLength = (text, maxLength) => text.length <= maxLength;

checkTextLength('7',89);

const DESCRIPTIONS = [
  'В лесу',
  'В деревне',
  'На печке',
  'На природе',
  'В гостях',
  'На занятиях драмкружка',
  'На курсах итальянского',
];

const NAMES = [
  'Алиса',
  'Вася',
  'Кнопка',
  'Гудвин',
  'Каспер',
  'Валли',
  'Соня',
  'Ася',
  'Василиса',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) => items[getRandomPositiveInteger(0, items.length - 1)];

let commentIdCounter = 1;

const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

const createPhotoComment = () => ({
      id: commentIdCounter++,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: shuffleArray(MESSAGES).slice(0, getRandomPositiveInteger(1, 2)).join(' '),
      name: getRandomArrayElement(NAMES),
    });


const createPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: 4}, createPhotoComment)
    });
  }
  return photos;
};

const somePhotos = createPhotos(25);
somePhotos();
