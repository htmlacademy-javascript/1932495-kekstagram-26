const commentTemplateElement = document.querySelector('#big-picture-comment').content.querySelector('.social__comment');

const renderBigPictureComments = (containerElement, comments) => {

  const commentElements = comments.map((comment) => {
    const commentElement = commentTemplateElement.cloneNode(true);
    const commentAvatarElement = commentElement.querySelector('.social__picture');
    const commentMessageElement = commentElement.querySelector('.social__text');

    commentAvatarElement.src = comment.avatar;
    commentMessageElement.alt = comment.name;
    commentMessageElement.textContent = comment.message;

    return commentElement;
  });

  containerElement.append(...commentElements);
};

export { renderBigPictureComments };
