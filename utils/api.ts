import axios from 'axios';

const baseURL = 'http://demo3312714.mockable.io';

const domains = {
  product: '/product',
  cart: '/cart',
};

export const productApi = axios.create({
  baseURL: baseURL + domains.product,
  timeout: 3000,
});

export const cartApi = axios.create({
  baseURL: baseURL + domains.cart,
  timeout: 3000,
});
