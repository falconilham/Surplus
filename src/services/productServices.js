import api from './api';

const getAllProducts = async (skip, query) => {
  const response = await api.get('/products', {
    params: {
      limit: 10,
      skip,
      q: query,
    },
  });
  console.log({query, response});
  return response;
};

const getSearchProducts = async query => {
  const response = await api.get('/products/search', {
    params: {
      q: query,
    },
  });
  console.log({query, response});
  return response;
};

export {getAllProducts, getSearchProducts};
