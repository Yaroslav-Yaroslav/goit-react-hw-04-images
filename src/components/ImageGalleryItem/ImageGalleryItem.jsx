import { ItemGallery, ImageGallery } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types'
export const ImageGalleryItem = ({ prevImg, largeImg, altImg, openModal }) => (
  <ItemGallery>
    <ImageGallery
      src={prevImg}
      alt={altImg}
      loading="lazy"
      onClick={() => openModal(largeImg, altImg)}
    />
  </ItemGallery>
);

ImageGalleryItem.propTypes = {
  prevImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};