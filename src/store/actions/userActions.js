import axios from 'axios';

import { errorHandler, setLoading } from './commonActions';

export const logoutUser = () => {
  localStorage.removeItem('userData');
  return { type: 'LOGOUT_USER' };
};

const setUserData = (response, tokenExpiration) => {
  console.log(response.data);
  const { email, id, userName, token } = response.data;

  const tokenExpirationDate =
    new Date(tokenExpiration) || new Date(new Date().getTime() + 1000 * 3600);

  const currentDateTime = new Date().getTime();
  const remainingTime =
    new Date(tokenExpirationDate).getTime() - currentDateTime;

  localStorage.setItem(
    'userData',
    JSON.stringify({
      token,
      email,
      tokenExpiration: tokenExpirationDate,
      id,
    })
  );

  return {
    type: 'SET_USER_DATA',
    userData: {
      email,
      id,
      token,
      tokenExpirationDate,
      remainingTime,
      userName,
    },
  };
};

export const getUserData = (id, email, token, tokenExpiration) => {
  const userData = {
    id,
    email,
    token,
  };

  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_DATA',
      userData,
      loading: true,
    });

    let response;
    try {
      response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/get-user`,
        { userData: JSON.stringify(userData) }
      );
    } catch (err) {
      return dispatch(errorHandler('SET_ERROR_USER_DATA', err));
    }
    dispatch(setUserData(response, tokenExpiration));
  };
};

export const isUserLoogedIn = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData) {
    return logoutUser();
  }

  const { token, tokenExpiration, id, email } = userData;
  const currentDate = new Date().getTime();

  if (token && currentDate < new Date(tokenExpiration)) {
    return getUserData(id, email, token, tokenExpiration);
  }

  return logoutUser();
};

export const registerUser = (email, userName, password) => {
  const newUserData = JSON.stringify({
    ...email,
    ...userName,
    ...password,
  });

  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_USER_DATA', true));

    let response;
    try {
      response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        { newUserData }
      );
    } catch (err) {
      return dispatch(errorHandler('SET_ERROR_USER_DATA', err));
    }
    dispatch(setUserData(response, response.data.tokenExpiration));
  };
};

export const signInUser = (email, password) => {
  const newUserData = JSON.stringify({
    ...email,
    ...password,
  });

  return async (dispatch) => {
    dispatch(setLoading('SET_LOADING_USER_DATA', true));

    let response;
    try {
      response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/signin`,
        { newUserData }
      );
    } catch (err) {
      return dispatch(errorHandler('SET_ERROR_USER_DATA', err));
    }
    dispatch(setUserData(response, response.data.tokenExpiration));
  };
};
