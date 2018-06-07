import {
  Login,
  loginInProgress,
  loginUnsuccessfully,
  login,
  clearLoginPage,
} from './action';
import { getAuthService } from '../../../service-proxies/service.provider';
import {
  LoginUserInputDto,
  TokenInfoDto,
} from '../../../service-proxies/service-proxies';
import { put, all, takeEvery } from 'redux-saga/effects';
import { getErrorMessage } from '../../../helpers';
import { push } from 'react-router-redux';
import { RouteUrls } from '../../../routes/routes.constant';
import message from '../../../helpers/message';
import { updateUserProfile } from '../../profile';
import qs from 'qs';

function* loginWorker(action: Login): any {
  try {
    yield put(loginInProgress());

    const authService = getAuthService();
    const tokenInfo: TokenInfoDto = yield authService.login({
      username: action.payload.username,
      password: action.payload.password,
    } as LoginUserInputDto);

    yield message.success('Logged in successfully, redirecting...', 0.5);

    yield put(clearLoginPage());

    yield put(updateUserProfile(tokenInfo.token, action.payload.rememberMe));

    const callbackUrl = qs.parse(location.search, { ignoreQueryPrefix: true }).callbackUrl;
    if (callbackUrl) {
      yield put(push(callbackUrl));
    } else {
      yield put(push(`${RouteUrls.BaseUrl}${RouteUrls.Main}`));
    }
  } catch (error) {
    yield put(loginUnsuccessfully(getErrorMessage(error)));
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* loginPageSaga(): any {
  yield all([takeEvery(login, loginWorker)]);
}
