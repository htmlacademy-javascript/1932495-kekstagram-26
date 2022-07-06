const checkTextLength = (text, maxLength) => text.length <= maxLength;

const removeElement = (element) => {
  element.remove();
};

const isEscapeEvent = (evt) => evt.code === 'Escape';

export {
  checkTextLength,
  removeElement,
  isEscapeEvent,
};
