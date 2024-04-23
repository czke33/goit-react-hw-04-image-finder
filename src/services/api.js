import axios from 'axios';

const APIKEY = '42331672-d9ea2d4dc1757414dcb4ae667';

export const fetchImageWithQuery = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${APIKEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );

  return { images: response.data.hits, total: response.data.totalHits };
};

const api = { fetchImageWithQuery };

export default api;
