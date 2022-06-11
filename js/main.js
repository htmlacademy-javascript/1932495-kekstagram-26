function isRandomInteger (min,max) {
  if (min < 0 || max < 0)  {
    throw new Error ('Введите число больше нуля!');
  }
  if (max <= min) {
    throw new Error ('Значение "до" должно быть больше значения "от"!');
  }
  return Math.floor(Math.random()*(max-min+1))+min;
}

isRandomInteger(5,20);

function checkLengthText(string, length) {
  return string.length <= length;
}

checkLengthText('7',89);

const isLengthText = (string, length) => string.length <= length; //увидела в критериях, что это идеальный вариант, правильно?

isLengthText('7',89);
