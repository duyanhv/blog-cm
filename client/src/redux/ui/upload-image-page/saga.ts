import { put, all, takeEvery } from 'redux-saga/effects';
import {
  FetchImgList,
  starting,
  fetchImgList,
  fetchImgListSuccess,
  UpdateFilename,
  updateFilenameSuccess,
  updateFilename,
  DeleteImg,
  deleteImgSuccess,
  deleteImg,
  SubmitNewAlbum,
  submitNewAlbum,
  submitNewAlbumSuccess,
} from './action';
import { message, getErrorMessage } from '../../../helpers';
import { getUploadImageService } from '../../../service-proxies/service.provider';

function* fetchImgListWorker(action: FetchImgList): any {
  try {
    yield put(starting());
    const uploadImageService = getUploadImageService();

    const response = yield uploadImageService.get(
      action.payload.search,
      action.payload.id,
    );

    yield put(fetchImgListSuccess(response));
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}

function* updateFilenameWorker(action: UpdateFilename): any {
  try {
    const uploadImageService = getUploadImageService();

    yield uploadImageService.updateFilename(action.payload.updateFilenameInfo);

    yield put(updateFilenameSuccess(action.payload.updateFilenameInfo.newName));
    message.success('Update Filename Success.', 2);
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}

function* deleteImageWorker(action: DeleteImg): any {
  try {
    yield put(starting());
    const uploadImageService = getUploadImageService();

    yield uploadImageService.deleteImage(action.payload.imageId);

    yield put(deleteImgSuccess(action.payload.imageId));
    message.success('Delete Image Success', 2);
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}

function* submitNewAlbumWorker(action: SubmitNewAlbum): any {
  try {
    yield put(starting());
    const uploadImageService = getUploadImageService();

    yield uploadImageService.createAlbum({
      albumName: action.payload.albumName,
    } as any);

    yield put(submitNewAlbumSuccess(action.payload.albumName));
    message.success('Create New Album Success', 2);
  } catch (error) {
    message.error(getErrorMessage(error), 1.5);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* uploadImgPageSaga(): any {
  yield all([
    takeEvery(fetchImgList, fetchImgListWorker),
    takeEvery(updateFilename, updateFilenameWorker),
    takeEvery(deleteImg, deleteImageWorker),
    takeEvery(submitNewAlbum, submitNewAlbumWorker),
  ]);
}
