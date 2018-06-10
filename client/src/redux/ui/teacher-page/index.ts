import { TeacherPageState } from './state';
import {
  OPEN_ADD_TEACHER_MODAL,
  CLOSE_ADD_TEACHER_MODAL,
  SEARCH_CHANGE,
  CREATE_NEW_TEACHER,
  CREATE_NEW_TEACHER_SUCCESS,
  UPDATE_TEACHER,
  UPDATE_TEACHER_SUCCESS,
  TEACHER_INFO_CHANGE,
  FETCH_DATA,
  FILTER_CHANGE,
  ERROR_HAPPEN,
  openAddTeacherModal,
  closeAddTeacherModal,
  searchChange,
  createNewTeacher,
  createNewTeacherSuccess,
  updateTeacher,
  updateTeacherSuccess,
  teacherInfoChange,
  fetchData,
  filterChange,
  errorHappen,
} from './action';
import { teacherPageReducer } from './reducer';

export {
  // State
  TeacherPageState,

  // Action
  OPEN_ADD_TEACHER_MODAL,
  CLOSE_ADD_TEACHER_MODAL,
  SEARCH_CHANGE,
  CREATE_NEW_TEACHER,
  CREATE_NEW_TEACHER_SUCCESS,
  UPDATE_TEACHER,
  UPDATE_TEACHER_SUCCESS,
  TEACHER_INFO_CHANGE,
  FETCH_DATA,
  FILTER_CHANGE,
  ERROR_HAPPEN,
  openAddTeacherModal,
  closeAddTeacherModal,
  searchChange,
  createNewTeacher,
  createNewTeacherSuccess,
  updateTeacher,
  updateTeacherSuccess,
  teacherInfoChange,
  fetchData,
  filterChange,
  errorHappen,

  // Saga

  // Reducer
  teacherPageReducer
};
