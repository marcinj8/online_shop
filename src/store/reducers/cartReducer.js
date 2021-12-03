const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  showCart: false,
  userCart: null,
};

const updateUserCart = (state, userCart) => {
  return {
    ...state,
    userCart,
    loading: false,
    error: false,
  };
};

const updateUserProducts = (state, products) => {
  return {
    ...state,
    userCart: {
      ...state.userCart,
      products: products,
    },
    loading: false,
    error: false,
  };
};

const setLoading = (state, loading, error, errorMessage) => {
  const errMsg = error ? 'Something went wrong, please try againg later.' : '';

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
      errorMessage || 'Something went wrong, please try againg later.',
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_CART':
      return setLoading(
        state,
        action.loading,
        action.error,
        action.errorMessage
      );
    case 'SET_ERROR_CART':
      return setError(state, action.errorMessage);
    case 'UPDATE_CART':
      return updateUserCart(state, action.userCart);
    case 'UPDATE_PRODUCTS':
      return updateUserProducts(state, action.products);
    case 'SET_VISIBILITY_CART':
      return {
        ...state,
        showCart: action.showCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
