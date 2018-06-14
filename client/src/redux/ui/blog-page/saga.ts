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
  SearchChange,
  searchChange,
  searchChangeSuccess,
  searchChangeInProgress,
  SearchByDateTime,
  searchByDateTimeInProgress,
  searchByDateTimeSuccess,
  searchByDateTime,
  ExcludeInactivePost,
  excludeInactivePostInProgress,
  includeInactivePostInProgress,
  IncludeInactivePost,
  includeInactivePostSuccess,
  excludeInactivePostSuccess,
  includeInactivePost,
  excludeInactivePost,
  createNewPostError,
  editBlogDetailError,
  // GetAllPostTitle,
  // getAllPostTitleInProgress,
  // getAllPostTitleSuccess
} from './action';
import { put, takeEvery, all } from 'redux-saga/effects';
import { message } from 'antd';
import { getBlogService } from '../../../service-proxies/service.provider';
// import { FindAllBlogPostsDto, FindBlogDetailDto, IFindBlogDetailDto } from '../../../service-proxies/service-proxies';

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
    const response = yield blogService.newpost(action.payload.newPost)
      .then(
        (data) => {
          return {
            isPostCreated: true,
          };
        },
        (error) => {
          return {
            isPostCreated: false,
            error: error.response,
          };
        }
      );
    if (response.isPostCreated) {
      yield put(createNewPostSuccess());
      const listPosts = yield blogService.getpost();
      yield put(fetchPostDetailSuccess(listPosts.data));
    } else {
      yield put(createNewPostError(response.error));
    }

  } catch (error) {
    message.error(error, 1.5);
  }
}

function* deactivatePostWorker(action: DeactivatePost): any {
  try {
    const blogService = getBlogService();
    yield put(deactivatePostInProgress());
    yield blogService.deactivatePost(action.payload.id);
    yield put(deactivatePostSuccess());
    yield put(fetchPostDetailInProgress());
    const listPosts = yield blogService.getpost();
    yield put(fetchPostDetailSuccess(listPosts.data));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* activatePostWorker(action: ActivatePost): any {
  try {
    const blogService = getBlogService();
    yield put(activatePostInProgress());
    yield blogService.activatePost(action.payload.id);
    yield put(activatePostSuccess());
    yield put(fetchPostDetailInProgress());
    const listPosts = yield blogService.getpost();
    yield put(fetchPostDetailSuccess(listPosts.data));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* editBlogDetailWorker(action: EditBlogDetail): any {
  try {
    const blogService = getBlogService();
    yield put(editBlogDetailInProgress());
    const response = yield blogService.edit(action.payload.id, action.payload.editedPost)
      .then(
        (data) => {
          return {
            isPostEdited: true,
          };
        },
        (error) => {
          return {
            isPostEdited: true,
            error: error.reponse,
          };
        });
    if (response.isPostEdited) {
      yield put(editBlogDetailSuccess());
      const listPosts = yield blogService.getpost();
      yield put(fetchPostDetailSuccess(listPosts.data));
    } else {
      yield put(editBlogDetailError(response.error));
    }
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* searchChangeWorker(action: SearchChange): any {
  try {
    const blogService = getBlogService();
    yield put(searchChangeInProgress());
    const result = yield blogService.findPostByTitle(action.payload.searchInput);
    yield put(searchChangeSuccess(result));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* searchByDateTimeWorker(action: SearchByDateTime): any {
  try {
    const blogService = getBlogService();
    yield put(searchByDateTimeInProgress());
    const result = yield blogService.findPostByDate(action.payload.dateRangeInput);
    yield put(searchByDateTimeSuccess(result));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* excludeInactivePostWorker(action: ExcludeInactivePost): any {
  try {
    const blogService = getBlogService();
    yield put(excludeInactivePostInProgress());
    const listPosts = yield blogService.getActivePost();
    yield put(excludeInactivePostSuccess(listPosts.data));
  } catch (error) {
    message.error(error, 1.5);
  }
}

function* includeInactivePostWorker(action: IncludeInactivePost): any {
  try {
    yield put(includeInactivePostInProgress());
    yield put(includeInactivePostSuccess());
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
    takeEvery(searchChange, searchChangeWorker),
    takeEvery(searchByDateTime, searchByDateTimeWorker),
    takeEvery(includeInactivePost, includeInactivePostWorker),
    takeEvery(excludeInactivePost, excludeInactivePostWorker),
  ]);
}
