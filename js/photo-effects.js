const imagePreviewElement = document.querySelector('.img-upload__preview');
const radioButtonsEffectsElement = document.querySelectorAll('.effects__radio');
const levelValueEffect = document.querySelector('.effect-level__value');
const sliderEffectElement = document.querySelector('.img-upload__effect-level');
const effectLevelSliderElement = document.querySelector('.effect-level__slider');

sliderEffectElement.classList.add('hidden');

const applyClearEffects = () => {
  imagePreviewElement.className = 'img-upload__preview'; // Нужно для того, чтобы фото на запоминало эффект предыдущей загрузки.
  if (effectLevelSliderElement.noUiSlider) {
    effectLevelSliderElement.noUiSlider.destroy();
  }
  imagePreviewElement.style.filter = '';
};

const applyEffectNone = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--none');
  sliderEffectElement.classList.toggle('hidden');
};

// Эффект "Хром".
const applyEffectChrome = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--chrome');
  sliderEffectElement.classList.remove('hidden');
  noUiSlider.create(effectLevelSliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  effectLevelSliderElement.noUiSlider.on('update', () => {
    levelValueEffect.value = effectLevelSliderElement.noUiSlider.get();
    imagePreviewElement.style.filter = `grayscale(${levelValueEffect.value})`;
  });
};

// Эффект Сепия.
const applyEffectSepia = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--sepia');
  sliderEffectElement.classList.remove('hidden');
  noUiSlider.create(effectLevelSliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  effectLevelSliderElement.noUiSlider.on('update', () => {
    levelValueEffect.value = effectLevelSliderElement.noUiSlider.get();
    imagePreviewElement.style.filter = `sepia(${levelValueEffect.value})`;
  });
};

// Эффект Марвин.
const applyEffectMarvin = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--marvin');
  sliderEffectElement.classList.remove('hidden');
  noUiSlider.create(effectLevelSliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return `${value}%`;
      },
      from: function (value) {
        return parseInt(value.replace('%', ''), 10);
      },
    },
  });
  effectLevelSliderElement.noUiSlider.on('update', () => {
    levelValueEffect.value = effectLevelSliderElement.noUiSlider.get().replace('%', '');
    imagePreviewElement.style.filter = `invert(${levelValueEffect.value}%)`;
  });
};

// Эффект Фобос.
const applyEffectPhobos = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--phobos');
  sliderEffectElement.classList.remove('hidden');
  noUiSlider.create(effectLevelSliderElement, {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        return `${value}px`;
      },
      from: function (value) {
        return parseInt(value.replace('px', ''), 10);
      },
    },
  });
  effectLevelSliderElement.noUiSlider.on('update', () => {
    levelValueEffect.value = effectLevelSliderElement.noUiSlider.get().replace('px', '');
    imagePreviewElement.style.filter = `blur(${levelValueEffect.value}px)`;
  });
};

// Эффект Зной.
const applyEffectHeat = () => {
  applyClearEffects();
  imagePreviewElement.classList.add('effects__preview--heat');
  sliderEffectElement.classList.remove('hidden');
  noUiSlider.create(effectLevelSliderElement, {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  effectLevelSliderElement.noUiSlider.on('update', () => {
    levelValueEffect.value = effectLevelSliderElement.noUiSlider.get();
    imagePreviewElement.style.filter = `brightness(${levelValueEffect.value})`;
  });
};

// Цикл по кнопкам эффектов.
radioButtonsEffectsElement .forEach((effectsRadioButton) => {
  effectsRadioButton.addEventListener('change', () => {
    if (effectsRadioButton.checked) {
      const effectId = effectsRadioButton.id;
      switch (effectId) {
        case 'effect-none':
          applyEffectNone();
          break;
        case 'effect-chrome':
          applyEffectChrome();
          break;
        case 'effect-sepia':
          applyEffectSepia();
          break;
        case 'effect-marvin':
          applyEffectMarvin();
          break;
        case 'effect-phobos':
          applyEffectPhobos();
          break;
        case 'effect-heat':
          applyEffectHeat();
          break;
      }
    }
  });
});
