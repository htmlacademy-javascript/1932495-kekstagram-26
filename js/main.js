import { addPhotos, removePhotos } from './gallery.js';

import { createPhotos } from './create-photos.js';

const somePhotos = createPhotos(25);

addPhotos(somePhotos);

export { removePhotos }; //дли линтера

