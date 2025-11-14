// src/assets/images/index.ts
import bearJpg from './bear.jpg';
import carouselPlaceholder1 from './carousel-placeholder-1.svg';
import carouselPlaceholder2 from './carousel-placeholder-2.svg';

/**
 * A centralized object to export all image assets.
 * This makes it easy to import any image from a single location.
 *
 * How to add a new image:
 * 1. Add the image file to this 'images' directory.
 * 2. Import it here, e.g.: `import myNewImage from './my-new-image.png';`
 * 3. Add it to the 'images' object below, giving it a name, e.g.: `newImage: myNewImage,`
 */
export const images = {
  bear: bearJpg,
  carouselPlaceholder1,
  carouselPlaceholder2,
};
