import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ListGallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          prevImg={webformatURL}
          largeImg={largeImageURL}
          altImg={tags}
        />
      ))}
    </ListGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
