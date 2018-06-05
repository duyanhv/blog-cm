import { handleActions } from 'redux-actions';
import CompanyPageState from './state';
import {
  CreateNewCompany,
  CreateCompanyinProgress,
  CREATE_NEW_COMPANY,
  CREATE_NEW_COMPANY_IN_PROGRESS,
  FetchCompanySuccess,
  FETCH_COMPANY_SUCCESS,
  FetchCompanyError,
  FETCH_COMPANY_ERROR,
  FetchCompanyInProgress,
  FETCH_COMPANY_IN_PROGRESS,
  CreateNewCompanySuccess,
  CREATE_NEW_COMPANY_SUCCESS,
  UploadCompanyLogo,
  UPLOAD_COMPANY_LOGO,
  UploadCompanyLogoSuccess,
  UPLOAD_COMPANY_LOGO_SUCCESS,
} from './action';
import { message } from '../../../helpers';

const CreateCompanyPageDefaultState = 1;
const CreateCompanyInProgressState = 2;
// const UpdateCompanyPageDefaultState = 1;
// const UpdateCompanyInProgressState = 2;

export { CreateCompanyPageDefaultState, CreateCompanyInProgressState };

const createCompanyReducer = (
  state: CompanyPageState,
  action: CreateNewCompany,
) => {
  return {
    ...state,
    state: CreateCompanyPageDefaultState,
    errorMessage: '',
  };
};

const createCompanyInProgressReducer = (
  state: CompanyPageState,
  action: CreateCompanyinProgress,
) => {
  return {
    ...state,
    state: CreateCompanyInProgressState,
    errorMessage: '',
    isBusy: true,
  };
};

const createCompanySuccessReducer = (
  state: CompanyPageState,
  action: CreateNewCompanySuccess,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

// const updateCompanyReducer = (
//     state: UpdateCompanyPage,
//     action: CreateNewCompany,
// ) => {
//     return {
//         ...state,
//         state: CreateCompanyPageDefaultState,
//         errorMessage: '',
//     };
// };

const fetchCompanySuccessReducer = (
  state: CompanyPageState,
  action: FetchCompanySuccess,
) => {
  return {
    ...state,
    countrynames: action.payload.countrynames,
    data: action.payload.data,
    isBusy: false,
    errorMessage: '',
  };
};

const fetchCompanyErrorReducer = (
  state: CompanyPageState,
  action: FetchCompanyError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const fetchCompanyInProgressReducer = (
  state: CompanyPageState,
  action: FetchCompanyInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const uploadCompanyLogoReducer = (
  state: CompanyPageState,
  action: UploadCompanyLogo,
) => {
  return {
    ...state,
    errorMessage: '',
  };
};

const uploadCompanyLogoSuccessReducer = (
  state: CompanyPageState,
  action: UploadCompanyLogoSuccess,
) => {
  message.success('Upload Company Logo Success');
  return {
    ...state,
    errorMessage: '',
    imageSrc: action.payload.imageSrc,
  };
};

const companyPageReducer = handleActions<CompanyPageState, any>(
  {
    [CREATE_NEW_COMPANY]: createCompanyReducer,
    [CREATE_NEW_COMPANY_IN_PROGRESS]: createCompanyInProgressReducer,
    [FETCH_COMPANY_SUCCESS]: fetchCompanySuccessReducer,
    [FETCH_COMPANY_ERROR]: fetchCompanyErrorReducer,
    [FETCH_COMPANY_IN_PROGRESS]: fetchCompanyInProgressReducer,
    [CREATE_NEW_COMPANY_SUCCESS]: createCompanySuccessReducer,
    [UPLOAD_COMPANY_LOGO]: uploadCompanyLogoReducer,
    [UPLOAD_COMPANY_LOGO_SUCCESS]: uploadCompanyLogoSuccessReducer,
  },
  {
    state: CreateCompanyPageDefaultState,
    errorMessage: '',
    data: {
      companyname: '',
      /** telephone */
      telephone: '',
      /** streetline1 */
      streetline1: '',
      /** streetline2 */
      streetline2: '',
      /** city */
      city: '',
      /** state */
      state: '',
      /** zipcode */
      zipcode: '',
      /** country */
      country: '',
      /** logo */
      logo: '',
      /** facebookurl */
      facebookurl: '',
      /** twitterurl */
      twitterurl: '',
      /** googleplusurl */
      googleplusurl: '',
      /** linkedidurl */
      linkedidurl: '',
    },
    isBusy: false,
    imageSrc: '',
    countrynames: {},
  },
);

export { companyPageReducer };
