function getRandomNumber (min,max) {
  if (min < 0 || max < 0)  {
    throw new Error ('Введите число больше нуля!');
  }
  if (max <= min) {
    throw new Error ('Звчение "до" должно быть больше значения "от"!');
  }
  return Math.floor(Math.random()*(max-min+1))+min;
}

getRandomNumber(5,20);

function getLengthString (checkString, maxLength) {
  if (checkString.length < maxLength) {
    return true;
  }
  return false;
}

getLengthString('7',89);
