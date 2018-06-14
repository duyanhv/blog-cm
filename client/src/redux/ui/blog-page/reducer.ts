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
  SearchChangeInProgress,
  SearchChangeSuccess,
  SearchChange,
  SEARCH_CHANGE,
  SearchChangeError,
  SEARCH_CHANGE_IN_PROGRESS,
  SEARCH_CHANGE_SUCCESS,
  SEARCH_CHANGE_ERROR,
  SearchByDateTime,
  SearchByDateTimeInProgress,
  SearchByDateTimeSuccess,
  SearchByDateTimeError,
  SEARCH_BY_DATE_TIME,
  SEARCH_BY_DATE_TIME_IN_PROGRESS,
  SEARCH_BY_DATE_TIME_SUCCESS,
  SEARCH_BY_DATE_TIME_ERROR,
  IncludeInactivePost,
  IncludeInactivePostInProgress,
  IncludeInactivePostSuccess,
  IncludeInactivePostError,
  INCLUDE_INACTIVE_POST,
  INCLUDE_INACTIVE_POST_IN_PROGRESS,
  INCLUDE_INACTIVE_POST_SUCCESS,
  INCLUDE_INACTIVE_POST_ERROR,
  ExcludeInactivePost,
  ExcludeInactivePostInProgress,
  ExcludeInactivePostSuccess,
  ExcludeInactivePostError,
  EXCLUDE_INACTIVE_POST_ERROR,
  EXCLUDE_INACTIVE_POST_SUCCESS,
  EXCLUDE_INACTIVE_POST_IN_PROGRESS,
  EXCLUDE_INACTIVE_POST,
  ChangeRadioButtonState,
  CHANGE_RADIO_BUTTON_STATE,
  ShowEditModal,
  HideEditModal,
  HIDE_EDIT_MODAL,
  SHOW_EDIT_MODAL
} from './action';
import { handleActions } from 'redux-actions';
import { message } from 'antd';

const staticRadioButtonValue = {
  addpost: 'addpost',
  allposts: 'allposts',
};

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
    showComponent: staticRadioButtonValue.allposts,
  };
};

const createNewPostErrorReducer = (
  state: BlogPageState,
  action: CreateNewPostError,
) => {
  message.error(action.payload.errorMessage, 1.5);
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
    searchByTitleData: action.payload.data,
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
    showEditModal: false,
  };
};

const editBlogDetailErrorReducer = (
  state: BlogPageState,
  action: EditBlogDetailError,
) => {
  message.error(action.payload.errorMessage, 1.5);
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const searchChangeReducer = (
  state: BlogPageState,
  action: SearchChange
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const searchChangeInProgressReducer = (
  state: BlogPageState,
  action: SearchChangeInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const searchChangeSuccessReducer = (
  state: BlogPageState,
  action: SearchChangeSuccess,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
    searchByTitleData: action.payload.result.data,
  };
};

const searchChangeErrorReducer = (
  state: BlogPageState,
  action: SearchChangeError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const searchByDateTimeReducer = (
  state: BlogPageState,
  action: SearchByDateTime
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
  };
};

const searchByDateTimeInProgressReducer = (
  state: BlogPageState,
  action: SearchByDateTimeInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const searchByDateTimeSuccessReducer = (
  state: BlogPageState,
  action: SearchByDateTimeSuccess,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: false,
    searchByTitleData: action.payload.result.data,
  };
};

const searchByDateTimeErrorReducer = (
  state: BlogPageState,
  action: SearchByDateTimeError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const includeInactivePostReducer = (
  state: BlogPageState,
  action: IncludeInactivePost,
) => {
  return {
    ...state,
    errorMessage: '',
  };
};

const includeInactivePostInProgressReducer = (
  state: BlogPageState,
  action: IncludeInactivePostInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const includeInactivePostSuccessReducer = (
  state: BlogPageState,
  action: IncludeInactivePostSuccess,
) => {
  return {
    ...state,
    searchByTitleData: state.data,
    errorMessage: '',
    isBusy: false,
  };
};

const includeInactivePostErrorReducer = (
  state: BlogPageState,
  action: IncludeInactivePostError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const excludeInactivePostReducer = (
  state: BlogPageState,
  action: ExcludeInactivePost,
) => {
  return {
    ...state,
    errorMessage: '',
  };
};

const excludeInactivePostInProgressReducer = (
  state: BlogPageState,
  action: ExcludeInactivePostInProgress,
) => {
  return {
    ...state,
    errorMessage: '',
    isBusy: true,
  };
};

const excludeInactivePostSuccessReducer = (
  state: BlogPageState,
  action: ExcludeInactivePostSuccess,
) => {
  return {
    ...state,
    searchByTitleData: action.payload.data,
    errorMessage: '',
    isBusy: false,
  };
};

const excludeInactivePostErrorReducer = (
  state: BlogPageState,
  action: ExcludeInactivePostError,
) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage,
    isBusy: false,
  };
};

const changeRadioButtonStateReducer = (
  state: BlogPageState,
  action: ChangeRadioButtonState,
) => {
  return {
    ...state,
    showComponent: action.payload.showComponent
  };
};

const hideEditModalReducer = (
  state: BlogPageState,
  action: HideEditModal,
) => {
  return{
    ...state,
    showEditModal: false
  };
};

const showEditModalReducer = (
  state: BlogPageState,
  action: ShowEditModal
) => {
  return{
    ...state,
    showEditModal: true,
  };
};

const blogPageReducer = handleActions<BlogPageState, any>(
  {
    [HIDE_EDIT_MODAL]: hideEditModalReducer,
    [SHOW_EDIT_MODAL]: showEditModalReducer,
    [CHANGE_RADIO_BUTTON_STATE]: changeRadioButtonStateReducer,
    [EXCLUDE_INACTIVE_POST]: excludeInactivePostReducer,
    [EXCLUDE_INACTIVE_POST_IN_PROGRESS]: excludeInactivePostInProgressReducer,
    [EXCLUDE_INACTIVE_POST_SUCCESS]: excludeInactivePostSuccessReducer,
    [EXCLUDE_INACTIVE_POST_ERROR]: excludeInactivePostErrorReducer,
    [INCLUDE_INACTIVE_POST]: includeInactivePostReducer,
    [INCLUDE_INACTIVE_POST_IN_PROGRESS]: includeInactivePostInProgressReducer,
    [INCLUDE_INACTIVE_POST_SUCCESS]: includeInactivePostSuccessReducer,
    [INCLUDE_INACTIVE_POST_ERROR]: includeInactivePostErrorReducer,
    [SEARCH_BY_DATE_TIME_IN_PROGRESS]: searchByDateTimeInProgressReducer,
    [SEARCH_BY_DATE_TIME_SUCCESS]: searchByDateTimeSuccessReducer,
    [SEARCH_BY_DATE_TIME_ERROR]: searchByDateTimeErrorReducer,
    [SEARCH_BY_DATE_TIME]: searchByDateTimeReducer,
    [SEARCH_CHANGE_IN_PROGRESS]: searchChangeInProgressReducer,
    [SEARCH_CHANGE_SUCCESS]: searchChangeSuccessReducer,
    [SEARCH_CHANGE_ERROR]: searchChangeErrorReducer,
    [SEARCH_CHANGE]: searchChangeReducer,
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
    searchByTitleData: [],
    showComponent: staticRadioButtonValue.allposts,
    showEditModal: false,
  },
);

export { blogPageReducer };
