import { useState } from 'react';
import {
  ItemGallery,
  ImageGallery,
  ImageModal,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ prevImg, largeImg, altImg }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  return (
    <>
      <ItemGallery>
        <ImageGallery
          src={prevImg}
          alt={altImg}
          loading="lazy"
          onClick={toggleModal}
        />
      </ItemGallery>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ImageModal src={largeImg} alt={altImg} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  prevImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};
