import { useCallback, useReducer } from 'react';

const onInputChange = (state, name, value, isValid) => {
  let isFormValid = true;
  Object.keys(state.inputs).forEach((input) => {
    if (input === name) {
      isFormValid = isFormValid && isValid;
    } else {
      isFormValid = isFormValid && state.inputs[input].isValid;
    }
  });

  return {
    ...state,
    inputs: {
      ...state.inputs,
      [name]: {
        ...state.inputs[name],
        value,
        isValid,
      },
    },
    isFormValid,
  };
};

const onClearInputs = (state) => {
  console.log(state.inputs);
  const clearedInputs = {};
  for (let input in state.inputs) {
    clearedInputs[input] = {
      ...(state.inputs[input] = {
        value: '',
        isValid: false,
      }),
    };
  }

  return {
    ...state,
    inputs: clearedInputs,
    isFormValid: false,
  };
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return onInputChange(state, action.inputId, action.value, action.isValid);
    case 'SET_FORM_DATA':
      return {
        ...state,
        inputs: action.inputs,
        isFormValid: action.isFormValid,
      };
    case 'CLEAR_FORM_DATA':
      return onClearInputs(state);
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const initialState = {
    inputs: initialInputs,
    isFormValid: initialFormValidity,
  };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = useCallback((inputId, value, isValid) => {
    dispatch({
      type: 'ON_INPUT_CHANGE',
      inputId,
      value,
      isValid,
    });
  }, []);

  const setFormData = useCallback((inputsData, formValidity = false) => {
    dispatch({
      type: 'SET_FORM_DATA',
      inputs: inputsData,
      isFormValid: formValidity,
    });
  }, []);

  const clearFormData = useCallback(() => {
    dispatch({
      type: 'CLEAR_FORM_DATA',
    });
  }, []);

  return { formState, changeHandler, setFormData, clearFormData };
};
