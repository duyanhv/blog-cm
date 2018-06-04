import {
  FetchPostDetail,
  fetchPostDetailInProgress,
  fetchPostDetailSuccess,
  // fetchPostDetailError,
  fetchPostDetail,
  CreateNewPost,
  createNewPostInProgress,
  createNewPostSuccess,
  createNewPost,
  DeactivatePost,
  deactivatePostInProgress,
  deactivatePostSuccess,
  deactivatePost,
  ActivatePost,
  activatePostInProgress,
  activatePostSuccess,
  activatePost,
  EditBlogDetail,
  editBlogDetailInProgress,
  editBlogDetailSuccess,
  editBlogDetail,
  // GetAllPostTitle,
  // getAllPostTitleInProgress,
  // getAllPostTitleSuccess
} from './action';
import { put, takeEvery, all } from 'redux-saga/effects';
import { message } from 'antd';
import { getBlogService } from '../../../service-proxies/service.provider';

function* fetchPostDetailWorker(action: FetchPostDetail): any {
  try {
    const blogService = getBlogService();
    yield put(fetchPostDetailInProgress());
    const listPosts = yield blogService.getpost();
    yield put(fetchPostDetailSuccess(listPosts.data));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* createnewPostWorker(action: CreateNewPost): any {
  try {
    const blogService = getBlogService();
    yield put(createNewPostInProgress());
    blogService.newpost(action.payload.newPost);
    yield put(createNewPostSuccess());
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* deactivatePostWorker(action: DeactivatePost): any {
  try {
    const blogService = getBlogService();
    yield put(deactivatePostInProgress());
    blogService.deactivatePost(action.payload.id);
    yield put(deactivatePostSuccess());
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* activatePostWorker(action: ActivatePost): any {
  try {
    const blogService = getBlogService();
    yield put(activatePostInProgress());
    blogService.activatePost(action.payload.id);
    yield put(activatePostSuccess());
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* editBlogDetailWorker(action: EditBlogDetail): any {
  try {
    const blogService = getBlogService();
    yield put(editBlogDetailInProgress());
    blogService.edit(action.payload.id, action.payload.editedPost);
    yield put(editBlogDetailSuccess());
  } catch (error) {
    message.error(error, 1.5);
  }
}

// function* getAllPostTitleWorker(action: GetAllPostTitle): any {
//     try {
//         const blogService = getBlogService();
//         yield put(getAllPostTitleInProgress());
//         const allpostTitle = blogService.getAllPostTitle();
//         yield put(getAllPostTitleSuccess(allpostTitle));
//     } catch (error) {
//         message.error(error, 1.5);
//     }
// }

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* blogPageSaga(): any {
  yield all([
    takeEvery(fetchPostDetail, fetchPostDetailWorker),
    takeEvery(createNewPost, createnewPostWorker),
    takeEvery(deactivatePost, deactivatePostWorker),
    takeEvery(activatePost, activatePostWorker),
    takeEvery(editBlogDetail, editBlogDetailWorker),
  ]);
}
