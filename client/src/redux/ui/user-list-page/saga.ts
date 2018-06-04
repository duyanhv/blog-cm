import { put, all, takeEvery, select } from 'redux-saga/effects';
import {
  fetchingError,
  FetchRoles,
  fetchRolesSuccess,
  FetchData,
  FilterChange,
  startFetching,
  fetchingSuccess,
  SearchChange,
  fetchData,
  filterChange,
  searchChange,
  fetchRoles,
  CreateNewUser,
  createNewUserSuccess,
  createNewUser,
  UpdateUser,
  updateUserSuccess,
  updateUser,
} from './action';
import { getErrorMessage, message } from '../../../helpers';
import {
  getRoleService,
  getUserService,
} from '../../../service-proxies/service.provider';
import { AppState } from '../..';
import UserListPageState from './state';

const getState = () => select<AppState>(state => state.ui.userListPage);

function* fetchRolesWorker(action: FetchRoles): any {
  try {
    const roleService = getRoleService();
    const result = yield roleService.find(
      undefined,
      undefined,
      1,
      10000,
      'name',
      true,
    );

    yield put(fetchRolesSuccess(result));
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* fetchDataWorker(action: FetchData): any {
  const state: UserListPageState = yield getState();

  try {
    yield put(startFetching(action.payload));

    const userService = getUserService();
    const result = yield userService.find(
      state.search,
      state.filter,
      action.payload.pageNumber,
      action.payload.pageSize,
      action.payload.sortBy,
      action.payload.asc,
    );

    yield put(fetchingSuccess(result));
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* filterChangeWorker(action: FilterChange): any {
  const state: UserListPageState = yield getState();

  try {
    yield put(startFetching({ filter: action.payload.filter }));

    const userService = getUserService();
    const result = yield userService.find(
      state.search,
      action.payload.filter,
      state.pageNumber,
      state.pageSize,
      state.sortBy,
      state.asc,
    );

    yield put(fetchingSuccess(result));
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* searchChangeWorker(action: SearchChange): any {
  const state: UserListPageState = yield getState();

  try {
    yield put(startFetching({ search: action.payload.search }));

    const userService = getUserService();
    const result = yield userService.find(
      action.payload.search,
      state.filter,
      state.pageNumber,
      state.pageSize,
      state.sortBy,
      state.asc,
    );

    yield put(fetchingSuccess(result));
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* createNewUserWorker(action: CreateNewUser): any {
  try {
    yield put(startFetching({}));

    const userService = getUserService();
    const newUser = yield userService.create(action.payload.userInfo);

    yield put(createNewUserSuccess(newUser));
    message.success('Create New User Success', 1);
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
  }
}

function* updateUserWorker(action: UpdateUser): any {
  try {
    yield put(startFetching({}));

    const userService = getUserService();
    yield userService.update(action.payload.userInfo);

    yield put(
      updateUserSuccess({
        ...action.payload.userInfo,
        fullName: [
          action.payload.userInfo.firstName,
          action.payload.userInfo.middleName,
          action.payload.userInfo.lastName,
        ].join(' '),
      } as any),
    );
    message.success('Update User Info Success', 1);
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* userListPageSaga(): any {
  yield all([
    takeEvery(fetchRoles, fetchRolesWorker),
    takeEvery(fetchData, fetchDataWorker),
    takeEvery(filterChange, filterChangeWorker),
    takeEvery(searchChange, searchChangeWorker),
    takeEvery(createNewUser, createNewUserWorker),
    takeEvery(updateUser, updateUserWorker),
  ]);
}
