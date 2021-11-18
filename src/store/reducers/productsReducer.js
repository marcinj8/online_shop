const initialState = {
  productsList: null,
  error: false,
  errorMessage: "",
  loading: false,
};

const setProducts = (state, productsList) => {
  return {
    ...state,
    productsList,
    loading: false,
    error: false,
  };
};

const setLoading = (state, loading, error, errorMessage) => {
  const errMsg = error ? "Something went wrong, please try againg later." : "";

  return {
    ...state,
    loading,
    error: error || false,
    errorMessage: errorMessage || errMsg,
  };
};

const setError = (state, errorMessage) => {
  console.log(errorMessage);
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage:
      errorMessage || "Something went wrong, please try againg later.",
  };
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return setProducts(state, action.productsList);
    case "SET_LOADING_PRODUCTS":
      return setLoading(
        state,
        action.loading,
        action.error,
        action.errorMessage
      );
    case "SET_ERROR_PRODUCTS":
      return setError(state, action.errorMessage);
    default:
      return state;
  }
};

export default productsReducer;
