import { handleActions } from 'redux-actions';
import { ProfileState } from '.';
import {
  UpdateUserProfile,
  ClearUserProfile,
  CLEAR_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './action';
import jwt_decode from 'jwt-decode';

export interface Token {
  id: string;
  username: string;
  email: string;
  fullName: string;
  permissions: string[];
  language: string;
  exp?: number;
  iat?: number;
}

const defaultState: ProfileState = {
  id: '',
  isLoggedIn: false,
  rememberMe: false,
  token: '',
  username: '',
  email: '',
  fullName: '',
  permissions: [],
  language: '',
};

const updateUserProfileReducer = (
  state: ProfileState,
  action: UpdateUserProfile,
) => {
  const data: Token = jwt_decode(action.payload.token) as any;
  return {
    ...state,
    id: data.id,
    isLoggedIn: true,
    rememberMe: action.payload.rememberMe || false,
    token: action.payload.token,
    username: data.username,
    email: data.email,
    fullName: data.fullName,
    permissions: data.permissions,
    language: data.language ? data.language : 'en',
  };
};

const clearUserProfileReducer = (
  state: ProfileState,
  action: ClearUserProfile,
) => {
  return { ...defaultState };
};

const profileReducer = handleActions<ProfileState, any>(
  {
    [UPDATE_USER_PROFILE]: updateUserProfileReducer,
    [CLEAR_USER_PROFILE]: clearUserProfileReducer,
  },
  defaultState,
);

export { profileReducer };
