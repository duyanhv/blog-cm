import { createAction } from 'redux-actions';

export const UPDATE_URL_SETTINGS = 'APP_SETTINGS/UPDATE_URL_SETTINGS';
export type UPDATE_URL_SETTINGS = typeof UPDATE_URL_SETTINGS;

export const LOAD_APP_SETTINGS = 'APP_SETTINGS/LOAD_APP_SETTINGS';
export type LOAD_APP_SETTINGS = typeof LOAD_APP_SETTINGS;

export const UPDATE_APP_SETTINGS = 'APP_SETTINGS/UPDATE_APP_SETTINGS';
export type UPDATE_APP_SETTINGS = typeof UPDATE_APP_SETTINGS;

export const LOAD_APP_SETTINGS_UNSUCCESSFUL =
  'APP_SETTINGS/LOAD_APP_SETTINGS_UNSUCCESSFUL';
export type LOAD_APP_SETTINGS_UNSUCCESSFUL = typeof LOAD_APP_SETTINGS_UNSUCCESSFUL;

export const LANGUAGE_CHANGE = 'APP_SETTINGS/LANGUAGE_CHANGE';
export type LANGUAGE_CHANGE = typeof LANGUAGE_CHANGE;

export const LANGUAGE_CHANGE_SUCCESS = 'APP_SETTINGS/LANGUAGE_CHANGE_SUCCESS';
export type LANGUAGE_CHANGE_SUCCESS = typeof LANGUAGE_CHANGE_SUCCESS;

export const LANGUAGE_CHANGE_FAILED = 'APP_SETTINGS/LANGUAGE_CHANGE_FAILED';
export type LANGUAGE_CHANGE_FAILED = typeof LANGUAGE_CHANGE_FAILED;

export interface UpdateUrlSettings {
  type: UPDATE_URL_SETTINGS;
  payload: {
    apiUrl: string;
    appBaseUrl: string;
  };
}

export interface LoadAppSettings {
  type: LOAD_APP_SETTINGS;
}

export interface UpdateAppSettings {
  type: UPDATE_APP_SETTINGS;
  payload: {
    maxPageSize: number;
    gridPage: {
      defaultPageSize: number;
      pageSizes: number[];
    };
  };
}

export interface LoadAppSettingsUnsuccessful {
  type: LOAD_APP_SETTINGS_UNSUCCESSFUL;
  payload: { errorMessage: string };
  error: boolean;
}

export interface LanguageChange {
  type: LANGUAGE_CHANGE;
}

export interface LanguageChangeSuccess {
  type: LANGUAGE_CHANGE_SUCCESS;
  payload: {
    newLanguage: string;
  };
}

export interface LanguageChangeFailed {
  type: LANGUAGE_CHANGE_FAILED;
}

const updateUrlSettings = createAction(UPDATE_URL_SETTINGS, (apiUrl: string, appBaseUrl: string) => ({
  apiUrl,
  appBaseUrl,
}));

const loadAppSettings = createAction(LOAD_APP_SETTINGS);

const updateAppSettings = createAction(
  UPDATE_APP_SETTINGS,
  (appSettings: any) => ({
    maxPageSize: appSettings.maxPageSize,
    gridPage: appSettings.gridPage,
  }),
);

const loadAppSettingsUnsuccessful = createAction(
  LOAD_APP_SETTINGS_UNSUCCESSFUL,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

const languageChange = createAction(LANGUAGE_CHANGE);

const languageChangeSuccess = createAction(
  LANGUAGE_CHANGE_SUCCESS,
  (newLanguage: string) => ({
    newLanguage,
  }),
);

const languageChangeFailed = createAction(LANGUAGE_CHANGE_FAILED);

export {
  updateUrlSettings,
  updateAppSettings,
  loadAppSettings,
  loadAppSettingsUnsuccessful,
  languageChange,
  languageChangeSuccess,
  languageChangeFailed,
};
