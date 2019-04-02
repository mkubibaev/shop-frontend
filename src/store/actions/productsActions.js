import axios from '../../axios-api';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const createProductSuccess = () => ({type: CREATE_PRODUCT_SUCCESS});

export const fetchProducts = () => {
  return dispatch => {
    return axios.get('/products').then(
      response => dispatch(fetchProductsSuccess(response.data))
    );
  };
};

export const createProduct = productData => {
  return dispatch => {
    return axios.post('/products', productData).then(
      () => dispatch(createProductSuccess())
    );
  };
};
