import { createAction } from 'redux-actions';
import { CreateCompanyInputDto } from '../../../service-proxies/service-proxies';
// CreateCompanyInputDto, UpdateCompanyInputDto,
export const CREATE_NEW_COMPANY = 'COMPANY_PAGE/CREATE_NEW_COMPANY';
export type CREATE_NEW_COMPANY = typeof CREATE_NEW_COMPANY;

export const UPDATE_COMPANY = 'COMPANY_PAGE/UPDATE_COMPANY';
export type UPDATE_COMPANY = typeof UPDATE_COMPANY;

export const CREATE_NEW_COMPANY_IN_PROGRESS =
  'COMPANY_PAGE/CREATE_NEW_COMPANY_IN_PROGRESS';
export type CREATE_NEW_COMPANY_IN_PROGRESS = typeof CREATE_NEW_COMPANY_IN_PROGRESS;

export const CREATE_NEW_COMPANY_SUCCESS =
  'COMPANY_PAGE/CREATE_NEW_COMPANY_SUCCESS';
export type CREATE_NEW_COMPANY_SUCCESS = typeof CREATE_NEW_COMPANY_SUCCESS;

export const UPDATE_COMPANY_IN_PROGRESS =
  'COMPANY_PAGE/UPDATE_COMPANY_IN_PROGRESS';
export type UPDATE_COMPANY_IN_PROGRESS = typeof UPDATE_COMPANY_IN_PROGRESS;

export const FETCH_COMPANY = 'MAIN_PAGE/FETCH_COMPANY';
export type FETCH_COMPANY = typeof FETCH_COMPANY;

export const FETCH_COMPANY_IN_PROGRESS =
  'COMPANY_PAGE/FETCH_COMPANY_IN_PROGRESS';
export type FETCH_COMPANY_IN_PROGRESS = typeof FETCH_COMPANY_IN_PROGRESS;

export const FETCH_COMPANY_SUCCESS = 'MAIN_PAGE/FETCH_COMPANY_SUCCESS';
export type FETCH_COMPANY_SUCCESS = typeof FETCH_COMPANY_SUCCESS;

export const FETCH_COMPANY_ERROR = 'MAIN_PAGE/FETCH_COMPANY_ERROR';
export type FETCH_COMPANY_ERROR = typeof FETCH_COMPANY_ERROR;

export const UPLOAD_COMPANY_LOGO = 'MAIN_PAGE/UPLOAD_COMPANY_LOGO';
export type UPLOAD_COMPANY_LOGO = typeof UPLOAD_COMPANY_LOGO;

export const UPLOAD_COMPANY_LOGO_SUCCESS =
  'MAIN_PAGE/UPLOAD_COMPANY_LOGO_SUCCESS';
export type UPLOAD_COMPANY_LOGO_SUCCESS = typeof UPLOAD_COMPANY_LOGO_SUCCESS;

export interface CreateNewCompany {
  type: CREATE_NEW_COMPANY;
  payload: {
    companyInfo: CreateCompanyInputDto;
  };
}

export interface CreateNewCompanySuccess {
  type: CREATE_NEW_COMPANY_SUCCESS;
}

export interface CreateCompanyinProgress {
  type: CREATE_NEW_COMPANY_IN_PROGRESS;
}

export interface UploadCompanyLogoSuccess {
  type: UPLOAD_COMPANY_LOGO_SUCCESS;
  payload: {
    imageSrc: any;
  };
}

export type CompanyPageAction =
  | CreateNewCompany
  | CreateNewCompanySuccess
  // | UpdateCompany
  | FetchCompanySuccess
  | FetchCompanyError
  | FetchCompanyInProgress
  | FetchCompany
  | UploadCompanyLogo
  | UploadCompanyLogoSuccess;

export interface FetchCompany {
  type: FETCH_COMPANY;
}

export interface UploadCompanyLogo {
  type: UPLOAD_COMPANY_LOGO;
  payload: {
    file: any;
  };
}

export interface FetchCompanyInProgress {
  type: FETCH_COMPANY_IN_PROGRESS;
}

export interface FetchCompanySuccess {
  type: FETCH_COMPANY_SUCCESS;
  payload: {
    data: any;
    countrynames: {};
  };
}

export interface FetchCompanyError {
  type: FETCH_COMPANY_ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

export const fetchCompany = createAction(FETCH_COMPANY);
export const fetchCompanyInProgress = createAction(FETCH_COMPANY_IN_PROGRESS);
export const fetchCompanySuccess = createAction(
  FETCH_COMPANY_SUCCESS,
  (data: any, countrynames: {}) => ({
    data,
    countrynames,
  }),
);

export const fetchCompanyError = createAction(
  FETCH_COMPANY_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

export const uploadCompanyLogo = createAction(UPLOAD_COMPANY_LOGO);

export const uploadCompanyLogoSuccess = createAction(
  UPLOAD_COMPANY_LOGO_SUCCESS,
  (imageSrc: any) => ({
    imageSrc,
  }),
);

const createNewCompany = createAction(
  CREATE_NEW_COMPANY,
  (companyInfo: CreateCompanyInputDto) => ({
    companyInfo,
  }),
);

const createNewCompanySuccess = createAction(
  CREATE_NEW_COMPANY_SUCCESS,
  (updateOrCreate: boolean) => ({
    result: updateOrCreate
      ? 'Create Company Success'
      : 'Update Company Success',
  }),
);

const createNewComapnyInProgress = createAction(CREATE_NEW_COMPANY_IN_PROGRESS);

export interface CreateCompanyParams {
  companyname: String;
  telephone: String;
  streetline1: String;
  streetline2: String;
  city: String;
  state: String;
  zipcode: String;
  country: String;
  logo: String;
  facebookurl: String;
  twitterurl: String;
  googleplusurl: String;
  linkedidurl: String;
}
export {
  createNewCompany,
  // updateCompany,
  createNewComapnyInProgress,
  createNewCompanySuccess,
};
