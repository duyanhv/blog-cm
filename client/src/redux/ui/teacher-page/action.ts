import { createAction } from 'redux-actions';

// Actions
export const OPEN_ADD_TEACHER_MODAL = 'TEACHER_PAGE/OPEN_ADD_TEACHER_MODAL';
export type OPEN_ADD_TEACHER_MODAL = typeof OPEN_ADD_TEACHER_MODAL;

export const CLOSE_ADD_TEACHER_MODAL = 'TEACHER_PAGE/CLOSE_ADD_TEACHER_MODAL';
export type CLOSE_ADD_TEACHER_MODAL = typeof CLOSE_ADD_TEACHER_MODAL;

export const SEARCH_CHANGE = 'TEACHER_PAGE/SEARCH_CHANGE';
export type SEARCH_CHANGE = typeof SEARCH_CHANGE;

export const FILTER_CHANGE = 'TEACHER_PAGE/FILTER_CHANGE';
export type FILTER_CHANGE = typeof FILTER_CHANGE;

export const CREATE_NEW_TEACHER = 'TEACHER_PAGE/CREATE_NEW_TEACHER';
export type CREATE_NEW_TEACHER = typeof CREATE_NEW_TEACHER;

export const CREATE_NEW_TEACHER_SUCCESS = 'TEACHER_PAGE/CREATE_NEW_TEACHER_SUCCESS';
export type CREATE_NEW_TEACHER_SUCCESS = typeof CREATE_NEW_TEACHER_SUCCESS;

export const UPDATE_TEACHER = 'TEACHER_PAGE/UPDATE_TEACHER';
export type UPDATE_TEACHER = typeof UPDATE_TEACHER;

export const UPDATE_TEACHER_SUCCESS = 'TEACHER_PAGE/UPDATE_TEACHER_SUCCESS';
export type UPDATE_TEACHER_SUCCESS = typeof UPDATE_TEACHER_SUCCESS;

export const TEACHER_INFO_CHANGE = 'TEACHER_PAGE/TEACHER_INFO_CHANGE';
export type TEACHER_INFO_CHANGE = typeof TEACHER_INFO_CHANGE;

export const FETCH_DATA = 'TEACHER_PAGE/FETCH_DATA';
export type FETCH_DATA = typeof FETCH_DATA;

export const FETCH_DATA_SUCCESS = 'TEACHER_PAGE/FETCH_DATA_SUCCESS';
export type FETCH_DATA_SUCCESS = typeof FETCH_DATA_SUCCESS;

export const ERROR_HAPPEN = 'TEACHER_PAGE/ERROR_HAPPEN';
export type ERROR_HAPPEN = typeof ERROR_HAPPEN;

export const STARTING = 'TEACHER_PAGE/STARTING';
export type STARTING = typeof STARTING;

export const ACTIVATE_TEACHER = 'TEACHER_PAGE/ACTIVATE_TEACHER';
export type ACTIVATE_TEACHER = typeof ACTIVATE_TEACHER;

export const ACTIVATE_TEACHER_SUCCESS = 'TEACHER_PAGE/ACTIVATE_TEACHER_SUCCESS';
export type ACTIVATE_TEACHER_SUCCESS = typeof ACTIVATE_TEACHER_SUCCESS;

export const DEACTIVATE_TEACHER = 'TEACHER_PAGE/DEACTIVATE_TEACHER';
export type DEACTIVATE_TEACHER = typeof DEACTIVATE_TEACHER;

export const DEACTIVATE_TEACHER_SUCCESS = 'TEACHER_PAGE/DEACTIVATE_TEACHER_SUCCESS';
export type DEACTIVATE_TEACHER_SUCCESS = typeof DEACTIVATE_TEACHER_SUCCESS;

// Action Interface
export interface OpenAddTeacherModal {
  type: OPEN_ADD_TEACHER_MODAL;
  payload: {
    currentTeacher: any; // FindAllTeachersDetailDto;
  };
}

export interface CloseAddTeacherModal {
  type: CLOSE_ADD_TEACHER_MODAL;
}

export interface SearchChange {
  type: SEARCH_CHANGE;
  payload: {
    search: string;
  };
}

export interface FilterChange {
  type:  FILTER_CHANGE;
  payload: {
    filter: string;
  };
}

export interface CreateNewTeacher {
  type: CREATE_NEW_TEACHER;
  payload: {
    teacherInfo: any; // CreateTeacherInputDto;
  };
}

export interface CreateNewTeacherSuccess {
  type: CREATE_NEW_TEACHER_SUCCESS;
  payload: {
    teacherInfo: any; // FindTeachersDetailDto;
  };
}

export interface UpdateTeacher {
  type: UPDATE_TEACHER;
  payload: {
    teacherInfo: any; // UpdateTeacherInputDto;
  };
}

export interface UpdateTeacherSuccess {
  type: UPDATE_TEACHER_SUCCESS;
  payload: {
    teacherInfo: any; // FindAllTeachersDetailDto;
  };
}

export interface TeacherInfoChange {
  type: TEACHER_INFO_CHANGE;
  payload: {
    teacherInfo: any;
  };
}

export interface FetchData {
  type: FETCH_DATA;
  payload: {
    name: string;
    subject: string;
    pageNumber: number;
    pageSize: number;
    sortBy: string;
    asc: boolean;
  };
}

export interface FetchDataSuccess {
  type: FETCH_DATA_SUCCESS;
  payload: any; // FindTeachersDetailDto
}

export interface ErrorHappen {
  type: ERROR_HAPPEN;
  payload: {
    errorMessage: string;
  };
}

export interface Starting {
  type: STARTING;
}

export interface ActivateTeacher {
  type: ACTIVATE_TEACHER;
  payload: {
    teacherId: string;
  };
}

export interface ActivateTeacherSuccess {
  type: ACTIVATE_TEACHER_SUCCESS;
  payload: {
    teacherId: string;
  };
}

export interface DeactivateTeacher {
  type: DEACTIVATE_TEACHER;
  payload: {
    teacherId: string;
  };
}

export interface DeactivateTeacherSuccess {
  type: DEACTIVATE_TEACHER_SUCCESS;
  payload: {
    teacherId: string;
  };
}

// Payload Creator
export const openAddTeacherModal = createAction(
  OPEN_ADD_TEACHER_MODAL,
  (currentTeacher: any ) => ({ // FindAllTeachersDetailDto
    currentTeacher,
  }),
);

export const closeAddTeacherModal = createAction(CLOSE_ADD_TEACHER_MODAL);

export const searchChange = createAction(SEARCH_CHANGE, (search: string) => ({
  search,
}));

export const filterChange = createAction(FILTER_CHANGE, (filter: string) => ({
  filter,
}));

export const createNewTeacher = createAction(
  CREATE_NEW_TEACHER,
  (teacherInfo: any) => ({ // CreateTeacherInputDto
    teacherInfo,
  }),
);

export const createNewTeacherSuccess = createAction(
  CREATE_NEW_TEACHER_SUCCESS,
  (teacherInfo: any) => ({ // FindAllTeachersDetailDto
    teacherInfo,
  }),
);

export const updateTeacher = createAction(
  UPDATE_TEACHER,
  (userInfo: any) => ({ // UpdateTeacherInputDto
    userInfo,
  }),
);

export const updateTeacherSuccess = createAction(
  UPDATE_TEACHER_SUCCESS,
  (teacherInfo: any) => ({ // FindAllTeachersResultDto
    teacherInfo,
  }),
);

export const teacherInfoChange = createAction(TEACHER_INFO_CHANGE, teacherInfo => ({
  teacherInfo,
}));

export const fetchData = createAction(
  FETCH_DATA,
  (fetchQuery: {
    name: string,
    subject: string,
    pageNumber: number;
    pageSize: number;
    sortBy: string;
    asc: boolean;
  }) => ({
    ...fetchQuery,
  }),
);

export const fetchDataSuccess = createAction(FETCH_DATA_SUCCESS, (result: any) => ({
  result,
}));

export const errorHappen = createAction(ERROR_HAPPEN, errorMessage => ({
  errorMessage,
}));

export const starting = createAction(STARTING);

export const activateTeacher = createAction(ACTIVATE_TEACHER, (teacherId: string) => ({
  teacherId,
}));

export const activateTeacherSuccess = createAction(ACTIVATE_TEACHER_SUCCESS, (teacherId: string) => ({
  teacherId,
}));

export const deactivateTeacher = createAction(DEACTIVATE_TEACHER, (teacherId: string) => ({
  teacherId,
}));

export const deactivateTeacherSuccess = createAction(DEACTIVATE_TEACHER_SUCCESS, (teacherId: string) => ({
  teacherId,
}));
