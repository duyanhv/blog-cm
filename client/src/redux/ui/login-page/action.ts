import { createAction } from 'redux-actions';

export const LOGIN_WITH_USERNAME = 'LOGGIN_PAGE/LOGIN_WITH_USERNAME';
export type LOGIN_WITH_USERNAME = typeof LOGIN_WITH_USERNAME;

export const LOGIN = 'LOGGIN_PAGE/LOGIN';
export type LOGIN = typeof LOGIN;

export const LOGIN_IN_PROGRESS = 'LOGGIN_PAGE/LOGIN_IN_PROGRESS';
export type LOGIN_IN_PROGRESS = typeof LOGIN_IN_PROGRESS;

export const LOGIN_SUCCESSFULLY = 'LOGGIN_PAGE/LOGIN_SUCCESSFULLY';
export type LOGIN_SUCCESSFULLY = typeof LOGIN_SUCCESSFULLY;

export const LOGIN_UNSUCCESSFULLY = 'LOGGIN_PAGE/LOGIN_UNSUCCESSFULLY';
export type LOGIN_UNSUCCESSFULLY = typeof LOGIN_UNSUCCESSFULLY;

export const CLEAR_LOGIN_PAGE = 'LOGGIN_PAGE/CLEAR_LOGIN_PAGE';
export type CLEAR_LOGIN_PAGE = typeof CLEAR_LOGIN_PAGE;

export interface LoginWithUsername {
  type: LOGIN_WITH_USERNAME;
  payload: { username: string };
}

export interface LoginParams {
  username: string;
  password: string;
  rememberMe: boolean;
  callbackUrl: string;
}

export interface Login {
  type: LOGIN;
  payload: LoginParams;
}

export interface LoginInProgress {
  type: LOGIN_IN_PROGRESS;
}

export interface LoginSuccessfully {
  type: LOGIN_SUCCESSFULLY;
}

export interface LoginUnsuccessfully {
  type: LOGIN_UNSUCCESSFULLY;
  payload: { errorMessage: string };
  error: boolean;
}

export interface ClearLoginPage {
  type: CLEAR_LOGIN_PAGE;
}

export type LoginPageAction =
  | LoginWithUsername
  | Login
  | LoginInProgress
  | LoginSuccessfully
  | LoginUnsuccessfully;

export const loginWithUsername = createAction(
  LOGIN_WITH_USERNAME,
  (username: string) => ({ username }),
);

export const login = createAction(LOGIN, (loginParams: LoginParams) => ({
  ...loginParams,
}));

export const loginInProgress = createAction(LOGIN_IN_PROGRESS);

export const loginSuccessfully = createAction(
  LOGIN_SUCCESSFULLY,
  (callbackUrl: string) => ({ callbackUrl }),
);

export const loginUnsuccessfully = createAction(
  LOGIN_UNSUCCESSFULLY,
  (errorMessage: string) => ({ errorMessage }),
);

export const clearLoginPage = createAction(CLEAR_LOGIN_PAGE);
