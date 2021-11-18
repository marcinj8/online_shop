import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../shared/components/button";
import { Input } from "../../shared/components/input";

import { useForm } from "../../shared/hooks/form-hook";
import * as validators from "../../shared/components/input/validators";

import {
  StyledAuth,
  StyledFormAuth,
  StyledLoginQuestionAuth,
} from "./auth.scss";
import AsyncView from "../../shared/asyncView/asyncView";
import { onAuth } from "../data";

const Auth = () => {
  const { formState, changeHandler, setFormData } = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [isLoginMode, setIsLoginMode] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);

  const switchAuthMode = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          userName: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          userName: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (userState.userData) {
      history.push("/");
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
          <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
        </header>
        <StyledFormAuth
          onSubmit={(e) => onAuth(e, formState, isLoginMode, dispatch)}
        >
          {!isLoginMode && (
            <Input
              type="text"
              placeholder="name"
              name="userName"
              onInput={changeHandler}
              validators={[validators.VALIDATOR_REQUIRE()]}
            />
          )}
          <Input
            type="text"
            placeholder="email"
            name="email"
            onInput={changeHandler}
            validators={[
              validators.VALIDATOR_REQUIRE(),
              validators.VALIDATOR_EMAIL(),
            ]}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onInput={changeHandler}
            validators={[
              validators.VALIDATOR_MINLENGTH(6),
              validators.VALIDATOR_REQUIRE(),
            ]}
          />
          <Button
            disabled={!formState.isFormValid}
            type="submit"
            styled={{ fontSize: "1.2rem" }}
            template={isLoginMode ? "login" : "sign up"}
            buttonType="inline"
            showEnableAnimation
          />
        </StyledFormAuth>
        <StyledLoginQuestionAuth>
          {isLoginMode ? "You don't have account..." : "You have acount..."}
        </StyledLoginQuestionAuth>
        <Button
          type="button"
          template={`switch to ${!isLoginMode ? "login" : "sign up"}`}
          buttonType="primary"
          clicked={switchAuthMode}
        />
      </StyledAuth>
    </React.Fragment>
  );
};

export default Auth;
