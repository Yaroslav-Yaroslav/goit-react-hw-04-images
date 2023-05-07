import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <LoadMoreBtn type="button" onClick={onClick}>
    Load more
  </LoadMoreBtn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
