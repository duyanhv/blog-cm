import { handleActions } from 'redux-actions';
import AppSettingsState from './state';
import {
  UpdateUrlSettings,
  UpdateAppSettings,
  UPDATE_APP_SETTINGS,
  LanguageChange,
  LanguageChangeSuccess,
  LANGUAGE_CHANGE,
  LANGUAGE_CHANGE_SUCCESS,
  LanguageChangeFailed,
  LANGUAGE_CHANGE_FAILED,
  UPDATE_URL_SETTINGS,
} from './action';

const defaultState: AppSettingsState = {
  language: 'en',
  isTranslating: false,
  apiUrl: '',
  appBaseUrl: '',
  maxPageSize: 0,
  gridPage: {
    defaultPageSize: 0,
    pageSizes: [],
  },
};

const updateUrlSettingsReducer = (state: AppSettingsState, action: UpdateUrlSettings) => {
  return {
    ...state,
    apiUrl: action.payload.apiUrl,
    appBaseUrl: action.payload.appBaseUrl,
  };
};

const updateAppSettingsReducer = (
  state: AppSettingsState,
  action: UpdateAppSettings,
) => {
  return {
    ...state,
    maxPageSize: action.payload.maxPageSize,
    gridPage: action.payload.gridPage,
  };
};

const languageChangeReducer = (
  state: AppSettingsState,
  action: LanguageChange,
) => {
  return {
    ...state,
    isTranslating: true,
  };
};

const languageChangeSuccessReducer = (
  state: AppSettingsState,
  action: LanguageChangeSuccess,
) => {
  return {
    ...state,
    isTranslating: false,
    language: action.payload.newLanguage,
  };
};

const languageChangeFailedReducer = (
  state: AppSettingsState,
  action: LanguageChangeFailed,
) => {
  return {
    ...state,
    isTranslating: false,
  };
};

const appSettingsReducer = handleActions<AppSettingsState, any>(
  {
    [UPDATE_URL_SETTINGS]: updateUrlSettingsReducer,
    [UPDATE_APP_SETTINGS]: updateAppSettingsReducer,
    [LANGUAGE_CHANGE]: languageChangeReducer,
    [LANGUAGE_CHANGE_SUCCESS]: languageChangeSuccessReducer,
    [LANGUAGE_CHANGE_FAILED]: languageChangeFailedReducer,
  },
  defaultState,
);

export { appSettingsReducer };
