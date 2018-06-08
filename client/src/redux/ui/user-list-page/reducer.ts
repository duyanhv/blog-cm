import { handleActions } from 'redux-actions';
import UserListPageState from './state';
import {
  OpenAddUserModal,
  CloseAddUserModal,
  FetchRolesSuccess,
  StartFetching,
  FetchingSuccess,
  FetchingError,
  OPEN_ADD_USER_MODAL,
  CLOSE_ADD_USER_MODAL,
  FETCH_ROLES_SUCCESS,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
  START_FETCHING,
  AddUserTabChange,
  ADD_USER_TAB_CHANGE,
  CreateNewUserSuccess,
  CREATE_NEW_USER_SUCCESS,
  UpdateUserSuccess,
  UPDATE_USER_SUCCESS,
  UserInfoChange,
  USER_INFO_CHANGE,
} from './action';

const initialState = {
  addUserModalVisible: false,
  isBusy: false,
  data: [],
  total: 0,
  pageNumber: 1,
  pageSize: 10,
  filter: undefined,
  search: undefined,
  sortBy: 'username',
  asc: true,
  roles: [],
  errorMessage: '',
  openTabKey: 'user-info',
  isUsernameExist: undefined,
  isEmailExist: undefined,
  currentUser: {},
};

const openAddUserModalReducer = (
  state: UserListPageState,
  action: OpenAddUserModal,
) => {
  return {
    ...state,
    addUserModalVisible: true,
    currentUser: action.payload.currentUser,
  };
};

const closeAddUserModalReducer = (
  state: UserListPageState,
  action: CloseAddUserModal,
) => {
  return {
    ...state,
    openTabKey: 'user-info',
    addUserModalVisible: false,
    currentUser: {},
    errorMessage: '',
  };
};

const fetchRolesSuccessReducer = (
  state: UserListPageState,
  action: FetchRolesSuccess,
) => {
  return {
    ...state,
    roles: action.payload.result.data,
  };
};

const startFetchingReducer = (
  state: UserListPageState,
  action: StartFetching,
) => {
  return {
    ...state,
    ...action.payload,
    isBusy: true,
  };
};

const fetchingSuccessReducer = (
  state: UserListPageState,
  action: FetchingSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    data: action.payload.result.data,
    total: action.payload.result.total,
    currentUser: {},
  };
};

const fetchingErrorReducer = (
  state: UserListPageState,
  action: FetchingError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const addUserTabChangeReducer = (
  state: UserListPageState,
  action: AddUserTabChange,
) => {
  return {
    ...state,
    openTabKey: action.payload.openTabKey,
  };
};

const createNewUserSuccessReducer = (
  state: UserListPageState,
  action: CreateNewUserSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    addUserModalVisible: false,
    openTabKey: 'user-info',
    isUsernameExist: undefined,
    isEmailExist: undefined,
    data: [action.payload.userInfo, ...state.data],
    total: state.total + 1,
    currentUser: {},
    errorMessage: '',
  };
};

const updateUserSuccessReducer = (
  state: UserListPageState,
  action: UpdateUserSuccess,
) => {
  const userIndex = state.data.findIndex(
    item => item._id === action.payload.userInfo._id,
  );
  return {
    ...state,
    isBusy: false,
    addUserModalVisible: false,
    openTabKey: 'user-info',
    isUsernameExist: undefined,
    isEmailExist: undefined,
    data: [
      ...state.data.slice(0, userIndex),
      action.payload.userInfo,
      ...state.data.slice(userIndex + 1, state.data.length),
    ],
    currentUser: {},
    errorMessage: '',
  };
};

const userInfoChangeReducer = (state: UserListPageState, action: UserInfoChange) => {
  return {
    ...state,
    currentUser: {
      ...state.currentUser,
      ...action.payload.userInfo,
    },
  };
};

const userListPageReducer = handleActions<UserListPageState, any>(
  {
    [OPEN_ADD_USER_MODAL]: openAddUserModalReducer,
    [CLOSE_ADD_USER_MODAL]: closeAddUserModalReducer,
    [FETCH_ROLES_SUCCESS]: fetchRolesSuccessReducer,
    [START_FETCHING]: startFetchingReducer,
    [FETCHING_SUCCESS]: fetchingSuccessReducer,
    [FETCHING_ERROR]: fetchingErrorReducer,
    [ADD_USER_TAB_CHANGE]: addUserTabChangeReducer,
    [CREATE_NEW_USER_SUCCESS]: createNewUserSuccessReducer,
    [UPDATE_USER_SUCCESS]: updateUserSuccessReducer,
    [USER_INFO_CHANGE]: userInfoChangeReducer,
  },
  initialState,
);

export { userListPageReducer, initialState };
