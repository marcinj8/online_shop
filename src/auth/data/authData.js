import { registerUser, signInUser } from "../../store/actions/userActions";

export const onAuth = (e, formState, isLoginMode, dispatch) => {
  e.preventDefault();
  const authData = { ...formState };
  
  if (isLoginMode) {
    delete authData.inputs.userName;
  }

  const userData = Object.keys(authData.inputs).map((input) => ({
    [input]: authData.inputs[input].value,
  }));

  if (isLoginMode) {
    dispatch(signInUser(...userData));
  } else {
    dispatch(registerUser(...userData));
  }
};
