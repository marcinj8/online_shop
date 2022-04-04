import Axios from 'axios';

import { UserCart } from '../../shared/models/userCartModel';

import { setLoading, errorHandler } from './commonActions';

const updateBasket = (cartUpdated) => {
  const userCartData = JSON.parse(cartUpdated);
  console.log(userCartData);
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
        dispatch(updateProducts(res.data.products));
      })
      .catch((err) => {
        dispatch(errorHandler('SET_ERROR_CART', err));
      });
  };
};

const setUpdatedAddressOfDelivery = (address) => {
  return {
    type: 'UPDATE_ADDRESS',
    address,
  };
};

export const updateAddressOfDelivery = (addressData, userData) => {
  let addressOfDelivery = {};
  for (let property in addressData) {
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
        dispatch(setUpdatedAddressOfDelivery(addressOfDelivery));
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

export const onPlaceOrder = (orderData, token) => {
  const { userId, id, products, addressOfDelivery } = orderData;
  console.log(orderData);
  return (dispatch) => {
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart/place-order`,
      {
        orderData: JSON.stringify({
          userId,
          id,
          products,
          addressOfDelivery,
          payment: 'card', // dodać wybór metody płatności
        }),
      },
      { headers: { Authorization: 'Bearer ' + token } }
    )
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'TEST',
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'TEST',
        });
      });
  };
};
