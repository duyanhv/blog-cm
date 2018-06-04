import { blogPageReducer } from './reducer';
import blogPageSaga from './saga';
import {
  BlogPageAction,
  FETCH_POST_DETAIL,
  FETCH_POST_DETAIL_IN_PROGRESS,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_ERROR,
} from './action';

export {
  blogPageReducer,
  FETCH_POST_DETAIL,
  FETCH_POST_DETAIL_IN_PROGRESS,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_ERROR,
  blogPageSaga,
  BlogPageAction,
};
