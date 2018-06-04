import { LoginPageState } from '.';
import {
  LoginWithUsername,
  LoginSuccessfully,
  LoginInProgress,
  LoginUnsuccessfully,
  ClearLoginPage,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESSFULLY,
  LOGIN_UNSUCCESSFULLY,
  LOGIN_WITH_USERNAME,
  CLEAR_LOGIN_PAGE,
} from './action';
import { handleActions } from 'redux-actions';

const LoginPageDefaultState = 1;
const LoginInProgressState = 2;
const LoginUnsuccessfullyState = 3;
const LoginSuccessfullyState = 4;

export {
  LoginPageDefaultState,
  LoginInProgressState,
  LoginUnsuccessfullyState,
  LoginSuccessfullyState,
};

const loginWithUsernameReducer = (
  state: LoginPageState,
  action: LoginWithUsername,
) => {
  return {
    ...state,
    state: LoginPageDefaultState,
    username: action.payload.username,
    errorMessage: '',
    callbackUrl: '',
  };
};

const loginInProgressReducer = (
  state: LoginPageState,
  action: LoginInProgress,
) => {
  return {
    ...state,
    state: LoginInProgressState,
    errorMessage: '',
  };
};

const loginSuccessfullyReducer = (
  state: LoginPageState,
  action: LoginSuccessfully,
) => {
  return {
    ...state,
    state: LoginSuccessfullyState,
    errorMessage: '',
  };
};

const loginUnsuccessfullyReducer = (
  state: LoginPageState,
  action: LoginUnsuccessfully,
) => {
  return {
    ...state,
    state: LoginUnsuccessfullyState,
    errorMessage: action.payload.errorMessage,
  };
};

const clearLoginPageReducer = (
  state: LoginPageState,
  action: ClearLoginPage,
) => {
  return {
    ...state,
    state: LoginPageDefaultState,
    username: '',
    errorMessage: '',
    callbackUrl: '',
  };
};

const loginPageReducer = handleActions<LoginPageState, any>(
  {
    [LOGIN_IN_PROGRESS]: loginInProgressReducer,
    [LOGIN_WITH_USERNAME]: loginWithUsernameReducer,
    [LOGIN_SUCCESSFULLY]: loginSuccessfullyReducer,
    [LOGIN_UNSUCCESSFULLY]: loginUnsuccessfullyReducer,
    [CLEAR_LOGIN_PAGE]: clearLoginPageReducer,
  },
  {
    state: LoginPageDefaultState,
    username: '',
    errorMessage: '',
    callbackUrl: '',
  },
);

export { loginPageReducer };
