export const setLoading = (actionType, boolean) => {
  return {
    type: actionType,
    loading: boolean,
  };
};

export const errorHandler = (actionType, err) => {
  console.log(err, err.Error);
  return {
    type: actionType,
    errorMessage:
      err.message || "Something went wrong, please try again later.",
  };
};
