import { handleActions } from 'redux-actions';
import { TeacherPageState } from './state';
import {
  OpenAddTeacherModal,
  CloseAddTeacherModal,
  OPEN_ADD_TEACHER_MODAL,
  CLOSE_ADD_TEACHER_MODAL,
  TeacherInfoChange,
  TEACHER_INFO_CHANGE,
  SearchChange,
  SEARCH_CHANGE,
  FilterChange,
  FILTER_CHANGE,
  ErrorHappen,
  ERROR_HAPPEN,
} from './action';

const initialState = {
  addTeacherModalVisible: false,
  isBusy: false,
  data: [],
  total: 0,
  pageNumber: 1,
  pageSize: 10,
  subject: '',
  name: '',
  sortBy: 'fullName',
  asc: true,
  currentTeacher: {},
  imageSrc: '',
  errorMessage: '',
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

const searchChangeReducer = (
  state: TeacherPageState,
  action: SearchChange,
) => {
  return {
    ...state,
    name: action.payload.search,
  };
};

const filterChangeReducer = (
  state: TeacherPageState,
  action: FilterChange,
) => {
  return {
    ...state,
    subject: action.payload.filter,
  };
};

const errorHappenReducer = (
  state: TeacherPageState,
  action: ErrorHappen,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage
  };
};

const teacherPageReducer = handleActions<TeacherPageState, any>(
  {
    [OPEN_ADD_TEACHER_MODAL]: openAddTeacherModalReducer,
    [CLOSE_ADD_TEACHER_MODAL]: closeAddUserModalReducer,
    [TEACHER_INFO_CHANGE]: teacherInfoChangeReducer,
    [SEARCH_CHANGE]: searchChangeReducer,
    [FILTER_CHANGE]: filterChangeReducer,
    [ERROR_HAPPEN]: errorHappenReducer,
  },
  initialState,
);

export { teacherPageReducer };
