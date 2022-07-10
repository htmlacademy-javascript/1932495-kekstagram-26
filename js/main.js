import { addPhotos } from './gallery.js';

import { createPhotos } from './create-photos.js';

import './form.js';

import './validation.js';

const somePhotos = createPhotos(25);

addPhotos(somePhotos);
