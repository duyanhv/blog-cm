import { handleActions } from 'redux-actions';
import ProfilePageState from './state';
import {
  ProfileInfoChange,
  PROFILE_INFO_CHANGE,
  Starting,
  STARTING,
  FetchingSuccess,
  FETCHING_SUCCESS,
  Error,
  ERROR,
  UpdateSuccess,
  UPDATE_SUCCESS,
  UploadImageSuccess,
  UPLOAD_IMAGE_SUCCESS,
} from './action';
import { message } from '../../../helpers';

const initialState = {
  firstName: '',
  middleName: '',
  lastName: '',
  password: '',
  isBusy: false,
  email: '',
  username: '',
  errorMessage: '',
  imageSrc: '',
};

const profileInfoChangeReducer = (
  state: ProfilePageState,
  action: ProfileInfoChange,
) => {
  return {
    ...state,
    ...action.payload.profileInfo,
  };
};

const startingReducer = (state: ProfilePageState, action: Starting) => {
  return {
    ...state,
    isBusy: true,
  };
};

const fetchSuccessReducer = (
  state: ProfilePageState,
  action: FetchingSuccess,
) => {
  return {
    ...state,
    ...action.payload.result,
    isBusy: false,
  };
};

const errorReducer = (state: ProfilePageState, action: Error) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const updateSuccessReducer = (
  state: ProfilePageState,
  action: UpdateSuccess,
) => {
  return {
    ...state,
    isBusy: false,
    password: '',
  };
};

const uploadImageSuccessReducer = (
  state: ProfilePageState,
  action: UploadImageSuccess,
) => {
  message.success('Upload Profile Picture Successfully !!', 1);
  return {
    ...state,
    imageSrc: action.payload.imageSrc,
  };
};

const profilePageReducer = handleActions<ProfilePageState, any>(
  {
    [PROFILE_INFO_CHANGE]: profileInfoChangeReducer,
    [STARTING]: startingReducer,
    [FETCHING_SUCCESS]: fetchSuccessReducer,
    [ERROR]: errorReducer,
    [UPDATE_SUCCESS]: updateSuccessReducer,
    [UPLOAD_IMAGE_SUCCESS]: uploadImageSuccessReducer,
  },
  initialState,
);

export { profilePageReducer };
