import { put, all, takeEvery } from 'redux-saga/effects';
import {
  fetchProfile,
  updateProfile,
  FetchProfile,
  starting,
  fetchingSuccess,
  error,
  UpdateProfile,
  updateSuccess,
} from './action';
import {
  getProfileService,
  getAuthService,
} from '../../../service-proxies/service.provider';
import { message, getErrorMessage } from '../../../helpers';
import { RefreshTokenDto } from '../../../service-proxies/service-proxies';
import { TokenKey } from '../..';
import { updateUserProfile } from '../../profile';

function* fetchProfileWorker(action: FetchProfile): any {
  try {
    yield put(starting());

    const profileService = getProfileService();
    const profileInfo = yield profileService.get(action.payload.id);

    yield put(fetchingSuccess(profileInfo));
  } catch (err) {
    yield put(error(getErrorMessage(err)));
    message.error(err.message + '. Please try again !!', 2);
  }
}

function* updateProfileWorker(action: UpdateProfile): any {
  try {
    yield put(starting());

    const profileService = getProfileService();
    yield profileService.update(action.payload.profileInfo);

    const currentToken = localStorage.getItem(TokenKey);
    const authService = getAuthService();
    const { token } = yield authService.refreshToken(
      new RefreshTokenDto({ token: currentToken } as any),
    );
    yield put(updateUserProfile(token, true));

    yield put(updateSuccess());
    message.success('Update Profile Success', 1);
  } catch (err) {
    yield put(error(getErrorMessage(err)));
    message.error(err.message + '. Please try again !!', 2);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* profilePageSaga(): any {
  yield all([
    takeEvery(fetchProfile, fetchProfileWorker),
    takeEvery(updateProfile, updateProfileWorker),
  ]);
}
