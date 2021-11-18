import Axios from "axios";

import { setLoading, errorHandler } from "./commonActions";

const updateBasket = (cartUpdated) => {
  const userCart = JSON.parse(cartUpdated);
  return {
    type: "UPDATE_CART",
    userCart,
  };
};

export const getUserCart = (token) => {
  return async (dispatch) => {
    dispatch(setLoading("SET_LOADING_CART", true));
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart/get-cart`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => dispatch(updateBasket(res.data.userCart)))
      .catch((err) => dispatch(errorHandler("SET_ERROR_CART", err)));
  };
};

export const addItemToCart = (itemData, token) => {
  return async (dispatch) => {
    dispatch(setLoading("SET_LOADING_CART", true));
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart/add-item`,
      {
        newItem: JSON.stringify(itemData),
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        dispatch(updateBasket(res.data.userCart));
      })
      .catch((err) => {
        dispatch(errorHandler("SET_ERROR_CART", err));
      });
  };
};

export const updateProductsInCart = (products) => {
  return async (dispatch) => {
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/update-products`,{products})
  }
}

export const toggleCartVisibility = (isCartVisible) => {
  return {
    type: "SET_VISIBILITY_CART",
    showCart: isCartVisible,
  };
};
