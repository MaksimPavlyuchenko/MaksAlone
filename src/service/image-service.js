import axios from 'axios';

const API_KEY = 'qcwqfbj3GnZXOBxwtCay4W1aWNeKQkg4bP7tKG6Sd6sAw5XyB5mRWCi3';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
