import { createAction } from 'redux-actions';
import {
  GetProfileResultDto,
  UpdateProfileInputDto,
} from '../../../service-proxies/service-proxies';

export const PROFILE_INFO_CHANGE = 'PROFILE_PAGE/PROFILE_INFO_CHANGE';
export type PROFILE_INFO_CHANGE = typeof PROFILE_INFO_CHANGE;

export const UPLOAD_IMAGE_SUCCESS = 'PROFILE_PAGE/UPLOAD_IMAGE_SUCCESS';
export type UPLOAD_IMAGE_SUCCESS = typeof UPLOAD_IMAGE_SUCCESS;

export const FETCH_PROFILE = 'PROFILE_PAGE/FETCH_PROFILE';
export type FETCH_PROFILE = typeof FETCH_PROFILE;

export const STARTING = 'PROFILE_PAGE/STARTING';
export type STARTING = typeof STARTING;

export const FETCHING_SUCCESS = 'PROFILE_PAGE/FETCHING_SUCCESS';
export type FETCHING_SUCCESS = typeof FETCHING_SUCCESS;

export const ERROR = 'PROFILE_PAGE/ERROR';
export type ERROR = typeof ERROR;

export const UPDATE_PROFILE = 'PROFILE_PAGE/UPDATE_PROFILE';
export type UPDATE_PROFILE = typeof UPDATE_PROFILE;

export const UPDATE_SUCCESS = 'PROFILE_PAGE/UPDATE_SUCCESS';
export type UPDATE_SUCCESS = typeof UPDATE_SUCCESS;

export interface ProfileInfoChange {
  type: PROFILE_INFO_CHANGE;
  payload: {
    profileInfo: any;
  };
}

export interface UploadImageSuccess {
  type: UPLOAD_IMAGE_SUCCESS;
  payload: {
    imageSrc: string;
  };
}

export interface FetchProfile {
  type: FETCH_PROFILE;
  payload: {
    id: string;
  };
}

export interface Starting {
  type: STARTING;
}

export interface FetchingSuccess {
  type: FETCHING_SUCCESS;
  payload: {
    result: GetProfileResultDto;
  };
}

export interface Error {
  type: ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

export interface UpdateProfile {
  type: UPDATE_PROFILE;
  payload: {
    profileInfo: UpdateProfileInputDto;
  };
}

export interface UpdateSuccess {
  type: UPDATE_SUCCESS;
}

export const profileInfoChange = createAction(
  PROFILE_INFO_CHANGE,
  profileInfo => ({
    profileInfo,
  }),
);

export const uploadImageSuccess = createAction(
  UPLOAD_IMAGE_SUCCESS,
  imageSrc => ({
    imageSrc,
  }),
);

export const fetchProfile = createAction(FETCH_PROFILE, (id: string) => ({
  id,
}));

export const starting = createAction(STARTING);

export const fetchingSuccess = createAction(
  FETCHING_SUCCESS,
  (result: GetProfileResultDto) => ({
    result,
  }),
);

export const error = createAction(ERROR, (errorMessage: string) => ({
  errorMessage,
}));

export const updateProfile = createAction(
  UPDATE_PROFILE,
  (profileInfo: UpdateProfileInputDto) => ({
    profileInfo,
  }),
);

export const updateSuccess = createAction(UPDATE_SUCCESS);
