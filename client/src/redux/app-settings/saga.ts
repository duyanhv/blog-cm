import { put, all, takeEvery } from 'redux-saga/effects';
import {
  LoadAppSettings,
  loadAppSettings,
  loadAppSettingsUnsuccessful,
  updateAppSettings,
} from './action';
import { getErrorMessage } from '../../helpers';
import { getAppSettingService } from '../../service-proxies/service.provider';

function* loadAppSettingsWorker(action: LoadAppSettings): any {
  try {
    const appSettingsService = getAppSettingService();
    const appSettings = yield appSettingsService.get();

    yield put(updateAppSettings(appSettings));
  } catch (error) {
    yield put(loadAppSettingsUnsuccessful(getErrorMessage(error)));
  }
}

export default function* loadAppSettingsSaga(): any {
  yield all([takeEvery(loadAppSettings, loadAppSettingsWorker)]);
}
