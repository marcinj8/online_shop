import React from 'react';

import { Button } from '../../shared/components/button';
import { Input } from '../../shared/components/input';

import * as validators from '../../shared/components/input/validators';

import { StyledFormAuth, StyledLoginQuestionAuth } from '../style/auth.scss';
import { onAuth } from '../data';

const AuthForm = ({ changeHandler, dispatch, switchAuthMode, formState, isLoginMode }) => {
  return (
    <React.Fragment>
      <StyledFormAuth
        onSubmit={(e) => onAuth(e, formState, isLoginMode, dispatch)}
      >
        {!isLoginMode && (
          <Input
            type='text'
            placeholder='name'
            name='userName'
            onInput={changeHandler}
            validators={[validators.VALIDATOR_REQUIRE()]}
          />
        )}
        <Input
          type='text'
          placeholder='email'
          name='email'
          onInput={changeHandler}
          validators={[
            validators.VALIDATOR_REQUIRE(),
            validators.VALIDATOR_EMAIL(),
          ]}
        />
        <Input
          type='password'
          placeholder='password'
          name='password'
          onInput={changeHandler}
          validators={[
            validators.VALIDATOR_MINLENGTH(6),
            validators.VALIDATOR_REQUIRE(),
          ]}
        />
        <Button
          disabled={!formState.isFormValid}
          type='submit'
          styled={{ fontSize: '1.2rem' }}
          template={isLoginMode ? 'login' : 'sign up'}
          buttonType='inline'
          showEnableAnimation
        />
      </StyledFormAuth>
      <StyledLoginQuestionAuth>
        {isLoginMode ? "You don't have account..." : 'You have acount...'}
      </StyledLoginQuestionAuth>
      <Button
        type='button'
        template={`switch to ${!isLoginMode ? 'login' : 'sign up'}`}
        buttonType='primary'
        clicked={switchAuthMode}
      />
    </React.Fragment>
  );
};

export default AuthForm;
