import {
  IFindBlogDetailDto,
  CreateBlogInputDto,
  UpdateBlogDetailDto,
  // FindBlogDetailDto,
  SearchInputDto,
  FindAllBlogPostsDto,
  DateRangeInputDto,
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

export const SEARCH_CHANGE = 'BLOG_PAGE/SEARCH_CHANGE';
export type SEARCH_CHANGE = typeof SEARCH_CHANGE;

export const SEARCH_CHANGE_IN_PROGRESS = 'BLOG_PAGE/SEARCH_CHANGE_IN_PROGRESS';
export type SEARCH_CHANGE_IN_PROGRESS = typeof SEARCH_CHANGE_IN_PROGRESS;

export const SEARCH_CHANGE_SUCCESS = 'BLOG_PAGE/SEARCH_CHANGE_SUCCESS';
export type SEARCH_CHANGE_SUCCESS = typeof SEARCH_CHANGE_SUCCESS;

export const SEARCH_CHANGE_ERROR = 'BLOG_PAGE/SEARCH_CHANGE_ERROR';
export type SEARCH_CHANGE_ERROR = typeof SEARCH_CHANGE_ERROR;

export const SEARCH_BY_DATE_TIME = 'BLOG_PAGE/SEARCH_BY_DATE_TIME';
export type SEARCH_BY_DATE_TIME = typeof SEARCH_BY_DATE_TIME;

export const SEARCH_BY_DATE_TIME_IN_PROGRESS = 'BLOG_PAGE/SEARCH_BY_DATE_TIME_IN_PROGRESS';
export type SEARCH_BY_DATE_TIME_IN_PROGRESS = typeof SEARCH_BY_DATE_TIME_IN_PROGRESS;

export const SEARCH_BY_DATE_TIME_SUCCESS = 'BLOG_PAGE/SEARCH_BY_DATE_TIME_SUCCESS';
export type SEARCH_BY_DATE_TIME_SUCCESS = typeof SEARCH_BY_DATE_TIME_SUCCESS;

export const SEARCH_BY_DATE_TIME_ERROR = 'BLOG_PAGE/SEARCH_BY_DATE_TIME_ERROR';
export type SEARCH_BY_DATE_TIME_ERROR = typeof SEARCH_BY_DATE_TIME_ERROR;

export const INCLUDE_INACTIVE_POST = 'BLOG_PAGE/INCLUDE_INACTIVE_POST';
export type INCLUDE_INACTIVE_POST = typeof INCLUDE_INACTIVE_POST;

export const INCLUDE_INACTIVE_POST_IN_PROGRESS = 'BLOG_PAGE/INCLUDE_INACTIVE_POST_IN_PROGRESS';
export type INCLUDE_INACTIVE_POST_IN_PROGRESS = typeof INCLUDE_INACTIVE_POST_IN_PROGRESS;

export const INCLUDE_INACTIVE_POST_SUCCESS = 'BLOG_PAGE/INCLUDE_INACTIVE_POST_SUCCESS';
export type INCLUDE_INACTIVE_POST_SUCCESS = typeof INCLUDE_INACTIVE_POST_SUCCESS;

export const INCLUDE_INACTIVE_POST_ERROR = 'BLOG_PAGE/INCLUDE_INACTIVE_POST_ERROR';
export type INCLUDE_INACTIVE_POST_ERROR = typeof INCLUDE_INACTIVE_POST_ERROR;

export const EXCLUDE_INACTIVE_POST = 'BLOG_PAGE/EXCLUDE_INACTIVE_POST';
export type EXCLUDE_INACTIVE_POST = typeof EXCLUDE_INACTIVE_POST;

export const EXCLUDE_INACTIVE_POST_IN_PROGRESS = 'BLOG_PAGE/EXCLUDE_INACTIVE_POST_IN_PROGRESS';
export type EXCLUDE_INACTIVE_POST_IN_PROGRESS = typeof EXCLUDE_INACTIVE_POST_IN_PROGRESS;

export const EXCLUDE_INACTIVE_POST_SUCCESS = 'BLOG_PAGE/EXCLUDE_INACTIVE_POST_SUCCESS';
export type EXCLUDE_INACTIVE_POST_SUCCESS = typeof EXCLUDE_INACTIVE_POST_SUCCESS;

export const EXCLUDE_INACTIVE_POST_ERROR = 'BLOG_PAGE/EXCLUDE_INACTIVE_POST_ERROR';
export type EXCLUDE_INACTIVE_POST_ERROR = typeof EXCLUDE_INACTIVE_POST_ERROR;

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
  | EditBlogDetailError
  | SearchChange
  | SearchChangeInProgress
  | SearchChangeSuccess
  | SearchChangeError
  | SearchByDateTime
  | SearchByDateTimeInProgress
  | SearchByDateTimeSuccess
  | SearchByDateTimeError
  | ExcludeInactivePost
  | ExcludeInactivePostInProgress
  | ExcludeInactivePostSuccess
  | ExcludeInactivePostError
  | IncludeInactivePost
  | IncludeInactivePostInProgress
  | IncludeInactivePostSuccess
  | IncludeInactivePostError;

export interface ExcludeInactivePost {
  type: EXCLUDE_INACTIVE_POST;
}

export interface ExcludeInactivePostInProgress {
  type: EXCLUDE_INACTIVE_POST_IN_PROGRESS;
}

export interface ExcludeInactivePostSuccess {
  type: EXCLUDE_INACTIVE_POST_SUCCESS;
  payload: {
    data: IFindBlogDetailDto[];
  };
}

export interface ExcludeInactivePostError {
  type: EXCLUDE_INACTIVE_POST_ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

export interface IncludeInactivePost {
  type: INCLUDE_INACTIVE_POST;
}

export interface IncludeInactivePostInProgress {
  type: INCLUDE_INACTIVE_POST_IN_PROGRESS;
}

export interface IncludeInactivePostSuccess {
  type: INCLUDE_INACTIVE_POST_SUCCESS;
}

export interface IncludeInactivePostError {
  type: INCLUDE_INACTIVE_POST_ERROR;
  payload: {
    errorMessage: string;
  };
  error: boolean;
}

export interface SearchByDateTime {
  type: SEARCH_BY_DATE_TIME;
  payload: {
    dateRangeInput: DateRangeInputDto;
  };
}

export interface SearchByDateTimeInProgress {
  type: SEARCH_BY_DATE_TIME_IN_PROGRESS;
}

export interface SearchByDateTimeSuccess {
  type: SEARCH_BY_DATE_TIME_SUCCESS;
  payload: {
    result: FindAllBlogPostsDto;
  };
}

export interface SearchByDateTimeError {
  type: SEARCH_BY_DATE_TIME_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface SearchChange {
  type: SEARCH_CHANGE;
  payload: {
    searchInput: SearchInputDto;
  };
}

export interface SearchChangeInProgress {
  type: SEARCH_CHANGE_IN_PROGRESS;
}

export interface SearchChangeSuccess {
  type: SEARCH_CHANGE_SUCCESS;
  payload: {
    result: FindAllBlogPostsDto;
  };
}

export interface SearchChangeError {
  type: SEARCH_CHANGE_ERROR;
  payload: {
    errorMessage: string;
  };
}

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

// Search By Title
export const searchChange = createAction(
  SEARCH_CHANGE,
  (searchInput: SearchInputDto) => ({
    searchInput,
  }),
);

export const searchChangeInProgress = createAction(
  SEARCH_CHANGE_IN_PROGRESS,
);

export const searchChangeSuccess = createAction(
  SEARCH_CHANGE_SUCCESS,
  (result: FindAllBlogPostsDto) => ({
    result,
  }),
);

export const searchChangeError = createAction(
  SEARCH_CHANGE_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Search By Date Range
export const searchByDateTime = createAction(
  SEARCH_BY_DATE_TIME,
  (dateRangeInput: DateRangeInputDto) => ({
    dateRangeInput,
  }),
);

export const searchByDateTimeInProgress = createAction(
  SEARCH_BY_DATE_TIME_IN_PROGRESS,
);

export const searchByDateTimeSuccess = createAction(
  SEARCH_BY_DATE_TIME_SUCCESS,
  (result: FindAllBlogPostsDto) => ({
    result,
  }),
);

export const searchByDateTimeError = createAction(
  SEARCH_BY_DATE_TIME_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Include Inactive Post
export const includeInactivePost = createAction(INCLUDE_INACTIVE_POST);
export const includeInactivePostInProgress = createAction(
  INCLUDE_INACTIVE_POST_IN_PROGRESS,
);
export const includeInactivePostSuccess = createAction(
  INCLUDE_INACTIVE_POST_SUCCESS
);
export const includeInactivePostError = createAction(
  INCLUDE_INACTIVE_POST_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);

// Exclude Inactive Post
export const excludeInactivePost = createAction(EXCLUDE_INACTIVE_POST);
export const excludeInactivePostInProgress = createAction(
  EXCLUDE_INACTIVE_POST_IN_PROGRESS,
);
export const excludeInactivePostSuccess = createAction(
  EXCLUDE_INACTIVE_POST_SUCCESS,
  (data: IFindBlogDetailDto[]) => ({
    data,
  }),
);
export const excludeInactivePostError = createAction(
  EXCLUDE_INACTIVE_POST_ERROR,
  (errorMessage: string) => ({
    errorMessage,
  }),
);
