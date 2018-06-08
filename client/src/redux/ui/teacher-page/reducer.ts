import { handleActions } from 'redux-actions';
import { TeacherPageState } from './state';
import {
  OpenAddTeacherModal,
  CloseAddTeacherModal,
  OPEN_ADD_TEACHER_MODAL,
  CLOSE_ADD_TEACHER_MODAL,
  TeacherInfoChange,
  TEACHER_INFO_CHANGE,
} from './action';

const initialState = {
  addTeacherModalVisible: false,
  isBusy: false,
  data: [],
  total: 0,
  pageNumber: 1,
  pageSize: 10,
  filter: undefined,
  search: undefined,
  sortBy: 'fullName',
  asc: true,
  currentTeacher: {},
};

const openAddTeacherModalReducer = (
  state: TeacherPageState,
  action: OpenAddTeacherModal,
) => {
  return {
    ...state,
    addTeacherModalVisible: true,
    currentTeacher: action.payload.currentTeacher,
  };
};

const closeAddUserModalReducer = (
  state: TeacherPageState,
  action: CloseAddTeacherModal,
) => {
  return {
    ...state,
    addTeacherModalVisible: false,
    currentTeacher: {},
  };
};

const teacherInfoChangeReducer = (
  state: TeacherPageState,
  action: TeacherInfoChange,
) => {
  return {
    ...state,
    currentTeacher: {
      ...state.currentTeacher,
      ...action.payload.teacherInfo,
    },
  };
};

const teacherPageReducer = handleActions<TeacherPageState, any>(
  {
    [OPEN_ADD_TEACHER_MODAL]: openAddTeacherModalReducer,
    [CLOSE_ADD_TEACHER_MODAL]: closeAddUserModalReducer,
    [TEACHER_INFO_CHANGE]: teacherInfoChangeReducer,
  },
  initialState,
);

export { teacherPageReducer };
