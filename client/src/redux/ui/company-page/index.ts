import CompanyPageState from './state';

import {
  createNewCompany,
  createNewComapnyInProgress,
  fetchCompany,
  fetchCompanyError,
  fetchCompanySuccess,
  FETCH_COMPANY,
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_SUCCESS,
  uploadCompanyLogo,
  uploadCompanyLogoSuccess,
} from './action';

import {
  companyPageReducer,
  CreateCompanyInProgressState,
  CreateCompanyPageDefaultState,
} from './reducer';

import companyPageSaga from './saga';

export {
  CompanyPageState,
  createNewCompany,
  createNewComapnyInProgress,
  companyPageReducer,
  CreateCompanyInProgressState,
  CreateCompanyPageDefaultState,
  companyPageSaga,
  fetchCompany,
  fetchCompanyError,
  fetchCompanySuccess,
  FETCH_COMPANY,
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_SUCCESS,
  uploadCompanyLogo,
  uploadCompanyLogoSuccess,
};
