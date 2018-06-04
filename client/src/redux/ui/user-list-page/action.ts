import { createAction } from 'redux-actions';
import {
  FindAllUsersResultDto,
  FindAllRolesResultDto,
  CreateUserInputDto,
  FindAllUsersDetailDto,
  UpdateUserInputDto,
} from '../../../service-proxies/service-proxies';

export const OPEN_ADD_USER_MODAL = 'USER_LIST_PAGE/OPEN_ADD_USER_MODAL';
export type OPEN_ADD_USER_MODAL = typeof OPEN_ADD_USER_MODAL;

export const CLOSE_ADD_USER_MODAL = 'USER_LIST_PAGE/CLOSE_ADD_USER_MODAL';
export type CLOSE_ADD_USER_MODAL = typeof CLOSE_ADD_USER_MODAL;

export const START_FETCHING = 'USER_LIST_PAGE/START_FETCHING';
export type START_FETCHING = typeof START_FETCHING;

export const FETCHING_SUCCESS = 'USER_LIST_PAGE/FETCHING_SUCCESS';
export type FETCHING_SUCCESS = typeof FETCHING_SUCCESS;

export const FETCHING_ERROR = 'USER_LIST_PAGE/FETCHING_ERROR';
export type FETCHING_ERROR = typeof FETCHING_ERROR;

export const FETCH_DATA = 'USER_LIST_PAGE/FETCH_DATA';
export type FETCH_DATA = typeof FETCH_DATA;

export const FILTER_CHANGE = 'USER_LIST_PAGE/FILTER_CHANGE';
export type FILTER_CHANGE = typeof FILTER_CHANGE;

export const SEARCH_CHANGE = 'USER_LIST_PAGE/SEARCH_CHANGE';
export type SEARCH_CHANGE = typeof SEARCH_CHANGE;

export const FETCH_ROLES = 'USER_LIST_PAGE/FETCH_ROLE';
export type FETCH_ROLES = typeof FETCH_ROLES;

export const FETCH_ROLES_SUCCESS = 'USER_LIST_PAGE/FETCH_ROLES_SUCCESS';
export type FETCH_ROLES_SUCCESS = typeof FETCH_ROLES_SUCCESS;

export const ADD_USER_TAB_CHANGE = 'USER_LIST_PAGE/ADD_USER_TAB_CHANGE';
export type ADD_USER_TAB_CHANGE = typeof ADD_USER_TAB_CHANGE;

export const CREATE_NEW_USER = 'USER_LIST_PAGE/CREATE_NEW_USER';
export type CREATE_NEW_USER = typeof CREATE_NEW_USER;

export const CREATE_NEW_USER_SUCCESS = 'USER_LIST_PAGE/CREATE_NEW_USER_SUCCESS';
export type CREATE_NEW_USER_SUCCESS = typeof CREATE_NEW_USER_SUCCESS;

export const UPDATE_USER = 'USER_LIST_PAGE/UPDATE_USER';
export type UPDATE_USER = typeof UPDATE_USER;

export const UPDATE_USER_SUCCESS = 'USER_LIST_PAGE/UPDATE_USER_SUCCESS';
export type UPDATE_USER_SUCCESS = typeof UPDATE_USER_SUCCESS;

export const USER_INFO_CHANGE = 'USER_LIST_PAGE/USER_INFO_CHANGE';
export type USER_INFO_CHANGE = typeof USER_INFO_CHANGE;

export interface OpenAddUserModal {
  type: OPEN_ADD_USER_MODAL;
  payload: {
    currentUser: FindAllUsersDetailDto;
  };
}

export interface CloseAddUserModal {
  type: CLOSE_ADD_USER_MODAL;
}

export interface StartFetching {
  type: START_FETCHING;
  payload: {
    pageSize?: number;
    pageNumber?: number;
    filter?: string;
    search?: string;
    sortBy?: string;
    asc?: boolean;
  };
}

export interface FetchingSuccess {
  type: FETCHING_SUCCESS;
  payload: {
    result: FindAllUsersResultDto;
  };
}

export interface FetchingError {
  type: FETCHING_ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

export interface FetchData {
  type: FETCH_DATA;
  payload: {
    pageNumber: number;
    pageSize: number;
    sortBy: string;
    asc: boolean;
  };
}

export interface FilterChange {
  type: FILTER_CHANGE;
  payload: {
    filter: string;
  };
}

export interface SearchChange {
  type: SEARCH_CHANGE;
  payload: {
    search: string;
  };
}

export interface FetchRoles {
  type: FETCH_ROLES;
}

export interface FetchRolesSuccess {
  type: FETCH_ROLES_SUCCESS;
  payload: {
    result: FindAllRolesResultDto;
  };
}

export interface AddUserTabChange {
  type: ADD_USER_TAB_CHANGE;
  payload: {
    openTabKey: string;
  };
}

export interface CreateNewUser {
  type: CREATE_NEW_USER;
  payload: {
    userInfo: CreateUserInputDto;
  };
}

export interface CreateNewUserSuccess {
  type: CREATE_NEW_USER_SUCCESS;
  payload: {
    userInfo: FindAllUsersDetailDto;
  };
}

export interface UpdateUser {
  type: UPDATE_USER;
  payload: {
    userInfo: UpdateUserInputDto;
  };
}

export interface UpdateUserSuccess {
  type: UPDATE_USER_SUCCESS;
  payload: {
    userInfo: FindAllUsersDetailDto;
  };
}

export interface UserInfoChange {
  type: USER_INFO_CHANGE;
  payload: {
    userInfo: any;
  };
}

export type RolePageAction =
  | OpenAddUserModal
  | CloseAddUserModal
  | StartFetching
  | FetchingSuccess
  | FetchingError
  | FetchRoles
  | FetchRolesSuccess
  | FetchData
  | FilterChange
  | SearchChange
  | AddUserTabChange
  | CreateNewUser
  | CreateNewUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | UserInfoChange;

export const openAddUserModal = createAction(
  OPEN_ADD_USER_MODAL,
  (currentUser: FindAllUsersDetailDto) => ({
    currentUser,
  }),
);

export const closeAddUserModal = createAction(CLOSE_ADD_USER_MODAL);

export const startFetching = createAction(
  START_FETCHING,
  (fetchQuery: {
    pageSize?: number;
    pageNumber?: number;
    filter?: string;
    search?: string;
    sortBy?: string;
    asc?: boolean;
  }) => ({
    ...fetchQuery,
  }),
);

export const fetchingSuccess = createAction(
  FETCHING_SUCCESS,
  (result: FindAllUsersResultDto) => ({
    result,
  }),
);

export const fetchingError = createAction(
  FETCHING_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

export const fetchData = createAction(
  FETCH_DATA,
  (fetchQuery: {
    pageNumber: number;
    pageSize: number;
    sortBy: string;
    asc: boolean;
  }) => ({
    ...fetchQuery,
  }),
);

export const filterChange = createAction(FILTER_CHANGE, (filter: string) => ({
  filter,
}));

export const searchChange = createAction(SEARCH_CHANGE, (search: string) => ({
  search,
}));

export const fetchRoles = createAction(FETCH_ROLES);

export const fetchRolesSuccess = createAction(
  FETCH_ROLES_SUCCESS,
  (result: FindAllRolesResultDto) => ({
    result,
  }),
);

export const addUserTabChange = createAction(
  ADD_USER_TAB_CHANGE,
  (openTabKey: string) => ({
    openTabKey,
  }),
);

export const createNewUser = createAction(
  CREATE_NEW_USER,
  (userInfo: CreateUserInputDto) => ({
    userInfo,
  }),
);

export const createNewUserSuccess = createAction(
  CREATE_NEW_USER_SUCCESS,
  (userInfo: FindAllUsersDetailDto) => ({
    userInfo,
  }),
);

export const updateUser = createAction(
  UPDATE_USER,
  (userInfo: UpdateUserInputDto) => ({
    userInfo,
  }),
);

export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  (userInfo: FindAllUsersDetailDto) => ({
    userInfo,
  }),
);

export const userInfoChange = createAction(USER_INFO_CHANGE, userInfo => ({
  userInfo,
}));
