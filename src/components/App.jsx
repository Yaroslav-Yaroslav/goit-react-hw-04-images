import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from 'services/api';
import { Layout } from './Layout/Layout';
import { Modal } from './Modal/Modal';

const ERROR_MSG = "We couldn't get the data, try again 😇";

export class App extends Component {
  state = {
    query: null,
    page: 1,
    isLoading: false,
    images: [],
    error: null,
    total: null,
    showModal: false,
  };
  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const fetchedImages = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
          total: fetchedImages.totalHits,
        }));
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onClickBtn = () => this.setState(prevState => ({ page: prevState.page + 1 }));
  handleFormSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      error: null,
      total: null,
    });
  };
  closeModal = () =>
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  openModal = (largeImg, altImg) =>
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImg,
      altImg,
    }));
  render() {
    const {
      isLoading,
      images,
      error,
      total,
      page,
      showModal,
      largeImg,
      altImg,
    } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {total / 12 > page && <Button onClick={this.onClickBtn} />}
        {total === 0 && <p>There are no images for this request😇</p>}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt={altImg} />
            <p>Hello</p>
          </Modal>
        )}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
