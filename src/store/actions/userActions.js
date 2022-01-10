import axios from 'axios';

import { errorHandler, setLoading } from './commonActions';

let logoutTimmer;

const setUserData = (response) => {
  const { email, id, token, tokenExpiration } = response.data;

  const tokenExpirationDate =
    tokenExpiration || new Date(new Date().getTime() + 1000 * 60 * 60);
  const currentDate = new Date().getTime();
  const remainingTime = new Date(tokenExpirationDate).getTime() - currentDate;
  logoutTimmer = setTimeout(logoutUser, remainingTime);

  localStorage.setItem(
    'userData',
    JSON.stringify({
      token,
      email,
      tokenExpiration: tokenExpirationDate.toISOString(),
      id,
    })
  );

  return {
    type: 'SET_USER_DATA',
    userData: {
      email,
      id,
      token,
      tokenExpiration,
    },
  };
};

export const getUserData = (id, email, token, tokenExpiration) => {
  const userData = {
    id,
    email,
    token,
    tokenExpiration,
  };

  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_DATA',
      userData,
      loading: true,
    });

    let response;
    try {
      // zmienić na get i dodać id w linku
      response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/get-user`,
        { userData: JSON.stringify(userData) }
      );
    } catch (err) {
      return dispatch(errorHandler('SET_ERROR_USER_DATA', err));
    }
    dispatch(setUserData(response));
  };
};

export const isUserLoogedIn = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData) {
    clearTimeout(logoutTimmer);
    return {
      type: 'LOGOUT_USER',
    };
  }

  const { token, tokenExpiration, id, email } = userData;
  const currentDate = new Date().getTime();

  if (token && currentDate < new Date(tokenExpiration)) {
    return getUserData(id, email, token, tokenExpiration);
  }

  return {
    type: 'LOGOUT_USER',
  };
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
    dispatch(setUserData(response));
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
    dispatch(setUserData(response));
  };
};

export const logoutUser = () => {
  localStorage.removeItem('userData');

  return {
    type: 'LOGOUT_USER',
  };
};
