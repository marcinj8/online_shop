import React, { useMemo, useReducer, useEffect } from 'react';

import { validate } from './validators';

import {
  PrimaryInputSytled,
  SecondaryInputSytled,
  TextareaSytled,
  InputContainerStyled,
} from './input.scss';

const InputReducer = (state, action) => {
  switch (action.type) {
    case 'TOUCHED':
      return {
        ...state,
        isValid: validate(action.value, action.validators),
        isTouched: true,
      };
    case 'INPUT_CHANGED':
      return {
        ...state,
        isValid: validate(action.value, action.validators),
        value: action.value,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const {
    variant,
    label,
    placeholder,
    initialValue,
    initialValid,
    onInput,
    validators,
    errorMessage,
    name,
    type,
    styled,
  } = props;

  const initialState = {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  };

  const [inputState, dispatch] = useReducer(InputReducer, initialState);

  let FormElement;
  FormElement = useMemo(() => {
    switch (variant) {
      case 'primary':
        return PrimaryInputSytled;
      case 'secondary':
        return SecondaryInputSytled;
      case 'textarea':
        return TextareaSytled;
      default:
        return PrimaryInputSytled;
    }
  }, [variant]);

  const changeHandler = (e) => {
    const value = e.target.value;
    dispatch({
      type: 'INPUT_CHANGED',
      value,
      validators,
    });
  };

  const touchedHandler = (e) => {
    const value = e.target.value;
    dispatch({
      type: 'TOUCHED',
      value,
      validators,
    });
  };

  useEffect(() => {
    onInput(name, inputState.value, inputState.isValid);
  }, [name, inputState.value, inputState.isValid, onInput]);

  return (
    <InputContainerStyled>
      {label && <label htmlFor={name}>{label}</label>}
      <FormElement
        name={name}
        type={type}
        value={inputState.value}
        danger={!inputState.isValid && inputState.isTouched}
        onChange={changeHandler}
        id={name}
        styled={styled}
        placeholder={placeholder}
        onBlur={touchedHandler}
      />
      {!inputState.isValid && inputState.isTouched && <h5>{errorMessage}</h5>}
    </InputContainerStyled>
  );
};

export default Input;
