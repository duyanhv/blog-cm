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
  Starting,
  STARTING,
  FetchDataSuccess,
  FETCH_DATA_SUCCESS,
  CreateNewTeacherSuccess,
  CREATE_NEW_TEACHER_SUCCESS,
  UpdateTeacherSuccess,
  UPDATE_TEACHER_SUCCESS,
  ActivateTeacherSuccess,
  DeactivateTeacherSuccess,
  ACTIVATE_TEACHER_SUCCESS,
  DEACTIVATE_TEACHER_SUCCESS,
} from './action';
import { FindTeachersDetailDto } from '../../../service-proxies/service-proxies';

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
  currentTeacher: {} as FindTeachersDetailDto,
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
    currentTeacher: {} as FindTeachersDetailDto,
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

const startingReducer = (
  state: TeacherPageState,
  action: Starting,
) => {
  return {
    ...state,
    isBusy: true,
  };
};

const fetchDataSuccessReducer = (
  state: TeacherPageState,
  action: FetchDataSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    total: action.payload.result.total,
    data: action.payload.result.data,
  };
};

const createNewTeacherSuccessReducer = (
  state: TeacherPageState,
  action: CreateNewTeacherSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    total: state.total + 1,
    data: [action.payload.teacherInfo, ...state.data],
  };
};

const updateTeacherSuccessReducer = (
  state: TeacherPageState,
  action: UpdateTeacherSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    data: state.data.map((item) => {
      if (item._id === state.currentTeacher._id) {
        return state.currentTeacher;
      } else {
        return item;
      }
    }),
  };
};

const activateTeacherSuccessReducer = (
  state: TeacherPageState,
  action: ActivateTeacherSuccess,
) => {
  const activatedTeacher = state.data.filter((item) => item._id === action.payload.teacherId)[0];
  activatedTeacher.isActive = true;

  return {
    ...state,
    isBusy: false,
    data: state.data.map((item) => {
      if (item._id === action.payload.teacherId) {
        return activatedTeacher;
      } else {
        return item;
      }
    }),
  };
};

const deactivateTeacherSuccessReducer = (
  state: TeacherPageState,
  action: DeactivateTeacherSuccess,
) => {
  const deactivatedTeacher = state.data.filter((item) => item._id === action.payload.teacherId)[0];
  deactivatedTeacher.isActive = false;

  return {
    ...state,
    isBusy: false,
    data: state.data.map((item) => {
      if (item._id === action.payload.teacherId) {
        return deactivatedTeacher;
      } else {
        return item;
      }
    }),
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
    [STARTING]: startingReducer,
    [FETCH_DATA_SUCCESS]: fetchDataSuccessReducer,
    [CREATE_NEW_TEACHER_SUCCESS]: createNewTeacherSuccessReducer,
    [UPDATE_TEACHER_SUCCESS]: updateTeacherSuccessReducer,
    [ACTIVATE_TEACHER_SUCCESS]: activateTeacherSuccessReducer,
    [DEACTIVATE_TEACHER_SUCCESS]: deactivateTeacherSuccessReducer,
  },
  initialState,
);

export { teacherPageReducer };
