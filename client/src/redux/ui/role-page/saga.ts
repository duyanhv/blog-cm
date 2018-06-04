import { put, all, takeEvery, select } from 'redux-saga/effects';
import { getRoleService } from '../../../service-proxies/service.provider';
import { getErrorMessage, message } from '../../../helpers';
import {
  fetchingError,
  startFetching,
  fetchingSuccess,
  FilterChange,
  SearchChange,
  filterChange,
  searchChange,
  createRole,
  updateRole,
  deleteRole,
  CreateRole,
  UpdateRole,
  DeleteRole,
  createRoleSuccess,
  updateRoleSuccess,
  deleteRoleSuccess,
  fetchData,
  FetchData,
} from './action';
import { DeleteRoleDto } from '../../../service-proxies/service-proxies';
import { AppState } from '../../state';
import { RolePageState } from '.';

const getState = () => select<AppState>(state => state.ui.rolePage);

function* fetchDataWorker(action: FetchData): any {
  const state: RolePageState = yield getState();

  try {
    yield put(
      startFetching({
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        sortBy: action.payload.sortBy,
        asc: action.payload.asc,
      }),
    );

    const roleService = getRoleService();
    const result = yield roleService.find(
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
  const state: RolePageState = yield getState();

  try {
    yield put(startFetching({ filter: action.payload.filter }));

    const roleService = getRoleService();
    const result = yield roleService.find(
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
  const state: RolePageState = yield getState();

  try {
    yield put(startFetching({ search: action.payload.search }));

    const roleService = getRoleService();
    const result = yield roleService.find(
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

function* createRoleWorker(action: CreateRole): any {
  const state: RolePageState = yield getState();

  try {
    yield put(startFetching({}));

    const roleService = getRoleService();
    const newRole = yield roleService.create(state.currentRole);

    yield put(createRoleSuccess(newRole));
    message.success('Create New Role Successfully', 0.5);
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
  }
}

function* updateRoleWorker(action: UpdateRole): any {
  const state: RolePageState = yield getState();

  try {
    yield put(startFetching({}));

    const roleService = getRoleService();
    yield roleService.update(state.currentRole);

    yield put(updateRoleSuccess(state.currentRole));
    message.success('Update Role Successfully', 0.5);
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
  }
}

function* delteRoleWorker(action: DeleteRole): any {
  const state: RolePageState = yield getState();

  try {
    yield put(startFetching({}));

    const roleService = getRoleService();
    yield roleService.delete({ id: state.currentRole._id } as DeleteRoleDto);

    yield put(deleteRoleSuccess(state.currentRole));
    message.success('Delete Role Successfully', 0.5);
  } catch (error) {
    yield put(fetchingError(getErrorMessage(error)));
    message.error(getErrorMessage(error), 1.5);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* rolePageSaga(): any {
  yield all([
    takeEvery(fetchData, fetchDataWorker),
    takeEvery(filterChange, filterChangeWorker),
    takeEvery(searchChange, searchChangeWorker),
    takeEvery(createRole, createRoleWorker),
    takeEvery(updateRole, updateRoleWorker),
    takeEvery(deleteRole, delteRoleWorker),
  ]);
}
