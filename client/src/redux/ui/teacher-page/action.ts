import { createAction } from 'redux-actions';

// Actions
export const OPEN_ADD_TEACHER_MODAL = 'TEACHER_PAGE/OPEN_ADD_TEACHER_MODAL';
export type OPEN_ADD_TEACHER_MODAL = typeof OPEN_ADD_TEACHER_MODAL;

export const CLOSE_ADD_TEACHER_MODAL = 'TEACHER_PAGE/CLOSE_ADD_TEACHER_MODAL';
export type CLOSE_ADD_TEACHER_MODAL = typeof CLOSE_ADD_TEACHER_MODAL;

export const SEARCH_CHANGE = 'TEACHER_PAGE/SEARCH_CHANGE';
export type SEARCH_CHANGE = typeof SEARCH_CHANGE;

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

export interface CreateNewTeacher {
  type: CREATE_NEW_TEACHER;
  payload: {
    teacherInfo: any; // CreateTeacherInputDto;
  };
}

export interface CreateNewTeacherSuccess {
  type: CREATE_NEW_TEACHER_SUCCESS;
  payload: {
    teacherInfo: any; // FindAllTeachersDetailDto;
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
  (teacherInfo: any) => ({ // FindAllTeachersDetailDto
    teacherInfo,
  }),
);

export const teacherInfoChange = createAction(TEACHER_INFO_CHANGE, teacherInfo => ({
  teacherInfo,
}));
