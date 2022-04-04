import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AsyncView from '../../shared/asyncView/asyncView';
import AuthForm from '../components/authForm';

import { useForm } from '../../shared/hooks/form-hook';
import { switchAuthMode } from '../data/authData';

import { StyledAuth } from '../style/auth.scss';

const Auth = () => {
  const { formState, changeHandler, setFormData } = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [isLoginMode, setIsLoginMode] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (userState.userData) {
      history.push('/');
    }
  });

  return (
    <React.Fragment>
      <AsyncView
        isLoading={userState.loading}
        isError={userState.error}
        errorMessage={userState.errorMessage}
      />
      <StyledAuth>
        <header>
          <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
        </header>
        <AuthForm
          changeHandler={changeHandler}
          dispatch={dispatch}
          switchAuthMode={() =>
            switchAuthMode(isLoginMode, formState, setFormData, setIsLoginMode)
          }
          formState={formState}
          isLoginMode={isLoginMode}
        />
      </StyledAuth>
    </React.Fragment>
  );
};

export default Auth;
