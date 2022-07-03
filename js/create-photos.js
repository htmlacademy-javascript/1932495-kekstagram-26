import {getRandomPositiveInteger, getRandomArrayElement, shuffleArray} from './random.js';
import {DESCRIPTIONS, NAMES, MESSAGES} from './data.js';

let commentIdCounter = 1;

const createPhotoComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: shuffleArray(MESSAGES).slice(0, getRandomPositiveInteger(1, 2)).join(' '),
  name: getRandomArrayElement(NAMES),
});


const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: getRandomPositiveInteger(1, 6)}, createPhotoComment)
    });
  }
  return photos;
};


export {createPhotos};
