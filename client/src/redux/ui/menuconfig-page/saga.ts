import {
    FetchAllMenuConfig,
    fetchAllMenuConfigInProgress,
    fetchAllMenuConfigSuccess,
    fetchAllMenuConfig,
    fetchMenuConfigById,
    FetchMenuConfigById,
    fetchMenuConfigByIdInProgress,
    fetchMenuConfigByIdSuccess,
    EditMenuConfigById,
    editMenuConfigByIdInProgress,
    editMenuConfigByIdSuccess,
    editMenuConfigById,
    SetMenuConfigStatus,
    setMenuConfigStatusInProgress,
    setMenuConfigStatusSuccess,
    setMenuConfigStatus,
    FetchParentIdData,
    fetchParentIdDataInProgress,
    fetchParentIdDataSuccess,
    fetchParentIdData,
    CreateMenuConfig,
    createMenuConfigInProgress,
    createMenuConfigSuccess,
    createMenuConfig
} from './action';
import { message } from '../../../helpers';
import { getMenuConfigService } from '../../../service-proxies/service.provider';
import { put, all, takeEvery } from 'redux-saga/effects';
import { UpdateMenuConfigDto, CreateMenuConfigDto } from '../../../service-proxies/service-proxies';

function* fetchAllMenuConfigWorker(action: FetchAllMenuConfig): any {
    try {
        const menuConfigService = getMenuConfigService();
        yield put(fetchAllMenuConfigInProgress());
        const listMenuConfig = yield menuConfigService.findAllMenuConfig();
        yield put(fetchAllMenuConfigSuccess(listMenuConfig.allMenuConfigData));
    } catch (error) {
        message.error(error, 1.5);
    }
}

function* fetchMenuConfigByIdWorker(action: FetchMenuConfigById): any {
    try {
        const menuConfigService = getMenuConfigService();
        const menuConfigData = yield menuConfigService.findMenuConfigById(action.payload.menuConfigId);
        yield put(fetchMenuConfigByIdInProgress());
        yield put(fetchMenuConfigByIdSuccess(menuConfigData));
    } catch (error) {
        message.error(error, 1.5);
    }
}

function* editMenuConfigByIdWorker(action: EditMenuConfigById): any {
    try {
        const menuConfigService = getMenuConfigService();
        yield put(editMenuConfigByIdInProgress());
        yield menuConfigService.updateMenuConfig(action.payload.editedMenuConfig as UpdateMenuConfigDto, action.payload.menuConfigId);
        yield put(editMenuConfigByIdSuccess());
    } catch (error) {
        message.error(error, 1.5);
    }
}

function* setMenuconfigStatusWorker(action: SetMenuConfigStatus): any {
    try {
        const menuConfigService = getMenuConfigService();
        yield put(setMenuConfigStatusInProgress());
        action.payload.activationStatus ?
            yield menuConfigService.deactivateMenuConfig(action.payload.id) :
            yield menuConfigService.activateMenuConfig(action.payload.id);
        yield put(setMenuConfigStatusSuccess());

        yield put(fetchAllMenuConfigInProgress());
        const listMenuConfig = yield menuConfigService.findAllMenuConfig();
        yield put(fetchAllMenuConfigSuccess(listMenuConfig.allMenuConfigData));
    } catch (error) {
        message.error(error, 1.5);
    }
}

function* fetchParentIdDataWorker(action: FetchParentIdData): any {
    try {
        const menuConfigService = getMenuConfigService();
        yield put(fetchParentIdDataInProgress());
        const parentIdData = yield menuConfigService.findparentidmenuconfig();
        yield put(fetchParentIdDataSuccess(parentIdData.parentIdData));
    } catch (error) {
        message.error(error, 1.5);
    }
}

function* createMenuConfigWorker(action: CreateMenuConfig): any {
    try {
        const menuConfigService = getMenuConfigService();
        yield put(createMenuConfigInProgress());
        yield menuConfigService.createMenuConfig(action.payload.newMenuConfig as CreateMenuConfigDto);
        yield put(createMenuConfigSuccess());
    } catch (error) {
        message.error(error, 1.5);
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* menuConfigPageSaga(): any {
    yield all([
        takeEvery(fetchAllMenuConfig, fetchAllMenuConfigWorker),
        takeEvery(fetchMenuConfigById, fetchMenuConfigByIdWorker),
        takeEvery(editMenuConfigById, editMenuConfigByIdWorker),
        takeEvery(setMenuConfigStatus, setMenuconfigStatusWorker),
        takeEvery(fetchParentIdData, fetchParentIdDataWorker),
        takeEvery(createMenuConfig, createMenuConfigWorker),
    ]);
}
