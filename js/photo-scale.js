const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;

const ScaleButtonMinElement = document.querySelector('.scale__control--smaller');
const ScaleButtonMaxElement = document.querySelector('.scale__control--bigger');
const ScaleValueElement = document.querySelector('.scale__control--value');
const ImageOverlayElement = document.querySelector('.img-upload__overlay');
const imagePreviewElement = ImageOverlayElement.querySelector('.img-upload__preview');
const image = imagePreviewElement.querySelector('img');


ScaleValueElement.value = `${DEFAULT_SCALE_VALUE}%`;

const getTransformValue = () => parseInt(ScaleValueElement.value, 10);

const getScaleImageTransform = () => {
  image.style.transform = `scale(${(parseInt(ScaleValueElement.value, 10) / 100)})`;
};


const getLowerValueScale = () => {
  let resultValue = getTransformValue() - SCALE_STEP;
  if (resultValue < MIN_SCALE_VALUE) {
    resultValue = MIN_SCALE_VALUE;
  } else {
    ScaleValueElement.value = `${resultValue}%`;
  }
};


const getHigherValueScale = () => {
  let resultValue = getTransformValue() + SCALE_STEP;
  if (resultValue > MAX_SCALE_VALUE) {
    resultValue = MAX_SCALE_VALUE;
  }
  ScaleValueElement.value = `${resultValue}%`;
};

const onMinButtonClick = () => {
  getLowerValueScale();
  getScaleImageTransform();
};


const onMaxButtonClick = () => {
  getHigherValueScale();
  getScaleImageTransform();
};


ScaleButtonMinElement.addEventListener('click', onMinButtonClick);
ScaleButtonMaxElement.addEventListener('click', onMaxButtonClick);
