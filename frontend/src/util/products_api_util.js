import axios from 'axios';

export const fetchProducts = () => {
  return axios.get('/api/products');
};

export const fetchProduct = (id) => {
  return axios.get(`/api/products/${id}`);
};

