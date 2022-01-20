import Axios from 'axios';
import { UserCart } from '../../shared/models/userCartModel';

import { setLoading, errorHandler } from './commonActions';

const updateBasket = (cartUpdated) => {
  const userCartData = JSON.parse(cartUpdated);
  const userCart = new UserCart(
    userCartData.userId,
    userCartData._id,
    userCartData.products,
    userCartData.totalCost,
    userCartData.addressOfDelivery
  );

  return {
    type: 'UPDATE_CART',
    userCart,
  };
};

const updateProducts = (productsUpdated) => {
  const products = JSON.parse(productsUpdated);
  return {
    type: 'UPDATE_PRODUCTS',
    products,
  };
};

export const getUserCart = (token) => {
  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_CART', true));
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart/get-cart`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => dispatch(updateBasket(res.data.userCart)))
      .catch((err) => dispatch(errorHandler('SET_ERROR_CART', err)));
  };
};

export const addItemToCart = (itemData, token) => {
  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_CART', true));
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart/add-item`,
      {
        newItem: JSON.stringify(itemData),
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )
      .then((res) => {
        dispatch(updateBasket(res.data.userCart));
      })
      .catch((err) => {
        dispatch(errorHandler('SET_ERROR_CART', err));
      });
  };
};

export const updateProductsInCart = (products, token) => {
  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_CART', true));
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart/update-products`,
      { products: JSON.stringify(products) },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )
      .then((res) => {
        console.log(res.data);
        dispatch(updateProducts(res.data.products));
      })
      .catch((err) => {
        dispatch(errorHandler('SET_ERROR_CART', err));
      });
  };
};

export const updateAddressOfDelivery = (addressData, userData) => {
  // token expiration? undefined
  let addressOfDelivery = {};
  for (let property in addressData) {
    console.log(property, addressData[property].value);
    addressOfDelivery[property] = addressData[property].value;
  }

  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_CART', true));
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart/update-address`,
      {
        addressOfDelivery: JSON.stringify(addressOfDelivery),
      },
      { headers: { Authorization: 'Bearer ' + userData.token } }
    )
      .then((res) => {
        console.log(res);
        dispatch(setLoading('SET_LOADING_CART', false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorHandler('SET_ERROR_CART', err));
      });
  };
};

export const toggleCartVisibility = (isCartVisible) => {
  return {
    type: 'SET_VISIBILITY_CART',
    showCart: isCartVisible,
  };
};
