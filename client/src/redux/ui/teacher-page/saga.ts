import { put, all, takeEvery, select } from 'redux-saga/effects';
import {
  FetchData,
  starting,
  errorHappen,
  fetchData,
  FilterChange,
  SearchChange,
  filterChange,
  searchChange,
  CreateNewTeacher,
  UpdateTeacher,
  createNewTeacher,
  updateTeacher,
  ActivateTeacher,
  activateTeacher,
  deactivateTeacher,
  fetchDataSuccess,
  createNewTeacherSuccess,
  updateTeacherSuccess,
  activateTeacherSuccess,
  deactivateTeacherSuccess,
} from './action';
import { getErrorMessage, message } from '../../../helpers';
import { getTeacherService } from '../../../service-proxies/service.provider';
import { TeacherPageState } from '.';
import { AppState } from '../..';

const getState = () => select<AppState>(state => state.ui.teacherPage);

function* fetchDataWorker(action: FetchData): any {
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    const result = yield teacherService.find(
      action.payload.name,
      action.payload.subject,
      action.payload.pageNumber,
      action.payload.pageSize,
      action.payload.sortBy,
      action.payload.asc
    );

    yield put(fetchDataSuccess(result));
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* filterChangeWorker(action: FilterChange): any {
  const state: TeacherPageState = yield getState();
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    const result = yield teacherService.find(
      state.name,
      action.payload.filter,
      state.pageNumber,
      state.pageSize,
      state.sortBy,
      state.asc
    );

    yield put(fetchDataSuccess(result));
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* searchChangeWorker(action: SearchChange): any {
  const state: TeacherPageState = yield getState();
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    const result = yield teacherService.find(
      action.payload.search,
      state.subject,
      state.pageNumber,
      state.pageSize,
      state.sortBy,
      state.asc
    );

    yield put(fetchDataSuccess(result));
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* createNewTeacherWorker(action: CreateNewTeacher): any {
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    const result = yield teacherService.create(action.payload.teacherInfo);

    yield put(createNewTeacherSuccess(result));
    message.success('Create New Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* updateTeacherWorker(action: UpdateTeacher): any {
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    const result = yield teacherService.update(action.payload.teacherInfo);

    yield put(updateTeacherSuccess(result));
    message.success('Create New Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* activateTeacherWorker(action: ActivateTeacher): any {
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    yield teacherService.activate(action.payload.teacherId);

    yield put(activateTeacherSuccess(action.payload.teacherId));
    message.success('Activate Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* deactivateTeacherWorker(action: ActivateTeacher): any {
  try {
    yield put(starting());

    const teacherService = getTeacherService();
    yield teacherService.deactivate(action.payload.teacherId);

    yield put(deactivateTeacherSuccess(action.payload.teacherId));
    message.success('Deactivate Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* teacherPageSaga(): any {
  yield all([
    takeEvery(fetchData, fetchDataWorker),
    takeEvery(filterChange, filterChangeWorker),
    takeEvery(searchChange, searchChangeWorker),
    takeEvery(createNewTeacher, createNewTeacherWorker),
    takeEvery(updateTeacher, updateTeacherWorker),
    takeEvery(activateTeacher, activateTeacherWorker),
    takeEvery(deactivateTeacher, deactivateTeacherWorker),
  ]);
}
