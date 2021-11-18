import Axios from "axios";

import { setLoading, errorHandler } from "./commonActions";

export const fetchItems = async (dispatch) => {
  let response;
  dispatch(setLoading("SET_LOADING_PRODUCTS", true));
  try {
    response = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/get`
    );
  } catch (err) {
    return dispatch(errorHandler('SET_ERROR_PRODUCTS', err));
  }
  dispatch({
    type: "GET_PRODUCTS",
    productsList: response.data.products,
    response,
  });
};
