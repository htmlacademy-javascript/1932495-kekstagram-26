const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = (photo) => {
  const { url, likes, comments } = photo;

  const thumbnailElement = pictureTemplateElement.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  return thumbnailElement;
};

export {
  createThumbnail
};
