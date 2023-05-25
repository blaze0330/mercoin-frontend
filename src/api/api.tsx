import axios from 'axios';

const SERVER_URL = `http://localhost:8000`;

export const getCategoriesList = () => {
  return axios.get(`${SERVER_URL}/categories`);
};

export const getShopsList = () => {
  return axios.get(`${SERVER_URL}/items`);
};

export const getShop = (id?: number) => {
  return axios.get(`${SERVER_URL}/items/${id}`);
};
