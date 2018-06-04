import { RouteUrls } from '../../routes/routes.constant';
import { push } from 'react-router-redux';
import { put, all, takeEvery, select } from 'redux-saga/effects';
import { clearUserProfile } from '.';
import { logout } from './action';
import { AppState } from '..';
import { loginWithUsername } from '../ui/login-page';

function* logoutWorker(): any {
  const username = ((yield select()) as AppState).profile.username;
  yield put(clearUserProfile());
  yield put(loginWithUsername(username));
  yield put(push(`${RouteUrls.BaseUrl}${RouteUrls.Login}`));
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* profileSaga(): any {
  yield all([takeEvery(logout, logoutWorker)]);
}
