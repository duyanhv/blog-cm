import {
  createNewCompany,
  createNewComapnyInProgress,
  CreateNewCompany,
  FetchCompany,
  fetchCompanySuccess,
  fetchCompany,
  fetchCompanyInProgress,
  createNewCompanySuccess,
  UploadCompanyLogo,
  uploadCompanyLogo,
} from './action';
import { message, getErrorMessage } from '../../../helpers';
import { put, all, takeEvery } from 'redux-saga/effects';
import { getCompanyService } from '../../../service-proxies/service.provider';

function* createCompanyWorker(action: CreateNewCompany): any {
  try {
    yield put(createNewComapnyInProgress());
    const companyService = getCompanyService();
    const newCompany = yield companyService.update(action.payload.companyInfo);
    yield put(createNewCompanySuccess(newCompany));
    message.success('Update Company Success', 1.5);
  } catch (error) {
    message.error(getErrorMessage(error));
  }
}
function* fetchCompanyWorker(action: FetchCompany): any {
  try {
    yield put(fetchCompanyInProgress());
    const companyService = getCompanyService();
    const result = yield companyService.find();
    yield put(fetchCompanySuccess(result.data, result.countrynames));
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}
function* uploadCompanyLogoWorker(action: UploadCompanyLogo): any {
  try {
    const companyService = getCompanyService();
    yield companyService.upload();
    message.success('Update Company Logo Success', 1.5);
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* companyPageSaga(): any {
  yield all([
    takeEvery(createNewCompany, createCompanyWorker),
    takeEvery(fetchCompany, fetchCompanyWorker),
    takeEvery(uploadCompanyLogo, uploadCompanyLogoWorker),
  ]);
}
