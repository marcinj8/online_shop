const initialState = {
  loading: false,
  error: false,
  errorMessage: "",
  userData: null,
};

const setUserData = (state, userData, loading) => ({
  ...state,
  userData,
  loading: loading || false,
  error: false,
});

const setLoading = (state, loading) => ({
  ...state,
  loading: loading || true,
  error: false,
});

const setError = (state, errorMessage) => ({
  ...state,
  loading: false,
  error: true,
  errorMessage:
    errorMessage || "Something went wrong, please try again later.",
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return setUserData(state, action.userData, action.loading);
    case "SET_LOADING_USER_DATA":
      return setLoading(state, action.loading);
    case "SET_ERROR_USER_DATA":
      return setError(state, action.errorMessage);
    case "LOGOUT_USER":
      return { ...state, userData: null };
    default:
      return state;
  }
};

export default userReducer;
