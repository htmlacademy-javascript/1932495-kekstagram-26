import { createPhotos } from './create-photos.js';
import { addPhotos, removePhotos, setUploadButtonClickHandler } from './gallery.js';
import {showBigPhoto, hideBigPicture} from './big-picture.js';

const somePhotos = createPhotos(25);

setUploadButtonClickHandler(() => {
  // console.log('click UploadButton');

  removePhotos();
});

addPhotos(somePhotos);
showBigPhoto();
hideBigPicture(); //чтобы линтер не ругался
