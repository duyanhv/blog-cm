import BlogPageState from './state';
import {
  FetchPostDetail,
  FetchPostDetailError,
  FETCH_POST_DETAIL,
  FETCH_POST_DETAIL_IN_PROGRESS,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_ERROR,
  FetchPostDetailInProgress,
  FetchPostDetailSuccess,
  CreateNewPost,
  CreateNewPostInProgress,
  CreateNewPostSuccess,
  CreateNewPostError,
  CREATE_NEW_POST,
  CREATE_NEW_POST_IN_PROGRESS,
  CREATE_NEW_POST_SUCCESS,
  CREATE_NEW_POST_ERROR,
  DeactivatePost,
  DeactivatePostInProgress,
  DeactivatePostSuccess,
  DeactivatePostError,
  DEACTIVATE_POST,
  DEACTIVATE_POST_IN_PROGRESS,
  DEACTIVATE_POST_SUCCESS,
  DEACTIVATE_POST_ERROR,
  ActivatePost,
  ActivatePostInProgress,
  ActivatePostSuccess,
  ActivatePostError,
  ACTIVATE_POST,
  ACTIVATE_POST_IN_PROGRESS,
  ACTIVATE_POST_SUCCESS,
  ACTIVATE_POST_ERROR,
  EditBlogDetail,
  EditBlogDetailInProgress,
  EditBlogDetailSuccess,
  EditBlogDetailError,
  EDIT_BLOG_DETAIL,
  EDIT_BLOG_DETAIL_IN_PROGRESS,
  EDIT_BLOG_DETAIL_SUCCESS,
  EDIT_BLOG_DETAIL_ERROR,
} from './action';
import { handleActions } from 'redux-actions';
import { message } from 'antd';

const createNewPostReducer = (state: BlogPageState, action: CreateNewPost) => {
  return {
    ...state,
    errorMessage: '',
  };
};

const createNewPostInProgressReducer = (
  state: BlogPageState,
  action: CreateNewPostInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const createNewPostSuccessReducer = (
  state: BlogPageState,
  action: CreateNewPostSuccess,
) => {
  message.success('Create New Post Successfully', 1.5);
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const createNewPostErrorReducer = (
  state: BlogPageState,
  action: CreateNewPostError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const fetchPostDetailReducer = (
  state: BlogPageState,
  action: FetchPostDetail,
) => {
  return {
    ...state,
    errorMessage: '',
  };
};

const fetchPostDetailInProgressReducer = (
  state: BlogPageState,
  action: FetchPostDetailInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const fetchPostDetailSuccessReducer = (
  state: BlogPageState,
  action: FetchPostDetailSuccess,
) => {
  return {
    ...state,
    data: action.payload.data,
    errorMessage: '',
    isBusy: false,
  };
};

const fetchPostDetailErrorReducer = (
  state: BlogPageState,
  action: FetchPostDetailError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const deactivatePostReducer = (
  state: BlogPageState,
  action: DeactivatePost,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const deactivatePostInProgressReducer = (
  state: BlogPageState,
  action: DeactivatePostInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const deactivatePostSuccessReducer = (
  state: BlogPageState,
  action: DeactivatePostSuccess,
) => {
  message.success('Deactivate Post Successfully', 1.5);
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
    deactivateStatus: 'Activate',
  };
};

const deactivatePostErrorReducer = (
  state: BlogPageState,
  action: DeactivatePostError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const activatePostReducer = (state: BlogPageState, action: ActivatePost) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const activatePostInProgressReducer = (
  state: BlogPageState,
  action: ActivatePostInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const activatePostSuccessReducer = (
  state: BlogPageState,
  action: ActivatePostSuccess,
) => {
  message.success('Activate Post Successfully', 1.5);
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
    deactivateStatus: 'Deactivate',
  };
};

const activatePostErrorReducer = (
  state: BlogPageState,
  action: ActivatePostError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const editBlogDetailReducer = (
  state: BlogPageState,
  action: EditBlogDetail,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const editBlogDetailInProgressReducer = (
  state: BlogPageState,
  action: EditBlogDetailInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const editBlogDetailSuccessReducer = (
  state: BlogPageState,
  action: EditBlogDetailSuccess,
) => {
  message.success('Edited Post Successfully', 1.5);
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const editBlogDetailErrorReducer = (
  state: BlogPageState,
  action: EditBlogDetailError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const blogPageReducer = handleActions<BlogPageState, any>(
  {
    [EDIT_BLOG_DETAIL]: editBlogDetailReducer,
    [EDIT_BLOG_DETAIL_IN_PROGRESS]: editBlogDetailInProgressReducer,
    [EDIT_BLOG_DETAIL_SUCCESS]: editBlogDetailSuccessReducer,
    [EDIT_BLOG_DETAIL_ERROR]: editBlogDetailErrorReducer,
    [ACTIVATE_POST]: activatePostReducer,
    [ACTIVATE_POST_IN_PROGRESS]: activatePostInProgressReducer,
    [ACTIVATE_POST_SUCCESS]: activatePostSuccessReducer,
    [ACTIVATE_POST_ERROR]: activatePostErrorReducer,
    [DEACTIVATE_POST]: deactivatePostReducer,
    [DEACTIVATE_POST_IN_PROGRESS]: deactivatePostInProgressReducer,
    [DEACTIVATE_POST_SUCCESS]: deactivatePostSuccessReducer,
    [DEACTIVATE_POST_ERROR]: deactivatePostErrorReducer,
    [FETCH_POST_DETAIL]: fetchPostDetailReducer,
    [FETCH_POST_DETAIL_IN_PROGRESS]: fetchPostDetailInProgressReducer,
    [FETCH_POST_DETAIL_SUCCESS]: fetchPostDetailSuccessReducer,
    [FETCH_POST_DETAIL_ERROR]: fetchPostDetailErrorReducer,
    [CREATE_NEW_POST]: createNewPostReducer,
    [CREATE_NEW_POST_IN_PROGRESS]: createNewPostInProgressReducer,
    [CREATE_NEW_POST_SUCCESS]: createNewPostSuccessReducer,
    [CREATE_NEW_POST_ERROR]: createNewPostErrorReducer,
  },
  {
    errorMessage: '',
    data: [],
    isBusy: false,
    deactivateStatus: '',
  },
);

export { blogPageReducer };
