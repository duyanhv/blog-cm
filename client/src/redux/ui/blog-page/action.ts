import {
  IFindBlogDetailDto,
  CreateBlogInputDto,
  UpdateBlogDetailDto,
} from '../../../service-proxies/service-proxies';
import { createAction } from 'redux-actions';

export const FETCH_POST_DETAIL = 'BLOG_PAGE/FETCH_POST_DETAIL';
export type FETCH_POST_DETAIL = typeof FETCH_POST_DETAIL;

export const FETCH_POST_DETAIL_IN_PROGRESS =
  'BLOG_PAGE/FETCH_POST_DETAIL_IN_PROGRESS';
export type FETCH_POST_DETAIL_IN_PROGRESS = typeof FETCH_POST_DETAIL_IN_PROGRESS;

export const FETCH_POST_DETAIL_SUCCESS = 'BLOG_PAGE/FETCH_POST_DETAIL_SUCCESS';
export type FETCH_POST_DETAIL_SUCCESS = typeof FETCH_POST_DETAIL_SUCCESS;

export const FETCH_POST_DETAIL_ERROR = 'BLOG_PAGE/FETCH_POST_DETAIL_ERROR';
export type FETCH_POST_DETAIL_ERROR = typeof FETCH_POST_DETAIL_ERROR;

export const CREATE_NEW_POST = 'BLOG_PAGE/CREATE_NEW_POST';
export type CREATE_NEW_POST = typeof CREATE_NEW_POST;

export const CREATE_NEW_POST_IN_PROGRESS =
  'BLOG_PAGE/CREATE_NEW_POST_IN_PROGRESS';
export type CREATE_NEW_POST_IN_PROGRESS = typeof CREATE_NEW_POST_IN_PROGRESS;

export const CREATE_NEW_POST_SUCCESS = 'BLOG_PAGE/CREATE_NEW_POST_SUCCESS';
export type CREATE_NEW_POST_SUCCESS = typeof CREATE_NEW_POST_SUCCESS;

export const CREATE_NEW_POST_ERROR = 'BLOG_PAGE/CREATE_NEW_POST_ERROR';
export type CREATE_NEW_POST_ERROR = typeof CREATE_NEW_POST_ERROR;

export const DEACTIVATE_POST = 'BLOG_PAGE/DEACTIVATE_POST';
export type DEACTIVATE_POST = typeof DEACTIVATE_POST;

export const DEACTIVATE_POST_IN_PROGRESS =
  'BLOG_PAGE/DEACTIVATE_POST_IN_PROGRESS';
export type DEACTIVATE_POST_IN_PROGRESS = typeof DEACTIVATE_POST_IN_PROGRESS;

export const DEACTIVATE_POST_SUCCESS = 'BLOG_PAGE/DEACTIVATE_POST_SUCCESS';
export type DEACTIVATE_POST_SUCCESS = typeof DEACTIVATE_POST_SUCCESS;

export const DEACTIVATE_POST_ERROR = 'BLOG_PAGE/DEACTIVATE_POST_ERROR';
export type DEACTIVATE_POST_ERROR = typeof DEACTIVATE_POST_ERROR;

export const ACTIVATE_POST = 'BLOG_PAGE/ACTIVATE_POST';
export type ACTIVATE_POST = typeof ACTIVATE_POST;

export const ACTIVATE_POST_IN_PROGRESS = 'BLOG_PAGE/ACTIVATE_POST_IN_PROGRESS';
export type ACTIVATE_POST_IN_PROGRESS = typeof ACTIVATE_POST_IN_PROGRESS;

export const ACTIVATE_POST_SUCCESS = 'BLOG_PAGE/ACTIVATE_POST_SUCCESS';
export type ACTIVATE_POST_SUCCESS = typeof ACTIVATE_POST_SUCCESS;

export const ACTIVATE_POST_ERROR = 'BLOG_PAGE/ACTIVATE_POST_ERROR';
export type ACTIVATE_POST_ERROR = typeof ACTIVATE_POST_ERROR;

export const EDIT_BLOG_DETAIL = 'BLOG_PAGE/EDIT_BLOG_DETAIL';
export type EDIT_BLOG_DETAIL = typeof EDIT_BLOG_DETAIL;

export const EDIT_BLOG_DETAIL_IN_PROGRESS =
  'BLOG_PAGE/EDIT_BLOG_DETAIL_IN_PROGRESS';
export type EDIT_BLOG_DETAIL_IN_PROGRESS = typeof EDIT_BLOG_DETAIL_IN_PROGRESS;

export const EDIT_BLOG_DETAIL_SUCCESS = 'BLOG_PAGE/EDIT_BLOG_DETAIL_SUCCESS';
export type EDIT_BLOG_DETAIL_SUCCESS = typeof EDIT_BLOG_DETAIL_SUCCESS;

export const EDIT_BLOG_DETAIL_ERROR = 'BLOG_PAGE/EDIT_BLOG_DETAIL_ERROR';
export type EDIT_BLOG_DETAIL_ERROR = typeof EDIT_BLOG_DETAIL_ERROR;

export type BlogPageAction =
  | FetchPostDetail
  | FetchPostDetailInProgress
  | FetchPostDetailSuccess
  | FetchPostDetailError
  | CreateNewPost
  | CreateNewPostInProgress
  | CreateNewPostSuccess
  | CreateNewPostError
  | DeactivatePost
  | DeactivatePostInProgress
  | DeactivatePostSuccess
  | DeactivatePostError
  | ActivatePost
  | ActivatePostInProgress
  | ActivatePostSuccess
  | ActivatePostError
  | EditBlogDetail
  | EditBlogDetailInProgress
  | EditBlogDetailSuccess
  | EditBlogDetailError;

export interface EditBlogDetail {
  type: EDIT_BLOG_DETAIL;
  payload: {
    id: string;
    editedPost: UpdateBlogDetailDto;
  };
}

export interface EditBlogDetailInProgress {
  type: EDIT_BLOG_DETAIL_IN_PROGRESS;
}

export interface EditBlogDetailSuccess {
  type: EDIT_BLOG_DETAIL_SUCCESS;
}

export interface EditBlogDetailError {
  type: EDIT_BLOG_DETAIL_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface ActivatePost {
  type: ACTIVATE_POST;
  payload: {
    id: string;
  };
}

export interface ActivatePostInProgress {
  type: ACTIVATE_POST_IN_PROGRESS;
}

export interface ActivatePostSuccess {
  type: ACTIVATE_POST_SUCCESS;
}

export interface ActivatePostError {
  type: ACTIVATE_POST_ERROR;
  payload: {
    errorMessage: string;
  };
}
export interface DeactivatePost {
  type: DEACTIVATE_POST;
  payload: {
    id: string;
  };
}

export interface DeactivatePostInProgress {
  type: DEACTIVATE_POST_IN_PROGRESS;
}

export interface DeactivatePostSuccess {
  type: DEACTIVATE_POST_SUCCESS;
}

export interface DeactivatePostError {
  type: DEACTIVATE_POST_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface CreateNewPost {
  type: CREATE_NEW_POST;
  payload: {
    newPost: CreateBlogInputDto;
  };
}

export interface CreateNewPostInProgress {
  type: CREATE_NEW_POST_IN_PROGRESS;
}

export interface CreateNewPostSuccess {
  type: CREATE_NEW_POST_SUCCESS;
}

export interface CreateNewPostError {
  type: CREATE_NEW_POST_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface FetchPostDetail {
  type: FETCH_POST_DETAIL;
}

export interface FetchPostDetailInProgress {
  type: FETCH_POST_DETAIL_IN_PROGRESS;
}

export interface FetchPostDetailSuccess {
  type: FETCH_POST_DETAIL_SUCCESS;
  payload: {
    data: IFindBlogDetailDto[];
  };
}

export interface FetchPostDetailError {
  type: FETCH_POST_DETAIL_ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

// Fetch Post Data Action
export const fetchPostDetail = createAction(FETCH_POST_DETAIL);
export const fetchPostDetailInProgress = createAction(
  FETCH_POST_DETAIL_IN_PROGRESS,
);
export const fetchPostDetailSuccess = createAction(
  FETCH_POST_DETAIL_SUCCESS,
  (data: IFindBlogDetailDto[]) => ({
    data,
  }),
);
export const fetchPostDetailError = createAction(
  FETCH_POST_DETAIL_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Create New Post Action
export const createNewPost = createAction(
  CREATE_NEW_POST,
  (newPost: CreateBlogInputDto) => ({
    newPost,
  }),
);
export const createNewPostInProgress = createAction(
  CREATE_NEW_POST_IN_PROGRESS,
);
export const createNewPostSuccess = createAction(CREATE_NEW_POST_SUCCESS);
export const createNewPostError = createAction(
  CREATE_NEW_POST_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Deactivate Post
export const deactivatePost = createAction(DEACTIVATE_POST, (id: string) => ({
  id,
}));
export const deactivatePostInProgress = createAction(
  DEACTIVATE_POST_IN_PROGRESS,
);
export const deactivatePostSuccess = createAction(DEACTIVATE_POST_SUCCESS);
export const deactivatePostError = createAction(
  DEACTIVATE_POST_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Activate Post
export const activatePost = createAction(ACTIVATE_POST, (id: string) => ({
  id,
}));
export const activatePostInProgress = createAction(ACTIVATE_POST_IN_PROGRESS);
export const activatePostSuccess = createAction(ACTIVATE_POST_SUCCESS);
export const activatePostError = createAction(
  ACTIVATE_POST_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Edit Post
export const editBlogDetail = createAction(
  EDIT_BLOG_DETAIL,
  (id: string, editedPost: UpdateBlogDetailDto) => ({
    id,
    editedPost,
  }),
);

export const editBlogDetailInProgress = createAction(
  EDIT_BLOG_DETAIL_IN_PROGRESS,
);

export const editBlogDetailSuccess = createAction(EDIT_BLOG_DETAIL_SUCCESS);

export const editBlogDetailError = createAction(
  EDIT_BLOG_DETAIL_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);
