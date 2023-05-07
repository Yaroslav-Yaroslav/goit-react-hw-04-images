import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
  <ListGallery>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        prevImg={webformatURL}
        largeImg={largeImageURL}
        altImg={tags}
        openModal={openModal}
      />
    ))}
  </ListGallery>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
