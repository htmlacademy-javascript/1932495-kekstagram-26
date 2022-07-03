const checkTextLength = (text, maxLength) => text.length <= maxLength;

const removeElement = (element) => {
  element.remove();
};

export {
  checkTextLength,
  removeElement,
};

