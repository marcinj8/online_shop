import React from 'react';

import { Input } from '../../shared/components/input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../shared/components/input/validators';

import { useForm } from '../../shared/hooks/form-hook';
import { sendData } from '../data/contactFormData';

import {
  FormStyled,
  FormInputsContainerStyled,
  FormInputsBlockStyled,
  FormButtonStyled,
} from '../style/form.scss';

const Form = () => {
  const { formState, changeHandler } = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      topic: {
        value: '',
        isValid: false,
      },
      mail: {
        value: '',
        isValid: false,
      },
      message: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  return (
    <FormStyled onSubmit={(e) => sendData(e, formState)}>
      <FormInputsContainerStyled>
        <FormInputsBlockStyled>
          <Input
            // invalid={!formState.name.isValid && formState.name.isTouched}
            variant='primary'
            type='text'
            name='name'
            placeholder='name'
            onInput={changeHandler}
            validators={[VALIDATOR_MINLENGTH(4)]}
          />
          <Input
            variant='primary'
            type='text'
            name='topic'
            placeholder='topic'
            onInput={changeHandler}
            validators={[VALIDATOR_MINLENGTH(4)]}
          />
          <Input
            type='text'
            variant='primary'
            name='mail'
            placeholder='mail'
            onInput={changeHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
        </FormInputsBlockStyled>
        <FormInputsBlockStyled>
          <Input
            variant='textarea'
            type='textarea'
            name='message'
            placeholder='message'
            onInput={changeHandler}
            validators={[VALIDATOR_MINLENGTH(10)]}
          />
        </FormInputsBlockStyled>
      </FormInputsContainerStyled>
      <FormButtonStyled type='submit' disabled={!formState.isFormValid}>
        send
      </FormButtonStyled>
    </FormStyled>
  );
};

export default Form;
