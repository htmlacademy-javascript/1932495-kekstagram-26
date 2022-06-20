const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) => items[getRandomPositiveInteger(0, items.length - 1)];

const getRandomInteger = (min,max) => {
  if (min < 0 || max < 0)  {
    throw new Error ('Введите число больше нуля!');
  }
  if (max <= min) {
    throw new Error ('Значение "до" должно быть больше значения "от"!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkTextLength = (text, maxLength) => text.length <= maxLength;

const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

export {getRandomPositiveInteger, getRandomArrayElement, shuffleArray};
