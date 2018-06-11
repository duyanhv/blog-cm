import { put, all, takeEvery } from 'redux-saga/effects';
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
} from './action';
import { getErrorMessage, message } from '../../../helpers';

function* fetchDataWorker(_action: FetchData): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.find(name, subject, pageNumber, pageSize, sortBy, asc)

    // yield put(fetchDataSuccess());
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* filterChangeWorker(_action: FilterChange): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.find(name, subject, pageNumber, pageSize, sortBy, asc)

    // yield put(fetchDataSuccess());
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* searchChangeWorker(_action: SearchChange): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.find(name, subject, pageNumber, pageSize, sortBy, asc)

    // yield put(fetchDataSuccess());
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

function* createNewTeacherWorker(_action: CreateNewTeacher): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.create(teacherInfo: CreateTeacherInputDto)

    // yield put(createNewTeacherSuccess());
    message.success('Create New Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* updateTeacherWorker(_action: UpdateTeacher): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.create(teacherInfo: CreateTeacherInputDto)

    // yield put(updateTeacherSuccess());
    message.success('Create New Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* activateTeacherWorker(_action: ActivateTeacher): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.activate(teacherId)

    // yield put(activateTeacherSuccess());
    message.success('Activate Teacher Success', 1);
  } catch (error) {
    yield put(errorHappen(getErrorMessage(error)));
  }
}

function* deactivateTeacherWorker(_action: ActivateTeacher): any {
  try {
    yield put(starting());

    // Get teacher-service

    // Call teacher-service.deactivate(teacherId)

    // yield put(deactivateTeacherSuccess());
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
