function getRandomNumber (min,max) {
  if ((min || max < 0) || (max < min)) {
      alert('Ошибка!')
      return;
  }
  else {
  return Math.floor(Math.random()*(max-min+1))+min;
}}

function getLengthString (checkString, maxLength) {
  if (checkString.length < maxLength) {
     return true;
  }
  return false;
}
