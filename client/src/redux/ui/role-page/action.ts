import { createAction } from 'redux-actions';
import {
  FindAllRolesResultDto,
  CreateRoleInputDto,
  UpdateRoleInputDto,
  DeleteRoleDto,
  FindAllRolesDetailDto,
} from '../../../service-proxies/service-proxies';

export const OPEN_ROLE_MODAL = 'ROLE_PAGE/OPEN_ROLE_MODAL';
export type OPEN_ROLE_MODAL = typeof OPEN_ROLE_MODAL;

export const CLOSE_ROLE_MODAL = 'ROLE_PAGE/CLOSE_ROLE_MODAL';
export type CLOSE_ROLE_MODAL = typeof CLOSE_ROLE_MODAL;

export const OPEN_DELETE_MODAL = 'ROLE_PAGE/OPEN_DELETE_MODAL';
export type OPEN_DELETE_MODAL = typeof OPEN_DELETE_MODAL;

export const CLOSE_DELETE_MODAL = 'ROLE_PAGE/CLOSE_DELETE_MODAL';
export type CLOSE_DELETE_MODAL = typeof CLOSE_DELETE_MODAL;

export const START_FETCHING = 'ROLE_PAGE/START_FETCHING';
export type START_FETCHING = typeof START_FETCHING;

export const FETCHING_SUCCESS = 'ROLE_PAGE/FETCHING_SUCCESS';
export type FETCHING_SUCCESS = typeof FETCHING_SUCCESS;

export const FETCHING_ERROR = 'ROLE_PAGE/FETCHING_ERROR';
export type FETCHING_ERROR = typeof FETCHING_ERROR;

export const FETCH_DATA = 'ROLE_PAGE/FETCH_DATA';
export type FETCH_DATA = typeof FETCH_DATA;

export const FILTER_CHANGE = 'ROLE_PAGE/FILTER_CHANGE';
export type FILTER_CHANGE = typeof FILTER_CHANGE;

export const SEARCH_CHANGE = 'ROLE_PAGE/SEARCH_CHANGE';
export type SEARCH_CHANGE = typeof SEARCH_CHANGE;

export const CREATE_ROLE = 'ROLE_PAGE/CREATE_ROLE';
export type CREATE_ROLE = typeof CREATE_ROLE;

export const CREATE_ROLE_SUCCESS = 'ROLE_PAGE/CREATE_ROLE_SUCCESS';
export type CREATE_ROLE_SUCCESS = typeof CREATE_ROLE_SUCCESS;

export const UPDATE_ROLE = 'ROLE_PAGE/UPDATE_ROLE';
export type UPDATE_ROLE = typeof UPDATE_ROLE;

export const UPDATE_ROLE_SUCCESS = 'ROLE_PAGE/UPDATE_ROLE_SUCCESS';
export type UPDATE_ROLE_SUCCESS = typeof UPDATE_ROLE_SUCCESS;

export const DELETE_ROLE = 'ROLE_PAGE/DELETE_ROLE';
export type DELETE_ROLE = typeof DELETE_ROLE;

export const DELETE_ROLE_SUCCESS = 'ROLE_PAGE/DELETE_ROLE_SUCCESS';
export type DELETE_ROLE_SUCCESS = typeof DELETE_ROLE_SUCCESS;

export const ROLE_MODAL_TAB_CHANGE = 'ROLE_PAGE/ROLE_MODAL_TAB_CHANGE';
export type ROLE_MODAL_TAB_CHANGE = typeof ROLE_MODAL_TAB_CHANGE;

export const ROLE_NAME_CHANGE = 'ROLE_PAGE/ROLE_NAME_CHANGE';
export type ROLE_NAME_CHANGE = typeof ROLE_NAME_CHANGE;

export const ROLE_PERMISSIONS_CHANGE = 'ROLE_PAGE/ROLE_PERMISSIONS_CHANGE';
export type ROLE_PERMISSIONS_CHANGE = typeof ROLE_PERMISSIONS_CHANGE;

export const ROLE_ISDEFAULT_CHANGE = 'ROLE_PAGE/ROLE_ISDEFAULT_CHANGE';
export type ROLE_ISDEFAULT_CHANGE = typeof ROLE_ISDEFAULT_CHANGE;

export interface OpenRoleModal {
  type: OPEN_ROLE_MODAL;
  payload: {
    currentRole: CreateRoleInputDto | UpdateRoleInputDto;
  };
}

export interface CloseRoleModal {
  type: CLOSE_ROLE_MODAL;
}

export interface OpenDeleteModal {
  type: OPEN_DELETE_MODAL;
  payload: {
    currentRole: DeleteRoleDto;
  };
}

export interface CloseDeleteModal {
  type: CLOSE_DELETE_MODAL;
}

export interface StartFetching {
  type: START_FETCHING;
  payload: {
    pageSize?: number;
    pageNumber?: number;
    filter?: string[];
    search?: string;
    sortBy?: string;
    asc?: boolean;
  };
}

export interface FetchingSuccess {
  type: FETCHING_SUCCESS;
  payload: {
    result: FindAllRolesResultDto;
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
    filter: string[];
  };
}

export interface SearchChange {
  type: SEARCH_CHANGE;
  payload: {
    search: string;
  };
}

export interface CreateRole {
  type: CREATE_ROLE;
  payload: {
    currentRole: CreateRoleInputDto;
  };
}

export interface CreateRoleSuccess {
  type: CREATE_ROLE_SUCCESS;
  payload: {
    roleInfo: FindAllRolesDetailDto;
  };
}

export interface UpdateRole {
  type: UPDATE_ROLE;
  payload: {
    currentRole: UpdateRoleInputDto;
  };
}

export interface UpdateRoleSuccess {
  type: UPDATE_ROLE_SUCCESS;
  payload: {
    roleInfo: FindAllRolesDetailDto;
  };
}

export interface DeleteRole {
  type: DELETE_ROLE;
  payload: {
    id: string;
  };
}

export interface DeleteRoleSuccess {
  type: DELETE_ROLE_SUCCESS;
  payload: {
    roleInfo: FindAllRolesDetailDto;
  };
}

export interface RoleModalTabChange {
  type: ROLE_MODAL_TAB_CHANGE;
  payload: {
    openTabKey: string;
  };
}

export interface RoleNameChange {
  type: ROLE_NAME_CHANGE;
  payload: {
    name: string;
  };
}

export interface RolePermissionsChange {
  type: ROLE_PERMISSIONS_CHANGE;
  payload: {
    permissions: string[];
  };
}

export interface RoleIsDefaultChange {
  type: ROLE_ISDEFAULT_CHANGE;
  payload: {
    isDefault: boolean;
  };
}

export type RolePageAction =
  | OpenRoleModal
  | CloseRoleModal
  | OpenDeleteModal
  | CloseDeleteModal
  | StartFetching
  | FetchingSuccess
  | FetchingError
  | FetchData
  | FilterChange
  | SearchChange
  | CreateRole
  | UpdateRole
  | DeleteRole
  | RoleModalTabChange
  | RoleNameChange
  | RolePermissionsChange
  | RoleIsDefaultChange;

export const openRoleModal = createAction(
  OPEN_ROLE_MODAL,
  (currentRole: CreateRoleInputDto | UpdateRoleInputDto) => ({
    currentRole,
  }),
);

export const closeRoleModal = createAction(CLOSE_ROLE_MODAL);

export const openDeleteModal = createAction(
  OPEN_DELETE_MODAL,
  (currentRole: DeleteRoleDto) => ({
    currentRole,
  }),
);

export const closeDeleteModal = createAction(CLOSE_DELETE_MODAL);

export const startFetching = createAction(
  START_FETCHING,
  (fetchQuery: {
    pageSize?: number;
    pageNumber?: number;
    filter?: string[];
    search?: string;
    sortBy?: string;
    asc?: boolean;
  }) => ({
    ...fetchQuery,
  }),
);

export const fetchingSuccess = createAction(
  FETCHING_SUCCESS,
  (result: FindAllRolesResultDto) => ({
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

export const filterChange = createAction(FILTER_CHANGE, (filter: string[]) => ({
  filter,
}));

export const searchChange = createAction(SEARCH_CHANGE, (search: string) => ({
  search,
}));

export const createRole = createAction(
  CREATE_ROLE,
  (currentRole: CreateRoleInputDto) => ({
    currentRole,
  }),
);

export const createRoleSuccess = createAction(
  CREATE_ROLE_SUCCESS,
  (roleInfo: FindAllRolesDetailDto) => ({
    roleInfo,
  }),
);

export const updateRole = createAction(
  UPDATE_ROLE,
  (currentRole: UpdateRoleInputDto) => ({
    currentRole,
  }),
);

export const updateRoleSuccess = createAction(
  UPDATE_ROLE_SUCCESS,
  (roleInfo: FindAllRolesDetailDto) => ({
    roleInfo,
  }),
);

export const deleteRole = createAction(DELETE_ROLE, (id: string) => ({
  id,
}));

export const deleteRoleSuccess = createAction(
  DELETE_ROLE_SUCCESS,
  (roleInfo: FindAllRolesDetailDto) => ({
    roleInfo,
  }),
);

export const roleModalTabChange = createAction(
  ROLE_MODAL_TAB_CHANGE,
  (openTabKey: string) => ({
    openTabKey,
  }),
);

export const roleNameChange = createAction(
  ROLE_NAME_CHANGE,
  (name: string) => ({
    name,
  }),
);

export const rolePermissionsChange = createAction(
  ROLE_PERMISSIONS_CHANGE,
  (permissions: string[]) => ({
    permissions,
  }),
);

export const roleIsDefaultChange = createAction(
  ROLE_ISDEFAULT_CHANGE,
  (isDefault: boolean) => ({
    isDefault,
  }),
);
