import { handleActions } from 'redux-actions';
import RolePageState from './state';
import {
  FetchingSuccess,
  FetchingError,
  RoleModalTabChange,
  RoleNameChange,
  RolePermissionsChange,
  OPEN_ROLE_MODAL,
  CLOSE_ROLE_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
  ROLE_MODAL_TAB_CHANGE,
  ROLE_NAME_CHANGE,
  ROLE_PERMISSIONS_CHANGE,
  START_FETCHING,
  OpenRoleModal,
  OpenDeleteModal,
  StartFetching,
  CreateRoleSuccess,
  CREATE_ROLE_SUCCESS,
  UpdateRoleSuccess,
  UPDATE_ROLE_SUCCESS,
  DeleteRoleSuccess,
  DELETE_ROLE_SUCCESS,
  RoleIsDefaultChange,
  ROLE_ISDEFAULT_CHANGE,
} from './action';

const initialState = {
  roleModalVisible: false,
  isBusy: false,
  data: [],
  total: 0,
  pageSize: 10,
  pageNumber: 1,
  currentRole: {},
  filter: undefined,
  search: undefined,
  sortBy: 'name',
  asc: true,
  openTabKey: 'name',
  errorMessage: '',
};

const openRoleModalReducer = (state: RolePageState, action: OpenRoleModal) => {
  return {
    ...state,
    roleModalVisible: true,
    currentRole: action.payload.currentRole,
  };
};

const closeRoleModalReducer = (state: RolePageState) => {
  return {
    ...state,
    openTabKey: 'name',
    roleModalVisible: false,
    currentRole: {},
    errorMessage: '',
  };
};

const openDeleteModalReducer = (
  state: RolePageState,
  action: OpenDeleteModal,
) => {
  return {
    ...state,
    currentRole: action.payload.currentRole,
  };
};

const closeDeleteModalReducer = (state: RolePageState) => {
  return {
    ...state,
    currentRole: {},
  };
};

const startFetchingReducer = (state: RolePageState, action: StartFetching) => {
  return {
    ...state,
    ...action.payload,
    isBusy: true,
  };
};

const fetchingSuccessReducer = (
  state: RolePageState,
  action: FetchingSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    data: action.payload.result.data,
    total: action.payload.result.total,
    currentRole: {},
  };
};

const fetchingErrorReducer = (state: RolePageState, action: FetchingError) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
    currentRole: {},
  };
};

const createSuccessReducer = (
  state: RolePageState,
  action: CreateRoleSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    roleModalVisible: false,
    currentRole: {},
    data: [action.payload.roleInfo, ...state.data],
    total: state.total + 1,
    openTabKey: 'name',
  };
};

const updateSuccessReducer = (
  state: RolePageState,
  action: UpdateRoleSuccess,
) => {
  const roleIndex = state.data.findIndex(
    item => item._id === action.payload.roleInfo._id,
  );
  return {
    ...state,
    roleModalVisible: false,
    currentRole: {},
    isBusy: false,
    data: [
      ...state.data.slice(0, roleIndex),
      action.payload.roleInfo,
      ...state.data.slice(roleIndex + 1, state.data.length),
    ],
    openTabKey: 'name',
  };
};

const deleteSuccessReducer = (
  state: RolePageState,
  action: DeleteRoleSuccess,
) => {
  return {
    ...state,
    roleModalVisible: false,
    currentRole: {},
    isBusy: false,
    data: state.data.filter(item => item._id !== action.payload.roleInfo._id),
    total: state.total - 1,
    openTabKey: 'name',
  };
};

const roleModalTabChangeReducer = (
  state: RolePageState,
  action: RoleModalTabChange,
) => {
  return {
    ...state,
    openTabKey: action.payload.openTabKey,
  };
};

const roleNameChangeReducer = (
  state: RolePageState,
  action: RoleNameChange,
) => {
  return {
    ...state,
    currentRole: {
      ...state.currentRole,
      name: action.payload.name,
    },
  };
};

const rolePermissionsChangeReducer = (
  state: RolePageState,
  action: RolePermissionsChange,
) => {
  return {
    ...state,
    currentRole: {
      ...state.currentRole,
      permissions: action.payload.permissions,
    },
  };
};

const roleIsDefaultChangeReducer = (
  state: RolePageState,
  action: RoleIsDefaultChange,
) => {
  return {
    ...state,
    currentRole: {
      ...state.currentRole,
      isDefault: action.payload.isDefault,
    },
  };
};

const rolePageReducer = handleActions<RolePageState, any>(
  {
    [OPEN_ROLE_MODAL]: openRoleModalReducer,
    [CLOSE_ROLE_MODAL]: closeRoleModalReducer,
    [OPEN_DELETE_MODAL]: openDeleteModalReducer,
    [CLOSE_DELETE_MODAL]: closeDeleteModalReducer,
    [START_FETCHING]: startFetchingReducer,
    [FETCHING_SUCCESS]: fetchingSuccessReducer,
    [FETCHING_ERROR]: fetchingErrorReducer,
    [CREATE_ROLE_SUCCESS]: createSuccessReducer,
    [DELETE_ROLE_SUCCESS]: deleteSuccessReducer,
    [UPDATE_ROLE_SUCCESS]: updateSuccessReducer,
    [ROLE_MODAL_TAB_CHANGE]: roleModalTabChangeReducer,
    [ROLE_NAME_CHANGE]: roleNameChangeReducer,
    [ROLE_PERMISSIONS_CHANGE]: rolePermissionsChangeReducer,
    [ROLE_ISDEFAULT_CHANGE]: roleIsDefaultChangeReducer,
  },
  initialState,
);

export { rolePageReducer, initialState };
