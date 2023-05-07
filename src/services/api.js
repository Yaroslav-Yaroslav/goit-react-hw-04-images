import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34607447-71623db8ef3f0e92797c3b5fc';

export const fetchImages = async (query, page) => {
  const url = `?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url, { params: { q: query, page: page } });
  return response.data;
};
