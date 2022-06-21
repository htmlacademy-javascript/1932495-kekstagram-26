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

export {checkTextLength, getRandomInteger};
